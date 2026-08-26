import POSSimulator from './POSSimulator';
import ChatbotSimulator from './ChatbotSimulator';
import StaffAppSimulator from './StaffAppSimulator';
import MockVistomioApp from './MockVistomioApp';
import React, { useState, useEffect, useRef } from 'react';
import {  
  Check, 
  CreditCard, 
  Utensils, 
  Smartphone, 
  MessageSquareText,
  ArrowLeft,
  ArrowUp,
  Send,
  Mail, 
  Users,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Zap,
  Globe,
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
  Blocks,
    Languages,
    Cloud
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
      faqs: 'FAQs',
      pricing: 'Precios',
      contact: 'Contacto',
      demo: 'Ver Demo',
      logoSubtitle: 'Tecnología a tu medida'
    },
    hero: {
      badge: 'Sistemas boutique para negocios boutique',
      title: 'Su hotel es único, gestiónalo de manera única',
      titleHighlight: '',
      subtitle: 'Si usted no acepta concesiones en el servicio que ofrece a sus huéspedes, su sistema de gestión tampoco debería hacerlo.',
      ctaPrimary: 'Explora la app de Vistomio',
      ctaSecondary: 'Solicita un diagnóstico gratuito'
    },
    locations: {
      noga: 'Zipolite, México',
      galloAzul: 'Todos Santos, México',
      laMora: 'San Agustinillo, México',
      jc: 'Santiago, Chile'
    },
    heroBadges: {

      badge1Top: 'ADMINISTRACIÓN',
        badge1Bottom: 'Automatizada',
        badge2Top: 'OPERACIÓN',
        badge2Bottom: 'Optimizada',
        badge3Top: 'MÁS TIEMPO',
        badge3Bottom: 'Para lo importante'

    },

    systemDemo: {
      mockApp: {
        sidebar: { dashboard: 'Dashboard General', bookingEngine: 'Motor de Reservas y Channel Manager', payments: 'Pagos y Facturación', checkin: 'Check-in y Gestión de Huéspedes', restaurant: 'Restaurante / Bar', operations: 'Operaciones y Tareas', finance: 'Administración y Finanzas', chatbot: 'Chatbot IA', reports: 'Reportes', demoVersion: 'Versión Demo' },
        header: { title1: 'Gestión de', title2: 'Reservas', search: 'Buscar huésped...', rooms: 'HABITACIONES', channels: 'CANALES', newRes1: 'NUEVA', newRes2: 'RESERVA' },
        toolbar: { calendar: 'Calendario de Reservas', reservations: 'Reservas', rates: 'Tarifas', august: 'Agosto', today: 'HOY' },
        grid: { room: 'HABITACIÓN', days: ['MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM', 'LUN', 'MAR'], rooms: ['Suite Deluxe con Terraza', 'Suite de lujo con jardín', 'Habitación Deluxe 301'] },
        channels: { title: 'Channel Manager', synced: 'Sincronizado', active: 'Activo', directWeb: 'Web Directa', directSale: 'Venta Directa' }
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
          desc: 'Su herramienta aprende de sus huéspedes, no al revés. Perfiles detallados, preferencias integradas, anticipación de necesidades desde la llegada.',
          icon: ConciergeBell
        },
        {
          title: 'Fusión Hotel & Restaurante',
          desc: 'Un solo sistema, cero doble registro. El POS del restaurante se comunica de forma nativa con el hotel — como en una verdadera casa, no en dos softwares que no se hablan entre sí.',
          icon: Wine
        },
        {
          title: 'Recomendaciones Inteligentes',
          desc: 'Una IA que conoce su casa, no un algoritmo genérico. Tarifas dinámicas, campañas y ventas cruzadas ajustadas a su realidad, no a la de una cadena.',
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
            desc: 'Sincronización instantánea de disponibilidad y tarifas. Nunca más un overbooking, y recupera el control de tus reservas directas sin depender de las comisiones de las OTA.',
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
            title: 'Chatbots IA',
            desc: 'Respuestas automáticas, ventas proactivas y reservas directas sin intervención humana.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Optimizar tu gestión es más fácil que nunca',
    benefits: [
              {
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
          name: 'Básico',
          features: [
            'Automatización de FAQs',
            'Personalización de tono y personalidad',
            'Disponibilidad 24/7',
            'Soporte de cliente básico',
            'Integración en página web'
          ],
          channels: ['web']
        },
        {
          name: 'Pro',
          features: [
            'Todo lo incluido en básico',
            'Integración omnicanal (4 canales)',
            'Bandeja de entrada centralizada',
            'Envío de documentos, links e imágenes',
            'Soporte de cliente dedicado'
          ],
          channels: ['web', 'facebook', 'instagram', 'whatsapp']
        },
        {
          name: 'Premium',
          features: [
            'Todo lo incluido en Pro',
            'Campañas de marketing automatizadas',
            'Capacidad de generar, editar y cancelar reservas',
            'Peticiones y tickets de huéspedes',
            'Escalamiento a agentes humanos'
          ],
          channels: ['web', 'facebook', 'instagram', 'whatsapp', 'booking', 'ota']
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
            quote: '"Sal del caos de Excel o papel, sin cambiar tu forma de trabajar."',
            setup: '550',
            monthlyPrice: '260',
            annualPrice: '221',
            savings: '468',
            period: '/mes',
            features: [
              { name: 'Dashboard General', desc: 'vista general en tiempo real de la operación' },
              { name: 'Motor de Reservas y Channel Manager', desc: 'calendario de reservas multicanal' },
              { name: 'Check-in y Gestión de Huéspedes', desc: 'llegadas, documentos, idioma' }
            ],
            baseText: 'El punto de entrada natural: reemplaza el sistema casero o la hoja de cálculo. No incluye visibilidad financiera consolidada.',
            cta: 'Comenzar',
            highlight: false
          },
          {
            name: 'Crecimiento',
            quote: '"Toma el control: sabe dónde ganas y dónde pierdes, y haz crecer tu rentabilidad."',
            setup: '750',
            monthlyPrice: '440',
            annualPrice: '374',
            savings: '792',
            period: '/mes',
            features: [
              { name: 'Todo el plan Esencial', desc: '' },
              { name: 'Pagos y Facturación', desc: 'cobros, pasarelas digitales, facturación' },
              { name: 'Administración y Finanzas', desc: 'resumen ejecutivo, rentabilidad' }
            ],
            baseText: 'El plan central: pensado para el propietario-gerente que quiere gestionar activamente su rentabilidad, no solo sus reservas.',
            cta: 'Comenzar',
            highlight: true
          },
          {
            name: 'Signature',
            quote: '"Convierte la excelencia operativa en tu estándar, de la trastienda a la recepción."',
            setup: '1100',
            monthlyPrice: '890',
            annualPrice: '757',
            savings: '1602',
            period: '/mes',
            features: [
              { name: 'Todo el plan Crecimiento', desc: '' },
              { name: 'Restaurante / Bar', desc: 'POS integrado, ventas, división de cuentas' },
              { name: 'Operaciones Diarias y Recursos', desc: 'inventario, alertas de stock' },
              { name: 'Reportes', desc: 'informes personalizados a medida' }
            ],
            baseText: 'La vitrina premium de Vistomio: para el hotel boutique completo que busca una gestión sin fisuras.',
            cta: 'Comenzar',
            highlight: false
          }
        ],
        addon: {
          name: 'Plan Independiente — Mesa',
          quote: '',
          features: [
            'POS Vistomio',
            'Dashboard financiero',
            'Módulo para pagos y Facturación',
            'Seguimiento de inventario'
          ],
          baseText: 'Pensado para negocios de restauración independientes (restaurantes, bares, beach clubs) que buscan la misma exigencia operativa, sin los módulos hoteleros.',
          setup: '400',
          monthlyPrice: '190',
          annualPrice: '162',
          savings: '342',
          period: '/mes',
          cta: 'Ver Demo'
        },
        chatbotTitle: 'Chatbot con Inteligencia Artificial',
        chatbotPlans: [
          {
            name: 'Básico',
            monthlyPrice: '140',
            annualPrice: '119',
            savings: '252',
            period: '/mes',
            features: [
              'Automatización de FAQs',
              'Personalización de tono y personalidad',
              'Disponibilidad 24/7',
              'Soporte de cliente básico',
              'Integración en página web'
            ],
            channels: ['web'],
            setupText: 'Setup (por cada 3 propiedades)',
            setupPrice: '90'
          },
          {
            name: 'Pro',
            monthlyPrice: '210',
            annualPrice: '179',
            savings: '378',
            period: '/mes',
            features: [
              'Todo lo incluido en básico',
              'Integración omnicanal (4 canales)',
              'Bandeja de entrada centralizada',
              'Envío de documentos, links e imágenes',
              'Soporte de cliente dedicado'
            ],
            channels: ['web', 'facebook', 'instagram', 'whatsapp'],
            setupText: 'Setup (por cada 3 propiedades)',
            setupPrice: '390'
          },
          {
            name: 'Premium',
            monthlyPrice: '590',
            annualPrice: '502',
            savings: '1062',
            period: '/mes',
            features: [
              'Todo lo incluido en Pro',
              'Campañas de marketing automatizadas',
              'Capacidad de generar, editar y cancelar reservas',
              'Peticiones y tickets de huéspedes',
              'Escalamiento a agentes humanos'
            ],
            channels: ['web', 'facebook', 'instagram', 'whatsapp', 'booking', 'ota'],
            setupText: 'Setup (por cada 3 propiedades)',
            setupPrice: '590'
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
      faqs: 'FAQs',
      pricing: 'Pricing',
      contact: 'Contact',
      demo: 'View Demo',
      logoSubtitle: 'Technology tailored to you'
    },
    hero: {
        badge: 'Boutique systems for boutique businesses',
        title: 'Your hotel is unique, manage it uniquely',
        titleHighlight: '',
        subtitle: 'If you do not accept concessions in the service you offer your guests, your management system shouldn\'t either.',
        ctaPrimary: 'Explore the Vistomio app',
        ctaSecondary: 'Request a free diagnostic'
      },
    locations: {
      noga: 'Zipolite, Mexico',
      galloAzul: 'Todos Santos, Mexico',
      laMora: 'San Agustinillo, Mexico',
      jc: 'Santiago, Chile'
    },
        heroBadges: {
      badge1Top: 'ADMINISTRATION',
        badge1Bottom: 'Automated',
        badge2Top: 'OPERATION',
        badge2Bottom: 'Optimized',
        badge3Top: 'MORE TIME',
        badge3Bottom: 'For what matters'
    },

    systemDemo: {
      mockApp: {
        sidebar: { dashboard: 'General Dashboard', bookingEngine: 'Booking Engine & Channel Manager', payments: 'Payments & Billing', checkin: 'Check-in & Guest Management', restaurant: 'Restaurant / Bar', operations: 'Operations & Tasks', finance: 'Admin & Finance', chatbot: 'AI Chatbot', reports: 'Reports', demoVersion: 'Demo Version' },
        header: { title1: 'Reservation', title2: 'Management', search: 'Search guest...', rooms: 'ROOMS', channels: 'CHANNELS', newRes1: 'NEW', newRes2: 'BOOKING' },
        toolbar: { calendar: 'Booking Calendar', reservations: 'Bookings', rates: 'Rates', august: 'August', today: 'TODAY' },
        grid: { room: 'ROOM', days: ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'], rooms: ['Deluxe Suite with Terrace', 'Luxury Suite with Garden', 'Deluxe Room 301'] },
        channels: { title: 'Channel Manager', synced: 'Synced', active: 'Active', directWeb: 'Direct Web', directSale: 'Direct Sale' }
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
          desc: 'Your tool learns from your guests, not the other way around. Detailed profiles, integrated preferences, anticipating needs right from arrival.',
          icon: ConciergeBell
        },
        {
          title: 'Hotel & Restaurant Fusion',
          desc: 'A single system, zero double entry. The restaurant POS communicates natively with the hotel — like in a real home, not two softwares that don\'t talk to each other.',
          icon: Wine
        },
        {
          title: 'Smart Recommendations',
          desc: 'An AI that knows your house, not a generic algorithm. Dynamic pricing, campaigns, and cross-selling tailored to your reality, not a chain\'s.',
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
            desc: 'Instant synchronization of availability and rates. Never experience overbooking again, and take back control of your direct bookings without depending on OTA commissions.',
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
            title: 'AI Chatbots',
            desc: 'Automated responses, proactive sales, and direct bookings without human intervention.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Optimizing your management is easier than ever',
    benefits: [
              {
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
      subtitle: 'Automate customer service, increase direct bookings, and offer 24/7 support across all your channels with our AI agents.',
      talkBtn: 'Let\'s Talk',
      plans: [
        {
          name: 'Basic',
          features: [
            'FAQs Automation',
            'Tone and personality customization',
            '24/7 Availability',
            'Basic customer support',
            'Website integration'
          ],
          channels: ['web']
        },
        {
          name: 'Pro',
          features: [
            'Everything in Basic',
            'Omnichannel integration (4 channels)',
            'Centralized inbox',
            'Send documents, links, and images',
            'Dedicated customer support'
          ],
          channels: ['web', 'facebook', 'instagram', 'whatsapp']
        },
        {
          name: 'Premium',
          features: [
            'Everything in Pro',
            'Automated marketing campaigns',
            'Ability to generate, edit, and cancel reservations',
            'Guest requests and tickets',
            'Escalation to human agents'
          ],
          channels: ['web', 'facebook', 'instagram', 'whatsapp', 'booking', 'ota']
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
            quote: '"Escape Excel chaos without changing how you work."',
            setup: '550',
            monthlyPrice: '260',
            annualPrice: '221',
            savings: '468',
            period: '/mo',
            features: [
              { name: 'General Dashboard', desc: 'real-time overview of the operation' },
              { name: 'Booking Engine & Channel Manager', desc: 'multi-channel reservation calendar' },
              { name: 'Check-in & Guest Management', desc: 'arrivals, documents, language' }
            ],
            baseText: 'The natural entry point: replaces homegrown systems or spreadsheets. No consolidated financial visibility.',
            cta: 'Start',
            highlight: false
          },
          {
            name: 'Growth',
            quote: '"Take control: know where you win and lose, and grow your profitability."',
            setup: '750',
            monthlyPrice: '440',
            annualPrice: '374',
            savings: '792',
            period: '/mo',
            features: [
              { name: 'Everything in Essential', desc: '' },
              { name: 'Payments & Invoicing', desc: 'collections, digital gateways, invoicing' },
              { name: 'Administration & Finance', desc: 'executive summary, profitability' }
            ],
            baseText: 'The core plan: for the owner-manager who wants to actively manage profitability, not just reservations.',
            cta: 'Start',
            highlight: true
          },
          {
            name: 'Signature',
            quote: '"Make operational excellence your standard, from back office to front desk."',
            setup: '1100',
            monthlyPrice: '890',
            annualPrice: '757',
            savings: '1602',
            period: '/mo',
            features: [
              { name: 'Everything in Growth', desc: '' },
              { name: 'Restaurant / Bar', desc: 'Integrated POS, sales, bill splitting' },
              { name: 'Daily Operations & Resources', desc: 'inventory, stock alerts' },
              { name: 'Reporting', desc: 'custom tailored reports' }
            ],
            baseText: 'Vistomio\'s premium showcase: for the complete boutique hotel seeking seamless management.',
            cta: 'Start',
            highlight: false
          }
        ],
        addon: {
          name: 'Independent Plan — Table',
          quote: '',
          features: [
            'Vistomio POS',
            'Financial dashboard',
            'Payments & Invoicing module',
            'Inventory tracking'
          ],
          baseText: 'Designed for independent food & beverage businesses (restaurants, bars, beach clubs) seeking the same operational excellence, without hotel modules.',
          setup: '400',
          monthlyPrice: '190',
          annualPrice: '162',
          savings: '342',
          period: '/mo',
          cta: 'View Demo'
        },
        chatbotTitle: 'AI Chatbot Plans',
        chatbotPlans: [
          {
            name: 'Basic',
            monthlyPrice: '140',
            annualPrice: '119',
            savings: '252',
            period: '/mo',
            features: [
              'FAQs Automation',
              'Tone and personality customization',
              '24/7 Availability',
              'Basic customer support',
              'Website integration'
            ],
            channels: ['web'],
            setupText: 'Setup (per 3 properties)',
            setupPrice: '90'
          },
          {
            name: 'Pro',
            monthlyPrice: '210',
            annualPrice: '179',
            savings: '378',
            period: '/mo',
            features: [
              'Everything in Basic',
              'Omnichannel integration (4 channels)',
              'Centralized inbox',
              'Send documents, links, and images',
              'Dedicated customer support'
            ],
            channels: ['web', 'facebook', 'instagram', 'whatsapp'],
            setupText: 'Setup (per 3 properties)',
            setupPrice: '390'
          },
          {
            name: 'Premium',
            monthlyPrice: '590',
            annualPrice: '502',
            savings: '1062',
            period: '/mo',
            features: [
              'Everything in Pro',
              'Automated marketing campaigns',
              'Ability to generate, edit, and cancel reservations',
              'Guest requests and tickets',
              'Escalation to human agents'
            ],
            channels: ['web', 'facebook', 'instagram', 'whatsapp', 'booking', 'ota'],
            setupText: 'Setup (per 3 properties)',
            setupPrice: '590'
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
      faqs: 'FAQ',
      pricing: 'Tarifs',
      contact: 'Contact',
      demo: 'Voir Démo',
      logoSubtitle: 'La technologie sur mesure'
    },
    hero: {
        badge: 'Systèmes sur mesure pour lieux d\'exception',
        title: 'Votre hôtel est unique, gérez-le de façon unique',
          titleHighlight: '',
          subtitle: 'Vous n\'acceptez aucun compromis sur l\'expérience que vous offrez à vos clients. Votre outil de gestion ne devrait pas en accepter non plus.',
        ctaPrimary: 'Explorez l\'app Vistomio',
        ctaSecondary: 'Demandez un diagnostic gratuit'
      },
    locations: {
      noga: 'Zipolite, Mexique',
      galloAzul: 'Todos Santos, Mexique',
      laMora: 'San Agustinillo, Mexique',
      jc: 'Santiago, Chili'
    },
        heroBadges: {
      badge1Top: 'ADMINISTRATION',
        badge1Bottom: 'Automatisée',
        badge2Top: 'OPÉRATION',
        badge2Bottom: 'Optimisée',
        badge3Top: 'PLUS DE TEMPS',
        badge3Bottom: 'Pour l\'essentiel'
    },

    systemDemo: {
      mockApp: {
        sidebar: { dashboard: 'Tableau de Bord', bookingEngine: 'Moteur de Réservation & Channel Manager', payments: 'Paiements & Facturation', checkin: 'Check-in & Gestion des Clients', restaurant: 'Restaurant / Bar', operations: 'Opérations & Tâches', finance: 'Admin & Finances', chatbot: 'Chatbot IA', reports: 'Rapports', demoVersion: 'Version Démo' },
        header: { title1: 'Gestion des', title2: 'Réservations', search: 'Chercher client...', rooms: 'CHAMBRES', channels: 'CANAUX', newRes1: 'NOUVELLE', newRes2: 'RÉSERV.' },
        toolbar: { calendar: 'Calendrier', reservations: 'Réservations', rates: 'Tarifs', august: 'Août', today: 'AUJ.' },
        grid: { room: 'CHAMBRE', days: ['MER', 'JEU', 'VEN', 'SAM', 'DIM', 'LUN', 'MAR'], rooms: ['Suite Deluxe Terrasse', 'Suite Deluxe Jardin', 'Chambre Deluxe 301'] },
        channels: { title: 'Channel Manager', synced: 'Synchronisé', active: 'Actif', directWeb: 'Web Direct', directSale: 'Vente Directe' }
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
          desc: 'Votre outil apprend vos clients, pas l\'inverse. Fiches détaillées, préférences intégrées, anticipation des besoins dès l\'arrivée.',
          icon: ConciergeBell
        },
        {
          title: 'Fusion Hôtel & Restaurant',
          desc: 'Un seul système, zéro double saisie. Le POS restaurant communique nativement avec l\'hôtel — comme dans une vraie maison, pas dans deux logiciels qui ne se parlent pas.',
          icon: Wine
        },
        {
          title: 'Recommandations Intelligentes',
          desc: 'Une IA qui connaît votre maison, pas un algorithme générique. Tarifs dynamiques, campagnes et ventes croisées ajustés à votre réalité, pas à celle d\'une chaîne.',
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
            desc: 'Synchronisation instantanée des disponibilités et tarifs. Fini le surbooking, et reprenez le contrôle sur vos réservations directes, sans dépendre des commissions OTA.',
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
            title: 'Chatbots IA',
            desc: 'Réponses automatisées, ventes proactives et réservations directes sans intervention humaine.',
            icon: Bot,
            standalone: true
          }
        ]
      }
    ],
    benefitsTitle: 'Optimiser votre gestion est plus facile que jamais',
    benefits: [
              {
          title: 'Payez seulement ce que vous utilisez',
          desc: 'Architecture 100% modulaire. Connectez Vistomio à vos systèmes actuels via API ou utilisez la suite.',
          icon: Blocks
        },
        {
          title: 'Vrai Multilingue',
          desc: 'Votre équipe et vos clients méritent de communiquer dans leur langue. Le système s\'adapte.',
          icon: Languages
        },
        {
          title: 'Cloud Haute Performance',
          desc: 'Pas de serveurs locaux, fluidité absolue depuis n\'importe quel appareil, n\'importe où.',
          icon: Cloud
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
      title: 'Chatbot IA Multicanal',
        subtitle: 'Automatisez le service client, augmentez les réservations directes et offrez une assistance 24/7 sur tous vos canaux avec nos agents IA.',
      talkBtn: 'Parlons-en',
      plans: [
        {
          name: 'Basique',
          features: [
            'Automatisation des FAQ',
            'Personnalisation du ton et de la personnalité',
            'Disponibilité 24/7',
            'Support client de base',
            'Intégration au site web'
          ],
          channels: ['web']
        },
        {
          name: 'Pro',
          features: [
            'Tout ce qui est inclus dans Basique',
            'Intégration omnicanale (4 canaux)',
            'Boîte de réception centralisée',
            'Envoi de documents, liens et images',
            'Support client dédié'
          ],
          channels: ['web', 'facebook', 'instagram', 'whatsapp']
        },
        {
          name: 'Premium',
          features: [
            'Tout ce qui est inclus dans Pro',
            'Campagnes de marketing automatisées',
            'Capacité à générer, éditer et annuler des réservations',
            'Demandes et tickets des clients',
            'Escalade vers des agents humains'
          ],
          channels: ['web', 'facebook', 'instagram', 'whatsapp', 'booking', 'ota']
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
            quote: '"Sortez du chaos d\'Excel sans changer votre façon de travailler."',
            setup: '550',
            monthlyPrice: '260',
            annualPrice: '221',
            savings: '468',
            period: '/mois',
            features: [
              { name: 'Tableau de bord général', desc: 'aperçu en temps réel de l\'opération' },
              { name: 'Moteur de Réservation & Channel Manager', desc: 'calendrier de réservations multicanal' },
              { name: 'Check-in et Gestion des Hôtes', desc: 'arrivées, documents, langue' }
            ],
            baseText: 'Le point d\'entrée naturel : remplace le système maison ou le tableur. N\'inclut pas de visibilité financière consolidée.',
            cta: 'Démarrer',
            highlight: false
          },
          {
            name: 'Croissance',
            quote: '"Prenez le contrôle : sachez où vous gagnez et perdez, et augmentez votre rentabilité."',
            setup: '750',
            monthlyPrice: '440',
            annualPrice: '374',
            savings: '792',
            period: '/mois',
            features: [
              { name: 'Tout le plan Essentiel', desc: '' },
              { name: 'Paiements & Facturation', desc: 'encaissements, passerelles numériques, facturation' },
              { name: 'Administration et Finances', desc: 'résumé exécutif, rentabilité' }
            ],
            baseText: 'Le plan central : pensé pour le propriétaire-gérant qui veut gérer activement sa rentabilité, pas seulement ses réservations.',
            cta: 'Démarrer',
            highlight: true
          },
          {
            name: 'Signature',
            quote: '"Faites de l\'excellence opérationnelle votre norme, du back-office à la réception."',
            setup: '1100',
            monthlyPrice: '890',
            annualPrice: '757',
            savings: '1602',
            period: '/mois',
            features: [
              { name: 'Tout le plan Croissance', desc: '' },
              { name: 'Restaurant / Bar', desc: 'POS intégré, ventes, partage de notes' },
              { name: 'Opérations Quotidiennes & Ressources', desc: 'inventaire, alertes de stock' },
              { name: 'Rapports', desc: 'rapports personnalisés sur mesure' }
            ],
            baseText: 'La vitrine premium de Vistomio : pour l\'hôtel boutique complet qui cherche une gestion sans faille.',
            cta: 'Démarrer',
            highlight: false
          }
        ],
        addon: {
          name: 'Plan Indépendant — Table',
          quote: '',
          features: [
            'POS Vistomio',
            'Tableau de bord financier',
            'Module de paiements et facturation',
            'Suivi des stocks'
          ],
          baseText: 'Pensé pour les entreprises de restauration indépendantes (restaurants, bars, clubs de plage) cherchant la même exigence opérationnelle, sans les modules hôteliers.',
          setup: '400',
          monthlyPrice: '190',
          annualPrice: '162',
          savings: '342',
          period: '/mois',
          cta: 'Voir Démo'
        },
        chatbotTitle: 'Forfaits Chatbot IA',
        chatbotPlans: [
          {
            name: 'Basique',
            monthlyPrice: '140',
            annualPrice: '119',
            savings: '252',
            period: '/mois',
            features: [
              'Automatisation des FAQ',
              'Personnalisation du ton et de la personnalité',
              'Disponibilité 24/7',
              'Support client de base',
              'Intégration au site web'
            ],
            channels: ['web'],
            setupText: 'Setup (pour 3 propriétés)',
            setupPrice: '90'
          },
          {
            name: 'Pro',
            monthlyPrice: '210',
            annualPrice: '179',
            savings: '378',
            period: '/mois',
            features: [
              'Tout ce qui est inclus dans Basique',
              'Intégration omnicanale (4 canaux)',
              'Boîte de réception centralisée',
              'Envoi de documents, liens et images',
              'Support client dédié'
            ],
            channels: ['web', 'facebook', 'instagram', 'whatsapp'],
            setupText: 'Setup (pour 3 propriétés)',
            setupPrice: '390'
          },
          {
            name: 'Premium',
            monthlyPrice: '590',
            annualPrice: '502',
            savings: '1062',
            period: '/mois',
            features: [
              'Tout ce qui est inclus dans Pro',
              'Campagnes de marketing automatisées',
              'Capacité à générer, éditer et annuler des réservations',
              'Demandes et tickets des clients',
              'Escalade vers des agents humains'
            ],
            channels: ['web', 'facebook', 'instagram', 'whatsapp', 'booking', 'ota'],
            setupText: 'Setup (pour 3 propriétés)',
            setupPrice: '590'
          }
        ],
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
  const [billingCycle, setBillingCycle] = useState<'monthly'|'annual'>('annual');
  const [region, setRegion] = useState<'EU'|'US'|'LATAM'>('EU');
  const [currency, setCurrency] = useState<'EUR'|'USD'>('EUR');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          const latam = ['AR', 'BO', 'BR', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE'];
          if (['US', 'CA'].includes(data.country_code)) {
            setRegion('US');
            setCurrency('USD');
          } else if (latam.includes(data.country_code)) {
            setRegion('LATAM');
            setCurrency('USD');
          } else {
            setRegion('EU');
            setCurrency('EUR');
          }
        }
      })
      .catch(err => console.error("Error fetching IP:", err));
  }, []);

  const regionalPrices = {
    EU: {
      hotel: [260, 440, 890],
      addon: 190,
      chatbot: [210, 390, 590]
    },
    US: {
      hotel: [339, 579, 1199],
      addon: 250,
      chatbot: [279, 529, 799]
    },
    LATAM: {
      hotel: [182, 374, 756],
      addon: 170,
      chatbot: [147, 332, 502]
    }
  };

  const getPriceInfo = (type: 'hotel'|'addon'|'chatbot', idx: number = 0) => {
    const baseMonthly = type === 'addon' ? regionalPrices[region].addon : regionalPrices[region][type][idx];
    const monthly = baseMonthly;
    const annual = Math.round((baseMonthly * 0.85) / 10) * 10;
    const savings = (monthly * 12) - (annual * 12);
    
    return {
      monthly,
      annual,
      savings,
      current: billingCycle === 'annual' ? annual : monthly
    };
  };

  const convertPrice = (priceStr: string) => {
    const priceNum = parseInt(priceStr, 10);
    if (isNaN(priceNum)) return priceStr;
    if (currency === 'EUR') return priceStr;
    return (Math.round((priceNum * 1.08) / 10) * 10).toString();
  }

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
            <img src="/logo-icon-transparent.png" alt="Vistomio Logo Icon" className="h-[52px] md:h-[62px] w-auto object-contain mb-1" />
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
                              <div className="w-8 h-8 rounded-full bg-[#B8863B]/10 flex-shrink-0 flex items-center justify-center text-[#B8863B] group-hover:bg-[#B8863B] group-hover:text-[#0B1121] transition-colors mt-0.5">
                                <Icon size={14} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-boutique-navy transition-colors leading-tight">{item.title}</span>
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
                    <div className="w-8 h-8 rounded-full bg-[#B8863B]/10 flex items-center justify-center text-[#B8863B] group-hover:bg-[#B8863B] group-hover:text-[#0B1121] transition-colors"><Sparkles size={14} /></div>
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
                    <div className="w-8 h-8 rounded-full bg-[#B8863B]/10 flex items-center justify-center text-[#B8863B] group-hover:bg-indigo-500 group-hover:text-white transition-colors"><Users size={14} /></div>
                    <span className="font-medium">Demo Vistomio Staff App</span>
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#precios" className="text-sm font-medium text-boutique-navy hover:text-[#B8863B] transition-colors">{t.nav.pricing}</a>
            <a href="#faqs" className="text-sm font-medium text-boutique-navy hover:text-[#B8863B] transition-colors">{t.nav.faqs}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="text-sm font-semibold text-boutique-navy border-[1.5px] border-boutique-navy/20 hover:border-boutique-navy hover:bg-boutique-navy hover:text-white px-5 py-2 rounded-full transition-all">{t.nav.contact}</a>

            {/* Custom Language Selector */}
            <div 
              className="relative border-l border-gray-200 pl-6 h-full flex items-center py-2" 
              ref={langMenuRef}
              onMouseEnter={() => setLangMenuOpen(true)}
              onMouseLeave={() => setLangMenuOpen(false)}
            >
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-boutique-navy hover:text-[#B8863B] transition-colors group"
              >
                <Globe size={16} className="text-boutique-navy group-hover:text-[#B8863B] transition-colors" />
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
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${lang === l ? 'bg-amber-50 text-[#B8863B] font-bold' : 'text-boutique-navy hover:bg-gray-50 hover:text-[#B8863B]'}`}
                    >
                      {l === 'es' ? 'Español' : l === 'en' ? 'English' : 'Français'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="https://demo.vistomio.com" target="_blank" rel="noopener noreferrer" className="bg-boutique-navy hover:bg-boutique-navy/90 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm">
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
            <a href="#faqs" className="text-lg font-medium text-boutique-navy" onClick={() => setMobileMenuOpen(false)}>{t.nav.faqs}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); setMobileMenuOpen(false); }} className="text-lg font-semibold text-boutique-navy border-[1.5px] border-boutique-navy/20 px-5 py-3 rounded-xl text-center hover:bg-gray-50">{t.nav.contact}</a>
            <div className="h-px bg-black/10 w-full my-2"></div>
            <div className="flex gap-4">
               <button onClick={() => {setLang('es'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg flex-1 ${lang === 'es' ? 'bg-slate-800 border border-slate-700/20 text-[#B8863B]' : 'text-slate-400'}`}>Español</button>
               <button onClick={() => {setLang('en'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg flex-1 ${lang === 'en' ? 'bg-slate-800 border border-slate-700/20 text-[#B8863B]' : 'text-slate-400'}`}>English</button>
               <button onClick={() => {setLang('fr'); setMobileMenuOpen(false);}} className={`font-medium px-4 py-2 rounded-lg flex-1 ${lang === 'fr' ? 'bg-slate-800 border border-slate-700/20 text-[#B8863B]' : 'text-slate-400'}`}>Français</button>
            </div>
            <a href="https://demo.vistomio.com" target="_blank" rel="noopener noreferrer" className="bg-boutique-navy hover:bg-boutique-navy/90 text-white text-center font-semibold px-5 py-4 rounded-xl mt-4 shadow-sm">
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

              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-normal text-boutique-navy mb-6 tracking-[0.02em] md:tracking-[0.03em] leading-[1.1] max-w-3xl">
                {t.hero.title}
                <br />
                <span className="text-[#B8863B] font-serif">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-boutique-navy/80 max-w-2xl mb-10 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a 
                  href="https://demo.vistomio.com" target="_blank" rel="noopener noreferrer" 
                  className="w-full sm:w-auto bg-[#C6A15B] hover:bg-[#B5914A] text-white font-semibold text-sm px-8 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {t.hero.ctaPrimary} <ArrowRight size={16} />
                </a>
                <a 
                  href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} 
                  className="w-full sm:w-auto bg-boutique-navy text-white hover:bg-boutique-navy/90 font-semibold text-sm px-8 py-3.5 rounded-lg transition-colors text-center border-none"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>

              <div className="mt-5 w-full sm:w-auto text-center sm:text-left">
                <a 
                  href="#category-3"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('category-3')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto border border-[#C6A15B] bg-transparent hover:bg-[#EDE3D0] text-boutique-navy font-semibold text-sm px-8 py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageSquareText size={16} className="text-[#C6A15B]" />
                  {lang === 'es' ? 'Empieza con el Chatbot IA' : lang === 'en' ? 'Start with the AI Chatbot' : 'Commencer par le Chatbot IA'}
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
                <div className="absolute top-12 -left-4 lg:-left-12 bg-white px-5 py-3.5 rounded-full shadow-lg border-[1.5px] border-[#B8863B] flex items-center gap-3 z-20 animate-[float_6s_ease-in-out_infinite] scale-[1.05]">
                  <Check size={18} strokeWidth={2.5} className="text-[#B8863B]" />
                  <div className="text-[13px] md:text-sm font-bold text-boutique-navy leading-none">
                     {lang === 'es' ? 'Administración automatizada' : lang === 'en' ? 'Automated management' : 'Administration automatisée'}
                  </div>
                </div>

                {/* Resultado: Top Right */}
                <div className="absolute top-8 -right-4 lg:-right-16 bg-white px-5 py-3.5 rounded-full shadow-lg border-[1.5px] border-[#B8863B] flex items-center gap-3 z-20 animate-[float_5s_ease-in-out_infinite_1s] scale-[1.05]">
                  <Check size={18} strokeWidth={2.5} className="text-[#B8863B]" />
                  <div className="text-[13px] md:text-sm font-bold text-boutique-navy leading-none">
                     {lang === 'es' ? 'Operación optimizada' : lang === 'en' ? 'Optimized operation' : 'Opération optimisée'}
                  </div>
                </div>

                {/* Eficiencia: Bottom Right */}
                <div className="absolute bottom-16 -right-4 lg:-right-12 bg-white px-5 py-3.5 rounded-full shadow-lg border-[1.5px] border-[#B8863B] flex items-center gap-3 z-20 animate-[float_7s_ease-in-out_infinite_2s] scale-[1.05]">
                  <Check size={18} strokeWidth={2.5} className="text-[#B8863B]" />
                  <div className="text-[13px] md:text-sm font-bold text-boutique-navy leading-none">
                     {lang === 'es' ? 'Más tiempo para lo importante' : lang === 'en' ? 'More time for what matters' : 'Plus de temps pour l\'essentiel'}
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
            <div className="absolute top-[25%] -left-[4%] md:-left-[20%] bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[1.5px] border-[#B8863B] flex items-center gap-3 md:gap-4 z-20 animate-[float_5s_ease-in-out_infinite] scale-100 md:scale-[1.05]">
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-[#B8863B]/15 rounded-full flex items-center justify-center text-boutique-plum shrink-0">
                <ConciergeBell size={18} className="md:w-5 md:h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#6E7B4A] border border-white rounded-full"></span>
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-boutique-navy uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'CHECK-IN' : lang === 'en' ? 'CHECK-IN' : 'CHECK-IN'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-none">
                  {lang === 'es' ? 'Ingreso huésped Suite 403' : lang === 'en' ? 'Guest check-in Suite 403' : 'Arrivée client Suite 403'}
                </div>
              </div>
            </div>

            {/* Top Right: Restaurant */}
            <div className="absolute top-[25%] -right-[4%] md:-right-[20%] bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[1.5px] border-[#B8863B] flex items-center gap-3 md:gap-4 z-20 animate-[float_7s_ease-in-out_infinite_1s] scale-100 md:scale-[1.05]">
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-[#B8863B]/15 rounded-full flex items-center justify-center text-boutique-plum shrink-0">
                <Wine size={18} className="md:w-5 md:h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#6E7B4A] border border-white rounded-full"></span>
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-boutique-navy uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'RESTAURANTE' : lang === 'en' ? 'RESTAURANT' : 'RESTAURANT'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-tight">
                  {lang === 'es' ? 'Reserva: 4 personas - 20:00' : lang === 'en' ? 'Booking: 4 people - 20:00' : 'Réservation: 4 pers - 20h00'}
                </div>
              </div>
            </div>

            {/* Bottom Left: Maintenance */}
            <div className="absolute bottom-[15%] -left-[4%] md:-left-[20%] bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[1.5px] border-[#B8863B] flex items-center gap-3 md:gap-4 z-20 animate-[float_6s_ease-in-out_infinite_1.5s] scale-100 md:scale-[1.05]">
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-[#B8863B]/15 rounded-full flex items-center justify-center text-boutique-plum shrink-0">
                <ClipboardCheck size={18} className="md:w-5 md:h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#6E7B4A] border border-white rounded-full"></span>
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-boutique-navy uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'MANTENIMIENTO' : lang === 'en' ? 'MAINTENANCE' : 'MAINTENANCE'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-none">
                  {lang === 'es' ? 'Ducha Suite 104 arreglada' : lang === 'en' ? 'Suite 104 shower fixed' : 'Douche Suite 104 réparée'}
                </div>
              </div>
            </div>

            {/* Bottom Right: Payments */}
            <div className="absolute bottom-[15%] -right-[4%] md:-right-[20%] bg-white px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-[1.5px] border-[#B8863B] flex items-center gap-3 md:gap-4 z-20 animate-[float_8s_ease-in-out_infinite_0.5s] scale-100 md:scale-[1.05]">
              <div className="relative w-8 h-8 md:w-10 md:h-10 bg-[#B8863B]/15 rounded-full flex items-center justify-center text-boutique-plum shrink-0">
                <CreditCard size={18} className="md:w-5 md:h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 md:w-2.5 md:h-2.5 bg-[#6E7B4A] border border-white rounded-full"></span>
              </div>
              <div>
                <div className="text-[9px] md:text-[10px] font-bold text-boutique-navy uppercase tracking-wider leading-none mb-1">
                  {lang === 'es' ? 'FINANZAS' : lang === 'en' ? 'FINANCE' : 'FINANCES'}
                </div>
                <div className="text-xs md:text-sm font-extrabold text-boutique-navy leading-none">
                  {lang === 'es' ? 'Nuevo pago por reserva' : lang === 'en' ? 'New booking payment' : 'Nouveau paiement de réservation'}
                </div>
              </div>
            </div>
            
            {/* Tablet Frame Container */}
            <div className="relative mx-auto w-full max-w-[1200px] aspect-[16/10] min-h-[500px] rounded-[1.5rem] md:rounded-[2rem] border-[6px] md:border-[10px] border-gray-900 bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group transition-transform duration-500 hover:-translate-y-2 overflow-hidden flex flex-col flex-shrink-0">
              {/* Inner Screen */}
              <div className="relative bg-[#13203A] flex-1 w-full h-full overflow-hidden rounded-[1rem] md:rounded-[1.25rem]">
                <div className="w-full h-full pointer-events-none select-none absolute inset-0">
                  <MockVistomioApp t={t.systemDemo.mockApp} lang={lang} />
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 z-50 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-[1rem] md:rounded-[1.25rem]">
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
                    <div className="w-12 h-12 rounded-xl bg-boutique-navy text-white flex items-center justify-center shrink-0 shadow-sm">
                      <card.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl text-[#B8863B] mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{card.title}</h4>
                      <p className="text-boutique-navy text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: card.desc }} />
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
                    <div className="px-3 py-1.5 bg-[#B8863B]/20 text-[#B8863B] rounded-full text-xs font-semibold border border-[#B8863B]/30 backdrop-blur-md">
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
              <div key={idx} className="p-10 rounded-[2rem] bg-boutique-sand/60 backdrop-blur-xl border border-boutique-sand hover:border-[#B8863B]/50 hover:shadow-xl transition-all shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#13203A] text-white flex items-center justify-center mb-8 shadow-md border border-[#13203A]/20">
                    <benefit.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-normal text-[#B8863B] mb-4 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{benefit.title}</h3>
                <p className="text-boutique-navy/80 leading-relaxed text-base">{benefit.desc}</p>
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
                  <div className="w-2.5 h-2.5 rounded-full bg-[#556B2F] shrink-0"></div>
                  <h3 className="text-2xl md:text-3xl font-normal text-boutique-navy font-serif tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
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
                  <div className="h-[2px] bg-gradient-to-r from-[#B8863B]/30 to-transparent flex-grow rounded-full ml-4"></div>
                </div>
                
                {!isChatbotCategory ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="bg-boutique-sand/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-boutique-sand hover:border-[#B8863B]/50 hover:shadow-lg transition-all duration-300 group cursor-default relative overflow-hidden flex flex-col"
                      >
                        
                      <div className="absolute top-0 left-0 w-full h-full from-[#B8863B]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#13203A] text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-[#13203A]/20 shadow-md">
                          <feature.icon size={26} strokeWidth={1.5} />
                        </div>
                        {feature.standalone && (
                          <div className="px-3 py-1.5 bg-white border border-[#6E7B4A] rounded-xl text-[#6E7B4A] text-[10px] font-bold uppercase tracking-widest ml-2 mt-1 flex flex-col items-center justify-center text-center leading-[1.2] shadow-sm">
                            <span>{t.standaloneBadge1}</span>
                            <span>{t.standaloneBadge2}</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl text-[#B8863B] mb-3 relative z-10 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{feature.title}</h4>
                      <p className="text-boutique-navy/80 text-base leading-relaxed relative z-10 flex-grow font-medium">{feature.desc}</p>
                      
                      {(feature as any).demoId && (
                        <div className="mt-6 relative z-10">
                          <a href={`#${(feature as any).demoId}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#B8863B] hover:text-[#C6A15B] transition-colors group/btn uppercase tracking-widest">
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
                      <h4 className="text-2xl md:text-3xl font-serif font-normal text-boutique-navy tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.chatbotPlans.title}</h4>
                      <div className="inline-flex">
                        <div className="px-3 py-1.5 bg-white border border-[#6E7B4A] rounded-xl text-[#6E7B4A] text-[10px] font-bold uppercase tracking-widest shadow-sm">
                          {t.standaloneBadge1} {t.standaloneBadge2}
                        </div>
                      </div>
                    </div>
                    <p className="text-boutique-navy/80 text-lg mb-6 max-w-4xl leading-relaxed font-medium">
                      {t.chatbotPlans.subtitle}
                    </p>
                    
                    <div className="mb-12">
                      <a href="#demo-chatbot" className="inline-flex items-center gap-2 text-sm font-bold text-[#B8863B] hover:text-[#C6A15B] transition-colors group/btn uppercase tracking-widest">
                        {t.seeHowItWorks} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                      {/* Standard Plan */}
                      <div className="bg-boutique-offwhite border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#B8863B]/30 group-hover:bg-[#B8863B] transition-colors"></div>
                        <div className="flex items-center gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-[#6B4357]/20 text-[#6B4357] shadow-md">
                            <Bot size={24} strokeWidth={1.5} />
                          </div>
                          <h3 className="text-xl font-normal text-boutique-navy font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.chatbotPlans.plans[0].name}</h3>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <ul className="flex flex-col gap-4 flex-grow mb-6">
                          {t.chatbotPlans.plans[0].features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3">
                              <div className="mt-0.5 min-w-[18px] text-[#B8863B]"> <CheckCircle2 size={18} /> </div>
                              <span className="text-boutique-navy/90 text-base font-medium leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-6 border-t border-gray-200/60">
                          <h4 className="text-[10px] font-bold text-boutique-navy tracking-widest uppercase mb-4">{lang === "es" ? "CANALES INCLUIDOS" : lang === "en" ? "CHANNELS INCLUDED" : "CANAUX INCLUS"}</h4>
                          <div className="flex gap-2.5 text-[#303c4f]">
                            {t.chatbotPlans.plans[0].channels?.includes('web') && (
                              <div className="flex items-center gap-1.5">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                {t.chatbotPlans.plans[0].channels?.length === 1 && (
                                  <span className="text-[10px] font-semibold uppercase tracking-widest opacity-80 mt-0.5">
                                    {lang === 'es' ? 'solo página web' : lang === 'en' ? 'website only' : 'uniquement site web'}
                                  </span>
                                )}
                              </div>
                            )}
                            {t.chatbotPlans.plans[0].channels?.includes('facebook') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>}
                            {t.chatbotPlans.plans[0].channels?.includes('instagram') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.11 1.152 1.772.247.637.415 1.363.465 2.428.048 1.067.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.152 1.772c-.556.555-1.11.9-1.772 1.152-.638.247-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.152 4.904 4.904 0 0 1-1.153-1.772c-.248-.638-.416-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.363-.416 2.428-.465C8.944 2.013 9.283 2 12 2zm0 2.16c-2.67 0-3.003.01-4.053.058-.975.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.05-.057 1.383-.057 4.053 0 2.67.01 3.003.057 4.053.045.975.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.387.058 4.053.058 2.67 0 3.003-.01 4.053-.058.975-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.386.058-4.053 0-2.67-.01-3.003-.058-4.053-.045-.974-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.05-.048-1.382-.058-4.053-.058zm0 2.676a5.164 5.164 0 1 1 0 10.328 5.164 5.164 0 0 1 0-10.328zm0 2.16a3.004 3.004 0 1 0 0 6.008 3.004 3.004 0 0 0 0-6.008zm5.23-3.66a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>}
                            {t.chatbotPlans.plans[0].channels?.includes('whatsapp') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.014 2c-5.513 0-9.99 4.477-9.99 9.99 0 1.765.46 3.486 1.336 5.004L2 22l5.137-1.347a9.94 9.94 0 0 0 4.877 1.272h.004c5.51 0 9.987-4.478 9.987-9.99 0-2.673-1.04-5.184-2.93-7.073A9.932 9.932 0 0 0 12.014 2zm5.485 14.437c-.234.66-1.353 1.274-1.865 1.319-.481.043-1.092.148-3.155-.707-2.488-1.028-4.084-3.568-4.208-3.734-.124-.166-1.002-1.335-1.002-2.545s.627-1.808.843-2.04c.216-.232.47-.291.627-.291.157 0 .314 0 .452.008.144.007.337-.056.526.402.196.474.666 1.624.725 1.741.059.116.098.253.02.408-.078.155-.117.253-.235.39-.118.138-.248.3-.353.403-.118.116-.242.243-.105.479.137.236.61 1.008 1.313 1.634.908.81 1.666 1.059 1.882 1.176.216.117.343.097.47-.04.128-.137.549-.64.697-.86.147-.22.294-.183.51-.102.216.08 1.373.647 1.608.764.236.117.393.176.451.274.059.098.059.569-.176 1.229z"/></svg>}
                            {t.chatbotPlans.plans[0].channels?.includes('booking') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M7 6h4.5c1.5 0 2.5.3 3.1.8.6.5.9 1.3.9 2.2 0 .8-.3 1.5-1 2 .8.2 1.3.8 1.6 1.5.3.7.3 1.5.3 2.4 0 1.2-.4 2.1-1.1 2.8-.7.7-1.7 1-3.2 1H7V6zm3 4.8h1.2c.7 0 1.2-.1 1.5-.4.3-.3.4-.6.4-1.1 0-.4-.1-.8-.4-1-.3-.2-.7-.3-1.4-.3H10v2.8zm0 5.4h1.5c1 0 1.6-.2 2-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-1-.4-2-.4H10v3.7zm8.5-.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fill="white"/></svg>}
                            {t.chatbotPlans.plans[0].channels?.includes('ota') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M16 8H9.5a1 1 0 0 0 0 2h3.1l-6.3 6.3a1 1 0 0 0 1.4 1.4L14 11.4v3.1a1 1 0 0 0 2 0V8z" fill="white"/></svg>}
                          </div>
                        </div>
                      </div>

                      {/* Premium Plan */}
                      <div className="bg-boutique-offwhite border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#B8863B]/30 group-hover:bg-[#B8863B] transition-colors"></div>
                        <div className="flex items-center gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-[#6B4357]/20 text-[#6B4357] shadow-md">
                            <div className="relative flex items-center justify-center">
                              <Bot size={24} strokeWidth={1.5} />
                              <Zap size={10} className="absolute -bottom-1 -right-1 text-[#C6A15B]" fill="currentColor" />
                            </div>
                          </div>
                          <h3 className="text-xl font-normal text-boutique-navy font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.chatbotPlans.plans[1].name}</h3>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <ul className="flex flex-col gap-4 flex-grow mb-6">
                          {t.chatbotPlans.plans[1].features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3">
                              <div className="mt-0.5 min-w-[18px] text-[#B8863B]"> <CheckCircle2 size={18} /> </div>
                              <span className="text-boutique-navy/90 text-base font-medium leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-6 border-t border-gray-200/60">
                          <h4 className="text-[10px] font-bold text-boutique-navy tracking-widest uppercase mb-4">{lang === "es" ? "CANALES INCLUIDOS" : lang === "en" ? "CHANNELS INCLUDED" : "CANAUX INCLUS"}</h4>
                          <div className="flex gap-2.5 text-[#303c4f]">
                            {t.chatbotPlans.plans[1].channels?.includes('web') && (
                              <div className="flex items-center gap-1.5">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                {t.chatbotPlans.plans[1].channels?.length === 1 && (
                                  <span className="text-[10px] font-semibold uppercase tracking-widest opacity-80 mt-0.5">
                                    {lang === 'es' ? 'solo página web' : lang === 'en' ? 'website only' : 'uniquement site web'}
                                  </span>
                                )}
                              </div>
                            )}
                            {t.chatbotPlans.plans[1].channels?.includes('facebook') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>}
                            {t.chatbotPlans.plans[1].channels?.includes('instagram') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.11 1.152 1.772.247.637.415 1.363.465 2.428.048 1.067.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.152 1.772c-.556.555-1.11.9-1.772 1.152-.638.247-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.152 4.904 4.904 0 0 1-1.153-1.772c-.248-.638-.416-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.363-.416 2.428-.465C8.944 2.013 9.283 2 12 2zm0 2.16c-2.67 0-3.003.01-4.053.058-.975.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.05-.057 1.383-.057 4.053 0 2.67.01 3.003.057 4.053.045.975.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.387.058 4.053.058 2.67 0 3.003-.01 4.053-.058.975-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.386.058-4.053 0-2.67-.01-3.003-.058-4.053-.045-.974-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.05-.048-1.382-.058-4.053-.058zm0 2.676a5.164 5.164 0 1 1 0 10.328 5.164 5.164 0 0 1 0-10.328zm0 2.16a3.004 3.004 0 1 0 0 6.008 3.004 3.004 0 0 0 0-6.008zm5.23-3.66a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>}
                            {t.chatbotPlans.plans[1].channels?.includes('whatsapp') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.014 2c-5.513 0-9.99 4.477-9.99 9.99 0 1.765.46 3.486 1.336 5.004L2 22l5.137-1.347a9.94 9.94 0 0 0 4.877 1.272h.004c5.51 0 9.987-4.478 9.987-9.99 0-2.673-1.04-5.184-2.93-7.073A9.932 9.932 0 0 0 12.014 2zm5.485 14.437c-.234.66-1.353 1.274-1.865 1.319-.481.043-1.092.148-3.155-.707-2.488-1.028-4.084-3.568-4.208-3.734-.124-.166-1.002-1.335-1.002-2.545s.627-1.808.843-2.04c.216-.232.47-.291.627-.291.157 0 .314 0 .452.008.144.007.337-.056.526.402.196.474.666 1.624.725 1.741.059.116.098.253.02.408-.078.155-.117.253-.235.39-.118.138-.248.3-.353.403-.118.116-.242.243-.105.479.137.236.61 1.008 1.313 1.634.908.81 1.666 1.059 1.882 1.176.216.117.343.097.47-.04.128-.137.549-.64.697-.86.147-.22.294-.183.51-.102.216.08 1.373.647 1.608.764.236.117.393.176.451.274.059.098.059.569-.176 1.229z"/></svg>}
                            {t.chatbotPlans.plans[1].channels?.includes('booking') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M7 6h4.5c1.5 0 2.5.3 3.1.8.6.5.9 1.3.9 2.2 0 .8-.3 1.5-1 2 .8.2 1.3.8 1.6 1.5.3.7.3 1.5.3 2.4 0 1.2-.4 2.1-1.1 2.8-.7.7-1.7 1-3.2 1H7V6zm3 4.8h1.2c.7 0 1.2-.1 1.5-.4.3-.3.4-.6.4-1.1 0-.4-.1-.8-.4-1-.3-.2-.7-.3-1.4-.3H10v2.8zm0 5.4h1.5c1 0 1.6-.2 2-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-1-.4-2-.4H10v3.7zm8.5-.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fill="white"/></svg>}
                            {t.chatbotPlans.plans[1].channels?.includes('ota') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M16 8H9.5a1 1 0 0 0 0 2h3.1l-6.3 6.3a1 1 0 0 0 1.4 1.4L14 11.4v3.1a1 1 0 0 0 2 0V8z" fill="white"/></svg>}
                          </div>
                        </div>
                      </div>

                      {/* Autonomous Plan */}
                      <div className="bg-boutique-offwhite border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#B8863B]/30 group-hover:bg-[#B8863B] transition-colors"></div>
                        <div className="flex items-center gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-[#6B4357]/20 text-[#6B4357] shadow-md">
                            <div className="relative flex items-center justify-center">
                              <Bot size={24} strokeWidth={1.5} />
                              <Sparkles size={10} className="absolute -bottom-1 -right-1 text-[#C6A15B]" fill="currentColor" />
                            </div>
                          </div>
                          <h3 className="text-xl font-normal text-boutique-navy font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.chatbotPlans.plans[2].name}</h3>
                        </div>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>
                        <ul className="flex flex-col gap-4 flex-grow mb-6">
                          {t.chatbotPlans.plans[2].features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3">
                              <div className="mt-0.5 min-w-[18px] text-[#B8863B]"> <CheckCircle2 size={18} /> </div>
                              <span className="text-boutique-navy/90 text-base font-medium leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto pt-6 border-t border-gray-200/60">
                          <h4 className="text-[10px] font-bold text-boutique-navy tracking-widest uppercase mb-4">{lang === "es" ? "CANALES INCLUIDOS" : lang === "en" ? "CHANNELS INCLUDED" : "CANAUX INCLUS"}</h4>
                          <div className="flex gap-2.5 text-[#303c4f]">
                            {t.chatbotPlans.plans[2].channels?.includes('web') && (
                              <div className="flex items-center gap-1.5">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                {t.chatbotPlans.plans[2].channels?.length === 1 && (
                                  <span className="text-[10px] font-semibold uppercase tracking-widest opacity-80 mt-0.5">
                                    {lang === 'es' ? 'solo página web' : lang === 'en' ? 'website only' : 'uniquement site web'}
                                  </span>
                                )}
                              </div>
                            )}
                            {t.chatbotPlans.plans[2].channels?.includes('facebook') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>}
                            {t.chatbotPlans.plans[2].channels?.includes('instagram') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.11 1.152 1.772.247.637.415 1.363.465 2.428.048 1.067.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.152 1.772c-.556.555-1.11.9-1.772 1.152-.638.247-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.152 4.904 4.904 0 0 1-1.153-1.772c-.248-.638-.416-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.363-.416 2.428-.465C8.944 2.013 9.283 2 12 2zm0 2.16c-2.67 0-3.003.01-4.053.058-.975.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.05-.057 1.383-.057 4.053 0 2.67.01 3.003.057 4.053.045.975.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.387.058 4.053.058 2.67 0 3.003-.01 4.053-.058.975-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.386.058-4.053 0-2.67-.01-3.003-.058-4.053-.045-.974-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.05-.048-1.382-.058-4.053-.058zm0 2.676a5.164 5.164 0 1 1 0 10.328 5.164 5.164 0 0 1 0-10.328zm0 2.16a3.004 3.004 0 1 0 0 6.008 3.004 3.004 0 0 0 0-6.008zm5.23-3.66a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>}
                            {t.chatbotPlans.plans[2].channels?.includes('whatsapp') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.014 2c-5.513 0-9.99 4.477-9.99 9.99 0 1.765.46 3.486 1.336 5.004L2 22l5.137-1.347a9.94 9.94 0 0 0 4.877 1.272h.004c5.51 0 9.987-4.478 9.987-9.99 0-2.673-1.04-5.184-2.93-7.073A9.932 9.932 0 0 0 12.014 2zm5.485 14.437c-.234.66-1.353 1.274-1.865 1.319-.481.043-1.092.148-3.155-.707-2.488-1.028-4.084-3.568-4.208-3.734-.124-.166-1.002-1.335-1.002-2.545s.627-1.808.843-2.04c.216-.232.47-.291.627-.291.157 0 .314 0 .452.008.144.007.337-.056.526.402.196.474.666 1.624.725 1.741.059.116.098.253.02.408-.078.155-.117.253-.235.39-.118.138-.248.3-.353.403-.118.116-.242.243-.105.479.137.236.61 1.008 1.313 1.634.908.81 1.666 1.059 1.882 1.176.216.117.343.097.47-.04.128-.137.549-.64.697-.86.147-.22.294-.183.51-.102.216.08 1.373.647 1.608.764.236.117.393.176.451.274.059.098.059.569-.176 1.229z"/></svg>}
                            {t.chatbotPlans.plans[2].channels?.includes('booking') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M7 6h4.5c1.5 0 2.5.3 3.1.8.6.5.9 1.3.9 2.2 0 .8-.3 1.5-1 2 .8.2 1.3.8 1.6 1.5.3.7.3 1.5.3 2.4 0 1.2-.4 2.1-1.1 2.8-.7.7-1.7 1-3.2 1H7V6zm3 4.8h1.2c.7 0 1.2-.1 1.5-.4.3-.3.4-.6.4-1.1 0-.4-.1-.8-.4-1-.3-.2-.7-.3-1.4-.3H10v2.8zm0 5.4h1.5c1 0 1.6-.2 2-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-1-.4-2-.4H10v3.7zm8.5-.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fill="white"/></svg>}
                            {t.chatbotPlans.plans[2].channels?.includes('ota') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M16 8H9.5a1 1 0 0 0 0 2h3.1l-6.3 6.3a1 1 0 0 0 1.4 1.4L14 11.4v3.1a1 1 0 0 0 2 0V8z" fill="white"/></svg>}
                          </div>
                        </div>
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
              <div className="inline-block px-4 py-1.5 bg-white border border-boutique-navy rounded-full text-boutique-navy text-sm font-semibold uppercase tracking-wider mb-6">
                Mini demo
              </div>
              <h2 className="text-3xl md:text-[42px] font-normal text-boutique-navy mb-4 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-tight">
                {t.posDemo.sectionTitle}
              </h2>
              <p className="text-xl text-boutique-navy/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                {t.posDemo.sectionDesc}
              </p>
              
              <div className="flex flex-col gap-6 max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#6B4357] flex-shrink-0 shadow-md border border-[#6B4357]/20">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.posDemo.features[0].title}</h4>
                    <p className="text-boutique-navy/80 text-base leading-relaxed">{t.posDemo.features[0].desc}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#6B4357] flex-shrink-0 shadow-md border border-[#6B4357]/20">
                    <Wallet size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.posDemo.features[1].title}</h4>
                    <p className="text-boutique-navy/80 text-base leading-relaxed">{t.posDemo.features[1].desc}</p>
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
              <div className="inline-block px-4 py-1.5 bg-white border border-boutique-navy rounded-full text-boutique-navy text-sm font-semibold uppercase tracking-wider mb-6">
                Mini demo
              </div>
              <h2 className="text-3xl md:text-[42px] font-normal text-boutique-navy mb-4 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-tight">
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
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#6B4357] flex-shrink-0 shadow-md border border-[#6B4357]/20">
                    <ClipboardCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
                      {lang === 'es' ? 'Cero papel' : lang === 'en' ? 'Paperless' : 'Zéro papier'}
                    </h4>
                    <p className="text-boutique-navy/80 text-base leading-relaxed">
                      {lang === 'es' ? 'Digitaliza checklists, asignaciones y solicitudes de mantenimiento al instante.' : lang === 'en' ? 'Digitize checklists, assignments, and maintenance requests instantly.' : 'Numérisez les checklists, les assignations et les demandes de maintenance instantanément.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#6B4357] flex-shrink-0 shadow-md border border-[#6B4357]/20">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl text-boutique-navy mb-1 font-serif font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
                      {lang === 'es' ? 'Comunicación en tiempo real' : lang === 'en' ? 'Real-time communication' : 'Communication en temps réel'}
                    </h4>
                    <p className="text-boutique-navy/80 text-base leading-relaxed">
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
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#B8863B]"></div>
              <span className="text-[#B8863B] font-bold tracking-[0.25em] text-sm md:text-base uppercase">
                {lang === 'es' ? 'PRECIOS Y PLANES' : lang === 'en' ? 'PRICING & PLANS' : 'PRIX ET FORFAITS'}
              </span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="flex bg-white p-1.5 rounded-full border border-[#B8863B]/30 shadow-[0_8px_30px_-12px_rgba(184,134,59,0.2)] items-center relative">
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-boutique-navy text-white shadow-md transform scale-[1.02]' : 'text-boutique-navy/60 hover:text-boutique-navy hover:bg-gray-50'}`}
                >
                  {lang === 'es' ? 'Mensual' : lang === 'en' ? 'Monthly' : 'Mensuel'}
                </button>
                <button 
                  onClick={() => setBillingCycle('annual')}
                  className={`flex items-center gap-2.5 px-6 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${billingCycle === 'annual' ? 'bg-boutique-navy text-white shadow-md transform scale-[1.02]' : 'text-boutique-navy/60 hover:text-boutique-navy hover:bg-gray-50'}`}
                >
                  {lang === 'es' ? 'Anual' : lang === 'en' ? 'Annual' : 'Annuel'}
                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-extrabold tracking-wider transition-colors ${billingCycle === 'annual' ? 'bg-[#6E7B4A] text-white shadow-inner' : 'bg-[#6E7B4A]/15 text-[#6E7B4A]'}`}>
                    {lang === 'es' ? 'AHORRA 15%' : lang === 'en' ? 'SAVE 15%' : 'ÉCONOMISEZ 15%'}
                  </span>
                </button>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {t.pricing.plans.map((plan: any, idx: number) => {
              const symbol = currency === 'EUR' ? '€' : '$';
              const pInfo = getPriceInfo('hotel', idx);
              const price = pInfo.current;
              const savings = pInfo.savings;
              const setup = convertPrice(plan.setup);

              return (
                <div key={idx} className={`rounded-[2rem] p-8 bg-white border ${plan.highlight ? 'border-[#B8863B] shadow-xl relative mt-0 lg:-mt-4 lg:mb-4' : 'border-[#13203A] border-[1.5px] shadow-sm relative mt-4'} overflow-hidden transition-all duration-300 flex flex-col`}>
                  
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#B8863B] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-6 rounded-b-lg flex items-center gap-1.5">
                      <Zap size={14} fill="currentColor" /> {lang === 'es' ? 'RECOMENDADO' : lang === 'en' ? 'RECOMMENDED' : 'RECOMMANDÉ'}
                    </div>
                  )}
                  
                  <div className={`${plan.highlight ? 'pt-6' : ''}`}>
                    <h3 className="text-3xl font-bold text-boutique-navy mb-2 font-serif">{plan.name}</h3>
                    <p className="text-gray-500 italic text-[13px] mb-8 min-h-[3rem] leading-relaxed">
                      {plan.quote}
                    </p>
                    
                    <div className="mb-2 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-boutique-navy">{price}</span>
                      <span className="text-xl font-semibold text-boutique-navy">{symbol}</span>
                      <span className="text-gray-400 text-sm">{plan.period}</span>
                    </div>

                    {billingCycle === 'annual' ? (
                      <div className="bg-[#6E7B4A] text-white text-xs font-bold px-3 py-1.5 rounded-md inline-flex items-center mb-8">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                        {lang === 'es' ? 'Ahorras' : lang === 'en' ? 'Save' : 'Économisez'} {savings}{symbol} / {lang === 'es' ? 'año' : lang === 'en' ? 'year' : 'an'}
                      </div>
                    ) : (
                      <div className="h-4"></div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-[11px] font-extrabold text-boutique-navy tracking-[0.1em] uppercase mb-4">
                        {lang === 'es' ? 'CAPACIDADES INCLUIDAS' : lang === 'en' ? 'CAPABILITIES INCLUDED' : 'CAPACITÉS INCLUSES'}
                      </h4>
                      <ul className="space-y-4">
                        {plan.features.map((feature: any, fIdx: number) => (
                          <li key={fIdx} className="flex items-start text-sm">
                            <Check className="w-5 h-5 text-[#6E7B4A] mr-3 shrink-0" />
                            <span className="text-boutique-navy/90 leading-relaxed">
                              {feature.name ? <span className="font-bold">{feature.name}: </span> : null}
                              {feature.desc || feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-6">
                    <div className="flex justify-between items-center text-sm font-semibold text-boutique-navy">
                      <span>Setup ({lang === 'es' ? 'pago único' : lang === 'en' ? 'one-time' : 'paiement unique'})</span>
                      <span>{setup}{symbol}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-6 mb-16 text-center px-4 flex flex-col gap-2">
            <p className="text-[13px] text-gray-500 italic">
              {lang === 'es' 
                ? '* Precio para hoteles de hasta 25 habitaciones. A partir de ahí, +1,5 % del precio base por habitación adicional.' 
                : lang === 'en' 
                ? '* Price for hotels up to 25 rooms. Beyond that, +1.5% of the base price per additional room.' 
                : '* Prix pour hôtels jusqu\'à 25 chambres. Au-delà, +1,5 % du prix de base par chambre supplémentaire.'}
            </p>
            <p className="text-[13px] text-gray-500 italic">
              {lang === 'es' ? '* La facturación se realiza en euros (€)' : lang === 'en' ? '* Billing is done in euros (€)' : '* La facturation est effectuée en euros (€)'}
            </p>
          </div>

          {/* Independent Plan Banner */}
          <div className="max-w-6xl mx-auto mb-16 relative">
            <div className="bg-white rounded-[2rem] p-6 lg:p-10 border border-[#B8863B] shadow-sm flex flex-col md:flex-row gap-8 items-stretch">
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-boutique-plum text-white rounded-xl flex items-center justify-center shrink-0">
                    <Utensils size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-boutique-navy font-serif">
                    {t.pricing.addon.name}
                  </h3>
                </div>
                
                <p className="text-[13px] text-gray-500 mb-8 leading-relaxed">
                  {t.pricing.addon.baseText}
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.pricing.addon.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-boutique-navy/90">
                      <CheckCircle2 className="w-5 h-5 text-[#6E7B4A] mr-3 shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-72 shrink-0 bg-gradient-to-b from-[#13203A] to-[#0A111F] p-8 rounded-3xl text-white flex flex-col items-center justify-center text-center relative shadow-xl overflow-hidden border border-[#B8863B]/30">
                  {/* Decorative glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#B8863B]/15 blur-[30px] rounded-full pointer-events-none"></div>

                  <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 py-6">
                    <div className={`flex items-baseline gap-1 ${billingCycle === 'annual' ? 'mb-5' : 'mb-0'}`}>
                      <span className="text-5xl font-extrabold text-white tracking-tight">{getPriceInfo('addon').current}</span>
                      <span className="text-2xl font-bold text-[#B8863B]">{currency === 'EUR' ? '€' : '$'}</span>
                      <span className="text-gray-400 text-sm ml-1">{t.pricing.addon.period}</span>
                    </div>
                    
                    {billingCycle === 'annual' && (
                      <div className="bg-[#6E7B4A] text-white text-xs font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 relative shadow-lg shadow-[#6E7B4A]/30 border border-white/10">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {lang === 'es' ? 'Ahorras' : lang === 'en' ? 'Save' : 'Économisez'} {getPriceInfo('addon').savings}{currency === 'EUR' ? '€' : '$'} / {lang === 'es' ? 'año' : lang === 'en' ? 'year' : 'an'}
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full bg-white/5 rounded-2xl p-4 mt-auto flex justify-between items-center text-sm font-semibold border border-white/10 relative z-10 backdrop-blur-md">
                    <span className="text-gray-400 tracking-wide uppercase">Setup:</span>
                    <span className="text-white text-lg font-bold">{convertPrice(t.pricing.addon.setup)}{currency === 'EUR' ? '€' : '$'}</span>
                  </div>
                </div>
            </div>
          </div>


          {/* Chatbot Pricing Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="w-12 h-px bg-[#B8863B]"></div>
              <span className="text-[#B8863B] font-bold tracking-[0.25em] text-sm md:text-base uppercase">
                {t.pricing.chatbotTitle}
              </span>
              <div className="w-12 h-px bg-[#B8863B]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.pricing.chatbotPlans.map((plan: any, idx: number) => {
                const isPremium = idx === 2;
                const isPro = idx === 1;
                return (
                  <div key={idx} className={`bg-white rounded-[2rem] p-8 border-[1.5px] overflow-hidden transition-all duration-300 flex flex-col ${isPro ? 'border-[#B8863B] shadow-xl relative mt-0 lg:-mt-4 lg:mb-4' : 'border-[#13203A] shadow-sm relative mt-4'}`}>
                    
                    {isPro && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#B8863B] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-6 rounded-b-lg flex items-center gap-1.5 z-10">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        {lang === 'es' ? 'MÁS POPULAR' : lang === 'en' ? 'MOST POPULAR' : 'PLUS POPULAIRE'}
                      </div>
                    )}
                    

                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-boutique-navy p-3.5 rounded-2xl shadow-md border border-boutique-navy flex items-center justify-center text-white">
                        {(!isPro && !isPremium) ? (
                          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <rect x="6" y="9" width="12" height="9" rx="2" ry="2"/>
                            <line x1="3" y1="13.5" x2="6" y2="13.5"/>
                            <line x1="18" y1="13.5" x2="21" y2="13.5"/>
                            <line x1="10" y1="12" x2="10" y2="14"/>
                            <line x1="14" y1="12" x2="14" y2="14"/>
                            <path d="M11 9V5h3"/>
                          </svg>
                        ) : (
                          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <rect x="4.5" y="8" width="11.5" height="8.5" rx="2" ry="2"/>
                            <line x1="1.5" y1="12.25" x2="4.5" y2="12.25"/>
                            <line x1="16" y1="12.25" x2="19" y2="12.25"/>
                            <line x1="8.5" y1="11" x2="8.5" y2="13"/>
                            <line x1="12" y1="11" x2="12" y2="13"/>
                            <path d="M9.5 8V4.5h2.5"/>
                            
                            <path d="M19 13 Q 19 15.5 21.5 15.5 Q 19 15.5 19 18 Q 19 15.5 16.5 15.5 Q 19 15.5 19 13 Z" fill="#B8863B" stroke="none"/>
                            <circle cx="15.5" cy="18.5" r="1.3" fill="#B8863B" stroke="none"/>
                          </svg>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-boutique-navy font-serif">{plan.name}</h3>
                    </div>

                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-boutique-navy">{getPriceInfo('chatbot', idx).current}</span>
                      <span className="text-xl font-semibold text-boutique-navy">{currency === 'EUR' ? '€' : '$'}</span>
                      <span className="text-gray-400 text-sm">{plan.period}</span>
                    </div>

                    {billingCycle === 'annual' ? (
                      <div className="bg-[#6E7B4A] text-white text-[11px] font-bold px-3 py-1.5 rounded-md inline-flex items-center mb-8 self-start">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                        {lang === 'es' ? 'Ahorras' : lang === 'en' ? 'Save' : 'Économisez'} {getPriceInfo('chatbot', idx).savings}{currency === 'EUR' ? '€' : '$'} / {lang === 'es' ? 'año' : lang === 'en' ? 'year' : 'an'}
                      </div>
                    ) : (
                      <div className="h-4"></div>
                    )}

                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-start text-sm">
                          <div className="w-5 h-5 rounded-full border-[1.5px] border-[#B8863B] flex items-center justify-center mr-3 shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#B8863B]" />
                          </div>
                          <span className="text-boutique-navy/90 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-gray-200/60">
                      <h4 className="text-[10px] font-bold text-boutique-navy tracking-widest uppercase mb-4">{lang === "es" ? "CANALES INCLUIDOS" : lang === "en" ? "CHANNELS INCLUDED" : "CANAUX INCLUS"}</h4>
                      <div className="flex gap-2.5 mb-6 text-[#303c4f]">
                        {plan.channels.includes('web') && (
                          <div className="flex items-center gap-1.5">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                            {plan.channels.length === 1 && (
                              <span className="text-[10px] font-semibold uppercase tracking-widest opacity-80 mt-0.5">
                                {lang === 'es' ? 'solo página web' : lang === 'en' ? 'website only' : 'uniquement site web'}
                              </span>
                            )}
                          </div>
                        )}
                        {plan.channels.includes('facebook') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>}
                        {plan.channels.includes('instagram') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.11 1.152 1.772.247.637.415 1.363.465 2.428.048 1.067.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.152 1.772c-.556.555-1.11.9-1.772 1.152-.638.247-1.363.415-2.428.465-1.066.048-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.152 4.904 4.904 0 0 1-1.153-1.772c-.248-.638-.416-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.363-.416 2.428-.465C8.944 2.013 9.283 2 12 2zm0 2.16c-2.67 0-3.003.01-4.053.058-.975.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.05-.057 1.383-.057 4.053 0 2.67.01 3.003.057 4.053.045.975.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.387.058 4.053.058 2.67 0 3.003-.01 4.053-.058.975-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.386.058-4.053 0-2.67-.01-3.003-.058-4.053-.045-.974-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.05-.048-1.382-.058-4.053-.058zm0 2.676a5.164 5.164 0 1 1 0 10.328 5.164 5.164 0 0 1 0-10.328zm0 2.16a3.004 3.004 0 1 0 0 6.008 3.004 3.004 0 0 0 0-6.008zm5.23-3.66a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>}
                        {plan.channels.includes('whatsapp') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.014 2c-5.513 0-9.99 4.477-9.99 9.99 0 1.765.46 3.486 1.336 5.004L2 22l5.137-1.347a9.94 9.94 0 0 0 4.877 1.272h.004c5.51 0 9.987-4.478 9.987-9.99 0-2.673-1.04-5.184-2.93-7.073A9.932 9.932 0 0 0 12.014 2zm5.485 14.437c-.234.66-1.353 1.274-1.865 1.319-.481.043-1.092.148-3.155-.707-2.488-1.028-4.084-3.568-4.208-3.734-.124-.166-1.002-1.335-1.002-2.545s.627-1.808.843-2.04c.216-.232.47-.291.627-.291.157 0 .314 0 .452.008.144.007.337-.056.526.402.196.474.666 1.624.725 1.741.059.116.098.253.02.408-.078.155-.117.253-.235.39-.118.138-.248.3-.353.403-.118.116-.242.243-.105.479.137.236.61 1.008 1.313 1.634.908.81 1.666 1.059 1.882 1.176.216.117.343.097.47-.04.128-.137.549-.64.697-.86.147-.22.294-.183.51-.102.216.08 1.373.647 1.608.764.236.117.393.176.451.274.059.098.059.569-.176 1.229z"/></svg>}
                        {plan.channels.includes('booking') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M7 6h4.5c1.5 0 2.5.3 3.1.8.6.5.9 1.3.9 2.2 0 .8-.3 1.5-1 2 .8.2 1.3.8 1.6 1.5.3.7.3 1.5.3 2.4 0 1.2-.4 2.1-1.1 2.8-.7.7-1.7 1-3.2 1H7V6zm3 4.8h1.2c.7 0 1.2-.1 1.5-.4.3-.3.4-.6.4-1.1 0-.4-.1-.8-.4-1-.3-.2-.7-.3-1.4-.3H10v2.8zm0 5.4h1.5c1 0 1.6-.2 2-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-1-.4-2-.4H10v3.7zm8.5-.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" fill="white"/></svg>}
                        {plan.channels.includes('ota') && <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M16 8H9.5a1 1 0 0 0 0 2h3.1l-6.3 6.3a1 1 0 0 0 1.4 1.4L14 11.4v3.1a1 1 0 0 0 2 0V8z" fill="white"/></svg>}
                      </div>

                      <div className="flex justify-between items-end text-[13px] font-semibold text-boutique-navy/80">
                        <span>{plan.setupText}</span>
                        <span className="text-base font-bold text-boutique-navy">{convertPrice(plan.setupPrice)}{currency === 'EUR' ? '€' : '$'}</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Enterprise Section */}

          
          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden border-[1.5px] border-[#B8863B]">
             
             <div className="relative z-10 md:w-2/3">
                <h3 className="text-3xl md:text-4xl font-normal text-[#B8863B] mb-4 font-serif tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.pricing.enterprise.title}</h3>
                <p className="text-boutique-navy text-lg leading-relaxed font-light">{t.pricing.enterprise.desc}</p>
             </div>
             <div className="relative z-10 md:w-1/3 flex justify-end w-full">
                <button onClick={() => setIsContactModalOpen(true)} className="w-full md:w-auto px-8 py-4 bg-[#B8863B] hover:bg-[#A37533] text-white font-semibold text-lg rounded-2xl transition-colors shadow-lg">
                  {t.pricing.enterprise.cta}
                </button>
             </div>
          </div>
        </div>
      </section>

      



        {/* --- CTA FINAL --- */}
      <section className="py-24 md:py-32 relative bg-boutique-plum overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-boutique-gold/10 blur-[0px] hidden rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-boutique-sand/10 blur-[0px] hidden rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="w-12 h-[2px] bg-[#B8863B]"></div>
            <span className="text-[#B8863B] font-bold tracking-[0.25em] text-sm md:text-base uppercase">VISTOMIO</span>
            <div className="w-12 h-[2px] bg-[#B8863B]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-normal mb-8 tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
            {t.ctaFinal.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-4xl mx-auto font-light leading-relaxed">
            {t.ctaFinal.subtitle}
          </p>
          
          <a href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} className="inline-flex items-center gap-2 bg-[#B8863B] text-white font-semibold text-lg md:text-xl px-10 py-5 rounded-full hover:bg-[#b5932d] transition-all hover:-translate-y-1">
            {t.ctaFinal.button}
            <ArrowRight className="w-5 h-5" />
          </a>
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
                <span className="border-2 border-[#B8863B] p-1.5 text-[#B8863B] text-sm">JC</span> Hoteles
              </div>
              <span className="text-xs font-semibold text-boutique-navy/80 uppercase tracking-widest">{t.locations.jc}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section id="faqs" className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-extrabold text-boutique-navy tracking-[0.2em] uppercase mb-4">
              {lang === 'es' ? 'Preguntas Frecuentes' : lang === 'en' ? 'Frequent Questions' : 'Questions Fréquentes'}
            </h2>
            <div className="w-12 h-0.5 bg-[#B8863B] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-[1.5px] border-boutique-navy transition-colors shadow-sm">
              <h3 className="text-xl font-bold text-boutique-navy mb-4 font-serif">
                {lang === 'es' ? '¿Ya tienes un PMS?' : lang === 'en' ? 'Already have a PMS?' : <>Vous avez déjà un PMS&nbsp;?</>}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {lang === 'es' 
                  ? 'Vistomio no reemplaza tu PMS, complementa lo que este no hace: visibilidad financiera consolidada, chatbot, control de rentabilidad. Mantienes tus costumbres, nosotros añadimos la inteligencia que falta.' 
                  : lang === 'en' 
                  ? "Vistomio doesn't replace your PMS, it complements what it doesn't do: consolidated financial visibility, chatbot, profitability management. You keep your habits, we add the missing intelligence." 
                  : "Vistomio ne remplace pas votre PMS, il complète ce qu'il ne fait pas : visibilité financière consolidée, chatbot, pilotage de la rentabilité. Vous gardez vos habitudes, on ajoute l'intelligence qui manque."}
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-[1.5px] border-boutique-navy transition-colors shadow-sm">
              <h3 className="text-xl font-bold text-boutique-navy mb-4 font-serif">
                {lang === 'es' ? '¿Aún gestionas en Excel o papel?' : lang === 'en' ? 'Still managing on Excel or paper?' : <>Vous gérez encore sur Excel ou papier&nbsp;?</>}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {lang === 'es' 
                  ? 'Cada reserva gestionada a mano es un riesgo de error o sobreventa. Vistomio se convierte en tu primer sistema real, con acompañamiento en la implementación incluido.' 
                  : lang === 'en' 
                  ? 'Every booking managed by hand is a risk of error or double booking. Vistomio becomes your first real system, with implementation support included.' 
                  : 'Chaque réservation gérée à la main est un risque d\'erreur ou de double réservation. Vistomio devient votre premier vrai système, avec un accompagnement à la mise en place inclus.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-boutique-navy text-white/80 py-16 border-t border-boutique-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo-icon-transparent.png" alt="Vistomio Logo Icon" className="h-[52px] md:h-[62px] w-auto object-contain mb-1" />
            <span className="text-white font-medium tracking-[0.25em] text-sm md:text-base uppercase">VISTOMIO</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="mailto:hola@vistomio.com" className="hover:text-white transition-colors">{t.footer.contact}</a>
          </div>

          <div className="text-sm text-white/50">
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
                  <div className="w-16 h-16 from-[#B8863B] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
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
                  <p className="text-boutique-navy/80 text-base leading-relaxed">{t.customPlanModal.desc}</p>
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
                  <div className="w-16 h-16 from-[#B8863B] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Mail size={32} className="text-boutique-navy" />
                  </div>
                  <h3 className="text-3xl font-normal text-boutique-navy mb-2 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.contactModal.email.title}</h3>
                  <p className="text-boutique-navy/80 text-base leading-relaxed">{t.contactModal.email.desc}</p>
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
                      className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#B8863B] focus:ring-1 focus:ring-[#B8863B] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-boutique-navy/80 uppercase tracking-wider mb-2">{t.contactModal.email.messageLabel}</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder={t.contactModal.email.messagePlaceholder}
                      className="w-full bg-boutique-sand border border-boutique-sand text-boutique-navy placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#B8863B] focus:ring-1 focus:ring-[#B8863B] transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full from-[#B8863B] to-[#FCE69B] text-[#0B1121] hover:brightness-110 shadow-sm border border-[#FCE69B]/50 font-semibold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4">
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
                  <div className="w-16 h-16 from-[#B8863B] to-[#FCE69B] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Calendar size={32} className="text-[#0B1121]" />
                  </div>
                  <h3 className="text-3xl font-normal text-boutique-navy mb-2 font-serif md:tracking-[0.05em] tracking-[0.03em] leading-relaxed">{t.contactModal.calendar.title}</h3>
                  <p className="text-boutique-navy/80 text-base leading-relaxed">{t.contactModal.calendar.desc}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm text-boutique-navy mb-3 font-normal tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">{t.contactModal.calendar.daysLabel}</h4>
                    <div className="flex gap-3 overflow-x-auto custom-scrollbar pb-2">
                      {['Lun 14', 'Mar 15', 'Mié 16', 'Jue 17', 'Vie 18', 'Sáb 19', 'Dom 20'].map((day, i) => (
                        <button key={i} className={`flex-shrink-0 w-20 py-3 rounded-xl border ${i === 2 ? 'border-[#B8863B] bg-[#B8863B]/10 text-[#B8863B]' : 'border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700'} flex flex-col items-center justify-center gap-1 transition-colors`}>
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
                        <button key={i} onClick={() => { alert(t.contactModal.calendar.successAlert.replace('{time}', time).replace('{day}', t.contactModal.calendar.days[2] + ' 16')); setIsContactModalOpen(false); setContactModalView('options'); }} className="py-2.5 rounded-lg border border-boutique-sand bg-boutique-sand text-boutique-navy font-medium hover:border-[#B8863B]ver:border-[#B8863B] hover:text-[#B8863B] hover:bg-[#B8863B]/5 transition-colors flex items-center justify-center gap-2">
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
          <div className="w-12 h-[2px] bg-[#B8863B]"></div>
          <span className="text-[#B8863B] font-bold tracking-[0.25em] text-base md:text-lg uppercase">{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="text-[33px] md:text-[40px] lg:text-[44px] font-serif text-[#B8863B] font-normal max-w-4xl mx-auto tracking-[0.03em] md:tracking-[0.05em] leading-relaxed">
          {title}
        </h2>
      )}
    </div>
  );
}

export default VistomioLandingPage;
