import React from 'react';
import { fonts } from '../../../utils/typography';

export type ProjectGalleryProps = {
  images: readonly [string, string, string];
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  return (
    <section className="bg-white px-4 md:px-[40px] pb-[112px]">
      <h3
        className="text-[28px] md:text-[44px] leading-[1.19] text-[#5A5550] tracking-[-0.84px] md:tracking-[-1.32px] text-center"
        style={{ fontFamily: fonts.heading }}
      >
        Project <span className="italic font-medium text-[#8D531E]">Gallery</span>
      </h3>

      <div className="hidden md:grid w-full grid-cols-3 gap-[12px] pt-[49px]">
        {images.map((img, idx) => (
          <div key={`${img}-${idx}`} className="h-[530px] w-full overflow-hidden bg-[#dadada]">
            <img src={img} alt={`Gallery image ${idx + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="md:hidden pt-12">
        <div className="flex gap-[8px] overflow-x-auto no-scrollbar scroll-smooth">
          {images.map((img, idx) => (
            <div key={`${img}-${idx}`} className="shrink-0 w-[328px] h-[328px] overflow-hidden bg-[#dadada]">
              <img src={img} alt={`Gallery image ${idx + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
