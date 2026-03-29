import React from 'react';
import { colors, fonts, strings } from '../../../utils';

const developmentsImg = '/assets/images/developments.svg';
const projectsImg = '/assets/images/projects.svg';
const documentationImg = '/assets/images/documentation.svg';
const ownershipStructureImg = '/assets/images/ownershipstructure.svg';

const TrustSection: React.FC = () => {
  const cards = [
    { text: strings.trust.points[0], img: developmentsImg },
    { text: strings.trust.points[1], img: projectsImg },
    { text: strings.trust.points[2], img: documentationImg },
    { text: strings.trust.points[3], img: ownershipStructureImg }
  ];

  return (
    <section className="w-full relative flex flex-col items-center pt-24 pb-20 md:pb-32" style={{ backgroundColor: colors.background }}>
      <div className="w-full max-w-[1240px] px-6 flex flex-col items-center">
        {/* Title Block */}
        <div className="flex flex-col items-center text-center mt-6">
          <p
            style={{ fontFamily: fonts.body, color: colors.primary }}
            className="text-[24px] md:text-[32px] font-bold tracking-[-0.96px] leading-[1.19]"
          >
            {strings.trust.titleStart}
          </p>
          <p
            style={{ fontFamily: fonts.body, color: colors.secondary }}
            className="text-[32px] md:text-[54px] font-normal tracking-[-1.62px] leading-[1.19] mt-2 mb-10 md:mb-14"
          >
            {strings.trust.titleEnd}
          </p>
        </div>

        {/* Subtitle Block */}
        <div
          style={{ fontFamily: fonts.body, color: colors.secondary }}
          className="text-center text-[20px] md:text-[28px] font-normal tracking-[-0.84px] leading-[1.4] mb-12"
        >
          <p className="mb-0">{strings.trust.subtitleP1}</p>
          <p>{strings.trust.subtitleP2}</p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-[1082px] flex flex-wrap justify-center gap-4 md:gap-[12px] mb-16 md:mb-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{ borderColor: colors.border.secondary }}
              className="relative w-full md:w-[260px] h-[360px] border flex flex-col items-center pt-10 overflow-hidden"
            >
              <div
                style={{ fontFamily: fonts.body, color: colors.secondary }}
                className="text-center text-[18px] md:text-[22px] font-medium tracking-[-0.66px] leading-[1.4] z-10 px-4 whitespace-pre-line"
              >
                {card.text}
              </div>

              {/* Circular Image Container */}
              <div className="absolute bg-white rounded-full overflow-hidden w-[189px] h-[189px] bottom-[30px] left-1/2 -translate-x-1/2">
                <img src={card.img} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div
          style={{ fontFamily: fonts.body, color: colors.secondary }}
          className="text-center text-[20px] md:text-[32px] font-normal tracking-[-0.96px] leading-[1.4] max-w-[680px]"
        >
          {strings.trust.summary}
        </div>

        {/* Transitional Entry to Projects Section */}
        <div className="flex flex-col items-center mt-32 md:mt-44 pb-8 md:pb-16 text-center">
          <span
            className="text-[12px] md:text-[14px] font-medium tracking-[4.44px] uppercase mb-4"
            style={{ fontFamily: fonts.body, color: '#A27042' }}
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
