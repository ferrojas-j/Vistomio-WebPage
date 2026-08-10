import React, { useState, useEffect, useRef } from 'react';
import {  
  CreditCard, 
  Utensils, 
  Smartphone, 
  MessageSquareText,
  ArrowLeft,
  Send,
  Mail, 
  PieChart, 
  Users,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Play,
  Zap,
  Globe,
  Globe2,
  ChevronDown,
  Sparkles,
  Wine,
  ConciergeBell,
  BedDouble,
  LayoutGrid,
  ClipboardCheck,
  Package,
  CircleDollarSign,
  Bot,
  LineChart,
  Plus,
  Calendar,
  CalendarCheck,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Clock,
  Home,
  Briefcase
 } from 'lucide-react';

// --- Custom Icons ---
const BoutiqueLogoIcon = ({ className = "w-6 h-6", strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L8 10v9l4 2 4-2v-9L12 2z" />
    <path d="M8 14L4 18v2l4-1" />
    <path d="M16 14l4 4v2l-4-1" />
    <circle cx="12" cy="11" r="1.5" />
    <path d="M12 21v2" />
  </svg>
);

// --- Translations Data ---
const translations = {
  es: {
    suiteMockup: {
      status: 'Llegada Huésped VIP',
      preferences: 'Preferencias:',
      preferencesValue: 'Vino Tinto, Almohadas extra',
      dinner: 'Reserva Cena:',
      dinnerValue: '20:30 hrs - Terraza'
    },
    nav: {
      products: 'Productos',
      pricing: 'Precios',
      contact: 'Contacto',
      demo: 'Ver Demo',
      logoSubtitle: 'Tecnología a tu medida'
    },
    hero: {
      badge: 'Tecnología boutique para negocios boutique',
      title: 'La gestión de tu hotel',
      titleHighlight: 'revolucionada.',
      subtitle: 'La excelencia en la hospitalidad empieza desde adentro. Centraliza reservas, operaciones y finanzas en una herramienta diseñada para el detalle y el servicio excepcional.',
      ctaPrimary: 'Explorar la plataforma',
      ctaSecondary: 'Agenda entrevista gratuita con nuestro equipo'
    },
    socialProof: 'Negocios que ya confían en Vistomio',
    boutiqueNiche: {
      tag: 'JÓVENES, VALIENTES Y PRAGMÁTICOS',
      title: 'Diseñado para propiedades con alma',
      subtitle: 'No somos un software corporativo aburrido y gris. Creamos tecnología vibrante para hoteles y restaurantes boutique que quieren destacar, optimizar sin fricciones y dar un servicio excepcional.',
      cards: [
        {
          title: 'Experiencia Personalizada',
          desc: 'Anticípate a los deseos de tu huésped. Perfiles detallados y preferencias integradas.',
          icon: ConciergeBell
        },
        {
          title: 'Fusión Hotel & Restaurante',
          desc: 'El POS del restaurante habla directamente con la cuenta de la habitación. Cero errores.',
          icon: Wine
        },
        {
          title: 'Automatización Inteligente',
          desc: 'Deja que la IA optimice tus tarifas y detecte vacíos en tu ocupación.',
          icon: Sparkles
        }
      ]
    },
    featuresTitle: 'Módulos diseñados para el futuro',
    standaloneBadge: 'Módulo Independiente',
    featureCategories: [
      {
        name: 'Operaciones Hoteleras',
        items: [
          {
            title: 'Booking Engine & Channel Manager',
            desc: 'Sincronización instantánea de disponibilidad y tarifas. Nunca más un overbooking.',
            icon: CalendarCheck
          },
          {
            title: 'Check-in Digital',
            desc: 'Adiós a las filas. Permite a tus huéspedes registrarse desde su móvil o en recepción al instante.',
            icon: Smartphone
          },
          {
            title: 'App de Operaciones Diarias',
            desc: 'Seguimiento de inventario, limpieza y mantenimiento directamente al móvil de tu staff.',
            icon: ClipboardCheck
          }
        ]
      },
      {
        name: 'Operaciones Restaurante / Bar',
        items: [
          {
            title: 'Módulo de Restaurante / Bar',
            desc: 'Control de mesas, turnos y mermas en tiempo real.',
            icon: Wine
          },
          {
            title: 'POS App (Punto de Venta)',
            desc: 'Sincroniza el restaurante y el bar directamente a la habitación del huésped sin fricciones.',
            icon: Utensils,
            standalone: true
          }
        ]
      },
      {
        name: 'Administración del Negocio',
        items: [
          {
            title: 'Módulo de Administración y Finanzas',
            desc: 'Métricas en tiempo real, KPIs de ocupación y control total.',
            icon: LineChart
          },
          {
            title: 'Nóminas y Personal',
            desc: 'Seguimiento de equipo y turnos para el staff.',
            icon: Users,
            standalone: true
          },
          {
            title: 'Pagos y Facturación Simplificada',
            desc: 'Automatiza cobros, reembolsos y facturas con integraciones oficiales de pasarelas.',
            icon: CreditCard
          }
        ]
      },
      {
        name: 'Atención al Cliente y Ventas',
        items: [
          {
            title: 'Chatbots IA (3 Niveles)',
            desc: 'Respuestas automáticas, ventas proactivas y sincronización con reservaciones.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Eleva la experiencia de cada estancia',
    benefits: [
      {
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
      }
    ],
    mockupBadges: {
      leftTop: 'Nueva Reserva',
      leftBottom: '+$1,200 · Suite Terraza',
      rightTop: 'Restaurante POS',
      rightBottom: 'Mesa 4 · Pagada'
    },
    mockupCalendar: {
      newBooking: 'NUEVA RESERVA',
      rooms: 'HABITACIONES',
      channels: 'CANALES',
      title: 'Calendario de Reservas',
      reservations: 'Reservas',
      rates: 'Tarifas',
      today: 'HOY',
      legend: {
        paid: 'PAGADO',
        toPay: 'POR PAGAR',
        inProgress: 'EN CURSO',
        confirmed: 'CONFIRMADA',
        checkout: 'CHECK-OUT'
      },
      room: 'ROOM',
      channelsTitle: 'Canales Conectados',
      sync: 'Sincronizado',
      active: 'Activo',
      manual: 'Manual',
      days: { sat: 'SÁB', sun: 'DOM', mon: 'LUN', tue: 'MAR', wed: 'MIÉ', thu: 'JUE', fri: 'VIE' },
      month: 'Agosto',
      roomTypes: {
        suiteTerraza: 'Suite Delux Terraza',
        suiteJardin: 'Suite Delux Jardín',
        hab301: 'Hab. Delux 301',
        hab302: 'Hab. Delux 302',
        doble201: 'Hab. Doble 201',
        doble202: 'Hab. Doble 202'
      }
    },
    chatbotPlans: {
      badge: 'Producto Independiente',
      title: 'Potencia tu hotel con nuestro Chatbot IA',
      subtitle: 'Integra nuestro agente inteligente a tu web o canales. Disponible como producto independiente o como parte de los paquetes Vistomio.',
      plans: [
        {
          name: 'Plan Estándar',
          features: [
            'Conexión multicanal',
            'Solo respuesta a preguntas frecuentes',
            'Envíos de links, etc.',
            'Solo puede responder (no envía mensajes proactivamente)'
          ]
        },
        {
          name: 'Plan Premium',
          features: [
            'Lo de estándar + capacidad de iniciar conversaciones proactivamente',
            'Envío automatizado de campañas de marketing',
            'Ofertas especiales',
            'Fichas anticipadas de check-in, bienvenidas, etc.'
          ]
        },
        {
          name: 'Plan Autónomo',
          features: [
            'Todo lo anterior + agente de ventas proactivo',
            'Sincronización con Booking Engine para ejecutar reservas',
            'Cambiar fechas',
            'Extender estancias, etc.'
          ]
        }
      ]
    },
    pricing: {
      title: 'Paga solo lo que necesitas',
      subtitle: 'Explora nuestros paquetes pre-diseñados o arma tu propia solución a medida.',
      buildOwnPackage: 'Arma tu propio paquete',
      customModalTitle: 'Arma tu Solución Vistomio',
      customModalSubtitle: 'Selecciona los módulos que necesitas y crearemos un plan a tu medida.',
      selectedModules: 'Módulos Seleccionados',
      requestQuoteBtn: 'Solicitar cotización de mi plan',
      plans: [
        {
          name: 'Gastronomía Boutique',
          setupPrice: 'Setup Inicial: $299',
          monthlyPrice: '$89',
          period: '/mes',
          features: ['POS Operativo Avanzado', 'Módulo Restaurante y Bar', 'Finanzas y Caja'],
          cta: '¡Vamos!',
          highlight: false
        },
        {
          name: 'Hotel Starter',
          setupPrice: 'Setup Inicial: $499',
          monthlyPrice: '$149',
          period: '/mes',
          features: ['Booking Engine & Channel Manager', 'Check-in y Recepción', 'App de Personal', 'Finanzas Básicas', 'Chatbot Estándar'],
          cta: '¡Vamos!',
          highlight: false
        },
        {
          name: 'Suite All-in-One',
          setupPrice: 'Setup Inicial: $899',
          monthlyPrice: '$299',
          period: '/mes',
          features: ['Todos los módulos Starter', 'POS Gastronomía Integrado', 'Chatbot IA Avanzado', 'Analítica Predictiva', 'Soporte VIP 24/7'],
          cta: '¡Vamos!',
          highlight: false
        }
      ],
      enterprise: {
        title: '¿Necesitas algo a la medida?',
        desc: 'Construimos una arquitectura de software única para cadenas boutique o propiedades con operaciones complejas.',
        cta: '¡Hablemos!'
      }
    },
    ctaFinal: {
      title: 'El futuro de tu hotel empieza hoy',
      subtitle: 'Deja atrás los sistemas obsoletos. Únete a la revolución de la hospitalidad.',
      button: 'Comenzar ahora'
    },
    footer: {
      rights: '© 2026 Vistomio. Todos los derechos reservados.',
      legal: 'Aviso Legal',
      privacy: 'Privacidad',
      contact: 'Contacto'
    }
  },
  en: {
    suiteMockup: {
      status: 'VIP Guest Arriving',
      preferences: 'Preferences:',
      preferencesValue: 'Red Wine, Extra pillows',
      dinner: 'Dinner Reservation:',
      dinnerValue: '8:30 PM - Terrace'
    },
    nav: {
      products: 'Products',
      pricing: 'Pricing',
      contact: 'Contact',
      demo: 'View Demo',
      logoSubtitle: 'Technology tailored to you'
    },
    hero: {
      badge: 'Boutique technology for boutique businesses',
      title: 'Hotel management',
      titleHighlight: 'revolutionized.',
      subtitle: 'The most modern and disruptive PMS and ERP. Centralize everything in a modular, cloud-native, and ridiculously fast platform.',
      ctaPrimary: 'Explore the platform',
      ctaSecondary: 'Schedule a free interview with our team'
    },
    socialProof: 'Businesses that already trust Vistomio',
    boutiqueNiche: {
      tag: 'YOUNG, BOLD AND PRAGMATIC',
      title: 'Designed for properties with a soul',
      subtitle: 'We are not a boring, gray corporate software. We build vibrant technology for boutique hotels and restaurants that want to stand out, optimize without friction, and provide exceptional service.',
      cards: [
        {
          title: 'Personalized Experience',
          desc: 'Anticipate your guest\'s desires. Detailed profiles and integrated preferences.',
          icon: ConciergeBell
        },
        {
          title: 'Hotel & Restaurant Fusion',
          desc: 'The restaurant POS talks directly to the room folio. Zero mistakes.',
          icon: Wine
        },
        {
          title: 'Smart Automation',
          desc: 'Let AI optimize your rates and detect occupancy gaps automatically.',
          icon: Sparkles
        }
      ]
    },
    featuresTitle: 'Modules designed for the future',
    standaloneBadge: 'Standalone Module',
    featureCategories: [
      {
        name: 'Hotel Operations',
        items: [
          {
            title: 'Booking Engine & Channel Manager',
            desc: 'Instant synchronization of availability and rates. Never experience overbooking again.',
            icon: CalendarCheck
          },
          {
            title: 'Digital Check-in',
            desc: 'Goodbye to lines. Allow guests to check-in from their mobile or at the front desk instantly.',
            icon: Smartphone
          },
          {
            title: 'Daily Operations App',
            desc: 'Inventory tracking, housekeeping, and maintenance directly to your staff\'s mobile.',
            icon: ClipboardCheck
          }
        ]
      },
      {
        name: 'Restaurant / Bar Operations',
        items: [
          {
            title: 'Restaurant / Bar Module',
            desc: 'Table control, shifts, and real-time inventory management.',
            icon: Wine
          },
          {
            title: 'POS App',
            desc: 'Sync the restaurant and bar directly to the guest\'s room without friction.',
            icon: Utensils,
            standalone: true
          }
        ]
      },
      {
        name: 'Business Administration',
        items: [
          {
            title: 'Administration & Finance Module',
            desc: 'Real-time metrics, occupancy KPIs, and total control.',
            icon: LineChart
          },
          {
            title: 'Payroll & Staff Management',
            desc: 'Team tracking and shifts for your staff.',
            icon: Users,
            standalone: true
          },
          {
            title: 'Payments & Simplified Invoicing',
            desc: 'Automate collections, refunds, and invoices with official gateway integrations.',
            icon: CreditCard
          }
        ]
      },
      {
        name: 'Customer Service & Sales Boosters',
        items: [
          {
            title: 'AI Chatbots (3 Levels)',
            desc: 'Automated responses, proactive sales, and reservation synchronization.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Elevate every guest experience',
    benefits: [
      {
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
      }
    ],
    mockupBadges: {
      leftTop: 'New Booking',
      leftBottom: '+$1,200 · Terrace Suite',
      rightTop: 'Restaurant POS',
      rightBottom: 'Table 4 · Paid'
    },
    mockupCalendar: {
      newBooking: 'NEW BOOKING',
      rooms: 'ROOMS',
      channels: 'CHANNELS',
      title: 'Booking Calendar',
      reservations: 'Bookings',
      rates: 'Rates',
      today: 'TODAY',
      legend: {
        paid: 'PAID',
        toPay: 'TO PAY',
        inProgress: 'IN PROGRESS',
        confirmed: 'CONFIRMED',
        checkout: 'CHECK-OUT'
      },
      room: 'ROOM',
      channelsTitle: 'Connected Channels',
      sync: 'Synchronized',
      active: 'Active',
      manual: 'Manual',
      days: { sat: 'SAT', sun: 'SUN', mon: 'MON', tue: 'TUE', wed: 'WED', thu: 'THU', fri: 'FRI' },
      month: 'August',
      roomTypes: {
        suiteTerraza: 'Deluxe Terrace Suite',
        suiteJardin: 'Deluxe Garden Suite',
        hab301: 'Deluxe Rm 301',
        hab302: 'Deluxe Rm 302',
        doble201: 'Double Rm 201',
        doble202: 'Double Rm 202'
      }
    },
    chatbotPlans: {
        badge: 'Standalone Product',
        title: 'Power your hotel with our AI Chatbot',
        subtitle: 'Integrate our intelligent agent into your website or channels. Available as a standalone product or bundled with Vistomio packages.',
        plans: [
          {
            name: 'Standard Plan',
            features: [
              'Multi-channel connection',
              'FAQ responses only',
              'Sending links, etc.',
              'Can only reply (no proactive messages)'
            ]
          },
          {
            name: 'Premium Plan',
            features: [
              'Standard features + proactive conversation initiation',
              'Automated marketing campaigns',
              'Special offers',
              'Pre-arrival check-in cards, welcomes, etc.'
            ]
          },
          {
            name: 'Autonomous Plan',
            features: [
              'All the above + proactive sales agent',
              'Synchronization with Booking Engine to execute reservations',
              'Change dates',
              'Extend stays, etc.'
            ]
          }
        ]
      },
      pricing: {
      title: 'Pay only for what you need',
      subtitle: 'Explore our pre-designed packages or build your own custom solution.',
      buildOwnPackage: 'Build your own package',
      customModalTitle: 'Build Your Vistomio Solution',
      customModalSubtitle: 'Select the modules you need and we will create a tailored plan.',
      selectedModules: 'Selected Modules',
      requestQuoteBtn: 'Request quote for my plan',
      plans: [
        {
          name: 'Boutique Gastronomy',
          setupPrice: 'Setup Fee: $299',
          monthlyPrice: '$89',
          period: '/mo',
          features: ['Advanced POS', 'Restaurant & Bar Module', 'Finance & Cashier'],
          cta: 'Let\'s go!',
          highlight: false
        },
        {
          name: 'Hotel Starter',
          setupPrice: 'Setup Fee: $499',
          monthlyPrice: '$149',
          period: '/mo',
          features: ['Booking Engine & Channel Manager', 'Check-in & Front Desk', 'Staff App', 'Basic Finance', 'Standard Chatbot'],
          cta: 'Let\'s go!',
          highlight: false
        },
        {
          name: 'All-in-One Suite',
          setupPrice: 'Setup Fee: $899',
          monthlyPrice: '$299',
          period: '/mo',
          features: ['All Starter modules', 'Integrated F&B POS', 'Advanced AI Chatbot', 'Predictive Analytics', '24/7 VIP Support'],
          cta: 'Let\'s go!',
          highlight: false
        }
      ],
      enterprise: {
        title: 'Need a custom solution?',
        desc: 'We build unique software architectures for boutique chains or properties with complex operations.',
        cta: "Let's talk!"
      }
    },
    ctaFinal: {
      title: 'The future of your hotel starts today',
      subtitle: 'Leave obsolete systems behind. Join the hospitality revolution.',
      button: 'Get started now'
    },
    footer: {
      rights: '© 2026 Vistomio. All rights reserved.',
      legal: 'Legal Notice',
      privacy: 'Privacy',
      contact: 'Contact'
    }
  },
  fr: {
    suiteMockup: {
      status: 'Arrivée Client VIP',
      preferences: 'Préférences :',
      preferencesValue: 'Vin Rouge, Oreillers suppl.',
      dinner: 'Réservation Dîner :',
      dinnerValue: '20h30 - Terrasse'
    },
    nav: {
      products: 'Produits',
      pricing: 'Tarifs',
      contact: 'Contact',
      demo: 'Voir Démo',
      logoSubtitle: 'La technologie sur mesure'
    },
    hero: {
      badge: 'Technologie boutique pour entreprises boutique',
      title: 'La gestion hôtelière',
      titleHighlight: 'révolutionnée.',
      subtitle: 'Le PMS et ERP le plus moderne et disruptif. Centralisez tout dans une plateforme modulaire, native cloud et incroyablement rapide.',
      ctaPrimary: 'Explorer la plateforme',
      ctaSecondary: 'Planifier un entretien gratuit avec notre équipe'
    },
    socialProof: 'Les entreprises qui font déjà confiance à Vistomio',
    boutiqueNiche: {
      tag: 'JEUNES, AUDACIEUX ET PRAGMATIQUES',
      title: 'Conçu pour les propriétés avec une âme',
      subtitle: 'Nous ne sommes pas un logiciel d\'entreprise ennuyeux. Nous créons une technologie vibrante pour les hôtels et restaurants boutique qui veulent se démarquer et offrir un service exceptionnel.',
      cards: [
        {
          title: 'Expérience Personnalisée',
          desc: 'Anticipez les désirs de vos clients. Profils détaillés et préférences intégrées.',
          icon: ConciergeBell
        },
        {
          title: 'Fusion Hôtel & Restaurant',
          desc: 'Le POS du restaurant communique directement avec la note de la chambre. Zéro erreur.',
          icon: Wine
        },
        {
          title: 'Automatisation Intelligente',
          desc: 'Laissez l\'IA optimiser vos tarifs et détecter les vides d\'occupation automatiquement.',
          icon: Sparkles
        }
      ]
    },
    featuresTitle: "Des modules conçus pour l'avenir",
    standaloneBadge: 'Module Indépendant',
    featureCategories: [
      {
        name: 'Opérations Hôtelières',
        items: [
          {
            title: 'Moteur de Réservation & Channel Manager',
            desc: 'Synchronisation instantanée des disponibilités et tarifs. Fini le surbooking.',
            icon: CalendarCheck
          },
          {
            title: 'Check-in Digital',
            desc: 'Adieu les files d\'attente. Permettez à vos clients de s\'enregistrer via mobile instantanément.',
            icon: Smartphone
          },
          {
            title: 'Application Opérations Quotidiennes',
            desc: 'Suivi des stocks, ménage et maintenance directement sur le mobile de votre personnel.',
            icon: ClipboardCheck
          }
        ]
      },
      {
        name: 'Opérations Restaurant / Bar',
        items: [
          {
            title: 'Module Restaurant / Bar',
            desc: 'Contrôle des tables, services et gestion des stocks en temps réel.',
            icon: Wine
          },
          {
            title: 'Application POS',
            desc: 'Synchronisez le restaurant et le bar directement avec la chambre du client sans friction.',
            icon: Utensils,
            standalone: true
          }
        ]
      },
      {
        name: 'Administration des Affaires',
        items: [
          {
            title: 'Module Administration et Finances',
            desc: 'Métriques en temps réel, KPI d\'occupation et contrôle total.',
            icon: LineChart
          },
          {
            title: 'Paie & Personnel',
            desc: 'Suivi de l\'équipe et des services pour votre personnel.',
            icon: Users,
            standalone: true
          },
          {
            title: 'Paiements & Facturation Simplifiée',
            desc: 'Automatisez encaissements, remboursements et factures avec des passerelles officielles.',
            icon: CreditCard
          }
        ]
      },
      {
        name: 'Service Client & Ventes',
        items: [
          {
            title: 'Chatbots IA (3 Niveaux)',
            desc: 'Réponses automatisées, ventes proactives et synchronisation des réservations.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Élevez chaque expérience client',
    benefits: [
      {
        title: 'Payez ce que vous utilisez',
        desc: 'Architecture 100% modulaire. Connectez Vistomio à vos systèmes actuels via API ou utilisez la suite.',
        icon: Zap
      },
      {
        title: 'Vrai Multilingue',
        desc: 'Votre équipe et vos clients méritent de communiquer dans leur langue. Le système s\'adapte.',
        icon: Globe2
      },
      {
        title: 'Cloud Haute Performance',
        desc: 'Pas de serveurs locaux, fluidité absolue depuis n\'importe quel appareil, n\'importe où.',
        icon: PieChart
      }
    ],
    mockupBadges: {
      leftTop: 'Nouvelle Réservation',
      leftBottom: '+$1,200 · Suite Terrasse',
      rightTop: 'POS Restaurant',
      rightBottom: 'Table 4 · Payée'
    },
    mockupCalendar: {
      newBooking: 'NOUVELLE RÉSERVATION',
      rooms: 'CHAMBRES',
      channels: 'CANAUX',
      title: 'Calendrier des Réservations',
      reservations: 'Réservations',
      rates: 'Tarifs',
      today: 'AUJ.',
      legend: {
        paid: 'PAYÉ',
        toPay: 'À PAYER',
        inProgress: 'EN COURS',
        confirmed: 'CONFIRMÉE',
        checkout: 'DÉPART'
      },
      room: 'CHAMBRE',
      channelsTitle: 'Canaux Connectés',
      sync: 'Synchronisé',
      active: 'Actif',
      manual: 'Manuel',
      days: { sat: 'SAM', sun: 'DIM', mon: 'LUN', tue: 'MAR', wed: 'MER', thu: 'JEU', fri: 'VEN' },
      month: 'Août',
      roomTypes: {
        suiteTerraza: 'Suite Terrasse Deluxe',
        suiteJardin: 'Suite Jardin Deluxe',
        hab301: 'Ch. Deluxe 301',
        hab302: 'Ch. Deluxe 302',
        doble201: 'Ch. Double 201',
        doble202: 'Ch. Double 202'
      }
    },
    chatbotPlans: {
        badge: 'Produit Indépendant',
        title: 'Propulsez votre hôtel avec notre Chatbot IA',
        subtitle: 'Intégrez notre agent intelligent sur votre site ou vos canaux. Disponible séparément ou inclus dans les forfaits Vistomio.',
        plans: [
          {
            name: 'Plan Standard',
            features: [
              'Connexion multicanale',
              'Réponses aux FAQ uniquement',
              'Envoi de liens, etc.',
              'Ne peut que répondre (pas de messages proactifs)'
            ]
          },
          {
            name: 'Plan Premium',
            features: [
              'Tout le standard + initiation proactive de conversations',
              'Campagnes marketing automatisées',
              'Offres spéciales',
              'Fiches de check-in anticipées, bienvenues, etc.'
            ]
          },
          {
            name: 'Plan Autonome',
            features: [
              'Tout ce qui précède + agent de vente proactif',
              'Synchronisation avec le moteur de réservation',
              'Modifier les dates',
              'Prolonger les séjours, etc.'
            ]
          }
        ]
      },
      pricing: {
      title: 'Payez seulement ce dont vous avez besoin',
        subtitle: 'Explorez nos forfaits pré-conçus ou créez votre propre solution sur mesure.',
        buildOwnPackage: 'Créez votre propre forfait',
        customModalTitle: 'Créez votre solution Vistomio',
        customModalSubtitle: 'Sélectionnez les modules dont vous avez besoin et nous créerons un plan sur mesure.',
        selectedModules: 'Modules Sélectionnés',
        requestQuoteBtn: 'Demander un devis pour mon plan',
        plans: [
        {
          name: 'Gastronomie Boutique',
          setupPrice: 'Frais de Setup: $299',
          monthlyPrice: '$89',
          period: '/mois',
          features: ['POS Avancé', 'Module Restaurant & Bar', 'Finances et Caisse'],
          cta: 'Allons-y !',
          highlight: false
        },
        {
          name: 'Hotel Starter',
          setupPrice: 'Frais de Setup: $499',
          monthlyPrice: '$149',
          period: '/mois',
          features: ['Moteur de Réservation & Channel Manager', 'Check-in et Réception', 'App Personnel', 'Finances de Base', 'Chatbot Standard'],
          cta: 'Allons-y !',
          highlight: false
        },
        {
          name: 'Suite All-in-One',
          setupPrice: 'Frais de Setup: $899',
          monthlyPrice: '$299',
          period: '/mois',
          features: ['Tous les modules Starter', 'POS F&B Intégré', 'Chatbot IA Avancé', 'Analytique Prédictive', 'Support VIP 24/7'],
          cta: 'Allons-y !',
          highlight: false
        }
      ],
      enterprise: {
        title: 'Besoin de sur-mesure ?',
        desc: 'Nous construisons des architectures logicielles uniques pour les chaînes boutique ou les propriétés aux opérations complexes.',
        cta: 'Parlons-en !'
      }
    },
    ctaFinal: {
      title: 'L\'avenir de votre hôtel commence aujourd\'hui',
      subtitle: 'Laissez derrière vous les systèmes obsolètes. Rejoignez la révolution hôtelière.',
      button: 'Commencer maintenant'
    },
    footer: {
      rights: '© 2026 Vistomio. Tous droits réservés.',
      legal: 'Mentions légales',
      privacy: 'Confidentialité',
      contact: 'Contact'
    }
  }
};

type Language = 'es' | 'en' | 'fr';


const GalloAzulLogo: React.FC<{size?: number, className?: string}> = ({ size = 28, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v4M15 3v3M9 3v3" />
    <path d="M12 6a4 4 0 0 1 4 4v3l-4 6-4-6V10a4 4 0 0 1 4-4Z" />
    <path d="M16 10h4l-3 2" />
    <circle cx="13" cy="9" r="1" fill="currentColor" />
  </svg>
);

const VistomioLandingPage: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalView, setContactModalView] = useState('options');
  const [isCustomPlanModalOpen, setIsCustomPlanModalOpen] = useState(false);
  const [selectedCustomModules, setSelectedCustomModules] = useState<string[]>([]);

  const toggleCustomModule = (title: string) => {
    setSelectedCustomModules(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchCountryAndSetLang = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/country.json');
        if (response.ok) {
          const data = await response.json();
          const country = data.country;
          
          if (['FR', 'BE'].includes(country)) {
            setLang('fr');
          } else if (['US', 'CA', 'AU', 'NZ', 'IE', 'GB'].includes(country)) {
            setLang('en');
          } else if (navigator.language) {
            // Fallback to browser language if IP is from a country not in the specific lists
            if (navigator.language.startsWith('fr')) setLang('fr');
            else if (navigator.language.startsWith('en')) setLang('en');
          }
          return;
        }
      } catch (error) {
        console.error('Failed to fetch IP location', error);
      }
      
      // Fallback to browser language if API completely fails
      if (navigator.language) {
        if (navigator.language.startsWith('fr')) setLang('fr');
        else if (navigator.language.startsWith('en')) setLang('en');
      }
    };
    fetchCountryAndSetLang();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-300 selection:bg-slate-800 border border-slate-700 selection:text-white overflow-x-hidden bg-noise">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-slate-200/50 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-xl py-4 shadow-xl shadow-slate-200/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#FCE69B] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <BoutiqueLogoIcon className="text-[#0B1121] w-6 h-6" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white leading-none">Vistomio</span>
              <span className="text-[0.65rem] font-bold tracking-widest text-[#D4AF37] mt-1 uppercase whitespace-nowrap">{t.nav.logoSubtitle}</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#productos" className="text-sm font-medium text-slate-300 hover:text-[#FCE69B] transition-colors">{t.nav.products}</a>
            <a href="#precios" className="text-sm font-medium text-slate-300 hover:text-[#FCE69B] transition-colors">{t.nav.pricing}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="text-sm font-medium text-slate-300 hover:text-[#FCE69B] transition-colors">{t.nav.contact}</a>
            
            {/* Custom Language Selector */}
            <div className="relative border-l border-slate-700 pl-6" ref={langMenuRef}>
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#FCE69B] transition-colors group"
              >
                <Globe size={16} className="text-[#D4AF37] group-hover:text-[#FCE69B] transition-colors" />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-4 w-32 bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top-right ${langMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="p-1 flex flex-col gap-1">
                  {(['es', 'en', 'fr'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${lang === l ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'text-slate-300 hover:bg-slate-700/50 hover:text-[#FCE69B]'}`}
                    >
                      {l === 'es' ? 'Español' : l === 'en' ? 'English' : 'Français'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="https://demo.vistomio.com" className="bg-gradient-to-r from-[#D4AF37] to-[#FCE69B] hover:from-[#FCE69B] hover:to-[#D4AF37] text-[#0B1121] text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] flex items-center gap-2">
              {t.nav.demo} <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-300 hover:text-[#FCE69B]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B1121]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-6 shadow-2xl">
            <a href="#productos" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.nav.products}</a>
            <a href="#precios" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>{t.nav.pricing}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); setMobileMenuOpen(false); }} className="text-lg font-medium text-white">{t.nav.contact}</a>
            <div className="h-px bg-white/10 w-full my-2"></div>
            <div className="flex gap-4">
               <button onClick={() => {setLang('es'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg ${lang === 'es' ? 'bg-slate-800 border border-slate-700/20 text-[#D4AF37]' : 'text-slate-400'}`}>ES</button>
               <button onClick={() => {setLang('en'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg ${lang === 'en' ? 'bg-slate-800 border border-slate-700/20 text-[#D4AF37]' : 'text-slate-400'}`}>EN</button>
               <button onClick={() => {setLang('fr'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg ${lang === 'fr' ? 'bg-slate-800 border border-slate-700/20 text-[#D4AF37]' : 'text-slate-400'}`}>FR</button>
            </div>
            <a href="https://demo.vistomio.com" className="bg-gradient-to-r from-[#D4AF37] to-[#FCE69B] text-[#0B1121] text-center font-bold px-5 py-4 rounded-xl mt-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              {t.nav.demo}
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex justify-center">
          {/* Symmetrical Elegant Ambient Glows */}
          <div className="absolute top-[-10%] w-[1000px] h-[700px] bg-amber-200/20 blur-[180px] rounded-[100%]"></div>
          <div className="absolute top-[30%] left-[-15%] w-[800px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full"></div>
          <div className="absolute top-[30%] right-[-15%] w-[800px] h-[600px] bg-purple-200/20 blur-[150px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-bold shadow-sm backdrop-blur-md uppercase tracking-widest">
            {t.hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight mb-8">
            {t.hero.title}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCE69B]">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <a 
              href="https://demo.vistomio.com" 
              className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#FCE69B] hover:from-[#FCE69B] hover:to-[#D4AF37] text-[#0B1121] font-bold text-lg px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} 
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-semibold text-lg px-8 py-4 rounded-2xl border border-slate-700 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-amber-900/20 hover:-translate-y-1 transition-all backdrop-blur-sm"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* REALISTIC UI MOCKUP BASED ON ACTUAL SCREENSHOTS */}
          <div className="relative mx-auto w-full max-w-5xl rounded-2xl md:rounded-[2rem] border border-slate-200/50 bg-white/40 p-2 md:p-3 shadow-2xl shadow-amber-900/10 backdrop-blur-xl transform-gpu perspective-[2000px]">
             
             {/* Floating Hotel Elements */}
             <div className="absolute bottom-24 -left-12 md:-left-16 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 animate-[bounce_4s_infinite] hidden lg:flex z-30">
               <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                 <CalendarCheck size={24} />
               </div>
               <div className="text-left">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.mockupBadges.leftTop}</div>
                 <div className="text-sm font-bold text-slate-200">{t.mockupBadges.leftBottom}</div>
               </div>
             </div>
             
             <div className="absolute top-24 -right-12 md:-right-16 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 animate-[bounce_5s_infinite] hidden lg:flex z-30">
               <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400">
                 <Utensils size={24} />
               </div>
               <div className="text-left">
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.mockupBadges.rightTop}</div>
                 <div className="text-sm font-bold text-slate-200">{t.mockupBadges.rightBottom}</div>
               </div>
             </div>

             <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] overflow-hidden pointer-events-none">
               <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#FCE69B]/20 opacity-50 pointer-events-none"></div>
             </div>
             
             {/* Main App Container */}
             <div className="rounded-xl md:rounded-2xl overflow-x-auto overflow-y-hidden border border-slate-200/10 bg-[#f4f7f9] shadow-inner relative z-10 custom-scrollbar">
               <div className="min-w-[900px] w-full aspect-[16/10] relative flex text-left">
                
                {/* App Sidebar (Dark) */}
                <div className="w-64 hidden md:flex flex-col bg-[#111827] text-slate-300 border-r border-slate-800">
                  <div className="flex items-center gap-3 mb-8 px-6 pt-6">
                     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FCE69B] flex items-center justify-center text-[#0B1121]">
                        <BoutiqueLogoIcon className="w-5 h-5" strokeWidth={1.5} />
                     </div>
                     <div className="text-white font-bold text-lg">Vistomio</div>
                  </div>
                  
                  <div className="px-6 mb-6">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Active Property</div>
                    <div className="text-white font-semibold text-sm">Hotel Vistomio <span className="text-slate-500 font-normal">Demo</span></div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 px-4 overflow-y-auto pb-6 custom-scrollbar">
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <LayoutGrid size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Dashboard General</span>
                    </div>
                    {/* Active State */}
                    <div className="flex items-center gap-3 px-3 py-2 text-[#FCE69B] bg-[#1B160C]/80 border border-[#D4AF37]/30 rounded-xl cursor-pointer mt-1 mb-1 shadow-inner relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-l-xl"></div>
                      <CalendarCheck size={20} className="shrink-0 text-[#D4AF37]" strokeWidth={1.5} /> 
                      <span className="text-[13px] font-semibold leading-snug">Motor de Reservas y<br/>Channel Manager</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <CreditCard size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Pagos y Facturación</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <ClipboardCheck size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Check-in y Gestión de<br/>Huéspedes</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <Utensils size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Restaurante / Bar</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <Package size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Operaciones Diarias y<br/>Recursos</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <CircleDollarSign size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Administración y Finanzas</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <Bot size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Chatbot IA</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer group">
                      <LineChart size={20} className="shrink-0 text-slate-500 group-hover:text-slate-300" strokeWidth={1.5} /> 
                      <span className="text-[13px] leading-snug font-medium">Reportes</span>
                    </div>
                  </div>
                </div>

                {/* App Content Area (Light) */}
                <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden text-slate-200">
                  
                  {/* Header */}
                  <div className="h-20 px-6 flex items-center justify-between border-b border-slate-200 bg-white shrink-0">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">{t.mockupCalendar.title}</h2>
                      <p className="text-sm text-slate-500 hidden sm:block">Control centralizado de canales y disponibilidad</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="bg-slate-800 text-white border border-slate-700 px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-slate-700 transition-colors shadow-md shadow-slate-900/50">
                        <Plus size={16} strokeWidth={3} className="shrink-0" /> 
                        <div className="text-left leading-tight w-16 whitespace-normal">{t.mockupCalendar.newBooking}</div>
                      </button>
                      <div className="flex items-center gap-2 ml-2">
                        <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">8 {t.mockupCalendar.rooms}</span>
                        <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">5 {t.mockupCalendar.channels}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                    
                    {/* Calendar Card */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col min-h-[400px] overflow-hidden">
                      {/* Calendar Header Controls */}
                      <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 overflow-x-auto custom-scrollbar">
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="flex items-center gap-2 font-bold text-slate-800 mr-2">
                            <Calendar size={16} className="text-[#D4AF37]"/> <span className="hidden sm:inline">{t.mockupCalendar.title}</span>
                          </div>
                          <div className="flex bg-slate-100 p-1 rounded-lg">
                            <button className="bg-white text-[#D4AF37] px-2 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1"><Calendar size={12}/> {t.mockupCalendar.reservations}</button>
                            <button className="text-slate-500 px-2 py-1 rounded-md text-xs font-bold hover:text-slate-700 flex items-center gap-1"><DollarSign size={12}/> {t.mockupCalendar.rates}</button>
                          </div>
                          <div className="flex items-center gap-1 ml-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg">
                            {t.mockupCalendar.month} <ChevronDown size={12} className="text-slate-400" />
                          </div>
                          <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg">
                            2026 <ChevronDown size={12} className="text-slate-400" />
                          </div>
                          <div className="flex items-center gap-1 ml-1">
                            <button className="p-1 hover:bg-slate-100 rounded text-slate-400"><ChevronLeft size={14}/></button>
                            <span className="text-[10px] font-bold text-slate-500">{t.mockupCalendar.today}</span>
                            <button className="p-1 hover:bg-slate-100 rounded text-slate-400"><ChevronRight size={14}/></button>
                          </div>
                        </div>

                        {/* Legends */}
                        <div className="flex items-center gap-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider shrink-0 ml-4">
                          <div className="flex items-center gap-1"><CheckCircle2 size={10} className="text-emerald-500"/> {t.mockupCalendar.legend.paid}</div>
                          <div className="flex items-center gap-1"><Clock size={10} className="text-red-500"/> {t.mockupCalendar.legend.toPay}</div>
                          <div className="w-px h-3 bg-slate-300"></div>
                          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {t.mockupCalendar.legend.inProgress}</div>
                          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {t.mockupCalendar.legend.confirmed}</div>
                          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> {t.mockupCalendar.legend.checkout}</div>
                        </div>
                      </div>

                      {/* Calendar Grid */}
                      <div className="flex-1 overflow-x-auto overflow-y-hidden custom-scrollbar">
                        <div className="min-w-[800px] h-full flex flex-col">
                          {/* Header Row */}
                          <div className="flex border-b border-slate-100 text-xs font-bold text-slate-500 text-center uppercase tracking-wider bg-slate-50/50">
                            <div className="w-40 shrink-0 p-3 text-left flex items-end">{t.mockupCalendar.room}</div>
                            {/* Days columns */}
                            {[
                              {d: t.mockupCalendar.days.sat, n: 8, o: '38%', h: false},
                              {d: t.mockupCalendar.days.sun, n: 9, o: '75%', h: true},
                              {d: t.mockupCalendar.days.mon, n: 10, o: '88%', h: false},
                              {d: t.mockupCalendar.days.tue, n: 11, o: '75%', h: false},
                              {d: t.mockupCalendar.days.wed, n: 12, o: '88%', h: false},
                              {d: t.mockupCalendar.days.thu, n: 13, o: '63%', h: false},
                              {d: t.mockupCalendar.days.fri, n: 14, o: '63%', h: false},
                              {d: t.mockupCalendar.days.sat, n: 15, o: '63%', h: false},
                              {d: t.mockupCalendar.days.sun, n: 16, o: '75%', h: false},
                              {d: t.mockupCalendar.days.mon, n: 17, o: '50%', h: false},
                              {d: t.mockupCalendar.days.tue, n: 18, o: '38%', h: false},
                              {d: t.mockupCalendar.days.wed, n: 19, o: '63%', h: false}
                            ].map((day, i) => (
                              <div key={i} className={`flex-1 flex flex-col items-center justify-center p-1.5 border-l border-slate-100 ${day.h ? 'bg-amber-50/50 text-amber-600' : ''}`}>
                                <span className="text-[10px]">{day.d}</span>
                                <span className={`text-sm my-0.5 ${day.h ? 'text-amber-600' : 'text-slate-700'}`}>{day.n}</span>
                                <span className={`text-[9px] ${day.h ? 'text-amber-500' : 'text-[#D4AF37]'}`}>{day.o}</span>
                              </div>
                            ))}
                          </div>

                          {/* Rows */}
                          <div className="relative flex-1 flex flex-col pb-4">
                            {/* Grid Lines (Background) */}
                            <div className="absolute inset-0 flex pointer-events-none">
                              <div className="w-40 shrink-0 border-r border-slate-100"></div>
                              {[...Array(12)].map((_, i) => (
                                <div key={i} className={`flex-1 border-r border-slate-100 ${i === 1 ? 'bg-amber-50/30' : ''}`}></div>
                              ))}
                            </div>

                            {/* Data Rows */}
                            {[
                              { 
                                name: t.mockupCalendar.roomTypes.suiteTerraza, 
                                bars: [
                                  { start: 1, span: 3, color: 'bg-emerald-500', name: 'Luis P.', status: 'paid' },
                                  { start: 7, span: 2, color: 'bg-blue-400', name: 'Javier S.', status: 'paid' },
                                  { start: 11, span: 1, color: 'bg-blue-400', name: 'Javier S.', status: 'toPay' }
                                ]
                              },
                              { 
                                name: t.mockupCalendar.roomTypes.suiteJardin, 
                                bars: [
                                  { start: 1, span: 2, color: 'bg-emerald-500', name: 'Pedro H.', status: 'paid' },
                                  { start: 4, span: 4, color: 'bg-blue-400', name: 'Diego F.', status: 'toPay' },
                                  { start: 10, span: 2, color: 'bg-blue-400', name: 'Pedro H.', status: 'paid' }
                                ]
                              },
                              { 
                                name: t.mockupCalendar.roomTypes.hab301, 
                                bars: [
                                  { start: 0, span: 2, color: 'bg-emerald-500', name: 'Roberto C.', status: 'paid' },
                                  { start: 2, span: 2, color: 'bg-emerald-500', name: 'Raúl B.', status: 'paid' },
                                  { start: 6, span: 3, color: 'bg-blue-400', name: 'Roberto C.', status: 'toPay' },
                                  { start: 10, span: 2, color: 'bg-blue-400', name: 'Raúl B.', status: 'paid' }
                                ]
                              },
                              { 
                                name: t.mockupCalendar.roomTypes.hab302, 
                                bars: [
                                  { start: 0, span: 3, color: 'bg-emerald-500', name: 'Marta G.', status: 'paid' },
                                  { start: 4, span: 4, color: 'bg-blue-400', name: 'Marta G.', status: 'paid' },
                                  { start: 9, span: 3, color: 'bg-blue-400', name: 'Sofia L.', status: 'toPay' }
                                ]
                              },
                              { 
                                name: t.mockupCalendar.roomTypes.doble201, 
                                bars: [
                                  { start: 1, span: 4, color: 'bg-emerald-500', name: 'Valentina C.', status: 'paid' },
                                  { start: 7, span: 1, color: 'bg-blue-400', name: 'D', status: 'toPay', icon: true },
                                  { start: 9, span: 3, color: 'bg-blue-400', name: 'Roberto C.', status: 'toPay' }
                                ]
                              },
                              { 
                                name: t.mockupCalendar.roomTypes.doble202, 
                                bars: [
                                  { start: 3, span: 4, color: 'bg-blue-400', name: 'Valentina C.', status: 'paid' },
                                  { start: 8, span: 1, color: 'bg-blue-400', name: 'Javier S.', status: 'paid' },
                                  { start: 10, span: 2, color: 'bg-blue-400', name: 'Emilia V.', status: 'toPay', icon: true }
                                ]
                              },
                            ].map((row, rIdx) => (
                              <div key={rIdx} className="flex border-b border-slate-100 relative h-12 items-center z-10 hover:bg-slate-700/50/50">
                                <div className="w-40 shrink-0 px-3 text-[11px] font-bold text-slate-600 bg-white/50">{row.name}</div>
                                
                                <div className="flex-1 relative h-full">
                                  {row.bars.map((bar, bIdx) => (
                                    <div key={bIdx} 
                                         className={`absolute top-1.5 bottom-1.5 ${bar.color} rounded-md text-white text-[10px] flex items-center px-1.5 font-semibold shadow-sm overflow-hidden whitespace-nowrap`}
                                         style={{ left: `calc((100% / 12) * ${bar.start} + 2px)`, width: `calc((100% / 12) * ${bar.span} - 4px)` }}>
                                      {bar.icon ? <Home size={10} className="mr-1 shrink-0"/> : <Home size={10} className="mr-1 shrink-0 opacity-70"/>}
                                      <span className="truncate flex-1">{bar.name}</span>
                                      <div className="absolute right-1 w-3 h-3 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                        {bar.status === 'paid' ? <CheckCircle2 size={8} className="text-white"/> : <Clock size={8} className="text-white"/>}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Canales Conectados */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3 shrink-0">
                       <div className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-sm">
                         <Globe size={16} className="text-[#D4AF37]"/> {t.mockupCalendar.channelsTitle}
                       </div>
                       <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                         {[
                           { name: 'Booking.com', status: t.mockupCalendar.sync, color: 'text-blue-600', bg: 'bg-blue-900', icon: Briefcase },
                           { name: 'Airbnb', status: t.mockupCalendar.sync, color: 'text-emerald-600', bg: 'bg-rose-500', icon: Home },
                           { name: 'Expedia', status: t.mockupCalendar.sync, color: 'text-emerald-600', bg: 'bg-black', icon: Briefcase },
                           { name: 'Web Directa', status: t.mockupCalendar.active, color: 'text-[#D4AF37]', bg: 'bg-[#0B1121]', icon: Globe },
                           { name: 'Venta Directa', status: t.mockupCalendar.manual, color: 'text-amber-500', bg: 'bg-amber-500', icon: Users }
                         ].map((channel, idx) => (
                           <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#D4AF37]/20 transition-colors">
                             <div className={`w-7 h-7 rounded-lg ${channel.bg} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                               <channel.icon size={12}/>
                             </div>
                             <div className="min-w-0">
                               <div className="text-[11px] font-bold text-slate-700 whitespace-nowrap overflow-hidden text-ellipsis">{channel.name}</div>
                               <div className={`text-[9px] font-semibold ${channel.color} whitespace-nowrap overflow-hidden text-ellipsis`}>{channel.status}</div>
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>

                  </div>
                </div>

                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-md flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
                   <a href="https://demo.vistomio.com" className="bg-slate-900 text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform flex items-center gap-2">
                     <Play fill="currentColor" size={18} /> Interactuar con el Demo
                   </a>
                </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-12 border-y border-slate-800 bg-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
            {t.socialProof}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-24 opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-2xl font-bold text-slate-200">
                <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-sm border border-slate-700 shadow-sm text-slate-300">HN</span> Noga
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Oaxaca, México</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-2xl font-bold text-slate-200 italic">
                <GalloAzulLogo className="text-blue-500" size={28} /> Gallo Azul
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Baja California, México</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-2xl font-black text-slate-200 tracking-[0.2em]">
                LA MORA
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">San Agustinillo, México</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-2xl font-bold text-slate-200">
                <span className="border-2 border-[#D4AF37] p-1.5 text-[#D4AF37] text-sm">JC</span> Hoteles
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Santiago, Chile</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOUTIQUE NICHE SECTION (NEW) --- */}
      <section className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background flair */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t.boutiqueNiche.title}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {t.boutiqueNiche.subtitle}
              </p>
              
              <ul className="space-y-6">
                {t.boutiqueNiche.cards.map((card, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <card.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{card.title}</h4>
                      <p className="text-slate-300">{card.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 relative w-full">
               {/* Decorative Element mimicking a boutique menu/tablet */}
               <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-tr from-[#0B1121] to-[#171E32] border border-white/10 shadow-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/20 blur-[80px] rounded-full mix-blend-screen group-hover:bg-fuchsia-600/30 transition-colors"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                      <BedDouble className="text-white" size={24}/>
                    </div>
                    <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold border border-emerald-500/30">
                      {t.suiteMockup.status}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-white mb-4">Suite 402</div>
                    <div className="w-full h-px bg-white/10 mb-4"></div>
                    <div className="flex justify-between text-slate-300">
                      <span>{t.suiteMockup.preferences}</span>
                      <span className="font-semibold text-white">{t.suiteMockup.preferencesValue}</span>
                    </div>
                    <div className="flex justify-between text-slate-300 mt-2">
                      <span>{t.suiteMockup.dinner}</span>
                      <span className="font-semibold text-[#FCE69B]">{t.suiteMockup.dinnerValue}</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FEATURES / MODULES --- */}
      <section id="productos" className="py-32 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t.featuresTitle}</h2>
            <p className="text-lg text-slate-300">Ecosistema interconectado. Utiliza un módulo o despliega la suite completa en minutos.</p>
          </div>

          <div className="flex flex-col gap-16">
            {t.featureCategories.map((category, catIdx) => (
              <div key={catIdx} className="flex flex-col">
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{category.name}</h3>
                  <div className="h-px bg-slate-700 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300 group cursor-default relative overflow-hidden flex flex-col"
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B1121] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 border border-[#D4AF37]/20 group-hover:border-transparent">
                          <feature.icon size={26} strokeWidth={1.5} />
                        </div>
                        {feature.standalone && (
                          <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider whitespace-nowrap ml-2 mt-1">
                            {t.standaloneBadge}
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed relative z-10 flex-grow">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- CHATBOT AUTOMATION SECTION --- */}
      <section className="py-24 bg-[#0B1121] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-[100%]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              {t.chatbotPlans.title}
            </h2>
            <p className="text-lg text-slate-400">
              {t.chatbotPlans.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <div className="bg-slate-900/50 border border-indigo-500/20 rounded-3xl p-8 flex flex-col h-full hover:border-indigo-500/40 transition-colors shadow-lg hover:shadow-indigo-500/5 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6">
                <MessageSquareText className="text-indigo-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8">{t.chatbotPlans.plans[0].name}</h3>
              <div className="w-full h-px bg-white/5 mb-8"></div>
              <ul className="flex flex-col gap-5 flex-grow">
                {t.chatbotPlans.plans[0].features.map((feature, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 min-w-[20px] text-indigo-400"><CheckCircle2 size={20} /></div>
                    <span className="text-slate-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="bg-slate-900/50 border border-amber-500/20 rounded-3xl p-8 flex flex-col h-full hover:border-amber-500/40 transition-colors shadow-lg hover:shadow-amber-500/5 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-6">
                <Zap className="text-amber-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8">{t.chatbotPlans.plans[1].name}</h3>
              <div className="w-full h-px bg-white/5 mb-8"></div>
              <ul className="flex flex-col gap-5 flex-grow">
                {t.chatbotPlans.plans[1].features.map((feature, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 min-w-[20px] text-amber-400"><CheckCircle2 size={20} /></div>
                    <span className="text-slate-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Autonomous Plan */}
            <div className="bg-slate-900/50 border border-emerald-500/20 rounded-3xl p-8 flex flex-col h-full hover:border-emerald-500/40 transition-colors shadow-lg hover:shadow-emerald-500/5 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
                <Bot className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8">{t.chatbotPlans.plans[2].name}</h3>
              <div className="w-full h-px bg-white/5 mb-8"></div>
              <ul className="flex flex-col gap-5 flex-grow">
                {t.chatbotPlans.plans[2].features.map((feature, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-1 min-w-[20px] text-emerald-400"><CheckCircle2 size={20} /></div>
                    <span className="text-slate-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* --- BENEFITS --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t.benefitsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.benefits.map((benefit, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] bg-slate-800/60 backdrop-blur-xl border border-slate-700 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-amber-900/20 transition-all shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-8 border border-[#D4AF37]/30">
                  <benefit.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="precios" className="py-32 relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t.pricing.title}</h2>
            <p className="text-lg text-slate-300">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {t.pricing.plans.map((plan, idx) => (
              <div key={idx} className={`rounded-[2.5rem] p-10 bg-slate-800/80 backdrop-blur-xl border ${plan.highlight ? 'border-[#D4AF37] shadow-2xl shadow-amber-900/50 lg:scale-105 z-10 relative' : 'border-slate-700 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-xl hover:shadow-amber-900/20 relative'} overflow-hidden transition-all duration-300 flex flex-col`}>
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#FCE69B] text-[#0B1121] text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-wider">
                    MÁS POPULAR
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-[#0B1121]' : 'text-white'} mb-2 pr-24`}>{plan.name}</h3>
                <div className="text-sm font-semibold text-slate-500 mb-6 bg-slate-800 inline-block px-3 py-1 rounded-lg border border-slate-700 self-start">{plan.setupPrice}</div>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <div className={`text-5xl font-extrabold ${plan.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCE69B]' : 'text-white'}`}>
                    {plan.monthlyPrice}
                  </div>
                  <span className="text-slate-500 font-medium">{plan.period}</span>
                </div>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-4 text-slate-300">
                      <CheckCircle2 className={`${plan.highlight ? 'text-[#D4AF37]' : 'text-slate-400'} shrink-0 mt-0.5`} size={20} />
                      <span className="text-base leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
                
                <button onClick={() => setIsContactModalOpen(true)} className="w-full py-4 rounded-2xl font-bold text-lg transition-colors bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-xl">
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsCustomPlanModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-500/20 group mb-16"
            >
              {t.pricing.buildOwnPackage}
              <Plus className="ml-2 w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          {/* Enterprise Section */}
          <div className="max-w-5xl mx-auto bg-[#0B1121] rounded-[2rem] p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none"></div>
             <div className="relative z-10 md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.pricing.enterprise.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{t.pricing.enterprise.desc}</p>
             </div>
             <div className="relative z-10 md:w-1/3 flex justify-end w-full">
                <button onClick={() => setIsContactModalOpen(true)} className="w-full md:w-auto px-8 py-4 bg-white text-[#0B1121] font-bold rounded-2xl hover:bg-slate-200 transition-colors shadow-lg">
                  {t.pricing.enterprise.cta}
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 opacity-95"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-amber-500/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t.ctaFinal.title}</h2>
          <p className="text-xl text-[#FCE69B] mb-12 max-w-2xl mx-auto font-light">{t.ctaFinal.subtitle}</p>
          <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="inline-block bg-white text-[#0B1121] font-bold text-xl px-12 py-5 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transition-all">
            {t.ctaFinal.button}
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FCE69B] flex items-center justify-center text-[#0B1121]">
               <BoutiqueLogoIcon className="w-5 h-5 text-slate-900" strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Vistomio</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="mailto:hola@vistomio.com" className="hover:text-white transition-colors">{t.footer.contact}</a>
          </div>

          <div className="text-sm text-slate-500">
            {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      
      {/* Custom Plan Modal */}
      {isCustomPlanModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 sticky top-0 z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.customModalTitle}</h3>
                <p className="text-slate-400">{t.pricing.customModalSubtitle}</p>
              </div>
              <button 
                onClick={() => setIsCustomPlanModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
              <div className="space-y-10">
                {t.featureCategories.map((category, catIdx) => (
                  <div key={catIdx}>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
                      {category.name}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, itemIdx) => {
                        const isSelected = selectedCustomModules.includes(item.title);
                        return (
                          <div 
                            key={itemIdx} 
                            onClick={() => toggleCustomModule(item.title)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isSelected 
                                ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                                : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`mt-0.5 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                                {isSelected ? <CheckCircle2 size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>}
                              </div>
                              <div>
                                <h5 className={`font-semibold mb-1 ${isSelected ? 'text-emerald-300' : 'text-white'}`}>{item.title}</h5>
                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-slate-800 bg-slate-900/80 sticky bottom-0 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-slate-400 text-sm block mb-1">{t.pricing.selectedModules}:</span>
                <span className="text-2xl font-bold text-white">{selectedCustomModules.length}</span>
              </div>
              <button 
                className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold transition-all ${
                  selectedCustomModules.length > 0
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-white shadow-lg hover:shadow-emerald-500/25'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
                disabled={selectedCustomModules.length === 0}
                onClick={() => {
                  setIsCustomPlanModalOpen(false);
                  setIsContactModalOpen(true);
                }}
              >
                {t.pricing.requestQuoteBtn}
              </button>
            </div>
          </div>
        </div>
      )}


      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => { setIsContactModalOpen(false); setContactModalView('options'); }}></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl w-full max-w-xl animate-[translate-y-0_0.3s_ease-out] overflow-hidden">
            <button 
              onClick={() => { setIsContactModalOpen(false); setContactModalView('options'); }}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            {contactModalView === 'options' ? (
              <div className="animate-[fade-in_0.3s_ease-out]">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-900/30">
                    <Calendar size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Conecta con Nosotros</h3>
                  <p className="text-slate-400">Agenda una entrevista o contáctanos directamente para descubrir cómo podemos elevar tu negocio.</p>
                </div>

                <div className="space-y-4">
                  <button onClick={() => setContactModalView('calendar')} className="w-full bg-white text-[#0B1121] font-bold text-lg py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors shadow-xl">
                    <Calendar size={24} />
                    Agendar Entrevista Gratuita
                  </button>

                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-4 bg-slate-900 text-sm text-slate-500 font-medium">O contáctanos vía</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button onClick={() => setContactModalView('email')} className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-4 rounded-2xl flex flex-col items-center gap-3 transition-colors group">
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#FCE69B] transition-colors">
                        <Mail size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white mb-1">Email</div>
                        <div className="text-xs text-slate-400">info@vistomio.com</div>
                      </div>
                    </button>
                    
                    <a href="https://wa.me/525540590054" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-4 rounded-2xl flex flex-col items-center gap-3 transition-colors group">
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                        <MessageSquareText size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-white mb-1">WhatsApp</div>
                        <div className="text-xs text-slate-400">+52 55 40590054</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ) : contactModalView === 'email' ? (
              <div className="animate-[fade-in_0.3s_ease-out]">
                <button 
                  onClick={() => setContactModalView('options')}
                  className="absolute top-6 left-6 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-900/30">
                    <Mail size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Enviar Mensaje</h3>
                  <p className="text-slate-400 text-sm">Te responderemos a la brevedad.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Mensaje enviado exitosamente."); setIsContactModalOpen(false); setContactModalView('options'); }}>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Para</label>
                    <input 
                      type="email" 
                      value="info@vistomio.com" 
                      disabled 
                      className="w-full bg-slate-900/50 border border-slate-800 text-slate-500 rounded-xl px-4 py-3 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tu Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="ejemplo@hotel.com"
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Mensaje</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder="¿En qué te podemos ayudar?"
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-br from-[#D4AF37] to-[#FCE69B] text-[#0B1121] hover:brightness-110 shadow-lg shadow-[#D4AF37]/30 border border-[#FCE69B]/50 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-900/20 mt-4">
                    <Send size={20} />
                    Enviar Correo
                  </button>
                </form>
              </div>
            ) : (
              <div className="animate-[fade-in_0.3s_ease-out]">
                <button 
                  onClick={() => setContactModalView('options')}
                  className="absolute top-6 left-6 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-900/30">
                    <Calendar size={32} className="text-[#0B1121]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Agenda tu Demo</h3>
                  <p className="text-slate-400 text-sm">Selecciona una fecha y hora disponible.</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">Días Disponibles</h4>
                    <div className="flex gap-3 overflow-x-auto custom-scrollbar pb-2">
                      {['Lun 14', 'Mar 15', 'Mié 16', 'Jue 17', 'Vie 18', 'Sáb 19', 'Dom 20'].map((day, i) => (
                        <button key={i} className={`flex-shrink-0 w-20 py-3 rounded-xl border ${i === 2 ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' : 'border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700'} flex flex-col items-center justify-center gap-1 transition-colors`}>
                          <span className="text-xs uppercase">{`${day.split(' ')[0]}`}</span>
                          <span className="text-lg font-bold">{`${day.split(' ')[1]}`}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">Horarios (Mié 16)</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['09:00', '10:00', '11:30', '14:00', '15:30', '17:00'].map((time, i) => (
                        <button key={i} onClick={() => { alert("Reunión agendada para Mié 16 a las " + time + " exitosamente. Pronto recibirás un correo con la liga."); setIsContactModalOpen(false); setContactModalView('options'); }} className="py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors flex items-center justify-center gap-2">
                          <Clock size={16} /> {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default VistomioLandingPage;
