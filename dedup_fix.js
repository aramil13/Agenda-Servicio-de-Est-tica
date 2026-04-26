const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

// There are two copies of showAppointmentForm.
// The first one (LF-only, from repair script) is clean.
// The second one (CRLF, original corrupted version) must be removed.

const marker = '    function showAppointmentForm(info = null) {';
const firstIdx = code.indexOf(marker);
const secondIdx = code.indexOf(marker, firstIdx + 1);

if (secondIdx === -1) {
    console.log('Only one copy exists — nothing to do.');
    process.exit(0);
}

// The second copy ends just before "    function showSettingsForm() {" 
// but since there might be two occurrences of showSettingsForm too,
// we need to find the right one after secondIdx
const settingsMarker = '    function showSettingsForm() {';
const settingsAfterSecond = code.indexOf(settingsMarker, secondIdx + 1);

if (settingsAfterSecond === -1) {
    console.error('Could not find showSettingsForm after second showAppointmentForm');
    process.exit(1);
}

console.log('Removing chars from', secondIdx, 'to', settingsAfterSecond);

// Remove the second (corrupted original) copy
code = code.substring(0, secondIdx) + code.substring(settingsAfterSecond);

fs.writeFileSync('main.js', code, 'utf8');
console.log('Done. Lines now:', code.split('\n').length);
