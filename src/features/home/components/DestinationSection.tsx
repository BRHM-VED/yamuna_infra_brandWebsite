import React from 'react';
import { colors, fonts, strings } from '../../../utils';

const DestinationSection: React.FC = () => {
  const statsList = [
    { value: strings.stats.legacy, label: strings.stats.legacyLabel },
    { value: strings.stats.families, label: strings.stats.familiesLabel },
    { value: strings.stats.projectsCount, label: strings.stats.projectsLabel },
  ];

  const galleryImages = [
    { src: '/assets/images/vrindaAarti.svg', alt: 'Aarti' },
    { src: '/assets/images/Temple.svg', alt: 'Temple' },
    { src: '/assets/images/holi.svg', alt: 'Holi' },
    { src: '/assets/images/Cultural.svg', alt: 'Cultural' },
    { src: '/assets/images/Vrindavan.svg', alt: 'Vrindavan' },
    { src: '/assets/images/vrindaLand.svg', alt: 'Vrindavan land' },
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
        {/* Developer note: Mobile typography/spacing matches Figma (node 728:275) */}
        <div className="flex flex-col items-center gap-[18px]">
          <div className="flex flex-col items-center gap-[2px]">
            <span
              style={{
                fontFamily: fonts.body,
                color: colors.destinationTag,
                letterSpacing: '4.44px'
              }}
              className="text-[12px] font-medium uppercase"
            >
              {strings.destination.tagline}
            </span>
            <div className="h-[2.5px] w-[25.5px] opacity-60" style={{ backgroundColor: colors.primary }} />
          </div>

          <div className="flex flex-col items-center text-center gap-[15px] w-full">
            <h2
              style={{
                fontFamily: fonts.heading,
                backgroundImage: colors.gradient.vrindavanText,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                opacity: 0.7,
                letterSpacing: '-1.68px',
                lineHeight: 1.19
              }}
              className="text-[56px] md:text-[160px] font-bold italic w-full"
            >
              {strings.destination.name}
            </h2>

            <p
              style={{
                fontFamily: fonts.heading,
                backgroundImage: colors.gradient.brownBlue,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-0.48px',
                lineHeight: 1.19
              }}
              className="text-[16px] md:text-[42px] w-full"
            >
              {strings.destination.subtitle}
            </p>
          </div>
        </div>

        {/* Developer note: Mobile layout matches Figma (nodes 728:289, 728:300, 728:301) */}
        <div className="w-full mt-[54px] md:mt-16 mb-6 md:mb-20 flex flex-col items-center gap-[14px] md:gap-[40px]">
          {/* Mobile pill (card should come ABOVE images on mobile) */}
          <div
            className="md:hidden w-[328px] h-[82px] rounded-[60.8px] flex flex-col items-center justify-center relative overflow-hidden border"
            style={{ backgroundColor: colors.accentLight, borderColor: colors.border.light }}
          >
            <div className="flex flex-col items-center gap-[11px]">
              <p
                style={{ fontFamily: fonts.body, color: colors.secondary, letterSpacing: '-0.3679px' }}
                className="text-[12.25px] leading-[1.4] opacity-80"
              >
                {strings.destination.spiritualHome}
              </p>
              <p
                style={{ fontFamily: fonts.heading, color: colors.secondary, letterSpacing: '-0.5518px' }}
                className="text-[18.4px] leading-[1.38] font-semibold italic opacity-80 text-center"
              >
                {strings.destination.spiritualHomeBold}
              </p>
            </div>
          </div>

          {/* Mobile: 6 circular images (overscanned row like Figma) */}
          <div className="md:hidden w-[360px] overflow-hidden">
            <div className="w-[548px] flex items-center gap-[11px] ml-[-94px]">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="size-[82px] rounded-full overflow-hidden border bg-[#F1F1F1] shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                  style={{ borderColor: colors.border.light }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: keep existing “pill between image groups” concept */}
          <div className="hidden md:flex items-center justify-center gap-[24px] w-full">
            <div className="flex items-center gap-[25px]">
              {galleryImages.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  className="group relative w-[170px] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-lg transition-all duration-500 hover:scale-110"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>

            {/* Pill */}
            <div
              className="px-[50px] py-[40px] rounded-full flex flex-col items-center shadow-sm border min-w-[600px]"
              style={{
                background: 'linear-gradient(180deg, #E4EEFA 0%, #F5F9FF 100%)',
                borderColor: colors.border.light
              }}
            >
              <p
                style={{ fontFamily: fonts.body, color: colors.secondary, letterSpacing: '-0.3679px' }}
                className="text-[22px] leading-[1.4] opacity-80 mb-[11px] text-center"
              >
                {strings.destination.spiritualHome}
              </p>
              <p
                style={{ fontFamily: fonts.heading, color: colors.secondary, letterSpacing: '-0.5518px' }}
                className="text-[36px] font-semibold italic leading-[1.38] opacity-80 text-center"
              >
                {strings.destination.spiritualHomeBold}
              </p>
            </div>

            <div className="flex items-center gap-[25px]">
              {galleryImages.slice(3, 6).map((img, i) => (
                <div
                  key={i}
                  className="group relative w-[170px] aspect-square rounded-full overflow-hidden border-[6px] border-white shadow-lg transition-all duration-500 hover:scale-110"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: fonts.body,
            color: colors.secondary
          }}
          className="text-[14px] md:text-[24px] leading-[1.4] md:leading-[1.8] max-w-[800px] mx-auto opacity-90 font-normal md:font-light italic md:not-italic text-center tracking-[-0.42px] px-2 md:px-0 mt-[6px] md:mt-0"
        >
          <span className="block">Across continents and centuries, humanity has searched for</span>
          <span className="block">stillness amidst speed, meaning amidst noise, and</span>
          <span className="block">connection beyond the material.</span>
        </p>
      </div>
    </section>
  );
};

export default DestinationSection;
