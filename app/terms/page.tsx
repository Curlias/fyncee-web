import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 sm:text-[56px] font-bold mb-8">
            Términos de Servicio
          </h1>
          <p className="text-body text-text-secondary mb-12">
            Última actualización: 25 de noviembre de 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">1. Aceptación de términos</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Al descargar, instalar o usar Fyncee, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no deberías usar la aplicación.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">2. Uso del servicio</h2>
              <p className="text-body text-text-secondary leading-relaxed mb-4">
                Fyncee es una aplicación gratuita de finanzas personales. Te otorgamos una licencia limitada, no exclusiva y no transferible para usar la aplicación para tus propios fines personales.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                Te comprometes a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mt-4">
                <li>Usar la aplicación solo para fines legales</li>
                <li>No intentar acceder a cuentas de otros usuarios</li>
                <li>No realizar ingeniería inversa de la aplicación</li>
                <li>Mantener la seguridad de tu cuenta</li>
              </ul>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">3. Cuenta de usuario</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Para usar ciertas funciones de Fyncee, debes crear una cuenta. Eres responsable de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mt-4">
                <li>Mantener la confidencialidad de tu contraseña</li>
                <li>Todas las actividades que ocurran bajo tu cuenta</li>
                <li>Notificarnos inmediatamente de cualquier uso no autorizado</li>
              </ul>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">4. Propiedad intelectual</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Fyncee y todo su contenido, características y funcionalidad son propiedad de Fyncee y están protegidos por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">5. Tus datos</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Conservas todos los derechos sobre los datos que ingresas en Fyncee. Nos otorgas permiso para almacenar y procesar tus datos con el fin de proporcionar el servicio. Puedes exportar o eliminar tus datos en cualquier momento.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">6. Exención de garantías</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Fyncee se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos que la aplicación esté libre de errores o que funcione sin interrupciones. Usa la aplicación bajo tu propio riesgo.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">7. Limitación de responsabilidad</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                En ningún caso seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos, uso, fondo de comercio u otras pérdidas intangibles.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">8. Modificaciones del servicio</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Nos reservamos el derecho de modificar o discontinuar, temporal o permanentemente, el servicio (o cualquier parte del mismo) con o sin previo aviso.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">9. Terminación</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Podemos terminar o suspender tu acceso a Fyncee inmediatamente, sin previo aviso, si violas estos Términos de Servicio. Puedes terminar tu cuenta en cualquier momento eliminándola desde la configuración de la aplicación.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">10. Cambios a los términos</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cambios importantes mediante la aplicación o por email.
              </p>
            </div>

            <div className="bg-dark-surface rounded-card p-8">
              <h2 className="text-h3 font-bold mb-4">11. Contacto</h2>
              <p className="text-body text-text-secondary leading-relaxed">
                Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:{' '}
                <a href="mailto:legal@fyncee.app" className="text-primary-cyan hover:underline">
                  legal@fyncee.app
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
