import { useState, useEffect, useRef } from 'react';
import { Send, Bot, MessageCircle, Globe, Settings2, Sliders, Camera } from 'lucide-react';

type Channel = 'whatsapp' | 'instagram' | 'messenger' | 'web';
type Tone = 'friendly' | 'formal' | 'sales';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const translations = {
  es: {
    channels: {
      whatsapp: 'WhatsApp',
      instagram: 'Instagram DM',
      messenger: 'Messenger',
      web: 'Web Chat'
    },
    tones: {
      friendly: 'Amigable & Cercano',
      formal: 'Elegante & Formal',
      sales: 'Enfocado en Ventas'
    },
    labels: {
      channel: 'Canal de Comunicación',
      tone: 'Personalidad de la IA',
      tryIt: 'Interactúa con el bot',
      typing: 'escribiendo...',
      placeholder: 'Escribe un mensaje...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: '¡Hola! Quería saber si tienen mesas disponibles para esta noche.', time: '19:02' },
        { id: '2', sender: 'bot', text: '¡Hola! 👋 ¡Qué gusto saludarte! Déjame revisar... ¡Sí! Tenemos algunas mesitas libres. ¿Para cuántas personas sería y a qué hora les gustaría venir? 🍷', time: '19:02' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Buenas tardes, deseo realizar una reservación para hoy.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Buenas tardes. Es un placer atenderle. He verificado nuestra disponibilidad y contamos con mesas para esta noche. Por favor, indíqueme el número de personas y la hora deseada para confirmar su reserva.', time: '19:02' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hola, ¿tienen lugar para cenar hoy?', time: '19:02' },
        { id: '2', sender: 'bot', text: '¡Hola! Sí, tenemos disponibilidad. 🍽️ Además, hoy es noche de especialidades: nuestro Ribeye Prime tiene 15% de descuento al reservar por este medio. ¿Te aparto una mesa para aprovechar la promoción? 🔥', time: '19:02' }
      ]
    },
    responses: {
      friendly: '¡Súper! Queda anotado. ¡Nos vemos al rato! 🎉',
      formal: 'Su reserva ha sido confirmada con éxito. Le esperamos.',
      sales: '¡Excelente elección! Tu mesa y tu promoción están confirmadas. ¡Te esperamos! 🥩🍷'
    }
  },
  en: {
    channels: {
      whatsapp: 'WhatsApp',
      instagram: 'Instagram DM',
      messenger: 'Messenger',
      web: 'Web Chat'
    },
    tones: {
      friendly: 'Friendly & Casual',
      formal: 'Elegant & Formal',
      sales: 'Sales Focused'
    },
    labels: {
      channel: 'Communication Channel',
      tone: 'AI Personality',
      tryIt: 'Interact with the bot',
      typing: 'typing...',
      placeholder: 'Type a message...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: 'Hi! Are there any tables available for tonight?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Hi there! 👋 Great to hear from you! Let me check... Yes! We have a few tables left. How many people and what time would you like to come? 🍷', time: '19:02' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Good evening, I would like to make a reservation for tonight.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Good evening. It is a pleasure to assist you. I have checked our availability and we do have tables for tonight. Please let me know the number of guests and your preferred time to confirm.', time: '19:02' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hi, do you have space for dinner today?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Hello! Yes, we have availability. 🍽️ Also, tonight is steak night: our Prime Ribeye is 15% off when you book through here. Shall I secure a table so you can enjoy this promo? 🔥', time: '19:02' }
      ]
    },
    responses: {
      friendly: 'Awesome! You are all set. See you soon! 🎉',
      formal: 'Your reservation has been successfully confirmed. We look forward to welcoming you.',
      sales: 'Excellent choice! Your table and promo are confirmed. See you tonight! 🥩🍷'
    }
  },
  fr: {
    channels: {
      whatsapp: 'WhatsApp',
      instagram: 'Instagram DM',
      messenger: 'Messenger',
      web: 'Web Chat'
    },
    tones: {
      friendly: 'Amical',
      formal: 'Élégant',
      sales: 'Ventes'
    },
    labels: {
      channel: 'Canal de Communication',
      tone: 'Personnalité de l\'IA',
      tryIt: 'Interagissez avec le bot',
      typing: 'en train d\'écrire...',
      placeholder: 'Écrivez un message...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: 'Salut ! Avez-vous des tables pour ce soir ?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Salut ! 👋 Ravi de vous parler ! Laissez-moi vérifier... Oui ! Il nous reste quelques tables. Pour combien de personnes et à quelle heure ? 🍷', time: '19:02' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Bonsoir, je souhaite réserver pour ce soir.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Bonsoir. C\'est un plaisir de vous aider. J\'ai vérifié et nous avons des tables pour ce soir. Veuillez m\'indiquer le nombre de personnes et l\'heure souhaitée.', time: '19:02' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Bonjour, avez-vous de la place pour dîner ?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Bonjour ! Oui, nous avons de la disponibilité. 🍽️ De plus, ce soir notre Ribeye est à -15% si vous réservez ici. Puis-je vous réserver une table pour en profiter ? 🔥', time: '19:02' }
      ]
    },
    responses: {
      friendly: 'Génial ! C\'est noté. À tout à l\'heure ! 🎉',
      formal: 'Votre réservation est confirmée. Nous vous attendons.',
      sales: 'Excellent choix ! Votre table et votre promotion sont confirmées. À ce soir ! 🥩🍷'
    }
  }
};

export default function ChatbotSimulator({ currentLanguage = 'es' }: { currentLanguage?: 'es' | 'en' | 'fr' }) {
  const [channel, setChannel] = useState<Channel>('whatsapp');
  const [tone, setTone] = useState<Tone>('friendly');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLanguage] || translations.es;

  // Reload chat script when tone changes
  useEffect(() => {
    setMessages(t.scripts[tone] as Message[]);
    setInputText('');
  }, [tone, currentLanguage]);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: t.responses[tone],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const getChannelColor = () => {
    switch(channel) {
      case 'whatsapp': return 'bg-[#128C7E]';
      case 'instagram': return 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]';
      case 'messenger': return 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff]';
      case 'web': return 'bg-emerald-500';
      default: return 'bg-slate-800';
    }
  };

  const getChannelIcon = () => {
    switch(channel) {
      case 'whatsapp': return <MessageCircle size={20} className="text-white" />;
      case 'instagram': return <Camera size={20} className="text-white" />;
      case 'messenger': return <MessageCircle size={20} className="text-white" />; // Placeholder for messenger
      case 'web': return <Globe size={20} className="text-white" />;
      default: return <MessageCircle size={20} className="text-white" />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center py-10 w-full max-w-5xl mx-auto">
      
      {/* Phone Mockup */}
      <div className="w-full max-w-[340px] shrink-0 bg-slate-900 rounded-[3rem] p-3 shadow-[0_0_40px_rgba(16,185,129,0.15)] border-4 border-slate-800 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
        
        <div className="w-full h-[600px] bg-[#E5DDD5] rounded-[2.5rem] overflow-hidden flex flex-col relative">
          
          {/* App Header */}
          <div className={`pt-10 px-4 pb-3 flex items-center gap-3 text-white shadow-md z-10 transition-all duration-500 ${getChannelColor()}`}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
              <Bot size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight text-white drop-shadow-sm">Vistomio Bot</h3>
              <p className="text-[11px] text-white/90 drop-shadow-sm">En línea 24/7</p>
            </div>
            <div className="ml-auto flex gap-3 opacity-80">
              {getChannelIcon()}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 relative custom-scrollbar bg-[#E5DDD5]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fade-in_0.3s_ease-out]`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-[14px] shadow-sm relative ${
                  msg.sender === 'user' 
                    ? 'bg-[#DCF8C6] text-slate-800 rounded-tr-none' 
                    : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
                }`}>
                  <p className="leading-snug">{msg.text}</p>
                  <span className={`text-[10px] block text-right mt-1 opacity-60 ${msg.sender === 'user' ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {msg.time} {msg.sender === 'user' && '✓✓'}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-[fade-in_0.3s_ease-out]">
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-slate-100">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-[#f0f0f0] p-3 flex gap-2 items-center z-10 shrink-0">
            <form onSubmit={handleSendMessage} className="flex-grow flex gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.labels.placeholder}
                className="flex-grow bg-white border-none rounded-full px-4 py-2 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 shadow-sm"
              />
              <button 
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  inputText.trim() && !isTyping ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-white'
                }`}
              >
                <Send size={18} className="ml-1" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 flex flex-col gap-8 shadow-xl">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <Settings2 className="text-[#D4AF37]" />
            Panel de Control IA
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Personaliza el comportamiento del bot en tiempo real. Todos los módulos se conectan a tu información y operan de forma autónoma.
          </p>
        </div>

        {/* Channel Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            {t.labels.channel}
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(['whatsapp', 'instagram', 'messenger', 'web'] as Channel[]).map(c => (
              <button 
                key={c}
                onClick={() => setChannel(c)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  channel === c 
                    ? 'bg-slate-700 border-slate-500 text-white shadow-inner' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-300'
                }`}
              >
                {c === 'whatsapp' && <MessageCircle size={16} className={channel === c ? 'text-emerald-400' : ''} />}
                {c === 'instagram' && <Camera size={16} className={channel === c ? 'text-pink-400' : ''} />}
                {c === 'messenger' && <MessageCircle size={16} className={channel === c ? 'text-blue-400' : ''} />}
                {c === 'web' && <Globe size={16} className={channel === c ? 'text-[#D4AF37]' : ''} />}
                {t.channels[c]}
              </button>
            ))}
          </div>
        </div>

        {/* Tone Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            {t.labels.tone}
          </label>
          <div className="flex flex-col gap-3">
            {(['friendly', 'formal', 'sales'] as Tone[]).map(tn => (
              <button 
                key={tn}
                onClick={() => setTone(tn)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                  tone === tn 
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                <Sliders size={18} className={tone === tn ? 'text-emerald-400' : 'opacity-50'} />
                {t.tones[tn]}
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
