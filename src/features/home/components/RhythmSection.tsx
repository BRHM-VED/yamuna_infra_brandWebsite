import React from 'react';
import { colors, fonts, strings } from '../../../utils';

const RhythmSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row  md:px-[50px]">
      {/* Left Column - Grey Section */}
      <div
        className="flex-1 flex flex-col justify-center h-[360px] lg:h-auto px-4 md:px-30 py-[40px] md:py-[115.5px]"
        style={{ backgroundColor: colors.rhythm.bgLeft }}
      >
        <div className="flex flex-col gap-[14px] md:gap-16 w-full">
          {/* First Block */}
          <div className="flex flex-col gap-[14px] md:gap-4">
            {/* Developer note: Placeholder sizes match Figma (node 728:394) */}
            <div className="w-[194px] h-[30px] bg-white" />

            <p
              style={{
                fontFamily: fonts.body,
                color: colors.secondary,
                letterSpacing: '-0.4867px',
                lineHeight: 1.19
              }}
              className="text-[16px] md:text-[24px] lg:text-[32px] font-normal text-left md:text-left"
            >
              {strings.rhythm.indiaTitle}
            </p>

            {/* Developer note: Right-aligned target line like Figma (node 728:399) */}
            <div className="flex items-start justify-end gap-[6px] w-full">
              <span className="text-[16px] leading-[1.19]" style={{ color: colors.text.tertiary }}>
                →
              </span>
              <div className="flex flex-col items-end gap-[10px]">
                <p
                  style={{
                    fontFamily: fonts.body,
                    color: colors.secondary,
                    letterSpacing: '-0.4867px',
                    lineHeight: 1.19
                  }}
                  className="text-[16px] md:text-[24px] lg:text-[32px] font-normal text-right"
                >
                  {strings.rhythm.indiaTarget}
                </p>
                <div className="w-[133px] h-[30px] bg-white" />
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col gap-[14px] md:gap-4">
            {/* Developer note: Placeholder sizes match Figma (node 728:404) */}
            <div className="w-[200px] h-[30px] bg-white" />

            <p
              style={{
                fontFamily: fonts.body,
                color: colors.secondary,
                letterSpacing: '-0.4867px',
                lineHeight: 1.19
              }}
              className="text-[16px] md:text-[24px] lg:text-[32px] font-normal text-left"
            >
              {strings.rhythm.europeTitle}
            </p>

            <div className="flex items-start justify-end gap-[5px] w-full">
              <span className="text-[16px] leading-[1.19]" style={{ color: colors.text.tertiary }}>
                →
              </span>
              <div className="flex flex-col items-end gap-[10px]">
                <p
                  style={{
                    fontFamily: fonts.body,
                    color: colors.secondary,
                    letterSpacing: '-0.4867px',
                    lineHeight: 1.19
                  }}
                  className="text-[16px] md:text-[24px] lg:text-[32px] font-normal text-right"
                >
                  {strings.rhythm.europeTarget}
                </p>
                <div className="w-[186px] h-[30px] bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Deep Blue Section */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center h-[360px] lg:h-auto px-0 py-[140px] relative overflow-hidden"
        style={{ backgroundColor: colors.accent }}
      >
        {/* Bottom wave graphic (Figma) */}
        <img
          src="/assets/images/twoLine.svg"
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 w-full opacity-100"
          style={{ height: 121 }}
          aria-hidden
          loading="lazy"
          decoding="async"
        />

        <div className="relative z-10 max-w-[600px] flex flex-col gap-0">
          <p
            style={{
              fontFamily: fonts.body,
              color: '#FFFFFF',
              letterSpacing: '-0.54px',
              lineHeight: '1.89'
            }}
            className="text-[18px] md:text-[32px] font-semibold"
          >
            {strings.rhythm.rhythmBinds}
          </p>
          <p
            style={{
              fontFamily: fonts.body,
              color: '#FFFFFF',
              letterSpacing: '-0.54px',
              lineHeight: '1.89'
            }}
            className="text-[18px] md:text-[32px] font-semibold"
          >
            {strings.rhythm.rhythmDevotion}
          </p>
          <p
            style={{
              fontFamily: fonts.body,
              color: '#FFFFFF',
              letterSpacing: '-0.54px',
              lineHeight: '1.89'
            }}
            className="text-[18px] md:text-[32px] font-semibold"
          >
            {strings.rhythm.beganHereText} <span style={{ color: colors.rhythm.beganHere }} className="italic">{strings.rhythm.beganHereEmphasis}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RhythmSection;
