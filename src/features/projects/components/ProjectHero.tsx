import React from 'react';
import { fonts } from '../../../utils/typography';

const ProjectHero: React.FC = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[672px] bg-[#e3e3e3] overflow-hidden mt-20">
      <img
        src="/assets/projects/vrindaApartments.svg"
        alt="Vrinda Apartments"
        className="w-full h-full object-cover animate-in fade-in duration-1000 zoom-in-105"
      />

      {/* Optional Overlay Title from Node design if needed */}
      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center">
        {/* If we want to simulate the golden text if it doesn't exist in the asset */}
        <h1
          className="text-[40px] md:text-[80px] font-normal text-[#D4AF37] tracking-[0.2em] relative drop-shadow-2xl opacity-80"
          style={{ fontFamily: fonts.heading }}
        >
          VRINDA APARTMENTS
        </h1>
      </div>
    </section>
  );
};

export default ProjectHero;
