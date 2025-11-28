'use client';

import { motion } from 'framer-motion';
import { BarChart3, Wallet, Calendar, Cloud, Lock, FileDown, Calculator, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Calculator,
    title: 'Registra gastos en segundos',
    description: '34 iconos de categorías, calculadora integrada, fecha automática y búsqueda avanzada',
    image: '/screenshots/transaction-detail.png',
    bgColor: 'bg-primary-cyan/10',
    iconColor: 'text-primary-cyan',
  },
  {
    icon: Wallet,
    title: 'Presupuestos inteligentes',
    description: 'Alertas al 80% y 100%, progreso visual con barras y comparación mes a mes',
    image: '/screenshots/budget-detail.png',
    bgColor: 'bg-income-green/10',
    iconColor: 'text-income-green',
  },
  {
    icon: TrendingUp,
    title: 'Análisis profundo',
    description: 'Gráficas de pie y líneas, análisis por categorías y exportación a PDF/CSV',
    image: '/screenshots/analytics.png',
    bgColor: 'bg-info/10',
    iconColor: 'text-info',
  },
  {
    icon: Cloud,
    title: 'Sincronización cloud',
    description: 'Backup automático, funciona offline, sincronización en < 2 segundos con PostgreSQL',
    image: '/screenshots/cloud-sync.png',
    bgColor: 'bg-transport/10',
    iconColor: 'text-transport',
  },
  {
    icon: Shield,
    title: 'Seguridad bancaria',
    description: 'Huella digital o Face ID, código PIN, autenticación Google y encriptación end-to-end',
    image: '/screenshots/security.png',
    bgColor: 'bg-expense-red/10',
    iconColor: 'text-expense-red',
  },
  {
    icon: CheckCircle,
    title: 'Períodos flexibles',
    description: 'Analiza por mes, trimestre, año o período personalizado con exportación completa',
    image: '/screenshots/stats.png',
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
            Todo lo que <span className="text-primary-cyan">necesitas</span>
          </h2>
          <p className="text-h4 text-white max-w-2xl mx-auto">
            Control total de tus finanzas personales en una sola app
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
              className="bg-dark-surface rounded-card p-6 border border-primary-cyan/10 hover:border-primary-cyan/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Screenshot preview */}
              {feature.image && (
                <div className="relative aspect-[16/9] mb-4 rounded-button overflow-hidden bg-dark-bg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-button ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={feature.iconColor} size={24} />
              </div>
              
              <h3 className="text-h4 font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-body text-white leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
