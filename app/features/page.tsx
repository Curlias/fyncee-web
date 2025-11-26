import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-dark-bg to-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-h1 sm:text-[56px] font-bold mb-6 text-white">
              Todas las características
            </h1>
            <p className="text-h3 text-white max-w-3xl mx-auto">
              Descubre todo lo que Fyncee puede hacer por tus finanzas personales
            </p>
          </div>

          {/* Feature Sections */}
          <div className="space-y-24">
            {/* Transacciones */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-h2 font-bold mb-6 text-white">Registra gastos en segundos</h2>
                <p className="text-h4 text-white mb-8">
                  Añade ingresos y gastos de forma rápida con categorías visuales y notas opcionales
                </p>
                <ul className="space-y-4">
                  {['34 iconos de categorías diferentes', 'Calculadora integrada', 'Fecha y hora automáticas', 'Búsqueda y filtros avanzados'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-income-green flex-shrink-0 mt-1" size={20} />
                      <span className="text-body text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dark-surface rounded-card p-8 aspect-square flex items-center justify-center">
                <p className="text-white">Screenshot: Agregar transacción</p>
              </div>
            </div>

            {/* Presupuestos */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-dark-surface rounded-card p-8 aspect-square flex items-center justify-center">
                <p className="text-white">Screenshot: Presupuestos</p>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-h2 font-bold mb-6 text-white">Controla tus límites de gasto</h2>
                <p className="text-h4 text-white mb-8">
                  Define presupuestos mensuales o anuales y recibe alertas cuando te acerques al límite
                </p>
                <ul className="space-y-4">
                  {['Alertas al 80% y 100%', 'Progreso visual con barras', 'Comparación mes a mes', 'Reinicio automático mensual'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-income-green flex-shrink-0 mt-1" size={20} />
                      <span className="text-body text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Análisis */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-h2 font-bold mb-6 text-white">Entiende a dónde va tu dinero</h2>
                <p className="text-h4 text-white mb-8">
                  Visualiza tus patrones de gasto con gráficas interactivas y reportes detallados
                </p>
                <ul className="space-y-4">
                  {['Gráficas de pie y líneas', 'Análisis por categorías', 'Tendencias temporales', 'Exportación a PDF/CSV'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-income-green flex-shrink-0 mt-1" size={20} />
                      <span className="text-body text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dark-surface rounded-card p-8 aspect-square flex items-center justify-center">
                <p className="text-white">Screenshot: Estadísticas</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="/download"
              className="inline-flex items-center bg-primary-cyan text-dark-bg px-8 py-4 rounded-button font-bold text-h4 hover:brightness-110 hover:scale-105 transition-all duration-300"
            >
              Descargar ahora
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
