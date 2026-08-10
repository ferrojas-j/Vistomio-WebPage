const fs = require('fs');

const path = 'src/ChatbotSimulator.tsx';
let content = fs.readFileSync(path, 'utf8');

const newTranslations = `const translations = {
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
      placeholder: 'Modo de demostración...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: '¡Hola! Quería saber si tienen mesas disponibles para esta noche.', time: '19:02' },
        { id: '2', sender: 'bot', text: '¡Hola! 👋 ¡Qué gusto saludarte! Déjame revisar... ¡Sí! Tenemos algunas mesitas libres. ¿Para cuántas personas sería y a qué hora les gustaría venir? 🍷', time: '19:02' },
        { id: '3', sender: 'user', text: 'Seríamos 4 personas, como a las 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: '¡Súper! Queda anotado para las 9:00 PM a nombre tuyo. ¡Nos vemos al rato para disfrutar de una gran noche! 🎉', time: '19:04' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Buenas tardes, deseo realizar una reservación para hoy.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Buenas tardes. Es un placer atenderle. He verificado nuestra disponibilidad y contamos con mesas para esta noche. Por favor, indíqueme el número de personas y la hora deseada para confirmar su reserva.', time: '19:02' },
        { id: '3', sender: 'user', text: 'Mesa para 4, a las 21:00 horas.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Su reserva para 4 personas a las 21:00 horas ha sido confirmada con éxito. Le esperamos con gusto.', time: '19:04' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hola, ¿tienen lugar para cenar hoy?', time: '19:02' },
        { id: '2', sender: 'bot', text: '¡Hola! Sí, tenemos disponibilidad. 🍽️ Además, hoy es noche de especialidades: nuestro Ribeye Prime tiene 15% de descuento al reservar por este medio. ¿Te aparto una mesa para aprovechar la promoción? 🔥', time: '19:02' },
        { id: '3', sender: 'user', text: '¡Suena genial! Sí, somos 4 a las 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: '¡Excelente elección! Tu mesa para 4 y tu promoción del 15% están confirmadas. ¡Te esperamos esta noche! 🥩🍷', time: '19:04' }
      ]
    },
    responses: {
      friendly: '',
      formal: '',
      sales: ''
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
      placeholder: 'Demonstration mode...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: 'Hi! Are there any tables available for tonight?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Hi there! 👋 Great to hear from you! Let me check... Yes! We have a few tables left. How many people and what time would you like to come? 🍷', time: '19:02' },
        { id: '3', sender: 'user', text: 'It would be for 4 people, around 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Awesome! You are all set for 9:00 PM. See you soon for a great night! 🎉', time: '19:04' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Good evening, I would like to make a reservation for tonight.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Good evening. It is a pleasure to assist you. I have checked our availability and we do have tables for tonight. Please let me know the number of guests and your preferred time to confirm.', time: '19:02' },
        { id: '3', sender: 'user', text: 'Table for 4 at 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Your reservation for 4 guests at 9:00 PM has been successfully confirmed. We look forward to welcoming you.', time: '19:04' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Hi, do you have space for dinner today?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Hello! Yes, we have availability. 🍽️ Also, tonight is steak night: our Prime Ribeye is 15% off when you book through here. Shall I secure a table so you can enjoy this promo? 🔥', time: '19:02' },
        { id: '3', sender: 'user', text: 'Sounds great! Yes, 4 people at 9 PM.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Excellent choice! Your table for 4 and your 15% promo are confirmed. See you tonight! 🥩🍷', time: '19:04' }
      ]
    },
    responses: {
      friendly: '',
      formal: '',
      sales: ''
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
      tone: 'Personnalité de l\\'IA',
      tryIt: 'Interagissez avec le bot',
      typing: 'en train d\\'écrire...',
      placeholder: 'Mode démonstration...'
    },
    scripts: {
      friendly: [
        { id: '1', sender: 'user', text: 'Salut ! Avez-vous des tables pour ce soir ?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Salut ! 👋 Ravi de vous parler ! Laissez-moi vérifier... Oui ! Il nous reste quelques tables. Pour combien de personnes et à quelle heure ? 🍷', time: '19:02' },
        { id: '3', sender: 'user', text: 'On serait 4 personnes, vers 21h.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Génial ! C\\'est noté pour 21h00. À tout à l\\'heure pour une belle soirée ! 🎉', time: '19:04' }
      ],
      formal: [
        { id: '1', sender: 'user', text: 'Bonsoir, je souhaite réserver pour ce soir.', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Bonsoir. C\\'est un plaisir de vous aider. J\\'ai vérifié et nous avons des tables pour ce soir. Veuillez m\\'indiquer le nombre de personnes et l\\'heure souhaitée.', time: '19:02' },
        { id: '3', sender: 'user', text: 'Une table pour 4 à 21h.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Votre réservation pour 4 personnes à 21h00 est confirmée. Nous vous attendons.', time: '19:04' }
      ],
      sales: [
        { id: '1', sender: 'user', text: 'Bonjour, avez-vous de la place pour dîner ?', time: '19:02' },
        { id: '2', sender: 'bot', text: 'Bonjour ! Oui, nous avons de la disponibilité. 🍽️ De plus, ce soir notre Ribeye est à -15% si vous réservez ici. Puis-je vous réserver une table pour en profiter ? 🔥', time: '19:02' },
        { id: '3', sender: 'user', text: 'Super ! Oui, 4 personnes à 21h.', time: '19:04' },
        { id: '4', sender: 'bot', text: 'Excellent choix ! Votre table pour 4 et votre promotion de 15% sont confirmées. À ce soir ! 🥩🍷', time: '19:04' }
      ]
    },
    responses: {
      friendly: '',
      formal: '',
      sales: ''
    }
  }
};`;

const regex = /const translations = \{[\s\S]*?\n};\n/m;
content = content.replace(regex, newTranslations + '\n');
fs.writeFileSync(path, content);
