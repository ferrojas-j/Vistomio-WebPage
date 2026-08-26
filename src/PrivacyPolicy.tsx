import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-boutique-offwhite py-20 px-4 sm:px-6 lg:px-8 font-sans text-boutique-navy">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-boutique-navy">Política de Privacidad y Tratamiento de Datos</h1>
        <p className="text-sm text-gray-500 mb-10 italic">Última actualización: 26 de agosto de 2026</p>

        <div className="space-y-8 text-boutique-navy/80 leading-relaxed">
          <p>
            En Le Filament ("nosotros", "nuestro" o "la Plataforma"), valoramos la privacidad de nuestros usuarios y nos comprometemos a proteger los datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y demás normativas aplicables.
          </p>
          <p>
            Esta política explica cómo recopilamos, usamos, procesamos y protegemos la información cuando utilizas nuestro software de gestión hotelera (PMS, POS y ERP).
          </p>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">1. Identidad del Responsable del Tratamiento</h2>
            <p><strong>Titular legal:</strong> Le Filament (Empresa registrada en Francia)</p>
            <p><strong>Correo de contacto para privacidad:</strong> <a href="mailto:hello@vistomio.com" className="text-[#C6A15B] hover:underline">hello@vistomio.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">2. Nuestro Rol en el Procesamiento de Datos</h2>
            <p className="mb-2">Dado que nuestro software es una herramienta de gestión para hoteles, operamos bajo dos roles distintos según el RGPD:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Como Responsable del Tratamiento:</strong> Cuando recopilamos la información personal y de facturación de los usuarios (administradores o propietarios de hoteles) que registran una cuenta en nuestra plataforma.</li>
              <li><strong>Como Encargado del Tratamiento:</strong> Cuando procesamos datos de los huéspedes finales, inventario, habitaciones y tarifas en nombre del hotel. El hotel (nuestro cliente) es el Responsable del Tratamiento de estos datos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">3. Qué datos recopilamos y de dónde provienen</h2>
            <p className="mb-2">Recopilamos información de las siguientes maneras:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de registro y cuenta:</strong> Nombre, correo electrónico, datos de contacto y detalles del establecimiento hotelero al crear una cuenta.</li>
              <li><strong>Datos de gestión operativa:</strong> Información sobre habitaciones, tarifas, disponibilidad y operativas diarias. Para esto, podemos conectarnos a las herramientas y canales preexistentes del usuario, importando y consolidando esta información en nuestro sistema.</li>
              <li><strong>Datos de terceros (Optativos):</strong> Si el usuario decide habilitar integraciones adicionales, procesaremos los datos necesarios para su funcionamiento (por ejemplo, tokens de conexión).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">4. Finalidad: ¿Para qué usamos los datos?</h2>
            <p className="mb-2">Utilizamos la información exclusivamente para garantizar el funcionamiento del servicio, incluyendo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveer el software PMS, POS y ERP, procesando la información para consolidarla y mostrarla de manera sencilla en el día a día.</li>
              <li>Facilitar la gestión de reservas, inventario y facturación del establecimiento.</li>
              <li>Mantener la seguridad de la plataforma, evitar fraudes y proporcionar soporte técnico.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">5. Integraciones de Terceros y Proveedores de Infraestructura</h2>
            <p className="mb-2">No vendemos ni alquilamos datos a terceros. Solo compartimos la información estrictamente necesaria con proveedores tecnológicos que nos ayudan a operar, quienes también cumplen con los más altos estándares de seguridad y el RGPD:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Infraestructura:</strong> Nuestros servidores y bases de datos están alojados en Hostinger y Supabase, utilizando conexiones cifradas para garantizar la seguridad de la información.</li>
              <li>
                <strong>Integraciones opcionales a petición del usuario:</strong> Si el usuario decide habilitar funciones adicionales, los datos pueden transitar por servicios de terceros. Por ejemplo:
                <ul className="list-[circle] pl-6 mt-2 space-y-2 text-sm">
                  <li><strong>Stripe:</strong> Si el usuario conecta su cuenta para procesar pagos de forma directa.</li>
                  <li><strong>WhatsApp Business API:</strong> Si el usuario decide activar el chatbot o la mensajería automatizada para sus huéspedes.</li>
                </ul>
                <p className="text-sm italic mt-2">(Estas integraciones solo se activan por voluntad y configuración explícita del usuario).</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">6. Seguridad de los Datos</h2>
            <p>
              Aplicamos medidas técnicas y organizativas para proteger la información contra accesos no autorizados, pérdida o alteración. Esto incluye el cifrado de datos, respaldos regulares y controles de acceso estrictos en nuestras bases de datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">7. Retención de los Datos</h2>
            <p>
              Conservaremos los datos personales de la cuenta mientras el usuario mantenga una suscripción activa. Si el usuario decide darse de baja, los datos se eliminarán o anonimizarán en un plazo razonable, salvo aquellos que debamos retener por obligaciones legales, fiscales o contables en Francia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-serif mb-3 text-boutique-navy">8. Derechos de los Usuarios (Derechos ARCO y RGPD)</h2>
            <p className="mb-2">Los usuarios (titulares de la cuenta en Le Filament) tienen derecho en cualquier momento a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a los datos personales que tenemos sobre ellos.</li>
              <li>Rectificar cualquier dato inexacto o incompleto.</li>
              <li>Solicitar la eliminación de su cuenta y sus datos (Derecho al olvido).</li>
              <li>Oponerse al procesamiento o solicitar la restricción del mismo.</li>
              <li>Solicitar la portabilidad de sus datos en un formato estructurado.</li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, el usuario debe enviar una solicitud detallada a <a href="mailto:hello@vistomio.com" className="text-[#C6A15B] hover:underline">hello@vistomio.com</a>. Responderemos en el plazo establecido por la ley.
            </p>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
          <button 
            onClick={() => window.location.hash = ''}
            className="text-sm font-semibold text-boutique-navy hover:text-[#C6A15B] transition-colors flex items-center gap-2"
          >
            ← Volver a la página principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
