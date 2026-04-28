    function getClientsListForDiagnosis() {
        if (!State.clients || State.clients.length === 0) {
            return '<p style="color:#fff;text-align:center;padding:20px;">No hay clientes registrados.</p>';
        }
        return `
            <div style="max-height:500px;overflow-y:auto;">
                ${State.clients.map(client => `
                    <div style="padding:18px 20px;margin-bottom:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:12px;display:flex;justify-content:space-between;align-items:center;transition:all 0.3s;">
                        <div>
                            <strong style="color:#fff;font-size:18px;">${client.name}</strong>
                            <span style="color:var(--accent-color);margin-left:12px;font-size:14px;">${client.phone || 'Sin teléfono'}</span>
                        </div>
                        <button class="primary-btn select-client-btn" data-client-id="${client.id}" data-client-name="${client.name}" style="font-size:15px;padding:10px 24px;font-weight:bold;">SELECCIONAR</button>
                    </div>
                `).join('')}
            </div>
        `;
    }
