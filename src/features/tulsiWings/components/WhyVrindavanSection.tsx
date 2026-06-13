import React, { useMemo } from 'react';
import { Briefcase, Globe, Luggage, Plane } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { colors, fonts, pickTextStyle, strings, textStyles } from '../../../utils';
import {
  WhyVrindavanStatCard,
  type WhyVrindavanStatCardVariant,
} from './WhyVrindavanStatCard';
import { MOBILE_X_PAD, TULSI_ASSETS } from '../constants';

const ASSETS = TULSI_ASSETS;
const tw = colors.tulsiWings;
const tagColor = colors.destinationTag;
const headingColor = colors.secondary;
const bodyColor = colors.text.primary;

type StatItem = (typeof strings.tulsiWings.whyVrindavan.stats)[number];

type WhyVrindavanStatConfig = {
  stat: StatItem;
  icon: LucideIcon;
  valueParts?: [string, string];
};

const STAT_ICONS: LucideIcon[] = [Luggage, Globe, Briefcase, Plane];

const STAT_VALUE_PARTS: Array<[string, string] | undefined> = [
  undefined,
  ['60+ ', 'Countries'],
  ['₹21,000+ ', 'Cr'],
  ['45 Min ', 'From'],
];

const CombinedNewsClippings: React.FC<{ mobile?: boolean }> = ({ mobile }) => (
  <img
    src={`${ASSETS}/news_combined.webp`}
    alt=""
    className={
      mobile
        ? 'pointer-events-none absolute bottom-[-2.5px] left-[calc(50%+88.37px)] h-[216.502px] w-[528.73px] max-w-none -translate-x-1/2 select-none object-contain object-bottom'
        : 'pointer-events-none absolute bottom-0 left-[90.63px] h-[216.5px] w-[528.73px] max-w-none select-none object-contain object-bottom'
    }
    loading="lazy"
    decoding="async"
  />
);

const WhyVrindavanThesisPanel: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const w = strings.tulsiWings.whyVrindavan;
  const thesisTitleLines = w.thesis.titleStart.split('\n');
  const tagType = pickTextStyle(textStyles.thesisTag, !!mobile);
  const titleType = pickTextStyle(textStyles.thesisTitle, !!mobile);
  const descType = pickTextStyle(textStyles.thesisDescription, !!mobile);

  if (mobile) {
    return (
      <div
        className={`relative flex h-[448px] w-full flex-col overflow-hidden py-6 ${MOBILE_X_PAD}`}
        style={{ backgroundColor: tw.darkBlue }}
      >
        <div className="relative z-10 flex w-full flex-col gap-3">
          <div className="flex w-full flex-col gap-5">
            <p
              className="whitespace-nowrap uppercase"
              style={{ fontFamily: fonts.body, color: tw.lightPeach, ...tagType }}
            >
              {w.thesis.tagline}
            </p>
            <div style={{ fontFamily: fonts.heading, color: colors.text.onAccent, ...titleType }}>
              <p className="mb-0">{thesisTitleLines[0]}</p>
              <p>
                {thesisTitleLines[1]}
                <span className="italic" style={{ color: tw.thesisAccent }}>
                  {w.thesis.titleItalic}
                </span>
              </p>
            </div>
          </div>
          <img src={`${ASSETS}/divider_horizontal.svg`} alt="" className="h-px w-[129px]" loading="lazy" decoding="async" />
          <p
            className="w-full"
            style={{ fontFamily: fonts.body, color: tw.thesisMuted, ...descType }}
          >
            {w.thesis.description}
          </p>
        </div>
        <CombinedNewsClippings mobile />
      </div>
    );
  }

  return (
    <div
      className="relative flex h-[504px] w-[710px] shrink-0 flex-col overflow-hidden p-6"
      style={{ backgroundColor: tw.darkBlue }}
    >
      <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-3">
        <div className="flex flex-col gap-5">
          <p
            className="uppercase"
            style={{ fontFamily: fonts.body, color: tw.lightPeach, ...tagType }}
          >
            {w.thesis.tagline}
          </p>
          <div style={{ fontFamily: fonts.heading, color: colors.text.onAccent, ...titleType }}>
            <p className="mb-0">{thesisTitleLines[0]}</p>
            <p>
              {thesisTitleLines[1]}
              <span className="italic" style={{ color: tw.thesisAccent }}>
                {w.thesis.titleItalic}
              </span>
            </p>
          </div>
        </div>
        <img src={`${ASSETS}/divider_horizontal.svg`} alt="" className="h-px w-[129px]" loading="lazy" decoding="async" />
        <p
          className="w-[445.197px] max-w-full"
          style={{ fontFamily: fonts.body, color: tw.thesisMuted, ...descType }}
        >
          {w.thesis.description}
        </p>
      </div>
      <CombinedNewsClippings />
    </div>
  );
};

const WhyVrindavanStatsGrid: React.FC<{ variant: WhyVrindavanStatCardVariant }> = ({
  variant,
}) => {
  const statItems = useMemo<WhyVrindavanStatConfig[]>(
    () =>
      strings.tulsiWings.whyVrindavan.stats.map((stat, index) => ({
        stat,
        icon: STAT_ICONS[index],
        valueParts: STAT_VALUE_PARTS[index],
      })),
    [],
  );

  if (variant === 'mobile') {
    return (
      <div className={`w-full ${MOBILE_X_PAD}`}>
        <div className="flex w-full flex-col gap-3">
          {statItems.map(({ stat, icon, valueParts }) => (
            <WhyVrindavanStatCard
              key={stat.title}
              icon={icon}
              variant="mobile"
              value={stat.value}
              title={stat.title}
              description={stat.desc}
              valueParts={valueParts}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[504px] w-[710px] shrink-0 flex-col gap-3">
      <div className="flex min-h-0 flex-1 gap-3">
        {statItems.slice(0, 2).map(({ stat, icon, valueParts }) => (
          <WhyVrindavanStatCard
            key={stat.title}
            icon={icon}
            variant="desktop"
            value={stat.value}
            title={stat.title}
            description={stat.desc}
            valueParts={valueParts}
          />
        ))}
      </div>
      <div className="flex min-h-0 flex-1 gap-3">
        {statItems.slice(2).map(({ stat, icon, valueParts }) => (
          <WhyVrindavanStatCard
            key={stat.title}
            icon={icon}
            variant="desktop"
            value={stat.value}
            title={stat.title}
            description={stat.desc}
            valueParts={valueParts}
          />
        ))}
      </div>
    </div>
  );
};

const WhyVrindavanSectionHeader: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const w = strings.tulsiWings.whyVrindavan;
  const tagType = pickTextStyle(textStyles.sectionTag, !!mobile);
  const titleType = pickTextStyle(textStyles.sectionTitle, !!mobile);
  const descType = pickTextStyle(textStyles.sectionDescription, !!mobile);

  return (
    <div
      className={`flex w-full flex-col items-center gap-5 text-center ${
        mobile ? MOBILE_X_PAD : ''
      }`}
    >
      <p
        className="w-full uppercase"
        style={{ fontFamily: fonts.body, color: tagColor, ...tagType }}
      >
        {w.tagline}
      </p>
      <div className="flex w-full flex-col items-center gap-4">
        <h2
          className="w-full"
          style={{ fontFamily: fonts.heading, color: headingColor, ...titleType }}
        >
          {w.title}
        </h2>
        <p
          className={`w-full ${mobile ? '' : 'max-w-[773.098px]'}`}
          style={{ fontFamily: fonts.body, color: bodyColor, ...descType }}
        >
          {w.description}
        </p>
      </div>
    </div>
  );
};

export const WhyVrindavanSection: React.FC = () => (
  <>
    {/* Desktop — Figma 3323:2 */}
    <div className="hidden w-full flex-col items-center gap-[46px] pb-[75px] lg:flex">
      <WhyVrindavanSectionHeader />
      <div className="flex w-full max-w-[1432px] items-stretch justify-between gap-3">
        <WhyVrindavanThesisPanel />
        <WhyVrindavanStatsGrid variant="desktop" />
      </div>
    </div>

    {/* Mobile — Figma 3329:4 */}
    <div className="flex w-full flex-col items-center gap-[29px] lg:hidden">
      <WhyVrindavanSectionHeader mobile />
      <WhyVrindavanThesisPanel mobile />
      <WhyVrindavanStatsGrid variant="mobile" />
    </div>
  </>
);

export default WhyVrindavanSection;
