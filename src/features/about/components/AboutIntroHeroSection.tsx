import { colors, fonts } from '@/utils';

export default function AboutIntroHeroSection() {
  const accent = {
    color: colors.primary,
    fontFamily: fonts.heading,
    fontWeight: 600,
    fontStyle: 'italic' as const,
  };

  return (
    <section className="w-full px-4 pt-[100px] text-left md:px-[60px] md:pt-[93px]" aria-labelledby="about-intro-heading">
      <div className="mx-auto w-full">
        {/* Default column align-items is stretch — keeps headline + lead same width (fixes mobile flush-left). */}
        <div className="flex w-full max-w-[806px] flex-col gap-3 md:gap-6">
          <div
            id="about-intro-heading"
            className="w-full text-left font-medium leading-[1.08] text-[36px] tracking-[-1.2px] text-black md:text-[64px] md:leading-normal md:tracking-[-1.92px]"
            style={{ fontFamily: fonts.heading }}
          >
            <p className="m-0 w-full text-left leading-[normal]">
              Rooted in <span style={accent}>Trust.</span>
            </p>
            <p className="m-0 w-full text-left leading-[normal]">
              Built for Meaningful
              <br className="md:hidden" />
              {' '}
              <span style={accent}>Living.</span>
            </p>
          </div>
          <p
            className="m-0 w-full text-left text-[16px] font-normal leading-normal tracking-[-0.32px] md:max-w-[467px] md:text-[24px] md:tracking-[-0.48px]"
            style={{ fontFamily: fonts.body, color: colors.about.introLead }}
          >
            Creating thoughtfully designed spaces in Vrindavan, guided by values, community, and long-term vision.
          </p>
        </div>

        {/* Figma: no radius on hero photo; inset follows parent (Home-style px from page main) */}
        <div className="relative mt-8 w-full">
          <div className="relative aspect-370/180 w-full overflow-hidden md:aspect-1316/639">
            <img
              src="/assets/about/aboutSkyline.webp"
              alt="Modern residential development and skyline"
              className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.78]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
