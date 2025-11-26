import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 sm:text-[56px] font-bold mb-8">
            Política de Privacidad
          </h1>
          <p className="text-body text-text-secondary mb-12">
            Última actualización: 25 de noviembre de 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">1. Información que recopilamos</h2>
              <p className="text-body text-text-secondary leading-relaxed mb-4">
                Fyncee recopila la siguiente información:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Datos de transacciones financieras (montos, categorías, notas)</li>
                <li>Información de cuenta (email, nombre de usuario)</li>
                <li>Datos de uso de la aplicación para mejorar el servicio</li>
              </ul>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">2. Cómo usamos tu información</h2>
              <p className="text-body text-text-secondary leading-relaxed mb-4">
                Utilizamos tus datos para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Proporcionar y mantener el servicio de Fyncee</li>
                <li>Sincronizar tus datos entre dispositivos</li>
                <li>Mejorar y personalizar tu experiencia</li>
                <li>Enviar notificaciones importantes sobre tu cuenta</li>
              </ul>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">3. Seguridad de los datos</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Implementamos medidas de seguridad de nivel empresarial incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mt-4">
                <li>Encriptación end-to-end de tus datos financieros</li>
                <li>Row-Level Security en base de datos PostgreSQL</li>
                <li>Autenticación biométrica (huella digital/Face ID)</li>
                <li>Almacenamiento seguro en Supabase con respaldo automático</li>
              </ul>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">4. Compartir información</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Nunca vendemos tus datos personales a terceros. Solo compartimos información cuando:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mt-4">
                <li>Es requerido por ley</li>
                <li>Es necesario para proveer el servicio (ej: Supabase para almacenamiento)</li>
                <li>Tienes tu consentimiento explícito</li>
              </ul>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">5. Tus derechos</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mt-4">
                <li>Acceder a todos tus datos almacenados</li>
                <li>Exportar tus datos en formato PDF o CSV</li>
                <li>Eliminar tu cuenta y todos los datos asociados</li>
                <li>Solicitar correcciones a tus datos</li>
              </ul>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">6. Cookies y tecnologías similares</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Usamos cookies y tecnologías similares para mejorar tu experiencia, mantener tu sesión activa y analizar el uso de la aplicación.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">7. Cambios a esta política</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Nos reservamos el derecho de actualizar esta política de privacidad. Te notificaremos sobre cambios importantes mediante la aplicación o por email.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">8. Contacto</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad, contáctanos en:{' '}
                <a href="mailto:privacy@fyncee.app" className="text-primary-cyan hover:underline">
                  privacy@fyncee.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
