'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Es completamente gratis?',
    answer: 'Sí, Fyncee es 100% gratis, sin anuncios, sin compras dentro de la app y sin límites de uso. Todas las funcionalidades están disponibles desde el primer día.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Absolutamente. Usamos Supabase con PostgreSQL enterprise-grade, autenticación biométrica, Row-Level Security y encriptación. Tus datos financieros están protegidos al máximo nivel.',
  },
  {
    question: '¿Funciona sin internet?',
    answer: 'Sí, Fyncee funciona perfectamente offline. Todas tus transacciones se guardan localmente con Hive y se sincronizan automáticamente cuando tengas conexión.',
  },
  {
    question: '¿Puedo exportar mis datos?',
    answer: 'Sí, puedes exportar tus transacciones y reportes en formato PDF o CSV en cualquier momento. Tus datos son tuyos.',
  },
  {
    question: '¿Qué plataformas soporta?',
    answer: 'Actualmente Fyncee está disponible para Android (versión 6.0 o superior). Próximamente en iOS y web.',
  },
  {
    question: '¿Cómo funciona la sincronización?',
    answer: 'Fyncee se conecta a Supabase (PostgreSQL) y sincroniza tus datos automáticamente en segundo plano. Si no tienes internet, todo se guarda localmente y se sincroniza después.',
  },
  {
    question: '¿Puedo crear categorías personalizadas?',
    answer: 'Sí, además de las 20+ categorías predefinidas, puedes crear tus propias categorías con iconos y colores personalizados.',
  },
  {
    question: '¿Hay límite de transacciones?',
    answer: 'No, puedes registrar transacciones ilimitadas. Fyncee está diseñado para manejar miles de movimientos sin problemas de rendimiento.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 sm:text-[42px] font-bold mb-4 text-white">
            Preguntas frecuentes
          </h2>
          <p className="text-h4 text-white">
            Todo lo que necesitas saber sobre Fyncee
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-dark-surface rounded-card border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-surface-light transition-colors"
              >
                <span className="text-h4 font-bold pr-4 text-white">{faq.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 text-primary-cyan transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-body text-white leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
