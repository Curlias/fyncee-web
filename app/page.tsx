import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ScreenshotsCarousel from '@/components/ScreenshotsCarousel';
import Stats from '@/components/Stats';
import TechStack from '@/components/TechStack';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ScreenshotsCarousel />
      <Stats />
      <TechStack />
      <Pricing />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
