'use client';

import { motion } from 'framer-motion';
import { Smartphone, Download } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-surface via-dark-bg to-dark-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-h1 sm:text-[52px] font-bold mb-6 text-white">
            <span className="text-primary-cyan">Potencia</span> tus finanzas{' '}
            hoy
          </h2>
          <p className="text-h3 text-white mb-12 max-w-2xl mx-auto">
            Descarga gratis y empieza en menos de 2 minutos
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="/download"
              className="group relative inline-flex items-center justify-center bg-primary-cyan text-dark-bg px-10 py-6 rounded-card font-bold text-h4 hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="absolute -inset-1 bg-primary-cyan rounded-card blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center">
                <Download className="mr-3" size={28} />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <Smartphone size={20} />
                    <span>Descargar APK</span>
                  </div>
                  <div className="text-small font-normal opacity-80">
                    Android 6.0 o superior
                  </div>
                </div>
              </div>
            </a>
          </div>

          <p className="text-small text-text-tertiary">
            También disponible próximamente en{' '}
            <span className="text-primary-cyan">iOS</span> y{' '}
            <span className="text-primary-cyan">Web</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
