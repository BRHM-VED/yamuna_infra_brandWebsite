import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../layouts/Navbar';
import FooterSection from '../../home/components/FooterSection';
import ProjectHero from './ProjectHero';
import BelongingSection from './BelongingSection';
import AmenitiesSection from './AmenitiesSection';
import ProjectGallery from './ProjectGallery';
import ProjectStrategicLocationSection from './ProjectStrategicLocationSection';
import { getProjectDetail } from '../data/projectDetails';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => getProjectDetail(slug), [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Navbar />
      </header>

      <main className="pt-0">
        <ProjectHero imageSrc={project.heroImageSrc} title={project.heroTitle} />
        <BelongingSection
          headingBefore={project.belongingHeadingBefore}
          headingEmphasis={project.belongingHeadingEmphasis}
          description={project.belongingDescription}
          contentAddress={project.contentAddress}
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
