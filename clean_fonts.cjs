const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(getFiles(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = getFiles('src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;

    content = content.replace(/tracking-normal/g, '');

    const tags = ['div', 'p', 'a', 'button', 'li', 'ul', 'nav', 'header', 'footer', 'section', 'article', 'aside', 'main'];
    tags.forEach(tag => {
        const regex = new RegExp('<' + tag + '([^>]*)className=(["\\\'`])([^"\\\'`]*)(["\\\'`])([^>]*)>', 'gi');
        content = content.replace(regex, (match, before, openQ, classes, closeQ, after) => {
            let cls = classes.split(' ').filter(c => c !== '');
            if (cls.includes('font-serif')) {
                cls = cls.filter(c => c !== 'font-serif');
                return '<' + tag + before + 'className=' + openQ + cls.join(' ') + closeQ + after + '>';
            }
            return match;
        });
    });

    if (original !== content) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log('Cleaned font-serif from ' + file);
    }
});
