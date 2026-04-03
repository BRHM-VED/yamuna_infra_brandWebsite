import React from 'react';
import { Microscope, TreePine, UserPlus } from 'lucide-react';
import { colors, fonts, strings } from '../../../utils';
import PagerNavButton from '../../../components/common/PagerNavButton';

const DEFAULT_TESTIMONIAL_IMG = '/assets/images/AnitaSharma.svg';
const testimonialImageByAuthor: Record<string, string> = {
  'Boris Kravchenko': '/assets/images/BorisKravchenko.svg',
  'Anita Sharma': '/assets/images/AnitaSharma.svg',
  'Rohit garwal': '/assets/images/Rohitgarwal.svg',
  'Rohit Garwal': '/assets/images/Rohitgarwal.svg',
  'Rohit Agarwal': '/assets/images/Rohitgarwal.svg',
};

const figmaTestimonials: TestimonialData[] = [
  {
    quote:
      '"We explored multiple developers, but what made the difference here was the transparency. Every step—from documentation to construction—was clearly explained. It gave us a sense of assurance that is rare."',
    author: 'Boris Kravchenko',
    location: 'Suzdal, Russia',
    image: testimonialImageByAuthor['Boris Kravchenko'],
  },
  {
    quote:
      '"We were looking for a place in Vrindavan where we could spend more time in devotion. What impressed us most was the honesty and professionalism of the team. It felt like a community being built, not just a project."',
    author: 'Anita Sharma',
    location: 'Mumbai',
    image: testimonialImageByAuthor['Anita Sharma'],
  },
  {
    quote:
      '"In a market where trust is often a concern, their approach feels structured and responsible. You can see that long-term thinking has gone into every decision, which builds confidence as a buyer."',
    author: 'Rohit Agarwal',
    location: 'Bangalore',
    image: testimonialImageByAuthor['Rohit Agarwal'],
  },
];

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
  const resolvedImage = data.image || testimonialImageByAuthor[data.author] || DEFAULT_TESTIMONIAL_IMG;
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
      <div className="md:hidden relative z-10 px-8 pt-[30px] pb-[120px] h-[550px] flex flex-col justify-start gap-10">
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

      {/* Desktop layout (Figma 1341:61) */}
      <div
        className="hidden md:block relative w-full md:w-[1114px] h-[420px] overflow-hidden bg-white"
        style={{ border: '1px solid rgba(0,0,0,0.2)' }}
      >
        {/* Quote mark (top-left, larger than mobile) */}
        <div className="absolute left-[-17px] top-[-30px] w-[134px] h-[115px] opacity-10 select-none pointer-events-none">
          <svg viewBox="0 0 98 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M41.8 77.1H0L16.2 0H52.9L41.8 77.1ZM86.9 77.1H45.1L61.3 0H98L86.9 77.1Z" fill="#D9D9D9" />
          </svg>
        </div>

        {/* Copy block */}
        <div className="absolute left-[59px] top-1/2 -translate-y-1/2 flex flex-col items-start gap-[40px] w-[634px]">
          <p
            className="text-[24px] font-normal leading-[1.4]"
            style={{ fontFamily: fonts.heading, color: '#1b1b1b', letterSpacing: '-0.72px' }}
          >
            {data.quote}
          </p>

          <div className="flex flex-col items-start gap-[14px]">
            <p
              className="text-[24px] font-medium leading-[1.4]"
              style={{ fontFamily: fonts.body, color: '#8d531e', letterSpacing: '-0.72px' }}
            >
              {data.author}
            </p>
            <p
              className="text-[18px] font-normal leading-[1.4] opacity-70"
              style={{ fontFamily: fonts.body, color: '#1b1b1b', letterSpacing: '-0.54px' }}
            >
              {data.location}
            </p>
          </div>
        </div>

        {/* Curved backdrop + person image (right) */}
        <div
          className="absolute right-[-550px] bottom-[-850px] w-[1100px] h-[1100px] rounded-full"
          style={{ backgroundColor: colors.about.founderPanel, transform: 'rotate(-38.88deg)' }}
          aria-hidden
        />
        <div className="absolute right-0 bottom-0 w-[420px] h-full overflow-hidden">
          <img
            src={resolvedImage}
            alt={data.author}
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* Mobile image (bottom-right) */}
      <div className="md:hidden absolute bottom-0 right-0 w-[290px] h-[250px] overflow-hidden">
        {/* Large beige curve behind the person (Figma-like) */}
        <div
          className="absolute -bottom-[380px] -right-[250px] w-[540px] h-[540px] rounded-full"
          style={{ backgroundColor: colors.about.founderPanel }}
        />
        <img
          src={resolvedImage}
          alt={data.author}
          className="absolute bottom-0 right-0 w-[235px] h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
};

const DesignConstructionSection: React.FC = () => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  const testimonials = figmaTestimonials.length ? figmaTestimonials : strings.testimonials;

  const scrollToTestimonial = (nextIndex: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-testimonial-item]'));
    if (!items.length) return;
    const clamped = ((nextIndex % items.length) + items.length) % items.length;
    items[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActiveTestimonial(clamped);
  };

  const onSliderScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-testimonial-item]'));
    if (!items.length) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    items.forEach((item, idx) => {
      const itemMid = item.offsetLeft + item.offsetWidth / 2;
      const d = Math.abs(itemMid - mid);
      if (d < bestDist) {
        bestDist = d;
        best = idx;
      }
    });
    setActiveTestimonial(best);
  };

  const isPrevDisabled = activeTestimonial <= 0;
  const isNextDisabled = activeTestimonial >= (testimonials.length ? testimonials.length - 1 : 0);

  return (
    // Developer: Desktop Figma 705:140; mobile Figma 749:2589 — white step tiles, 2-line labels, icon above copy.
    <section className="w-full relative bg-white pb-32">

      {/* Testimonials Block (Slider) - Positioned with reduced negative offset for more breathable spacing */}
      <div className="relative -top-8 md:-top-16 w-full">
        <div
          ref={sliderRef}
          onScroll={onSliderScroll}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="flex flex-nowrap gap-8 px-4 md:px-16 pb-2">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                data-testimonial-item
                className="flex-shrink-0 w-[calc(100vw-32px)] md:w-[1114px]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <TestimonialCard data={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="hidden md:flex justify-center gap-4 mt-4">
          <PagerNavButton
            direction="prev"
            disabled={isPrevDisabled}
            onClick={() => scrollToTestimonial(activeTestimonial - 1)}
            aria-label="Previous testimonial"
          />
          <PagerNavButton
            direction="next"
            disabled={isNextDisabled}
            onClick={() => scrollToTestimonial(activeTestimonial + 1)}
            aria-label="Next testimonial"
          />
        </div>

        {/* Mobile dots (visual only, Figma-like) */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {Array.from({ length: testimonials.length || 3 }).map((_, i) => (
            <div
              key={i}
              className="size-[10px]"
              style={{ backgroundColor: i === activeTestimonial ? colors.accent : 'rgba(0,0,0,0.12)' }}
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
