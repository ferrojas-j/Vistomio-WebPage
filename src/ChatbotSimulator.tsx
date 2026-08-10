import { useState, useEffect, useRef } from 'react';
import { Send, Bot, MessageCircle, Globe, Camera } from 'lucide-react';

type Tone = 'friendly' | 'formal' | 'casual' | 'sales';

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
      formal: 'Elegante y formal',
      friendly: 'Amigable y cercano',
      casual: 'Juvenil, informal',
      sales: 'Enfocado en ventas'
    },
    labels: {
      channel: 'CANAL DE COMUNICACIÓN',
      tone: 'PERSONALIDAD DE LA IA',
      panelTitle: 'Conecta tus canales y personaliza como quieras',
      panelDesc: 'Personaliza el comportamiento del bot en tiempo real. Todos los módulos se conectan a tu información y operan de forma autónoma.',
      placeholder: 'Modo de demostración...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: '¡Hola! Quería saber si tienen mesas disponibles para esta noche.', time: '19:02' },
        { id: '2', sender: 'bot', text: '¡Hola! 👋 ¡Qué gusto saludarte! Déjame revisar... ¡Sí! Tenemos algunas mesitas libres. ¿Para cuántas personas sería y a qué hora les gustaría venir? 🍷', time: '19:02' },
        { id: '3', sender: 'user', text: 'Seríamos 4 personas, como a las 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: '¡Súper! Queda anotado para las 9:00 PM a nombre tuyo. ¡Nos vemos al rato para disfrutar de una gran noche! 🎉', time: '19:04' },
        { id: '5', sender: 'user', text: '¿Tienen opciones vegetarianas?', time: '19:05' },
        { id: '6', sender: 'bot', text: '¡Claro que sí! 🌱 Tenemos varias opciones deliciosas sin carne en nuestro menú. ¡Pregúntale a tu mesero cuando llegues y te recomendará lo mejor!', time: '19:05' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Buenas tardes, deseo realizar una reservación para hoy.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Buenas tardes. Es un placer atenderle. He verificado nuestra disponibilidad y contamos con mesas para esta noche. Por favor, indíqueme el número de personas y la hora deseada para confirmar su reserva.', time: '19:02' },
        { id: '3', sender: 'user', text: 'Mesa para 4, a las 21:00 horas.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Su reserva para 4 personas a las 21:00 horas ha sido pre-aprobada. ¿Desea que le enviemos el menú digital por este medio antes de su llegada?', time: '19:04' },
        { id: '5', sender: 'user', text: 'Sí, por favor.', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Entendido. En unos instantes recibirá el enlace. Su reserva ha sido confirmada con éxito. Le esperamos con gusto.', time: '19:05' }
      ],
      casual: [
        { id: '1', sender: 'user', text: 'q onda, hay lugar para cenar hoy?', time: '19:02' },
        { id: '2', sender: 'bot', text: '¡Qué onda! ✌️ Sí, todavía tenemos lugar para hoy. ¿Cuántos van a ser y a qué hora le caen? 🍔', time: '19:02' },
        { id: '3', sender: 'user', text: 'somos 4, llegamos tipo 9', time: '19:04' },
        { id: '4', sender: 'bot', text: '¡Va, buenísimo! Ya les armé la mesa para 4 a las 9 PM. ¡Acá nos vemos para pasarla chill! 🍻', time: '19:04' },
        { id: '5', sender: 'user', text: 'genial, gracias bro', time: '19:05' },
        { id: '6', sender: 'bot', text: '¡De nada! ¡Acá los esperamos con las bebidas frías! 🧊', time: '19:05' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hola, ¿tienen lugar para cenar hoy?', time: '19:02' },
        { id: '2', sender: 'bot', text: '¡Hola! Sí, tenemos disponibilidad. 🍽️ Además, hoy es noche de especialidades: nuestro Ribeye Prime tiene 15% de descuento al reservar por este medio. ¿Te aparto una mesa para aprovechar la promoción? 🔥', time: '19:02' },
        { id: '3', sender: 'user', text: '¡Suena genial! Sí, somos 4 a las 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: '¡Excelente elección! Tu mesa para 4 y tu promoción del 15% están confirmadas. Por cierto, ¿te gustaría ir pidiendo una ronda de nuestras famosas Margaritas 2x1 para que estén listas al llegar? 🍹', time: '19:04' },
        { id: '5', sender: 'user', text: 'Uff sí, dos rondas por favor.', time: '19:05' },
        { id: '6', sender: 'bot', text: '¡Hecho! 🥂 Mesa, promoción y bebidas apartadas. ¡Te esperamos esta noche para una velada increíble! 🥩🍷', time: '19:05' }
      ]
    },
    responses: { friendly: '', formal: '', casual: '', sales: '' }
  },
  en: {
    channels: {
      whatsapp: 'WhatsApp',
      instagram: 'Instagram DM',
      messenger: 'Messenger',
      web: 'Web Chat'
    },
    tones: {
      formal: 'Elegant & Formal',
      friendly: 'Friendly & Casual',
      casual: 'Youthful & Chill',
      sales: 'Sales Focused'
    },
    labels: {
      channel: 'COMMUNICATION CHANNEL',
      tone: 'AI PERSONALITY',
      panelTitle: 'Connect your channels and customize',
      panelDesc: 'Customize the bot behavior in real time. All modules connect to your data and operate autonomously.',
      placeholder: 'Demonstration mode...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: 'Hi! Are there any tables available for tonight?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Hi there! 👋 Great to hear from you! Let me check... Yes! We have a few tables left. How many people and what time would you like to come? 🍷', time: '19:02' },
        { id: '3', sender: 'user', text: 'It would be for 4 people, around 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Awesome! You are all set for 9:00 PM. See you soon for a great night! 🎉', time: '19:04' },
        { id: '5', sender: 'user', text: 'Do you have vegan options?', time: '19:05' },
        { id: '6', sender: 'bot', text: 'We sure do! 🌱 We have several delicious meat-free options. Just ask your waiter when you arrive!', time: '19:05' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Good evening, I would like to make a reservation for tonight.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Good evening. It is a pleasure to assist you. I have checked our availability and we do have tables for tonight. Please let me know the number of guests and your preferred time to confirm.', time: '19:02' },
        { id: '3', sender: 'user', text: 'Table for 4 at 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Your reservation for 4 guests at 9:00 PM has been pre-approved. Would you like me to send you the digital menu before your arrival?', time: '19:04' },
        { id: '5', sender: 'user', text: 'Yes, please.', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Understood. You will receive the link shortly. Your reservation is fully confirmed. We look forward to welcoming you.', time: '19:05' }
      ],
      casual: [
        { id: '1', sender: 'user', text: 'hey, any tables for tonight?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Hey there! ✌️ Yeah, we still got some spots. How many of you and what time? 🍔', time: '19:02' },
        { id: '3', sender: 'user', text: '4 of us, around 9', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Awesome! Got you down for 4 at 9 PM. See you guys later for a chill night! 🍻', time: '19:04' },
        { id: '5', sender: 'user', text: 'sick, thanks man', time: '19:05' },
        { id: '6', sender: 'bot', text: 'No problem! Drinks will be waiting for you! 🧊', time: '19:05' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hi, do you have space for dinner today?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Hello! Yes, we have availability. 🍽️ Also, tonight is steak night: our Prime Ribeye is 15% off when you book through here. Shall I secure a table so you can enjoy this promo? 🔥', time: '19:02' },
        { id: '3', sender: 'user', text: 'Sounds great! Yes, 4 people at 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Excellent choice! Your table for 4 and your 15% promo are confirmed. Would you like me to add a round of our 2-for-1 Margaritas so they are ready when you arrive? 🍹', time: '19:04' },
        { id: '5', sender: 'user', text: 'Oh wow yes, two rounds please.', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Done! 🥂 Table, promo, and drinks secured. See you tonight for an amazing evening! 🥩🍷', time: '19:05' }
      ]
    },
    responses: { friendly: '', formal: '', casual: '', sales: '' }
  },
  fr: {
    channels: {
      whatsapp: 'WhatsApp',
      instagram: 'Instagram DM',
      messenger: 'Messenger',
      web: 'Web Chat'
    },
    tones: {
      formal: 'Élégant et Formel',
      friendly: 'Amical et Proche',
      casual: 'Jeune, Décontracté',
      sales: 'Axé sur les Ventes'
    },
    labels: {
      channel: 'CANAL DE COMMUNICATION',
      tone: 'PERSONNALITÉ DE L\'IA',
      panelTitle: 'Connectez vos canaux et personnalisez',
      panelDesc: 'Personnalisez le comportement du bot en temps réel. Tous les modules se connectent à vos données.',
      placeholder: 'Mode démonstration...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: 'Salut ! Avez-vous des tables pour ce soir ?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Salut ! 👋 Ravi de vous parler ! Laissez-moi vérifier... Oui ! Il nous reste quelques tables. Pour combien de personnes et à quelle heure ? 🍷', time: '19:02' },
        { id: '3', sender: 'user', text: 'On serait 4 personnes, vers 21h.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Génial ! C\'est noté pour 21h00. À tout à l\'heure pour une belle soirée ! 🎉', time: '19:04' },
        { id: '5', sender: 'user', text: 'Avez-vous des options végétariennes ?', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Bien sûr ! 🌱 Demandez simplement à votre serveur et il vous recommandera nos meilleurs plats sans viande !', time: '19:05' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Bonsoir, je souhaite réserver pour ce soir.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Bonsoir. C\'est un plaisir de vous aider. J\'ai vérifié et nous avons des tables pour ce soir. Veuillez m\'indiquer le nombre de personnes et l\'heure souhaitée.', time: '19:02' },
        { id: '3', sender: 'user', text: 'Une table pour 4 à 21h.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Votre réservation pour 4 personnes à 21h00 est pré-approuvée. Souhaitez-vous recevoir notre menu numérique avant votre arrivée ?', time: '19:04' },
        { id: '5', sender: 'user', text: 'Oui, s\'il vous plaît.', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Entendu. Vous allez recevoir le lien sous peu. Votre réservation est confirmée. Nous vous attendons.', time: '19:05' }
      ],
      casual: [
        { id: '1', sender: 'user', text: 'yo, de la place ce soir ?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Yo ! ✌️ Ouais, il nous reste de la place. Vous êtes combien et vers quelle heure ? 🍔', time: '19:02' },
        { id: '3', sender: 'user', text: '4, vers 21h', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Super ! C\'est noté pour 4 à 21h. On se voit tout à l\'heure pour passer un bon moment ! 🍻', time: '19:04' },
        { id: '5', sender: 'user', text: 'merci mec', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Pas de souci ! Les boissons vous attendent ! 🧊', time: '19:05' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Bonjour, avez-vous de la place pour dîner ?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Bonjour ! Oui, nous avons de la disponibilité. 🍽️ De plus, ce soir notre Ribeye est à -15% si vous réservez ici. Puis-je vous réserver une table pour en profiter ? 🔥', time: '19:02' },
        { id: '3', sender: 'user', text: 'Super ! Oui, 4 personnes à 21h.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Excellent choix ! Votre table pour 4 et votre promotion sont confirmées. Voudriez-vous qu\'on prépare deux Margaritas 2 pour 1 pour votre arrivée ? 🍹', time: '19:04' },
        { id: '5', sender: 'user', text: 'Oh oui, deux s\'il vous plaît.', time: '19:05' },
        { id: '6', sender: 'bot', text: 'C\'est noté ! 🥂 Table, promo et boissons réservées. À ce soir ! 🥩🍷', time: '19:05' }
      ]
    },
    responses: { friendly: '', formal: '', casual: '', sales: '' }
  }
};

export default function ChatbotSimulator({ currentLanguage = 'es' }: { currentLanguage?: 'es' | 'en' | 'fr' }) {
  const [tone, setTone] = useState<Tone>('friendly');
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLanguage] || translations.es;

  // Reload chat script when tone changes
  useEffect(() => {
    setMessages(t.scripts[tone] as Message[]);
  }, [tone, currentLanguage]);

  // Scroll to bottom without scrolling the whole page
  useEffect(() => {
    if (chatEndRef.current) {
      const parent = chatEndRef.current.parentElement;
      if (parent) {
        parent.scrollTop = parent.scrollHeight;
      }
    }
  }, [messages]);

  const channelIcon = <MessageCircle size={20} className="text-white" />;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
      
      {/* Phone Mockup Container */}
      <div className="w-full max-w-[380px] mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 relative shadow-emerald-500/20 shrink-0">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
        
        {/* App Container */}
        <div className="w-full h-[675px] bg-[#E5DDD5] rounded-[2.5rem] overflow-hidden flex flex-col relative">
          
          {/* Header */}
          <div className={'bg-emerald-600 px-4 py-4 pt-8 flex items-center gap-3 shadow-md z-10 shrink-0 transition-colors'}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Bot size={24} className="text-white" />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-white leading-tight">Vistomio Bot</h3>
              <p className="text-white/80 text-xs">En línea 24/7</p>
            </div>
            <div className="ml-auto flex gap-3 opacity-80">
              {channelIcon}
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
            <div ref={chatEndRef} />
          </div>

          {/* Input Area (Disabled for demo) */}
          <div className="bg-[#f0f0f0] p-3 flex gap-2 items-center z-10 shrink-0 opacity-70">
            <div className="flex-grow flex gap-2">
              <input 
                type="text" 
                disabled={true}
                placeholder={t.labels.placeholder}
                className="flex-grow bg-white border-none rounded-full px-4 py-2 text-sm text-slate-400 focus:outline-none shadow-sm cursor-not-allowed"
              />
              <button 
                disabled={true}
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors bg-slate-300 text-white cursor-not-allowed"
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Text & Content Right Side */}
      <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
        
        <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold uppercase tracking-wider mb-6 mx-auto lg:mx-0 w-max">
          Mini demo
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {currentLanguage === 'es' ? 'Descubre el Chatbot IA Omnicanal de Vistomio' : currentLanguage === 'en' ? 'Discover Vistomio\'s Omnichannel AI Chatbot' : 'Découvrez le Chatbot IA Omnicanal de Vistomio'}
        </h2>
        
        <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
          {currentLanguage === 'es' 
            ? 'Conecta tus canales y centraliza respuestas eficientes 24/7 con un chatbot IA especializado en hotelería y restaurantes.' 
            : currentLanguage === 'en' 
            ? 'Connect your channels and centralize efficient 24/7 responses with an AI chatbot specialized in hospitality and restaurants.' 
            : 'Connectez vos canaux et centralisez des réponses efficaces 24h/24 et 7j/7 avec un chatbot IA spécialisé dans l\'hôtellerie et la restauration.'}
        </p>

        {/* Channels Icons Grid */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12">
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <MessageCircle size={18} className="text-emerald-400" />
            <span className="text-sm font-medium text-slate-300">WhatsApp</span>
          </div>
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <Camera size={18} className="text-pink-400" />
            <span className="text-sm font-medium text-slate-300">Instagram</span>
          </div>
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <MessageCircle size={18} className="text-blue-400" />
            <span className="text-sm font-medium text-slate-300">Messenger</span>
          </div>
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <Globe size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-medium text-slate-300">Web</span>
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
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium transition-all text-sm ${
                  tone === tOption 
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-300'
                }`}
              >
                <span className="flex-grow">{t.tones[tOption]}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
