const fs = require('fs');
const path = 'src/ChatbotSimulator.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldControlPanel = `{/* Text & Control Panel */}
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
          </div>

        <div className="space-y-8">
          
          {/* Channels (Informative Only) */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 mb-4 tracking-wider">{t.labels.channel}</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/30 text-sm font-medium text-slate-300 opacity-80 cursor-default">
                <MessageCircle size={16} className="text-emerald-400" />
                {t.channels.whatsapp}
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/30 text-sm font-medium text-slate-300 opacity-80 cursor-default">
                <Camera size={16} className="text-pink-400" />
                {t.channels.instagram}
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/30 text-sm font-medium text-slate-300 opacity-80 cursor-default">
                <MessageCircle size={16} className="text-blue-400" />
                {t.channels.messenger}
              </div>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-700/50 bg-slate-900/30 text-sm font-medium text-slate-300 opacity-80 cursor-default">
                <Globe size={16} className="text-[#D4AF37]" />
                {t.channels.web}
              </div>
            </div>
          </div>

          {/* Tones (Interactive) */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 mb-4 tracking-wider">{t.labels.tone}</h4>
            <div className="flex flex-col gap-3">
              {(['formal', 'friendly', 'casual', 'sales'] as Tone[]).map((tOption) => (
                <button 
                  key={tOption}
                  onClick={() => setTone(tOption)}
                  className={\`flex items-center gap-3 px-5 py-4 rounded-xl border font-medium transition-all text-left \${
                    tone === tOption 
                      ? 'bg-slate-700/50 border-emerald-500/50 text-white shadow-inner' 
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-300'
                  }\`}
                >
                  <Sliders size={18} className={tone === tOption ? 'text-emerald-400' : 'text-slate-500'} />
                  <span className="flex-grow">{t.tones[tOption]}</span>
                </button>
              ))}
            </div>
          </div>

          </div>
        </div>
      </div>`;

const newControlPanel = `{/* Text & Content Right Side */}
      <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
        
        <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6 mx-auto lg:mx-0 w-max">
          Mini demo
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {currentLanguage === 'es' ? 'Descubre el Chatbot IA Omnicanal de Vistomio' : currentLanguage === 'en' ? 'Discover Vistomio\\'s Omnichannel AI Chatbot' : 'Découvrez le Chatbot IA Omnicanal de Vistomio'}
        </h2>
        
        <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
          {currentLanguage === 'es' 
            ? 'Conecta tus canales y centraliza respuestas eficientes 24/7 con un chatbot IA especializado en hotelería y restaurantes.' 
            : currentLanguage === 'en' 
            ? 'Connect your channels and centralize efficient 24/7 responses with an AI chatbot specialized in hospitality and restaurants.' 
            : 'Connectez vos canaux et centralisez des réponses efficaces 24h/24 et 7j/7 avec un chatbot IA spécialisé dans l\\'hôtellerie et la restauration.'}
        </p>

        {/* Channels Icons Grid */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/50 shadow-sm cursor-default">
            <MessageCircle size={24} className="text-emerald-400" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/50 shadow-sm cursor-default">
            <Camera size={24} className="text-pink-400" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/50 shadow-sm cursor-default">
            <MessageCircle size={24} className="text-blue-400" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/50 shadow-sm cursor-default">
            <Globe size={24} className="text-[#D4AF37]" />
          </div>
        </div>

        {/* Customization Pills */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">
            {currentLanguage === 'es' ? 'Personaliza como quieras' : currentLanguage === 'en' ? 'Customize as you like' : 'Personnalisez comme vous le souhaitez'}
          </h4>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {(['formal', 'friendly', 'casual', 'sales'] as Tone[]).map((tOption) => (
              <button 
                key={tOption}
                onClick={() => setTone(tOption)}
                className={\`flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium transition-all text-sm \${
                  tone === tOption 
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-300'
                }\`}
              >
                <span className="flex-grow">{t.tones[tOption]}</span>
              </button>
            ))}
          </div>
        </div>

      </div>`;

content = content.replace(oldControlPanel, newControlPanel);
fs.writeFileSync(path, content);
