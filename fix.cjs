const fs = require('fs');
const path = 'src/VistomioLandingPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace headings
content = content.replace(/<h[1-6][^>]*text-boutique-anthracite[^>]*>/g, match => {
    return match.replace(/text-boutique-anthracite/g, 'text-boutique-navy');
});

// Replace logo text
content = content.replace(/<span className="[^"]*text-boutique-anthracite[^"]*">VISTOMIO<\/span>/g, match => {
    return match.replace(/text-boutique-anthracite/g, 'text-boutique-navy');
});

// Replace menu items (nav items)
// Let's replace any 'text-boutique-anthracite' inside <a> tags too to make the menu navy
content = content.replace(/<a[^>]*text-boutique-anthracite[^>]*>/g, match => {
    return match.replace(/text-boutique-anthracite/g, 'text-boutique-navy');
});

fs.writeFileSync(path, content);
console.log('Replaced headings, menu, and logo to navy');
