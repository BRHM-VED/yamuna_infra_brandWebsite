import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../layouts/Navbar';
import FooterSection from '../../home/components/FooterSection';
import ProjectHero from './ProjectHero';
import BelongingSection from './BelongingSection';
import AmenitiesSection from './AmenitiesSection';
import ProjectGallery from './ProjectGallery';
import ProjectStrategicLocationSection from './ProjectStrategicLocationSection';
import { useProjectFirestore } from '../hooks/useProjectFirestore';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { project, isLoading } = useProjectFirestore(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading || !project) return null;

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar mobileVariant="light" showNewProjectBanner mobileCollapsibleBanner />
      </header>

      {/* Offset for fixed navbar (mobile + desktop) */}
      <main className="pt-[100px] md:pt-[93px]">
        <ProjectHero imageSrc={project.heroImageSrc} imageAlt={project.heroTitle} />
        <BelongingSection
          projectTitle={project.heroTitle}
          headingBefore={project.belongingHeadingBefore}
          headingEmphasis={project.belongingHeadingEmphasis}
          description={project.belongingDescription}
        />
        <AmenitiesSection />
        <ProjectGallery images={project.galleryImages} />
        <ProjectStrategicLocationSection
          address={project.strategicAddress}
          mapLat={project.mapLat}
          mapLng={project.mapLng}
          googleMapsShareUrl={project.googleMapsShareUrl}
        />
      </main>

      <FooterSection />
    </div>
  );
};

export default ProjectPage;
