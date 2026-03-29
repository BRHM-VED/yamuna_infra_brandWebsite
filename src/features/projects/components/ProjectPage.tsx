import React, { useEffect } from 'react';
import Navbar from '../../../layouts/Navbar';
import FooterSection from '../../home/components/FooterSection';
import ProjectHero from './ProjectHero';
import BelongingSection from './BelongingSection';
import AmenitiesSection from './AmenitiesSection';
import ProjectGallery from './ProjectGallery';
import StrategicLocationSection from '@/features/home/components/StrategicLocationSection';

const ProjectPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <Navbar />
      </header>

      <main className="pt-16">
        <ProjectHero />
        <BelongingSection />
        <AmenitiesSection />
        <ProjectGallery />
        <StrategicLocationSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default ProjectPage;
