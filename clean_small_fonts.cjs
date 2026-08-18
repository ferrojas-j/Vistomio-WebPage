const fs = require('fs');

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

    content = content.replace(/<([^>]+)className=(["\\\'`])([^"\\\'`]*)(["\\\'`])([^>]*)>/gi, (match, before, openQ, classes, closeQ, after) => {
        let cls = classes.split(' ').filter(c => c !== '');
        if ((cls.includes('text-xs') || cls.includes('text-[10px]') || cls.includes('text-sm')) && cls.includes('font-serif')) {
            cls = cls.filter(c => c !== 'font-serif');
            return '<' + before + 'className=' + openQ + cls.join(' ') + closeQ + after + '>';
        }
        return match;
    });

    if (original !== content) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log('Cleaned small text font-serif from ' + file);
    }
});
