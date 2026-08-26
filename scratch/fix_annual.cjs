const fs = require('fs');
let content = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf8');

const oldLine = `const annual = Math.round((baseMonthly * 0.85) / 10) * 10;`;
const newLine = `const annual = Math.round(baseMonthly * 0.85);`;

if(content.includes(oldLine)) {
  content = content.replace(oldLine, newLine);
  fs.writeFileSync('src/VistomioLandingPage.tsx', content);
  console.log("Success");
} else {
  console.log("Not found");
}
