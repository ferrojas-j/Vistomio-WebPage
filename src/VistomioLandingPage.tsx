import POSSimulator from './POSSimulator';
import ChatbotSimulator from './ChatbotSimulator';
import StaffAppSimulator from './StaffAppSimulator';
import MockVistomioApp from './MockVistomioApp';
import React, { useState, useEffect, useRef } from 'react';
import {  
  CreditCard, 
  Utensils, 
  Smartphone, 
  MessageSquareText,
  ArrowLeft,
  ArrowUp,
  Send,
  Mail, 
  PieChart, 
  Users,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Zap,
  Globe,
  Globe2,
  ChevronDown,
  Sparkles,
  Wine,
  ConciergeBell,
  BedDouble,
  ClipboardCheck,
  Bot,
  LineChart,

  Calendar,
  CalendarCheck,
  Clock,
  Wallet, 
  TrendingUp
} from 'lucide-react';

// --- Custom Icons ---

// --- Translations Data ---
const translations = {
  es: {
    suiteMockup: {
      status: 'Llegada Huésped VIP',
      preferences: 'Preferencias:',
      preferencesValue: 'Vino Tinto, Almohadas extra',
      dinner: 'Reserva Cena:',
      dinnerValue: '20:30 hrs - Terraza',
      langLabel: 'Idiomas:',
      langValue: 'Francés e inglés',
      originLabel: 'Origen:',
      originValue: 'París, Francia',
      arrivalLabel: 'Llegada:',
      arrivalValue: '17:00 hrs',
      parkingLabel: 'Estacionamiento:',
      parkingValue: 'Sí'
    },
    nav: {
      products: 'Productos',
      pricing: 'Precios',
      contact: 'Contacto',
      demo: 'Ver Demo',
      logoSubtitle: 'Tecnología a tu medida'
    },
    hero: {
      badge: 'Sistemas boutique para negocios boutique',
      title: 'Lleva la gestión de tu hotel',
      titleHighlight: 'al siguiente nivel',
      subtitle: 'La excelencia en la hospitalidad empieza desde adentro. Centraliza reservas, operaciones, administración y finanzas en una herramienta diseñada para darte tranquilidad.',
      ctaPrimary: 'Explorar plataforma',
      ctaSecondary: 'Agendar entrevista'
    },
    locations: {
      noga: 'Zipolite, México',
      galloAzul: 'Todos Santos, México',
      laMora: 'San Agustinillo, México',
      jc: 'Santiago, Chile'
    },
    heroBadges: {

      badge1Top: 'GESTIÓN',

      badge1Bottom: 'Cero estrés',

      badge2Top: 'RESULTADO',

      badge2Bottom: '+ Calidad de servicio',

      badge3Top: 'EFICIENCIA',

      badge3Bottom: '+ Tiempo libre'

    },

    systemDemo: {
      mockApp: {
        sidebar: { dashboard: 'Dashboard General', bookingEngine: 'Motor de Reservas y Channel Manager', payments: 'Pagos y Facturación', checkin: 'Check-in y Gestión de Huéspedes', restaurant: 'Restaurante / Bar', operations: 'Operaciones y Tareas', finance: 'Administración y Finanzas', chatbot: 'Chatbot IA', reports: 'Reportes', demoVersion: 'Versión Demo' },
        header: { title1: 'Gestión de', title2: 'Reservas', search: 'Buscar huésped...', rooms: 'HABITACIONES', channels: 'CANALES', newRes1: 'NUEVA', newRes2: 'RESERVA' },
        toolbar: { calendar: 'Calendario de Reservas', reservations: 'Reservas', rates: 'Tarifas', august: 'Agosto', today: 'HOY' },
        grid: { room: 'HABITACIÓN', days: ['MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM', 'LUN', 'MAR'], rooms: ['Suite Deluxe con Terraza', 'Suite de lujo con jardín', 'Habitación Deluxe 301'] },
        channels: { title: 'Canales Conectados', synced: 'Sincronizado', active: 'Activo', directWeb: 'Web Directa', directSale: 'Venta Directa' }
      },
      title: 'Sistemas boutique para negocios boutique',
      btn: 'Explorar demo'
    },
    socialProof: 'Negocios que ya confían en Vistomio',
    boutiqueNiche: {
      tag: 'JÓVENES, VALIENTES Y PRAGMÁTICOS',
      title: 'Tecnología para lugares con alma',
      subtitle: 'No somos un software corporativo aburrido y gris. Creamos tecnología vibrante y pragmática para hoteles y restaurantes boutique que quieren automatizar y optimizar sus operaciones para dedicar <span class="text-[#A37A3B] font-bold">tiempo a lo importante: dar un servicio excepcional.</span>',
      cards: [
        {
          title: 'Experiencia Personalizada',
          desc: 'Con nuestro <span class="text-[#A37A3B] font-bold">módulo de Check in digital</span>, anticípate a los deseos de tu huésped. Perfiles detallados y preferencias integradas.',
          icon: ConciergeBell
        },
        {
          title: 'Fusión Hotel & Restaurante',
          desc: 'El <span class="text-[#A37A3B] font-bold">POS Vistomio restaurante</span> habla directamente con los sistemas del hotel. Comunicación fluida, cero errores.',
          icon: Wine
        },
        {
          title: 'Recomendaciones Inteligentes',
          desc: 'Una IA especializada analiza los datos de tu operación para sugerirte <span class="text-[#A37A3B] font-bold">dinámicas de tarifas, campañas y ventas cruzadas.</span>',
          icon: Sparkles
        }
      ]
    },
    featuresTitle: '',
    featuresSubtitle: 'Ecosistema interconectado y modular, usa solo lo que necesitas',
    standaloneBadge1: 'Disponible como',
    standaloneBadge2: 'app independiente',
    seeHowItWorks: 'Ver cómo funciona',
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
            icon: ClipboardCheck,
            standalone: true,
            demoId: 'demo-staff'
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
            standalone: true,
            demoId: 'demo-pos'
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
            icon: Users
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
            title: 'Chatbot IA (Nivel 1)',
            desc: 'Respuestas automáticas a preguntas frecuentes y envíos de links.',
            icon: Bot,
            standalone: true
          },
          {
            title: 'Chatbot IA (Nivel 2)',
            desc: 'Ventas proactivas, campañas de marketing y ofertas especiales.',
            icon: Bot,
            standalone: true
          },
          {
            title: 'Chatbot IA (Nivel 3)',
            desc: 'Autonomía total con sincronización con Booking Engine para reservaciones.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Optimizar tu gestión es más fácil que nunca',
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
      title: 'Chatbot IA Multicanal',
      subtitle: 'Automatiza la atención, incrementa reservas directas y ofrece servicio 24/7 en todos tus canales con nuestros agentes de IA.',
      talkBtn: 'Hablemos',
      plans: [
        {
          name: 'Nivel 1: Respuestas Automáticas',
          features: [
            'Conexión multicanal',
            'Solo respuesta a preguntas frecuentes',
            'Envíos de links, etc.',
            'Solo puede responder (no envía mensajes proactivamente)'
          ]
        },
        {
          name: 'Nivel 2: Ventas Proactivas',
          features: [
            'Lo de estándar + capacidad de iniciar conversaciones proactivamente',
            'Envío automatizado de campañas de marketing',
            'Ofertas especiales',
            'Fichas anticipadas de check-in, bienvenidas, etc.'
          ]
        },
        {
          name: 'Nivel 3: Autonomía Total',
          features: [
            'Todo lo anterior + agente de ventas proactivo',
            'Sincronización con Booking Engine para ejecutar reservas',
            'Cambiar fechas',
            'Extender estancias, etc.'
          ]
        }
      ]
    },
    
    posDemo: {
      sectionTitle: 'Descubre POS Vistomio para restaurantes y bares de autor',
      sectionDesc: 'Experimenta el control total desde la palma de tu mano. Navega por nuestro simulador interactivo de Punto de Venta.',
      features: [
        { title: 'Operación Fluida', desc: 'Gestiona salones y barras con estados de mesas codificados por color.' },
        { title: 'Control Financiero', desc: 'Registra gastos al instante y mantén la caja chica actualizada.' }
      ],
      tabs: { tables: 'MESAS', orders: 'COMANDAS', expenses: 'GASTOS', admin: 'ADMIN' },
      tables: { free: 'LIBRES', occupied: 'OCUPADAS', ready: 'LISTAS', room: 'SALÓN', bar: 'BARRA', daypass: 'DAYPASS (CONSUMOS)', openTab: '+ Abrir Cuenta', credit: 'Crédito:' },
      orders: { recent: 'Comandas Recientes', today: 'Hoy', open: 'ABIERTA', closed: 'CERRADA', table: 'Mesa', bar: 'Barra', daypass: 'Daypass' },
      expenses: { pettyCash: 'Caja Chica', date: 'Lunes, 10 De Agosto', auth: 'AUTORIZA: ADMINISTRADOR', inProgress: 'EN CURSO', initial: 'INICIAL', current: 'ACTUAL', todayExpenses: 'GASTOS DE HOY', addExpense: 'Registrar Gasto', items: [ { name: 'Verduras frescas y hielo', category: 'INSUMOS COCINA' }, { name: 'Hielo y limones', category: 'INSUMOS BARRA' }, { name: 'Gasolina', category: 'LOGÍSTICA' } ] },
      admin: { dashboard: 'Panel de Control', activeShift: 'JORNADA ACTIVA', shift: 'TURNO: ADMINISTRADOR', totalSales: 'VENTAS TOTALES', totalExpenses: 'GASTOS (3)', tips: 'PROPINAS ACUMULADAS', management: 'GESTIÓN', menuEditor: 'Editor de Menú', menuEditorDesc: 'Platos, precios y disponibilidad', closeShift: 'Cerrar Jornada', closeShiftDesc: 'Finalizar turno y hacer corte' },
      closeShiftModal: { title: 'Corte de Caja', subtitle: 'Resumen de la jornada actual', income: 'INGRESOS DEL DÍA', cc: 'Tarjeta de crédito', transfer: 'Transferencia', cash: 'Efectivo', totalIncome: 'Total Ingresos', expenses: 'EGRESOS DEL DÍA', pettyCash: 'Gastos menores (Caja chica)', providers: 'Proveedores', totalExpenses: 'Total Egresos', balance: 'Balance Final', tips: 'Propinas del día', share: 'Compartir', print: 'Imprimir', confirm: 'Confirmar Cierre', cancel: 'Cancelar' },
      tableInteraction: {
        serving: 'ATENDIENDO',
        toCharge: 'A COBRAR',
        currentBill: 'CUENTA ACTUAL',
        total: 'Total',
        chargeBtn: 'Cobrar',
        freeTableBtn: 'Liberar Mesa',
        payment: 'Pago',
        card: 'Tarjeta',
        cash: 'Efectivo',
        tip: 'Propina',
        noTip: 'No',
        confirmBtn: 'Confirmar',
        categories: { meats: 'Carnes', wines: 'Vinos', salads: 'Ensaladas', sides: 'Acompañ.' },
        items: {
          ribeye: { name: 'Ribeye Prime (400g)', price: 850 },
          picana: { name: 'Picaña (300g)', price: 650 },
          malbec: { name: 'Malbec Reserva 2020', price: 950 },
          chardonnay: { name: 'Chardonnay', price: 780 }
        }
      },
      expenseModal: {
        title: 'Nuevo Gasto',
        desc: 'Pago a proveedores e insumos.',
        amount: 'MONTO',
        category: 'CATEGORÍA',
        description: 'DESCRIPCIÓN',
        saveBtn: 'Guardar Gasto',
        descPlaceholder: 'Ej: Verduras, Hielo, Detergente'
      },
      menuEditor: {
        title: 'Editor de Menú',
        addDish: '+ Add Dish',
        available: 'DISPONIBLE',
        lowStock: 'POCAS UNIDADES',
        outOfStock: 'AGOTADO',
        meats: 'Carnes a la Parrilla',
        wines: 'Vinos'
      }
    },
    contactModal: {
      options: { title: 'Conecta con Nosotros', desc: 'Agenda una entrevista o contáctanos directamente para descubrir cómo podemos elevar tu negocio.', bookBtn: 'Agendar Entrevista Gratuita', orContact: 'O contáctanos vía' },
      email: { title: 'Enviar Mensaje', desc: 'Te responderemos a la brevedad.', toLabel: 'Para', emailLabel: 'Tu Email', emailPlaceholder: 'ejemplo@hotel.com', messageLabel: 'Mensaje', messagePlaceholder: '¿En qué te podemos ayudar?', sendBtn: 'Enviar Correo', success: 'Mensaje enviado exitosamente.' },
      calendar: { title: 'Agenda tu Demo', desc: 'Selecciona una fecha y hora disponible.', daysLabel: 'Días Disponibles', timesLabel: 'Horarios', days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], successAlert: 'Reunión agendada para {day} a las {time} exitosamente. Pronto recibirás un correo con la liga.' }
    },
    customPlanModal: {
      title: 'Cotiza tu Plan', desc: 'Déjanos tus datos para enviarte una propuesta a la medida.', selectedModules: 'Módulos Seleccionados', emailLabel: 'Tu Email *', emailPlaceholder: 'ejemplo@hotel.com', phoneLabel: 'Número de Contacto *', phonePlaceholder: '+1 234 567 890', companyLabel: 'Empresa (Opcional)', companyPlaceholder: 'Nombre de tu hotel o restaurante', messageLabel: 'Mensaje Adicional', messagePlaceholder: 'Cuéntanos un poco más sobre lo que necesitas...', sendBtn: 'Solicitar cotización', successAlert: 'Se abrirá tu cliente de correo con los datos de tu cotización listos para enviar.', emailSubject: 'Solicitud de Cotización a Medida - Vistomio', emailBodyTemplate: 'Correo: {email}\\nTeléfono: {phone}\\nEmpresa: {company}\\n\\nMódulos Seleccionados:\\n- {modules}\\n\\nMensaje:\\n{message}'
    },
    pricing: {
      title: 'Nuestros planes',
      subtitle: 'Cada uno con una promesa clara.',
      buildOwnPackage: 'Arma tu propio paquete',
      customModalTitle: 'Arma tu Solución Vistomio',
      customModalSubtitle: 'Selecciona los módulos que necesitas y crearemos un plan a tu medida.',
      selectedModules: 'Módulos Seleccionados',
      requestQuoteBtn: 'Solicitar cotización de mi plan',
      plans: [
        {
          name: 'Esencial',
          quote: '"Digitaliza tu gestión sin complicaciones."',
          setupPrice: 'Setup: 400€',
          monthlyPrice: '250€',
          period: '/mes',
          features: [
            { name: 'Dashboard General', desc: 'vista general en tiempo real de la operación' },
            { name: 'Motor de Reservas y Channel Manager', desc: 'calendario multicanal o conexión API del PMS' },
            { name: 'Check-in y Gestión de Huéspedes', desc: 'llegadas, firmas, idioma del huésped' }
          ],
          baseText: 'Ideal para reemplazar sistemas caseros o hojas de cálculo.',
          cta: 'Comenzar',
          highlight: false
        },
        {
          name: 'Crecimiento',
          quote: '"Toma el control financiero de un vistazo."',
          setupPrice: 'Setup: 500€',
          monthlyPrice: '400€',
          period: '/mes',
          features: [
            { name: 'Todo el plan Esencial', desc: '' },
            { name: 'Pagos y Facturación', desc: 'cobros, pasarelas digitales, facturación' },
            { name: 'Administración y Finanzas', desc: 'resumen ejecutivo, rentabilidad por departamento' }
          ],
          baseText: 'Para el propietario-gerente enfocado en rentabilidad.',
          cta: 'Comenzar',
          highlight: false
        },
        {
          name: 'Signature',
          quote: '"Más tiempo para tus huéspedes, menos papeleo."',
          setupPrice: 'Setup: 700€',
          monthlyPrice: '600€',
          period: '/mes',
          features: [
            { name: 'Todo el plan Crecimiento', desc: '' },
            { name: 'Restaurante / Bar', desc: 'POS integrado, ventas, división de cuentas' },
            { name: 'Operaciones Diarias y Recursos', desc: 'inventario, alertas de personal y de stock' },
            { name: 'Reportes', desc: 'informes personalizados a medida' }
          ],
          baseText: 'Gestión integral sin fisuras para hoteles boutique.',
          cta: 'Comenzar',
          highlight: false
        }
      ],
      addon: {
        name: 'Add-on transversal — Chatbot IA',
        quote: '"Una atención disponible en todo momento, a la altura de tu reputación."',
        features: [
          'Asistente multicanal (WhatsApp, Instagram, Messenger, Web Chat).',
          'Responde a consultas de disponibilidad y tarifas de forma continua.',
          'Compatible con cualquier plan (solo o complemento).'
        ],
        baseText: 'La primera pieza del servicio al cliente automatizado de alta gama.',
        price: 'Desde 150€/mes',
        cta: 'Ver Demo'
      },
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
      dinnerValue: '8:30 PM - Terrace',
      langLabel: 'Languages:',
      langValue: 'French and English',
      originLabel: 'Origin:',
      originValue: 'Paris, France',
      arrivalLabel: 'Arrival:',
      arrivalValue: '5:00 PM',
      parkingLabel: 'Parking:',
      parkingValue: 'Yes'
    },
    nav: {
      products: 'Products',
      pricing: 'Pricing',
      contact: 'Contact',
      demo: 'View Demo',
      logoSubtitle: 'Technology tailored to you'
    },
    hero: {
      badge: 'Sistemas boutique para negocios boutique',
      title: 'Lleva la gestión de tu hotel',
      titleHighlight: 'al siguiente nivel',
      subtitle: 'La excelencia en la hospitalidad empieza desde adentro. Centraliza reservas, operaciones, administración y finanzas en una herramienta diseñada para darte tranquilidad.',
      ctaPrimary: 'Explorar plataforma',
      ctaSecondary: 'Agendar entrevista'
    },
    locations: {
      noga: 'Zipolite, Mexico',
      galloAzul: 'Todos Santos, Mexico',
      laMora: 'San Agustinillo, Mexico',
      jc: 'Santiago, Chile'
    },
        heroBadges: {
      badge1Top: 'MANAGEMENT',
      badge1Bottom: 'Zero stress',
      badge2Top: 'RESULT',
      badge2Bottom: '+ Service quality',
      badge3Top: 'EFFICIENCY',
      badge3Bottom: '+ Free time'
    },

    systemDemo: {
      mockApp: {
        sidebar: { dashboard: 'General Dashboard', bookingEngine: 'Booking Engine & Channel Manager', payments: 'Payments & Billing', checkin: 'Check-in & Guest Management', restaurant: 'Restaurant / Bar', operations: 'Operations & Tasks', finance: 'Admin & Finance', chatbot: 'AI Chatbot', reports: 'Reports', demoVersion: 'Demo Version' },
        header: { title1: 'Reservation', title2: 'Management', search: 'Search guest...', rooms: 'ROOMS', channels: 'CHANNELS', newRes1: 'NEW', newRes2: 'BOOKING' },
        toolbar: { calendar: 'Booking Calendar', reservations: 'Bookings', rates: 'Rates', august: 'August', today: 'TODAY' },
        grid: { room: 'ROOM', days: ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'], rooms: ['Deluxe Suite with Terrace', 'Luxury Suite with Garden', 'Deluxe Room 301'] },
        channels: { title: 'Connected Channels', synced: 'Synced', active: 'Active', directWeb: 'Direct Web', directSale: 'Direct Sale' }
      },
      title: 'Boutique systems for boutique businesses',
      btn: 'Explore demo'
    },
    socialProof: 'Businesses that already trust Vistomio',
    boutiqueNiche: {
      tag: 'YOUNG, BOLD AND PRAGMATIC',
      title: 'Technology for places with a soul',
      subtitle: 'We are not a boring, gray corporate software. We build vibrant and pragmatic technology for boutique hotels and restaurants that want to automate and optimize their operations to dedicate <span class="text-[#A37A3B] font-bold">time to what matters: providing exceptional service.</span>',
      cards: [
        {
          title: 'Personalized Experience',
          desc: 'With our <span class="text-[#A37A3B] font-bold">digital check-in module</span>, anticipate your guest\'s desires. Detailed profiles and integrated preferences.',
          icon: ConciergeBell
        },
        {
          title: 'Hotel & Restaurant Fusion',
          desc: 'The <span class="text-[#A37A3B] font-bold">Vistomio Restaurant POS</span> talks directly with the hotel systems. Seamless communication, zero mistakes.',
          icon: Wine
        },
        {
          title: 'Smart Recommendations',
          desc: 'A specialized AI analyzes your operation data to suggest <span class="text-[#A37A3B] font-bold">dynamic pricing, targeted campaigns, and cross-selling.</span>',
          icon: Sparkles
        }
      ]
    },
    featuresTitle: '',
    featuresSubtitle: 'Interconnected and modular ecosystem, use only what you need',
    standaloneBadge1: 'Available as',
    standaloneBadge2: 'standalone app',
    seeHowItWorks: 'See how it works',
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
            desc: 'Track inventory, cleaning, and maintenance directly on your staff\'s mobile device.',
            icon: ClipboardCheck,
            standalone: true,
            demoId: 'demo-staff'
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
            title: 'POS App (Point of Sale)',
            desc: 'Synchronize restaurant and bar directly to the guest room frictionlessly.',
            icon: Utensils,
            standalone: true,
            demoId: 'demo-pos'
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
            title: 'AI Chatbot (Level 1)',
            desc: 'Automated responses to FAQs and link sharing.',
            icon: Bot,
            standalone: true
          },
          {
            title: 'AI Chatbot (Level 2)',
            desc: 'Proactive sales, marketing campaigns, and special offers.',
            icon: Bot,
            standalone: true
          },
          {
            title: 'AI Chatbot (Level 3)',
            desc: 'Total autonomy with Booking Engine synchronization for reservations.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Optimizing your management is easier than ever',
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
      title: 'Multichannel AI Chatbot',
      subtitle: 'Integrate our intelligent agent into your website or channels. Available as a standalone product or bundled with Vistomio packages.',
      talkBtn: 'Let\'s Talk',
      plans: [
        {
          name: 'Level 1: Automated Responses',
          features: [
            'Multi-channel connection',
            'FAQ responses only',
            'Sending links, etc.',
            'Can only reply (no proactive messages)'
          ]
        },
        {
          name: 'Level 2: Proactive Sales',
          features: [
            'Standard features + proactive conversation initiation',
            'Automated marketing campaigns',
            'Special offers',
            'Pre-arrival check-in cards, welcomes, etc.'
          ]
        },
        {
          name: 'Level 3: Full Autonomy',
          features: [
            'All the above + proactive sales agent',
            'Synchronization with Booking Engine to execute reservations',
            'Change dates',
            'Extend stays, etc.'
          ]
        }
      ]
    },
    posDemo: {
      sectionTitle: 'Discover POS Vistomio for signature restaurants and bars',
      sectionDesc: 'Experience total control from the palm of your hand. Navigate our interactive Point of Sale simulator.',
      features: [
        { title: 'Smooth Operation', desc: 'Manage dining rooms and bars with color-coded table statuses.' },
        { title: 'Financial Control', desc: 'Record expenses instantly and keep petty cash updated.' }
      ],
      tabs: { tables: 'TABLES', orders: 'ORDERS', expenses: 'EXPENSES', admin: 'ADMIN' },
      tables: { free: 'FREE', occupied: 'OCCUPIED', ready: 'READY', room: 'DINING ROOM', bar: 'BAR', daypass: 'DAYPASS (CONSUMPTION)', openTab: '+ Open Tab', credit: 'Credit:' },
      orders: { recent: 'Recent Orders', today: 'Today', open: 'OPEN', closed: 'CLOSED', table: 'Table', bar: 'Bar', daypass: 'Daypass' },
      expenses: { pettyCash: 'Petty Cash', date: 'Monday, August 10', auth: 'AUTH: ADMINISTRATOR', inProgress: 'IN PROGRESS', initial: 'INITIAL', current: 'CURRENT', todayExpenses: "TODAY'S EXPENSES", addExpense: 'Add Expense', items: [ { name: 'Fresh vegetables and ice', category: 'KITCHEN SUPPLIES' }, { name: 'Ice and lemons', category: 'BAR SUPPLIES' }, { name: 'Gasoline', category: 'LOGISTICS' } ] },
      admin: { dashboard: 'Dashboard', activeShift: 'ACTIVE SHIFT', shift: 'SHIFT: ADMINISTRATOR', totalSales: 'TOTAL SALES', totalExpenses: 'EXPENSES (3)', tips: 'ACCUMULATED TIPS', management: 'MANAGEMENT', menuEditor: 'Menu Editor', menuEditorDesc: 'Dishes, prices and availability', closeShift: 'Close Shift', closeShiftDesc: 'End shift and reconcile' },
      tableInteraction: {
        serving: 'SERVING',
        toCharge: 'TO CHARGE',
        currentBill: 'CURRENT BILL',
        total: 'Total',
        chargeBtn: 'Charge',
        freeTableBtn: 'Free Table',
        payment: 'Payment',
        card: 'Card',
        cash: 'Cash',
        tip: 'Tip',
        noTip: 'None',
        confirmBtn: 'Confirm',
        categories: { meats: 'Meats', wines: 'Wines', salads: 'Salads', sides: 'Sides' },
        items: {
          ribeye: { name: 'Prime Ribeye (400g)', price: 850 },
          picana: { name: 'Picanha (300g)', price: 650 },
          malbec: { name: 'Malbec Reserve 2020', price: 950 },
          chardonnay: { name: 'Chardonnay', price: 780 }
        }
      },
      expenseModal: {
        title: 'New Expense',
        desc: 'Payment to providers and supplies.',
        amount: 'AMOUNT',
        category: 'CATEGORY',
        description: 'DESCRIPTION',
        saveBtn: 'Save Expense',
        descPlaceholder: 'Ex: Vegetables, Ice, Detergent'
      },
      menuEditor: {
        title: 'Menu Editor',
        addDish: '+ Add Dish',
        available: 'AVAILABLE',
        lowStock: 'LOW STOCK',
        outOfStock: 'OUT OF STOCK',
        meats: 'Grilled Meats',
        wines: 'Wines'
      },
      closeShiftModal: { title: 'Cash Register Close', subtitle: 'Current shift summary', income: 'DAILY INCOME', cc: 'Credit Card', transfer: 'Transfer', cash: 'Cash', totalIncome: 'Total Income', expenses: 'DAILY EXPENSES', pettyCash: 'Petty Cash', providers: 'Providers', totalExpenses: 'Total Expenses', balance: 'Final Balance', tips: 'Daily Tips', share: 'Share', print: 'Print', confirm: 'Confirm Close', cancel: 'Cancel' }
    },
    contactModal: {
      options: { title: 'Connect with Us', desc: 'Schedule an interview or contact us directly to discover how we can elevate your business.', bookBtn: 'Schedule Free Interview', orContact: 'Or contact us via' },
      email: { title: 'Send Message', desc: 'We will reply shortly.', toLabel: 'To', emailLabel: 'Your Email', emailPlaceholder: 'example@hotel.com', messageLabel: 'Message', messagePlaceholder: 'How can we help you?', sendBtn: 'Send Email', success: 'Message sent successfully.' },
      calendar: { title: 'Schedule your Demo', desc: 'Select an available date and time.', daysLabel: 'Available Days', timesLabel: 'Times', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], successAlert: 'Meeting scheduled for {day} at {time} successfully. You will receive an email with the link shortly.' }
    },
    customPlanModal: {
      title: 'Quote your Plan', desc: 'Leave us your details to send you a customized proposal.', selectedModules: 'Selected Modules', emailLabel: 'Your Email *', emailPlaceholder: 'example@hotel.com', phoneLabel: 'Contact Number *', phonePlaceholder: '+1 234 567 890', companyLabel: 'Company (Optional)', companyPlaceholder: 'Name of your hotel or restaurant', messageLabel: 'Additional Message', messagePlaceholder: 'Tell us a bit more about what you need...', sendBtn: 'Request quote', successAlert: 'Your email client will open with the quote details ready to send.', emailSubject: 'Custom Quote Request - Vistomio', emailBodyTemplate: 'Email: {email}\\nPhone: {phone}\\nCompany: {company}\\n\\nSelected Modules:\\n- {modules}\\n\\nMessage:\\n{message}'
    },
    pricing: {
      title: 'Our plans',
      subtitle: 'Each with a clear promise.',
      buildOwnPackage: 'Build your own package',
      customModalTitle: 'Build Your Vistomio Solution',
      customModalSubtitle: 'Select the modules you need and we will create a tailored plan.',
      selectedModules: 'Selected Modules',
      requestQuoteBtn: 'Request quote for my plan',
      plans: [
        {
          name: 'Essential',
          quote: '"Digitize your management without complications."',
          setupPrice: 'Setup: 400€',
          monthlyPrice: '250€',
          period: '/mo',
          features: [
            { name: 'General Dashboard', desc: 'real-time operation overview' },
            { name: 'Booking Engine & Channel Manager', desc: 'multi-channel calendar or PMS API connection' },
            { name: 'Check-in & Guest Management', desc: 'arrivals, document signing, guest language' }
          ],
          baseText: 'Ideal for replacing homegrown systems or spreadsheets.',
          cta: 'Start',
          highlight: false
        },
        {
          name: 'Growth',
          quote: '"Take financial control at a glance."',
          setupPrice: 'Setup: 500€',
          monthlyPrice: '400€',
          period: '/mo',
          features: [
            { name: 'Everything in Essential', desc: '' },
            { name: 'Payments & Invoicing', desc: 'collections, digital gateways, invoicing' },
            { name: 'Administration & Finance', desc: 'executive summary, profitability by department' }
          ],
          baseText: 'For the owner-manager focused on profitability.',
          cta: 'Start',
          highlight: false
        },
        {
          name: 'Signature',
          quote: '"More time for guests, less paperwork."',
          setupPrice: 'Setup: 700€',
          monthlyPrice: '600€',
          period: '/mo',
          features: [
            { name: 'Everything in Growth', desc: '' },
            { name: 'Restaurant / Bar', desc: 'Integrated POS, sales, bill splitting' },
            { name: 'Daily Operations & Resources', desc: 'inventory, staff and stock alerts' },
            { name: 'Reporting', desc: 'custom tailored reports' }
          ],
          baseText: 'Seamless comprehensive management for boutique hotels.',
          cta: 'Start',
          highlight: false
        }
      ],
      addon: {
        name: 'Transversal Add-on — AI Chatbot',
        quote: '"Always-on service, matching your reputation."',
        features: [
          'Multi-channel assistant (WhatsApp, Instagram, Messenger, Web Chat).',
          'Answers availability and rate queries continuously.',
          'Compatible with any plan (sold alone or as an add-on).'
        ],
        baseText: 'The first piece of high-end automated customer service.',
        price: 'From 150€/mo',
        cta: 'View Demo'
      },
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
      dinnerValue: '20h30 - Terrasse',
      langLabel: 'Langues :',
      langValue: 'Français et anglais',
      originLabel: 'Origine :',
      originValue: 'Paris, France',
      arrivalLabel: 'Arrivée :',
      arrivalValue: '17h00',
      parkingLabel: 'Parking :',
      parkingValue: 'Oui'
    },
    nav: {
      products: 'Produits',
      pricing: 'Tarifs',
      contact: 'Contact',
      demo: 'Voir Démo',
      logoSubtitle: 'La technologie sur mesure'
    },
    hero: {
      badge: 'Systèmes sur mesure pour lieux d\'exception',
      title: 'Faites passer la gestion de votre hôtel',
      titleHighlight: 'au niveau supérieur',
      subtitle: 'L\'excellence hôtelière commence de l\'intérieur. Centralisez les réservations, opérations, l\'administration et les finances dans un outil conçu pour vous offrir une tranquillité d\'esprit totale.',
      ctaPrimary: 'Explorer la plateforme',
      ctaSecondary: 'Planifier une entrevue'
    },
    locations: {
      noga: 'Zipolite, Mexique',
      galloAzul: 'Todos Santos, Mexique',
      laMora: 'San Agustinillo, Mexique',
      jc: 'Santiago, Chili'
    },
        heroBadges: {
      badge1Top: 'GESTION',
      badge1Bottom: 'Zéro stress',
      badge2Top: 'RÉSULTAT',
      badge2Bottom: '+ Qualité de service',
      badge3Top: 'EFFICACITÉ',
      badge3Bottom: '+ Temps libre'
    },

    systemDemo: {
      mockApp: {
        sidebar: { dashboard: 'Tableau de Bord', bookingEngine: 'Moteur de Réservation & Channel Manager', payments: 'Paiements & Facturation', checkin: 'Check-in & Gestion des Clients', restaurant: 'Restaurant / Bar', operations: 'Opérations & Tâches', finance: 'Admin & Finances', chatbot: 'Chatbot IA', reports: 'Rapports', demoVersion: 'Version Démo' },
        header: { title1: 'Gestion des', title2: 'Réservations', search: 'Chercher client...', rooms: 'CHAMBRES', channels: 'CANAUX', newRes1: 'NOUVELLE', newRes2: 'RÉSERV.' },
        toolbar: { calendar: 'Calendrier', reservations: 'Réservations', rates: 'Tarifs', august: 'Août', today: 'AUJ.' },
        grid: { room: 'CHAMBRE', days: ['MER', 'JEU', 'VEN', 'SAM', 'DIM', 'LUN', 'MAR'], rooms: ['Suite Deluxe Terrasse', 'Suite Deluxe Jardin', 'Chambre Deluxe 301'] },
        channels: { title: 'Canaux Connectés', synced: 'Synchronisé', active: 'Actif', directWeb: 'Web Direct', directSale: 'Vente Directe' }
      },
      title: 'Des systèmes boutique pour des établissements boutique',
      btn: 'Explorer la démo'
    },
    socialProof: 'Les entreprises qui font déjà confiance à Vistomio',
    boutiqueNiche: {
      tag: 'JEUNES, AUDACIEUX ET PRAGMATIQUES',
      title: 'Une technologie pour des lieux qui ont une âme',
      subtitle: 'Nous ne sommes pas un logiciel d\'entreprise ennuyeux et gris. Nous créons une technologie vibrante et pragmatique pour les hôtels et restaurants de charme qui souhaitent automatiser et optimiser leurs opérations pour consacrer du <span class="text-[#A37A3B] font-bold">temps à ce qui compte : offrir un service exceptionnel.</span>',
      cards: [
        {
          title: 'Expérience Personnalisée',
          desc: 'Avec notre <span class="text-[#A37A3B] font-bold">module de check-in numérique</span>, anticipez les désirs de vos clients. Profils détaillés et préférences intégrées.',
          icon: ConciergeBell
        },
        {
          title: 'Fusion Hôtel & Restaurant',
          desc: 'Le <span class="text-[#A37A3B] font-bold">POS Vistomio restaurant</span> communique directement avec les systèmes de l\'hôtel. Communication fluide, zéro erreur.',
          icon: Wine
        },
        {
          title: 'Recommandations Intelligentes',
          desc: 'Une IA spécialisée analyse vos données d\'exploitation pour suggérer <span class="text-[#A37A3B] font-bold">des tarifs dynamiques, des campagnes et des ventes croisées.</span>',
          icon: Sparkles
        }
      ]
    },
    featuresTitle: '',
    featuresSubtitle: 'Écosystème interconnecté et modulaire, utilisez uniquement ce dont vous avez besoin',
    standaloneBadge1: 'Disponible comme',
    standaloneBadge2: 'app autonome',
    seeHowItWorks: 'Voir comment ça marche',
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
            title: 'App POS (Point de Vente)',
            desc: 'Synchronisez le restaurant et le bar directement avec la chambre sans friction.',
            icon: Utensils,
            standalone: true,
            demoId: 'demo-pos'
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
            title: 'Chatbot IA (Niveau 1)',
            desc: 'Réponses automatisées aux FAQ et partage de liens.',
            icon: Bot,
            standalone: true
          },
          {
            title: 'Chatbot IA (Niveau 2)',
            desc: 'Ventes proactives, campagnes marketing et offres spéciales.',
            icon: Bot,
            standalone: true
          },
          {
            title: 'Chatbot IA (Niveau 3)',
            desc: 'Autonomie totale avec synchronisation du Booking Engine pour les réservations.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Optimiser votre gestion est plus facile que jamais',
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
      talkBtn: 'Parlons-en',
      plans: [
        {
          name: 'Niveau 1: Réponses Automatisées',
          features: [
            'Connexion multicanale',
            'Réponses aux FAQ uniquement',
            'Envoi de liens, etc.',
            'Ne peut que répondre (pas de messages proactifs)'
          ]
        },
        {
          name: 'Niveau 2: Ventes Proactives',
          features: [
            'Tout le standard + initiation proactive de conversations',
            'Campagnes marketing automatisées',
            'Offres spéciales',
            'Fiches de check-in anticipées, bienvenues, etc.'
          ]
        },
        {
          name: 'Niveau 3: Autonomie Totale',
          features: [
            'Tout ce qui précède + agent de vente proactif',
            'Synchronisation avec le moteur de réservation',
            'Modifier les dates',
            'Prolonger les séjours, etc.'
          ]
        }
      ]
    },
    posDemo: {
      sectionTitle: "Découvrez POS Vistomio pour les restaurants et bars d'auteur",
      sectionDesc: 'Faites l\'expérience d\'un contrôle total depuis la paume de votre main. Naviguez sur notre simulateur de Point de Venta.',
      features: [
        { title: 'Opération Fluide', desc: 'Gérez les salles et les bars avec des statuts de tables codés par couleur.' },
        { title: 'Contrôle Financier', desc: 'Enregistrez les dépenses instantanément et gardez la petite caisse à jour.' }
      ],
      tabs: { tables: 'TABLES', orders: 'COMMANDES', expenses: 'DÉPENSES', admin: 'ADMIN' },
      tables: { free: 'LIBRE', occupied: 'OCCUPÉ', ready: 'PRÊT', room: 'SALLE', bar: 'BAR', daypass: 'DAYPASS (CONSOMMATION)', openTab: '+ Ouvrir un Compte', credit: 'Crédit:' },
      orders: { recent: 'Commandes Récentes', today: 'Aujourd\'hui', open: 'OUVERT', closed: 'FERMÉ', table: 'Table', bar: 'Bar', daypass: 'Daypass' },
      expenses: { pettyCash: 'Petite Caisse', date: 'Lundi, 10 Août', auth: 'AUTH: ADMINISTRATEUR', inProgress: 'EN COURS', initial: 'INITIAL', current: 'ACTUEL', todayExpenses: "DÉPENSES DU JOUR", addExpense: 'Ajouter Dépense', items: [ { name: 'Légumes frais et glace', category: 'FOURNITURES CUISINE' }, { name: 'Glace et citrons', category: 'FOURNITURES BAR' }, { name: 'Essence', category: 'LOGISTIQUE' } ] },
      admin: { dashboard: 'Tableau de Bord', activeShift: 'SERVICE ACTIF', shift: 'SERVICE: ADMINISTRATEUR', totalSales: 'VENTES TOTALES', totalExpenses: 'DÉPENSES (3)', tips: 'POURBOIRES CUMULÉS', management: 'GESTION', menuEditor: 'Éditeur de Menu', menuEditorDesc: 'Plats, prix et disponibilité', closeShift: 'Fermer la Caisse', closeShiftDesc: 'Terminer le service et faire le bilan' },
      tableInteraction: {
        serving: 'EN SERVICE',
        toCharge: 'À ENCAISSER',
        currentBill: 'ADDITION ACTUELLE',
        total: 'Total',
        chargeBtn: 'Encaisser',
        freeTableBtn: 'Libérer Table',
        payment: 'Paiement',
        card: 'Carte',
        cash: 'Espèces',
        tip: 'Pourboire',
        noTip: 'Non',
        confirmBtn: 'Confirmer',
        categories: { meats: 'Viandes', wines: 'Vins', salads: 'Salades', sides: 'Accompagn.' },
        items: {
          ribeye: { name: 'Ribeye Prime (400g)', price: 850 },
          picana: { name: 'Picaña (300g)', price: 650 },
          malbec: { name: 'Malbec Reserva 2020', price: 950 },
          chardonnay: { name: 'Chardonnay', price: 780 }
        }
      },
      expenseModal: {
        title: 'Nouvelle Dépense',
        desc: 'Paiement aux fournisseurs et fournitures.',
        amount: 'MONTANT',
        category: 'CATÉGORIE',
        description: 'DESCRIPTION',
        saveBtn: 'Enregistrer',
        descPlaceholder: 'Ex: Légumes, Glace, Détergent'
      },
      menuEditor: {
        title: 'Éditeur de Menu',
        addDish: '+ Ajouter Plat',
        available: 'DISPONIBLE',
        lowStock: 'PEU D\'UNITÉS',
        outOfStock: 'ÉPUISÉ',
        meats: 'Viandes Grillées',
        wines: 'Vins'
      },
      closeShiftModal: { title: 'Fermeture de Caisse', subtitle: 'Résumé du service actuel', income: 'REVENUS DU JOUR', cc: 'Carte de crédit', transfer: 'Virement', cash: 'Espèces', totalIncome: 'Revenus Totaux', expenses: 'DÉPENSES DU JOUR', pettyCash: 'Petite Caisse', providers: 'Fournisseurs', totalExpenses: 'Dépenses Totales', balance: 'Solde Final', tips: 'Pourboires du jour', share: 'Partager', print: 'Imprimer', confirm: 'Confirmer la Fermeture', cancel: 'Annuler' }
    },
    contactModal: {
      options: { title: 'Connectez-vous avec nous', desc: 'Planifiez un entretien ou contactez-nous directement pour découvrir comment nous pouvons élever votre entreprise.', bookBtn: 'Planifier un Entretien Gratuit', orContact: 'Ou contactez-nous via' },
      email: { title: 'Envoyer un Message', desc: 'Nous vous répondrons sous peu.', toLabel: 'À', emailLabel: 'Votre Email', emailPlaceholder: 'exemple@hotel.com', messageLabel: 'Message', messagePlaceholder: 'Comment pouvons-nous vous aider ?', sendBtn: 'Envoyer', success: 'Message envoyé avec succès.' },
      calendar: { title: 'Planifiez votre Démo', desc: 'Sélectionnez une date et une heure disponibles.', daysLabel: 'Jours Disponibles', timesLabel: 'Horaires', days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'], successAlert: 'Réunion prévue pour {day} à {time} avec succès. Vous recevrez un e-mail avec le lien sous peu.' }
    },
    customPlanModal: {
      title: 'Demandez un Devis', desc: 'Laissez-nous vos coordonnées pour recevoir une proposition sur mesure.', selectedModules: 'Modules Sélectionnés', emailLabel: 'Votre Email *', emailPlaceholder: 'exemple@hotel.com', phoneLabel: 'Numéro de Contact *', phonePlaceholder: '+1 234 567 890', companyLabel: 'Entreprise (Optionnel)', companyPlaceholder: 'Nom de votre hôtel ou restaurant', messageLabel: 'Message Supplémentaire', messagePlaceholder: 'Dites-nous en plus sur vos besoins...', sendBtn: 'Demander un devis', successAlert: 'Votre client de messagerie va s\'ouvrir avec les détails du devis prêts à être envoyés.', emailSubject: 'Demande de Devis sur Mesure - Vistomio', emailBodyTemplate: 'Email: {email}\\nTéléphone: {phone}\\nEntreprise: {company}\\n\\nModules Sélectionnés:\\n- {modules}\\n\\nMessage:\\n{message}'
    },
    pricing: {
      title: 'Nos forfaits',
      subtitle: 'Chacun avec une promesse claire.',
      buildOwnPackage: 'Créez votre forfait',
      customModalTitle: 'Construisez votre Solution Vistomio',
      customModalSubtitle: 'Sélectionnez les modules dont vous avez besoin et nous créerons un plan sur mesure.',
      selectedModules: 'Modules Sélectionnés',
      requestQuoteBtn: 'Demander un devis pour mon plan',
      plans: [
        {
          name: 'Essentiel',
          quote: '"Digitalisez votre gestion sans complications."',
          setupPrice: 'Installation: 400€',
          monthlyPrice: '250€',
          period: '/mois',
          features: [
            { name: 'Tableau de bord général', desc: 'aperçu en temps réel de l\'opération' },
            { name: 'Moteur de réservation & Channel Manager', desc: 'calendrier multicanal ou connexion API PMS' },
            { name: 'Check-in et Gestion des hôtes', desc: 'arrivées, signatures, langue de l\'hôte' }
          ],
          baseText: 'Idéal pour remplacer les systèmes maison ou les feuilles de calcul.',
          cta: 'Démarrer',
          highlight: false
        },
        {
          name: 'Croissance',
          quote: '"Prenez le contrôle financier en un coup d\'œil."',
          setupPrice: 'Installation: 500€',
          monthlyPrice: '400€',
          period: '/mois',
          features: [
            { name: 'Tout le plan Essentiel', desc: '' },
            { name: 'Paiements & Facturation', desc: 'encaissements, passerelles numériques, facturation' },
            { name: 'Administration et Finances', desc: 'résumé exécutif, rentabilité par département' }
          ],
          baseText: 'Pour le propriétaire-gérant axé sur la rentabilité.',
          cta: 'Démarrer',
          highlight: false
        },
        {
          name: 'Signature',
          quote: '"Plus de temps pour les clients, moins de paperasse."',
          setupPrice: 'Installation: 700€',
          monthlyPrice: '600€',
          period: '/mois',
          features: [
            { name: 'Tout le plan Croissance', desc: '' },
            { name: 'Restaurant / Bar', desc: 'POS intégré, ventes, partage de notes' },
            { name: 'Opérations quotidiennes', desc: 'inventaire, alertes de personnel et de stock' },
            { name: 'Rapports', desc: 'rapports personnalisés sur mesure' }
          ],
          baseText: 'Gestion complète et fluide pour les hôtels-boutiques.',
          cta: 'Démarrer',
          highlight: false
        }
      ],
      addon: {
        name: 'Add-on Transversal — Chatbot IA',
        quote: '"Un service toujours disponible, à la hauteur de votre réputation."',
        features: [
          'Assistant multicanal (WhatsApp, Instagram, Messenger, Web Chat).',
          'Répond aux demandes de disponibilité et de tarifs en continu.',
          'Compatible avec tout plan (vendu seul ou en complément).'
        ],
        baseText: 'La première pièce du service client automatisé haut de gamme.',
        price: 'Dès 150€/mois',
        cta: 'Voir Démo'
      },
      enterprise: {
        title: 'Besoin de sur-mesure ?',
        desc: 'Nous concevons une architecture logicielles uniques pour les chaînes de boutiques ou les propriétés avec des opérations complexes.',
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
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [demosMenuOpen, setDemosMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalView, setContactModalView] = useState('options');
  const [isCustomPlanModalOpen, setIsCustomPlanModalOpen] = useState(false);
  const [selectedCustomModules, setSelectedCustomModules] = useState<string[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    fetch('https://api.country.is/')
      .then(res => res.json())
      .then(data => {
        const country = data.country;
        if (['FR', 'BE', 'CH', 'LU', 'MC', 'HT', 'SN', 'CI', 'CM'].includes(country)) {
          setLang('fr');
        } else if (['ES', 'MX', 'CL', 'AR', 'CO', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ'].includes(country)) {
          setLang('es');
        } else {
          setLang('en'); // Defaults to English for US, CA, UK, AU and the rest of the world
        }
      })
      .catch(() => {
        // Fallback if API fails
        if (typeof navigator !== 'undefined') {
          const browserLang = navigator.language.toLowerCase();
          if (browserLang.startsWith('fr')) setLang('fr');
          else if (browserLang.startsWith('es')) setLang('es');
          else setLang('en');
        }
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCustomModule = (title: string) => {
    setSelectedCustomModules(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  

  const langMenuRef = useRef<HTMLDivElement>(null);
  const demosMenuRef = useRef<HTMLDivElement>(null);
  const productsMenuRef = useRef<HTMLDivElement>(null);
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
      if (demosMenuRef.current && !demosMenuRef.current.contains(event.target as Node)) {
        setDemosMenuOpen(false);
      }
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target as Node)) {
        setProductsMenuOpen(false);
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
    <div className="min-h-screen bg-boutique-offwhite font-sans text-boutique-navy selection:bg-slate-800 border border-boutique-sand selection:text-white overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-200/50 ${isScrolled ? 'bg-boutique-offwhite/95 backdrop-blur-xl py-4 shadow-xl shadow-gray-200/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo-icon-transparent.png" alt="Vistomio Logo Icon" className="h-12 md:h-14 w-auto object-contain mb-1" />
            <span className="text-boutique-navy font-medium tracking-[0.25em] text-sm md:text-base uppercase">VISTOMIO</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Productos Dropdown */}
            <div 
              className="relative flex items-center h-full py-2" 
              ref={productsMenuRef}
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <button 
                onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                className="flex items-center gap-1 text-sm font-medium text-boutique-navy hover:text-[#FCE69B] transition-colors"
              >
                {t.nav.products}
                <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${productsMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-[100%] left-0 pt-4 w-[650px] transition-all duration-200 origin-top-left ${productsMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}
              >
                <div className="bg-boutique-sand/95 backdrop-blur-xl border border-boutique-sand rounded-2xl shadow-md overflow-hidden p-6 grid grid-cols-2 gap-x-8 gap-y-6">
                  {t.featureCategories.map((category, catIdx) => (
                    <div key={catIdx} className="flex flex-col">
                      <h4 className="text-xs text-boutique-navy/80 uppercase mb-3 font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{category.name}</h4>
                      <div className="flex flex-col gap-1">
                        {category.items.map((item, itemIdx) => {
                          const Icon = item.icon;
                          return (
                            <a 
                              key={itemIdx} 
                              href={(item as any).link || `#category-${catIdx}`}
                              onClick={() => setProductsMenuOpen(false)} 
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex-shrink-0 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B1121] transition-colors mt-0.5">
                                <Icon size={14} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-boutique-navy group-hover:text-white transition-colors leading-tight">{item.title}</span>
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demos Dropdown */}
            <div 
              className="relative flex items-center h-full py-2" 
              ref={demosMenuRef}
              onMouseEnter={() => setDemosMenuOpen(true)}
              onMouseLeave={() => setDemosMenuOpen(false)}
            >
              <button 
                onClick={() => setDemosMenuOpen(!demosMenuOpen)}
                className="flex items-center gap-1 text-sm font-medium text-boutique-navy hover:text-[#FCE69B] transition-colors"
              >
                Demos
                <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${demosMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-[100%] right-0 pt-4 w-80 transition-all duration-200 origin-top-right ${demosMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}
              >
                <div className="bg-boutique-sand/90 backdrop-blur-xl border border-boutique-sand rounded-xl shadow-md overflow-hidden flex flex-col p-2">
                  <a href="https://demo.vistomio.com" target="_blank" rel="noopener noreferrer" onClick={() => setDemosMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm text-boutique-navy hover:text-boutique-navy hover:bg-white/50 rounded-lg transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B1121] transition-colors"><Sparkles size={14} /></div>
                    <span className="font-medium">Demo Suite Vistomio</span>
                  </a>
                  <a href="#demo-chatbot" onClick={() => setDemosMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm text-boutique-navy hover:text-boutique-navy hover:bg-white/50 rounded-lg transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors"><Bot size={14} /></div>
                    <span className="font-medium">Demo Chatbots IA Vistomio</span>
                  </a>
                  <a href="#demo-pos" onClick={() => setDemosMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm text-boutique-navy hover:text-boutique-navy hover:bg-white/50 rounded-lg transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-[#0B1121] transition-colors"><CreditCard size={14} /></div>
                    <span className="font-medium">Demo POS Vistomio para restaurantes</span>
                  </a>
                  <a href="#demo-staff" onClick={() => setDemosMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 text-sm text-boutique-navy hover:text-boutique-navy hover:bg-white/50 rounded-lg transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-indigo-500 group-hover:text-white transition-colors"><Users size={14} /></div>
                    <span className="font-medium">Demo Vistomio Staff App</span>
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#precios" className="text-sm font-medium text-boutique-navy hover:text-[#D4AF37] transition-colors">{t.nav.pricing}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="text-sm font-medium text-boutique-navy hover:text-[#D4AF37] transition-colors">{t.nav.contact}</a>

            {/* Custom Language Selector */}
            <div 
              className="relative border-l border-gray-200 pl-6 h-full flex items-center py-2" 
              ref={langMenuRef}
              onMouseEnter={() => setLangMenuOpen(true)}
              onMouseLeave={() => setLangMenuOpen(false)}
            >
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-boutique-navy hover:text-[#D4AF37] transition-colors group"
              >
                <Globe size={16} className="text-[#D4AF37] group-hover:text-[#FCE69B] transition-colors" />
                <span>{lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Français'}</span>
                <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 pt-4 w-32 transition-all duration-200 origin-top-right ${langMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-xl shadow-lg overflow-hidden p-1 flex flex-col gap-1">
                  {(['es', 'en', 'fr'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${lang === l ? 'bg-amber-50 text-[#D4AF37] font-bold' : 'text-boutique-navy hover:bg-gray-50 hover:text-[#D4AF37]'}`}
                    >
                      {l === 'es' ? 'Español' : l === 'en' ? 'English' : 'Français'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="https://demo.vistomio.com" target="_blank" rel="noopener noreferrer" className="from-[#D4AF37] to-[#FCE69B] hover:from-[#FCE69B] hover:to-[#D4AF37] text-[#0B1121] text-sm font-semibold px-6 py-2.5 rounded-full transition-all flex items-center gap-2">
              {t.nav.demo} <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-boutique-navy hover:text-[#FCE69B]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B1121]/95 backdrop-blur-xl border-b border-black/10 py-6 px-6 flex flex-col gap-6 shadow-md">
            <a href="#productos" className="text-lg font-medium text-boutique-navy" onClick={() => setMobileMenuOpen(false)}>{t.nav.products}</a>
            <a href="#precios" className="text-lg font-medium text-boutique-navy" onClick={() => setMobileMenuOpen(false)}>{t.nav.pricing}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); setMobileMenuOpen(false); }} className="text-lg font-medium text-boutique-navy">{t.nav.contact}</a>
            <div className="h-px bg-black/10 w-full my-2"></div>
            <div className="flex gap-4">
               <button onClick={() => {setLang('es'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg flex-1 ${lang === 'es' ? 'bg-slate-800 border border-slate-700/20 text-[#D4AF37]' : 'text-slate-400'}`}>Español</button>
               <button onClick={() => {setLang('en'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg flex-1 ${lang === 'en' ? 'bg-slate-800 border border-slate-700/20 text-[#D4AF37]' : 'text-slate-400'}`}>English</button>
               <button onClick={() => {setLang('fr'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg flex-1 ${lang === 'fr' ? 'bg-slate-800 border border-slate-700/20 text-[#D4AF37]' : 'text-slate-400'}`}>Français</button>
            </div>
            <a href="https://demo.vistomio.com" target="_blank" rel="noopener noreferrer" className="from-[#D4AF37] to-[#FCE69B] text-[#0B1121] text-center font-semibold px-5 py-4 rounded-xl mt-4">
              {t.nav.demo}
            </a>
          </div>
        )}
      </nav>

            {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-boutique-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] flex flex-col items-start text-left lg:pr-12">

              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-normal text-boutique-navy mb-4 tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
                {t.hero.title}
                <br />
                <span className="text-[#D4AF37] font-serif">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              
              <p className="text-lg text-boutique-navy/80 max-w-lg mb-10 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a 
                  href="https://demo.vistomio.com" target="_blank" rel="noopener noreferrer" 
                  className="w-full sm:w-auto bg-[#C6A15B] hover:bg-[#B5914A] text-boutique-navy font-semibold text-sm px-8 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {t.hero.ctaPrimary} <ArrowRight size={16} />
                </a>
                <a 
                  href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} 
                  className="w-full sm:w-auto bg-transparent border border-gray-300 hover:border-gray-400 text-boutique-navy font-semibold text-sm px-8 py-3.5 rounded-lg transition-colors text-center"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Right Image with Badges */}
            <div className="w-full lg:w-[35%] relative mt-12 lg:mt-0">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-boutique-sand">
                <img 
                  src="/happy_owner_hero.jpg" 
                  alt="Hotel Reception" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
              
              {/* Floating Badges */}
              {/* Gestión: Top Left */}
              <div className="absolute top-12 -left-4 lg:-left-12 bg-white px-5 py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[float_6s_ease-in-out_infinite] scale-[1.05]">
                <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center text-[#D4AF37]">
                  <Sparkles size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">{(t as any).heroBadges?.badge1Top || 'GESTION'}</div>
                  <div className="text-sm font-extrabold text-boutique-navy leading-none">{(t as any).heroBadges?.badge1Bottom || 'Estrés cero'}</div>
                </div>
              </div>

              {/* Resultado: Top Right */}
              <div className="absolute top-8 -right-4 lg:-right-16 bg-white px-5 py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[float_5s_ease-in-out_infinite_1s] scale-[1.05]">
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                  <TrendingUp size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">{(t as any).heroBadges?.badge2Top || 'RÉSULTAT'}</div>
                  <div className="text-sm font-extrabold text-boutique-navy leading-none">{(t as any).heroBadges?.badge2Bottom || '+ Calidad de Service'}</div>
                </div>
              </div>

              {/* Eficiencia: Bottom Right */}
                              <div className="absolute bottom-16 -right-4 lg:-right-12 bg-white px-5 py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[float_7s_ease-in-out_infinite_2s] scale-[1.05]">
                <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center text-[#D4AF37]">
                  <Clock size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">{(t as any).heroBadges?.badge3Top || 'EFFICACITÉ'}</div>
                  <div className="text-sm font-extrabold text-boutique-navy leading-none">{(t as any).heroBadges?.badge3Bottom || '+ Temps Libre'}</div>
                </div>
              </div>

              {/* SVG Arrow connecting Eficiencia to Resultado */}
            </div>
          </div>
        </div>
      </section>

      {/* --- SYSTEM DEMO SECTION --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeader eyebrow={t.systemDemo?.title || 'Sistemas boutique para negocios boutique'} align="center" />
          
          <div className="relative mx-auto max-w-5xl group cursor-pointer">
            {/* Decorative Floating Badges */}
            {/* Top Left: Check-in */}
            <div className="absolute -top-6 -left-4 md:-left-16 bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4 z-20 animate-[float_5s_ease-in-out_infinite] scale-100 md:scale-[1.05]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shrink-0">
                <ConciergeBell size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'CHECK-IN' : lang === 'en' ? 'CHECK-IN' : 'CHECK-IN'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-none">
                  {lang === 'es' ? 'Ingreso huésped Suite 403' : lang === 'en' ? 'Guest check-in Suite 403' : 'Arrivée client Suite 403'}
                </div>
              </div>
            </div>

            {/* Top Right: Restaurant */}
            <div className="absolute top-1/4 -right-4 md:-right-20 bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4 z-20 animate-[float_7s_ease-in-out_infinite_1s] scale-100 md:scale-[1.05] max-w-[200px] md:max-w-[260px]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-50 rounded-full flex items-center justify-center text-[#D4AF37] shrink-0">
                <Wine size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'RESTAURANTE' : lang === 'en' ? 'RESTAURANT' : 'RESTAURANT'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-tight">
                  {lang === 'es' ? 'Nueva solicitud de reserva 20:00 horas 4 personas' : lang === 'en' ? 'New reservation request 8:00 PM 4 people' : 'Nouvelle demande de réservation 20h00 4 personnes'}
                </div>
              </div>
            </div>

            {/* Bottom Left: Maintenance */}
            <div className="absolute bottom-1/4 -left-4 md:-left-20 bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4 z-20 animate-[float_6s_ease-in-out_infinite_1.5s] scale-100 md:scale-[1.05]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 shrink-0">
                <ClipboardCheck size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'MANTENIMIENTO' : lang === 'en' ? 'MAINTENANCE' : 'MAINTENANCE'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-none">
                  {lang === 'es' ? 'Ducha Suite 104 arreglada' : lang === 'en' ? 'Suite 104 shower fixed' : 'Douche Suite 104 réparée'}
                </div>
              </div>
            </div>

            {/* Bottom Right: Payments */}
            <div className="absolute -bottom-6 -right-4 md:-right-16 bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4 z-20 animate-[float_8s_ease-in-out_infinite_0.5s] scale-100 md:scale-[1.05]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shrink-0">
                <CreditCard size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'FINANZAS' : lang === 'en' ? 'FINANCE' : 'FINANCES'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-none">
                  {lang === 'es' ? 'Nuevo pago por reserva' : lang === 'en' ? 'New booking payment' : 'Nouveau paiement de réservation'}
                </div>
              </div>
            </div>
            
            {/* Tablet Frame Container */}
            <div className="relative mx-auto w-full rounded-[1.5rem] md:rounded-[2rem] border-[6px] md:border-[10px] border-gray-900 bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group transition-transform duration-500 hover:-translate-y-2">
              {/* Inner Screen */}
              <div className="relative bg-white overflow-hidden rounded-[1rem] md:rounded-[1.25rem] w-full aspect-[4/3] md:aspect-[16/10] max-h-[700px] min-h-[400px]">
                <div className="w-full h-full pointer-events-none select-none">
                  <MockVistomioApp t={t.systemDemo.mockApp} lang={lang} />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 z-50 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <a 
                    href="https://demo.vistomio.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-boutique-anthracite hover:bg-[#111] text-white font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-xl shadow-2xl transition-transform duration-500 transform translate-y-8 group-hover:translate-y-0 flex items-center gap-3 border border-gray-700"
                  >
                    {t.systemDemo?.btn || 'Explorar demo'}
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* --- SOCIAL PROOF --- */}
      <section className="py-12 border-y border-gray-300 bg-boutique-offwhite relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-boutique-navy/80 uppercase tracking-widest mb-10">
            {t.socialProof}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-24 opacity-100 transition-all duration-500">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-2xl font-semibold text-boutique-navy">
                <span className="w-10 h-10 rounded-xl bg-boutique-sand flex items-center justify-center text-sm border border-boutique-sand shadow-sm text-boutique-navy">HN</span> Noga
              </div>
              <span className="text-xs font-semibold text-boutique-navy/80 uppercase tracking-widest">{t.locations.noga}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-2xl font-semibold text-boutique-navy">
                <GalloAzulLogo className="text-boutique-navy" size={28} /> Gallo Azul
              </div>
              <span className="text-xs font-semibold text-boutique-navy/80 uppercase tracking-widest">{t.locations.galloAzul}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-2xl font-black text-boutique-navy tracking-[0.2em]">
                LA MORA
              </div>
              <span className="text-xs font-semibold text-boutique-navy/80 uppercase tracking-widest">{t.locations.laMora}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-2xl font-semibold text-boutique-navy">
                <span className="border-2 border-[#D4AF37] p-1.5 text-[#D4AF37] text-sm">JC</span> Hoteles
              </div>
              <span className="text-xs font-semibold text-boutique-navy/80 uppercase tracking-widest">{t.locations.jc}</span>
            </div>
          </div>
        </div>
      </section>

            {/* --- BOUTIQUE NICHE SECTION (NEW) --- */}
      <section className="py-24 bg-white border-b border-gray-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2">

              <SectionHeader eyebrow={t.boutiqueNiche.title} align="left" />
              <p 
                className="text-lg text-boutique-navy leading-relaxed mb-8 mt-2"
                dangerouslySetInnerHTML={{ __html: t.boutiqueNiche.subtitle }}
              />
              
              <ul className="space-y-6">
                {t.boutiqueNiche.cards.map((card, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                      <card.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{card.title}</h4>
                      <p className="text-boutique-navy" dangerouslySetInnerHTML={{ __html: card.desc }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
                        <div className="lg:w-1/2 relative w-full h-[500px] md:h-[600px] mt-12 lg:mt-0 rounded-[2rem] shadow-2xl">
               {/* Background Image */}
               <img src="/luxury_suite_interior.jpg" alt="Luxury Suite Interior" className="absolute inset-0 w-full h-full object-cover rounded-[2rem]" />
               
               {/* Card floating over the image - Moved to TOP LEFT to show the bed at the bottom */}
               <div className="absolute -left-4 md:-left-12 top-8 md:top-12 w-[calc(100%+2rem)] md:w-[75%] lg:w-[70%] rounded-[2rem] bg-boutique-navy backdrop-blur-2xl border border-white/10 shadow-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden z-20 ring-1 ring-white/5">
                  
                  {/* Subtle glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <div className="flex justify-between items-center relative z-10">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                      <BedDouble className="text-white" size={20}/>
                    </div>
                    <div className="px-3 py-1.5 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-xs font-semibold border border-[#D4AF37]/30 backdrop-blur-md">
                      {t.suiteMockup.status}
                    </div>
                  </div>
                  
                  <div className="relative z-10 mt-5 md:mt-6">
                    <div className="text-3xl md:text-4xl font-normal text-white mb-3 md:mb-4 tracking-[0.03em] md:tracking-[0.05em]">Suite 402</div>
                    <div className="w-full h-px bg-white/10 mb-3 md:mb-4"></div>
                    <div className="flex justify-between text-white/70 text-sm">
                      <span className="font-medium">{t.suiteMockup.preferences}</span>
                      <span className="font-semibold text-white">{t.suiteMockup.preferencesValue}</span>
                    </div>
                    <div className="flex justify-between text-white/70 mt-2.5 text-sm">
                      <span className="font-medium">{t.suiteMockup.langLabel}</span>
                      <span className="font-semibold text-white">{t.suiteMockup.langValue}</span>
                    </div>
                    <div className="flex justify-between text-white/70 mt-2.5 text-sm">
                      <span className="font-medium">{t.suiteMockup.originLabel}</span>
                      <span className="font-semibold text-white">{t.suiteMockup.originValue}</span>
                    </div>
                    <div className="flex justify-between text-white/70 mt-2.5 text-sm">
                      <span className="font-medium">{t.suiteMockup.arrivalLabel}</span>
                      <span className="font-semibold text-white">{t.suiteMockup.arrivalValue}</span>
                    </div>
                    <div className="flex justify-between text-white/70 mt-2.5 text-sm">
                      <span className="font-medium">{t.suiteMockup.parkingLabel}</span>
                      <span className="font-semibold text-white">{t.suiteMockup.parkingValue}</span>
                    </div>
                    <div className="flex justify-between text-white/70 mt-2.5 text-sm">
                      <span className="font-medium">{t.suiteMockup.dinner}</span>
                      <span className="font-bold text-[#FCE69B]">{t.suiteMockup.dinnerValue}</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

{/* --- BENEFITS --- */}
      <section className="pt-32 pb-16 bg-boutique-offwhite relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <SectionHeader eyebrow={t.benefitsTitle} align="center" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.benefits.map((benefit, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] bg-boutique-sand/60 backdrop-blur-xl border border-boutique-sand hover:border-[#D4AF37]/50 hover:shadow-xl transition-all shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-8 border border-[#D4AF37]/30">
                  <benefit.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-normal text-boutique-navy mb-4 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{benefit.title}</h3>
                <p className="text-boutique-navy leading-relaxed text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="scroll-mt-24 pt-16 pb-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeader eyebrow={lang === 'es' ? 'PRODUCTOS' : lang === 'en' ? 'PRODUCTS' : 'PRODUITS'} title={t.featuresTitle} align="center" />
          </div>

          <div className="flex flex-col gap-16">
            
            {t.featureCategories.map((category, catIdx) => {
              const isChatbotCategory = catIdx === t.featureCategories.length - 1;
              return (
              <div key={catIdx} id={`category-${catIdx}`} className="flex flex-col scroll-mt-32">
                <div className="mb-10 flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex shrink-0 items-center justify-center border border-[#D4AF37]/20 shadow-sm">
                     <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-normal text-boutique-navy font-serif tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
                    {category.name.includes('&') ? (
                      category.name.split('&').map((part: any, i: number, arr: any[]) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="font-sans font-normal text-[0.95em] opacity-90 mx-[1px]">&amp;</span>}
                        </span>
                      ))
                    ) : (
                      category.name
                    )}
                  </h3>
                  <div className="h-[2px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent flex-grow rounded-full ml-4"></div>
                </div>
                
                {!isChatbotCategory ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="bg-boutique-sand/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-boutique-sand hover:border-[#D4AF37]/50 hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden flex flex-col"
                      >
                        
                      <div className="absolute top-0 left-0 w-full h-full from-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B1121] transition-all duration-300 border border-[#D4AF37]/20 group-hover:border-transparent">
                          <feature.icon size={26} strokeWidth={1.5} />
                        </div>
                        {feature.standalone && (
                          <div className="px-3 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#A37A3B] text-[10px] font-bold uppercase tracking-widest ml-2 mt-1 flex flex-col items-center justify-center text-center leading-[1.2] shadow-sm">
                            <span>{t.standaloneBadge1}</span>
                            <span>{t.standaloneBadge2}</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl text-boutique-navy mb-3 relative z-10 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{feature.title}</h4>
                      <p className="text-boutique-navy/80 text-sm leading-relaxed relative z-10 flex-grow font-medium">{feature.desc}</p>
                      
                      {(feature as any).demoId && (
                        <div className="mt-6 relative z-10">
                          <a href={`#${(feature as any).demoId}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] hover:text-[#B5914A] transition-colors group/btn uppercase tracking-widest">
                            {t.seeHowItWorks} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      )}
                    
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <h4 className="text-3xl font-serif font-normal text-boutique-navy tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.chatbotPlans.title}</h4>
                      <div className="inline-flex">
                        <div className="px-3 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl text-[#A37A3B] text-[10px] font-bold uppercase tracking-widest shadow-sm">
                          {t.standaloneBadge1} {t.standaloneBadge2}
                        </div>
                      </div>
                    </div>
                    <p className="text-boutique-navy/80 text-lg mb-6 max-w-4xl leading-relaxed font-medium">
                      {t.chatbotPlans.subtitle}
                    </p>
                    
                    <div className="mb-12">
                      <a href="#demo-chatbot" className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] hover:text-[#B5914A] transition-colors group/btn uppercase tracking-widest">
                        {t.seeHowItWorks} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                      {/* Standard Plan */}
                      <div className="bg-boutique-offwhite border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors"></div>
                        <div className="flex items-center gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-boutique-offwhite flex items-center justify-center border border-gray-100 text-boutique-navy shadow-sm">
                            <MessageSquareText size={24} />
                          </div>
                          <h3 className="text-xl font-normal text-boutique-navy font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.chatbotPlans.plans[0].name}</h3>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <ul className="flex flex-col gap-4 flex-grow">
                          {t.chatbotPlans.plans[0].features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3">
                              <div className="mt-0.5 min-w-[18px] text-[#D4AF37]"> <CheckCircle2 size={18} /> </div>
                              <span className="text-boutique-navy/90 text-sm font-medium leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Premium Plan */}
                      <div className="bg-boutique-offwhite border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors"></div>
                        <div className="flex items-center gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-boutique-offwhite flex items-center justify-center border border-gray-100 text-boutique-navy shadow-sm">
                            <Zap size={24} />
                          </div>
                          <h3 className="text-xl font-normal text-boutique-navy font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.chatbotPlans.plans[1].name}</h3>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <ul className="flex flex-col gap-4 flex-grow">
                          {t.chatbotPlans.plans[1].features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3">
                              <div className="mt-0.5 min-w-[18px] text-[#D4AF37]"> <CheckCircle2 size={18} /> </div>
                              <span className="text-boutique-navy/90 text-sm font-medium leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Autonomous Plan */}
                      <div className="bg-boutique-offwhite border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors"></div>
                        <div className="flex items-center gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-boutique-offwhite flex items-center justify-center border border-gray-100 text-boutique-navy shadow-sm">
                            <Bot size={24} />
                          </div>
                          <h3 className="text-xl font-normal text-boutique-navy font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.chatbotPlans.plans[2].name}</h3>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <ul className="flex flex-col gap-4 flex-grow">
                          {t.chatbotPlans.plans[2].features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3">
                              <div className="mt-0.5 min-w-[18px] text-[#D4AF37]"> <CheckCircle2 size={18} /> </div>
                              <span className="text-boutique-navy/90 text-sm font-medium leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )})}

          </div>
        </div>
      </section>

      {/* CHATBOT SIMULATOR SECTION */}
      <section id="demo-chatbot" className="py-24 relative bg-boutique-offwhite border-t border-gray-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ChatbotSimulator currentLanguage={lang} />
        </div>
      </section>

      {/* POS SIMULATOR SECTION */}
      <section id="demo-pos" className="py-24 relative bg-boutique-offwhite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-boutique-gold/10 border border-boutique-gold/30 rounded-full text-boutique-gold text-sm font-semibold uppercase tracking-wider mb-6">
                Mini demo
              </div>
              <h2 className="text-4xl md:text-5xl font-normal text-boutique-navy mb-6 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">
                {t.posDemo.sectionTitle}
              </h2>
              <p className="text-xl text-boutique-navy/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                {t.posDemo.sectionDesc}
              </p>
              
              <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-boutique-sand flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.posDemo.features[0].title}</h4>
                    <p className="text-boutique-navy/80 text-sm">{t.posDemo.features[0].desc}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-boutique-sand flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Wallet size={24} />
                  </div>
                  <div>
                    <h4 className="text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.posDemo.features[1].title}</h4>
                    <p className="text-boutique-navy/80 text-sm">{t.posDemo.features[1].desc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <POSSimulator t={t} />
            </div>
          </div>
        </div>
      </section>

      {/* STAFF APP SIMULATOR SECTION */}
      <section id="demo-staff" className="py-24 relative bg-boutique-offwhite overflow-hidden">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-boutique-gold/10 blur-[0px] hidden rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 w-full max-w-sm lg:max-w-none shrink-0 lg:w-[360px]">
              <StaffAppSimulator currentLanguage={lang} />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-boutique-gold/10 border border-boutique-gold/30 rounded-full text-boutique-gold text-sm font-semibold uppercase tracking-wider mb-6">
                Mini demo
              </div>
              <h2 className="text-4xl md:text-5xl font-normal text-boutique-navy mb-6 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">
                {lang === 'es' ? 'Sincronización total con Vistomio Staff' : lang === 'en' ? 'Total synchronization with Vistomio Staff' : 'Synchronisation totale avec Vistomio Staff'}
              </h2>
              <p className="text-xl text-boutique-navy/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                {lang === 'es' 
                  ? 'Conecta las operaciones diarias de tu personal con el panel de control general en una colaboración virtuosa. Actualiza en tiempo real hallazgos, consumos, alertas y solicitudes sin fricciones.'
                  : lang === 'en'
                  ? 'Connect your staff\'s daily operations with the general control panel in a virtuous collaboration. Update findings, consumption, alerts, and requests in real-time without friction.'
                  : 'Connectez les opérations quotidiennes de votre personnel au panneau de contrôle général dans une collaboration vertueuse. Mettez à jour les constats, consommations, alertes et demandes en temps réel sans friction.'}
              </p>
              
              <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-boutique-sand flex items-center justify-center text-boutique-gold flex-shrink-0">
                    <ClipboardCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
                      {lang === 'es' ? 'Cero papel' : lang === 'en' ? 'Paperless' : 'Zéro papier'}
                    </h4>
                    <p className="text-boutique-navy/80 text-sm">
                      {lang === 'es' ? 'Digitaliza checklists, asignaciones y solicitudes de mantenimiento al instante.' : lang === 'en' ? 'Digitize checklists, assignments, and maintenance requests instantly.' : 'Numérisez les checklists, les assignations et les demandes de maintenance instantanément.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-boutique-sand flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
                      {lang === 'es' ? 'Comunicación en tiempo real' : lang === 'en' ? 'Real-time communication' : 'Communication en temps réel'}
                    </h4>
                    <p className="text-boutique-navy/80 text-sm">
                       {lang === 'es' ? 'Recepcionistas, mucamas y mantenimiento conectados bajo la misma fuente de verdad.' : lang === 'en' ? 'Receptionists, housekeepers, and maintenance connected under the same source of truth.' : 'Réceptionnistes, femmes de chambre et maintenance connectés sous la même source de vérité.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* --- FEATURES / MODULES --- */}



      




      {/* --- PRICING --- */}
      
      {/* POS SIMULATOR SECTION */}




      <section id="precios" className="scroll-mt-24 py-32 relative bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold tracking-[0.25em] text-sm md:text-base uppercase">
                {lang === 'es' ? 'PRECIOS Y PLANES' : lang === 'en' ? 'PRICING & PLANS' : 'PRIX ET FORFAITS'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {t.pricing.plans.map((plan: any, idx: number) => (
              <div key={idx} className={`rounded-[2.5rem] p-8 lg:p-10 bg-boutique-navy border ${plan.highlight ? 'border-[#D4AF37] shadow-2xl  lg:scale-105 z-10 relative' : 'border-gray-800 hover:border-[#D4AF37]/50 shadow-lg relative'} overflow-hidden transition-all duration-300 flex flex-col`}>
                
                <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-[#D4AF37]' : 'text-white'} mb-3 pr-2`}>{plan.name}</h3>
                

                <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest mb-6 border border-[#D4AF37]/30 bg-[#D4AF37]/10 inline-block px-4 py-1.5 rounded-full self-start">
                  {plan.setupPrice}
                </div>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <div className={`text-5xl font-extrabold ${plan.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCE69B]' : 'text-white'}`}>
                    {plan.monthlyPrice}
                  </div>
                  <span className="text-gray-400 font-medium">{plan.period}</span>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat: any, i: number) => (
                    <div key={i} className="flex items-start gap-4 text-gray-300">
                      <CheckCircle2 className={`${plan.highlight ? 'text-[#D4AF37]' : 'text-gray-500'} shrink-0 mt-1`} size={20} />
                      <div className="flex flex-col">
                        <span className="text-base font-medium leading-snug text-white">{feat.name}</span>
                        {feat.desc && <span className="text-sm text-gray-400 mt-1 leading-snug">{feat.desc}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-gray-400 mb-8 border-t border-gray-800 pt-6">
                  {plan.baseText}
                </p>

                <button onClick={() => setIsContactModalOpen(true)} className={`w-full py-4 rounded-2xl font-semibold text-lg transition-colors ${plan.highlight ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38822] hover:from-[#FCE69B] hover:to-[#D4AF37] text-boutique-navy shadow-lg ' : 'bg-boutique-sand hover:bg-white text-boutique-navy shadow-sm'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Chatbot Add-on Banner */}
          <div className="max-w-6xl mx-auto mb-16 bg-gradient-to-br from-boutique-sand/20 to-transparent border border-[#D4AF37]/20 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 relative overflow-hidden items-stretch">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 blur-[0px] hidden rounded-full pointer-events-none"></div>
            
            <div className="flex-1 relative z-10">
              <div className="inline-block px-3 py-1 bg-boutique-navy text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                ADD-ON
              </div>
              <h3 className="text-2xl md:text-3xl font-normal text-boutique-navy mb-3 font-serif tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
                {t.pricing.addon.name}
              </h3>

              
              <ul className="space-y-3 mb-6">
                {t.pricing.addon.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start text-boutique-navy/90">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-gray-500 border-t border-[#D4AF37]/20 pt-4">
                {t.pricing.addon.baseText}
              </p>
            </div>
            
            <div className="md:w-72 shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center relative z-10">
              <div className="text-3xl md:text-4xl font-extrabold text-boutique-navy">
                {t.pricing.addon.price}
              </div>
            </div>
          </div>


          {/* Enterprise Section */}
          <div className="max-w-6xl mx-auto bg-boutique-navy rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border border-[#D4AF37]/20">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[0px] hidden rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-boutique-sand/10 blur-[60px] rounded-full pointer-events-none"></div>
             
             <div className="relative z-10 md:w-2/3">
                <h3 className="text-3xl md:text-4xl font-normal text-[#D4AF37] mb-4 font-serif tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.pricing.enterprise.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light">{t.pricing.enterprise.desc}</p>
             </div>
             <div className="relative z-10 md:w-1/3 flex justify-end w-full">
                <button onClick={() => setIsContactModalOpen(true)} className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B38822] hover:from-[#FCE69B] hover:to-[#D4AF37] text-boutique-navy font-semibold text-lg rounded-2xl transition-colors shadow-lg">
                  {t.pricing.enterprise.cta}
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 md:py-32 relative bg-boutique-navy overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-boutique-gold/10 blur-[0px] hidden rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-boutique-sand/10 blur-[0px] hidden rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.25em] text-sm md:text-base uppercase">VISTOMIO</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-normal mb-8 tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
            {t.ctaFinal.title}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            {t.ctaFinal.subtitle}
          </p>
          
          <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="inline-flex items-center gap-2 bg-[#D4AF37] text-white font-semibold text-lg md:text-xl px-10 py-5 rounded-full hover:bg-[#b5932d] transition-all hover:-translate-y-1">
            {t.ctaFinal.button}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-white text-boutique-navy/80 py-16 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo-icon-transparent.png" alt="Vistomio Logo Icon" className="h-12 md:h-14 w-auto object-contain mb-1" />
            <span className="text-boutique-navy font-medium tracking-[0.25em] text-sm md:text-base uppercase">VISTOMIO</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium">
            <a href="#" className="hover:text-boutique-navy transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-boutique-navy transition-colors">{t.footer.privacy}</a>
            <a href="mailto:hola@vistomio.com" className="hover:text-boutique-navy transition-colors">{t.footer.contact}</a>
          </div>

          <div className="text-sm text-gray-500">
            {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Scroll to Top FAB */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 bg-slate-900 text-white p-4 rounded-full shadow-xl shadow-slate-900/30 transition-all duration-300 active:scale-95 group flex items-center justify-center ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Volver arriba"
        title="Volver arriba"
      >
        <span className="font-semibold text-sm ml-1 mr-2 w-0 overflow-hidden group-hover:w-auto opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap inline-block">Volver arriba</span>
        <ArrowUp size={20} />
      </button>

      {/* Contact Modal */}
      
      {/* Custom Plan Modal */}
      {isCustomPlanModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-boutique-offwhite border border-gray-300 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden shadow-md">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-300 flex justify-between items-center bg-boutique-offwhite/50 sticky top-0 z-10">
              <div>
                <h3 className="text-2xl font-normal text-boutique-navy mb-2 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.pricing.customModalTitle}</h3>
                <p className="text-boutique-navy/80">{t.pricing.customModalSubtitle}</p>
              </div>
              <button 
                onClick={() => setIsCustomPlanModalOpen(false)}
                className="p-2 text-boutique-navy/80 hover:text-boutique-navy bg-boutique-sand/50 hover:bg-boutique-sand rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
              <div className="space-y-10">
                {t.featureCategories.map((category, catIdx) => (
                  <div key={catIdx}>
                    <h4 className="text-lg text-emerald-400 mb-4 flex items-center font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
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
                            className={`p-4 rounded-xl border cursor-pointer transition-all h-full flex flex-col ${
                              isSelected 
                                ? 'bg-emerald-500/10 border-emerald-500/50 ' 
                                : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50'
                            }`}
                          >
                            <div className="flex items-start gap-3 h-full">
                              <div className={`mt-0.5 shrink-0 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                                {isSelected ? <CheckCircle2 size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>}
                              </div>
                              <div className="flex-grow">
                                <h5 className={`font-semibold mb-1 ${isSelected ? 'text-emerald-300' : 'text-white'}`}>{item.title}</h5>
                                <p className="text-xs text-boutique-navy/80 leading-relaxed">{item.desc}</p>
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
            <div className="p-6 md:p-8 border-t border-gray-300 bg-slate-900/80 sticky bottom-0 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-boutique-navy/80 text-sm block mb-1">{t.pricing.selectedModules}:</span>
                <span className="text-2xl font-semibold text-boutique-navy">{selectedCustomModules.length}</span>
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
                  setContactModalView('quote');
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
          <div className="relative bg-boutique-offwhite border border-gray-300 rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-md w-full max-w-xl animate-[translate-y-0_0.3s_ease-out] overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button 
              onClick={() => { setIsContactModalOpen(false); setContactModalView('options'); }}
              className="absolute top-6 right-6 w-10 h-10 bg-boutique-sand rounded-full flex items-center justify-center text-boutique-navy/80 hover:text-boutique-navy transition-colors z-10"
            >
              <X size={20} />
            </button>

            {contactModalView === 'options' ? (
              <div className="animate-[fade-in_0.3s_ease-out]">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 from-[#D4AF37] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Calendar size={32} className="text-boutique-navy" />
                  </div>
                  <h3 className="text-3xl font-normal text-boutique-navy mb-3 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.contactModal.options.title}</h3>
                  <p className="text-boutique-navy/80">{t.contactModal.options.desc}</p>
                </div>

                <div className="space-y-4">
                  <button onClick={() => setContactModalView('calendar')} className="w-full bg-white text-[#0B1121] font-semibold text-lg py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors shadow-sm">
                    <Calendar size={24} />
                    {t.contactModal.options.bookBtn}
                  </button>

                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-4 bg-boutique-offwhite text-sm text-gray-500 font-medium">{t.contactModal.options.orContact}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button onClick={() => setContactModalView('email')} className="bg-boutique-sand hover:bg-white border border-boutique-sand p-4 rounded-2xl flex flex-col items-center gap-3 transition-colors group">
                      <div className="w-12 h-12 bg-boutique-offwhite rounded-xl flex items-center justify-center text-boutique-navy/80 group-hover:text-[#FCE69B] transition-colors">
                        <Mail size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-boutique-navy mb-1">Email</div>
                        <div className="text-xs text-boutique-navy/80">info@vistomio.com</div>
                      </div>
                    </button>
                    
                    <a href="https://wa.me/525540590054" target="_blank" rel="noreferrer" className="bg-boutique-sand hover:bg-white border border-boutique-sand p-4 rounded-2xl flex flex-col items-center gap-3 transition-colors group">
                      <div className="w-12 h-12 bg-boutique-offwhite rounded-xl flex items-center justify-center text-boutique-navy/80 group-hover:text-emerald-400 transition-colors">
                        <MessageSquareText size={24} />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-boutique-navy mb-1">WhatsApp</div>
                        <div className="text-xs text-boutique-navy/80">+52 55 40590054</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            
            ) : contactModalView === 'quote' ? (
              <div className="animate-[fade-in_0.3s_ease-out]">
                <button 
                  onClick={() => {
                    setContactModalView('options');
                    setIsContactModalOpen(false);
                    setIsCustomPlanModalOpen(true);
                  }}
                  className="absolute top-6 left-6 w-10 h-10 bg-boutique-sand rounded-full flex items-center justify-center text-boutique-navy/80 hover:text-boutique-navy transition-colors z-10"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle2 size={32} className="text-boutique-navy" />
                  </div>
                  <h3 className="text-3xl font-normal text-boutique-navy mb-2 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.customPlanModal.title}</h3>
                  <p className="text-boutique-navy/80 text-sm">{t.customPlanModal.desc}</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => { 
                  e.preventDefault(); 
                  const formData = new FormData(e.currentTarget as HTMLFormElement);
                  const email = formData.get('email');
                  const phone = formData.get('phone');
                  const company = formData.get('company');
                  const message = formData.get('message');
                  
                  const subject = t.customPlanModal.emailSubject;
                  const body = t.customPlanModal.emailBodyTemplate
                    .replace('{email}', email as string)
                    .replace('{phone}', phone as string)
                    .replace('{company}', (company as string) || 'No especificada')
                    .replace('{modules}', selectedCustomModules.join('\\n- '))
                    .replace('{message}', message as string);
                  
                  window.location.href = `mailto:info@vistomio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  
                  alert(t.customPlanModal.successAlert); 
                  setIsContactModalOpen(false); 
                  setContactModalView('options'); 
                }}>
                  
                  {selectedCustomModules.length > 0 && (
                    <div className="bg-boutique-offwhite/50 border border-gray-300 p-4 rounded-xl mb-4">
                      <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">{t.customPlanModal.selectedModules}</label>
                      <ul className="text-boutique-navy text-sm list-disc pl-4">
                        {selectedCustomModules.map((mod, i) => (
                          <li key={i}>{mod}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.customPlanModal.emailLabel}</label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        placeholder={t.customPlanModal.emailPlaceholder}
                        className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.customPlanModal.phoneLabel}</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required 
                        placeholder={t.customPlanModal.phonePlaceholder}
                        className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.customPlanModal.companyLabel}</label>
                    <input 
                      type="text" 
                      name="company"
                      placeholder={t.customPlanModal.companyPlaceholder}
                      className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.customPlanModal.messageLabel}</label>
                    <textarea 
                      name="message"
                      rows={3}
                      placeholder={t.customPlanModal.messagePlaceholder}
                      className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm mt-6">
                    <Send size={20} />
                    {t.customPlanModal.sendBtn}
                  </button>
                </form>
              </div>
            ) : contactModalView === 'email' ? (
              <div className="animate-[fade-in_0.3s_ease-out]">
                <button 
                  onClick={() => setContactModalView('options')}
                  className="absolute top-6 left-6 w-10 h-10 bg-boutique-sand rounded-full flex items-center justify-center text-boutique-navy/80 hover:text-boutique-navy transition-colors z-10"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 from-[#D4AF37] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Mail size={32} className="text-boutique-navy" />
                  </div>
                  <h3 className="text-3xl font-normal text-boutique-navy mb-2 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.contactModal.email.title}</h3>
                  <p className="text-boutique-navy/80 text-sm">{t.contactModal.email.desc}</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert(t.contactModal.email.success); setIsContactModalOpen(false); setContactModalView('options'); }}>
                  <div>
                    <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.contactModal.email.toLabel}</label>
                    <input 
                      type="email" 
                      value="info@vistomio.com" 
                      disabled 
                      className="w-full bg-boutique-offwhite/50 border border-gray-300 text-gray-500 rounded-xl px-4 py-3 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.contactModal.email.emailLabel}</label>
                    <input 
                      type="email" 
                      required 
                      placeholder={t.contactModal.email.emailPlaceholder}
                      className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.contactModal.email.messageLabel}</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder={t.contactModal.email.messagePlaceholder}
                      className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full from-[#D4AF37] to-[#FCE69B] text-[#0B1121] hover:brightness-110 shadow-sm border border-[#FCE69B]/50 font-semibold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4">
                    <Send size={20} />
                    {t.contactModal.email.sendBtn}
                  </button>
                </form>
              </div>
            ) : (
              <div className="animate-[fade-in_0.3s_ease-out]">
                <button 
                  onClick={() => setContactModalView('options')}
                  className="absolute top-6 left-6 w-10 h-10 bg-boutique-sand rounded-full flex items-center justify-center text-boutique-navy/80 hover:text-boutique-navy transition-colors z-10"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 from-[#D4AF37] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Calendar size={32} className="text-[#0B1121]" />
                  </div>
                  <h3 className="text-3xl font-normal text-boutique-navy mb-2 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.contactModal.calendar.title}</h3>
                  <p className="text-boutique-navy/80 text-sm">{t.contactModal.calendar.desc}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm text-boutique-navy mb-3 font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.contactModal.calendar.daysLabel}</h4>
                    <div className="flex gap-3 overflow-x-auto custom-scrollbar pb-2">
                      {['Lun 14', 'Mar 15', 'Mié 16', 'Jue 17', 'Vie 18', 'Sáb 19', 'Dom 20'].map((day, i) => (
                        <button key={i} className={`flex-shrink-0 w-20 py-3 rounded-xl border ${i === 2 ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' : 'border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700'} flex flex-col items-center justify-center gap-1 transition-colors`}>
                          <span className="text-xs uppercase">{t.contactModal.calendar.days[i]}</span>
                          <span className="text-lg font-semibold">{`${day.split(' ')[1]}`}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm text-boutique-navy mb-3 font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.contactModal.calendar.timesLabel} ({t.contactModal.calendar.days[2]} 16)</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['09:00', '10:00', '11:30', '14:00', '15:30', '17:00'].map((time, i) => (
                        <button key={i} onClick={() => { alert(t.contactModal.calendar.successAlert.replace('{time}', time).replace('{day}', t.contactModal.calendar.days[2] + ' 16')); setIsContactModalOpen(false); setContactModalView('options'); }} className="py-2.5 rounded-lg border border-boutique-sand bg-boutique-sand text-boutique-navy font-medium hover:border-[#D4AF37]ver:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors flex items-center justify-center gap-2">
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


function SectionHeader({ eyebrow, title, align = 'center' }: { eyebrow?: string, title?: string, align?: 'left' | 'center' }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center flex flex-col items-center' : 'text-left flex flex-col items-start'}`}>
      {eyebrow && (
        <div className={`flex items-center gap-4 ${!title ? 'mb-0' : 'mb-5'} ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          <span className="text-[#D4AF37] font-bold tracking-[0.25em] text-sm md:text-base uppercase">{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif text-[#2C3238] font-normal max-w-4xl mx-auto tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
          {title}
        </h2>
      )}
    </div>
  );
}

export default VistomioLandingPage;
