const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

const hoverLogic = `
// Floating photo preview on hover
document.addEventListener('mouseover', e => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('zoom-on-hover')) {
        let pv = document.getElementById('hover-photo-preview');
        let pi = document.getElementById('hover-photo-img');
        if (!pv) {
            pv = document.createElement('div');
            pv.id = 'hover-photo-preview';
            pv.style.cssText = 'display:none; position:fixed; z-index:999999; border-radius:12px; box-shadow:0 20px 40px rgba(0,0,0,0.6); pointer-events:none; background:var(--bg-card, white); padding:6px; border:1px solid var(--border-color, #eee);';
            pv.innerHTML = '<img id="hover-photo-img" style="max-width:500px; max-height:80vh; border-radius:8px; display:block; object-fit:contain;">';
            document.body.appendChild(pv);
            pi = document.getElementById('hover-photo-img');
        }
        pi.src = e.target.src;
        pv.style.display = 'block';
        
        const rect = e.target.getBoundingClientRect();
        let left = rect.right + 15;
        let top = rect.top - 50;
        
        if (left + 500 > window.innerWidth) left = rect.left - 520;
        if (left < 10) left = 10;
        if (top < 10) top = 10;
        
        pv.style.left = left + 'px';
        pv.style.top = top + 'px';
    }
});

document.addEventListener('mouseout', e => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('zoom-on-hover')) {
        const pv = document.getElementById('hover-photo-preview');
        if (pv) pv.style.display = 'none';
    }
});
`;

if (!code.includes('hover-photo-preview')) {
    fs.writeFileSync('main.js', code + '\n' + hoverLogic, 'utf8');
    console.log('Appended hover logic.');
} else {
    console.log('Hover logic already exists.');
}
