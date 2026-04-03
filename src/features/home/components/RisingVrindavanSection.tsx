import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { ArrowRight } from 'lucide-react';
import { useInquiry } from '../../inquiry/useInquiry';

/** Replace with your Figma export if needed — same path keeps layout stable */
const risingLinesGraphic = '/assets/images/risingVrindavanGraphic.svg';

const RisingVrindavanSection: React.FC = () => {
  const { openInquiry } = useInquiry();

  return (
    // Developer: Figma — desktop: cream+CTA | navy stats; mobile: CTA sits in navy panel bottom (752 mobile).
    <section className="w-full relative px-4 md:px-[50px] py-10 md:py-16 mb-16 md:mb-20 bg-white">
      <div className="max-w-full mx-auto flex w-full flex-col overflow-hidden rounded-[1px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] lg:flex-row lg:min-h-[420px]">

        {/* Left Block (Cream Side) */}
        <div
          className="flex-[0.8] flex flex-col justify-between p-8 md:p-14"
          style={{ backgroundColor: colors.rising.cream }}
        >
          <div>
            <h2
              className="text-[42px] md:text-[52px] font-normal leading-[1.05]"
              style={{ fontFamily: fonts.heading, color: colors.text.primary }}
            >
              The <span className="italic" style={{ color: colors.primary }}>Rising</span> Vrindavan
            </h2>
            <p
              className="mt-4 text-[14px] opacity-80 md:text-[16px]"
              style={{ fontFamily: fonts.body, color: colors.secondary }}
            >
              {strings.rising.subtitle}
            </p>
          </div>

          {/* Desktop / large: CTA in cream column */}
          <button
            type="button"
            onClick={() => openInquiry()}
            className="mt-10 hidden items-center justify-center gap-3 rounded-[1px] px-6 py-4 text-white transition-all group hover:opacity-95 md:mt-16 md:flex md:w-fit"
            style={{ fontFamily: fonts.body, fontSize: '14px', fontWeight: 500, backgroundColor: colors.accent }}
          >
            {strings.rising.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Figma — top = line graphic image; bottom = stats on darker navy; divider with node */}
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
          {/* Upper: decorative lines (swap asset by replacing file at risingLinesGraphic) */}
          <div
            className="relative h-[150px] w-full shrink-0 overflow-hidden md:h-[210px]"
            style={{ backgroundColor: colors.rising.navyGraphic }}
          >
            <img
              src={risingLinesGraphic}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: 'left bottom' }}
              loading="lazy"
            />
          </div>

          {/* Lower: stats strip — slightly darker blue */}
          <div
            className="relative flex flex-1 flex-col pb-7 pt-5 md:pb-9 md:pt-7 md:pl-8 md:pr-14"
            style={{ backgroundColor: colors.rising.navyStats }}
          >
            <div className="relative z-10 grid w-full grid-cols-1 gap-0 px-4 md:grid-cols-3 md:px-0">
              {strings.rising.stats.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={`flex flex-col gap-3 px-1 py-6 md:px-8 md:py-0 lg:px-10 ${idx < 2 ? 'border-b md:border-b-0 md:border-r' : ''}`}
                  style={{ borderColor: colors.rising.statLine }}
                >
                  <span
                    className="text-[38px] font-normal leading-none text-white md:text-[48px] lg:text-[52px]"
                    style={{ fontFamily: fonts.heading }}
                  >
                    {stat.value}
                  </span>
                  {stat.id === 'visitors' ? (
                    <div className="flex flex-col gap-0">
                      <span className="text-[12px] md:text-[13px] opacity-90" style={{ fontFamily: fonts.body, color: colors.text.onAccent }}>
                        Annual visitors
                      </span>
                      <span className="text-[12px] md:text-[13px] opacity-90" style={{ fontFamily: fonts.body, color: colors.text.onAccent }}>
                        by <span className="font-semibold">2030.</span>
                      </span>
                    </div>
                  ) : stat.id === 'growth' ? (
                    <div className="flex flex-col gap-0">
                      <span className="text-[12px] md:text-[13px] opacity-90" style={{ fontFamily: fonts.body, color: colors.text.onAccent }}>
                        in just
                      </span>
                      <span className="text-[12px] md:text-[13px] opacity-90" style={{ fontFamily: fonts.body, color: colors.text.onAccent }}>
                        <span className="font-semibold">six years</span>
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0">
                      <span className="text-[12px] md:text-[13px] opacity-90" style={{ fontFamily: fonts.body, color: colors.text.onAccent }}>
                        Heritage city project,
                      </span>
                      <span className="text-[12px] md:text-[13px] opacity-90" style={{ fontFamily: fonts.body, color: colors.text.onAccent }}>
                        2,965 acres of area
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: CTA inside navy panel bottom */}
            <button
              type="button"
              onClick={() => openInquiry()}
              className="relative z-10 mx-auto mt-6 flex w-full max-w-[320px] items-center justify-center gap-3 rounded-[1px] px-6 py-4 text-white transition-all group hover:opacity-95 md:hidden"
              style={{
                fontFamily: fonts.body,
                fontSize: '14px',
                fontWeight: 500,
                backgroundColor: colors.rising.ctaOnDark,
              }}
            >
              {strings.rising.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisingVrindavanSection;
