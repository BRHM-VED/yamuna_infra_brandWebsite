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
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <DestinationSection />
      <RhythmSection />
      <RealityCheckSection />
      <TrustSection />
      <ProjectPreviewSection />
      <ResidentialEcosystemSection />
      <DesignConstructionSection />
      <FounderValuesSection />
      <InsightsSection />
      <StrategicLocationSection />
      <RisingVrindavanSection />
      <FooterSection />
    </main>
  );
}
