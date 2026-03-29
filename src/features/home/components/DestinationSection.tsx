import React from 'react';
import { colors, fonts, strings } from '../../../utils';

const DestinationSection: React.FC = () => {
  const statsList = [
    { value: strings.stats.legacy, label: strings.stats.legacyLabel },
    { value: strings.stats.families, label: strings.stats.familiesLabel },
    { value: strings.stats.projectsCount, label: strings.stats.projectsLabel },
  ];

  const galleryImages = [
    { src: '/assets/images/holi.svg', alt: 'Holi celebration' },
    { src: '/assets/images/Temple.svg', alt: 'Temple worship' },
    { src: '/assets/images/Vrindavan.svg', alt: 'Cultural dance' },
    { src: '/assets/images/Cultural.svg', alt: 'Spiritual gathering' },
  ];

  return (
    <section className="bg-white pt-[60px] pb-[100px] px-4 md:px-[60px]">
      {/* Stats Container */}
      <div className="flex flex-wrap items-center justify-center gap-[40px] md:gap-[120px] mb-[120px]">
        {statsList.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span
              style={{ fontFamily: fonts.body, color: colors.secondary }}
              className="text-[48px] md:text-[64px] font-normal leading-tight"
            >
              {stat.value}
            </span>
            <span
              style={{ fontFamily: fonts.body, color: colors.text.secondary }}
              className="text-[14px] md:text-[16px] font-normal tracking-wide"
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Destination Heading Content */}
      <div className="flex flex-col items-center text-center max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center mb-10">
          <span
            style={{
              fontFamily: fonts.body,
              color: colors.primary,
              letterSpacing: '0.2em'
            }}
            className="text-[12px] md:text-[14px] font-semibold uppercase opacity-80"
          >
            {strings.destination.tagline}
          </span>
          <div className="w-[60px] h-[2px] mt-2 bg-current opacity-30" style={{ color: colors.primary }} />
        </div>

        {/* Layered Heading Stack */}
        <div className="relative flex flex-col items-center justify-center w-full mb-6">
          <h2
            style={{
              fontFamily: fonts.heading,
              color: '#F0F0F0',
              lineHeight: 0.9
            }}
            className="text-[80px] md:text-[160px] lg:text-[200px] font-bold italic select-none"
          >
            {strings.destination.name}
          </h2>

          <div
            style={{ fontFamily: fonts.heading }}
            className="text-[22px] md:text-[42px] lg:text-[48px] pt-[10px] md:pt-[20px]"
          >
            <span className="text-[#0E57B7] font-medium">Where </span>
            <span className="text-[#0E57B7] font-medium mx-2">Every </span>
            <span className="text-[#8D531E] italic font-bold">Leela </span>
            <span className="text-[#0E57B7] font-medium ml-2">Began</span>
          </div>
        </div>

        {/* Spiritual Home Row (Pill + Images) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px] md:gap-[50px] mt-16 mb-20 w-full">
          {/* First two images */}
          <div className="flex items-center gap-[15px] md:gap-[25px]">
            {galleryImages.slice(0, 2).map((img, i) => (
              <div key={i} className="group relative w-[100px] md:w-[150px] lg:w-[170px] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-lg transition-all duration-500 hover:scale-110">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>

          {/* Spiritual Home Callout (Pill) */}
          <div
            className="px-[30px] md:px-[60px] py-[25px] md:py-[40px] rounded-full flex flex-col items-center shadow-sm border border-white/50 min-w-[300px] md:min-w-[500px]"
            style={{
              backgroundColor: colors.accentLight,
              background: 'linear-gradient(180deg, #E4EEFA 0%, #F5F9FF 100%)'
            }}
          >
            <p
              style={{ fontFamily: fonts.body, color: colors.text.secondary }}
              className="text-[14px] md:text-[18px] opacity-70 mb-1"
            >
              {strings.destination.spiritualHome}
            </p>
            <p
              style={{ fontFamily: fonts.heading, color: colors.accent }}
              className="text-[20px] md:text-[34px] font-bold italic tracking-tight"
            >
              {strings.destination.spiritualHomeBold}
            </p>
          </div>

          {/* Last two images */}
          <div className="flex items-center gap-[15px] md:gap-[25px]">
            {galleryImages.slice(2, 4).map((img, i) => (
              <div key={i} className="group relative w-[100px] md:w-[150px] lg:w-[170px] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-lg transition-all duration-500 hover:scale-110">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: fonts.body,
            color: colors.secondary,
            lineHeight: 1.8
          }}
          className="text-[16px] md:text-[21px] max-w-[800px] mx-auto opacity-90 font-light italic"
        >
          {strings.destination.description}
        </p>
      </div>
    </section>
  );
};

export default DestinationSection;
