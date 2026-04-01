import React from 'react';
import { fonts } from '../../../utils/typography';

export type ProjectHeroProps = {
  imageSrc: string;
  title: string;
  imageAlt?: string;
};

const ProjectHero: React.FC<ProjectHeroProps> = ({ imageSrc, title, imageAlt }) => {
  return (
    <section className="relative w-full h-[350px] md:h-[672px] bg-[#e3e3e3] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt ?? title}
        className="w-full h-full object-cover animate-in fade-in duration-1000 zoom-in-105"
      />

      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center">
        <h1
          className="text-[40px] md:text-[80px] font-normal text-[#D4AF37] tracking-[0.2em] relative drop-shadow-2xl opacity-80 text-center px-4"
          style={{ fontFamily: fonts.heading }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default ProjectHero;
