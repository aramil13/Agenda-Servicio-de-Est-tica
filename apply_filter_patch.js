const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

// Replace processDiagnosisFile
code = code.replace(
    /function processDiagnosisFile\(file\) \{[\s\S]*?reader\.readAsDataURL\(file\);\s*\}/,
    `function processDiagnosisFile(file) {
        if (!file || !file.type.startsWith('image/')) return;
        
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                if (!validateDiagnosisImage(img)) {
                    showToast('⚠️ Imagen rechazada. Debe ser una foto real de cabello o cuero cabelludo (evita colores uniformes o imágenes artificiales).', 'error');
                    return;
                }
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
    }`
);

// Remove the old validation check from runDiagnosisAnalysis
code = code.replace(
    /\/\/ Validar imagen primero[\s\S]*?if \(!validateDiagnosisImage\(currentDiagnosisImage\)\) \{[\s\S]*?return;\s*\}/,
    `// La imagen ya fue validada al subirla`
);

// Replace validateDiagnosisImage
code = code.replace(
    /function validateDiagnosisImage\(img\) \{[\s\S]*?return isBiological && isMicroscopic && hasTexture;\s*\}/,
    `function validateDiagnosisImage(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 150; // Mayor tamaño para captar texturas con mejor precisión
        canvas.width = size; canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);
        const data = ctx.getImageData(0, 0, size, size).data;
        
        const n = data.length / 4;
        const grays = new Float32Array(n);
        let rSum = 0, gSum = 0, bSum = 0;
        
        for (let i = 0; i < n; i++) {
            const r = data[i*4], g = data[i*4+1], b = data[i*4+2];
            rSum += r; gSum += g; bSum += b;
            grays[i] = 0.299 * r + 0.587 * g + 0.114 * b;
        }
        
        const avgGray = grays.reduce((a, b) => a + b, 0) / n;
        let variance = 0;
        for (let i = 0; i < n; i++) {
            variance += (grays[i] - avgGray) * (grays[i] - avgGray);
        }
        variance /= n;
        
        let edges = 0;
        for (let y = 0; y < size - 1; y++) {
            for (let x = 0; x < size - 1; x++) {
                const idx = y * size + x;
                const diffX = Math.abs(grays[idx] - grays[idx + 1]);
                const diffY = Math.abs(grays[idx] - grays[idx + size]);
                if (diffX > 15 || diffY > 15) edges++;
            }
        }
        
        const edgeDensity = edges / (size * size);
        const rAvg = rSum / n, gAvg = gSum / n, bAvg = bSum / n;
        
        const isPerfectlyBlackOrWhite = (rAvg < 10 && gAvg < 10 && bAvg < 10) || (rAvg > 245 && gAvg > 245 && bAvg > 245);
        const isUniform = variance < 100; // Si la varianza es muy baja, es un color sólido
        const hasNoTexture = edgeDensity < 0.03; // Si casi no hay bordes, no hay cabello ni poros
        
        // Rechazar si es un color uniforme, no tiene textura o es puramente blanco/negro (artificial)
        return !isUniform && !hasNoTexture && !isPerfectlyBlackOrWhite;
    }`
);

fs.writeFileSync('main.js', code, 'utf8');
console.log('Patched main.js');
