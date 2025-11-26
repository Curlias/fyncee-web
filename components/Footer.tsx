'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Fyncee Logo" width={40} height={40} className="rounded-xl" />
              <span className="text-h4 font-bold text-primary-cyan">Fyncee</span>
            </Link>
            <p className="text-body text-white mb-4">
              Gestiona tus finanzas con claridad
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-h4 font-bold mb-4 text-white">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-body text-white hover:text-primary-cyan transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-body text-white hover:text-primary-cyan transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-body text-white hover:text-primary-cyan transition-colors">
                  Descargar
                </Link>
              </li>
              <li>
                <a href="mailto:contact@fyncee.app" className="text-body text-white hover:text-primary-cyan transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-h4 font-bold mb-4 text-white">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-body text-white hover:text-primary-cyan transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-body text-text-secondary hover:text-primary-cyan transition-colors">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="text-body text-text-secondary hover:text-primary-cyan transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-h4 font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-body text-white hover:text-primary-cyan transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-body text-text-secondary hover:text-primary-cyan transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <a href="#" className="text-body text-text-secondary hover:text-primary-cyan transition-colors">
                  Licencias
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body text-white text-center md:text-left">
              © {currentYear} Fyncee. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2 text-body text-white">
              Potenciado con la tecnología de{' '}
              <a 
                href="https://veldrion.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 font-bold hover:text-orange-400 transition-colors"
              >
                Veldrion
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
