import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../features/home/components/HeroSection';
import DestinationSection from '../features/home/components/DestinationSection';
import RhythmSection from '../features/home/components/RhythmSection';
import RealityCheckSection from '../features/home/components/RealityCheckSection';
import TrustSection from '../features/home/components/TrustSection';
import ProjectPreviewSection from '../features/home/components/ProjectPreviewSection';
import ResidentialEcosystemSection from '../features/home/components/ResidentialEcosystemSection';
import DesignConstructionSection from '../features/home/components/DesignConstructionSection';
import FounderValuesSection from '../features/home/components/FounderValuesSection';
import InsightsSection from '../features/home/components/InsightsSection';
import StrategicLocationSection from '../features/home/components/StrategicLocationSection';
import RisingVrindavanSection from '../features/home/components/RisingVrindavanSection';
import FooterSection from '../features/home/components/FooterSection';

export default function Home() {
  const location = useLocation();

  // When opening `/` with a hash (e.g. from another page), scroll to that section after paint.
  useEffect(() => {
    const raw = location.hash.replace(/^#/, '');
    if (!raw) return;
    const id = decodeURIComponent(raw);
    const raf = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(raf);
  }, [location.pathname, location.hash]);

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <DestinationSection />
        {/* <RhythmSection /> */}
      <RealityCheckSection />
      <TrustSection />
      <ProjectPreviewSection />
      <ResidentialEcosystemSection />
      {/* Figma order: Verified construction → Strategic location → Rising Vrindavan (705:572 area, then location + map, then rising) */}
      <DesignConstructionSection />
      <StrategicLocationSection />
      <RisingVrindavanSection />
      <FounderValuesSection />
      <InsightsSection />
      <FooterSection />
    </main>
  );
}
