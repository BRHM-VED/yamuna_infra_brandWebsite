import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import Navbar from '../../../layouts/Navbar';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full h-[100vh] bg-white flex flex-col">
      {/* 2. STACK CONTAINER (Everything else is layered here) */}
      <div className="relative flex-1 w-full flex flex-col">

        {/* BACKGROUND LAYER (Absolute) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/heroBg.svg"
            alt="Spiritual Vrindavan Community"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay to enhance text readability */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* NAVBAR LAYER (Top aligned relative to stack) */}
        <div className="relative z-30 w-full px-4 md:px-[60px]">
          <Navbar />
        </div>

        {/* CONTENT LAYER (Centered Stack) */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pt-[5vh] pb-[15vh]">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-8 md:gap-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {/* 1. TOP BANNER (Now part of the stack) */}
            <div
              className="flex items-center justify-center gap-[10px] w-fit px-1.5 py-1.5"
              style={{ backgroundColor: colors.status.new }}
            >
              <span
                style={{ fontFamily: fonts.body }}
                className="text-[14px] md:text-[16px] font-normal text-black pl-3"
              >
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
                color: colors.accent,
                lineHeight: 1.19,
                fontWeight: 400,
                letterSpacing: '-2.04px'
              }}
              className="text-[42px] md:text-[68px] lg:text-[68px] max-w-[900px]"
            >
              Creating Global <br className="hidden md:block" /> Spiritual {' '}
              <span
                style={{ color: colors.primary, fontFamily: fonts.heading, fontWeight: 500 }}
                className="italic"
              >
                Communities
              </span>
            </h1>
            <p
              style={{
                fontFamily: fonts.body,
                color: colors.secondary,
                lineHeight: 1.19,
                letterSpacing: '-0.66px'
              }}
              className="text-[16px] md:text-[22px] lg:text-[22px] max-w-[800px] mx-auto opacity-100 font-normal"
            >
              {strings.hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
