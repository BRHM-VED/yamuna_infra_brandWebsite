import React from 'react';
import type { ProjectDetail } from '../services/projectsFirestore';
import ProjectHero from './ProjectHero';
import BelongingSection from './BelongingSection';
import AmenitiesSection from './AmenitiesSection';
import ProjectGallery from './ProjectGallery';
import ProjectStrategicLocationSection from './ProjectStrategicLocationSection';

export type ProjectPageViewProps = {
  project: ProjectDetail;
};

/**
 * Project detail body — composed like Home sections, kept out of `pages/` for consistency.
 */
const ProjectPageView: React.FC<ProjectPageViewProps> = ({ project }) => (
  <>
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
  </>
);

export default ProjectPageView;
