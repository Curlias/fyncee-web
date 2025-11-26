'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Zap, Users } from 'lucide-react';

const stats = [
  {
    icon: CheckCircle2,
    value: '10,000+',
    label: 'Transacciones Registradas',
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Uptime',
  },
  {
    icon: Clock,
    value: '< 2s',
    label: 'Sincronización Cloud',
  },
  {
    icon: Users,
    value: '100%',
    label: 'Gratis, Sin Anuncios',
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-dark-surface to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-button bg-primary-cyan/10 mb-4">
                <stat.icon className="text-primary-cyan" size={32} />
              </div>
              <div className="text-h2 font-bold text-primary-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-body text-white">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
