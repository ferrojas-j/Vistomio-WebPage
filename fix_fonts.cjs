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

    // We'll remove the word 'italic' when it's inside className.
    content = content.replace(/className=([^A-Za-z0-9_]*)(.*?)\1/g, (match, sep, classes) => {
        // Only if it's a quote or backtick
        if (!/['"`]/.test(sep)) return match;
        
        let cls = classes.split(' ');
        cls = cls.filter(c => c !== 'italic');
        return 'className=' + sep + cls.join(' ') + sep;
    });

    content = content.replace(/<(h[1-6])([^>]*)className=(['"`])([^'"`]*)(['"`])([^>]*)>/gi, (match, tag, before, openQ, classes, closeQ, after) => {
        let cls = classes.split(' ').filter(c => c !== '');
        
        // Remove sans, bold, semibold, extrabold, tracking-*, leading-*
        cls = cls.filter(c => !c.includes('font-bold') && !c.includes('font-semibold') && !c.includes('font-extrabold') && c !== 'font-sans' && !c.startsWith('tracking-') && !c.startsWith('leading-') && c !== 'italic');
        
        // Add font-serif, font-normal
        if (!cls.includes('font-serif')) cls.push('font-serif');
        if (!cls.includes('font-normal') && !cls.includes('font-light')) cls.push('font-normal');
        
        // Add generous spacing
        cls.push('tracking-[0.03em]');
        cls.push('md:tracking-[0.05em]');
        cls.push('leading-relaxed');
        
        return '<' + tag + before + 'className=' + openQ + [...new Set(cls)].join(' ') + closeQ + after + '>';
    });

    // Ensure buttons don't have font-serif
    content = content.replace(/<button([^>]*)className=(['"`])([^'"`]*)(['"`])([^>]*)>/gi, (match, before, openQ, classes, closeQ, after) => {
        let cls = classes.split(' ').filter(c => c !== '');
        cls = cls.filter(c => c !== 'font-serif');
        return '<button' + before + 'className=' + openQ + cls.join(' ') + closeQ + after + '>';
    });

    if (original !== content) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log('Updated ' + file);
    }
});
