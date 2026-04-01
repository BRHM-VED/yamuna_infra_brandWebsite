import React from 'react';
import { Microscope, TreePine, UserPlus } from 'lucide-react';
import { colors, fonts, strings } from '../../../utils';

const anitaImg = '/assets/images/Cultural.svg'; // Placeholder image

/** Desktop step icons — Figma 149×149 tile */
const stepIconsDesktop = [
  <TreePine key="1" size={20} strokeWidth={1.5} style={{ color: colors.text.tertiary }} />,
  <Microscope key="2" size={20} strokeWidth={1.5} style={{ color: colors.text.tertiary }} />,
  <UserPlus key="3" size={20} strokeWidth={1.5} style={{ color: colors.text.tertiary }} />,
];

/** Mobile step icons — Figma 749:2589 */
const stepIconsMobile = [
  <TreePine key="1" size={30} strokeWidth={1.5} style={{ color: colors.text.tertiary }} />,
  <Microscope key="2" size={30} strokeWidth={1.5} style={{ color: colors.text.tertiary }} />,
  <UserPlus key="3" size={30} strokeWidth={1.5} style={{ color: colors.text.tertiary }} />,
];

/** Figma 705:140 — labels break into two lines (desktop + mobile) */
function getConstructionStepLines(stepId: string): [string, string] {
  switch (stepId) {
    case '1':
      return ['ON-SITE', 'TESTING'];
    case '2':
      return ['INTERNAL', 'LAB TEST'];
    case '3':
      return ['THIRD PARTY', 'LAB TEST'];
    default:
      return ['', ''];
  }
}

interface TestimonialData {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => {
  return (
    <div
      className="flex-shrink-0 w-full md:w-[1114px] bg-white rounded-[1.54px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col md:flex-row overflow-hidden relative"
      style={{ minHeight: '417px' }}
    >
      {/* Quote Icon */}
      <div className="absolute top-8 left-8 w-[98px] h-[78px] opacity-10 select-none pointer-events-none overflow-hidden">
        <svg viewBox="0 0 98 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M41.8 77.1H0L16.2 0H52.9L41.8 77.1ZM86.9 77.1H45.1L61.3 0H98L86.9 77.1Z" fill="#D9D9D9" />
        </svg>
      </div>

      {/* Mobile layout: image sits bottom-right inside card */}
      <div className="md:hidden relative z-10 px-8 pt-[56px] pb-[120px] flex flex-col justify-start gap-10">
        <p
          className="text-[20px] font-normal"
          style={{
            fontFamily: fonts.heading,
            color: colors.secondary,
            lineHeight: '1.55',
            letterSpacing: '-0.72px',
          }}
        >
          {data.quote}
        </p>

        <div className="flex flex-col gap-1">
          <span
            className="text-[28px] font-normal"
            style={{
              fontFamily: fonts.heading,
              color: colors.destinationTag,
            }}
          >
            {data.author}
          </span>
          <span
            className="text-[20px] font-normal opacity-80"
            style={{
              fontFamily: fonts.body,
              color: colors.text.tertiary,
            }}
          >
            {data.location}
          </span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 px-8 md:pl-[120px] md:pr-12 md:py-20 flex-col justify-center gap-10 relative z-10">
        <p
          className="text-[24px] font-normal"
          style={{
            fontFamily: fonts.heading,
            color: colors.text.primary,
            lineHeight: '1.4',
            letterSpacing: '-0.72px',
          }}
        >
          {data.quote}
        </p>

        <div className="flex flex-col gap-1">
          <span
            className="text-[22px] font-normal"
            style={{
              fontFamily: fonts.heading,
              color: colors.primary,
            }}
          >
            {data.author}
          </span>
          <span
            className="text-[16px] font-normal opacity-80"
            style={{
              fontFamily: fonts.body,
              color: colors.secondary,
            }}
          >
            {data.location}
          </span>
        </div>
      </div>

      {/* Desktop image column (unchanged) */}
      <div className="hidden md:block w-full md:w-[463px] min-h-[300px] md:min-h-full relative overflow-hidden">
        <img
          src={data.image || anitaImg}
          alt={data.author}
          className="w-full h-full object-cover"
        />
        {/* Modern Curved Background Overlay behind the person */}
        <div
          className="absolute -bottom-10 -left-20 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ backgroundColor: colors.primary, transform: 'rotate(-15deg)' }}
        />
      </div>

      {/* Mobile image (bottom-right) */}
      <div className="md:hidden absolute bottom-0 right-0 w-[168px] h-[190px] overflow-hidden">
        <div
          className="absolute -bottom-[56px] -right-[78px] w-[260px] h-[260px] rounded-full"
          style={{ backgroundColor: colors.primary, opacity: 0.35 }}
        />
        <img src={data.image || anitaImg} alt={data.author} className="absolute bottom-0 right-0 w-full h-full object-cover" />
      </div>
    </div>
  );
};

const DesignConstructionSection: React.FC = () => {
  return (
    // Developer: Desktop Figma 705:140; mobile Figma 749:2589 — white step tiles, 2-line labels, icon above copy.
    <section className="w-full relative bg-white pb-32">

      {/* Testimonials Block (Slider) - Positioned with reduced negative offset for more breathable spacing */}
      <div className="relative -top-8 md:-top-16 w-full">
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex flex-nowrap gap-8 px-4 md:px-16 pb-12">
            {strings.testimonials.map((item, idx) => (
              <TestimonialCard key={idx} data={item} />
            ))}
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="hidden md:flex justify-center gap-6 mt-4">
          <button
              type="button"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full transition-all hover:opacity-90 md:h-[64px] md:w-[64px]"
              style={{ backgroundColor: colors.surfaceMuted, color: colors.text.primary }}
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
              type="button"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full transition-all hover:opacity-90 md:h-[64px] md:w-[64px]"
              style={{ backgroundColor: colors.surfaceMuted, color: colors.text.primary }}
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Mobile dots (visual only, Figma-like) */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="size-[10px]"
              style={{ backgroundColor: i === 0 ? colors.accent : 'rgba(0,0,0,0.12)' }}
            />
          ))}
        </div>
      </div>

      {/* Design & Construction Block — full-width band with horizontal inset (705:140 / 749:2589) */}
      <div className="mt-12 w-full  md:mt-8 md:px-[50px]">
        <div className="mx-auto max-w-full text-center">
        <h2
          className="mb-10 text-[36px] font-normal leading-tight md:mb-14 md:text-[64px]"
          style={{ fontFamily: fonts.heading, color: colors.text.primary }}
        >
          <span className="block md:inline">{strings.construction.titleStart}</span>
          <span className="hidden md:inline"> </span>
          <span className="block md:inline italic font-medium" style={{ color: colors.primary }}>
            {strings.construction.titleEnd}
          </span>
        </h2>

        {/* Verified Standards Container */}
        <div
          className="relative w-full overflow-hidden rounded-[1.54px] p-8 pt-10 pb-12 md:px-12 md:pb-16 md:pt-14 md:pl-[72px] md:pr-[72px] lg:px-20 lg:pb-20"
          style={{
            backgroundColor: colors.construction.panelBg,
            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.construction.dotGrid} 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        >
          {/* Background Watermark Text - Fixed Position to Bottom Left */}
          <div
            className="absolute bottom-[-20px] left-0 md:left-4 select-none pointer-events-none"
            style={{
              fontFamily: fonts.body,
              fontSize: '98.5px',
              fontWeight: '700',
              color: colors.construction.watermark,
              opacity: '0.4',
              lineHeight: '1.19',
              whiteSpace: 'nowrap',
              letterSpacing: '-2.956px',
            }}
          >
            {strings.construction.bgText}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h3
              className="text-[28px] md:text-[46px] font-normal mb-3 md:mb-4 tracking-[-0.84px] md:tracking-[-1.38px] leading-[1.19]"
              style={{ fontFamily: fonts.body, color: colors.accent, fontWeight: 400 }}
            >
              {strings.construction.boxTitle}
            </h3>
            <p
              className="mx-auto mb-10 max-w-[560px] px-1 text-[14px] md:mb-12 md:text-[18px]"
              style={{ fontFamily: fonts.body, color: colors.text.tertiary }}
            >
              {strings.construction.boxSubtitle}
            </p>

            {/* Mobile: Figma — light cards, single-line labels, gold numeral */}
            <div className="relative w-full pl-0 md:hidden">
              <div
                className="absolute bottom-6 left-[22px] top-6 w-[2px]"
                style={{ backgroundColor: colors.construction.stepNumberGold, opacity: 0.55 }}
                aria-hidden
              />
              <div
                className="absolute left-[22px] top-[92px] h-[56px] w-[2px]"
                style={{ backgroundColor: colors.construction.stepNumberGold, opacity: 1 }}
                aria-hidden
              />
              <div className="flex flex-col gap-3">
                {strings.construction.steps.map((step, idx) => {
                  return (
                    <div
                      key={step.id}
                      className="relative flex min-h-[80px] w-full items-center justify-between gap-3 rounded-[1px] border border-white pl-3 pr-2 py-3 shadow-sm"
                      style={{
                        backgroundImage: colors.construction.desktopCardGradient,
                      }}
                    >
                      <div className="relative z-10 flex min-w-0 flex-1 items-center gap-3 pl-1">
                        <div className="flex size-[30px] shrink-0 items-center justify-center opacity-60">{stepIconsMobile[idx]}</div>
                        <p
                          className="min-w-0 flex-1 text-left text-[18px] font-normal uppercase leading-[1.3] opacity-70"
                          style={{ fontFamily: fonts.body, color: colors.text.primary, letterSpacing: '0px' }}
                        >
                          {step.label}
                        </p>
                      </div>
                      <span
                        className="shrink-0 text-[60px] font-bold leading-none tabular-nums opacity-70"
                        style={{ fontFamily: fonts.body, color: colors.construction.stepNumberGold, fontWeight: 700 }}
                      >
                        {step.id}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Figma dev — 149×149 tiles, 23px gap, 1px #fff border, radial fill; connector behind numerals */}
            <div className="relative mx-auto hidden w-full md:block">
              <div
                className="pointer-events-none absolute left-1/2 top-[26px] z-0 h-px w-[493px] -translate-x-1/2"
                style={{ backgroundColor: colors.construction.connector }}
                aria-hidden
              />
              <div className="relative z-10 flex w-full flex-row flex-wrap items-start justify-center gap-[23px]">
                {strings.construction.steps.map((step, idx) => {
                  const [line1, line2] = getConstructionStepLines(step.id);
                  return (
                    <div
                      key={step.id}
                      className="relative size-[149px] shrink-0 rounded-[1px] border shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                      style={{
                        backgroundImage: colors.construction.desktopCardGradient,
                        backgroundColor: colors.surface,
                        borderColor: colors.construction.desktopCardBorder,
                        borderWidth: 1,
                        borderStyle: 'solid',
                      }}
                    >
                      <span
                        className="absolute right-2 top-2 text-[40px] leading-none opacity-70"
                        style={{
                          fontFamily: fonts.body,
                          color: colors.construction.stepNumberGold,
                          fontWeight: 700,
                        }}
                      >
                        {step.id}
                      </span>
                      <div className="absolute left-3 top-[46px] opacity-70">{stepIconsDesktop[idx]}</div>
                      <div
                        className="absolute bottom-3 left-3 right-8 text-left text-[12px] font-normal uppercase leading-[1.3] opacity-70"
                        style={{ fontFamily: fonts.body, color: colors.text.primary, letterSpacing: '0px' }}
                      >
                        <span className="block">{line1}</span>
                        <span className="block">{line2}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default DesignConstructionSection;
