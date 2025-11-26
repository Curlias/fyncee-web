'use client';

import { motion } from 'framer-motion';
import { BarChart3, Wallet, Calendar, Cloud, Lock, FileDown } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Estadísticas en tiempo real',
    description: 'Visualiza tus gastos e ingresos al instante',
    bgColor: 'bg-primary-cyan/10',
    iconColor: 'text-primary-cyan',
  },
  {
    icon: Wallet,
    title: 'Presupuestos inteligentes',
    description: 'Crea límites por categoría y recibe alertas',
    bgColor: 'bg-income-green/10',
    iconColor: 'text-income-green',
  },
  {
    icon: Calendar,
    title: 'Períodos flexibles',
    description: 'Analiza por mes, trimestre, año o período personalizado',
    bgColor: 'bg-info/10',
    iconColor: 'text-info',
  },
  {
    icon: Cloud,
    title: 'Sincronización cloud',
    description: 'Tus datos seguros en Supabase PostgreSQL',
    bgColor: 'bg-transport/10',
    iconColor: 'text-transport',
  },
  {
    icon: Lock,
    title: 'Seguridad biométrica',
    description: 'Protege tu información con huella o Face ID',
    bgColor: 'bg-expense-red/10',
    iconColor: 'text-expense-red',
  },
  {
    icon: FileDown,
    title: 'Exportación PDF/CSV',
    description: 'Descarga tus reportes en múltiples formatos',
    bgColor: 'bg-warning/10',
    iconColor: 'text-warning',
  },
];

export default function Features() {
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
          <h2 className="text-h2 sm:text-[42px] font-bold mb-4 text-white">
            Características principales
          </h2>
          <p className="text-h4 text-white max-w-2xl mx-auto">
            Todo lo que necesitas para tomar control de tus finanzas personales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark-surface rounded-card p-8 border border-primary-cyan/10 hover:border-primary-cyan/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-button ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={feature.iconColor} size={28} />
              </div>
              <h3 className="text-h4 font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-body text-white leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
