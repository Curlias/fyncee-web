'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const featureSections = [
  {
    title: 'Registra gastos en segundos',
    description: 'Añade ingresos y gastos de forma rápida con categorías visuales y notas opcionales',
    image: '/screenshots/transaction-detail.png',
    benefits: [
      '34 iconos de categorías diferentes',
      'Calculadora integrada',
      'Fecha y hora automáticas',
      'Búsqueda y filtros avanzados',
    ],
    reverse: false,
  },
  {
    title: 'Controla tus límites de gasto',
    description: 'Define presupuestos mensuales o anuales y recibe alertas cuando te acerques al límite',
    image: '/screenshots/budget-detail.png',
    benefits: [
      'Alertas al 80% y 100%',
      'Progreso visual con barras',
      'Comparación mes a mes',
      'Reinicio automático mensual',
    ],
    reverse: true,
  },
  {
    title: 'Entiende a dónde va tu dinero',
    description: 'Visualiza tus patrones de gasto con gráficas interactivas y reportes detallados',
    image: '/screenshots/analytics.png',
    benefits: [
      'Gráficas de pie y líneas',
      'Análisis por categorías',
      'Tendencias temporales',
      'Exportación a PDF/CSV',
    ],
    reverse: false,
  },
  {
    title: 'Tus datos, siempre seguros',
    description: 'Sincronización automática con Supabase. Accede desde cualquier dispositivo sin perder información',
    image: '/screenshots/cloud-sync.png',
    benefits: [
      'Backup automático en la nube',
      'Funciona offline',
      'Sincronización en < 2 segundos',
      'PostgreSQL enterprise-grade',
    ],
    reverse: true,
  },
  {
    title: 'Protección de nivel bancario',
    description: 'Autenticación biométrica, código PIN y Row-Level Security en base de datos',
    image: '/screenshots/security.png',
    benefits: [
      'Huella digital o Face ID',
      'Código PIN personalizado',
      'Autenticación con Google',
      'Encriptación end-to-end',
    ],
    reverse: false,
  },
];

export default function FeatureSections() {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-h2 font-bold mb-4 text-white">
            Funcionalidades que <span className="text-primary-cyan">marcan la diferencia</span>
          </h2>
          <p className="text-h4 text-white max-w-2xl mx-auto">
            Todo lo que necesitas para tomar control total de tus finanzas personales
          </p>
        </motion.div>

        <div className="space-y-32">
          {featureSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                section.reverse ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={section.reverse ? 'lg:col-start-2' : ''}>
                <h3 className="text-h3 font-bold text-white mb-4">
                  {section.title}
                </h3>
                <p className="text-body text-white mb-8">
                  {section.description}
                </p>
                <ul className="space-y-4">
                  {section.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-income-green/20 flex items-center justify-center mt-0.5">
                        <Check size={16} className="text-income-green" />
                      </div>
                      <span className="text-body text-white">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={section.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="relative aspect-[9/19] max-w-sm mx-auto">
                  <div className="relative w-full h-full bg-gradient-to-br from-dark-bg to-dark-surface rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-primary-cyan/10 blur-3xl rounded-full -z-10"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
