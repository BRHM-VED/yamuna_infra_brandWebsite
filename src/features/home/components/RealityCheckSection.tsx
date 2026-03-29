import React from 'react';
import { colors, fonts, strings } from '../../../utils';

// Asset Paths (Point to public/assets/images)
const buildingIcon = '/assets/images/building.svg';
const hookIcon = '/assets/images/hook.svg';
const documentIcon = '/assets/images/document.svg';
const flagCircle = '/assets/images/flagCircle.svg';
const featherIcon = '/assets/images/feather.svg';
const realityCheckBg = '/assets/images/realityCheckBg.svg';
const syLogo = '/assets/images/logo.svg';

const RealityCheckSection: React.FC = () => {
  const cards = [
    { title: strings.realityCheck.card1, icon: buildingIcon },
    { title: strings.realityCheck.card2, icon: hookIcon },
    { title: strings.realityCheck.card3, icon: documentIcon },
  ];

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* 1. Global Echo Header Section */}
      <div className="relative w-full flex flex-col items-center text-center">
        {/* Full-width Flag Circle Area */}
        <div className="relative w-full min-h-[500px] md:min-h-[750px] lg:min-h-[820px] flex items-center justify-center overflow-hidden">
          {/* Flag Circle Image Background */}
          <div
            className="absolute mt-10 inset-0 pointer-events-none z-0"
            style={{
              background: `url(${flagCircle}) lightgray 0px -521.905px / 100% 228.256% no-repeat`,
              maskImage: 'radial-gradient(ellipse, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)'
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full">
            <h2
              style={{
                fontFamily: fonts.body, // Instrument Sans from Figma 705:436
                color: colors.secondary,
                fontSize: 'clamp(28px, 4vw, 44.46px)',
                lineHeight: 1.19,
                letterSpacing: '-1.33px',
                fontWeight: 400
              }}
              className="max-w-[320px] md:max-w-[700px] mb-2"
            >
              A city whose name<br />echoes across continents.
            </h2>

            {/* Wavy Line Separator (Ref: 705:437) */}
            <div className="relative h-[10px] w-[54px] my-4 md:my-6 overflow-hidden flex items-center justify-center">
              <svg width="54" height="6" viewBox="0 0 54 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.5C5.5 4.5 9.5 1.5 14 1.5C18.5 1.5 22.5 4.5 27 4.5C31.5 4.5 35.5 1.5 40 1.5C44.5 1.5 48.5 4.5 53 4.5" stroke="#946E46" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>

            <p
              style={{
                fontFamily: fonts.body,
                color: colors.text.secondary,
                fontSize: 'clamp(16px, 1.5vw, 22px)',
                lineHeight: 1.3,
                letterSpacing: '-0.66px',
                fontWeight: 400
              }}
              className="max-w-[300px] md:max-w-[550px]"
            >
              A place where seekers from around the world arrive in search of <span className="font-semibold" style={{ color: '#000' }}>something deeper.</span>
            </p>
          </div>
        </div>
      </div>

      {/* 2. Journey & Reality Check (Unified Feather Background Stack) */}
      <div className="relative w-full flex flex-col items-center">

        {/* Full-width Feather Background Section */}
        <div className="relative w-full flex flex-col items-center overflow-hidden pt-20 md:pt-32 pb-48 md:pb-56">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={featherIcon}
              alt="Feather Background"
              className="w-full h-full object-cover object-top opacity-100"
            />
          </div>

          {/* Overlay Stack */}
          <div className="relative z-10 flex flex-col items-center w-full px-6 text-center">

            {/* Journey Text */}
            <div className="flex flex-col items-center gap-2 mb-20 md:mb-28 mt-8 md:mt-12">
              <p
                style={{ fontFamily: fonts.body, color: colors.text.secondary }}
                className="text-[14px] md:text-[20px] italic opacity-60"
              >
                Because no matter where the journey begins…
              </p>
              <p
                style={{ fontFamily: fonts.body, color: colors.accent }}
                className="font-medium text-[18px] md:text-[24px]"
              >
                All roads of the soul lead to{' '}
                <span className="italic font-bold" style={{ color: '#004BB3' }}>
                  Vrindavan.
                </span>
              </p>
            </div>

            {/* Reality Check Title */}
            <div className="mb-16 md:mb-24">
              <h3
                style={{
                  fontFamily: fonts.heading,
                  color: colors.secondary,
                  fontSize: 'clamp(32px, 8vw, 54px)',
                  lineHeight: 1.19,
                  letterSpacing: '-1.62px'
                }}
                className="font-extrabold italic mb-0"
              >
                Reality Check
              </h3>
              <p
                style={{
                  fontFamily: fonts.heading,
                  color: colors.secondary,
                  fontSize: 'clamp(32px, 8vw, 54px)',
                  lineHeight: 1.19,
                  letterSpacing: '-1.62px'
                }}
                className="font-normal"
              >
                Before You Invest
              </p>
            </div>

            {/* Growth Text */}
            <div className="space-y-1">
              <p
                style={{
                  fontFamily: fonts.body,
                  color: colors.realityCheck.emphasisBrown,
                  fontSize: 'clamp(20px, 4vw, 46.317px)',
                  lineHeight: 1.09,
                  fontWeight: 600
                }}
                className="opacity-100 mb-0"
              >
                As Vrindavan began to grow,
              </p>
              <p
                style={{
                  fontFamily: fonts.body,
                  color: colors.realityCheck.emphasisBrown,
                  fontSize: 'clamp(28px, 6vw, 66.58px)',
                  lineHeight: 1.09,
                  fontWeight: 600
                }}
                className="leading-tight"
              >
                something else grew with it.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Reality Cards Section (Panorama Strip) */}
      <div className="relative w-full z-20 flex flex-col items-center mt-[-160px] md:mt-[-140px]">

        {/* Reality Cards Stack (Overlayed overlapping top boundary) */}
        <div className="relative z-20 w-full max-w-[1100px] px-6 mb-[-160px] md:mb-[-280px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: '#2D2E24' }}
                className="group relative h-[320px] md:h-[420px] p-10 flex flex-col items-center justify-start text-center overflow-hidden transition-all duration-700 hover:scale-[1.02] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
              >
                <div
                  style={{ fontFamily: fonts.body, color: colors.realityCheck.cardText }}
                  className="text-[16px] md:text-[22px] font-bold tracking-[0.2em] leading-[1.3] z-10 mt-6 md:mt-10 uppercase"
                >
                  {card.title}
                </div>

                <div className="absolute inset-0 flex items-end justify-center pointer-events-none opacity-[0.05] pb-10 grayscale brightness-200">
                  <img src={card.icon} alt="" className="w-4/5 h-auto object-contain transition-transform duration-1000 group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panorama Strip Background (Node 705:28 - Image 143) */}
        <div className="relative w-full h-[350px] md:h-[473px] z-10 pointer-events-none">
          <img
            src={realityCheckBg}
            alt="Yamuna Panorama"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Brand Presence at Bottom */}
      <div className="relative w-full mt-16 md:mt-24 pb-16 md:pb-24 flex justify-center">
        <img src={syLogo} alt="SY" className="w-16 h-auto opacity-100" />
      </div>
    </section>
  );
};

export default RealityCheckSection;
