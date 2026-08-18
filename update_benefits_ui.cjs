const fs = require('fs');
let page = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf-8');

page = page.replace(
  /<div className="w-16 h-16 rounded-2xl bg-\[#D4AF37\]\/10 text-\[#D4AF37\] flex items-center justify-center mb-8 border border-\[#D4AF37\]\/30">[\s\S]*?<benefit.icon size=\{32\} strokeWidth=\{1\.5\} \/>[\s\S]*?<\/div>\s*<h3 className="text-2xl font-normal text-boutique-navy mb-4 font-serif md:tracking-\[0\.05em\] tracking-\[0\.03em\] leading-relaxed">\{benefit\.title\}<\/h3>/,
  `<div className="w-16 h-16 rounded-2xl bg-[#13203A] text-white flex items-center justify-center mb-8 shadow-md border border-[#13203A]/20">
                    <benefit.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-normal text-[#D4AF37] mb-4 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{benefit.title}</h3>`
);

fs.writeFileSync('src/VistomioLandingPage.tsx', page, 'utf-8');
console.log('Fixed benefits UI.');
