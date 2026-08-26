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
      title: "Aviso de Privacidad y Protección de Datos",
      updated: "Última actualización: 26 de agosto de 2026",
      intro1: "Vistomio (\"nosotros\", \"nuestro\") es una plataforma de gestión hotelera (PMS, motor de reservas, gestión de restaurante/POS y chatbot de atención al huésped) editada por Le Filament, SAS. Este aviso explica qué datos personales tratamos a través del sitio web vistomio.com y de la plataforma Vistomio, con qué finalidad, durante cuánto tiempo y con qué garantías, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y, cuando resulte aplicable a usuarios situados en México, con la normativa mexicana de protección de datos personales.",
      sections: [
            {
                  title: "1. ¿Quiénes somos? — Responsable del tratamiento",
                  content: [
                        "Le Filament, SAS (marca comercial: Vistomio)",
                        "Inscrita en el RCS de París con el número 983 337 791.",
                        "Domicilio social: 12 rue Riquet, 75019 Paris, Francia.",
                        "Contacto para cuestiones de privacidad y protección de datos: hello@vistomio.com"
                  ]
            },
            {
                  title: "2. Qué datos recopilamos, para qué y con qué base legal",
                  content: [
                        "Visitantes del sitio web: Para hacer funcionar el sitio, medir la audiencia y mejorar la experiencia (Base legal: Interés legítimo / consentimiento para cookies no esenciales). Datos: Datos de navegación, dirección IP, tipo de navegador, cookies.",
                        "Prospectos y contactos comerciales: Para responder a solicitudes, realizar seguimiento comercial y enviar comunicaciones (Base legal: Interés legítimo / consentimiento). Datos: Nombre, apellidos, correo electrónico, teléfono, nombre del hotel, país, contenido del mensaje.",
                        "Clientes (cuenta y facturación): Para crear y gestionar la cuenta, ejecutar el contrato, facturar, dar soporte y cumplir obligaciones legales (Base legal: Ejecución del contrato / obligación legal). Datos: Datos de identificación, nombre y correo de usuarios, credenciales, dirección de facturación, datos fiscales, historial de pagos (gestionado por Stripe)."
                  ]
            },
            {
                  title: "3. ¿Cuánto tiempo conservamos tus datos?",
                  content: [
                        "Datos de navegación / cookies: 13 meses; registros técnicos de seguridad: 12 meses.",
                        "Prospectos que no se convierten en clientes: 3 años desde el último contacto.",
                        "Datos de cuenta de clientes activos: Durante toda la duración de la relación contractual.",
                        "Datos contables y fiscales de clientes: Hasta 10 años tras el cierre del ejercicio.",
                        "Datos tras la finalización del contrato: Eliminación o anonimización en un plazo razonable, salvo obligación legal."
                  ]
            },
            {
                  title: "4. ¿Con quién compartimos tus datos? — Proveedores tecnológicos",
                  content: [
                        "Utilizamos infraestructura segura y certificada, con datos cifrados tanto en tránsito como en reposo. Aplicamos respaldos automáticos y controles de acceso estrictos.",
                        "Para el funcionamiento de Vistomio, trabajamos con:",
                        "• Hostinger: proveedor de alojamiento (hosting).",
                        "• Supabase: proveedor de base de datos y backend.",
                        "• Stripe: procesador de pagos.",
                        "También podemos compartir datos con administraciones competentes cuando la ley lo exija."
                  ]
            },
            {
                  title: "4 bis. Datos de los huéspedes de los hoteles clientes (rol de encargado)",
                  content: [
                        "Cuando un hotel utiliza Vistomio, la plataforma trata datos de los huéspedes finales. Para estos datos, Vistomio actúa como encargado del tratamiento. El hotel cliente es el responsable del tratamiento y define las finalidades y bases legales en el marco de un contrato de tratamiento de datos con Vistomio. Hostinger, Supabase y Stripe intervienen como subencargados con las mismas garantías de seguridad."
                  ]
            },
            {
                  title: "5. Transferencias internacionales de datos",
                  content: [
                        "Damos prioridad a proveedores y centros de datos en la Unión Europea. Si algún proveedor (Hostinger, Supabase o Stripe) trata datos fuera del Espacio Económico Europeo, la transferencia se realiza con las garantías del RGPD (cláusulas contractuales tipo o decisión de adecuación)."
                  ]
            },
            {
                  title: "6. Tus derechos",
                  content: [
                        "De conformidad con el RGPD, dispones de los siguientes derechos: acceso, rectificación, supresión (\"derecho al olvido\"), limitación, portabilidad, oposición, y a definir instrucciones tras tu fallecimiento.",
                        "Para ejercer estos derechos, escríbenos a hello@vistomio.com. También puedes presentar una reclamación ante la CNIL (www.cnil.fr)."
                  ]
            },
            {
                  title: "7. Cookies y tecnologías similares",
                  content: [
                        "El sitio vistomio.com puede utilizar cookies técnicas necesarias y, sujeta a tu consentimiento, cookies de medición de audiencia o marketing. Puedes gestionar tus preferencias en tu navegador."
                  ]
            },
            {
                  title: "8. Seguridad de los datos",
                  content: [
                        "Aplicamos medidas razonables para proteger tus datos: cifrado en tránsito y en reposo, copias de seguridad automáticas, control estricto de accesos y contratos con obligaciones de seguridad."
                  ]
            },
            {
                  title: "9. Menores de edad",
                  content: [
                        "Vistomio es una plataforma dirigida a profesionales (empresas y empleados) y no está destinada a menores de edad. No recopilamos conscientemente datos de menores."
                  ]
            },
            {
                  title: "10. Modificaciones de este aviso",
                  content: [
                        "Podemos actualizar este aviso para reflejar cambios en nuestras prácticas. La fecha de la última actualización se indica al principio de esta página."
                  ]
            },
            {
                  title: "11. Contacto",
                  content: [
                        "Para cualquier pregunta: hello@vistomio.com"
                  ]
            }
      ],
      back: "← Volver a la página principal"
},
    en: {
      title: "Privacy and Data Protection Policy",
      updated: "Last updated: August 26, 2026",
      intro1: "Vistomio (\"we\", \"our\") is a hotel management platform published by Le Filament, SAS. This policy explains what personal data we process through vistomio.com and the Vistomio platform, for what purpose, for how long and with what guarantees, in accordance with the GDPR and applicable regulations.",
      sections: [
            {
                  title: "1. Who are we? — Data Controller",
                  content: [
                        "Le Filament, SAS (trademark: Vistomio)",
                        "Registered in the Paris RCS under number 983 337 791.",
                        "Registered office: 12 rue Riquet, 75019 Paris, France.",
                        "Contact: hello@vistomio.com"
                  ]
            },
            {
                  title: "2. What data we collect, for what purpose and on what legal basis",
                  content: [
                        "Website visitors: To operate the site and measure audience (Legitimate interest / consent). Data: Browsing data, IP address, cookies.",
                        "Prospects and commercial contacts: To respond to requests and ensure commercial follow-up (Legitimate interest / consent). Data: Name, email, phone, hotel name, country.",
                        "Clients: To create and manage the account, execute the contract and bill (Contract execution / legal obligation). Data: Identification data, users, billing address, payment history (managed by Stripe)."
                  ]
            },
            {
                  title: "3. How long do we keep your data?",
                  content: [
                        "Browsing data / cookies: 13 months; technical logs: 12 months.",
                        "Prospects: 3 years from the last contact.",
                        "Client account data: For the duration of the contract.",
                        "Accounting/tax data: Up to 10 years after the close of the financial year.",
                        "Data after contract termination: Deletion or anonymization within a reasonable time."
                  ]
            },
            {
                  title: "4. Who do we share your data with? — Providers",
                  content: [
                        "We use a secure infrastructure with data encrypted in transit and at rest.",
                        "We work with:",
                        "• Hostinger: hosting.",
                        "• Supabase: database and backend.",
                        "• Stripe: payments.",
                        "We may also share data with competent authorities when required."
                  ]
            },
            {
                  title: "4 bis. End-guest data from client hotels (Data Processor role)",
                  content: [
                        "When a hotel uses Vistomio, the platform processes end-guest data. Vistomio acts as a data processor: the hotel is the data controller and determines the purposes under an agreement signed with Vistomio. Hostinger, Supabase and Stripe act as sub-processors."
                  ]
            },
            {
                  title: "5. International data transfers",
                  content: [
                        "We prioritize providers in the European Union. If a provider processes data outside the EEA, this transfer is framed by GDPR guarantees."
                  ]
            },
            {
                  title: "6. Your rights",
                  content: [
                        "You have the following rights: access, rectification, erasure, restriction, portability, opposition.",
                        "To exercise them, email us at hello@vistomio.com. You can also file a complaint with the CNIL (www.cnil.fr)."
                  ]
            },
            {
                  title: "7. Cookies and similar technologies",
                  content: [
                        "The site may use technical and audience measurement cookies, subject to your consent. You can manage your preferences via your browser."
                  ]
            },
            {
                  title: "8. Data security",
                  content: [
                        "We implement reasonable measures to protect your data: encryption, backups, strict access control, and security contracts."
                  ]
            },
            {
                  title: "9. Minors",
                  content: [
                        "Vistomio is intended for professionals and is not intended for minors. We do not knowingly collect data from minors."
                  ]
            },
            {
                  title: "10. Changes to this policy",
                  content: [
                        "We may update this policy to reflect changes in our practices."
                  ]
            },
            {
                  title: "11. Contact",
                  content: [
                        "For any questions: hello@vistomio.com"
                  ]
            }
      ],
      back: "← Back to home page"
},
    fr: {
      title: "Politique de confidentialité et de protection des données",
      updated: "Dernière mise à jour : 26 août 2026",
      intro1: "Vistomio (« nous ») est une plateforme de gestion hôtelière éditée par Le Filament, SAS. Cette politique explique quelles données personnelles nous traitons via le site vistomio.com et la plateforme Vistomio, dans quel but, pendant combien de temps et avec quelles garanties, conformément au RGPD et à la réglementation applicable.",
      sections: [
            {
                  title: "1. Qui sommes-nous ? — Responsable du traitement",
                  content: [
                        "Le Filament, SAS (marque commerciale : Vistomio)",
                        "Immatriculée au RCS de Paris sous le numéro 983 337 791.",
                        "Siège social : 12 rue Riquet, 75019 Paris, France.",
                        "Contact : hello@vistomio.com"
                  ]
            },
            {
                  title: "2. Quelles données nous collectons, pour quoi faire et sur quelle base légale",
                  content: [
                        "Visiteurs du site web : Pour faire fonctionner le site et mesurer l'audience (Intérêt légitime / consentement). Données : Données de navigation, adresse IP, cookies.",
                        "Prospects et contacts commerciaux : Pour répondre aux demandes et assurer le suivi commercial (Intérêt légitime / consentement). Données : Nom, e-mail, téléphone, nom de l'hôtel, pays.",
                        "Clients : Pour créer et gérer le compte, exécuter le contrat et facturer (Exécution du contrat / obligation légale). Données : Données d'identification, utilisateurs, adresse de facturation, historique de paiement (géré par Stripe)."
                  ]
            },
            {
                  title: "3. Combien de temps conservons-nous vos données ?",
                  content: [
                        "Données de navigation / cookies : 13 mois ; journaux techniques : 12 mois.",
                        "Prospects : 3 ans à compter du dernier contact.",
                        "Données de compte clients : Pendant toute la durée du contrat.",
                        "Données comptables/fiscales : Jusqu'à 10 ans après la clôture de l'exercice.",
                        "Données après la fin du contrat : Suppression ou anonymisation dans un délai raisonnable."
                  ]
            },
            {
                  title: "4. Avec qui partageons-nous vos données ? — Prestataires",
                  content: [
                        "Nous utilisons une infrastructure sécurisée avec des données chiffrées en transit et au repos.",
                        "Nous travaillons avec :",
                        "• Hostinger : hébergement.",
                        "• Supabase : base de données et backend.",
                        "• Stripe : paiements.",
                        "Nous pouvons également partager des données avec les administrations compétentes."
                  ]
            },
            {
                  title: "4 bis. Données des clients finaux des hôtels (rôle de sous-traitant)",
                  content: [
                        "Lorsqu'un hôtel utilise Vistomio, la plateforme traite des données des clients finaux. Vistomio agit en tant que sous-traitant : l'hôtel est responsable du traitement et détermine les finalités dans le cadre d'un accord signé avec Vistomio. Hostinger, Supabase et Stripe interviennent en tant que sous-traitants ultérieurs."
                  ]
            },
            {
                  title: "5. Transferts internationaux de données",
                  content: [
                        "Nous privilégions des prestataires dans l'Union européenne. Si un prestataire traite des données hors de l'EEE, ce transfert est encadré par les garanties du RGPD."
                  ]
            },
            {
                  title: "6. Vos droits",
                  content: [
                        "Vous disposez des droits suivants : accès, rectification, effacement, limitation, portabilité, opposition.",
                        "Pour les exercer, écrivez-nous à hello@vistomio.com. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr)."
                  ]
            },
            {
                  title: "7. Cookies et technologies similaires",
                  content: [
                        "Le site peut utiliser des cookies techniques et de mesure d'audience, soumis à votre consentement. Vous pouvez gérer vos préférences via votre navigateur."
                  ]
            },
            {
                  title: "8. Sécurité des données",
                  content: [
                        "Nous mettons en œuvre des mesures raisonnables pour protéger vos données : chiffrement, sauvegardes, contrôle strict des accès et contrats de sécurité."
                  ]
            },
            {
                  title: "9. Mineurs",
                  content: [
                        "Vistomio est destinée aux professionnels et n'est pas destinée aux mineurs. Nous ne collectons pas sciemment de données de mineurs."
                  ]
            },
            {
                  title: "10. Modifications de cette politique",
                  content: [
                        "Nous pouvons mettre à jour cette politique pour refléter des évolutions de nos pratiques."
                  ]
            },
            {
                  title: "11. Contact",
                  content: [
                        "Pour toute question : hello@vistomio.com"
                  ]
            }
      ],
      back: "← Retour à la page d'accueil"
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
          
          {curr.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">{section.title}</h2>
              <div className="space-y-2">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className={p.startsWith('•') ? 'ml-6' : ''}>
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
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
