import React from 'react';

export type ProjectHeroProps = {
  imageSrc: string;
  imageAlt?: string;
};

const ProjectHero: React.FC<ProjectHeroProps> = ({ imageSrc, imageAlt }) => {
  return (
    <section className="relative w-full h-[300px] md:h-[672px] bg-[#e3e3e3] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt ?? ''}
        className="w-full h-full object-cover animate-in fade-in duration-1000 zoom-in-105"
      />
    </section>
  );
};

export default ProjectHero;
