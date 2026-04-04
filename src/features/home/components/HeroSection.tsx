import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import NewProjectBanner from '@/components/common/NewProjectBanner';
import Navbar from '../../../layouts/Navbar';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-[70vh] md:min-h-[100vh] bg-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/images/heroBg.svg" alt="Spiritual Vrindavan Community" className="w-full h-full object-cover" fetchPriority="high" decoding="sync" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Mobile: full-width new-project bar above navbar (Figma) */}
      <div className="relative z-40 w-full md:hidden">
        <NewProjectBanner />
      </div>

      {/* NAVBAR */}
      <div className="relative z-30 w-full">
        <Navbar />
      </div>

      {/* HERO COPY */}
      <div className="relative z-20 w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-[100px] md:top-[100px] flex flex-col items-center text-center gap-[18px] w-[311px] md:w-auto md:max-w-[900px] px-4">
          {/* Desktop: same banner as mobile, compact centered chip */}
          <div className="hidden md:block">
            <NewProjectBanner />
          </div>

          <h1
            style={{
              fontFamily: fonts.heading,
              color: colors.secondary,
              lineHeight: 1.19,
              fontWeight: 400,
              letterSpacing: '-0.96px'
            }}
            className="text-[28px] md:text-[68px] max-w-[900px]"
          >
            Creating Global <br className="hidden md:block" /> Spiritual{' '}
            <span style={{ color: colors.primary, fontFamily: fonts.heading, fontWeight: 500 }} className="italic">
              Communities
            </span>
          </h1>

          <p
            style={{
              fontFamily: fonts.body,
              color: colors.secondary,
              lineHeight: 1.4,
              letterSpacing: '-0.42px'
            }}
            className="text-[14px] md:text-[16px] opacity-70 font-normal"
          >
            {strings.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
