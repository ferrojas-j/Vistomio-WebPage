const fs = require('fs');
const lines = fs.readFileSync('src/POSSimulator.tsx', 'utf8').split('\n');
const toMove = lines.splice(388, 462);
lines.splice(390, 0, ...toMove);
fs.writeFileSync('src/POSSimulator.tsx', lines.join('\n'));
