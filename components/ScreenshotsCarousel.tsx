'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    src: '/screenshots/home.png',
    alt: 'Pantalla Principal',
    title: 'Balance y Transacciones',
    description: 'Vista general de tus finanzas con transacciones recientes'
  },
  {
    src: '/screenshots/add-transaction.png',
    alt: 'Agregar Transacción',
    title: 'Registro Rápido',
    description: 'Añade gastos e ingresos en segundos'
  },
  {
    src: '/screenshots/stats.png',
    alt: 'Estadísticas',
    title: 'Gráficas Visuales',
    description: 'Visualiza tus patrones de gasto con gráficas interactivas'
  },
  {
    src: '/screenshots/budgets.png',
    alt: 'Presupuestos',
    title: 'Control de Límites',
    description: 'Presupuestos mensuales con alertas inteligentes'
  },
  {
    src: '/screenshots/settings.png',
    alt: 'Configuración',
    title: 'Personalización',
    description: 'Ajusta la app a tus preferencias'
  },
  {
    src: '/screenshots/profile.png',
    alt: 'Perfil',
    title: 'Tu Cuenta',
    description: 'Gestiona tu información y sincronización'
  },
  {
    src: '/screenshots/categories.png',
    alt: 'Categorías',
    title: 'Categorías Personalizadas',
    description: 'Crea y organiza tus propias categorías'
  },
];

export default function ScreenshotsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold mb-4 text-white">
            Diseñada para la <span className="text-primary-cyan">simplicidad</span>
          </h2>
          <p className="text-h4 text-white max-w-2xl mx-auto">
            Interfaz intuitiva que hace el control financiero fácil y agradable
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main screenshot */}
          <div className="relative aspect-[9/19] max-w-sm mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full bg-gradient-to-br from-dark-surface to-dark-surface-light rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden"
              >
                <Image
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].alt}
                  fill
                  className="object-cover"
                />
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-primary-cyan/20 blur-3xl rounded-full -z-10"></div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-dark-surface hover:bg-dark-surface-light text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-dark-surface hover:bg-dark-surface-light text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Info */}
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-8"
          >
            <h3 className="text-h3 font-bold text-white mb-2">
              {screenshots[currentIndex].title}
            </h3>
            <p className="text-body text-white">
              {screenshots[currentIndex].description}
            </p>
          </motion.div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-cyan'
                    : 'w-2 bg-text-tertiary hover:bg-text-secondary'
                }`}
                aria-label={`Ir a screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
