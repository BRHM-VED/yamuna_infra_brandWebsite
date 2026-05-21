import { Building2, Flag, Home, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { colors, fonts } from '@/utils';

type StatItem = { label: string; value: string; icon: LucideIcon };

const STATS: StatItem[] = [
  { label: 'FOUNDED IN', value: '2010', icon: Flag },
  { label: 'FAMILIES SERVED', value: '1000+', icon: Home },
  { label: 'PROJECTS COMPLETED', value: '8+', icon: Building2 },
  { label: 'TEAM MEMBERS', value: '500+', icon: Users },
];

const vrindavanItalic = {
  fontFamily: fonts.heading,
  fontWeight: 600 as const,
  fontStyle: 'italic' as const,
  color: colors.text.primary,
};

const philosophyBodyDesktop = [
  'Our philosophy is grounded in the belief that true development goes beyond construction. It is about creating spaces that feel connected — to people, to community, and to a deeper sense of purpose.',
  'With every project, we focus on building with care, honesty, and a commitment to lasting value.',
];

const philosophyBodyMobile =
  'Our philosophy is grounded in the belief that true development goes beyond construction. It is about creating spaces that feel connected — to people, to community, and to a deeper sense of purpose. With every project, we focus on building with care, honesty, and a commitment to lasting value.';

/**
 * About fold 2 — company story + stat cards + philosophy (Figma `2341:172`, mobile `2394:128`–`131`, philosophy `2348:223` / `2394:172`).
 */
export default function AboutCompanyOverviewSection() {
  return (
    <section className="mt-10 w-full px-4 pb-16 md:mt-14 md:pl-0 md:pr-[60px] md:pb-24" aria-labelledby="about-company-overview-heading">
      <div className="mx-auto flex w-full  flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-6">
          {/* Cream panel — mobile full-bleed bg; desktop fixed column (~755px) */}
          <div
            className="-mx-4 flex flex-col gap-6 px-4 py-9 text-left text-black lg:mx-0 lg:w-[755px] lg:max-w-[755px] lg:shrink-0 lg:gap-6 lg:self-stretch lg:px-8 lg:py-8"
            style={{ backgroundColor: colors.about.overviewStatIconBg }}
          >
            <p
              id="about-company-overview-heading"
              className="m-0 w-full font-medium leading-[1.2] tracking-[-0.56px] text-[28px] md:text-[48px] md:tracking-[-0.96px]"
              style={{ fontFamily: fonts.heading }}
            >
              <span style={vrindavanItalic}>A</span>{' '}
              <span style={vrindavanItalic}>Vrindavan</span>
              <span>
                -based real estate company focused on creating spaces that stand on trust, intention, and lasting value.
              </span>
            </p>
            <p
              className="m-0 w-full font-normal leading-normal tracking-[-0.48px] text-[16px] md:text-[24px] md:tracking-[-0.72px]"
              style={{ fontFamily: fonts.body }}
            >
              At Shri Yamuna Infra, we believe a home is more than a structure. It’s a space where comfort, trust, and
              belonging come together — thoughtfully built for those who value a deeper connection to where they live.
            </p>
          </div>

          {/* Stat cards — gap 12 mobile / 24 desktop; padding 16 mobile / 32 desktop */}
          <div className="pt-4 flex flex-col gap-3 lg:flex-1 lg:justify-center lg:gap-6 lg:pr-8 lg:py-8">
            {STATS.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-6 overflow-hidden rounded-[12px] border border-solid bg-white p-3 lg:rounded-[16px] lg:p-4"
                style={{ borderColor: colors.about.overviewStatBorder }}
              >
                <div
                  className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-[8px] lg:size-[88px] lg:rounded-[16px]"
                  style={{ backgroundColor: colors.about.overviewStatIconBg }}
                >
                  <Icon className="size-8 lg:size-12" strokeWidth={1.35} style={{ color: colors.primary }} aria-hidden />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1 lg:gap-[6px]">
                  <p
                    className="m-0 w-full font-semibold leading-normal tracking-[0.26px] text-[13px] lg:text-[20px] lg:tracking-[0.4px]"
                    style={{ fontFamily: fonts.body, color: colors.about.overviewStatLabel }}
                  >
                    {label}
                  </p>
                  <p
                    className="m-0 w-full font-semibold leading-[1.4] tracking-[-0.3px] text-[20px] text-black lg:text-[36px] lg:tracking-[-0.54px]"
                    style={{ fontFamily: fonts.body }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy — centered white type on navy; radius 22px */}
        <div
          className="flex flex-col items-center gap-6 rounded-[22px] px-6 py-10 text-center text-white md:ml-14 md:gap-8 md:px-4 md:py-[130px]"
          style={{ backgroundColor: colors.construction.risingBg }}
        >
          <h2
            className="m-0 font-medium leading-normal tracking-[-0.72px] text-[24px] whitespace-normal md:text-[48px] md:tracking-[-1.44px] md:whitespace-nowrap"
            style={{ fontFamily: fonts.heading }}
          >
            Our Philosophy
          </h2>
          <div
            className="hidden w-full max-w-[1091px] flex-col gap-4 font-normal tracking-[-1.02px] text-[34px] md:flex"
            style={{ fontFamily: fonts.body, lineHeight: 1.5 }}
          >
            {philosophyBodyDesktop.map((para, i) => (
              <p key={i} className="m-0">
                {para}
              </p>
            ))}
          </div>
          <p
            className="m-0 w-full max-w-[350px] font-normal leading-normal tracking-[-0.48px] text-[16px] md:hidden"
            style={{ fontFamily: fonts.body }}
          >
            {philosophyBodyMobile}
          </p>
        </div>
      </div>
    </section>
  );
}
