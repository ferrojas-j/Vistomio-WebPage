import { useState, useEffect, useRef } from 'react';
import { Send, Bot, MessageCircle, Globe, Camera, Check } from 'lucide-react';

type Tone = 'friendly' | 'formal' | 'casual' | 'sales';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const translations = {
  es: {
    channels: { whatsapp: 'WhatsApp', instagram: 'Instagram', messenger: 'Messenger', web: 'Web' },
    tones: { formal: 'Elegante y formal', friendly: 'Amigable y cercano', casual: 'Juvenil, informal', sales: 'Enfocado en ventas' },
    labels: {
      channel: 'CANAL DE COMUNICACIÓN',
      tone: 'PERSONALIDAD DE LA IA',
      panelTitle: 'Conecta tus canales y personaliza como quieras',
      panelDesc: 'Personaliza el comportamiento del bot en tiempo real. Todos los módulos se conectan a tu información y operan de forma autónoma.',
      placeholder: 'Modo de demostración...'
    },
    scripts: {
      formal: [
        { id: '1', sender: 'user', text: 'Buenas tardes, me gustaría información para reservar una suite este fin de semana.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Buenas tardes. Es un placer atenderle. He verificado nuestra disponibilidad y contamos con la Suite Presidencial y la Suite Terraza. ¿Para cuántas personas y cuántas noches sería su estancia?', time: '19:02' },
        { id: '3', sender: 'user', text: 'Seríamos 2 personas por 2 noches, llegando el viernes.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Excelente. Su reserva para la Suite Terraza de viernes a domingo ha sido pre-aprobada. El costo total es de $450 USD. ¿Desea proceder con el pago seguro?', time: '19:04' },
        { id: '5', sender: 'user', text: 'Sí, por favor. También quería saber si el restaurante del hotel requiere reserva.', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Le acabo de enviar el enlace de pago. En cuanto al restaurante "L\'Étoile", sí requiere reserva para la cena. ¿Desea que le asegure una mesa para el viernes a las 20:00 horas?', time: '19:05' },
        { id: '7', sender: 'user', text: 'Sería perfecto, gracias.', time: '19:06' },
        { id: '8', sender: 'bot', text: 'Todo listo. Su mesa está reservada y su suite confirmada. Le esperamos para brindarle una experiencia inolvidable.', time: '19:06' }
      ],
      friendly: [
        { id: '1', sender: 'user', text: '¡Hola! Tengo una reserva para mañana y quería saber a qué hora es el check-in.', time: '14:15' },
        { id: '2', sender: 'bot', text: '¡Hola! 👋 Qué emoción que nos visitas mañana. El check-in es a partir de las 3:00 PM. Si llegas antes, con gusto podemos guardar tu equipaje. 🧳', time: '14:15' },
        { id: '3', sender: 'user', text: '¡Súper! Oye, ¿la alberca está abierta todo el día?', time: '14:16' },
        { id: '4', sender: 'bot', text: '¡Así es! 🏊‍♂️ La alberca está abierta de 8 AM a 10 PM. Y no te preocupes por las toallas, te las damos ahí mismo. ¿Te puedo ayudar con algo más?', time: '14:16' },
        { id: '5', sender: 'user', text: 'Sí, quiero reservar para cenar en su restaurante mañana a las 8.', time: '14:18' },
        { id: '6', sender: 'bot', text: '¡Claro! 🍽️ Tenemos una mesa disponible a las 8:00 PM para ti. ¿Tienes alguna alergia o restricción alimenticia que debamos saber?', time: '14:18' },
        { id: '7', sender: 'user', text: 'Mi acompañante es celíaco.', time: '14:19' },
        { id: '8', sender: 'bot', text: '¡Anotado! 📝 Nuestro chef se asegurará de ofrecerle opciones libres de gluten deliciosas. ¡Nos vemos mañana, que tengan buen viaje! 🚗', time: '14:19' }
      ],
      casual: [
        { id: '1', sender: 'user', text: 'q onda, tienen habitaciones para este fin de?', time: '21:00' },
        { id: '2', sender: 'bot', text: '¡Qué onda! ✌️ Sí, todavía nos quedan un par de cuartos dobles para el finde. ¿Cuántos son en tu grupo?', time: '21:00' },
        { id: '3', sender: 'user', text: 'somos 4, queremos ir a relajar un rato.', time: '21:02' },
        { id: '4', sender: 'bot', text: '¡Buenísimo plan! 🌴 Les puedo armar una habitación cuádruple con balcón por $120 la noche. ¿Les late?', time: '21:02' },
        { id: '5', sender: 'user', text: 'va, suena bien. Oye y el bar hasta q hora abre?', time: '21:03' },
        { id: '6', sender: 'bot', text: 'El rooftop bar está abierto hasta las 2 AM con DJ en vivo viernes y sábado. 🎧🍹 ¿Les voy reservando un lounge para la noche?', time: '21:03' },
        { id: '7', sender: 'user', text: 'uff si de una, a nombre de carlos', time: '21:05' },
        { id: '8', sender: 'bot', text: '¡Hecho bro! 🤜🤛 Cuarto asegurado y lounge en el bar listo. Te mando el link para el pago y nos vemos el viernes para armar la fiesta. 🔥', time: '21:05' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hola, quiero checar precios de habitaciones para 2 personas este viernes.', time: '10:30' },
        { id: '2', sender: 'bot', text: '¡Hola! Será un placer recibirles. 🏨 Para este viernes tenemos nuestra Habitación Deluxe en $150. Pero por sólo $30 más, pueden hacer un upgrade a la Suite Romántica con jacuzzi. ¿Te interesa esta mejora? ✨', time: '10:30' },
        { id: '3', sender: 'user', text: 'Mmm sí, suena bien la de jacuzzi.', time: '10:32' },
        { id: '4', sender: 'bot', text: '¡Excelente elección! 🥂 Te confirmo la Suite Romántica. Además, como huésped de esta suite, tienes acceso a un 20% de descuento en el Spa y en nuestro Restaurante Gourmet. ¿Te gustaría agendar un masaje en pareja o una cena de degustación?', time: '10:32' },
        { id: '5', sender: 'user', text: 'Reserva una cena para las 20:30, por favor.', time: '10:34' },
        { id: '6', sender: 'bot', text: '¡Mesa confirmada para las 20:30! 🍽️ Para que la velada sea perfecta, ¿deseas que nuestro Sommelier les prepare un maridaje de vinos especial a su llegada por $25 adicionales? 🍷', time: '10:34' },
        { id: '7', sender: 'user', text: '¡Claro, agregalo!', time: '10:35' },
        { id: '8', sender: 'bot', text: '¡Perfecto! 🎉 Suite con jacuzzi, cena gourmet y maridaje de vinos. Todo ha quedado registrado. Te envío el link de confirmación para que completes tu reserva. ¡Prepárense para ser consentidos!', time: '10:35' }
      ]
    },
    responses: { friendly: '', formal: '', casual: '', sales: '' }
  },
  en: {
    channels: { whatsapp: 'WhatsApp', instagram: 'Instagram', messenger: 'Messenger', web: 'Web' },
    tones: { formal: 'Elegant & Formal', friendly: 'Friendly & Casual', casual: 'Youthful & Chill', sales: 'Sales Focused' },
    labels: {
      channel: 'COMMUNICATION CHANNEL',
      tone: 'AI PERSONALITY',
      panelTitle: 'Connect your channels and customize',
      panelDesc: 'Customize the bot behavior in real time. All modules connect to your data and operate autonomously.',
      placeholder: 'Demonstration mode...'
    },
    scripts: {
      formal: [
        { id: '1', sender: 'user', text: 'Good afternoon, I would like information to book a suite this weekend.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Good afternoon. It is a pleasure to assist you. I have checked our availability and we have the Presidential Suite and the Terrace Suite. How many guests and nights will it be?', time: '19:02' },
        { id: '3', sender: 'user', text: '2 people for 2 nights, arriving on Friday.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Excellent. Your reservation for the Terrace Suite from Friday to Sunday is pre-approved. The total is $450 USD. Would you like to proceed with secure payment?', time: '19:04' },
        { id: '5', sender: 'user', text: 'Yes, please. Also, does the hotel restaurant require a reservation?', time: '19:05' },
        { id: '6', sender: 'bot', text: 'I have just sent you the payment link. As for "L\'Étoile" restaurant, reservations are required for dinner. Would you like me to secure a table for Friday at 8:00 PM?', time: '19:05' },
        { id: '7', sender: 'user', text: 'That would be perfect, thank you.', time: '19:06' },
        { id: '8', sender: 'bot', text: 'All set. Your table is booked and your suite is confirmed. We look forward to providing you with an unforgettable experience.', time: '19:06' }
      ],
      friendly: [
        { id: '1', sender: 'user', text: 'Hi! I have a reservation for tomorrow and wanted to know the check-in time.', time: '14:15' },
        { id: '2', sender: 'bot', text: 'Hi there! 👋 We\'re so excited to have you tomorrow. Check-in starts at 3:00 PM. If you arrive early, we can gladly store your luggage. 🧳', time: '14:15' },
        { id: '3', sender: 'user', text: 'Awesome! Hey, is the pool open all day?', time: '14:16' },
        { id: '4', sender: 'bot', text: 'Sure is! 🏊‍♂️ The pool is open from 8 AM to 10 PM. Don\'t worry about towels, we provide them right there. Can I help you with anything else?', time: '14:16' },
        { id: '5', sender: 'user', text: 'Yes, I want to book dinner at your restaurant tomorrow at 8.', time: '14:18' },
        { id: '6', sender: 'bot', text: 'You got it! 🍽️ I\'ve secured a table for 8:00 PM. Do you have any allergies or dietary restrictions we should know about?', time: '14:18' },
        { id: '7', sender: 'user', text: 'My partner is celiac.', time: '14:19' },
        { id: '8', sender: 'bot', text: 'Noted! 📝 Our chef will make sure to offer delicious gluten-free options. See you tomorrow, have a safe trip! 🚗', time: '14:19' }
      ],
      casual: [
        { id: '1', sender: 'user', text: 'hey, got any rooms for this weekend?', time: '21:00' },
        { id: '2', sender: 'bot', text: 'What\'s up! ✌️ Yeah, we still have a couple of double rooms left for the weekend. How many in your group?', time: '21:00' },
        { id: '3', sender: 'user', text: '4 of us, just looking to chill.', time: '21:02' },
        { id: '4', sender: 'bot', text: 'Sounds like a plan! 🌴 I can set you up with a quad room with a balcony for $120 a night. How\'s that sound?', time: '21:02' },
        { id: '5', sender: 'user', text: 'cool, works for me. Btw how late is the bar open?', time: '21:03' },
        { id: '6', sender: 'bot', text: 'The rooftop bar is open until 2 AM with a live DJ on Friday and Saturday. 🎧🍹 Should I reserve a lounge area for you guys?', time: '21:03' },
        { id: '7', sender: 'user', text: 'oh totally, under the name Carlos.', time: '21:05' },
        { id: '8', sender: 'bot', text: 'Done deal bro! 🤜🤛 Room secured and lounge is ready. Sending you the payment link now, see you Friday to kick things off! 🔥', time: '21:05' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hi, I want to check room prices for 2 people this Friday.', time: '10:30' },
        { id: '2', sender: 'bot', text: 'Hello! We would love to host you. 🏨 For this Friday we have our Deluxe Room at $150. But for just $30 more, you can upgrade to the Romantic Suite with a jacuzzi. Would you be interested in this upgrade? ✨', time: '10:30' },
        { id: '3', sender: 'user', text: 'Hmm yes, the jacuzzi one sounds nice.', time: '10:32' },
        { id: '4', sender: 'bot', text: 'Excellent choice! 🥂 The Romantic Suite is confirmed. Also, as a guest in this suite, you get a 20% discount at the Spa and our Gourmet Restaurant. Would you like to book a couples massage or a tasting dinner?', time: '10:32' },
        { id: '5', sender: 'user', text: 'Book a dinner for 8:30 PM, please.', time: '10:34' },
        { id: '6', sender: 'bot', text: 'Table confirmed for 8:30 PM! 🍽️ To make the evening perfect, would you like our Sommelier to prepare a special wine pairing for you upon arrival for an extra $25? 🍷', time: '10:34' },
        { id: '7', sender: 'user', text: 'Sure, add it!', time: '10:35' },
        { id: '8', sender: 'bot', text: 'Perfect! 🎉 Jacuzzi suite, gourmet dinner, and wine pairing. Everything is set. I\'m sending you the confirmation link to complete your booking. Get ready to be pampered!', time: '10:35' }
      ]
    },
    responses: { friendly: '', formal: '', casual: '', sales: '' }
  },
  fr: {
    channels: { whatsapp: 'WhatsApp', instagram: 'Instagram', messenger: 'Messenger', web: 'Web' },
    tones: { formal: 'Élégant et Formel', friendly: 'Amical et Proche', casual: 'Jeune, Décontracté', sales: 'Axé sur les Ventes' },
    labels: {
      channel: 'CANAL DE COMMUNICATION',
      tone: 'PERSONNALITÉ DE L\'IA',
      panelTitle: 'Connectez vos canaux et personnalisez',
      panelDesc: 'Personnalisez le comportement du bot en temps réel. Tous les modules se connectent à vos données.',
      placeholder: 'Mode démonstration...'
    },
    scripts: {
      formal: [
        { id: '1', sender: 'user', text: 'Bonjour, je voudrais des informations pour réserver une suite ce week-end.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Bonjour. C\'est un plaisir de vous aider. J\'ai vérifié notre disponibilité et nous avons la Suite Présidentielle et la Suite Terrasse. Pour combien de personnes et de nuits ?', time: '19:02' },
        { id: '3', sender: 'user', text: '2 personnes pour 2 nuits, arrivée vendredi.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Excellent. Votre réservation pour la Suite Terrasse de vendredi à dimanche est pré-approuvée. Le total est de 450 €. Souhaitez-vous procéder au paiement sécurisé ?', time: '19:04' },
        { id: '5', sender: 'user', text: 'Oui, s\'il vous plaît. Le restaurant de l\'hôtel nécessite-t-il une réservation ?', time: '19:05' },
        { id: '6', sender: 'bot', text: 'Je viens de vous envoyer le lien de paiement. Pour le restaurant "L\'Étoile", la réservation est requise le soir. Voulez-vous une table pour vendredi à 20h00 ?', time: '19:05' },
        { id: '7', sender: 'user', text: 'Ce serait parfait, merci.', time: '19:06' },
        { id: '8', sender: 'bot', text: 'Tout est prêt. Votre table est réservée et votre suite confirmée. Nous avons hâte de vous offrir une expérience inoubliable.', time: '19:06' }
      ],
      friendly: [
        { id: '1', sender: 'user', text: 'Salut ! J\'ai une réservation pour demain, à quelle heure est le check-in ?', time: '14:15' },
        { id: '2', sender: 'bot', text: 'Salut ! 👋 Trop hâte de vous accueillir. L\'enregistrement commence à 15h00. Si vous arrivez plus tôt, on peut garder vos bagages. 🧳', time: '14:15' },
        { id: '3', sender: 'user', text: 'Super ! Est-ce que la piscine est ouverte toute la journée ?', time: '14:16' },
        { id: '4', sender: 'bot', text: 'Tout à fait ! 🏊‍♂️ Elle est ouverte de 8h à 22h. Les serviettes sont fournies sur place. Je peux vous aider avec autre chose ?', time: '14:16' },
        { id: '5', sender: 'user', text: 'Oui, je voudrais réserver pour dîner à votre restaurant demain à 20h.', time: '14:18' },
        { id: '6', sender: 'bot', text: 'Ça marche ! 🍽️ Une table est réservée pour 20h00. Y a-t-il des allergies ou restrictions alimentaires à signaler ?', time: '14:18' },
        { id: '7', sender: 'user', text: 'Mon partenaire est cœliaque.', time: '14:19' },
        { id: '8', sender: 'bot', text: 'C\'est noté ! 📝 Notre chef s\'assurera de proposer de délicieuses options sans gluten. À demain et bon voyage ! 🚗', time: '14:19' }
      ],
      casual: [
        { id: '1', sender: 'user', text: 'yo, vous avez des chambres pour ce week-end ?', time: '21:00' },
        { id: '2', sender: 'bot', text: 'Yo ! ✌️ Ouais, il nous reste quelques chambres doubles pour le week-end. Vous êtes combien ?', time: '21:00' },
        { id: '3', sender: 'user', text: 'on est 4, juste pour se détendre.', time: '21:02' },
        { id: '4', sender: 'bot', text: 'Super plan ! 🌴 Je peux vous proposer une chambre quadruple avec balcon pour 120 € la nuit. Ça vous dit ?', time: '21:02' },
        { id: '5', sender: 'user', text: 'carrément. Au fait le bar ferme à quelle heure ?', time: '21:03' },
        { id: '6', sender: 'bot', text: 'Le rooftop bar est ouvert jusqu\'à 2h avec un DJ en live vendredi et samedi. 🎧🍹 Je vous réserve un coin lounge pour la soirée ?', time: '21:03' },
        { id: '7', sender: 'user', text: 'ah grave oui, au nom de carlos.', time: '21:05' },
        { id: '8', sender: 'bot', text: 'C\'est noté mec ! 🤜🤛 Chambre et lounge réservés. Je t\'envoie le lien de paiement et on se voit vendredi pour lancer la soirée ! 🔥', time: '21:05' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Bonjour, je veux voir les prix des chambres pour 2 personnes ce vendredi.', time: '10:30' },
        { id: '2', sender: 'bot', text: 'Bonjour ! Nous serions ravis de vous accueillir. 🏨 Ce vendredi, notre Chambre Deluxe est à 150 €. Mais pour seulement 30 € de plus, vous pouvez passer à la Suite Romantique avec jacuzzi. Cet upgrade vous intéresse-t-il ? ✨', time: '10:30' },
        { id: '3', sender: 'user', text: 'Hmm oui, celle avec jacuzzi a l\'air bien.', time: '10:32' },
        { id: '4', sender: 'bot', text: 'Excellent choix ! 🥂 La Suite Romantique est confirmée. De plus, en tant que client de cette suite, vous bénéficiez de 20% de réduction au Spa et à notre Restaurant Gastronomique. Souhaitez-vous réserver un massage en couple ou un dîner dégustation ?', time: '10:32' },
        { id: '5', sender: 'user', text: 'Réservez un dîner pour 20h30, s\'il vous plaît.', time: '10:34' },
        { id: '6', sender: 'bot', text: 'Table confirmée pour 20h30 ! 🍽️ Pour parfaire la soirée, souhaitez-vous que notre Sommelier vous prépare un accord mets et vins spécial à votre arrivée pour 25 € supplémentaires ? 🍷', time: '10:34' },
        { id: '7', sender: 'user', text: 'Bien sûr, ajoutez-le !', time: '10:35' },
        { id: '8', sender: 'bot', text: 'Parfait ! 🎉 Suite avec jacuzzi, dîner gastronomique et accord mets et vins. Tout est enregistré. Je vous envoie le lien de confirmation pour finaliser votre réservation. Préparez-vous à être choyés !', time: '10:35' }
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
                readOnly={true}
                placeholder={t.labels.placeholder}
                className="flex-grow bg-white border-none rounded-full px-4 py-2 text-sm text-slate-400 focus:outline-none shadow-sm cursor-default"
              />
              <button 
                type="button"
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors bg-slate-300 text-white cursor-default"
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
          {currentLanguage === 'es' ? (
            <>Conecta tus canales y centraliza respuestas eficientes 24/7 con un chatbot IA <span className="text-emerald-400 font-medium">especializado en hotelería y restaurantes.</span></>
          ) : currentLanguage === 'en' ? (
            <>Connect your channels and centralize efficient 24/7 responses with an AI chatbot <span className="text-emerald-400 font-medium">specialized in hospitality and restaurants.</span></>
          ) : (
            <>Connectez vos canaux et centralisez des réponses efficaces 24h/24 et 7j/7 avec un chatbot IA <span className="text-emerald-400 font-medium">spécialisé dans l'hôtellerie et la restauration.</span></>
          )}
        </p>

        {/* Channels Icons Grid */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12">
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <MessageCircle size={18} className="text-emerald-400" />
            <span className="text-sm font-medium text-slate-300">WhatsApp</span>
            <Check size={14} className="text-emerald-500/70 ml-1" />
          </div>
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <Camera size={18} className="text-pink-400" />
            <span className="text-sm font-medium text-slate-300">Instagram</span>
            <Check size={14} className="text-emerald-500/70 ml-1" />
          </div>
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <MessageCircle size={18} className="text-blue-400" />
            <span className="text-sm font-medium text-slate-300">Messenger</span>
            <Check size={14} className="text-emerald-500/70 ml-1" />
          </div>
          <div className="h-10 px-4 rounded-xl bg-slate-800/80 flex items-center gap-2 border border-slate-700/50 shadow-sm cursor-default">
            <Globe size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-medium text-slate-300">
              {currentLanguage === 'es' ? 'Tu página web' : currentLanguage === 'en' ? 'Your website' : 'Votre site web'}
            </span>
            <Check size={14} className="text-emerald-500/70 ml-1" />
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
          
          <p className="mt-8 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {currentLanguage === 'es' 
              ? 'Cada chatbot que desarrollamos es un cerebro de IA entrenado específicamente para tu negocio, con tu propia información corporativa, tu estilo y alma única de tu negocio.'
              : currentLanguage === 'en'
              ? 'Each chatbot we develop is an AI brain trained specifically for your business, with your own corporate information, your style, and the unique soul of your business.'
              : 'Chaque chatbot que nous développons est un cerveau d\'IA entraîné spécifiquement pour votre entreprise, avec vos propres informations d\'entreprise, votre style et l\'âme unique de votre entreprise.'}
          </p>
        </div>
      </div>
    </div>
  );
}
