const fs = require('fs');
let page = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf-8');

// 1. Add imports
page = page.replace(
  /} from 'lucide-react';/,
  '    Blocks,\n    Languages,\n    Cloud\n} from \'lucide-react\';'
);

// 2. ES translation & icons
const esOld = `        {
          title: 'Paga lo que usas',
          desc: 'Arquitectura 100% modular. Conecta Vistomio a tus sistemas actuales vía API o utiliza la suite completa.',
          icon: Zap
        },
        {
          title: 'Multilenguaje Real',
          desc: 'Tu equipo y tus huéspedes merecen comunicarse en su idioma. Todo el sistema se adapta automáticamente.',
          icon: Globe2
        },
        {
          title: 'Nube de Alto Rendimiento',
          desc: 'Sin servidores locales, sin instalaciones complejas. Fluidez absoluta desde cualquier dispositivo, en cualquier lugar.',
          icon: PieChart
        }`;

const esNew = `        {
          title: 'Paga solo lo que usas',
          desc: 'Arquitectura 100% modular. Conecta Vistomio a tus sistemas actuales vía API o utiliza la suite completa.',
          icon: Blocks
        },
        {
          title: 'Multilenguaje Real',
          desc: 'Tu equipo y tus huéspedes merecen comunicarse en su idioma. Todo el sistema se adapta automáticamente.',
          icon: Languages
        },
        {
          title: 'Nube de Alto Rendimiento',
          desc: 'Sin servidores locales, sin instalaciones complejas. Fluidez absoluta desde cualquier dispositivo, en cualquier lugar.',
          icon: Cloud
        }`;

// EN translation & icons
const enOld = `        {
          title: 'Pay for what you use',
          desc: '100% modular architecture. Connect Vistomio to your current systems via API or use the full suite.',
          icon: Zap
        },
        {
          title: 'True Multilanguage',
          desc: 'Your team and guests deserve to communicate in their language. The entire system adapts automatically.',
          icon: Globe2
        },
        {
          title: 'High-Performance Cloud',
          desc: 'No local servers, no complex installations. Absolute fluidity from any device, anywhere.',
          icon: PieChart
        }`;
const enNew = `        {
          title: 'Pay only for what you use',
          desc: '100% modular architecture. Connect Vistomio to your current systems via API or use the full suite.',
          icon: Blocks
        },
        {
          title: 'True Multilanguage',
          desc: 'Your team and guests deserve to communicate in their language. The entire system adapts automatically.',
          icon: Languages
        },
        {
          title: 'High-Performance Cloud',
          desc: 'No local servers, no complex installations. Absolute fluidity from any device, anywhere.',
          icon: Cloud
        }`;

// FR translation & icons
const frOld = `        {
          title: 'Payez ce que vous utilisez',
          desc: 'Architecture 100% modulaire. Connectez Vistomio à vos systèmes actuels via API ou utilisez la suite.',
          icon: Zap
        },
        {
          title: 'Vrai Multilingue',
          desc: 'Votre équipe et vos clients méritent de communiquer dans leur langue. Le système s\\'adapte.',
          icon: Globe2
        },
        {
          title: 'Cloud Haute Performance',
          desc: 'Pas de serveurs locaux, fluidité absolue depuis n\\'importe quel appareil, n\\'importe où.',
          icon: PieChart
        }`;
const frNew = `        {
          title: 'Payez seulement ce que vous utilisez',
          desc: 'Architecture 100% modulaire. Connectez Vistomio à vos systèmes actuels via API ou utilisez la suite.',
          icon: Blocks
        },
        {
          title: 'Vrai Multilingue',
          desc: 'Votre équipe et vos clients méritent de communiquer dans leur langue. Le système s\\'adapte.',
          icon: Languages
        },
        {
          title: 'Cloud Haute Performance',
          desc: 'Pas de serveurs locaux, fluidité absolue depuis n\\'importe quel appareil, n\\'importe où.',
          icon: Cloud
        }`;

// 3. UI rendering changes
const uiOld = `<div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-8 border border-[#D4AF37]/30">
                    <benefit.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-normal text-boutique-navy mb-4 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{benefit.title}</h3>`;
const uiNew = `<div className="w-16 h-16 rounded-2xl bg-[#13203A] text-white flex items-center justify-center mb-8 shadow-md border border-[#13203A]/20">
                    <benefit.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-normal text-[#D4AF37] mb-4 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{benefit.title}</h3>`;

// Note: I will use regex to handle string mismatches due to encoding
page = page.replace(/\{\s*title:\s*'Paga lo que usas'[\s\S]*?PieChart\s*\}/, esNew);
page = page.replace(/\{\s*title:\s*'Pay for what you use'[\s\S]*?PieChart\s*\}/, enNew);
page = page.replace(/\{\s*title:\s*'Payez ce que vous utilisez'[\s\S]*?PieChart\s*\}/, frNew);

// Note: ui block is safe to string replace
page = page.replace(uiOld, uiNew);

fs.writeFileSync('src/VistomioLandingPage.tsx', page, 'utf-8');
console.log('Fixed benefits cards.');
