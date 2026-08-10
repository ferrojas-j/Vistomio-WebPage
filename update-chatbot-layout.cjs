const fs = require('fs');
const path = 'src/ChatbotSimulator.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace the phone container design
const oldPhoneContainer = `<div className="relative w-full max-w-[340px] h-[700px] bg-slate-800 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-700 shrink-0 mx-auto">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-xl z-20"></div>
        
        {/* App Container */}
        <div className="w-full h-full bg-[#E5DDD5] rounded-[2rem] overflow-hidden flex flex-col relative">`;

const newPhoneContainer = `<div className="w-full max-w-[380px] mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 relative shadow-emerald-500/20 shrink-0">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
        
        {/* App Container */}
        <div className="w-full h-[675px] bg-[#E5DDD5] rounded-[2.5rem] overflow-hidden flex flex-col relative">`;

content = content.replace(oldPhoneContainer, newPhoneContainer);

// Replace the Control Panel layout to include the title/subtitle and match POS styling if needed
// The POS text has:
// <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6">Mini demo</div>
// <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">...</h2>
// <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">...</p>

// The current control panel is:
const oldControlPanel = `{/* Control Panel */}
      <div className="flex-grow w-full max-w-md bg-slate-800/80 rounded-[2rem] p-8 border border-slate-700/50 backdrop-blur-xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings2 className="text-yellow-400" size={24} />
            <h3 className="text-2xl font-bold text-white">{t.labels.panelTitle}</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t.labels.panelDesc}
          </p>
        </div>`;

const newControlPanel = `{/* Text & Control Panel */}
      <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
        <div className="mb-10">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6">
            Mini demo
          </div>
          <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            {currentLanguage === 'es' ? 'Descubre tu Chatbot IA Omnicanal' : currentLanguage === 'en' ? 'Discover your Omnichannel AI Chatbot' : 'Découvrez votre Chatbot IA Omnicanal'}
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-6 mx-auto lg:mx-0">
            {currentLanguage === 'es' ? 'Prueba cómo responde tu Chatbot IA 24/7 en diferentes escenarios y canales.' : currentLanguage === 'en' ? 'Test how your 24/7 AI Chatbot responds across different scenarios and channels.' : 'Testez comment votre Chatbot IA 24/7 répond dans différents scénarios et canaux.'}
          </p>
        </div>

        <div className="w-full bg-slate-800/80 rounded-[2rem] p-8 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Settings2 className="text-yellow-400" size={24} />
              <h3 className="text-2xl font-bold text-white">{t.labels.panelTitle}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.labels.panelDesc}
            </p>
          </div>`;

content = content.replace(oldControlPanel, newControlPanel);

// Change the flex direction from flex-col md:flex-row gap-8 to flex-col lg:flex-row items-center gap-16 lg:gap-8 to match the POS section
const oldFlex = `<div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">`;
const newFlex = `<div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-12">`;
content = content.replace(oldFlex, newFlex);


fs.writeFileSync(path, content);
