    /* ═══════════════════════════════════
       SALONS VIEW
       ═══════════════════════════════════ */
    function getSalonsView() {
        if (State.salons.length === 0) {
            return `
                <div class="section-header">
                    <div>
                        <h1 class="section-title">Salones</h1>
                        <p style="color:var(--text-secondary)">Gestiona tus salones · <span class="supabase-badge">⚡ Supabase</span></p>
                    </div>
                    <button class="btn btn-primary" onclick="showSalonForm()">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                        Añadir Salón
                    </button>
                </div>
                <div class="empty-state data-card">
                    <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <h3>No hay salones registrados</h3>
                    <p>Añade tu primer salón para comenzar.</p>
                </div>`;
        }

        const rows = State.salons.map(s => `
            <div class="client-card" data-salon-id="${s.id}">
                <div class="client-header">
                    <div class="client-info">
                        <h3 style="margin:0;font-weight:600">${s.name}</h3>
                        <div style="display:flex;align-items:center;gap:12px;font-size:0.85rem;color:var(--text-secondary)">
                            ${s.address ? `<span>📍 ${s.address}</span>` : ''}
                            ${s.phone ? `<span>📱 ${s.phone}</span>` : ''}
                        </div>
                    </div>
                    <div class="client-actions">
                        <button class="btn btn-sm btn-secondary edit-btn" data-id="${s.id}" data-type="salon" title="Editar">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036 5.036a2.5 2.5 0 11-5.036 0 2.5 2.5 0 010-2.5 2.5 2.5 0 010 5.036 5.036l3.536 3.536m5.036-5.036a2.5 2.5 0 110 5.036 2.5 2.5 0 110-2.5 2.5 2.5 0 010-5.036-5.036l-3.536-3.536m-5.036-5.036a2.5 2.5 0 11-3.464 3.464z"></path></svg>
                        </button>
                        <button class="btn btn-sm btn-secondary delete-btn" data-id="${s.id}" data-type="salon" title="Eliminar">
                            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142a2 2 0 01-2 1.858H7.867a2 2 0 01-2-1.858L4 7m5 4v6m4-6v6m1-10V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-4 0h12"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div class="section-header">
                <div>
                    <h1 class="section-title">Salones</h1>
                    <p style="color:var(--text-secondary)">Gestiona tus salones · <span class="supabase-badge">⚡ Supabase</span></p>
                </div>
                <button class="btn btn-primary" onclick="showSalonForm()">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    Añadir Salón
                </button>
            </div>
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div class="stat-content"><h3>Salones</h3><p>${State.salons.length}</p></div>
                </div>
            </div>
            <div class="clients-list">${rows}</div>
        `;
    }
