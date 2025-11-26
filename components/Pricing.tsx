'use client';

import { motion } from 'framer-motion';
import { Check, Smartphone } from 'lucide-react';

const features = [
  'Transacciones ilimitadas',
  'Presupuestos ilimitados',
  'Sincronización en la nube',
  'Gráficas y estadísticas',
  'Exportación PDF/CSV',
  'Sin anuncios',
  'Sin límites',
  'Sin costos ocultos',
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-bg to-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-dark-surface rounded-card p-12 border-2 border-primary-cyan/30 shadow-2xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-cyan/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-primary-cyan/10 rounded-button text-primary-cyan font-bold mb-4">
                  OFERTA ESPECIAL - BETA
                </div>
                <h2 className="text-h1 font-bold mb-2 text-white">Completamente Gratis</h2>
                <p className="text-h4 text-white mb-2">Durante la fase Beta</p>
                <p className="text-body text-white/70">Después: $45 MXN/mes con todas las funciones</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-income-green/20 flex items-center justify-center">
                      <Check className="text-income-green" size={16} />
                    </div>
                    <span className="text-body text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/fyncee.apk"
                className="w-full inline-flex items-center justify-center bg-primary-cyan text-dark-bg px-8 py-5 rounded-button font-bold text-h4 hover:brightness-110 hover:scale-105 transition-all duration-300"
              >
                <Smartphone className="mr-3" size={24} />
                Descargar Ahora
              </a>

              <p className="text-center text-small text-white mt-6">
                🎉 Los usuarios Beta tendrán acceso gratuito de por vida
              </p>
              <p className="text-center text-small text-white/70 mt-2">
                También disponible próximamente en iOS y Web
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
