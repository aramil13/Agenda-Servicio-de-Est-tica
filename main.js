document.addEventListener('DOMContentLoaded', () => {

    /* ═══════════════════════════════════════
       SUPABASE CLIENT
       ═══════════════════════════════════════ */
    const SUPABASE_URL = 'https://wqbrappajbrzanpymwtx.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_rxdHNZAUSQw-C8-BvzX4rA_9qH6GeL9';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    /* ═══════════════════════════════════════
       STATE
       ═══════════════════════════════════════ */
    const State = {
        clients: [],
        services: [],
        appointments: [],
        // Calendar state
        calYear: new Date().getFullYear(),
        calMonth: new Date().getMonth(),
        selectedDate: null,
        isLoading: false,
        // Monthly listing state
        monthlyYear: new Date().getFullYear(),
        monthlyMonth: new Date().getMonth(),
        // Auth state
        session: null,
        // Settings
        settings: {
            startTime: localStorage.getItem('nymara_start_time') || '09:00',
            endTime: localStorage.getItem('nymara_end_time') || '20:00'
        }
    };

    /* ═══════════════════════════════════════
       DOM REFERENCES
       ═══════════════════════════════════════ */
    const appContent = document.getElementById('app-content');
    const navItems = document.querySelectorAll('.nav-item');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const modalTitle = document.getElementById('modal-title');

    // Auth DOM
    const authScreen = document.getElementById('auth-screen');
    const appLayout = document.getElementById('app-layout');
    const authLoginForm = document.getElementById('auth-login-form');
    const authSubmitText = document.getElementById('auth-submit-text');
    const authSpinner = document.getElementById('auth-spinner');
    const authError = document.getElementById('auth-error');
    const authForgotLink = document.getElementById('auth-forgot-link');
    const userEmailEl = document.getElementById('user-email');
    const userAvatarEl = document.getElementById('user-avatar');
    const btnLogout = document.getElementById('btn-logout');



    /* ═══════════════════════════════════════
       HELPERS
       ═══════════════════════════════════════ */
    const generateId = () => crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substr(2, 9) + Date.now().toString(36);

    /** Returns 'YYYY-MM-DD' in local time */
    function toLocalDateStr(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    const WEEKDAY_NAMES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const MONTH_NAMES = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    /* ═══════════════════════════════════════
       TOAST NOTIFICATIONS
       ═══════════════════════════════════════ */
    function showToast(message, type = 'success') {
        // Remove existing toast
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /* ═══════════════════════════════════════
       SUPABASE DATA OPERATIONS
       ═══════════════════════════════════════ */

    /** Loads all data from Supabase into our local State cache */
    async function loadAllData() {
        State.isLoading = true;
        renderRoute();

        try {
            const [clientsRes, servicesRes, appointmentsRes] = await Promise.all([
                supabase.from('clients').select('*').order('name'),
                supabase.from('services').select('*').order('name'),
                supabase.from('appointments').select('*').order('date').order('time'),
            ]);

            if (clientsRes.error) throw clientsRes.error;
            if (servicesRes.error) throw servicesRes.error;
            if (appointmentsRes.error) throw appointmentsRes.error;

            State.clients = clientsRes.data;
            State.services = servicesRes.data;
            // Map DB snake_case to JS camelCase for appointments
            State.appointments = appointmentsRes.data.map(a => ({
                id: a.id,
                clientId: a.client_id,
                serviceId: a.service_id,
                date: a.date,
                time: a.time.substring(0, 5), // "HH:MM:SS" → "HH:MM"
                notes: a.notes || '',
            }));

        } catch (err) {
            console.error('Error loading data from Supabase:', err);
            showToast('Error al cargar datos: ' + (err.message || err), 'error');
        } finally {
            State.isLoading = false;
            renderRoute();
        }
    }

    /* ═══════════════════════════════════════
       AUTHENTICATION LOGIC
       ═══════════════════════════════════════ */

    // Check existing session
    async function checkSession() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error('Error checking session:', error);
            return;
        }
        handleSessionUpdate(session);

        // Listen for auth changes
        supabase.auth.onAuthStateChange((_event, newSession) => {
            handleSessionUpdate(newSession);
        });
    }

    function handleSessionUpdate(session) {
        State.session = session;
        if (session) {
            // Logged in
            authScreen.style.display = 'none';
            appLayout.style.display = 'flex';
            
            // Update sidebar user profile
            const email = session.user.email;
            if (userEmailEl) userEmailEl.textContent = email;
            if (userAvatarEl) userAvatarEl.textContent = email.charAt(0).toUpperCase();

            // Load data only if it's the first time we realize we are logged in
            if (State.clients.length === 0 && !State.isLoading) {
                navigate('agenda');
                loadAllData();
            }
        } else {
            // Logged out
            authScreen.style.display = 'flex';
            appLayout.style.display = 'none';
            resetAuthState();
        }
    }

    function resetAuthState() {
        authLoginForm.reset();
        authError.style.display = 'none';
    }

    // Handle Auth form submit
    if (authLoginForm) {
        authLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            authError.style.display = 'none';
            
            const email = document.getElementById('auth-email').value;
            const password = document.getElementById('auth-password').value;
            
            // UI Loading state
            authSubmitText.style.opacity = '0';
            authSpinner.style.display = 'block';
            const btn = document.getElementById('auth-submit-btn');
            btn.disabled = true;

            try {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                // Supabase automatically updates the session via onAuthStateChange listener
            } catch (err) {
                authError.textContent = err.message || 'Error en la autenticación';
                authError.style.display = 'block';
            } finally {
                authSubmitText.style.opacity = '1';
                authSpinner.style.display = 'none';
                btn.disabled = false;
            }
        });
    }

    // Logout button
    if (btnLogout) {
        btnLogout.addEventListener('click', async () => {
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                await supabase.auth.signOut();
                // State resetting data if necessary
                State.clients = [];
                State.services = [];
                State.appointments = [];
            }
        });
    }



    // ── Clients CRUD ──

    async function addClient(data) {
        const { error } = await supabase.from('clients').insert([data]);
        if (error) { showToast('Error al añadir cliente: ' + error.message, 'error'); return false; }
        State.clients.push(data);
        showToast('Cliente añadido correctamente');
        return true;
    }

    async function updateClient(data) {
        const { error } = await supabase.from('clients').update({ name: data.name, phone: data.phone, email: data.email, notes: data.notes }).eq('id', data.id);
        if (error) { showToast('Error al actualizar cliente: ' + error.message, 'error'); return false; }
        State.clients = State.clients.map(c => c.id === data.id ? data : c);
        showToast('Cliente actualizado correctamente');
        return true;
    }

    async function deleteClient(id) {
        const { error } = await supabase.from('clients').delete().eq('id', id);
        if (error) { showToast('Error al eliminar cliente: ' + error.message, 'error'); return false; }
        State.clients = State.clients.filter(c => c.id !== id);
        showToast('Cliente eliminado');
        return true;
    }

    // ── Services CRUD ──

    async function addService(data) {
        const { error } = await supabase.from('services').insert([data]);
        if (error) { showToast('Error al añadir servicio: ' + error.message, 'error'); return false; }
        State.services.push(data);
        showToast('Servicio añadido correctamente');
        return true;
    }

    async function updateService(data) {
        const { error } = await supabase.from('services').update({ name: data.name, duration: data.duration, price: data.price }).eq('id', data.id);
        if (error) { showToast('Error al actualizar servicio: ' + error.message, 'error'); return false; }
        State.services = State.services.map(s => s.id === data.id ? data : s);
        showToast('Servicio actualizado correctamente');
        return true;
    }

    async function deleteService(id) {
        const { error } = await supabase.from('services').delete().eq('id', id);
        if (error) { showToast('Error al eliminar servicio: ' + error.message, 'error'); return false; }
        State.services = State.services.filter(s => s.id !== id);
        showToast('Servicio eliminado');
        return true;
    }

    // ── Appointments CRUD ──

    async function addAppointment(data) {
        // Map JS camelCase to DB snake_case
        const dbRow = {
            id: data.id,
            client_id: data.clientId,
            service_id: data.serviceId,
            date: data.date,
            time: data.time,
            notes: data.notes,
        };
        const { error } = await supabase.from('appointments').insert([dbRow]);
        if (error) { showToast('Error al agendar cita: ' + error.message, 'error'); return false; }
        State.appointments.push(data);
        showToast('Cita agendada correctamente');
        return true;
    }

    async function deleteAppointment(id) {
        const { error } = await supabase.from('appointments').delete().eq('id', id);
        if (error) { showToast('Error al cancelar cita: ' + error.message, 'error'); return false; }
        State.appointments = State.appointments.filter(a => a.id !== id);
        showToast('Cita cancelada');
        return true;
    }

    /* ═══════════════════════════════════════
       ROUTING
       ═══════════════════════════════════════ */
    let currentRoute = 'agenda';

    function navigate(route) {
        currentRoute = route;
        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.target === route);
        });
        renderRoute();
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => navigate(item.dataset.target));
    });

    /* ═══════════════════════════════════════
       MODAL
       ═══════════════════════════════════════ */
    function openModal(title, htmlContent, onMount) {
        modalTitle.textContent = title;
        modalBody.innerHTML = htmlContent;
        modalOverlay.classList.add('active');
        if (onMount) onMount();
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        setTimeout(() => (modalBody.innerHTML = ''), 300);
    }

    btnCloseModal.addEventListener('click', closeModal);

    // Track where mousedown started to prevent accidental closes
    // when user clicks inside modal and drags to overlay before releasing
    let overlayMouseDownTarget = null;
    modalOverlay.addEventListener('mousedown', e => {
        overlayMouseDownTarget = e.target;
    });
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay && overlayMouseDownTarget === modalOverlay) {
            closeModal();
        }
        overlayMouseDownTarget = null;
    });

    /* ═══════════════════════════════════════
       RENDER DISPATCHER
       ═══════════════════════════════════════ */
    function renderRoute() {
        if (State.isLoading) {
            appContent.innerHTML = `
                <div class="fade-in" style="display:flex;align-items:center;justify-content:center;height:60vh;flex-direction:column;gap:1rem;">
                    <div class="loading-spinner"></div>
                    <p style="color:var(--text-secondary);font-size:1.1rem;">Conectando con Supabase…</p>
                </div>`;
            return;
        }

        let content = '';
        if (currentRoute === 'agenda') content = getAgendaView();
        else if (currentRoute === 'clients') content = getClientsView();
        else if (currentRoute === 'services') content = getServicesView();
        else if (currentRoute === 'monthly') content = getMonthlyView();

        appContent.innerHTML = `<div class="fade-in">${content}</div>`;
        attachEvents();
    }

    /* ═══════════════════════════════════════
       CALENDAR HELPERS
       ═══════════════════════════════════════ */
    function getCalendarDays(year, month) {
        const firstDay = new Date(year, month, 1);
        let startWeekday = firstDay.getDay(); // 0=Sun
        startWeekday = startWeekday === 0 ? 6 : startWeekday - 1; // Convert to Mon=0

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const days = [];

        // Previous month trailing days
        for (let i = startWeekday - 1; i >= 0; i--) {
            const d = prevMonthDays - i;
            const dt = new Date(year, month - 1, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: false });
        }

        // Current month days
        for (let d = 1; d <= daysInMonth; d++) {
            const dt = new Date(year, month, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: true });
        }

        // Fill remaining to complete grid (6 rows max)
        const remaining = 42 - days.length;
        for (let d = 1; d <= remaining; d++) {
            const dt = new Date(year, month + 1, d);
            days.push({ date: dt, dateStr: toLocalDateStr(dt), currentMonth: false });
        }

        return days;
    }

    function getAppointmentsForDate(dateStr) {
        return State.appointments
            .filter(a => a.date === dateStr)
            .sort((a, b) => a.time.localeCompare(b.time));
    }

    /* ═══════════════════════════════════════
       AGENDA VIEW  (Calendar + Day Detail)
       ═══════════════════════════════════════ */
    function getAgendaView() {
        const todayStr = toLocalDateStr(new Date());
        const todaysAppointments = getAppointmentsForDate(todayStr);

        // Calendar grid
        const days = getCalendarDays(State.calYear, State.calMonth);
        const monthLabel = `${MONTH_NAMES[State.calMonth]} ${State.calYear}`;

        let calCells = '';
        days.forEach(day => {
            const apts = getAppointmentsForDate(day.dateStr);
            const isToday = day.dateStr === todayStr;
            const isSelected = day.dateStr === State.selectedDate;
            const classes = [
                'cal-day',
                !day.currentMonth ? 'other-month' : '',
                isToday ? 'today' : '',
                isSelected ? 'today' : '' // reuse style for selection highlight
            ].filter(Boolean).join(' ');

            let eventsHtml = '';
            const maxShow = 2;
            apts.slice(0, maxShow).forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId);
                const cName = client ? client.name.split(' ')[0] : '??';
                eventsHtml += `<span class="cal-event">${apt.time} ${cName}</span>`;
            });
            if (apts.length > maxShow) {
                eventsHtml += `<span class="cal-more">+${apts.length - maxShow} más</span>`;
            }

            calCells += `
                <div class="${classes}" data-date="${day.dateStr}">
                    <span class="cal-day-number">${day.date.getDate()}</span>
                    ${eventsHtml}
                </div>`;
        });

        // Day detail panel
        const detailDate = State.selectedDate || todayStr;
        const detailApts = getAppointmentsForDate(detailDate);
        const detailDateObj = new Date(detailDate + 'T00:00:00');
        const detailLabel = detailDateObj.toLocaleDateString('es-ES', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
        });

        let detailHtml = '';
        if (detailApts.length === 0) {
            detailHtml = `
                <div class="empty-state" style="padding:2rem">
                    <p>No hay citas para este día.</p>
                </div>`;
        } else {
            detailHtml = `<div class="day-detail-list">`;
            detailApts.forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
                const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Eliminado', duration: 0 };
                const endTime = new Date(new Date(`${apt.date}T${apt.time}`).getTime() + (service.duration || 0) * 60000);
                const endStr = endTime.toTimeString().substring(0, 5);

                detailHtml += `
                    <div class="day-detail-item">
                        <div class="day-detail-time">${apt.time} – ${endStr}</div>
                        <div class="day-detail-info">
                            <strong>${client.name}</strong>
                            <span>${service.name} · ${service.duration} min ${client.notes ? `<small style="color:var(--accent-primary); font-weight:500">(${client.notes})</small>` : ''}${apt.notes ? ' · ' + apt.notes : ''}</span>
                        </div>
                        <div class="day-detail-actions">
                            <button class="delete-btn" data-id="${apt.id}" title="Eliminar cita">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    </div>`;
            });
            detailHtml += `</div>`;
        }

        const [startH, startM] = State.settings.startTime.split(':').map(Number);
        const [endH, endM] = State.settings.endTime.split(':').map(Number);
        const startDayMins = startH * 60 + startM;
        const endDayMins = endH * 60 + endM;
        const totalMinutes = endDayMins - startDayMins;
        
        let timelineHtml = '<div class="timeline-wrapper">';
        timelineHtml += `<div class="timeline-header"><span>${State.settings.startTime}</span><span>${State.settings.endTime}</span></div>`;
        timelineHtml += '<div class="timeline-bar" title="Horario comercial para este día">';
        
        if (totalMinutes > 0) {
            let cursorMins = startDayMins;
            const bgPalette = [
                'linear-gradient(135deg, #8b5cf6, #d946ef)', // Purple
                'linear-gradient(135deg, #3b82f6, #2dd4bf)', // Blue to Teal
                'linear-gradient(135deg, #ec4899, #f43f5e)', // Pink to Rose
                'linear-gradient(135deg, #f59e0b, #ea580c)', // Amber to Orange
                'linear-gradient(135deg, #6366f1, #a855f7)'  // Indigo to Purple
            ];

            detailApts.forEach((apt, idx) => {
                const [h, m] = apt.time.split(':').map(Number);
                const aptStart = h * 60 + m;
                const aptServ = State.services.find(s => s.id === apt.serviceId);
                const aptDur = aptServ ? parseInt(aptServ.duration) : 0;
                const aptEnd = aptStart + aptDur;

                const clippedStart = Math.max(startDayMins, aptStart);
                const clippedEnd = Math.min(endDayMins, aptEnd);

                if (clippedStart > cursorMins) {
                    const pct = ((clippedStart - cursorMins) / totalMinutes) * 100;
                    const stH_str = Math.floor(cursorMins / 60).toString().padStart(2, '0');
                    const stM_str = (cursorMins % 60).toString().padStart(2, '0');
                    const endH_str = Math.floor(clippedStart / 60).toString().padStart(2, '0');
                    const endM_str = (clippedStart % 60).toString().padStart(2, '0');
                    timelineHtml += `<div class="timeline-segment free" style="width:${pct}%;" title="Libre: ${stH_str}:${stM_str} - ${endH_str}:${endM_str}"></div>`;
                }
                
                if (clippedEnd > clippedStart) {
                    const pct = ((clippedEnd - clippedStart) / totalMinutes) * 100;
                    const [stH_str, stM_str] = [Math.floor(clippedStart / 60).toString().padStart(2, '0'), (clippedStart % 60).toString().padStart(2, '0')];
                    const [endH_str, endM_str] = [Math.floor(clippedEnd / 60).toString().padStart(2, '0'), (clippedEnd % 60).toString().padStart(2, '0')];
                    const bgOption = bgPalette[idx % bgPalette.length];
                    timelineHtml += `<div class="timeline-segment booked" style="width:${pct}%; background: ${bgOption}; border-left: 1px solid rgba(255,255,255,0.4); border-right: 1px solid rgba(255,255,255,0.4);" title="Ocupado: ${stH_str}:${stM_str} - ${endH_str}:${endM_str}"></div>`;
                }

                cursorMins = Math.max(cursorMins, clippedEnd);
            });
            
            if (cursorMins < endDayMins) {
                const pct = ((endDayMins - cursorMins) / totalMinutes) * 100;
                const stH_str = Math.floor(cursorMins / 60).toString().padStart(2, '0');
                const stM_str = (cursorMins % 60).toString().padStart(2, '0');
                const endH_str = Math.floor(endDayMins / 60).toString().padStart(2, '0');
                const endM_str = (endDayMins % 60).toString().padStart(2, '0');
                timelineHtml += `<div class="timeline-segment free" style="width:${pct}%;" title="Libre: ${stH_str}:${stM_str} - ${endH_str}:${endM_str}"></div>`;
            }
        }
        timelineHtml += '</div>';
        timelineHtml += `
            <div class="timeline-legend">
                <div class="legend-item"><span class="legend-color free-color"></span> Libre</div>
                <div class="legend-item"><span class="legend-color booked-color"></span> Ocupado</div>
            </div>
        </div>`;

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Agenda</h1>
                    <p style="color:var(--text-secondary)">Calendario de citas · <span class="supabase-badge">⚡ Supabase</span></p>
                </div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                    <button class="btn btn-secondary" id="btn-settings" title="Configurar Horario">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Horas
                    </button>
                    <button class="btn btn-primary" id="btn-add-appointment">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Nueva Cita
                    </button>
                </div>
            </div>

            <!-- Stats -->
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Citas Hoy</h3><p>${todaysAppointments.length}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Clientes</h3><p>${State.clients.length}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Servicios</h3><p>${State.services.length}</p></div>
                </div>
            </div>

            <!-- Calendar -->
            <div class="calendar-wrapper">
                <div class="calendar-nav">
                    <button id="cal-prev">◀</button>
                    <h2>${monthLabel}</h2>
                    <button id="cal-next">▶</button>
                </div>
                <div class="calendar-grid">
                    ${WEEKDAY_NAMES.map(n => `<div class="cal-header">${n}</div>`).join('')}
                    ${calCells}
                </div>
            </div>

            <!-- Day Detail -->
            <div class="day-detail">
                <h3>📋 ${detailLabel}</h3>
                ${timelineHtml}
                ${detailHtml}
            </div>
        `;
    }

    /* ═══════════════════════════════════════
       CLIENTS VIEW
       ═══════════════════════════════════════ */
    function getClientsView() {
        let rows = '';
        if (State.clients.length === 0) {
            rows = `
            <div class="empty-state data-card">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <h3>No hay clientes registrados</h3>
                <p>Añade tu primer cliente pulsando el botón superior.</p>
            </div>`;
        } else {
            rows = `
            <div class="data-card">
                <table class="table">
                    <thead><tr><th>Nombre</th><th>Teléfono</th><th>Email</th><th>Observaciones</th><th>Acciones</th></tr></thead>
                    <tbody>
                    ${State.clients.map(c => `
                        <tr>
                            <td style="font-weight:600">${c.name}</td>
                            <td>${c.phone || '—'}</td>
                            <td>${c.email || '—'}</td>
                            <td class="col-observaciones">${c.notes || '—'}</td>
                            <td>
                                <div class="actions">
                                    <button class="edit-btn" data-id="${c.id}" data-type="client" title="Editar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                    <button class="delete-btn" data-id="${c.id}" data-type="client" title="Eliminar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>`;
        }

        return `
            <div class="section-header">
                <div><h1 class="section-title">Clientes</h1><p style="color:var(--text-secondary)">Base de datos de clientes · <span class="supabase-badge">⚡ Supabase</span></p></div>
                <button class="btn btn-primary" id="btn-add-client">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Cliente
                </button>
            </div>
            ${rows}`;
    }

    /* ═══════════════════════════════════════
       SERVICES VIEW
       ═══════════════════════════════════════ */
    function getServicesView() {
        let rows = '';
        if (State.services.length === 0) {
            rows = `
            <div class="empty-state data-card">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                <h3>No hay servicios registrados</h3>
                <p>Define los servicios que ofreces a tus clientes.</p>
            </div>`;
        } else {
            rows = `
            <div class="data-card">
                <table class="table">
                    <thead><tr><th>Servicio</th><th>Duración</th><th>Precio</th><th>Acciones</th></tr></thead>
                    <tbody>
                    ${State.services.map(s => `
                        <tr>
                            <td style="font-weight:600">${s.name}</td>
                            <td>${s.duration} min</td>
                            <td>${parseFloat(s.price).toFixed(2)} €</td>
                            <td>
                                <div class="actions">
                                    <button class="edit-btn" data-id="${s.id}" data-type="service" title="Editar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                    <button class="delete-btn" data-id="${s.id}" data-type="service" title="Eliminar">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>`;
        }

        return `
            <div class="section-header">
                <div><h1 class="section-title">Servicios</h1><p style="color:var(--text-secondary)">Catálogo de servicios · <span class="supabase-badge">⚡ Supabase</span></p></div>
                <button class="btn btn-primary" id="btn-add-service">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Servicio
                </button>
            </div>
            ${rows}`;
    }

    /* ═══════════════════════════════════════
       MONTHLY LISTING VIEW
       ═══════════════════════════════════════ */
    function getMonthlyView() {
        const year = State.monthlyYear;
        const month = State.monthlyMonth;
        const monthLabel = `${MONTH_NAMES[month]} ${year}`;

        // Filter appointments for the selected month
        const monthStr = String(month + 1).padStart(2, '0');
        const prefix = `${year}-${monthStr}`;
        const monthAppointments = State.appointments
            .filter(a => a.date.startsWith(prefix))
            .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

        // Summary stats
        const totalCitas = monthAppointments.length;
        let totalIngresos = 0;
        let totalMinutos = 0;
        const clientesUnicos = new Set();
        monthAppointments.forEach(apt => {
            const service = State.services.find(s => s.id === apt.serviceId);
            if (service) {
                totalIngresos += parseFloat(service.price) || 0;
                totalMinutos += parseInt(service.duration) || 0;
            }
            clientesUnicos.add(apt.clientId);
        });
        const totalHoras = Math.floor(totalMinutos / 60);
        const remainMin = totalMinutos % 60;

        // Group appointments by day for visual separators
        let tableRows = '';
        if (monthAppointments.length === 0) {
            tableRows = `
                <tr>
                    <td colspan="6" style="text-align:center;padding:3rem;color:var(--text-secondary)">
                        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom:0.75rem;opacity:0.35;display:block;margin-left:auto;margin-right:auto;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                        No hay citas registradas en este mes.
                    </td>
                </tr>`;
        } else {
            let lastDate = '';
            monthAppointments.forEach((apt, idx) => {
                const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Eliminado' };
                const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Eliminado', duration: 0, price: 0 };
                const endTime = new Date(new Date(`${apt.date}T${apt.time}`).getTime() + (service.duration || 0) * 60000);
                const endStr = endTime.toTimeString().substring(0, 5);

                // Date label for grouping
                const dateObj = new Date(apt.date + 'T00:00:00');
                const dayLabel = dateObj.toLocaleDateString('es-ES', {
                    weekday: 'long', day: 'numeric', month: 'long'
                });

                if (apt.date !== lastDate) {
                    const dayCount = monthAppointments.filter(a => a.date === apt.date).length;
                    tableRows += `
                        <tr class="monthly-date-row">
                            <td colspan="6">
                                <span class="monthly-date-label">${dayLabel}</span>
                                <span class="monthly-date-count">${dayCount} cita${dayCount !== 1 ? 's' : ''}</span>
                            </td>
                        </tr>`;
                    lastDate = apt.date;
                }

                tableRows += `
                    <tr class="monthly-apt-row">
                        <td class="monthly-time-cell">
                            <span class="monthly-time">${apt.time}</span>
                            <span class="monthly-time-end">– ${endStr}</span>
                        </td>
                        <td style="font-weight:600">${client.name}</td>
                        <td>
                            <span class="monthly-service-badge">${service.name}</span>
                        </td>
                        <td>${service.duration} min</td>
                        <td style="font-weight:600">${parseFloat(service.price).toFixed(2)} €</td>
                        <td style="color:var(--text-secondary);font-size:0.85rem;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${apt.notes || '—'}</td>
                    </tr>`;
            });
        }

        // Build month selector options
        let monthOptions = '';
        MONTH_NAMES.forEach((name, i) => {
            monthOptions += `<option value="${i}" ${i === month ? 'selected' : ''}>${name}</option>`;
        });

        // Year options (current year ± 2)
        const currentYear = new Date().getFullYear();
        let yearOptions = '';
        for (let y = currentYear - 2; y <= currentYear + 2; y++) {
            yearOptions += `<option value="${y}" ${y === year ? 'selected' : ''}>${y}</option>`;
        }

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Listado Mensual</h1>
                    <p style="color:var(--text-secondary)">Detalle de citas por mes · <span class="supabase-badge">⚡ Supabase</span></p>
                </div>
                <button class="btn btn-primary" id="btn-print-monthly">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                    Imprimir
                </button>
            </div>

            <!-- Month/Year Selector -->
            <div class="monthly-controls">
                <button class="cal-nav-btn" id="monthly-prev">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <div class="monthly-selectors">
                    <select class="form-control monthly-select" id="monthly-month-select">
                        ${monthOptions}
                    </select>
                    <select class="form-control monthly-select" id="monthly-year-select">
                        ${yearOptions}
                    </select>
                </div>
                <button class="cal-nav-btn" id="monthly-next">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <!-- Summary Cards -->
            <div class="stats-row monthly-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Total Citas</h3><p>${totalCitas}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Clientes Únicos</h3><p>${clientesUnicos.size}</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Tiempo Total</h3><p>${totalHoras}h ${remainMin}m</p></div>
                </div>
                <div class="stat-card stat-card-highlight">
                    <div class="stat-icon stat-icon-highlight">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Ingresos Estimados</h3><p>${totalIngresos.toFixed(2)} €</p></div>
                </div>
            </div>

            <!-- Listing Table -->
            <div class="data-card monthly-table-card" id="monthly-print-area">
                <div class="monthly-table-header">
                    <h3>📋 ${monthLabel}</h3>
                    <span class="monthly-count-badge">${totalCitas} cita${totalCitas !== 1 ? 's' : ''}</span>
                </div>
                <table class="table monthly-table">
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Cliente</th>
                            <th>Servicio</th>
                            <th>Duración</th>
                            <th>Precio</th>
                            <th>Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        `;
    }

    /* ═══════════════════════════════════════
       EVENT BINDING
       ═══════════════════════════════════════ */
    function attachEvents() {
        // Add buttons
        const btnAddAppt = document.getElementById('btn-add-appointment');
        if (btnAddAppt) btnAddAppt.addEventListener('click', showAppointmentForm);

        const btnSettings = document.getElementById('btn-settings');
        if (btnSettings) btnSettings.addEventListener('click', showSettingsForm);

        const btnAddClient = document.getElementById('btn-add-client');
        if (btnAddClient) btnAddClient.addEventListener('click', () => showClientForm());

        const btnAddService = document.getElementById('btn-add-service');
        if (btnAddService) btnAddService.addEventListener('click', () => showServiceForm());

        // Monthly listing controls
        const monthlyPrev = document.getElementById('monthly-prev');
        const monthlyNext = document.getElementById('monthly-next');
        const monthlyMonthSel = document.getElementById('monthly-month-select');
        const monthlyYearSel = document.getElementById('monthly-year-select');

        if (monthlyPrev) monthlyPrev.addEventListener('click', () => {
            State.monthlyMonth--;
            if (State.monthlyMonth < 0) { State.monthlyMonth = 11; State.monthlyYear--; }
            renderRoute();
        });
        if (monthlyNext) monthlyNext.addEventListener('click', () => {
            State.monthlyMonth++;
            if (State.monthlyMonth > 11) { State.monthlyMonth = 0; State.monthlyYear++; }
            renderRoute();
        });
        if (monthlyMonthSel) monthlyMonthSel.addEventListener('change', e => {
            State.monthlyMonth = parseInt(e.target.value);
            renderRoute();
        });
        if (monthlyYearSel) monthlyYearSel.addEventListener('change', e => {
            State.monthlyYear = parseInt(e.target.value);
            renderRoute();
        });

        // Print monthly listing
        const btnPrint = document.getElementById('btn-print-monthly');
        if (btnPrint) btnPrint.addEventListener('click', () => {
            window.print();
        });

        // Calendar navigation
        const btnPrev = document.getElementById('cal-prev');
        const btnNext = document.getElementById('cal-next');
        if (btnPrev) btnPrev.addEventListener('click', () => {
            State.calMonth--;
            if (State.calMonth < 0) { State.calMonth = 11; State.calYear--; }
            renderRoute();
        });
        if (btnNext) btnNext.addEventListener('click', () => {
            State.calMonth++;
            if (State.calMonth > 11) { State.calMonth = 0; State.calYear++; }
            renderRoute();
        });

        // Calendar day click
        document.querySelectorAll('.cal-day').forEach(dayEl => {
            dayEl.addEventListener('click', () => {
                State.selectedDate = dayEl.dataset.date;
                renderRoute();
            });
        });

        // Delete buttons (now async)
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                const id = e.currentTarget.dataset.id;
                const type = e.currentTarget.dataset.type;
                if (type === 'client') {
                    if (confirm('¿Eliminar este cliente? Se eliminarán también sus citas.')) {
                        if (await deleteClient(id)) renderRoute();
                    }
                } else if (type === 'service') {
                    if (confirm('¿Eliminar este servicio? Se eliminarán también las citas asociadas.')) {
                        if (await deleteService(id)) renderRoute();
                    }
                } else {
                    if (confirm('¿Cancelar esta cita?')) {
                        if (await deleteAppointment(id)) renderRoute();
                    }
                }
            });
        });

        // Edit buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                const id = e.currentTarget.dataset.id;
                const type = e.currentTarget.dataset.type;
                if (type === 'client') showClientForm(State.clients.find(c => c.id === id));
                else if (type === 'service') showServiceForm(State.services.find(s => s.id === id));
            });
        });
    }

    /* ═══════════════════════════════════════
       FORMS (now async submit handlers)
       ═══════════════════════════════════════ */
    function showClientForm(info = null) {
        const isEdit = !!info;
        const html = `
            <form id="client-form">
                <div class="form-group">
                    <label>Nombre y Apellidos</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" value="${isEdit ? info.phone : ''}">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" value="${isEdit ? info.email : ''}">
                </div>
                <div class="form-group">
                    <label>Observaciones</label>
                    <textarea class="form-control" name="notes" rows="2" placeholder="Información importante...">${isEdit ? (info.notes || '') : ''}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Cliente' : 'Nuevo Cliente', html, () => {
            document.getElementById('client-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const data = { id: isEdit ? info.id : generateId(), name: fd.get('name'), phone: fd.get('phone'), email: fd.get('email'), notes: fd.get('notes') };

                let success;
                if (isEdit) success = await updateClient(data);
                else success = await addClient(data);

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
        });
    }

    function showServiceForm(info = null) {
        const isEdit = !!info;
        const html = `
            <form id="service-form">
                <div class="form-group">
                    <label>Nombre del Servicio</label>
                    <input type="text" class="form-control" name="name" required value="${isEdit ? info.name : ''}">
                </div>
                <div class="form-group">
                    <label>Duración (minutos)</label>
                    <input type="number" class="form-control" name="duration" min="5" step="5" required value="${isEdit ? info.duration : '30'}">
                </div>
                <div class="form-group">
                    <label>Precio (€)</label>
                    <input type="number" class="form-control" name="price" min="0" step="0.01" required value="${isEdit ? info.price : '0'}">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Servicio' : 'Nuevo Servicio', html, () => {
            document.getElementById('service-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const data = { id: isEdit ? info.id : generateId(), name: fd.get('name'), duration: parseInt(fd.get('duration')), price: parseFloat(fd.get('price')) };

                let success;
                if (isEdit) success = await updateService(data);
                else success = await addService(data);

                if (success) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = isEdit ? 'Guardar' : 'Añadir'; }
            });
        });
    }

    function showSettingsForm() {
        const html = `
            <form id="settings-form">
                <div class="form-group">
                    <label>Hora de Apertura</label>
                    <input type="time" class="form-control" name="startTime" required value="${State.settings.startTime}">
                </div>
                <div class="form-group">
                    <label>Hora de Cierre</label>
                    <input type="time" class="form-control" name="endTime" required value="${State.settings.endTime}">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar Horario</button>
                </div>
            </form>`;

        openModal('Configurar Horario', html, () => {
            document.getElementById('settings-form').addEventListener('submit', e => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const start = fd.get('startTime');
                const end = fd.get('endTime');

                if (start >= end) {
                    showToast('La hora de cierre debe ser posterior a la de apertura.', 'error');
                    return;
                }

                State.settings.startTime = start;
                State.settings.endTime = end;
                localStorage.setItem('nymara_start_time', start);
                localStorage.setItem('nymara_end_time', end);
                
                showToast('Horario actualizado correctamente.');
                closeModal();
            });
        });
    }

    function findNextAvailableTime(dateStr, durationMinutes) {
        const [startH, startM] = State.settings.startTime.split(':').map(Number);
        const [endH, endM] = State.settings.endTime.split(':').map(Number);
        
        let startMins = startH * 60 + startM;
        const endMins = endH * 60 + endM;

        const dayApts = State.appointments
            .filter(a => a.date === dateStr)
            .sort((a, b) => a.time.localeCompare(b.time));

        for (const apt of dayApts) {
            const [h, m] = apt.time.split(':').map(Number);
            const aptStart = h * 60 + m;
            const aptServ = State.services.find(s => s.id === apt.serviceId);
            const aptDur = aptServ ? parseInt(aptServ.duration) : 0;
            const aptEnd = aptStart + aptDur;

            if (startMins + durationMinutes <= aptStart) {
                break;
            }
            if (startMins < aptEnd) {
                startMins = aptEnd;
            }
        }

        if (startMins + durationMinutes > endMins) return State.settings.startTime; // fallback if no time
        const hStr = Math.floor(startMins / 60).toString().padStart(2, '0');
        const mStr = (startMins % 60).toString().padStart(2, '0');
        return `${hStr}:${mStr}`;
    }

    function showAppointmentForm() {
        if (State.clients.length === 0 || State.services.length === 0) {
            showToast('Debes tener al menos un cliente y un servicio antes de agendar una cita.', 'error');
            return;
        }

        const defaultDate = State.selectedDate || toLocalDateStr(new Date());
        const defaultDuration = State.services.length > 0 ? parseInt(State.services[0].duration) : 30;
        const suggestedTime = findNextAvailableTime(defaultDate, defaultDuration);

        const html = `
            <form id="appointment-form">
                <div class="form-group">
                    <label>Cliente</label>
                    <select class="form-control" name="clientId" required>
                        ${State.clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Servicio</label>
                    <select class="form-control" name="serviceId" required>
                        ${State.services.map(s => `<option value="${s.id}">${s.name} (${s.duration} min · ${parseFloat(s.price).toFixed(2)}€)</option>`).join('')}
                    </select>
                </div>
                <div style="display:flex;gap:1rem">
                    <div class="form-group" style="flex:1">
                        <label>Fecha</label>
                        <input type="date" class="form-control" name="date" required value="${defaultDate}">
                    </div>
                    <div class="form-group" style="flex:1">
                        <label>Hora</label>
                        <input type="time" class="form-control" name="time" required value="${suggestedTime}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Notas (opcional)</label>
                    <textarea class="form-control" name="notes" rows="2" placeholder="Información adicional..."></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Agendar Cita</button>
                </div>
            </form>`;

        openModal('Nueva Cita', html, () => {
            const form = document.getElementById('appointment-form');
            const dateInput = form.querySelector('[name="date"]');
            const timeInput = form.querySelector('[name="time"]');
            const serviceSelect = form.querySelector('[name="serviceId"]');

            function updateSuggestion() {
                const selDate = dateInput.value;
                const selService = State.services.find(s => s.id === serviceSelect.value);
                const dur = selService ? parseInt(selService.duration) : 30;
                timeInput.value = findNextAvailableTime(selDate, dur);
            }

            dateInput.addEventListener('change', updateSuggestion);
            serviceSelect.addEventListener('change', updateSuggestion);

            form.addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Agendando…';

                const fd = new FormData(e.target);
                const data = {
                    id: generateId(),
                    clientId: fd.get('clientId'),
                    serviceId: fd.get('serviceId'),
                    date: fd.get('date'),
                    time: fd.get('time'),
                    notes: fd.get('notes')
                };

                // Validar que no se solape con otra cita existente en el mismo día
                const [targetHour, targetMin] = data.time.split(':').map(Number);
                const targetStartMinutes = targetHour * 60 + targetMin;
                const targetService = State.services.find(s => s.id === data.serviceId);
                const targetEndMinutes = targetStartMinutes + (targetService ? parseInt(targetService.duration) : 0);

                const [startH, startM] = State.settings.startTime.split(':').map(Number);
                const [endH, endM] = State.settings.endTime.split(':').map(Number);
                const workingStartMins = startH * 60 + startM;
                const workingEndMins = endH * 60 + endM;

                if (targetStartMinutes < workingStartMins || targetEndMinutes > workingEndMins) {
                    showToast(`El horario seleccionado se sale de tus horas de apertura (${State.settings.startTime} - ${State.settings.endTime}).`, 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Agendar Cita';
                    return;
                }

                const hasCollision = State.appointments.some(apt => {
                    if (apt.date !== data.date) return false;
                    const [aptHour, aptMin] = apt.time.split(':').map(Number);
                    const aptStartMinutes = aptHour * 60 + aptMin;
                    const aptService = State.services.find(s => s.id === apt.serviceId);
                    const aptEndMinutes = aptStartMinutes + (aptService ? parseInt(aptService.duration) : 0);
                    
                    // Hay superposición si InicioN < FinE y FinN > InicioE
                    return targetStartMinutes < aptEndMinutes && targetEndMinutes > aptStartMinutes;
                });

                if (hasCollision) {
                    showToast('El horario elegido choca con una cita ya existente.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Agendar Cita';
                    return;
                }

                if (await addAppointment(data)) { closeModal(); renderRoute(); }
                else { submitBtn.disabled = false; submitBtn.textContent = 'Agendar Cita'; }
            });
        });
    }

    /* ═══════════════════════════════════════
       INIT — Check session to start
       ═══════════════════════════════════════ */
    checkSession();
});
