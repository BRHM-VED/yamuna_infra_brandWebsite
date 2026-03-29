import React from 'react';
import { colors, fonts, strings } from '../../../utils';

const RhythmSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[710px]">
      {/* Left Column - Grey Section */}
      <div
        className="flex-1 flex flex-col justify-center px-[40px] md:px-[85px] py-[60px] md:py-[115.5px]"
        style={{ backgroundColor: colors.rhythm.bgLeft }}
      >
        <div className="flex flex-col gap-16 max-w-[540px] mx-auto">
          {/* First Block */}
          <div className="flex flex-col gap-4">
            <div className="w-[100px] h-[35px] bg-white rounded-sm" />
            <div
              style={{ fontFamily: fonts.body, color: colors.secondary }}
              className="text-[20px] md:text-[24px] lg:text-[32px] font-normal leading-relaxed"
            >
              {strings.rhythm.indiaTitle}
              <span className="block mt-2">
                <span className="text-[#A1A1A1] mr-3">→</span>
                {strings.rhythm.indiaTarget}
              </span>
            </div>
            <div className="w-[100px] h-[35px] bg-white rounded-sm self-end mt-4" />
          </div>

          {/* Second Block */}
          <div className="flex flex-col gap-4">
            <div className="w-[100px] h-[35px] bg-white rounded-sm" />
            <div
              style={{ fontFamily: fonts.body, color: colors.secondary }}
              className="text-[20px] md:text-[24px] lg:text-[32px] font-normal leading-relaxed"
            >
              {strings.rhythm.europeTitle}
              <span className="block mt-2">
                <span className="text-[#A1A1A1] mr-3">→</span>
                {strings.rhythm.europeTarget}
              </span>
            </div>
            <div className="w-[100px] h-[35px] bg-white rounded-sm self-end mt-4" />
          </div>
        </div>
      </div>

      {/* Right Column - Deep Blue Section */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center px-[40px] md:px-[70px] py-[80px] relative overflow-hidden"
        style={{ backgroundColor: colors.accent }}
      >
        {/* Subtle Wave Background Effect */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-[600px] flex flex-col gap-2">
          <p
            style={{
              fontFamily: fonts.body,
              color: '#FFFFFF',
              letterSpacing: '-0.96px',
              lineHeight: '1.89'
            }}
            className="text-[24px] md:text-[32px] font-semibold"
          >
            {strings.rhythm.rhythmBinds}
          </p>
          <p
            style={{
              fontFamily: fonts.body,
              color: '#FFFFFF',
              letterSpacing: '-0.96px',
              lineHeight: '1.89'
            }}
            className="text-[24px] md:text-[32px] font-semibold"
          >
            {strings.rhythm.rhythmDevotion}
          </p>
          <p
            style={{
              fontFamily: fonts.body,
              color: '#FFFFFF',
              letterSpacing: '-0.96px',
              lineHeight: '1.89'
            }}
            className="text-[24px] md:text-[32px] font-semibold"
          >
            {strings.rhythm.beganHereText} <span style={{ color: colors.rhythm.beganHere }} className="italic">{strings.rhythm.beganHereEmphasis}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RhythmSection;
