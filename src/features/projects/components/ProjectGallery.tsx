import React from 'react';
import { fonts } from '../../../utils/typography';

const galleryImages = [
  '/assets/projects/pj_Bedroom.svg',
  '/assets/projects/pj_Interior.svg',
  '/assets/projects/pj_Fernishing.svg',
];

const ProjectGallery: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-24 px-4 md:px-16 flex flex-col items-center gap-12 md:gap-20">
      <h3
        className="text-[28px] md:text-[44px] leading-[1.19] text-[#5A5550] tracking-[-0.84px] md:tracking-[-1.32px] text-center"
        style={{ fontFamily: fonts.heading }}
      >
        Project <span className="italic font-medium text-[#8D531E]">Gallery</span>
      </h3>

      {/* 3 square row on Desktop, scrollable on Mobile Node 640:1687 / 1026:439 */}
      <div className="w-full flex md:grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 overflow-x-auto no-scrollbar md:h-[530px]">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full md:w-auto h-[328px] md:h-full bg-[#dadada] overflow-hidden group cursor-pointer"
          >
            <img
              src={img}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 animate-in fade-in"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
