const fs = require('fs');
let content = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf8');

content = content.replace(/US: \{\s*hotel: \[339, 579, 1199\],/, 'US: {\n      hotel: [310, 530, 1100],');
content = content.replace(/LATAM: \{\s*hotel: \[182, 374, 756\],/, 'LATAM: {\n      hotel: [165, 345, 695],');

fs.writeFileSync('src/VistomioLandingPage.tsx', content);
console.log("Replaced with regex");
