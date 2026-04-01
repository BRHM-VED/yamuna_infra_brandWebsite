import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import Navbar from '../../../layouts/Navbar';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-[100vh] bg-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/images/heroBg.svg" alt="Spiritual Vrindavan Community" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* NAVBAR */}
      <div className="relative z-30 w-full">
        <Navbar />
      </div>

      {/* HERO COPY */}
      <div className="relative z-20 w-full">
        <div className="absolute left-1/2 -translate-x-1/2 top-[155px] md:top-[180px] flex flex-col items-center text-center gap-[18px] w-[311px] md:w-auto md:max-w-[900px] px-4">
          {/* Desktop-only banner */}
          <div
            className="hidden md:flex items-center justify-center gap-[10px] w-fit px-1.5 py-1.5"
            style={{ backgroundColor: colors.status.new }}
          >
            <span style={{ fontFamily: fonts.body }} className="text-[16px] font-normal text-black pl-3">
              {strings.hero.newProject}
            </span>
            <div
              className="flex items-center gap-1.5 bg-white px-[16px] py-[6px] shadow-sm"
              style={{
                fontFamily: fonts.body,
                color: colors.text.primary,
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              {strings.hero.projectName}
              <span className="text-[14px]">→</span>
            </div>
          </div>

          <h1
            style={{
              fontFamily: fonts.heading,
              color: colors.secondary,
              lineHeight: 1.19,
              fontWeight: 400,
              letterSpacing: '-0.96px'
            }}
            className="text-[32px] md:text-[68px] max-w-[900px]"
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
