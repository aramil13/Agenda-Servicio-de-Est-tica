document.addEventListener('DOMContentLoaded', () => {

    /* ═══════════════════════════════════════
       SUPABASE CLIENT
       ═══════════════════════════════════════ */
    const SUPABASE_URL = 'https://wqbrappajbrzanpymwtx.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_rxdHNZAUSQw-C8-BvzX4rA_9qH6GeL9';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            persistSession: false
        }
    });

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
        currentUserEmail: null,
        currentUserColor: null,
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
    const userEmailEl = document.getElementById('user-email');
    const userAvatarEl = document.getElementById('user-avatar');
    const btnLogout = document.getElementById('btn-logout');



    /* ═══════════════════════════════════════
       HELPERS
       ═══════════════════════════════════════ */
    const USER_COLORS = [
        '#e74c3c', '#2ecc71', '#3498db', '#9b59b6', '#f39c12',
        '#1abc9c', '#e67e22', '#e91e63', '#00bcd4', '#8bc34a',
        '#ff5722', '#795548', '#607d8b', '#673ab7', '#ff6b6b'
    ];

    function getUserColor(email) {
        if (!email) return USER_COLORS[0];
        let hash = 0;
        for (let i = 0; i < email.length; i++) {
            hash = email.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % USER_COLORS.length;
        return USER_COLORS[index];
    }

    function applyUserColor(email) {
        if (!userAvatarEl) return;
        const color = getUserColor(email);
        console.log('User color:', email, '->', color);
        userAvatarEl.style.background = color;
        if (userEmailEl) userEmailEl.style.color = color;
    }

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

    /** Helper to send specialized WhatsApp messages */
    function sendWASMessage(phone, name, date = null, time = null) {
        if (!phone) {
            showToast('El cliente no tiene un teléfono configurado.', 'error');
            return;
        }
        
        const cleanPhone = phone.replace(/\D/g, '');
        let msg = '';
        
        if (date && time) {
            const dateObj = new Date(date + 'T00:00:00');
            const dateLabel = dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
            msg = `Hola ${name} tienes una cita con Nymara Estilistas, el ${dateLabel}, a las ${time}`;
        } else {
            msg = `Hola ${name}, me pongo en contacto contigo desde Nymara Estilistas.`;
        }
        
        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
    }

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
                whatsappSent: a.whatsapp_sent || false,
                appointmentPhotos: a.appointment_photos || [],
                userEmail: a.user_email || '',
            }));

        } catch (err) {
            console.error('Error loading data from Supabase:', err);
            showToast('Error al cargar datos: ' + (err.message || err), 'error');
        } finally {
            State.isLoading = false;
            renderRoute();
            
            // Verificación post-carga: ¿Hay recordatorios para los próximos 3 días?
            if (State.session) {
                const today = new Date();
                const futureLimit = new Date(today);
                futureLimit.setDate(today.getDate() + 3);
                
                const limitStr = toLocalDateStr(futureLimit);
                const todayStr = toLocalDateStr(today);
                
                const count = State.appointments.filter(apt => {
                    if (apt.date < todayStr || apt.date > limitStr) return false;
                    if (apt.whatsappSent) return false; // Solo pendientes
                    const client = State.clients.find(c => c.id === apt.clientId);
                    return client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1);
                }).length;
                
                if (count > 0) {
                    showToast(`Tienes ${count} recordatorio${count !== 1 ? 's' : ''} WhatsApp pendiente${count !== 1 ? 's' : ''} para los próximos días.`, 'info');
                }
            }
        }
    }

    /* ═══════════════════════════════════════
       AUTHENTICATION LOGIC
       ═══════════════════════════════════════ */

    // Check existing session
    async function checkSession() {
        // Always sign out on start to ensure we always ask for credentials
        await supabase.auth.signOut();
        
        // Listen for auth changes
        supabase.auth.onAuthStateChange(async (event, newSession) => {
            handleSessionUpdate(newSession);
        });

        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
            console.error('Error checking session:', error);
            handleSessionUpdate(null);
            return;
        }
        handleSessionUpdate(session);
    }



    function handleSessionUpdate(session) {
        State.session = session;
        if (session) {
            // Logged in
            authScreen.style.display = 'none';
            appLayout.style.display = 'flex';
            
            // Update sidebar user profile
            const email = session.user.email;
            State.currentUserEmail = email;
            State.currentUserColor = getUserColor(email);
            if (userEmailEl) userEmailEl.textContent = email;
            if (userAvatarEl) {
                userAvatarEl.textContent = email.charAt(0).toUpperCase();
                applyUserColor(email);
            }

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
        if (authLoginForm) {
            authLoginForm.reset();
            // Explicitly clear values to bypass some browser autofill behaviors
            const emailInput = document.getElementById('auth-email');
            const passwordInput = document.getElementById('auth-password');
            if (emailInput) emailInput.value = '';
            if (passwordInput) passwordInput.value = '';
        }
        authError.style.display = 'none';
        authError.className = 'auth-error';
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



    async function uploadClientPhotos(files, clientId) {
        const urls = [];
        for (const file of files) {
            const fileExt = file.name.split('.').pop();
            const fileName = `${clientId}/${generateId()}.${fileExt}`;
            
            console.log('Intentando subir archivo:', fileName);
            
            const { data, error } = await supabase.storage
                .from('client-photos')
                .upload(fileName, file);

            if (error) {
                console.error('Error detallado de Supabase Storage:', error);
                showToast('Error de almacenamiento: ' + error.message, 'error');
                throw error; // Lanzar error para detener el proceso de guardado
            }

            const { data: { publicUrl } } = supabase.storage
                .from('client-photos')
                .getPublicUrl(fileName);
            
            urls.push(publicUrl);
        }
        return urls;
    }

    async function addClient(data) {
        const { error } = await supabase.from('clients').insert([data]);
        if (error) { showToast('Error al añadir cliente: ' + error.message, 'error'); return false; }
        State.clients.push(data);
        showToast('Cliente añadido correctamente');
        return true;
    }

    async function updateClient(data) {
        const { error } = await supabase.from('clients').update({ 
            name: data.name, 
            phone: data.phone, 
            email: data.email,
            enviar_was: data.enviar_was,
            observations: data.observations 
        }).eq('id', data.id);
        if (error) { 
            console.error('Supabase update error:', error);
            showToast('Error al actualizar (¿columna "enviar_was" existe?): ' + error.message, 'error'); 
            return false; 
        }
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
            user_email: State.currentUserEmail || '',
            appointment_photos: data.appointmentPhotos || [],
        };
        const { error } = await supabase.from('appointments').insert([dbRow]);
        if (error) { showToast('Error al agendar cita: ' + error.message, 'error'); return false; }
        State.appointments.push(data);
        showToast('Cita agendada correctamente');
        return true;
    }

    async function markAppointmentReminded(id) {
        // Intentamos actualizar la columna whatsapp_sent
        const { error } = await supabase.from('appointments').update({ whatsapp_sent: true }).eq('id', id);
        if (error) { 
            console.error('Error al marcar como avisado (¿columna whatsapp_sent existe?):', error);
            // Si falla, al menos lo marcamos en local para que desaparezca de la lista actual
        }
        const apt = State.appointments.find(a => a.id === id);
        if (apt) apt.whatsappSent = true;
        return true;
    }

    async function deleteAppointment(id) {
        const { error } = await supabase.from('appointments').delete().eq('id', id);
        if (error) { showToast('Error al cancelar cita: ' + error.message, 'error'); return false; }
        State.appointments = State.appointments.filter(a => a.id !== id);
        showToast('Cita cancelada');
        return true;
    }

    async function updateAppointmentPhotos(appointmentId, photos) {
        const { error } = await supabase.from('appointments').update({ appointment_photos: photos }).eq('id', appointmentId);
        if (error) {
            console.error('Error updating photos:', error);
            showToast('Error al actualizar fotos: ' + error.message, 'error');
            return false;
        }
        const apt = State.appointments.find(a => a.id === appointmentId);
        if (apt) apt.appointmentPhotos = photos;
        return true;
    }

    async function uploadAppointmentPhoto(file, appointmentId) {
        const fileExt = file.name.split('.').pop();
        const fileName = `appointments/${appointmentId}/${generateId()}.${fileExt}`;
        
        const { data, error } = await supabase.storage
            .from('client-photos')
            .upload(fileName, file);

        if (error) {
            console.error('Error uploading photo:', error);
            showToast('Error al subir foto: ' + error.message, 'error');
            throw error;
        }

        const { data: { publicUrl } } = supabase.storage
            .from('client-photos')
            .getPublicUrl(fileName);
        
        return publicUrl;
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
        else if (currentRoute === 'whatsapp') content = getWhatsAppView();

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
                const aptUserColor = apt.userEmail ? getUserColor(apt.userEmail) : 'var(--accent-primary)';
                eventsHtml += `<span class="cal-event" style="border-left:3px solid ${aptUserColor}">${apt.time} ${cName}</span>`;
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
                
                const photos = apt.appointmentPhotos || [];
                const photosBefore = photos.filter(p => p.type === 'before');
                const photosAfter = photos.filter(p => p.type === 'after');
                
                const userColor = apt.userEmail ? getUserColor(apt.userEmail) : 'var(--accent-primary)';
                const userInitial = apt.userEmail ? apt.userEmail.charAt(0).toUpperCase() : '?';
                const userDisplay = apt.userEmail ? apt.userEmail.split('@')[0] : 'Sistema';
                
                detailHtml += `
                    <div class="day-detail-item">
                        <div class="day-detail-time" style="color:${userColor}">${apt.time} – ${endStr}</div>
                        <div class="day-detail-info">
                            <strong>${client.name}</strong>
                            <span>${service.name} · ${service.duration} min${apt.notes ? ' · ' + apt.notes : ''}</span>
                            <span class="apt-user-key" style="color:${userColor}" title="${apt.userEmail}">🔑 ${userDisplay}</span>
                            <div class="day-detail-photos">
                                ${photosBefore.length > 0 ? photosBefore.map(p => `
                                    <div class="day-photo-container">
                                        <img src="${p.url}" class="day-photo-thumb" onclick="window.open('${p.url}', '_blank')">
                                        <span class="day-photo-label before">Antes</span>
                                    </div>
                                `).join('') : ''}
                                ${photosAfter.length > 0 ? photosAfter.map(p => `
                                    <div class="day-photo-container">
                                        <img src="${p.url}" class="day-photo-thumb" onclick="window.open('${p.url}', '_blank')">
                                        <span class="day-photo-label after">Después</span>
                                    </div>
                                `).join('') : ''}
                                <button type="button" class="edit-apt-photos-btn" data-id="${apt.id}" title="Gestionar fotos">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    ${(photosBefore.length + photosAfter.length) > 0 ? 'Editar' : 'Añadir fotos'}
                                </button>
                            </div>
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
                    <thead><tr><th>Nombre</th><th>Teléfono</th><th>Email</th><th>ENVIAR WAS</th><th>Observaciones</th><th>Acciones</th></tr></thead>
                    <tbody>
                    ${State.clients.map(c => `
                        <tr>
                            <td style="font-weight:600">${c.name}</td>
                            <td>
                                <div style="display:flex;align-items:center;gap:8px">
                                    ${c.phone ? `<a href="https://wa.me/${c.phone.replace(/\D/g, '')}" target="_blank" class="contact-link" title="Enviar WhatsApp Directo"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg></a> ${c.phone}` : '—'}
                                </div>
                            </td>
                            <td>${c.email || '—'}</td>
                            <td>${(c.enviar_was === true || c.enviar_was === 'true' || c.enviar_was === 1) ? '<span class="status-badge status-success">Sí</span>' : '<span class="status-badge status-danger">No</span>'}</td>
                            <td title="${c.observations || ''}" style="max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--text-secondary); font-size: 0.85rem;">${c.observations || '—'}</td>
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
                        <td>
                            <div style="font-weight:600">${client.name}</div>
                        </td>
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
       WHATSAPP REMINDERS VIEW
       ═══════════════════════════════════════ */
    function getWhatsAppView() {
        // Buscamos citas en los próximos 3 días para dar más margen
        const today = new Date();
        const futureLimit = new Date(today);
        futureLimit.setDate(today.getDate() + 3);
        
        const limitStr = toLocalDateStr(futureLimit);
        const todayStr = toLocalDateStr(today);

        const toRemind = State.appointments.filter(apt => {
            // Citas entre hoy y dentro de 3 días que NO hayan sido avisadas
            if (apt.date < todayStr || apt.date > limitStr) return false;
            if (apt.whatsappSent) return false;
            
            const client = State.clients.find(c => c.id === apt.clientId);
            return client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1);
        }).sort((a, b) => {
            if (a.date !== b.date) return a.date.localeCompare(b.date);
            return a.time.localeCompare(b.time);
        });

        let rows = '';
        if (toRemind.length === 0) {
            rows = `
                <tr>
                    <td colspan="4" style="text-align:center;padding:4rem;color:var(--text-secondary)">
                        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="opacity:0.25;margin-bottom:1rem;"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg>
                        <p>No hay recordatorios pendientes para citas en 48 horas.</p>
                        <p style="font-size:0.85rem;margin-top:0.5rem">Objetivo: Citas del ${dateLabel}</p>
                    </td>
                </tr>`;
        } else {
            toRemind.forEach(apt => {
                const client = State.clients.find(c => c.id === apt.clientId);
                const service = State.services.find(s => s.id === apt.serviceId);
                rows += `
                    <tr>
                        <td>
                            <div style="font-weight:600">${client.name}</div>
                            <div style="font-size:0.8rem;color:var(--text-secondary)">${client.phone}</div>
                        </td>
                        <td>
                            <div style="font-weight:500;color:var(--accent-primary)">${apt.time}</div>
                        </td>
                        <td>
                            <span class="monthly-service-badge">${service ? service.name : '—'}</span>
                        </td>
                        <td>
                            <button class="btn btn-primary btn-sm send-reminder-btn" 
                                    style="padding: 0.4rem 0.8rem;"
                                    data-name="${client.name}" 
                                    data-phone="${client.phone}" 
                                    data-date="${apt.date}" 
                                    data-time="${apt.time}">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px;vertical-align:middle"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg>
                                Recordar
                            </button>
                        </td>
                    </tr>`;
            });
        }

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Recordatorios WhatsApp</h1>
                    <p style="color:var(--text-secondary)">Gestiona los avisos para las próximas citas · <span class="supabase-badge">⚡ Automático</span></p>
                </div>
            </div>

            <div class="data-card monthly-table-card">
                <div class="monthly-table-header" style="background: var(--bg-surface); padding: 1.5rem; border-bottom: 1px solid var(--border-color);">
                    <h3 style="display:flex;align-items:center;gap:0.75rem;">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Próximas Citas (3 días)
                    </h3>
                    <span class="monthly-count-badge">${toRemind.length} pendiente${toRemind.length !== 1 ? 's' : ''}</span>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Servicio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>${toRemind.map(apt => {
                        const client = State.clients.find(c => c.id === apt.clientId);
                        const service = State.services.find(s => s.id === apt.serviceId);
                        const dObj = new Date(apt.date + 'T00:00:00');
                        const dLabel = dObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
                        
                        return `
                            <tr data-aptid="${apt.id}">
                                <td>
                                    <div style="font-weight:600">${client ? client.name : 'Cliente desconocido'}</div>
                                    <div style="font-size:0.8rem;color:var(--text-secondary)">${client ? client.phone : 'Sin teléfono'}</div>
                                </td>
                                <td><span class="status-badge" style="background:var(--bg-body);color:var(--text-primary)">${dLabel}</span></td>
                                <td><div style="font-weight:500;color:var(--accent-primary)">${apt.time}</div></td>
                                <td><span class="monthly-service-badge">${service ? service.name : '—'}</span></td>
                                <td>
                                    <button class="btn btn-primary btn-sm send-reminder-btn" 
                                            style="padding: 0.4rem 0.8rem;"
                                            data-name="${client ? client.name : ''}" 
                                            data-phone="${client ? client.phone : ''}" 
                                            data-date="${apt.date}" 
                                            data-time="${apt.time}">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px;vertical-align:middle"><path d="M12.031 6.172c-2.32 0-4.516.903-6.183 2.563-3.23 3.23-3.403 8.356-.511 11.777l-1.341 4.904 5.035-1.32c1.077.585 2.29.893 3.522.893h.03c2.321 0 4.516-.903 6.183-2.563 3.413-3.414 3.413-8.948 0-12.362-1.667-1.66-3.863-1.592-6.235-1.592zm5.753 12.185c-.254.71-1.472 1.286-2.028 1.368-.556.082-1.112.122-1.666-.122-.303-.122-.656-.254-1.076-.442-1.812-.816-3.033-2.656-3.13-2.77-.091-.112-.76-.98-.76-1.884 0-.904.47-1.353.64-1.554.17-.2.37-.25.5-.25s.262-.01.373.01c.123 0 .285-.04.444.33.16.38.542 1.312.59 1.41.05.1.08.21.01.34-.07.13-.1.22-.2.34-.1.12-.21.26-.3.37-.1.12-.22.25-.1.44.13.21.57.94 1.22 1.52.84.75 1.55 1 1.77 1.11.22.11.36.09.49-.06.13-.15.54-.62.68-.84.14-.21.29-.18.49-.1.2.08 1.25.59 1.47.69s.36.16.41.25c.05.1.05.57-.2.1.28l-.01.01zM12.031 0C5.386 0 0 5.385 0 12.031c0 2.11.55 4.16 1.59 5.97L0 24l6.19-1.62c1.77 1.04 3.79 1.59 5.84 1.59h.01C18.66 24 24 18.615 24 12.031 24 5.385 18.66 0 12.031 0z"/></svg>
                                        Recordar
                                    </button>
                                </td>
                            </tr>`;
                    }).join('')}</tbody>
                </table>
            </div>
            
            <p style="margin-top: 1.5rem; color: var(--text-secondary); font-size: 0.85rem; text-align: center; font-style: italic;">
                * Debes tener abierta esta pestaña para gestionar los recordatorios diarios.
            </p>
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

        // Edit appointment photos buttons
        document.querySelectorAll('.edit-apt-photos-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                const id = e.currentTarget.dataset.id;
                showAppointmentPhotosForm(id);
            });
        });

        // WhatsApp Reminder direct buttons
        document.querySelectorAll('.send-reminder-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                const { name, phone, date, time } = e.currentTarget.dataset;
                const id = e.currentTarget.closest('[data-id]') ? e.currentTarget.closest('[data-id]').dataset.id : null;
                
                // Si el botón está en la vista de recordatorios, intentamos sacar el ID de la cita
                const aptId = e.currentTarget.closest('tr')?.dataset.aptid;

                sendWASMessage(phone, name, date, time);
                
                if (aptId) {
                    await markAppointmentReminded(aptId);
                    renderRoute(); // Refrescar para que desaparezca
                    showToast('Recordatorio marcado como enviado');
                }
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
                    <label>¿Enviar mensaje de WhatsApp automático?</label>
                    <select class="form-control" name="enviar_was">
                        <option value="true" ${isEdit && (info.enviar_was === true || info.enviar_was === 'true' || info.enviar_was === 1) ? 'selected' : ''}>Sí</option>
                        <option value="false" ${!isEdit || (info.enviar_was === false || info.enviar_was === 'false' || info.enviar_was === 0 || info.enviar_was === null) ? 'selected' : ''}>No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Observaciones</label>
                    <textarea class="form-control" name="observations" rows="3" placeholder="Notas sobre el cliente...">${isEdit ? (info.observations || '') : ''}</textarea>
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
                const clientId = isEdit ? info.id : generateId();

                const data = { 
                    id: clientId, 
                    name: fd.get('name'), 
                    phone: fd.get('phone'), 
                    email: fd.get('email'),
                    enviar_was: fd.get('enviar_was') === 'true',
                    observations: fd.get('observations')
                };

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

    function showAppointmentPhotosForm(appointmentId) {
        window.currentAptId = appointmentId;
        const apt = State.appointments.find(a => a.id === appointmentId);
        if (!apt) return;
        
        const client = State.clients.find(c => c.id === apt.clientId) || { name: 'Cliente' };
        const service = State.services.find(s => s.id === apt.serviceId) || { name: 'Servicio' };

        const html = `
            <div id="apt-photos-modal">
                <p style="margin-bottom:15px;color:var(--text-secondary)">Cita: <strong>${client.name}</strong> - ${service.name}</p>
                <div id="apt-photos-container">
                    ${renderPhotosForApt(apt)}
                </div>
                <div class="form-actions" style="margin-top:20px">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cerrar</button>
                </div>
            </div>
        `;

        openModal('Gestionar Fotos de la Cita', html, () => {
            const container = document.getElementById('apt-photos-container');
            
            document.querySelectorAll('.apt-new-photo').forEach(input => {
                input.addEventListener('change', async () => {
                    if (input.files.length === 0) return;
                    
                    const type = input.dataset.type;
                    const file = input.files[0];
                    
                    try {
                        const url = await uploadAppointmentPhoto(file, appointmentId);
                        const newPhoto = {
                            id: generateId(),
                            url: url,
                            type: type,
                            date: toLocalDateStr(new Date()),
                            notes: ''
                        };
                        
                        const updatedPhotos = [...(apt.appointmentPhotos || []), newPhoto];
                        if (await updateAppointmentPhotos(appointmentId, updatedPhotos)) {
                            apt.appointmentPhotos = updatedPhotos;
                            container.innerHTML = renderPhotosForApt(apt);
                            showToast('Foto añadida');
                            renderRoute();
                        }
                    } catch (err) {
                        console.error('Error uploading photo:', err);
                    }
                });
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

        const userColor = State.currentUserColor || '#6366f1';
        const html = `
            <form id="appointment-form">
                <div class="form-user-badge" style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;padding:0.5rem;background:rgba(0,0,0,0.03);border-radius:8px;">
                    <div style="width:12px;height:12px;border-radius:50%;background:${userColor};flex-shrink:0;"></div>
                    <span style="font-size:0.8rem;color:var(--text-secondary);">Creando cita como <strong>${State.currentUserEmail || 'usuario'}</strong></span>
                </div>
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
                
                <div class="form-group">
                    <label>Foto Antes (opcional)</label>
                    <div class="apt-photo-upload">
                        <input type="file" class="form-control" id="apt-photo-before" accept="image/*">
                        <div id="apt-photo-before-preview" class="apt-photo-preview"></div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Foto Después (opcional)</label>
                    <div class="apt-photo-upload">
                        <input type="file" class="form-control" id="apt-photo-after" accept="image/*">
                        <div id="apt-photo-after-preview" class="apt-photo-preview"></div>
                    </div>
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
            const photoBeforeInput = document.getElementById('apt-photo-before');
            const photoAfterInput = document.getElementById('apt-photo-after');
            const beforePreview = document.getElementById('apt-photo-before-preview');
            const afterPreview = document.getElementById('apt-photo-after-preview');

            function showPhotoPreview(input, previewEl) {
                previewEl.innerHTML = '';
                if (input.files && input.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        previewEl.innerHTML = `<img src="${e.target.result}" class="photo-preview-img">`;
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            }

            photoBeforeInput.addEventListener('change', () => showPhotoPreview(photoBeforeInput, beforePreview));
            photoAfterInput.addEventListener('change', () => showPhotoPreview(photoAfterInput, afterPreview));

            form.querySelectorAll('.form-control').forEach(input => {
                input.style.borderColor = userColor;
                input.style.setProperty('caret-color', userColor);
            });

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
                const appointmentId = generateId();
                const data = {
                    id: appointmentId,
                    clientId: fd.get('clientId'),
                    serviceId: fd.get('serviceId'),
                    date: fd.get('date'),
                    time: fd.get('time'),
                    notes: fd.get('notes'),
                    userEmail: State.currentUserEmail || '',
                    appointmentPhotos: []
                };

                const todayStr = toLocalDateStr(new Date());
                try {
                    if (photoBeforeInput.files.length > 0) {
                        const url = await uploadAppointmentPhoto(photoBeforeInput.files[0], appointmentId);
                        data.appointmentPhotos.push({
                            id: generateId(),
                            url: url,
                            type: 'before',
                            date: todayStr,
                            notes: ''
                        });
                    }
                    if (photoAfterInput.files.length > 0) {
                        const url = await uploadAppointmentPhoto(photoAfterInput.files[0], appointmentId);
                        data.appointmentPhotos.push({
                            id: generateId(),
                            url: url,
                            type: 'after',
                            date: todayStr,
                            notes: ''
                        });
                    }
                } catch (err) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Agendar Cita';
                    return;
                }

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

                if (await addAppointment(data)) { 
                    closeModal(); 
                    renderRoute(); 
                    
                    // Notificar por WhatsApp si el cliente lo tiene activado
                    const client = State.clients.find(c => c.id === data.clientId);
                    if (client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1) && client.phone) {
                        sendWASMessage(client.phone, client.name, data.date, data.time);
                    }
                }
                else { submitBtn.disabled = false; submitBtn.textContent = 'Agendar Cita'; }
            });
        });
    }

    /* ═══════════════════════════════════════
       INIT — Check session to start
       ═══════════════════════════════════════ */
    checkSession();

    // Combat aggressive browser autofill
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');
    
    if (emailInput && passwordInput) {
        // Clear again after a delay in case browser injected values late
        setTimeout(() => {
            emailInput.value = '';
            passwordInput.value = '';
            emailInput.readOnly = false;
            passwordInput.readOnly = false;
        }, 600);

        // Also remove readonly on focus as a fallback
        emailInput.addEventListener('focus', () => emailInput.readOnly = false);
        passwordInput.addEventListener('focus', () => passwordInput.readOnly = false);
    }

    window.deleteAptPhoto = async function(photoId) {
        if (!confirm('¿Eliminar esta foto?')) return;
        const apt = State.appointments.find(a => a.id === window.currentAptId);
        if (!apt) return;
        const updatedPhotos = apt.appointmentPhotos.filter(p => p.id !== photoId);
        if (await updateAppointmentPhotos(window.currentAptId, updatedPhotos)) {
            apt.appointmentPhotos = updatedPhotos;
            showToast('Foto eliminada');
            renderRoute();
            const container = document.getElementById('apt-photos-container');
            if (container) {
                container.innerHTML = renderPhotosForApt(apt);
            }
        }
    };

    window.editAptPhoto = function(photoId, type, date, notes) {
        openModal('Editar Foto', `
            <form id="edit-photo-form">
                <div class="form-group">
                    <label>Fecha</label>
                    <input type="date" class="form-control" id="edit-photo-date" value="${date}">
                </div>
                <div class="form-group">
                    <label>Tipo de foto</label>
                    <select class="form-control" id="edit-photo-type">
                        <option value="before" ${type === 'before' ? 'selected' : ''}>Foto Antes</option>
                        <option value="after" ${type === 'after' ? 'selected' : ''}>Foto Después</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Notas</label>
                    <textarea class="form-control" id="edit-photo-notes" rows="3">${notes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        `, () => {
            document.getElementById('edit-photo-form').addEventListener('submit', async e => {
                e.preventDefault();
                const newDate = document.getElementById('edit-photo-date').value;
                const newType = document.getElementById('edit-photo-type').value;
                const newNotes = document.getElementById('edit-photo-notes').value;
                const apt = State.appointments.find(a => a.id === window.currentAptId);
                if (!apt) return;
                const updatedPhotos = apt.appointmentPhotos.map(p => {
                    if (p.id === photoId) {
                        return { ...p, date: newDate, type: newType, notes: newNotes };
                    }
                    return p;
                });
                if (await updateAppointmentPhotos(window.currentAptId, updatedPhotos)) {
                    apt.appointmentPhotos = updatedPhotos;
                    closeModal();
                    showToast('Foto actualizada');
                    renderRoute();
                }
            });
        });
    };

    function renderPhotosForApt(apt) {
        const allPhotos = apt.appointmentPhotos || [];
        const beforePhotos = allPhotos.filter(p => p.type === 'before');
        const afterPhotos = allPhotos.filter(p => p.type === 'after');
        let html = '';
        html += `<div class="apt-photos-section">
            <h4>Foto Antes (${beforePhotos.length})</h4>
            <div class="apt-photos-grid">
                ${beforePhotos.length === 0 ? '<p class="no-photos">No hay fotos "antes"</p>' : ''}
                ${beforePhotos.map(p => `
                    <div class="apt-photo-item" data-photo-id="${p.id}">
                        <img src="${p.url}" onclick="window.open('${p.url}', '_blank')">
                        <div class="apt-photo-overlay">
                            <button type="button" class="apt-photo-edit-btn" onclick="window.editAptPhoto('${p.id}', '${p.type}', '${p.date || ''}', \`${p.notes || ''}\`)">
                                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </button>
                            <button type="button" class="apt-photo-delete-btn" onclick="window.deleteAptPhoto('${p.id}')">
                                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                        ${p.date ? `<span class="apt-photo-date">${p.date}</span>` : ''}
                    </div>
                `).join('')}
            </div>
            <input type="file" class="form-control apt-new-photo" id="apt-new-before" accept="image/*" data-type="before" style="margin-top:10px">
        </div>`;
        html += `<div class="apt-photos-section">
            <h4>Foto Después (${afterPhotos.length})</h4>
            <div class="apt-photos-grid">
                ${afterPhotos.length === 0 ? '<p class="no-photos">No hay fotos "después"</p>' : ''}
                ${afterPhotos.map(p => `
                    <div class="apt-photo-item" data-photo-id="${p.id}">
                        <img src="${p.url}" onclick="window.open('${p.url}', '_blank')">
                        <div class="apt-photo-overlay">
                            <button type="button" class="apt-photo-edit-btn" onclick="window.editAptPhoto('${p.id}', '${p.type}', '${p.date || ''}', \`${p.notes || ''}\`)">
                                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </button>
                            <button type="button" class="apt-photo-delete-btn" onclick="window.deleteAptPhoto('${p.id}')">
                                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                        ${p.date ? `<span class="apt-photo-date">${p.date}</span>` : ''}
                    </div>
                `).join('')}
            </div>
            <input type="file" class="form-control apt-new-photo" id="apt-new-after" accept="image/*" data-type="after" style="margin-top:10px">
        </div>`;
        return html;
    }
});
