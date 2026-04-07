import React from 'react';
import { colors, fonts, strings } from '../../../utils';

const developmentsImg = '/assets/images/developments.webp';
const projectsImg = '/assets/images/projects.webp';
const documentationImg = '/assets/images/documentation.webp';
const ownershipStructureImg = '/assets/images/ownershipstructure.webp';

const TrustSection: React.FC = () => {
  const cards = [
    { text: strings.trust.points[0], img: developmentsImg },
    { text: strings.trust.points[1], img: projectsImg },
    { text: strings.trust.points[2], img: documentationImg },
    { text: strings.trust.points[3], img: ownershipStructureImg }
  ];

  return (
    // Developer note: Desktop node 705:23, Mobile node 728:430
    <section className="w-full relative flex flex-col items-center pt-10" style={{ backgroundColor: colors.background }}>
      <div className="w-full max-w-[1240px] px-4 md:px-6 flex flex-col items-center">
        {/* Top brand mark (matches Figma mobile 728:415) */}
 

        {/* Title Block */}
        <div className="flex flex-col items-center text-center mt-6">
          <p
            style={{ fontFamily: fonts.body, color: colors.primary }}
            className="text-[20px] md:text-[32px] font-bold tracking-[-0.6px] md:tracking-[-0.96px] leading-[1.19]"
          >
            {strings.trust.titleStart}
          </p>
          <p
            style={{ fontFamily: fonts.body, color: colors.secondary }}
            className="text-[28px] md:text-[54px] font-normal tracking-[-0.84px] md:tracking-[-1.62px] leading-[1.19] mt-2 mb-10 md:mb-14 max-w-[327px] md:max-w-none"
          >
            {strings.trust.titleEnd}
          </p>
        </div>

        {/* Subtitle Block */}
        <div
          style={{ fontFamily: fonts.body, color: colors.secondary }}
          className="text-center text-[14px] md:text-[28px] font-normal tracking-[-0.42px] md:tracking-[-0.84px] leading-[1.4] mb-12"
        >
          <p className="mb-0">{strings.trust.subtitleP1}</p>
          <p className="mb-0">{strings.trust.subtitleP2}</p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-[1082px] grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[12px] mb-16 md:mb-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{ borderColor: colors.border.secondary }}
              className="relative w-full h-[218px] md:h-[360px] border flex flex-col items-center overflow-hidden"
            >
              <div
                style={{ fontFamily: fonts.body, color: colors.secondary }}
                className="text-center text-[14px] md:text-[22px] font-medium tracking-[-0.42px] md:tracking-[-0.66px] leading-[1.4] z-10 px-3 md:px-4 whitespace-pre-line pt-[27px] md:pt-10 w-[150px] md:w-auto"
              >
                {card.text}
              </div>

              {/* Circular Image Container */}
              <div className="absolute bg-white rounded-full overflow-hidden size-[115px] md:w-[189px] md:h-[189px] top-[84px] md:top-auto md:bottom-[30px] left-1/2 -translate-x-1/2">
                <img src={card.img} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div
          style={{ fontFamily: fonts.body, color: colors.secondary }}
          className="text-center text-[14px] md:text-[32px] font-normal tracking-[-0.42px] md:tracking-[-0.96px] leading-[1.4] max-w-[309px] md:max-w-[680px]"
        >
          {strings.trust.summary}
        </div>

        {/* Transitional Entry to Projects Section */}
        <div className="flex flex-col items-center mt-32 md:mt-44 pb-8 md:pb-16 text-center">
          <span
            className="text-[12px] md:text-[14px] font-medium tracking-[4.44px] uppercase mb-4"
            style={{ fontFamily: fonts.body, color: colors.destinationTag }}
          >
            {strings.projects.tagline}
          </span>
          <h2
            style={{ fontFamily: fonts.heading, color: colors.secondary, letterSpacing: '-1.62px' }}
            className="text-[36px] md:text-[54px] leading-[1.19]"
          >
            <span className="italic font-medium">Communities </span>
            <span className="font-normal">We Are Building</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
