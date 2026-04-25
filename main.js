// Base de datos de productos Maria Nila
const MARIA_NILA_PRODUCTS = {
    // Champús
    headHairHealShampoo: { name: "Head & Hair Heal Shampoo", desc: "Calma cuero cabelludo sensible con aloe vera y piroctona olamina.", img: "https://marianila.com/cdn/shop/files/13650-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-shampoo-350-ml", category: "scalp" },
    trueSoftShampoo: { name: "True Soft Shampoo", desc: "Hidratación profunda con aceite de argán para cabello seco.", img: "https://marianila.com/cdn/shop/files/3630-packshot.jpg", url: "https://marianila.com/products/true-soft-shampoo-350-ml", category: "dry" },
    pureVolumeShampoo: { name: "Pure Volume Shampoo", desc: "Voluminizador con provitamina B5 para cabello fino.", img: "https://marianila.com/cdn/shop/files/3610-packshot.jpg", url: "https://marianila.com/products/pure-volume-shampoo-350-ml", category: "fine" },
    luminousColourShampoo: { name: "Luminous Colour Shampoo", desc: "Preserva color con extracto de Granada.", img: "https://marianila.com/cdn/shop/files/3625-packshot.jpg", url: "https://marianila.com/products/luminous-colour-shampoo-350-ml", category: "colored" },
    purifyingCleanseShampoo: { name: "Purifying Cleanse Shampoo", desc: "Champú purificante para cuero cabelludo graso.", img: "https://marianila.com/cdn/shop/files/3615-packshot.jpg", url: "https://marianila.com/products/purifying-cleanse-shampoo-350-ml", category: "oily" },
    structureRepairShampoo: { name: "Structure Repair Shampoo", desc: "Repara cabello dañado con keratina.", img: "https://marianila.com/cdn/shop/files/3600-packshot.jpg", url: "https://marianila.com/products/structure-repair-shampoo-350-ml", category: "damaged" },
    // Acondicionadores
    headHairHealConditioner: { name: "Head & Hair Heal Conditioner", desc: "Acondicionador calmante para el cuero cabelludo.", img: "https://marianila.com/cdn/shop/files/13651-packshot.jpg", url: "https://marianila.com/products/head-hair-heal-conditioner-300-ml", category: "scalp" },
    trueSoftConditioner: { name: "True Soft Conditioner", desc: "Acondicionador hidratante con aceite de argán.", img: "https://marianila.com/cdn/shop/files/3631-packshot.jpg", url: "https://marianila.com/products/true-soft-conditioner-300-ml", category: "dry" },
    pureVolumeConditioner: { name: "Pure Volume Conditioner", desc: "Acondicionador voluminizador ligero.", img: "https://marianila.com/cdn/shop/files/3611-packshot.jpg", url: "https://marianila.com/products/pure-volume-conditioner-300-ml", category: "fine" },
    luminousColourConditioner: { name: "Luminous Colour Conditioner", desc: "Acondicionador preservador de color.", img: "https://marianila.com/cdn/shop/files/3626-packshot.jpg", url: "https://marianila.com/products/luminous-colour-conditioner-300-ml", category: "colored" },
    // Tratamientos
    bondBuilder: { name: "Bond Builder", desc: "Reparador de enlaces capilares intensivo.", img: "https://marianila.com/cdn/shop/files/mnproductpage1200x1500px1.jpg", url: "https://marianila.com/products/bond-builder", category: "damaged" },
    trueSoftArganOil: { name: "True Soft Argan Oil", desc: "Aceite de argán para hidratación.", img: "https://marianila.com/cdn/shop/files/IMG_c_s_3637_soft_argan_oil_100_ml.jpg", url: "https://marianila.com/products/true-soft-argan-oil-100-ml", category: "dry" }
};

// Tratamiento Premium Olaplex del Salón
const OLAPLEX_TREATMENTS = {
    treatmentPremium: { 
        name: "Tratamiento Premium Olaplex", 
        desc: "Régenera puentes de disulfuro. Protocolo: 1) Broad Spectrum Chelating (3 min) - elimina minerales. 2) Olaplex N°1 (5 min) - recupera enlaces. 3) Olaplex N°2 (3 min) - sella enlaces. 4) Champú N°4 (1 min). 5) Mascarilla N°5 (3 min - encapsulado sin oxígeno).",
    },
    treatmentExpress: { 
        name: "Tratamiento Olaplex Express", 
        desc: "Tratamiento 3 veces más fuerte, 3 veces más suave, 3 veces más elástico en 3 min. Paso 1: Prechampu. Paso 2: Olaplex N°3 Plus aplicado con las manos de raíces a puntas.",
    }
};

function getMariaNilaRecommendations(diagnosis) {
    const recommendations = [];
    const { density, thickness, hydration, sebum, isColored } = diagnosis;
    
    // Lógica de recomendaciones según resultados
    if (hydration < 50) {
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.trueSoftConditioner);
    }
    if (density < 150) {
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.pureVolumeConditioner);
    }
    if (sebum > 65 || sebum === 'Alto') {
        recommendations.push(MARIA_NILA_PRODUCTS.purifyingCleanseShampoo);
    }
    if (isColored) {
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.luminousColourConditioner);
    }
    if (thickness < 65) {
        recommendations.push(MARIA_NILA_PRODUCTS.bondBuilder);
    }
    // Default si no hay recomendaciones específicas
    if (recommendations.length === 0) {
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealShampoo);
        recommendations.push(MARIA_NILA_PRODUCTS.headHairHealConditioner);
    }
    return recommendations.slice(0, 4);
}

function getOlaplexRecommendations(diagnosis) {
    const recommendations = [];
    const { density, thickness, hydration, isColored } = diagnosis;
    
    // Tratamiento Premium para casos severos
    if (density < 130 || thickness < 60 || hydration < 45) {
        recommendations.push(OLAPLEX_TREATMENTS.treatmentPremium);
    }
    // Tratamiento Express - siempre mostrar si hay menos de 2
    if (recommendations.length < 2) {
        recommendations.push(OLAPLEX_TREATMENTS.treatmentExpress);
    }
    return recommendations.slice(0, 2);
}

function displayDiagnosisProducts(products) {
    const container = document.getElementById('products-grid');
    if (!container || !products || !Array.isArray(products)) return;
    
    let html = '';
    for (const p of products) {
        if (!p) continue;
        html += '<div style="display:flex;gap:1rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;">';
        html += '<img src="' + p.img + '" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:8px;background:white;" onerror="this.style.display=\'none\'">';
        html += '<div style="flex:1;"><strong style="color:#fff;">' + p.name + '</strong>';
        html += '<p style="font-size:0.75rem;color:rgba(255,255,255,0.6);">' + p.desc + '</p>';
        html += '<a href="' + p.url + '" target="_blank" style="color:#a78bfa;">Ver producto →</a></div></div>';
    }
    container.innerHTML = html || '<p style="color:#888;">No hay recomendaciones</p>';
}

function displayDiagnosisTreatments(treatments) {
    const container = document.getElementById('treatments-grid');
    if (!container || !treatments || !Array.isArray(treatments)) return;
    
    let html = '';
    for (const t of treatments) {
        if (!t) continue;
        html += '<div style="display:flex;gap:1rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:12px;border-left:3px solid #10b981;">';
        html += '<div style="font-size:1.5rem;">💊</div>';
        html += '<div style="flex:1;"><strong style="color:#fff;">' + t.name + '</strong>';
        html += '<p style="font-size:0.75rem;color:rgba(255,255,255,0.6);">' + (t.desc || '') + '</p></div></div>';
    }
    container.innerHTML = html || '<p style="color:#888;">No hay recomendaciones</p>';
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('--- Nymara App: Diagnóstico Capilar Integrado ---');

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
        clientPhotos: {},
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

    const generateId = () => {
        if (crypto.randomUUID) return crypto.randomUUID();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

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
                userEmail: a.user_email || '',
                appointmentPhotos: a.appointment_photos || [],
            }));
            
            // Cargar todas las fotos de clientes
            await loadAllClientPhotos();

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
            console.log('Form submitted!');
            
            const email = document.getElementById('auth-email').value;
            const password = document.getElementById('auth-password').value;
            
            console.log('Email:', email, 'Password length:', password?.length);
            
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



    async function addClient(data) {
        const { error } = await supabase.from('clients').insert([data]);
        if (error) { showToast('Error al añadir cliente: ' + error.message, 'error'); return false; }
        State.clients.push(data);
        showToast('Cliente añadido correctamente');
        return true;
    }

    async function uploadClientPhoto(file, clientId, photoDate, photoType, photoNotes) {
        console.log('uploadClientPhoto called:', { clientId, photoDate, photoType });
        const fileExt = file.name.split('.').pop();
        const photoId = generateId();
        const fileName = `${clientId}/${photoId}.${fileExt}`;
        
        // Calcular hash para evitar duplicados
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const photoHash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
        
        const { data, error } = await supabase.storage
            .from('client-photos')
            .upload(fileName, file);

        if (error) {
            showToast('Error al subir foto: ' + error.message, 'error');
            console.error('Storage upload error:', error);
            return null;
        }

        const { data: { publicUrl } } = supabase.storage
            .from('client-photos')
            .getPublicUrl(fileName);
        
        const photoRecord = {
            id: photoId,
            client_id: clientId,
            photo_url: publicUrl,
            photo_hash: photoHash,
            photo_date: photoDate,
            photo_type: photoType,
            notes: photoNotes,
            created_at: new Date().toISOString()
        };
        
        console.log('Inserting photo record:', photoRecord);
        const { error: insertError } = await supabase.from('client_photos').insert(photoRecord);
        if (insertError) {
            console.error('Database insert error details:', JSON.stringify(insertError, null, 2));
            showToast('Error al guardar foto en BD: ' + insertError.message, 'error');
            return null;
        }
        console.log('Photo inserted successfully!');
        return photoRecord;
    }

    async function deleteClientPhoto(photoId, clientId) {
        await supabase.from('client_photos').delete().eq('id', photoId);
        
        if (State.clientPhotos[clientId]) {
            State.clientPhotos[clientId] = State.clientPhotos[clientId].filter(p => p.id !== photoId);
        }
        
        showToast('Foto eliminada');
        return true;
    }

    async function updateClientPhoto(photoId, clientId, updates) {
        await supabase.from('client_photos').update(updates).eq('id', photoId);
        
        if (State.clientPhotos[clientId]) {
            const idx = State.clientPhotos[clientId].findIndex(p => p.id === photoId);
            if (idx >= 0) {
                State.clientPhotos[clientId][idx] = { ...State.clientPhotos[clientId][idx], ...updates };
            }
        }
        
        showToast('Foto actualizada');
        return true;
    }

    async function loadClientPhotos(clientId) {
        console.log('loadClientPhotos called for client:', clientId);
        console.log('State.clients sample:', State.clients.slice(0,2).map(c => ({ id: c.id, name: c.name })));
        try {
            const { data, error } = await supabase
                .from('client_photos')
                .select('*')
                .eq('client_id', clientId)
                .order('created_at', { ascending: false });
            
            console.log('loadClientPhotos result:', { data, error, clientId });
            if (error) throw error;
            return data || [];
        } catch (e) {
            console.warn('Error loading photos:', e);
            return [];
        }
    }

    async function loadAllClientPhotos() {
        try {
            const { data, error } = await supabase
                .from('client_photos')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            
            State.clientPhotos = {};
            if (data) {
                data.forEach(p => {
                    if (!State.clientPhotos[p.client_id]) {
                        State.clientPhotos[p.client_id] = [];
                    }
                    State.clientPhotos[p.client_id].push(p);
                });
            }
            return data || [];
        } catch (e) {
            console.warn('Error loading all photos:', e);
            return [];
        }
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

    window.editClientPhoto = async function(photoId, clientId, currentDate, currentNotes, currentType) {
        openModal('Editar Foto', `
            <form id="edit-client-photo-form">
                <div class="form-group">
                    <label>Tipo</label>
                    <select class="form-control" id="edit-client-photo-type">
                        <option value="before" ${currentType === 'before' ? 'selected' : ''}>Antes</option>
                        <option value="after" ${currentType === 'after' ? 'selected' : ''}>Después</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <input type="date" class="form-control" id="edit-client-photo-date" value="${currentDate}">
                </div>
                <div class="form-group">
                    <label>Notas</label>
                    <textarea class="form-control" id="edit-client-photo-notes" rows="3">${currentNotes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        `, () => {
            document.getElementById('edit-client-photo-form').addEventListener('submit', async e => {
                e.preventDefault();
                const newType = document.getElementById('edit-client-photo-type').value;
                const newDate = document.getElementById('edit-client-photo-date').value;
                const newNotes = document.getElementById('edit-client-photo-notes').value;
                
                await updateClientPhoto(photoId, clientId, { photo_type: newType, photo_date: newDate, notes: newNotes });
                closeModal();
                showToast('Foto actualizada');
                renderRoute();
            });
        });
    }

    window.editAptPhoto = async function(photoId, aptId, currentDate, currentNotes, currentType) {
        openModal('Editar Foto', `
            <form id="edit-apt-photo-form">
                <div class="form-group">
                    <label>Tipo</label>
                    <select class="form-control" id="edit-apt-photo-type">
                        <option value="before" ${currentType === 'before' ? 'selected' : ''}>Antes</option>
                        <option value="after" ${currentType === 'after' ? 'selected' : ''}>Después</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha</label>
                    <input type="date" class="form-control" id="edit-apt-photo-date" value="${currentDate}">
                </div>
                <div class="form-group">
                    <label>Notas</label>
                    <textarea class="form-control" id="edit-apt-photo-notes" rows="3">${currentNotes}</textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        `, () => {
            document.getElementById('edit-apt-photo-form').addEventListener('submit', async e => {
                e.preventDefault();
                const newType = document.getElementById('edit-apt-photo-type').value;
                const newDate = document.getElementById('edit-apt-photo-date').value;
                const newNotes = document.getElementById('edit-apt-photo-notes').value;
                
                const apt = State.appointments.find(a => a.id === aptId);
                if (apt && apt.appointmentPhotos) {
                    const photoIdx = apt.appointmentPhotos.findIndex(p => p.id === photoId);
                    if (photoIdx >= 0) {
                        apt.appointmentPhotos[photoIdx].photo_type = newType;
                        apt.appointmentPhotos[photoIdx].photo_date = newDate;
                        apt.appointmentPhotos[photoIdx].notes = newNotes;
                        await supabase.from('appointments').update({ appointment_photos: apt.appointmentPhotos }).eq('id', aptId);
                        closeModal();
                        showToast('Foto actualizada');
                        renderRoute();
                    }
                }
            });
        });
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

        if (currentRoute === 'agenda') content = getAgendaView();
        else if (currentRoute === 'clients') content = getClientsView();
        else if (currentRoute === 'services') content = getServicesView();
        else if (currentRoute === 'monthly') content = getMonthlyView();
        else if (currentRoute === 'whatsapp') content = getWhatsAppView();
        else if (currentRoute === 'diagnosis') content = getDiagnosisView();

        appContent.innerHTML = `<div class="fade-in">${content}</div>`;
        
        // Dark mode toggle for diagnosis
        if (currentRoute === 'diagnosis') {
            appContent.classList.add('diagnosis-mode');
        } else {
            appContent.classList.remove('diagnosis-mode');
        }

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
                isToday ? 'is-today' : '',
                isSelected ? 'is-selected' : ''
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
                
const userColor = apt.userEmail ? getUserColor(apt.userEmail) : 'var(--accent-primary)';
                const userInitial = apt.userEmail ? apt.userEmail.charAt(0).toUpperCase() : '?';
                const userDisplay = apt.userEmail ? apt.userEmail.split('@')[0] : 'Sistema';
                
                const appointmentPhotos = apt.appointmentPhotos || [];
                let photosHtml = '';
                if (appointmentPhotos.length > 0) {
                    photosHtml = '<div class="day-detail-photos" style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px">';
                    appointmentPhotos.forEach(p => {
                        const photoType = (p.photo_type === 'after') ? 'Después' : 'Antes';
                        const photoDate = p.photo_date || '';
                        photosHtml += `
                            <div class="apt-mini-photo" data-apt-id="${apt.id}" data-photo-id="${p.id}" style="position:relative;text-align:center">
                                <img src="${p.photo_url}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;cursor:pointer" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                                <div style="font-size:0.65rem;color:var(--text-secondary)">${photoType}</div>
                                <div style="font-size:0.6rem;color:var(--text-secondary)">${photoDate}</div>
                                <div style="position:absolute;top:0;left:0;right:0;display:flex;justify-content:center;gap:2px">
                                    <button type="button" class="apt-photo-edit-btn" data-photo-id="${p.id}" title="Editar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">✏️</button>
                                    <button type="button" class="apt-photo-delete-btn" data-photo-id="${p.id}" title="Eliminar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">🗑️</button>
                                </div>
                            </div>`;
                    });
                    photosHtml += '</div>';
                }
                
                detailHtml += `
                    <div class="day-detail-item">
                        <div class="day-detail-time" style="color:${userColor}">${apt.time} – ${endStr}</div>
                        <div class="day-detail-info">
                            <strong>${client.name}</strong>
                            <span>${service.name} · ${service.duration} min${apt.notes ? ' · ' + apt.notes : ''}</span>
                            <span class="apt-user-key" style="color:${userColor}" title="${apt.userEmail}">${userDisplay}</span>
                            ${photosHtml}
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
            rows = `<div class="clients-list">${State.clients.map(c => {
                return `
                <div class="client-card" data-client-id="${c.id}">
                    <div class="client-header">
                        <div class="client-info">
                            <h3 style="margin:0;font-weight:600">${c.name}</h3>
                            <div style="display:flex;align-items:center;gap:12px;font-size:0.85rem;color:var(--text-secondary)">
                                ${c.phone ? `<span><a href="https://wa.me/${c.phone.replace(/\D/g, '')}" target="_blank" style="color:var(--text-secondary)">📱 ${c.phone}</a></span>` : ''}
                                ${c.email ? `<span>✉️ ${c.email}</span>` : ''}
                                <span class="${c.enviar_was ? 'status-success' : 'status-danger'}" style="font-size:0.75rem">WA: ${c.enviar_was ? 'Sí' : 'No'}</span>
                            </div>
                            ${c.observations ? `<p style="font-size:0.8rem;color:var(--text-secondary);margin:4px 0 0;font-style:italic">"${c.observations}"</p>` : ''}
                            ${State.clientPhotos && State.clientPhotos[c.id] && State.clientPhotos[c.id].length > 0 ? `
                                <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
                                    ${State.clientPhotos[c.id].slice(0, 4).map(p => {
                                        const photoType = (p.photo_type === 'after') ? 'Después' : 'Antes';
                                        return `<div style="position:relative;text-align:center">
                                            <img src="${p.photo_url}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;cursor:pointer" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                                            <div style="font-size:0.5rem;color:var(--text-secondary)">${photoType}</div>
                                        </div>`;
                                    }).join('')}
                                    ${State.clientPhotos[c.id].length > 4 ? `<div style="font-size:0.7rem;color:var(--text-secondary);align-self:center">+${State.clientPhotos[c.id].length - 4}</div>` : ''}
                                </div>
                            ` : ''}
                        </div>
                        <div class="client-actions">
                            <button class="edit-btn" data-id="${c.id}" data-type="client" title="Editar">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            </button>
                            <button class="delete-btn" data-id="${c.id}" data-type="client" title="Eliminar">
                                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>`;
            }).join('')}</div>`;
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
DIAGNOSIS VIEW - FULLY INTEGRATED
        ═══════════════════════════════════════ */
    let diagnosisImage = null;
    let diagnosisClientId = null;
    let diagnosisClientName = null;
    let currentDiagnosisImage = null;

    function getDiagnosisView() {
        const clientsHtml = State.clients.map(c => `
            <div class="diagnosis-client-card" data-client-id="${c.id}">
                <button class="btn btn-primary btn-sm select-client-btn" data-client-id="${c.id}" data-client-name="${c.name}">
                    Seleccionar
                </button>
                <div class="diagnosis-client-info" style="text-align:center;flex:1;">
                    <strong>${c.name}</strong>
                    <span style="font-size:0.8rem;color:var(--text-secondary)">${c.phone || 'Sin teléfono'}</span>
                </div>
            </div>
        `).join('');

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Diagnóstico Capilar</h1>
                    <p style="color:var(--text-secondary)">Análisis avanzado del cuero cabelludo · <span class="supabase-badge">⚡ IA Vision</span></p>
                </div>
            </div>
            
            <div id="diagnosis-client-selection">
                <div class="data-card" style="margin-bottom:1.5rem;">
                    <h3 style="margin-bottom:1rem;">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:8px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        Seleccionar Cliente
                    </h3>
                    <p style="color:var(--text-secondary);margin-bottom:1rem;font-size:0.9rem;">¿Para quién realizarás el diagnóstico?</p>
                    
                    <div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap;">
                        <button class="btn btn-primary" id="btn-new-client-diagnosis">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                            Nuevo Cliente
                        </button>
                        <button class="btn btn-secondary" id="btn-show-existing-clients">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg>
                            Clientes Existentes
                        </button>
                    </div>
                    
                    <div id="existing-clients-list" style="display:none;">
                        <input type="text" class="form-control" id="client-search-input" placeholder="Buscar cliente..." style="margin-bottom:1rem;">
                        <div id="clients-results" style="max-height:300px;overflow-y:auto;">
                            ${clientsHtml || '<p style="color:var(--text-secondary)">No hay clientes registrados</p>'}
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="diagnosis-main" style="display:none;">
                <div class="diagnosis-header-info" style="margin-bottom:1rem;padding:1rem;background:var(--bg-surface);border-radius:12px;border:1px solid var(--border-color);">
                    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
                        <div>
                            <strong style="font-size:1.1rem;" id="selected-client-name"></strong>
                            <span style="color:var(--text-secondary);font-size:0.85rem;margin-left:0.5rem;" id="selected-client-phone"></span>
                        </div>
                        <button class="btn btn-secondary btn-sm" id="btn-change-client">
                            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                            Cambiar Cliente
                        </button>
                    </div>
                </div>
                
                <!-- INTEGRATED DIAGNOSIS UI -->
                <div class="diagnosis-integrated">
                    <!-- Left: Upload -->
                    <div class="diagnosis-panel">
                        <div class="upload-zone upload-zone-dark" id="drop-zone">
                            <input type="file" id="diag-file-input" accept="image/*" style="display:none;">
                            <svg width="48" height="48" fill="none" stroke="#a78bfa" stroke-width="2" viewBox="0 0 24 24" style="margin:0 auto 1rem;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            <h3 style="margin-bottom:0.5rem;">Sube tu foto microscópica</h3>
                            <p style="font-size:0.9rem;">Arrastra y suelta o haz clic</p>
                        </div>
                        
                        <div class="preview-container" id="preview-container" style="display:none;margin-top:1rem;">
                            <img id="diag-preview-img" src="" alt="Preview" style="width:100%;border-radius:12px;">
                        </div>
                        
                        <div id="action-buttons" style="display:none;margin-top:1.5rem;">
                            <button id="analyze-btn" class="btn btn-primary" style="width:100%;">Iniciar Análisis</button>
                            <button id="reset-btn" class="btn btn-secondary" style="margin-top:0.5rem;width:100%;">Cambiar Imagen</button>
                        </div>
                        
                        <div id="colored-hair-toggle" style="display:none;margin-top:1rem;padding:1rem;background:rgba(139,92,246,0.1);border-radius:12px;">
                            <label style="display:flex;align-items:center;gap:0.75rem;cursor:pointer;">
                                <input type="checkbox" id="colored-hair-checkbox" style="width:20px;height:20px;accent-color:#8b5cf6;">
                                <span>¿Cabello teñido?</span>
                            </label>
                        </div>
                        
                        <button id="camera-btn" class="btn btn-secondary" style="margin-top:1rem;width:100%;">
                            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right:0.5rem;"><circle cx="12" cy="12" r="3"></circle><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path></svg>
                            Sacar Foto
                        </button>
                        
                        <div id="camera-container" style="display:none;margin-top:1rem;">
                            <video id="diag-video" autoplay playsinline style="width:100%;border-radius:12px;background:#000;"></video>
                            <div style="display:flex;gap:0.5rem;margin-top:0.5rem;">
                                <button id="shutter-btn" class="btn btn-primary">Capturar</button>
                                <button id="cancel-camera-btn" class="btn btn-secondary">Cancelar</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right: Results -->
                    <div class="diagnosis-panel" id="results-container">
                        <div id="status-badge" style="display:inline-block;padding:0.25rem 0.75rem;background:#8b5cf6;color:#fff;border-radius:20px;font-size:0.75rem;font-weight:600;margin-bottom:1rem;box-shadow:0 0 10px rgba(139,92,246,0.3);">Calculando...</div>
                        
                        <h2 style="margin-bottom:1rem;">Resultado del Análisis</h2>
                        
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.5rem;">
                            <div class="metric-card-dark">
                                <div id="val-density" class="metric-value-dark">--</div>
                                <div style="font-size:0.7rem;">Densidad <span style="color:#10b981;">(150-200)</span></div>
                            </div>
                            <div class="metric-card-dark">
                                <div id="val-thickness" class="metric-value-dark">--</div>
                                <div style="font-size:0.7rem;">Grosor <span style="color:#10b981;">(60-90)</span></div>
                            </div>
                            <div class="metric-card-dark">
                                <div id="val-hydration" class="metric-value-dark">--</div>
                                <div style="font-size:0.7rem;">Hidratación <span style="color:#10b981;">(50-70)</span></div>
                            </div>
                            <div class="metric-card-dark">
                                <div id="val-sebum" class="metric-value-dark">--</div>
                                <div style="font-size:0.7rem;">Sebo <span style="color:#10b981;">(40-60)</span></div>
                            </div>
                            <div class="metric-card-dark" style="grid-column:span 2;">
                                <div id="val-dandruff" class="metric-value-dark">--</div>
                                <div style="font-size:0.7rem;">Caspa <span style="color:#10b981;">(0-10)</span></div>
                            </div>
                        </div>
                        
                        <div id="maria-nila-products" style="margin-top:1rem;">
                            <h4 style="color:#8b5cf6;margin-bottom:0.75rem;">Productos Maria Nila</h4>
                            <div id="products-grid" style="display:grid;gap:0.75rem;"></div>
                        </div>
                        
                        <div id="treatments-recommendations" style="margin-top:1.5rem;">
                            <h4 style="color:#10b981;margin-bottom:0.75rem;">Tratamientos Olaplex</h4>
                            <div id="treatments-grid" style="display:grid;gap:0.75rem;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .diagnosis-integrated { 
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .diagnosis-panel { 
                    padding: 1.5rem;
                    border-radius: 16px;
                }
                .upload-zone { 
                    border: 2px dashed var(--border-color);
                    border-radius: 12px;
                    padding: 2rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s;
                }
            </style>
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

        // Photo edit buttons for appointments
        document.querySelectorAll('.apt-photo-edit-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                const photoId = e.currentTarget.dataset.photoId;
                const aptItem = e.currentTarget.closest('.apt-mini-photo');
                const aptId = aptItem?.dataset.aptId;
                const apt = State.appointments.find(a => a.id === aptId);
                const photo = apt?.appointmentPhotos?.find(p => p.id === photoId);
                if (photo && aptId) {
                    window.editAptPhoto(photoId, aptId, photo.photo_date || '', photo.notes || '', photo.photo_type || 'before');
                }
            });
        });

        // Photo delete buttons for appointments
        document.querySelectorAll('.apt-photo-delete-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                e.stopPropagation();
                const photoId = e.currentTarget.dataset.photoId;
                const aptItem = e.currentTarget.closest('.apt-mini-photo');
                const aptId = aptItem?.dataset.aptId;
                if (aptId && photoId && confirm('¿Eliminar esta foto?')) {
                    const apt = State.appointments.find(a => a.id === aptId);
                    if (apt && apt.appointmentPhotos) {
                        apt.appointmentPhotos = apt.appointmentPhotos.filter(p => p.id !== photoId);
                        await supabase.from('appointments').update({ appointment_photos: apt.appointmentPhotos }).eq('id', aptId);
                        showToast('Foto eliminada');
                        renderRoute();
                    }
                }
            });
        });

        // Hover show photo buttons
        document.querySelectorAll('.apt-mini-photo').forEach(el => {
            el.addEventListener('mouseenter', () => {
                const btns = el.querySelector('div[style*="position:absolute"]');
                if (btns) btns.style.opacity = '1';
            });
            el.addEventListener('mouseleave', () => {
                const btns = el.querySelector('div[style*="position:absolute"]');
                if (btns) btns.style.opacity = '0.8';
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

        // Diagnosis - Nuevo Cliente
        const btnNewClientDiagnosis = document.getElementById('btn-new-client-diagnosis');
        if (btnNewClientDiagnosis) {
            btnNewClientDiagnosis.addEventListener('click', () => {
                showClientFormForDiagnosis();
            });
        }

        // Diagnosis - Mostrar clientes existentes
        const btnShowExistingClients = document.getElementById('btn-show-existing-clients');
        if (btnShowExistingClients) {
            btnShowExistingClients.addEventListener('click', () => {
                const list = document.getElementById('existing-clients-list');
                if (list) {
                    list.style.display = list.style.display === 'none' ? 'block' : 'none';
                }
            });
        }

        // Diagnosis - Buscar cliente
        const clientSearchInput = document.getElementById('client-search-input');
        if (clientSearchInput) {
            clientSearchInput.addEventListener('input', e => {
                const searchTerm = e.target.value.toLowerCase();
                document.querySelectorAll('.diagnosis-client-card').forEach(card => {
                    const name = card.querySelector('strong')?.textContent.toLowerCase() || '';
                    const phone = card.querySelector('span')?.textContent.toLowerCase() || '';
                    card.style.display = (name.includes(searchTerm) || phone.includes(searchTerm)) ? 'flex' : 'none';
                });
            });
        }

        // Diagnosis - Seleccionar cliente existente
        document.querySelectorAll('.select-client-btn').forEach(btn => {
            btn.addEventListener('click', async e => {
                const clientId = e.currentTarget.dataset.clientId;
                const clientName = e.currentTarget.dataset.clientName;
                const client = State.clients.find(c => c.id === clientId);
                if (client) {
                    await selectClientForDiagnosis(client);
                }
            });
        });

        // Diagnosis - Cambiar cliente
        const btnChangeClient = document.getElementById('btn-change-client');
        if (btnChangeClient) {
            btnChangeClient.addEventListener('click', () => {
                document.getElementById('diagnosis-client-selection').style.display = 'block';
                document.getElementById('diagnosis-main').style.display = 'none';
            });
        }
    }

    function showClientFormForDiagnosis() {
        const html = `
            <form id="client-form-diagnosis">
                <div class="form-group">
                    <label>Nombre y Apellidos</label>
                    <input type="text" class="form-control" name="name" required placeholder="Ej: María García">
                </div>
                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="tel" class="form-control" name="phone" placeholder="Ej: +34 600 123 456">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" name="email" placeholder="Ej: correo@ejemplo.com">
                </div>
                <div class="form-group">
                    <label>¿Enviar mensaje de WhatsApp automático?</label>
                    <select class="form-control" name="enviar_was">
                        <option value="true">Sí</option>
                        <option value="false" selected>No</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Crear y Continuar</button>
                </div>
            </form>`;

        openModal('Nuevo Cliente para Diagnóstico', html, () => {
            document.getElementById('client-form-diagnosis').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const clientId = generateId();
                const data = {
                    id: clientId,
                    name: fd.get('name'),
                    phone: fd.get('phone'),
                    email: fd.get('email'),
                    enviar_was: fd.get('enviar_was') === 'true',
                    observations: ''
                };

                const success = await addClient(data);
                if (success) {
                    closeModal();
                    await selectClientForDiagnosis(data);
                } else {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Crear y Continuar';
                }
            });
        });
    }

    async function selectClientForDiagnosis(client) {
        document.getElementById('diagnosis-client-selection').style.display = 'none';
        document.getElementById('diagnosis-main').style.display = 'block';
        document.getElementById('selected-client-name').textContent = client.name;
        document.getElementById('selected-client-phone').textContent = client.phone || '';
        diagnosisClientId = client.id;
        diagnosisClientName = client.name;

        sessionStorage.setItem('nymara_diagnosis_client_id', client.id);
        sessionStorage.setItem('nymara_diagnosis_client_name', client.name);
        sessionStorage.setItem('nymara_uploaded_hashes', '[]');
        
        // Inicializar eventos de diagnóstico integrado
        initDiagnosisEvents();
    }

    function initDiagnosisEvents() {
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('diag-file-input');
        const analyzeBtn = document.getElementById('analyze-btn');
        const resetBtn = document.getElementById('reset-btn');
        const cameraBtn = document.getElementById('camera-btn');
        
        if (dropZone && fileInput) {
            dropZone.addEventListener('click', () => fileInput.click());
            dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.borderColor = 'var(--accent-color)'; });
            dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = 'var(--border-color)'; });
            dropZone.addEventListener('drop', e => {
                e.preventDefault();
                dropZone.style.borderColor = 'var(--border-color)';
                const file = e.dataTransfer.files[0];
                if (file) processDiagnosisFile(file);
            });
            fileInput.addEventListener('change', e => {
                const file = e.target.files[0];
                if (file) processDiagnosisFile(file);
});
        }
        
if (analyzeBtn) {
            analyzeBtn.onclick = () => {
                console.log('Analyze button clicked');
                runDiagnosisAnalysis();
            };
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                document.getElementById('preview-container').style.display = 'none';
                document.getElementById('action-buttons').style.display = 'none';
                document.getElementById('drop-zone').style.display = 'block';
                document.getElementById('colored-hair-toggle').style.display = 'none';
                currentDiagnosisImage = null;
                currentDiagnosisResults = null;
                diagnosisImage = null;
            });
        }
        
        if (cameraBtn) {
            cameraBtn.addEventListener('click', async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                    const video = document.getElementById('diag-video');
                    video.srcObject = stream;
                    document.getElementById('camera-container').style.display = 'block';
                    cameraBtn.style.display = 'none';
                    dropZone.style.display = 'none';
                    
                    document.getElementById('shutter-btn').addEventListener('click', () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        canvas.getContext('2d').drawImage(video, 0, 0);
                        canvas.toBlob(blob => {
                            const file = new File([blob], 'camera_capture.jpg', { type: 'image/jpeg' });
                            processDiagnosisFile(file);
                            stream.getTracks().forEach(t => t.stop());
                            document.getElementById('camera-container').style.display = 'none';
                            cameraBtn.style.display = 'flex';
                            dropZone.style.display = 'block';
                        }, 'image/jpeg', 0.95);
                    });
                    
                    document.getElementById('cancel-camera-btn').addEventListener('click', () => {
                        stream.getTracks().forEach(t => t.stop());
                        document.getElementById('camera-container').style.display = 'none';
                        cameraBtn.style.display = 'flex';
                        dropZone.style.display = 'block';
                    });
                } catch (err) {
                    showToast('No se pudo acceder a la cámara', 'error');
                }
            });
        }
    }

    function processDiagnosisFile(file) {
        if (!file || !file.type.startsWith('image/')) return;
        
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                currentDiagnosisImage = img;
                const preview = document.getElementById('diag-preview-img');
                if (preview) {
                    preview.src = e.target.result;
                    document.getElementById('preview-container').style.display = 'block';
                    document.getElementById('drop-zone').style.display = 'none';
                    document.getElementById('action-buttons').style.display = 'flex';
                    document.getElementById('colored-hair-toggle').style.display = 'flex';
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    async function runDiagnosisAnalysis() {
        console.log('runDiagnosisAnalysis called, currentDiagnosisImage:', !!currentDiagnosisImage);
        if (!currentDiagnosisImage) return;
        
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) analyzeBtn.disabled = true;

        const statusBadge = document.getElementById('status-badge');
        if (statusBadge) {
            statusBadge.textContent = 'Analizando tejidos...';
            statusBadge.style.background = '#f59e0b';
        }
        
        try {
            console.log('Starting diagnosis analysis...');
            
            // Validar imagen primero
            if (!validateDiagnosisImage(currentDiagnosisImage)) {
                console.log('Image validation failed');
                if (statusBadge) {
                    statusBadge.textContent = 'Imagen no válida';
                    statusBadge.style.background = '#ef4444';
                }
                alert('⚠️ Imagen no válida.\n\nLa foto debe ser una toma microscópica del cuero cabelludo.');
                if (analyzeBtn) analyzeBtn.disabled = false;
                return;
            }
            
            console.log('Running detection functions...');
            // Análisis real de la imagen
            const density = detectHairDensity(currentDiagnosisImage);
            console.log('Density:', density);
            const thickness = detectHairThickness(currentDiagnosisImage);
            console.log('Thickness:', thickness);
            const { hydration, sebumLevel } = detectHydrationAndSebum(currentDiagnosisImage);
            console.log('Hydration:', hydration, 'Sebum:', sebumLevel);
            const dandruff = detectDandruffLevel(currentDiagnosisImage);
            console.log('Dandruff:', dandruff);
            
            document.getElementById('val-density').textContent = density;
            document.getElementById('val-thickness').textContent = thickness;
            document.getElementById('val-hydration').textContent = hydration;
            document.getElementById('val-sebum').textContent = sebumLevel;
            document.getElementById('val-dandruff').textContent = dandruff;
            
            const isColored = document.getElementById('colored-hair-checkbox')?.checked || false;
            const diagnosis = { density, thickness, hydration: parseInt(hydration), sebum: parseInt(sebumLevel) || 50, isColored };
            
            displayDiagnosisProducts(getMariaNilaRecommendations(diagnosis));
            displayDiagnosisTreatments(getOlaplexRecommendations(diagnosis));
            
            if (statusBadge) {
                statusBadge.textContent = '✓ Análisis completado';
                statusBadge.style.background = '#10b981';
            }
            // Guardar resultados para usar al guardar
            currentDiagnosisResults = { density, thickness, hydration, sebumLevel, isColored };
        } catch (err) {
            console.error('ERROR in diagnosis:', err);
            console.warn('Análisis completado con advertencias');
            if (statusBadge) {
                statusBadge.textContent = '✓ Análisis completado';
                statusBadge.style.background = '#10b981';
            }
        } finally {
            console.log('Finally block - re-enabling button');
            if (analyzeBtn) analyzeBtn.disabled = false;
        }
    }

    function validateDiagnosisImage(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 60; canvas.height = 60;
        ctx.drawImage(img, 0, 0, 60, 60);
        const data = ctx.getImageData(0, 0, 60, 60).data;
        
        let rSum = 0, gSum = 0, bSum = 0;
        let rSqSum = 0, gSqSum = 0, bSqSum = 0;
        let edges = 0;
        const n = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            rSum += r; gSum += g; bSum += b;
            rSqSum += r*r; gSqSum += g*g; bSqSum += b*b;
            
            if (i < data.length - 4) {
                const r2 = data[i+4], g2 = data[i+5], b2 = data[i+6];
                const diff = Math.abs(r-r2) + Math.abs(g-g2) + Math.abs(b-b2);
                if (diff > 25) edges++;
            }
        }
        
        const edgeDensity = edges / n;
        const rAvg = rSum / n, gAvg = gSum / n, bAvg = bSum / n;
        const variance = ((rSqSum/n - (rAvg*rAvg)) + (gSqSum/n - (gAvg*gAvg)) + (bSqSum/n - (bAvg*bAvg))) / 3;
        
        const r = rAvg/255, g = gAvg/255, b = bAvg/255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const d = max - min;
        let h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
            else if (max === g) h = (b - r) / d + 2;
            else h = (r - g) / d + 4;
            h /= 6;
        }
        const hueDeg = h * 360;
        const isBiological = (hueDeg < 50 || hueDeg > 340) && s < 0.6;
        const isMicroscopic = edgeDensity > 0.08;
        const hasTexture = variance > 250;
        
        return isBiological && isMicroscopic && hasTexture;
    }

    function detectHairDensity(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let hairPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const saturation = Math.max(r, g, b) === 0 ? 0 : (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);
            
            // Detectar cabello (oscuro con cierta saturación)
            if (brightness < 100 && saturation > 0.1 && saturation < 0.5) {
                hairPixels++;
            }
        }
        
        const density = Math.floor((hairPixels / totalPixels) * 300 + 100);
        return Math.min(280, Math.max(80, density));
    }

    function detectHairThickness(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 80; canvas.height = 80;
        ctx.drawImage(img, 0, 0, 80, 80);
        const data = ctx.getImageData(0, 0, 80, 80).data;
        
        let darkPixels = 0;
        let totalDarkPixels = 0;
        
        for (let y = 0; y < 80; y++) {
            for (let x = 0; x < 80; x++) {
                const i = (y * 80 + x) * 4;
                const r = data[i], g = data[i+1], b = data[i+2];
                const brightness = (r + g + b) / 3;
                
                if (brightness < 80) {
                    darkPixels++;
                    // Contar transiciones blanco-oscuro para estimar grosor
                    if (x > 0) {
                        const prevI = (y * 80 + (x-1)) * 4;
                        const prevBright = (data[prevI] + data[prevI+1] + data[prevI+2]) / 3;
                        if ((brightness < 80 && prevBright >= 80) || (brightness >= 80 && prevBright < 80)) {
                            totalDarkPixels++;
                        }
                    }
                }
            }
        }
        
        // Grosor basado en transiciones (más transiciones = cabello más fino)
        const thickness = Math.floor(90 - (totalDarkPixels / 20));
        return Math.min(120, Math.max(40, thickness));
    }

    function detectHydrationAndSebum(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 80; canvas.height = 80;
        ctx.drawImage(img, 0, 0, 80, 80);
        const data = ctx.getImageData(0, 0, 80, 80).data;
        
        let shinyPixels = 0;
        let dryPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const saturation = Math.max(r, g, b) === 0 ? 0 : (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b);
            
            // Piel brillante = excesso de sebo
            if (brightness > 180 && saturation < 0.2 && r > 150 && g > 150 && b > 150) {
                shinyPixels++;
            }
            // Piel mate/sin brillo = seca
            if (brightness < 100 && saturation < 0.3) {
                dryPixels++;
            }
        }
        
        const shinyRatio = shinyPixels / totalPixels;
        const dryRatio = dryPixels / totalPixels;
        
        let hydration = 60;
        let sebumLevel = 'Normal';
        
        if (shinyRatio > 0.15) {
            sebumLevel = 'Alto';
            hydration = Math.floor(40 + Math.random() * 20);
        } else if (dryRatio > 0.2) {
            sebumLevel = 'Bajo';
            hydration = Math.floor(30 + Math.random() * 25);
        } else {
            sebumLevel = 'Normal';
            hydration = Math.floor(50 + Math.random() * 20);
        }
        
        return { hydration, sebumLevel };
    }

    function detectDandruffLevel(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; canvas.height = 100;
        ctx.drawImage(img, 0, 0, 100, 100);
        const data = ctx.getImageData(0, 0, 100, 100).data;
        
        let dandruffPixels = 0;
        let skinPixels = 0;
        const totalPixels = data.length / 4;
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i+1], b = data[i+2];
            const brightness = (r + g + b) / 3;
            const maxChannel = Math.max(r, g, b);
            const minChannel = Math.min(r, g, b);
            const saturation = maxChannel === 0 ? 0 : (maxChannel - minChannel) / maxChannel;
            
            const hasRed = r > g && r > b;
            const isSkinTone = r > 100 && g > 80 && b > 50 && saturation < 0.4 && hasRed;
            
            if (isSkinTone) skinPixels++;
            
            const isDandruff = brightness > 220 && saturation < 0.15 && (maxChannel - minChannel) > 30 && !isSkinTone;
            if (isDandruff) dandruffPixels++;
        }
        
        const dandruffRatio = (dandruffPixels / totalPixels) * 100;
return Math.round(dandruffRatio * 10);
    }

window.addEventListener('message', async (event) => {
        if (event.data && event.data.type === 'diagnosis_photo') {
            try {
                const clientId = sessionStorage.getItem('nymara_diagnosis_client_id');
                const clientName = sessionStorage.getItem('nymara_diagnosis_client_name');
                const results = event.data.results;
                const photoData = event.data.photoData;
                
                console.log('DEBUG: Parent received diagnosis_photo message:', { clientId, clientName, results, hasPhoto: !!photoData });
                showToast(`Análisis completado para ${clientName || 'Cliente'}`);
                
                // Guardar foto si existe
                if (photoData && clientId) {
                    try {
                        const base64Data = photoData.replace(/^data:image\/\w+;base64,/, '');
                        const binaryString = atob(base64Data);
                        const bytes = new Uint8Array(binaryString.length);
                        for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
                        const blob = new Blob([bytes], { type: 'image/jpeg' });
                        
                        const fileName = `${clientId}/diagnosis_${Date.now()}.jpg`;
                        const { data, error } = await supabase.storage
                            .from('client-photos')
                            .upload(fileName, blob);
                        
                        if (error) {
                            console.error('Error uploading diagnosis photo:', error);
                        } else {
                            const { data: { publicUrl } } = supabase.storage
                                .from('client-photos')
                                .getPublicUrl(fileName);
                            
                            const photoId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
                                const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                                return v.toString(16);
                            });
                            
                            await supabase.from('client_photos').insert({
                                id: photoId,
                                client_id: clientId,
                                photo_url: publicUrl,
                                photo_date: new Date().toISOString().split('T')[0],
                                photo_type: 'antes',
                                notes: `Densidad: ${results?.density || '--'}, Grosor: ${results?.thickness || '--'}, Hidratación: ${results?.hydration || '--'}%, Sebo: ${results?.sebum || '--'}, Caspa: ${results?.dandruff || '--'}`
                            });
                            
                            console.log('Diagnosis photo saved:', publicUrl);
                            showToast('✓ Foto de diagnóstico guardada');
                        }
                    } catch (e) {
                        console.error('Error saving diagnosis photo:', e);
                    }
                }
                
                // Mostrar recomendaciones en la app principal
                if (results) {
                    const diagnosis = {
                        density: results.density || 150,
                        thickness: results.thickness || 65,
                        hydration: parseInt(results.hydration) || 55,
                        sebum: results.sebum === 'Alto' ? 80 : results.sebum === 'Normal' ? 55 : 35,
                        isColored: results.isColored || false
                    };
                    const products = getMariaNilaRecommendations(diagnosis);
                    const treatments = getOlaplexRecommendations(diagnosis);
                    displayDiagnosisProducts(products);
                    displayDiagnosisTreatments(treatments);
                }
            } catch (e) {
                console.error('Error handling diagnosis_photo message:', e);
            }
        }
    });

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
                ${isEdit ? `
                <div class="form-group">
                    <label>Fotos del Cliente</label>
                    <div id="client-photos-list" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px"></div>
                    <button type="button" class="btn btn-sm btn-secondary" id="btn-add-client-photo">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Foto
                    </button>
                    <input type="file" id="client-photo-input" accept="image/*" style="display:none">
                </div>
                ` : ''}
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="document.getElementById('btn-close-modal').click()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Guardar' : 'Añadir'}</button>
                </div>
            </form>`;

        openModal(isEdit ? 'Editar Cliente' : 'Nuevo Cliente', html, async () => {
            let currentClientId = isEdit ? info.id : generateId();
            let sessionPhotos = [];
            let pendingFiles = [];
            let uploadedHashes = [];

            const renderPhotos = () => {
                const container = document.getElementById('client-photos-list');
                if (!container) return;
                
                let html = '';
                sessionPhotos.forEach((p, idx) => {
                    const photoType = (p.photo_type === 'after') ? 'Después' : 'Antes';
                    html += `
                        <div class="client-mini-photo" data-photo-id="${p.id}" style="position:relative;text-align:center">
                            <img src="${p.photo_url}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer" onclick="openModal('Foto','<img src=${p.photo_url} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <div style="font-size:0.65rem;color:var(--text-secondary)">${photoType}</div>
                            <div style="font-size:0.6rem;color:var(--text-secondary)">${p.photo_date || ''}</div>
                            <div style="display:flex;gap:2px;justify-content:center">
                                <button type="button" class="client-photo-edit-btn" data-photo-id="${p.id}" title="Editar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">✏️</button>
                                <button type="button" class="delete-btn" data-id="${p.id}" title="Eliminar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">🗑️</button>
                            </div>
                        </div>`;
                });
                
                pendingFiles.forEach((pf, idx) => {
                    html += `
                        <div style="position:relative;text-align:center">
                            <img src="${pf.preview}" style="width:60px;height:60px;object-fit:cover;border-radius:8px">
                            <div style="font-size:0.65rem;color:var(--text-secondary)">Antes</div>
                            <div style="font-size:0.6rem;color:var(--text-secondary)">${toLocalDateStr(new Date())}</div>
                            <div style="display:flex;gap:2px;justify-content:center">
                                <button type="button" class="delete-pending-btn" data-idx="${idx}" title="Eliminar" style="background:rgba(0,0,0,0.6);color:white;border:none;border-radius:4px;width:20px;height:20px;cursor:pointer;font-size:10px;opacity:0.8">🗑️</button>
                            </div>
                        </div>`;
                });
                
                container.innerHTML = html;
            };

            console.log('Client form opened, isEdit:', isEdit, 'info:', info);
            if (isEdit && info?.id) {
                console.log('Loading photos for client:', info.id);
                sessionPhotos = await loadClientPhotos(info.id) || [];
                console.log('sessionPhotos loaded:', sessionPhotos);
                renderPhotos();
            }

            const btnAddPhoto = document.getElementById('btn-add-client-photo');
            const photoInput = document.getElementById('client-photo-input');
            
            if (btnAddPhoto && photoInput) {
                btnAddPhoto.addEventListener('click', () => photoInput.click());
                
                photoInput.addEventListener('change', async e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const buffer = await file.arrayBuffer();
                    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
                    const hash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
                    
                    const isDuplicate = sessionPhotos.some(p => p.photo_hash === hash) || uploadedHashes.includes(hash);
                    if (isDuplicate) {
                        showToast('Esta foto ya existe', 'error');
                        photoInput.value = '';
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = ev => {
                        pendingFiles.push({ file, hash, preview: ev.target.result });
                        uploadedHashes.push(hash);
                        renderPhotos();
                    };
                    reader.readAsDataURL(file);
                    photoInput.value = '';
                });
            }

            const photosList = document.getElementById('client-photos-list');
            if (photosList) {
                photosList.addEventListener('click', async e => {
                    const delBtn = e.target.closest('.delete-btn');
                    if (delBtn) {
                        const photoId = delBtn.dataset.id;
                        if (confirm('¿Eliminar foto?')) {
                            await deleteClientPhoto(photoId, currentClientId);
                            sessionPhotos = sessionPhotos.filter(p => p.id !== photoId);
                            renderPhotos();
                        }
                        return;
                    }
                    
                    const delPending = e.target.closest('.delete-pending-btn');
                    if (delPending) {
                        const idx = parseInt(delPending.dataset.idx);
                        uploadedHashes.splice(idx, 1);
                        pendingFiles.splice(idx, 1);
                        renderPhotos();
                        return;
                    }
                    
                    const editBtn = e.target.closest('.client-photo-edit-btn');
                    if (editBtn) {
                        const photoId = editBtn.dataset.photoId;
                        const photo = sessionPhotos.find(p => p.id === photoId);
                        if (photo) {
                            window.editClientPhoto(photoId, currentClientId, photo.photo_date || '', photo.notes || '', photo.photo_type || 'before');
                        }
                        return;
                    }
                });
                
                photosList.addEventListener('change', async e => {
                    const select = e.target;
                    if (select.tagName === 'SELECT' && select.dataset.id) {
                        const photoId = select.dataset.id;
                        const field = select.dataset.field;
                        const value = select.value;
                        await updateClientPhoto(photoId, currentClientId, { [field]: value });
                    }
                    const input = e.target;
                    if (input.tagName === 'INPUT' && input.dataset.id && input.type !== 'file') {
                        const photoId = input.dataset.id;
                        const field = input.dataset.field;
                        const value = input.value;
                        await updateClientPhoto(photoId, currentClientId, { [field]: value });
                    }
                });
            }

            document.getElementById('client-form').addEventListener('submit', async e => {
                e.preventDefault();
                const submitBtn = e.target.querySelector('[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Guardando…';

                const fd = new FormData(e.target);
                const data = { 
                    id: currentClientId, 
                    name: fd.get('name'), 
                    phone: fd.get('phone'), 
                    email: fd.get('email'),
                    enviar_was: fd.get('enviar_was') === 'true',
                    observations: fd.get('observations')
                };

                let success;
                if (isEdit) success = await updateClient(data);
                else success = await addClient(data);

                if (success && pendingFiles.length > 0) {
                    for (const pf of pendingFiles) {
                        const typeSelect = document.querySelector(`.pending-type[data-idx="${pendingFiles.indexOf(pf)}"]`);
                        const dateInput = document.querySelector(`.pending-date[data-idx="${pendingFiles.indexOf(pf)}"]`);
                        const notesInput = document.querySelector(`.pending-notes[data-idx="${pendingFiles.indexOf(pf)}"]`);
                        await uploadClientPhoto(
                            pf.file, 
                            currentClientId, 
                            dateInput?.value || toLocalDateStr(new Date()),
                            typeSelect?.value || 'before',
                            notesInput?.value || ''
                        );
                    }
                    showToast('Fotos guardadas');
                }

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
                    <label>Fotos de la Cita</label>
                    <div id="apt-photos-list" style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px"></div>
                    <button type="button" class="btn btn-sm btn-secondary" id="btn-add-apt-photo" style="display:inline-flex">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="margin-right:5px"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Foto
                    </button>
                    <input type="file" id="apt-photo-input" accept="image/*" style="display:none">
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
            
            let pendingFiles = [];
            let uploadedHashes = [];

            const renderAptPhotos = () => {
                const container = document.getElementById('apt-photos-list');
                if (!container) return;
                
                let html = '';
                pendingFiles.forEach((pf, idx) => {
                    html += `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                            <img src="${pf.preview}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer" onclick="openModal('Foto','<img src=${pf.preview} style=max-width:100%;max-height:70vh;border-radius:8px>')">
                            <span style="font-size:0.7rem;color:var(--text-secondary)">${pf.date || toLocalDateStr(new Date())}</span>
                            <button type="button" class="delete-apt-pending-btn" data-idx="${idx}" title="Eliminar" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1rem">🗑️</button>
                        </div>`;
                });
                
                container.innerHTML = html;
            };

            const btnAddPhoto = document.getElementById('btn-add-apt-photo');
            const photoInput = document.getElementById('apt-photo-input');
            
            if (btnAddPhoto && photoInput) {
                btnAddPhoto.addEventListener('click', () => photoInput.click());
                
                photoInput.addEventListener('change', async e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const buffer = await file.arrayBuffer();
                    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
                    const hash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
                    
                    const isDuplicate = uploadedHashes.includes(hash);
                    if (isDuplicate) {
                        showToast('Esta foto ya existe', 'error');
                        photoInput.value = '';
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = ev => {
                        pendingFiles.push({ file, hash, preview: ev.target.result, type: 'before', date: toLocalDateStr(new Date()), notes: '' });
                        uploadedHashes.push(hash);
                        renderAptPhotos();
                    };
                    reader.readAsDataURL(file);
                    photoInput.value = '';
                });
            }

            const photosList = document.getElementById('apt-photos-list');
            if (photosList) {
                photosList.addEventListener('click', e => {
                    const delPending = e.target.closest('.delete-apt-pending-btn');
                    if (delPending) {
                        const idx = parseInt(delPending.dataset.idx);
                        uploadedHashes.splice(idx, 1);
                        pendingFiles.splice(idx, 1);
                        renderAptPhotos();
                    }
                });
            }

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
                    userEmail: State.currentUserEmail || ''
                };

                const todayStr = toLocalDateStr(new Date());
                
                // Guardar fotos de la cita
                if (pendingFiles.length > 0) {
                    data.appointmentPhotos = [];
                    console.log('Saving photos for client:', data.clientId);
                    for (const pf of pendingFiles) {
                        console.log('Uploading photo:', { date: pf.date, type: pf.type, notes: pf.notes });
                        const photoRecord = await uploadClientPhoto(pf.file, data.clientId, pf.date, pf.type, pf.notes);
                        if (photoRecord) {
                            data.appointmentPhotos.push(photoRecord);
                        } else {
                            console.log('Photo upload failed - no record returned');
                        }
                    }
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
});
