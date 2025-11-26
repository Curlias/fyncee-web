'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  { name: 'Flutter', description: 'Framework multiplataforma de Google', logo: '🦋' },
  { name: 'Supabase', description: 'Backend as a Service', logo: '⚡' },
  { name: 'PostgreSQL', description: 'Base de datos relacional', logo: '🐘' },
  { name: 'Hive', description: 'Base de datos local NoSQL', logo: '📦' },
  { name: 'Material 3', description: 'Sistema de diseño de Google', logo: '🎨' },
  { name: 'Google Auth', description: 'Autenticación segura', logo: '🔐' },
];

export default function TechStack() {
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
          <h2 className="text-h2 sm:text-[42px] font-bold mb-4">
            Tecnologías modernas
          </h2>
          <p className="text-h4 text-text-secondary max-w-2xl mx-auto">
            Construido con las mejores herramientas del mercado
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-surface rounded-card p-6 border border-white/5 hover:border-primary-cyan/30 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{tech.logo}</div>
              <h3 className="text-h4 font-bold mb-2">{tech.name}</h3>
              <p className="text-body text-text-secondary">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
