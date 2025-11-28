import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureSections from '@/components/FeatureSections';
import ScreenshotsCarousel from '@/components/ScreenshotsCarousel';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-dark-bg to-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-h1 sm:text-[56px] font-bold mb-6 text-white">
              Todas las <span className="text-primary-cyan">características</span>
            </h1>
            <p className="text-h3 text-white max-w-3xl mx-auto">
              Descubre todo lo que Fyncee puede hacer por tus finanzas personales
            </p>
          </div>
        </div>
      </section>

      <ScreenshotsCarousel />
      <FeatureSections />

      <Footer />
    </main>
  );
}
