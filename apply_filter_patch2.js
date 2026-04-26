const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

const newValidationFunction = `    function validateDiagnosisImage(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 150; 
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
        
        let weakEdges = 0;
        let strongEdges = 0;
        
        for (let y = 0; y < size - 1; y++) {
            for (let x = 0; x < size - 1; x++) {
                const idx = y * size + x;
                const diffX = Math.abs(grays[idx] - grays[idx + 1]);
                const diffY = Math.abs(grays[idx] - grays[idx + size]);
                const maxDiff = Math.max(diffX, diffY);
                if (maxDiff > 15) weakEdges++;
                if (maxDiff > 40) strongEdges++;
            }
        }
        
        const weakEdgeDensity = weakEdges / (size * size);
        const strongEdgeDensity = strongEdges / (size * size);
        const rAvg = rSum / n, gAvg = gSum / n, bAvg = bSum / n;
        
        const isPerfectlyBlackOrWhite = (rAvg < 10 && gAvg < 10 && bAvg < 10) || (rAvg > 245 && gAvg > 245 && bAvg > 245);
        const isUniform = variance < 100; 
        const hasNoTexture = weakEdgeDensity < 0.03; 
        
        // Criterios específicos para fotos microscópicas:
        // 1. Debe haber bordes fuertes (los cabellos crean alto contraste bajo el microscopio)
        // 2. No debe haber demasiados bordes débiles (las fotos macroscópicas detalladas tienen demasiada densidad de bordes en todas partes)
        const lacksStrongEdges = strongEdgeDensity < 0.01;
        const tooManyEdges = weakEdgeDensity > 0.45;

        return !isUniform && !hasNoTexture && !isPerfectlyBlackOrWhite && !lacksStrongEdges && !tooManyEdges;
    }`;

// Replace validateDiagnosisImage
code = code.replace(
    /function validateDiagnosisImage\(img\) \{[\s\S]*?return !isUniform && !hasNoTexture && !isPerfectlyBlackOrWhite;\s*\}/,
    newValidationFunction
);

// Replace toast message
code = code.replace(
    /showToast\('⚠️ Imagen rechazada\. Debe ser una foto real de cabello o cuero cabelludo \(evita colores uniformes o imágenes artificiales\)\.', 'error'\);/,
    `showToast('⚠️ Imagen rechazada. Debe ser una foto MICROSCÓPICA real del cuero cabelludo.', 'error');`
);

fs.writeFileSync('main.js', code, 'utf8');
console.log('Patched main.js for microscopic criteria');
