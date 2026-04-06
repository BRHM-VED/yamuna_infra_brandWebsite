import React from 'react';
import { colors, fonts, strings } from '../../../utils';

// Asset Paths (Point to public/assets/images)
const buildingIcon = '/assets/images/building.svg';
const hookIcon = '/assets/images/hook.svg';
const documentIcon = '/assets/images/document.svg';
const flagCircleDesktop = '/assets/images/flagCircleDesktop.svg';
const flagCircleMobile = '/assets/images/flagCircleMobile.svg';
const featherIcon = '/assets/images/feather.svg';
const realityCheckBg = '/assets/images/realityCheckBg.svg';
const syLogo = '/syGroup.svg';

const RealityCheckSection: React.FC = () => {
  const cards = [
    { title: strings.realityCheck.card1, icon: buildingIcon },
    { title: strings.realityCheck.card2, icon: hookIcon },
    { title: strings.realityCheck.card3, icon: documentIcon },
  ];

  return (
    // Developer note: Desktop node 705:26, Mobile nodes 728:413 / 728:314 / 728:320
    <section className="w-full bg-white overflow-hidden">
      {/* 1. Global Echo Header Section */}
      <div className="relative w-full flex flex-col items-center text-center  md:pt-10">
        {/* Full-width Flag Circle Area */}
        <div className="relative w-full h-[688px] md:min-h-[800px] lg:min-h-[815px] flex items-center justify-center overflow-hidden">
          {/* Flag circle background */}
          {/* Mobile: show only mobile flag-circle asset */}
          <div className="absolute inset-0 pointer-events-none z-0 md:hidden overflow-hidden">
            <img
              src={flagCircleMobile}
              alt=""
              className="absolute inset-0 w-full h-full object-cover origin-center"
              loading="lazy"
              decoding="async"
            />
            {/* Mobile-only: soft white fade like Figma */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 22%),
                  linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%),
                  linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 18%),
                  linear-gradient(to left, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 18%)
                `,
              }}
            />
          </div>

          {/* Desktop: keep existing behavior */}
          <div
            className="absolute mt-10 inset-0 pointer-events-none z-0 hidden md:block"
            style={{
              background: `url(${flagCircleDesktop}) lightgray 0px -521.905px / 100% 228.256% no-repeat`,
              maskImage: 'radial-gradient(ellipse, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)'
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full h-full">
            <h2
              style={{
                fontFamily: fonts.body,
                color: colors.secondary,
                fontSize: 'clamp(24px, 4vw, 44.46px)',
                lineHeight: 1.19,
                letterSpacing: '-0.72px',
                fontWeight: 400
              }}
              className="max-w-[320px] md:max-w-[700px] mb-2"
            >
              A city whose name<br />echoes across continents.
            </h2>

            {/* Mobile: Figma wavy separator only — no stem/circle (aligns with desktop) */}
            <div className="md:hidden flex flex-col items-center">
              <div className="h-[5px] w-[54px] my-4 overflow-hidden flex items-center justify-center">
                <svg width="54" height="6" viewBox="0 0 54 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 4.5C5.5 4.5 9.5 1.5 14 1.5C18.5 1.5 22.5 4.5 27 4.5C31.5 4.5 35.5 1.5 40 1.5C44.5 1.5 48.5 4.5 53 4.5"
                    stroke={colors.destinationTag}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            <p
              style={{
                fontFamily: fonts.body,
                color: colors.secondary,
                fontSize: 'clamp(14px, 1.5vw, 22px)',
                lineHeight: 1.4,
                letterSpacing: '-0.42px',
                fontWeight: 400
              }}
              className="max-w-[210px] md:max-w-[550px]"
            >
              A place where seekers from around the world arrive in search of something deeper.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Journey & Reality Check (Unified Feather Background Stack) */}
      <div className="relative w-full flex flex-col items-center">

        {/* Full-width Feather Background Section */}
        <div className="relative w-full flex flex-col items-center overflow-hidden pt-16 md:pt-20 pb-40 md:pb-56">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={featherIcon}
              alt="Feather Background"
              className="w-full h-full object-cover object-top opacity-100"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Overlay Stack */}
          <div className="relative z-10 flex flex-col items-center w-full px-6 text-center">

            {/* Journey Text */}
            <div className="flex flex-col items-center gap-[18px] mb-20 md:mb-28 mt-6 md:mt-12">
              <div className="flex flex-col items-center gap-[22px] md:mb-12">
                <p
                  style={{ fontFamily: fonts.body, color: colors.secondary, letterSpacing: '-0.48px' }}
                  className="text-[14px]  font-medium italic opacity-100 md:text-[24px]"
                >
                  <span className="block">Because no matter where the journey begins…</span>
                  <span className="block">All roads of the soul lead to</span>
                </p>
                <p
                  style={{ fontFamily: fonts.accent, color: colors.accent, letterSpacing: '-1.4683px' }}
                  className="text-[48.94px] leading-[1.3] font-normal"
                >
                  Vrindavan.
                </p>
              </div>
            </div>

            {/* Reality Check Title */}
            <div className="mb-20 md:mb-32">
              <h3
                style={{
                  fontFamily: fonts.heading,
                  color: colors.secondary,
                  fontSize: 'clamp(28px, 8vw, 54px)',
                  lineHeight: 1.19,
                  letterSpacing: '-0.84px'
                }}
                className="font-extrabold italic mb-0"
              >
                Reality Check
              </h3>
              <p
                style={{
                  fontFamily: fonts.heading,
                  color: colors.secondary,
                  fontSize: 'clamp(28px, 8vw, 54px)',
                  lineHeight: 1.19,
                  letterSpacing: '-0.84px'
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
                className="opacity-100 mb-0 text-[20px] md:text-[46.317px]"
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
                className="leading-tight text-[28px] md:text-[66.58px]"
              >
                something else grew with it.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Reality Cards Section (Panorama Strip) */}
      <div className="relative w-full z-20 flex flex-col items-center mt-[-70px] md:mt-[-140px]">

        {/* Reality Cards Stack (Overlayed overlapping top boundary) */}
        <div className="relative z-20 w-full max-w-[1100px] px-8 md:px-6 mb-[-160px] md:mb-[-280px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: colors.realityCheck.cardBg }}
                className="group relative h-[78px] md:h-[400px] flex flex-col items-start md:items-center justify-center md:justify-start text-left md:text-center overflow-hidden transition-all duration-700 hover:scale-[1.02] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] px-6 md:px-0"
              >
                <div
                  style={{ fontFamily: fonts.body, color: colors.realityCheck.cardText }}
                  className="text-[12px] md:text-[22px] font-bold tracking-[0.2em] leading-[1.3] z-10 mt-0 md:mt-10 uppercase w-full md:w-auto"
                >
                  {card.title}
                </div>

                {/* Developer note: Icon is bottom-aligned like Figma cards */}
                <div className="absolute inset-0 flex items-end md:items-end justify-end md:justify-center pointer-events-none opacity-[0.05] pb-0 pr-4 md:pr-0 grayscale brightness-200">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-[120px] md:w-4/5 h-auto object-contain transition-transform duration-1000 group-hover:scale-110 brightness-1000"
                    loading="lazy"
                    decoding="async"
                  />
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
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* SY Group logo sits on the join (Figma-like overlap) */}
        <div className="pointer-events-none absolute left-1/2 bottom-[-28px] md:bottom-[-34px] -translate-x-1/2 z-30">
          <img src={syLogo} alt="SY Group" className="w-[60px] md:w-[75px] h-auto" loading="lazy" decoding="async" />
        </div>
      </div>

      {/* Spacer so the overlapped logo has room before next section */}
      <div className="h-[16px] md:h-[24px]" style={{ backgroundColor: colors.background }} />
    </section>
  );
};

export default RealityCheckSection;
