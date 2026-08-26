const fs = require('fs');
let content = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf8');

// Replace regular space with non-breaking space before question marks in the French FAQ section
// Or more simply, globally replace ' ?' with '\u00A0?' inside strings.
// A safe way is to just replace ' ?\'' with '\u00A0?\'' and ' ? ' with '\u00A0? '
// Let's just find and replace the specific strings from the French FAQ list.

content = content.replace(/remplacer \?/g, 'remplacer\u00A0?');
content = content.replace(/actuel \?/g, 'actuel\u00A0?');
content = content.replace(/abonnement \? Y a-t-il des coûts cachés \?/g, 'abonnement\u00A0? Y a-t-il des coûts cachés\u00A0?');
content = content.replace(/long terme \?/g, 'long terme\u00A0?');
content = content.replace(/souscrire \?/g, 'souscrire\u00A0?');
content = content.replace(/inclus \?/g, 'inclus\u00A0?');
content = content.replace(/hôtel \?/g, 'hôtel\u00A0?');
content = content.replace(/restaurant \?/g, 'restaurant\u00A0?');
content = content.replace(/possible \?/g, 'possible\u00A0?');
content = content.replace(/sécurisé \?/g, 'sécurisé\u00A0?');
content = content.replace(/effectuée \?/g, 'effectuée\u00A0?');
content = content.replace(/mise en œuvre \?/g, 'mise en œuvre\u00A0?');
content = content.replace(/clients \?/g, 'clients\u00A0?');

fs.writeFileSync('src/VistomioLandingPage.tsx', content);
console.log("Success");
