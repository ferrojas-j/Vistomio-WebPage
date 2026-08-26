const fs = require('fs');
let content = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf8');

const regex = /<div className="grid md:grid-cols-2 gap-6 md:gap-10">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/;

const newFaqJSX = `<div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {t.faqList.map((faq: { q: string, a: string }, index: number) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-[2rem] border-[1.5px] border-boutique-navy transition-colors shadow-sm">
                <h3 className="text-xl font-bold text-boutique-navy mb-4 font-serif">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>`;

if(regex.test(content)) {
  content = content.replace(regex, newFaqJSX);
  fs.writeFileSync('src/VistomioLandingPage.tsx', content);
  console.log("Success");
} else {
  console.log("Could not find the regex");
}
