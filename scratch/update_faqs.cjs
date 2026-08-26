const fs = require('fs');
let content = fs.readFileSync('src/VistomioLandingPage.tsx', 'utf8');

const faqES = `    faqList: [
      {
        q: '¿Ya tengo un PMS, necesito reemplazarlo?',
        a: 'No. Vistomio se conecta a su PMS actual vía API, no necesita reemplazar lo que ya funciona. Añadimos lo que su sistema actual no hace: chatbot IA, restaurante unificado, visibilidad financiera consolidada. Y si en algún momento quiere pasar a la suite completa, el cambio es progresivo, no una migración forzada.'
      },
      {
        q: '¿Cómo migro mis datos desde mi sistema actual?',
        a: 'Nuestro equipo se encarga de la migración de sus reservas y datos de huéspedes durante la implementación, sin costo adicional.'
      },
      {
        q: '¿Qué incluye la suscripción? ¿Hay costos ocultos?',
        a: 'El precio mostrado incluye las capacidades del plan elegido. El único costo adicional es el setup inicial, indicado de forma transparente en cada plan, sin sorpresas después de firmar.'
      },
      {
        q: '¿Hay permanencia o tengo que firmar un contrato a largo plazo?',
        a: 'Depende del plan. El plan mensual tiene un compromiso inicial de 6 meses (el primer mes es sin compromiso, ver pregunta siguiente) y después continúa mes a mes, sin permanencia. El plan anual implica un compromiso de un año, con el 15% de descuento ya indicado en nuestros precios.'
      },
      {
        q: '¿Puedo probar Vistomio antes de contratar?',
        a: 'Sí. Puede explorar una demo interactiva en demo.vistomio.com, y el primer mes tras la implementación es sin compromiso: si no está satisfecho, puede cancelar sin penalización.'
      },
      {
        q: '¿El chatbot de IA está incluido?',
        a: 'No, es un módulo independiente. Puede empezar solo con el chatbot y añadir el resto de Vistomio cuando lo necesite, o al revés.'
      },
      {
        q: '¿El chatbot está personalizado para mi hotel?',
        a: 'No es un chatbot genérico. Está especializado en hotelería y restauración, entrenado con la información real de su negocio, y personalizado con el tono exacto que usted elija: elegante y formal, cercano, juvenil o enfocado en ventas.'
      },
      {
        q: '¿Vistomio funciona si mi hotel no tiene restaurante?',
        a: 'Sí. La fusión hotel-restaurante es una capacidad, no una obligación, solo activa los módulos que su propiedad necesita.'
      },
      {
        q: 'Solo me interesa un módulo específico, ¿es posible?',
        a: 'Sí. Vistomio es 100% modular: puede empezar con un solo módulo y añadir el resto cuando lo necesite. Si su caso es particular, contáctenos para armar juntos un presupuesto a la medida de su operación.'
      },
      {
        q: '¿Es seguro el sistema de pagos?',
        a: 'Sí. Los pagos se procesan a través de plataformas homologadas y certificadas como Stripe Business o PayPal, Vistomio no almacena ni gestiona directamente los datos de sus tarjetas.'
      },
      {
        q: '¿En qué moneda se factura?',
        a: 'La suscripción a Vistomio se factura en euros (€). Para los pagos de sus propios huéspedes, contamos con pasarelas de pago que permiten a huéspedes extranjeros pagar en su moneda local.'
      },
      {
        q: '¿Qué soporte recibo durante la implementación?',
        a: 'Un acompañamiento directo, disponible 7 días a la semana, no un ticket perdido en una cola de soporte, sino acceso al equipo que construyó su sistema.'
      },
      {
        q: '¿Cómo protegen los datos de mis huéspedes?',
        a: 'Todos los datos están alojados de forma segura en servidores europeos (Hostinger/Supabase). Aplicamos cifrado tanto en tránsito como en reposo, realizamos copias de seguridad continuas y cumplimos estrictamente con la normativa RGPD para garantizar la máxima confidencialidad y seguridad.'
      }
    ],`;

const faqEN = `    faqList: [
      {
        q: 'I already have a PMS, do I need to replace it?',
        a: 'No. Vistomio connects to your current PMS via API, you do not need to replace what already works. We add what your current system does not do: AI chatbot, unified restaurant, consolidated financial visibility. And if you ever want to move to the full suite, the change is progressive, not a forced migration.'
      },
      {
        q: 'How do I migrate my data from my current system?',
        a: 'Our team handles the migration of your reservations and guest data during implementation, at no additional cost.'
      },
      {
        q: 'What is included in the subscription? Are there hidden costs?',
        a: 'The price shown includes the capabilities of the chosen plan. The only additional cost is the initial setup, transparently indicated in each plan, with no surprises after signing.'
      },
      {
        q: 'Is there a permanence period or do I have to sign a long-term contract?',
        a: 'It depends on the plan. The monthly plan has an initial commitment of 6 months (the first month is without commitment, see next question) and then continues month by month, with no permanence. The annual plan implies a one-year commitment, with the 15% discount already indicated in our prices.'
      },
      {
        q: 'Can I try Vistomio before hiring?',
        a: 'Yes. You can explore an interactive demo at demo.vistomio.com, and the first month after implementation is without commitment: if you are not satisfied, you can cancel without penalty.'
      },
      {
        q: 'Is the AI chatbot included?',
        a: 'No, it is an independent module. You can start with just the chatbot and add the rest of Vistomio when you need it, or vice versa.'
      },
      {
        q: 'Is the chatbot personalized for my hotel?',
        a: 'It is not a generic chatbot. It is specialized in hospitality and catering, trained with real information from your business, and customized with the exact tone you choose: elegant and formal, approachable, youthful or sales-focused.'
      },
      {
        q: 'Does Vistomio work if my hotel does not have a restaurant?',
        a: 'Yes. The hotel-restaurant merger is a capability, not an obligation, it only activates the modules your property needs.'
      },
      {
        q: 'I am only interested in a specific module, is it possible?',
        a: 'Yes. Vistomio is 100% modular: you can start with a single module and add the rest when you need it. If your case is particular, contact us to put together a budget tailored to your operation.'
      },
      {
        q: 'Is the payment system secure?',
        a: 'Yes. Payments are processed through approved and certified platforms such as Stripe Business or PayPal, Vistomio does not directly store or manage your card data.'
      },
      {
        q: 'In what currency is it billed?',
        a: 'The Vistomio subscription is billed in euros (€). For payments from your own guests, we have payment gateways that allow foreign guests to pay in their local currency.'
      },
      {
        q: 'What support do I receive during implementation?',
        a: 'Direct accompaniment, available 7 days a week, not a lost ticket in a support queue, but access to the team that built your system.'
      },
      {
        q: 'How do you protect my guests data?',
        a: 'All data is securely hosted on European servers (Hostinger/Supabase). We apply encryption both in transit and at rest, perform continuous backups and strictly comply with GDPR regulations to ensure maximum confidentiality and security.'
      }
    ],`;

const faqFR = `    faqList: [
      {
        q: 'J\\'ai déjà un PMS, dois-je le remplacer ?',
        a: 'Non. Vistomio se connecte à votre PMS actuel via API, vous n\\'avez pas besoin de remplacer ce qui fonctionne déjà. Nous ajoutons ce que votre système actuel ne fait pas : chatbot IA, restaurant unifié, visibilité financière consolidée. Et si vous souhaitez un jour passer à la suite complète, le changement est progressif, pas une migration forcée.'
      },
      {
        q: 'Comment puis-je migrer mes données depuis mon système actuel ?',
        a: 'Notre équipe se charge de la migration de vos réservations et des données clients lors de la mise en œuvre, sans frais supplémentaires.'
      },
      {
        q: 'Qu\\'est-ce qui est inclus dans l\\'abonnement ? Y a-t-il des coûts cachés ?',
        a: 'Le prix indiqué inclut les capacités du plan choisi. Le seul coût supplémentaire est la configuration initiale (setup), indiquée de manière transparente dans chaque plan, sans surprises après la signature.'
      },
      {
        q: 'Y a-t-il une durée d\\'engagement ou dois-je signer un contrat à long terme ?',
        a: 'Cela dépend du plan. Le plan mensuel comporte un engagement initial de 6 mois (le premier mois est sans engagement, voir question suivante) puis se poursuit mois par mois, sans engagement à long terme. Le plan annuel implique un engagement d\\'un an, avec la réduction de 15% déjà indiquée dans nos prix.'
      },
      {
        q: 'Puis-je essayer Vistomio avant de souscrire ?',
        a: 'Oui. Vous pouvez explorer une démo interactive sur demo.vistomio.com, et le premier mois après la mise en œuvre est sans engagement : si vous n\\'êtes pas satisfait, vous pouvez annuler sans pénalité.'
      },
      {
        q: 'Le chatbot IA est-il inclus ?',
        a: 'Non, c\\'est un module indépendant. Vous pouvez commencer uniquement avec le chatbot et ajouter le reste de Vistomio quand vous en avez besoin, ou vice versa.'
      },
      {
        q: 'Le chatbot est-il personnalisé pour mon hôtel ?',
        a: 'Ce n\\'est pas un chatbot générique. Il est spécialisé dans l\\'hôtellerie et la restauration, entraîné avec les informations réelles de votre établissement, et personnalisé avec le ton exact que vous choisissez : élégant et formel, accessible, jeune ou axé sur les ventes.'
      },
      {
        q: 'Vistomio fonctionne-t-il si mon hôtel n\\'a pas de restaurant ?',
        a: 'Oui. La fusion hôtel-restaurant est une capacité, pas une obligation, elle n\\'active que les modules dont votre propriété a besoin.'
      },
      {
        q: 'Je ne suis intéressé que par un module spécifique, est-ce possible ?',
        a: 'Oui. Vistomio est 100% modulaire : vous pouvez commencer avec un seul module et ajouter le reste quand vous en avez besoin. Si votre cas est particulier, contactez-nous pour établir ensemble un devis adapté à votre opération.'
      },
      {
        q: 'Le système de paiement est-il sécurisé ?',
        a: 'Oui. Les paiements sont traités via des plateformes approuvées et certifiées telles que Stripe Business ou PayPal, Vistomio ne stocke ni ne gère directement les données de vos cartes.'
      },
      {
        q: 'Dans quelle devise la facturation est-elle effectuée ?',
        a: 'L\\'abonnement Vistomio est facturé en euros (€). Pour les paiements de vos propres clients, nous disposons de passerelles de paiement qui permettent aux clients étrangers de payer dans leur devise locale.'
      },
      {
        q: 'Quel support vais-je recevoir pendant la mise en œuvre ?',
        a: 'Un accompagnement direct, disponible 7 jours sur 7, pas un ticket perdu dans une file d\\'attente de support, mais un accès à l\\'équipe qui a construit votre système.'
      },
      {
        q: 'Comment protégez-vous les données de mes clients ?',
        a: 'Toutes les données sont hébergées de manière sécurisée sur des serveurs européens (Hostinger/Supabase). Nous appliquons un chiffrement en transit et au repos, effectuons des sauvegardes continues et nous conformons strictement aux réglementations RGPD pour garantir une confidentialité et une sécurité maximales.'
      }
    ],`;

let parts = content.split("faqs: 'FAQs',");
if(parts.length === 3) {
  content = parts[0] + "faqs: 'FAQs',\n" + faqES + parts[1] + "faqs: 'FAQs',\n" + faqEN + parts[2];
}

let frParts = content.split("faqs: 'FAQ',");
if(frParts.length === 2) {
  content = frParts[0] + "faqs: 'FAQ',\n" + faqFR + frParts[1];
}

fs.writeFileSync('src/VistomioLandingPage.tsx', content);
