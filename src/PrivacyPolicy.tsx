import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en' | 'fr'>('es');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const t = {
    es: {
      title: 'Política de Privacidad y Tratamiento de Datos',
      updated: 'Última actualización: 26 de agosto de 2026',
      intro1: 'En Le Filament ("nosotros", "nuestro" o "la Plataforma"), valoramos la privacidad de nuestros usuarios y nos comprometemos a proteger los datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y demás normativas aplicables.',
      intro2: 'Esta política explica cómo recopilamos, usamos, procesamos y protegemos la información cuando utilizas nuestro software de gestión hotelera (PMS, POS y ERP).',
      section1: '1. Identidad del Responsable del Tratamiento',
      s1Titular: 'Titular legal:',
      s1TitularDesc: 'Le Filament (Empresa registrada en Francia)',
      s1Correo: 'Correo de contacto para privacidad:',
      section2: '2. Nuestro Rol en el Procesamiento de Datos',
      s2Intro: 'Dado que nuestro software es una herramienta de gestión para hoteles, operamos bajo dos roles distintos según el RGPD:',
      s2Resp: 'Como Responsable del Tratamiento:',
      s2RespDesc: 'Cuando recopilamos la información personal y de facturación de los usuarios (administradores o propietarios de hoteles) que registran una cuenta en nuestra plataforma.',
      s2Enc: 'Como Encargado del Tratamiento:',
      s2EncDesc: 'Cuando procesamos datos de los huéspedes finales, inventario, habitaciones y tarifas en nombre del hotel. El hotel (nuestro cliente) es el Responsable del Tratamiento de estos datos.',
      section3: '3. Qué datos recopilamos y de dónde provienen',
      s3Intro: 'Recopilamos información de las siguientes maneras:',
      s3Reg: 'Datos de registro y cuenta:',
      s3RegDesc: 'Nombre, correo electrónico, datos de contacto y detalles del establecimiento hotelero al crear una cuenta.',
      s3Op: 'Datos de gestión operativa:',
      s3OpDesc: 'Información sobre habitaciones, tarifas, disponibilidad y operativas diarias. Para esto, podemos conectarnos a las herramientas y canales preexistentes del usuario, importando y consolidando esta información en nuestro sistema.',
      s3Opt: 'Datos de terceros (Optativos):',
      s3OptDesc: 'Si el usuario decide habilitar integraciones adicionales, procesaremos los datos necesarios para su funcionamiento (por ejemplo, tokens de conexión).',
      section4: '4. Finalidad: ¿Para qué usamos los datos?',
      s4Intro: 'Utilizamos la información exclusivamente para garantizar el funcionamiento del servicio, incluyendo:',
      s4L1: 'Proveer el software PMS, POS y ERP, procesando la información para consolidarla y mostrarla de manera sencilla en el día a día.',
      s4L2: 'Facilitar la gestión de reservas, inventario y facturación del establecimiento.',
      s4L3: 'Mantener la seguridad de la plataforma, evitar fraudes y proporcionar soporte técnico.',
      section5: '5. Integraciones de Terceros y Proveedores de Infraestructura',
      s5Intro: 'No vendemos ni alquilamos datos a terceros. Solo compartimos la información estrictamente necesaria con proveedores tecnológicos que nos ayudan a operar, quienes también cumplen con los más altos estándares de seguridad y el RGPD:',
      s5Inf: 'Infraestructura:',
      s5InfDesc: 'Nuestros servidores y bases de datos están alojados en Hostinger y Supabase, utilizando conexiones cifradas para garantizar la seguridad de la información.',
      s5Int: 'Integraciones opcionales a petición del usuario:',
      s5IntDesc: 'Si el usuario decide habilitar funciones adicionales, los datos pueden transitar por servicios de terceros. Por ejemplo:',
      s5Stripe: 'Stripe:',
      s5StripeDesc: 'Si el usuario conecta su cuenta para procesar pagos de forma directa.',
      s5Wa: 'WhatsApp Business API:',
      s5WaDesc: 'Si el usuario decide activar el chatbot o la mensajería automatizada para sus huéspedes.',
      s5Note: '(Estas integraciones solo se activan por voluntad y configuración explícita del usuario).',
      section6: '6. Seguridad de los Datos',
      s6Desc: 'Aplicamos medidas técnicas y organizativas para proteger la información contra accesos no autorizados, pérdida o alteración. Esto incluye el cifrado de datos, respaldos regulares y controles de acceso estrictos en nuestras bases de datos.',
      section7: '7. Retención de los Datos',
      s7Desc: 'Conservaremos los datos personales de la cuenta mientras el usuario mantenga una suscripción activa. Si el usuario decide darse de baja, los datos se eliminarán o anonimizarán en un plazo razonable, salvo aquellos que debamos retener por obligaciones legales, fiscales o contables en Francia.',
      section8: '8. Derechos de los Usuarios (Derechos ARCO y RGPD)',
      s8Intro: 'Los usuarios (titulares de la cuenta en Le Filament) tienen derecho en cualquier momento a:',
      s8L1: 'Acceder a los datos personales que tenemos sobre ellos.',
      s8L2: 'Rectificar cualquier dato inexacto o incompleto.',
      s8L3: 'Solicitar la eliminación de su cuenta y sus datos (Derecho al olvido).',
      s8L4: 'Oponerse al procesamiento o solicitar la restricción del mismo.',
      s8L5: 'Solicitar la portabilidad de sus datos en un formato estructurado.',
      s8Outro1: 'Para ejercer cualquiera de estos derechos, el usuario debe enviar una solicitud detallada a',
      s8Outro2: 'Responderemos en el plazo establecido por la ley.',
      back: '← Volver a la página principal'
    },
    en: {
      title: 'Privacy Policy and Data Processing',
      updated: 'Last updated: August 26, 2026',
      intro1: 'At Le Filament ("we", "our" or "the Platform"), we value the privacy of our users and are committed to protecting personal data in accordance with the General Data Protection Regulation (GDPR) of the European Union and other applicable regulations.',
      intro2: 'This policy explains how we collect, use, process and protect information when you use our hotel management software (PMS, POS and ERP).',
      section1: '1. Identity of the Data Controller',
      s1Titular: 'Legal owner:',
      s1TitularDesc: 'Le Filament (Company registered in France)',
      s1Correo: 'Privacy contact email:',
      section2: '2. Our Role in Data Processing',
      s2Intro: 'Since our software is a management tool for hotels, we operate under two distinct roles under the GDPR:',
      s2Resp: 'As Data Controller:',
      s2RespDesc: 'When we collect the personal and billing information of the users (administrators or hotel owners) who register an account on our platform.',
      s2Enc: 'As Data Processor:',
      s2EncDesc: 'When we process data of final guests, inventory, rooms and rates on behalf of the hotel. The hotel (our client) is the Data Controller of this data.',
      section3: '3. What data we collect and where it comes from',
      s3Intro: 'We collect information in the following ways:',
      s3Reg: 'Registration and account data:',
      s3RegDesc: 'Name, email, contact details and details of the hotel establishment when creating an account.',
      s3Op: 'Operational management data:',
      s3OpDesc: 'Information on rooms, rates, availability and daily operations. For this, we can connect to the user\'s pre-existing tools and channels, importing and consolidating this information into our system.',
      s3Opt: 'Third-party data (Optional):',
      s3OptDesc: 'If the user decides to enable additional integrations, we will process the necessary data for their operation (for example, connection tokens).',
      section4: '4. Purpose: What do we use the data for?',
      s4Intro: 'We use the information exclusively to ensure the operation of the service, including:',
      s4L1: 'Providing the PMS, POS and ERP software, processing the information to consolidate it and display it easily on a daily basis.',
      s4L2: 'Facilitating the management of reservations, inventory and billing of the establishment.',
      s4L3: 'Maintaining the security of the platform, preventing fraud and providing technical support.',
      section5: '5. Third-Party Integrations and Infrastructure Providers',
      s5Intro: 'We do not sell or rent data to third parties. We only share strictly necessary information with technology providers who help us operate, who also comply with the highest security standards and the GDPR:',
      s5Inf: 'Infrastructure:',
      s5InfDesc: 'Our servers and databases are hosted on Hostinger and Supabase, using encrypted connections to ensure the security of the information.',
      s5Int: 'Optional user-requested integrations:',
      s5IntDesc: 'If the user decides to enable additional features, the data may pass through third-party services. For example:',
      s5Stripe: 'Stripe:',
      s5StripeDesc: 'If the user connects their account to process payments directly.',
      s5Wa: 'WhatsApp Business API:',
      s5WaDesc: 'If the user decides to activate the chatbot or automated messaging for their guests.',
      s5Note: '(These integrations are only activated by the express will and configuration of the user).',
      section6: '6. Data Security',
      s6Desc: 'We apply technical and organizational measures to protect information against unauthorized access, loss or alteration. This includes data encryption, regular backups and strict access controls in our databases.',
      section7: '7. Data Retention',
      s7Desc: 'We will retain the personal data of the account as long as the user maintains an active subscription. If the user decides to unsubscribe, the data will be deleted or anonymized within a reasonable period, except for those we must retain due to legal, tax or accounting obligations in France.',
      section8: '8. User Rights (GDPR Rights)',
      s8Intro: 'Users (Le Filament account holders) have the right at any time to:',
      s8L1: 'Access the personal data we hold about them.',
      s8L2: 'Rectify any inaccurate or incomplete data.',
      s8L3: 'Request the deletion of their account and data (Right to be forgotten).',
      s8L4: 'Object to processing or request the restriction of processing.',
      s8L5: 'Request the portability of their data in a structured format.',
      s8Outro1: 'To exercise any of these rights, the user must send a detailed request to',
      s8Outro2: 'We will respond within the timeframe established by law.',
      back: '← Back to home page'
    },
    fr: {
      title: 'Politique de Confidentialité et Traitement des Données',
      updated: 'Dernière mise à jour : 26 août 2026',
      intro1: 'Chez Le Filament ("nous", "notre" ou "la Plateforme"), nous accordons une grande importance à la confidentialité de nos utilisateurs et nous nous engageons à protéger les données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) de l\'Union Européenne et aux autres réglementations applicables.',
      intro2: 'Cette politique explique comment nous recueillons, utilisons, traitons et protégeons les informations lorsque vous utilisez notre logiciel de gestion hôtelière (PMS, POS et ERP).',
      section1: '1. Identité du Responsable du Traitement',
      s1Titular: 'Titulaire légal :',
      s1TitularDesc: 'Le Filament (Entreprise immatriculée en France)',
      s1Correo: 'Email de contact pour la confidentialité :',
      section2: '2. Notre Rôle dans le Traitement des Données',
      s2Intro: 'Étant donné que notre logiciel est un outil de gestion pour les hôtels, nous opérons sous deux rôles distincts selon le RGPD :',
      s2Resp: 'En tant que Responsable du Traitement :',
      s2RespDesc: 'Lorsque nous recueillons les informations personnelles et de facturation des utilisateurs (administrateurs ou propriétaires d\'hôtels) qui créent un compte sur notre plateforme.',
      s2Enc: 'En tant que Sous-traitant :',
      s2EncDesc: 'Lorsque nous traitons les données des clients finaux, de l\'inventaire, des chambres et des tarifs pour le compte de l\'hôtel. L\'hôtel (notre client) est le Responsable du Traitement de ces données.',
      section3: '3. Quelles données nous recueillons et d\'où elles proviennent',
      s3Intro: 'Nous recueillons des informations de la manière suivante :',
      s3Reg: 'Données d\'inscription et de compte :',
      s3RegDesc: 'Nom, adresse e-mail, coordonnées et détails de l\'établissement hôtelier lors de la création d\'un compte.',
      s3Op: 'Données de gestion opérationnelle :',
      s3OpDesc: 'Informations sur les chambres, les tarifs, la disponibilité et les opérations quotidiennes. Pour cela, nous pouvons nous connecter aux outils et canaux préexistants de l\'utilisateur, en important et en consolidant ces informations dans notre système.',
      s3Opt: 'Données de tiers (Optionnel) :',
      s3OptDesc: 'Si l\'utilisateur décide d\'activer des intégrations supplémentaires, nous traiterons les données nécessaires à leur fonctionnement (par exemple, les jetons de connexion).',
      section4: '4. Finalité : À quoi servent les données ?',
      s4Intro: 'Nous utilisons les informations exclusivement pour garantir le fonctionnement du service, y compris :',
      s4L1: 'Fournir le logiciel PMS, POS et ERP, en traitant les informations pour les consolider et les afficher de manière simple au quotidien.',
      s4L2: 'Faciliter la gestion des réservations, de l\'inventaire et de la facturation de l\'établissement.',
      s4L3: 'Maintenir la sécurité de la plateforme, prévenir la fraude et fournir une assistance technique.',
      section5: '5. Intégrations Tiers et Fournisseurs d\'Infrastructure',
      s5Intro: 'Nous ne vendons ni ne louons de données à des tiers. Nous ne partageons les informations strictement nécessaires qu\'avec les fournisseurs technologiques qui nous aident à opérer, et qui respectent également les normes de sécurité les plus élevées et le RGPD :',
      s5Inf: 'Infrastructure :',
      s5InfDesc: 'Nos serveurs et bases de données sont hébergés sur Hostinger et Supabase, utilisant des connexions cryptées pour garantir la sécurité des informations.',
      s5Int: 'Intégrations optionnelles à la demande de l\'utilisateur :',
      s5IntDesc: 'Si l\'utilisateur décide d\'activer des fonctions supplémentaires, les données peuvent transiter par des services tiers. Par exemple :',
      s5Stripe: 'Stripe :',
      s5StripeDesc: 'Si l\'utilisateur connecte son compte pour traiter les paiements directement.',
      s5Wa: 'WhatsApp Business API :',
      s5WaDesc: 'Si l\'utilisateur décide d\'activer le chatbot ou la messagerie automatisée pour ses clients.',
      s5Note: '(Ces intégrations ne sont activées que par la volonté explicite et la configuration de l\'utilisateur).',
      section6: '6. Sécurité des Données',
      s6Desc: 'Nous appliquons des mesures techniques et organisationnelles pour protéger les informations contre l\'accès non autorisé, la perte ou l\'altération. Cela comprend le cryptage des données, des sauvegardes régulières et des contrôles d\'accès stricts dans nos bases de données.',
      section7: '7. Conservation des Données',
      s7Desc: 'Nous conserverons les données personnelles du compte tant que l\'utilisateur maintiendra un abonnement actif. Si l\'utilisateur décide de se désinscrire, les données seront supprimées ou anonymisées dans un délai raisonnable, à l\'exception de celles que nous devons conserver en raison d\'obligations légales, fiscales ou comptables en France.',
      section8: '8. Droits des Utilisateurs (Droits RGPD)',
      s8Intro: 'Les utilisateurs (titulaires du compte Le Filament) ont le droit à tout moment de :',
      s8L1: 'Accéder aux données personnelles que nous détenons à leur sujet.',
      s8L2: 'Rectifier toute donnée inexacte ou incomplète.',
      s8L3: 'Demander la suppression de leur compte et de leurs données (Droit à l\'oubli).',
      s8L4: 'S\'opposer au traitement ou en demander la limitation.',
      s8L5: 'Demander la portabilité de leurs données dans un format structuré.',
      s8Outro1: 'Pour exercer l\'un de ces droits, l\'utilisateur doit envoyer une demande détaillée à',
      s8Outro2: 'Nous répondrons dans les délais fixés par la loi.',
      back: '← Retour à la page d\'accueil'
    }
  };

  const curr = t[lang];

  return (
    <div className="min-h-screen bg-boutique-offwhite py-20 px-4 sm:px-6 lg:px-8 font-sans text-boutique-navy relative">
      
      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-50">
        <div className="relative" ref={langMenuRef}>
          <button 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors font-medium text-sm text-boutique-navy"
            onClick={() => setLangMenuOpen(!langMenuOpen)}
          >
            <span>{lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Français'}</span>
            <ChevronDown size={14} className={`text-slate-500 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`absolute top-full right-0 mt-2 pt-2 pb-2 bg-white rounded-xl shadow-lg border border-gray-100 w-32 transition-all duration-200 origin-top-right ${langMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
            {['es', 'en', 'fr'].map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l as 'es'|'en'|'fr');
                  setLangMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${lang === l ? 'bg-amber-50 text-[#B8863B] font-bold' : 'text-boutique-navy hover:bg-gray-50 hover:text-[#B8863B]'}`}
              >
                {l === 'es' ? 'Español' : l === 'en' ? 'English' : 'Français'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mt-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-boutique-navy">{curr.title}</h1>
        <p className="text-sm text-gray-500 mb-10 italic">{curr.updated}</p>

        <div className="space-y-8 text-boutique-navy/80 leading-relaxed">
          <p>{curr.intro1}</p>
          <p>{curr.intro2}</p>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section1}</h2>
            <p><strong>{curr.s1Titular}</strong> {curr.s1TitularDesc}</p>
            <p><strong>{curr.s1Correo}</strong> <a href="mailto:hello@vistomio.com" className="text-[#C6A15B] hover:underline">hello@vistomio.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section2}</h2>
            <p className="mb-2">{curr.s2Intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{curr.s2Resp}</strong> {curr.s2RespDesc}</li>
              <li><strong>{curr.s2Enc}</strong> {curr.s2EncDesc}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section3}</h2>
            <p className="mb-2">{curr.s3Intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{curr.s3Reg}</strong> {curr.s3RegDesc}</li>
              <li><strong>{curr.s3Op}</strong> {curr.s3OpDesc}</li>
              <li><strong>{curr.s3Opt}</strong> {curr.s3OptDesc}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section4}</h2>
            <p className="mb-2">{curr.s4Intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{curr.s4L1}</li>
              <li>{curr.s4L2}</li>
              <li>{curr.s4L3}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section5}</h2>
            <p className="mb-2">{curr.s5Intro}</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>{curr.s5Inf}</strong> {curr.s5InfDesc}</li>
              <li>
                <strong>{curr.s5Int}</strong> {curr.s5IntDesc}
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-sm">
                  <li><strong>{curr.s5Stripe}</strong> {curr.s5StripeDesc}</li>
                  <li><strong>{curr.s5Wa}</strong> {curr.s5WaDesc}</li>
                </ul>
                <p className="text-sm italic mt-2">{curr.s5Note}</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section6}</h2>
            <p>{curr.s6Desc}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section7}</h2>
            <p>{curr.s7Desc}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{curr.section8}</h2>
            <p className="mb-2">{curr.s8Intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{curr.s8L1}</li>
              <li>{curr.s8L2}</li>
              <li>{curr.s8L3}</li>
              <li>{curr.s8L4}</li>
              <li>{curr.s8L5}</li>
            </ul>
            <p className="mt-4">
              {curr.s8Outro1} <a href="mailto:hello@vistomio.com" className="text-[#C6A15B] hover:underline">hello@vistomio.com</a>. {curr.s8Outro2}
            </p>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
          <button 
            onClick={() => window.location.hash = ''}
            className="text-sm font-semibold text-boutique-navy hover:text-[#C6A15B] transition-colors flex items-center gap-2"
          >
            {curr.back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
