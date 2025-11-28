import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-dark-bg to-dark-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-h1 sm:text-[56px] font-bold mb-6 text-white">
              Descarga <span className="text-primary-cyan">Fyncee</span>
            </h1>
            <p className="text-h3 text-white max-w-2xl mx-auto">
              Comienza a controlar tus finanzas personales en menos de 2 minutos
            </p>
          </div>

          {/* Download Card */}
          <div className="bg-dark-surface rounded-card p-12 border-2 border-primary-cyan/30 mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-cyan/10 rounded-button mb-6">
                <Smartphone className="text-primary-cyan" size={40} />
              </div>
              <h2 className="text-h2 font-bold mb-2 text-white">Android APK</h2>
              <p className="text-h4 text-white">Compatible con Android 6.0 o superior</p>
            </div>

            <div className="max-w-md mx-auto space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-income-green flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-body font-bold mb-1 text-white">Instalación directa</p>
                  <p className="text-small text-white">
                    No requiere Google Play Store
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-income-green flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-body font-bold mb-1 text-white">Actualizaciones automáticas</p>
                  <p className="text-small text-white">
                    Recibe las últimas funcionalidades
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-income-green flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-body font-bold mb-1 text-white">100% seguro</p>
                  <p className="text-small text-white">
                    Sin malware ni adware
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Curlias/fyncee-web/releases/latest/download/fyncee.apk"
              className="w-full inline-flex items-center justify-center bg-primary-cyan text-dark-bg px-8 py-6 rounded-button font-bold text-h3 hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Download className="mr-3" size={28} />
              Descargar APK
            </a>
          </div>

          {/* Instructions */}
          <div className="bg-dark-surface rounded-card p-8">
            <h3 className="text-h3 font-bold mb-6 text-center text-white">Instrucciones de instalación</h3>
            <ol className="space-y-4 max-w-2xl mx-auto">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center text-primary-cyan font-bold">
                  1
                </span>
                <div>
                  <p className="text-body font-bold mb-1 text-white">Descarga el archivo APK</p>
                  <p className="text-small text-white">
                    Haz clic en el botón de descarga y espera a que termine
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center text-primary-cyan font-bold">
                  2
                </span>
                <div>
                  <p className="text-body font-bold mb-1">Permite instalación de origen desconocido</p>
                  <p className="text-small text-white">
                    En Ajustes → Seguridad, activa "Fuentes desconocidas"
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center text-primary-cyan font-bold">
                  3
                </span>
                <div>
                  <p className="text-body font-bold mb-1">Abre el archivo APK</p>
                  <p className="text-small text-white">
                    Desde tu gestor de descargas o archivos
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center text-primary-cyan font-bold">
                  4
                </span>
                <div>
                  <p className="text-body font-bold mb-1">Instala la app</p>
                  <p className="text-small text-white">
                    Sigue las instrucciones en pantalla
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-cyan/20 rounded-full flex items-center justify-center text-primary-cyan font-bold">
                  5
                </span>
                <div>
                  <p className="text-body font-bold mb-1">¡Listo para usar!</p>
                  <p className="text-small text-white">
                    Abre Fyncee y crea tu cuenta
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <p className="text-center text-body text-white mt-12">
            ¿Problemas con la instalación?{' '}
            <a href="mailto:support@fyncee.app" className="text-primary-cyan hover:underline">
              Contáctanos
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
