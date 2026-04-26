const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

// ── Find the function showAppointmentForm and replace it entirely ──
const START_MARKER = '    function showAppointmentForm(info = null) {';
const END_MARKER_AFTER = '    function showSettingsForm() {'; // function that comes after

const startIdx = code.indexOf(START_MARKER);
const endIdx = code.indexOf(END_MARKER_AFTER);

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find markers. startIdx:', startIdx, 'endIdx:', endIdx);
    process.exit(1);
}

const before = code.substring(0, startIdx);
const after = code.substring(endIdx);

const newFunction = `    function showAppointmentForm(info = null) {
        if (State.clients.length === 0 || State.services.length === 0) {
            showToast('Debes tener al menos un cliente y un servicio antes de agendar una cita.', 'error');
            return;
        }

        const defaultDate = info ? info.date : (State.selectedDate || toLocalDateStr(new Date()));
        const defaultDuration = State.services.length > 0 ? parseInt(State.services[0].duration) : 30;
        const suggestedTime = info ? info.time : findNextAvailableTime(defaultDate, defaultDuration);

        const userColor = State.currentUserColor || '#6366f1';
        const html = \`
            <form id="appointment-form">
                <div class="form-user-badge" style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;padding:0.5rem;background:rgba(0,0,0,0.03);border-radius:8px;">
                    <div style="width:12px;height:12px;border-radius:50%;background:\${userColor};flex-shrink:0;"></div>
                    <span style="font-size:0.8rem;color:var(--text-secondary);">Creando cita como <strong>\${State.currentUserEmail || 'usuario'}</strong></span>
                </div>
                <div class="form-group">
                    <label>Cliente</label>
                    <select class="form-control" name="clientId" required>
                        \${State.clients.map(c => \`<option value="\${c.id}" \${info && info.clientId === c.id ? "selected" : ""}>\${c.name}</option>\`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Servicio</label>
                    <select class="form-control" name="serviceId" required>
                        \${State.services.map(s => \`<option value="\${s.id}" \${info && info.serviceId === s.id ? "selected" : ""}>\${s.name} (\${s.duration} min · \${parseFloat(s.price).toFixed(2)}€)</option>\`).join('')}
                    </select>
                </div>
                <div style="display:flex;gap:1rem">
                    <div class="form-group" style="flex:1">
                        <label>Fecha</label>
                        <input type="date" class="form-control" name="date" required value="\${defaultDate}">
                    </div>
                    <div class="form-group" style="flex:1">
                        <label>Hora</label>
                        <input type="time" class="form-control" name="time" required value="\${suggestedTime}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Notas (opcional)</label>
                    <textarea class="form-control" name="notes" rows="2" placeholder="Información adicional...">\${info ? (info.notes || "") : ""}</textarea>
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
                    <button type="submit" class="btn btn-primary">\${info ? "Guardar" : "Agendar Cita"}</button>
                </div>
            </form>\`;

        openModal(info ? 'Editar Cita' : 'Nueva Cita', html, () => {
            const form = document.getElementById('appointment-form');
            const dateInput = form.querySelector('[name="date"]');
            const timeInput = form.querySelector('[name="time"]');
            const serviceSelect = form.querySelector('[name="serviceId"]');
            
            // Pre-cargar fotos existentes si estamos editando una cita
            let existingPhotos = (info && Array.isArray(info.appointmentPhotos)) ? [...info.appointmentPhotos] : [];
            let pendingFiles = [];
            let uploadedHashes = [];

            const renderAptPhotos = () => {
                const container = document.getElementById('apt-photos-list');
                if (!container) return;
                
                let html = '';

                // Fotos ya guardadas en la cita
                existingPhotos.forEach((ep, idx) => {
                    const src = ep.photo_url || ep.preview || '';
                    html += \`
                        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                            <img src="\${src}" class="zoom-on-hover" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer">
                            <span style="font-size:0.7rem;color:var(--text-secondary)">\${ep.photo_date || ep.date || ''}</span>
                            <button type="button" class="delete-existing-apt-photo-btn" data-idx="\${idx}" title="Eliminar" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1rem">🗑️</button>
                        </div>\`;
                });

                // Fotos nuevas pendientes de subir
                pendingFiles.forEach((pf, idx) => {
                    html += \`
                        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                            <img src="\${pf.preview}" class="zoom-on-hover" style="width:60px;height:60px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid #a78bfa">
                            <span style="font-size:0.7rem;color:#a78bfa">Nueva</span>
                            <button type="button" class="delete-apt-pending-btn" data-idx="\${idx}" title="Eliminar" style="background:none;border:none;color:var(--text-secondary);cursor:pointer;font-size:1rem">🗑️</button>
                        </div>\`;
                });
                
                container.innerHTML = html;
            };

            renderAptPhotos(); // Mostrar fotos existentes al abrir el modal

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
                    
                    const isDuplicateInSession = uploadedHashes.includes(hash);
                    const clientIdVal = document.querySelector('#appointment-form [name="clientId"]')?.value;
                    const isDuplicateInDB = clientIdVal && State.clientPhotos && State.clientPhotos[clientIdVal] &&
                        State.clientPhotos[clientIdVal].some(p => p.photo_hash === hash);
                    
                    if (isDuplicateInSession || isDuplicateInDB) {
                        showToast('Esta foto ya existe', 'error');
                        photoInput.value = '';
                        return;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = ev => {
                        pendingFiles.push({ file, hash, preview: ev.target.result, type: 'after', date: toLocalDateStr(new Date()), notes: '' });
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
                        return;
                    }
                    const delExisting = e.target.closest('.delete-existing-apt-photo-btn');
                    if (delExisting) {
                        const idx = parseInt(delExisting.dataset.idx);
                        existingPhotos.splice(idx, 1);
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
                submitBtn.textContent = info ? 'Guardando…' : 'Agendando…';

                const fd = new FormData(e.target);
                const appointmentId = info ? info.id : generateId();
                const data = {
                    id: appointmentId,
                    clientId: fd.get('clientId'),
                    serviceId: fd.get('serviceId'),
                    date: fd.get('date'),
                    time: fd.get('time'),
                    notes: fd.get('notes'),
                    userEmail: State.currentUserEmail || ''
                };

                // Subir fotos nuevas y combinar con las existentes
                const newPhotoRecords = [];
                for (const pf of pendingFiles) {
                    const photoRecord = await uploadClientPhoto(pf.file, data.clientId, pf.date, pf.type, pf.notes);
                    if (photoRecord) newPhotoRecords.push(photoRecord);
                }
                // Fusionar fotos existentes (no eliminadas) + nuevas subidas
                data.appointmentPhotos = [...existingPhotos, ...newPhotoRecords];

                // Validar horario de trabajo
                const [targetHour, targetMin] = data.time.split(':').map(Number);
                const targetStartMinutes = targetHour * 60 + targetMin;
                const targetService = State.services.find(s => s.id === data.serviceId);
                const targetEndMinutes = targetStartMinutes + (targetService ? parseInt(targetService.duration) : 0);

                const [startH, startM] = State.settings.startTime.split(':').map(Number);
                const [endH, endM] = State.settings.endTime.split(':').map(Number);
                const workingStartMins = startH * 60 + startM;
                const workingEndMins = endH * 60 + endM;

                if (targetStartMinutes < workingStartMins || targetEndMinutes > workingEndMins) {
                    showToast(\`El horario seleccionado se sale de tus horas de apertura (\${State.settings.startTime} - \${State.settings.endTime}).\`, 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = info ? 'Guardar' : 'Agendar Cita';
                    return;
                }

                const hasCollision = State.appointments.some(apt => {
                    if (apt.date !== data.date || (info && apt.id === info.id)) return false;
                    const [aptHour, aptMin] = apt.time.split(':').map(Number);
                    const aptStartMinutes = aptHour * 60 + aptMin;
                    const aptService = State.services.find(s => s.id === apt.serviceId);
                    const aptEndMinutes = aptStartMinutes + (aptService ? parseInt(aptService.duration) : 0);
                    return targetStartMinutes < aptEndMinutes && targetEndMinutes > aptStartMinutes;
                });

                if (hasCollision) {
                    showToast('El horario elegido choca con una cita ya existente.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = info ? 'Guardar' : 'Agendar Cita';
                    return;
                }

                if (info) {
                    // Persistir fotos en la cita editada
                    await supabase.from('appointments').update({ appointment_photos: data.appointmentPhotos }).eq('id', data.id);
                    const aptIdx = State.appointments.findIndex(a => a.id === data.id);
                    if (aptIdx !== -1) State.appointments[aptIdx].appointmentPhotos = data.appointmentPhotos;
                    if (await updateAppointment(data)) {
                        closeModal();
                        renderRoute();
                    } else {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Guardar';
                    }
                } else {
                    if (await addAppointment(data)) {
                        closeModal();
                        renderRoute();
                        // Notificar por WhatsApp si el cliente lo tiene activado
                        const client = State.clients.find(c => c.id === data.clientId);
                        if (client && (client.enviar_was === true || client.enviar_was === 'true' || client.enviar_was === 1) && client.phone) {
                            sendWASMessage(client.phone, client.name, data.date, data.time);
                        }
                    } else {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Agendar Cita';
                    }
                }
            });
        });
    }

`;

code = before + newFunction + after;
fs.writeFileSync('main.js', code, 'utf8');
console.log('showAppointmentForm rewritten successfully. Lines:', code.split('\n').length);
