'use client';

import { motion } from 'framer-motion';
import { Smartphone, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg to-dark-surface pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-income-green/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-h1 sm:text-[56px] lg:text-[64px] font-bold mb-6 leading-tight text-white">
              Gestiona tus finanzas con{' '}
              <span className="text-primary-cyan">claridad</span>
            </h1>
            <p className="text-h4 sm:text-[24px] text-white mb-8 leading-relaxed">
              La app de finanzas personales más intuitiva con sincronización en la nube
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/fyncee.apk"
                className="inline-flex items-center justify-center bg-primary-cyan text-dark-bg px-8 py-4 rounded-button font-bold text-body hover:brightness-110 hover:scale-105 transition-all duration-300"
              >
                <Smartphone className="mr-2" size={20} />
                Descargar APK
              </a>
              <button className="inline-flex items-center justify-center border-2 border-primary-cyan text-primary-cyan px-8 py-4 rounded-button font-bold text-body hover:bg-primary-cyan/10 transition-all duration-300">
                <Play className="mr-2" size={20} />
                Ver Demo
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-small text-white">
              <div className="flex items-center gap-2">
                ✓ 100% Gratis
              </div>
              <div className="flex items-center gap-2">
                ✓ Sin Anuncios
              </div>
              <div className="flex items-center gap-2">
                ✓ Cloud Sync
              </div>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone mockup with screenshot */}
              <div className="aspect-[9/19] bg-gradient-to-br from-dark-surface to-dark-surface-light rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                <Image
                  src="/screenshots/hero-mockup.png"
                  alt="Fyncee App Screenshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary-cyan/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
