import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-dark-bg to-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-h1 sm:text-[56px] font-bold mb-6 text-white">
              Contáctanos
            </h1>
            <p className="text-h3 text-white max-w-2xl mx-auto">
              ¿Tienes dudas o necesitas ayuda? Estamos aquí para ti
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="bg-dark-surface rounded-card p-8 border border-primary-cyan/10 text-center">
              <div className="w-16 h-16 rounded-button bg-primary-cyan/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-cyan" size={32} />
              </div>
              <h3 className="text-h4 font-bold mb-2 text-white">Email</h3>
              <a 
                href="mailto:hi@fyncee.app" 
                className="text-primary-cyan hover:underline text-body"
              >
                hi@fyncee.app
              </a>
            </div>

            {/* Horario */}
            <div className="bg-dark-surface rounded-card p-8 border border-primary-cyan/10 text-center">
              <div className="w-16 h-16 rounded-button bg-income-green/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-income-green" size={32} />
              </div>
              <h3 className="text-h4 font-bold mb-2 text-white">Horario</h3>
              <p className="text-white text-body">
                9:00 - 17:00
                <br />
                <span className="text-text-secondary text-small">UTC-6</span>
              </p>
            </div>

            {/* Respuesta */}
            <div className="bg-dark-surface rounded-card p-8 border border-primary-cyan/10 text-center">
              <div className="w-16 h-16 rounded-button bg-info/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-info" size={32} />
              </div>
              <h3 className="text-h4 font-bold mb-2 text-white">Respuesta</h3>
              <p className="text-white text-body">
                En menos de
                <br />
                <span className="text-primary-cyan font-bold">24 horas</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-surface rounded-card p-8 border border-primary-cyan/10">
            <h2 className="text-h3 font-bold mb-6 text-white text-center">
              Envíanos un mensaje
            </h2>
            
            <form className="space-y-6" action="mailto:hi@fyncee.app" method="POST" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-body font-semibold mb-2 text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-button bg-dark-bg border border-white/10 text-white focus:border-primary-cyan focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-body font-semibold mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-button bg-dark-bg border border-white/10 text-white focus:border-primary-cyan focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-body font-semibold mb-2 text-white">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-button bg-dark-bg border border-white/10 text-white focus:border-primary-cyan focus:outline-none transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-body font-semibold mb-2 text-white">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-button bg-dark-bg border border-white/10 text-white focus:border-primary-cyan focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos más detalles..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-cyan text-dark-bg px-8 py-4 rounded-button font-bold text-body hover:brightness-110 hover:scale-105 transition-all duration-300"
              >
                Enviar mensaje
              </button>

              <p className="text-center text-small text-text-secondary">
                También puedes escribirnos directamente a{' '}
                <a href="mailto:hi@fyncee.app" className="text-primary-cyan hover:underline">
                  hi@fyncee.app
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
