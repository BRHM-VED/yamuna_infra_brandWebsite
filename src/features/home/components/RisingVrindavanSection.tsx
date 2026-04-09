import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { ArrowRight } from 'lucide-react';
import { useInquiry } from '../../inquiry/useInquiry';

/** Replace with your Figma export if needed — same path keeps layout stable */
const risingLinesGraphic = '/assets/images/risingVrindavanGraphic.webp';

const RisingVrindavanSection: React.FC = () => {
  const { openInquiry } = useInquiry();

  return (
    // Developer: Figma — desktop: cream+CTA | navy stats; mobile: CTA sits in navy panel bottom (752 mobile).
    <section className="w-full relative px-4 md:px-[50px] mb-16 md:py-10 md:mb-20 bg-white">
      {/* Mobile (Figma 1851:427) */}
      <div className="md:hidden relative w-full overflow-hidden rounded-[1px] bg-[#FEF5E3] shadow-[0_10px_60px_rgba(0,0,0,0.05)]">
        {/* Title block */}
        <div className="pt-[30px]  pl-[23px] pr-6 pb-6">
          <h2
            className="w-[146px] text-[28px] font-normal tracking-[-0.84px]"
            style={{ fontFamily: fonts.heading, color: colors.text.primary, lineHeight: '1.19' }}
          >
            <span>{'The '}</span>
            <span className="italic font-medium" style={{ color: colors.primary }}>
              Rising
            </span>
            <span className="block">Vrindavan</span>
          </h2>
          <p
            className="mt-5 w-[138px] text-[14px] font-normal tracking-[-0.28px]"
            style={{ fontFamily: fonts.body, color: colors.secondary, lineHeight: '1.4' }}
          >
            {strings.rising.subtitle}
          </p>
        </div>

        {/* Blue stats card */}
        <div className="w-full overflow-hidden bg-[#071B50] pb-[15px]">
          {/* Graphic */}
          <div className="relative h-[161px] w-full overflow-hidden" style={{ borderBottom: `1px solid ${colors.rising.statLine}` }}>
            <img
              src={risingLinesGraphic}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: 'left top' }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Stats (stacked with dividers) */}
          <div className="px-[18px] pt-[24px] pb-[24px] text-white">
            {/* 1 */}
            <div className="flex w-[167px] flex-col items-start gap-[12px]">
              <div
                className="text-[32px] font-normal tracking-[-0.96px]"
                style={{ fontFamily: fonts.body, lineHeight: '1.19' }}
              >
                {strings.rising.stats[0]?.value}
              </div>
              <div className="text-[14px]" style={{ fontFamily: fonts.body, lineHeight: '1.4', opacity: 0.8 }}>
                <span>Annual visitors by </span>
                <span className="font-semibold">2030</span>
                <span>.</span>
              </div>
            </div>

            <div className="my-[16px] h-px w-full" style={{ backgroundColor: colors.rising.statLine }} aria-hidden />

            {/* 2 */}
            <div className="flex w-[167px] flex-col items-start gap-[12px]">
              <div
                className="text-[32px] font-normal tracking-[-0.96px]"
                style={{ fontFamily: fonts.body, lineHeight: '1.19' }}
              >
                {strings.rising.stats[1]?.value}
              </div>
              <div className="text-[14px]" style={{ fontFamily: fonts.body, lineHeight: '1.4', opacity: 0.8 }}>
                <span>in just </span>
                <span className="font-semibold">six years</span>
              </div>
            </div>

            <div className="my-[16px] h-px w-full" style={{ backgroundColor: colors.rising.statLine }} aria-hidden />

            {/* 3 */}
            <div className="flex w-full flex-col items-start gap-[12px]">
              <div
                className="text-[32px] font-normal tracking-[-0.96px]"
                style={{ fontFamily: fonts.body, lineHeight: '1.19' }}
              >
                {strings.rising.stats[2]?.value}
              </div>
              <div className="w-[271px] text-[14px]" style={{ fontFamily: fonts.body, lineHeight: '1.4', opacity: 0.8 }}>
                Heritage city project, 2,965 acres of area
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full bg-[#071B50] pb-[15px] px-4">
          <button
            type="button"
            onClick={() => openInquiry()}
            className="flex h-[54px] w-full items-center justify-center gap-[10px] rounded-[1px] text-white"
            style={{ backgroundColor: colors.accent, fontFamily: fonts.body, fontSize: '16px', fontWeight: 400, lineHeight: '1.19' }}
          >
            {strings.rising.cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        className="hidden md:block max-w-full mx-auto w-full overflow-hidden rounded-[1px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] lg:flex lg:h-[350px] lg:w-full lg:flex-row"
        style={{ backgroundColor: colors.rising.cream }}
      >

        {/* Left Block (Cream Side) */}
        <div
          className="relative flex flex-col justify-between p-8 md:p-14 lg:h-full lg:w-[542px] lg:px-[40px] lg:pt-[30px] lg:pb-[30px]"
        >
          <div className="lg:w-[431px]">
            <h2
              className="text-[42px] font-normal leading-[1.05] md:text-[52px] lg:w-[408px] lg:text-[44px]"
              style={{ fontFamily: fonts.heading, color: colors.text.primary, lineHeight: '1.19', letterSpacing: '-1.32px' }}
            >
              The <span className="italic" style={{ color: colors.primary }}>Rising</span> Vrindavan
            </h2>
            <p
              className="mt-4 text-[14px] opacity-80 md:text-[16px] lg:mt-[26px] lg:text-[24px]"
              style={{ fontFamily: fonts.body, color: colors.secondary, letterSpacing: '-0.48px', lineHeight: '1.4' }}
            >
              {strings.rising.subtitle}
            </p>
          </div>

          {/* Desktop / large: CTA in cream column */}
          <button
            type="button"
            onClick={() => openInquiry()}
            className="mt-10 hidden items-center justify-center gap-3 rounded-[1px] px-6 py-4 text-white transition-all group hover:opacity-95 md:mt-16 md:flex md:w-fit lg:mt-auto lg:h-[63px] lg:w-[229px] lg:gap-[10px] lg:px-[26px] lg:py-[22px]"
            style={{ fontFamily: fonts.body, fontSize: '18px', fontWeight: 400, backgroundColor: colors.accent, lineHeight: '1.19' }}
          >
            {strings.rising.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Figma — top = line graphic image; bottom = stats on darker navy; divider with node */}
        <div
          className="relative flex min-h-0 flex-1 flex-col overflow-hidden lg:h-full"
          style={{ backgroundColor: colors.rising.navyGraphic }}
        >
          {/* Upper: decorative lines (swap asset by replacing file at risingLinesGraphic) */}
          <div
            className="relative h-[150px] w-full shrink-0 overflow-hidden md:h-[210px] lg:h-[164px]"
            style={{
              backgroundColor: colors.rising.navyGraphic,
              borderBottom: `1px solid ${colors.rising.statLine}`,
            }}
          >
            <img
              src={risingLinesGraphic}
              alt=""
              className="absolute left-0 top-0 w-full h-full object-cover lg:h-[160px]"
              style={{ objectPosition: 'left top' }}
              loading="lazy"
            />
          </div>

          {/* Lower: stats strip — slightly darker blue */}
          <div
            className="relative flex flex-1 flex-col pb-4 pt-5 md:pb-9 md:pt-7 md:pl-8 md:pr-14 lg:h-[282px] lg:flex-none lg:px-0 lg:pb-0 lg:pt-0"
            style={{ backgroundColor: '#071B50' }}
          >
            {/* Mobile layout (stacked) */}
            <div className="relative z-10 grid w-full grid-cols-1 gap-0 px-2 md:hidden">
              {strings.rising.stats.map((stat) => (
                <div key={stat.id} className="flex flex-col items-start gap-[12px] px-1 py-6">
                  <span
                    className="text-[38px] font-normal leading-[1.19] text-white"
                    style={{ fontFamily: fonts.heading, letterSpacing: '-1.86px' }}
                  >
                    {stat.value}
                  </span>
                  {stat.id === 'visitors' ? (
                    <div className="flex flex-col gap-0">
                      <span className="text-[12px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, opacity: 0.8 }}>
                        Annual visitors
                      </span>
                      <span className="text-[12px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, opacity: 0.8 }}>
                        by <span className="font-semibold">2030.</span>
                      </span>
                    </div>
                  ) : stat.id === 'growth' ? (
                    <div className="flex flex-col gap-0">
                      <span className="text-[12px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, opacity: 0.8 }}>
                        in just
                      </span>
                      <span className="text-[12px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, opacity: 0.8 }}>
                        <span className="font-semibold">six years</span>
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0">
                      <span className="text-[12px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, opacity: 0.8 }}>
                        Heritage city project,
                      </span>
                      <span className="text-[12px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, opacity: 0.8 }}>
                        2,965 acres of area
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop layout (row concept + reduced padding) */}
            <div className="relative z-10 hidden md:grid md:w-full md:grid-cols-3 md:px-[53px] md:pt-[28px] md:pb-[28px]">
              {strings.rising.stats.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={`flex flex-col items-start gap-[10px] ${idx > 0 ? 'border-l pl-[30px]' : ''}`}
                  style={{ borderColor: colors.rising.statLine }}
                >
                  <span
                    className="font-normal leading-[1.19] text-white md:text-[62px]"
                    style={{ fontFamily: fonts.heading, letterSpacing: '-1.86px' }}
                  >
                    {stat.value}
                  </span>
                  {stat.id === 'visitors' ? (
                    <div className="flex flex-col" style={{ opacity: 0.8 }}>
                      <span className="text-[18px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, lineHeight: '1.4' }}>
                        Annual visitors
                      </span>
                      <span className="text-[18px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, lineHeight: '1.4' }}>
                        by <span className="font-semibold">2030.</span>
                      </span>
                    </div>
                  ) : stat.id === 'growth' ? (
                    <div className="flex flex-col" style={{ opacity: 0.8 }}>
                      <span className="text-[18px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, lineHeight: '1.4' }}>
                        in just
                      </span>
                      <span className="text-[18px] font-semibold" style={{ fontFamily: fonts.body, color: colors.text.onAccent, lineHeight: '1.4' }}>
                        six years
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col" style={{ opacity: 0.8 }}>
                      <span className="text-[18px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, lineHeight: '1.4' }}>
                        Heritage city project,
                      </span>
                      <span className="text-[18px]" style={{ fontFamily: fonts.body, color: colors.text.onAccent, lineHeight: '1.4' }}>
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
              className="relative z-10 mx-4 mt-6 mb-2 flex h-[56px] w-[calc(100%-32px)] items-center justify-center gap-3 rounded-[1px] px-6 py-0 text-white transition-all group hover:opacity-95 md:hidden"
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
