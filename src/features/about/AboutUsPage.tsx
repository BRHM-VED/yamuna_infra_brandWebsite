import { useEffect } from 'react';
import Navbar from '@/layouts/Navbar';
import AboutIntroHeroSection from './components/AboutIntroHeroSection';
import AboutCompanyOverviewSection from './components/AboutCompanyOverviewSection';
import AboutMomentsGallerySection from './components/AboutMomentsGallerySection';
import AboutAssociatesFounderSection from './components/AboutAssociatesFounderSection';
import AboutRecentNewsSection from './components/AboutRecentNewsSection';
import FooterSection from '../home/components/FooterSection';

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar mobileVariant="light" showNewProjectBanner mobileCollapsibleBanner />
      </header>

      <main>
        <AboutIntroHeroSection />
        <AboutCompanyOverviewSection />
        <AboutMomentsGallerySection />
        <AboutAssociatesFounderSection />
        <AboutRecentNewsSection />
      </main>
      <FooterSection />
    </div>
  );
}
