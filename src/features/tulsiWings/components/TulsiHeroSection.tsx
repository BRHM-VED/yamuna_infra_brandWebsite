import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { TULSI_HERO_IMAGES } from '../constants';

interface TulsiHeroSectionProps {
  onBookSiteVisit: () => void;
}

const tw = colors.tulsiWings;
const text = colors.text;

export const TulsiHeroSection: React.FC<TulsiHeroSectionProps> = ({ onBookSiteVisit }) => {
  const t = strings.tulsiWings.hero;
  const [mobileAddressLine, mobileLocationLine] = t.titleEnd.split('\n');

  const ctaButtonStyle = {
    fontFamily: fonts.body,
    backgroundColor: tw.darkBlue,
    color: text.onAccent,
  } as const;

  const mobileCtaButtonStyle = {
    ...ctaButtonStyle,
    outlineColor: tw.heroCtaOutline,
  } as const;

  return (
    <section
      className="relative h-[674.54px] w-full overflow-hidden md:h-[706px]"
      style={{ backgroundColor: tw.darkBlue }}
    >
      <picture className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <source media="(min-width: 768px)" srcSet={TULSI_HERO_IMAGES.desktop} />
        <img
          src={TULSI_HERO_IMAGES.mobile}
          alt=""
          className="size-full object-cover object-center"
          draggable={false}
          fetchPriority="high"
        />
      </picture>

      <div
        className="pointer-events-none absolute inset-0 z-0 md:hidden"
        style={{ backgroundColor: tw.heroOverlayMobile }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden md:block"
        style={{ backgroundColor: tw.heroOverlayDesktop }}
      />

      {/* Mobile — Figma 3329:37 */}
      <div className="relative z-10 h-full md:hidden">
        <div className="absolute left-[30.46px] top-[113.37px] flex w-[330px] flex-col items-center gap-[14px]">
          <img
            src={TULSI_HERO_IMAGES.wordmarkMobile}
            alt={t.brandName}
            className="h-[24.351px] w-[106.656px] shrink-0"
            draggable={false}
          />
          <div
            className="w-full text-center tracking-[-0.84px]"
            style={{ fontFamily: fonts.serif, color: text.onAccent }}
          >
            <p className="mb-0 text-[42px] leading-[1.1]">
              {t.titleStart}
              <span className="italic">{t.titleItalic}</span>
              {mobileAddressLine}
            </p>
            <p className="text-[42px] leading-[1.1]">{mobileLocationLine.trim()}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onBookSiteVisit}
          className="absolute bottom-[20.17px] left-[18px] right-[18px] z-10 box-border flex w-auto cursor-pointer items-center justify-center rounded-none px-8 py-4 text-center text-base font-medium leading-normal outline-1 -outline-offset-1"
          style={mobileCtaButtonStyle}
        >
          {t.cta}
        </button>
      </div>

      {/* Desktop */}
      <div className="relative z-10 hidden h-full md:block">
        <div className="absolute left-[39px] top-[121.46px] flex max-w-[586px] flex-col items-start gap-[14px]">
          <img
            src={TULSI_HERO_IMAGES.wordmarkDesktop}
            alt={t.brandName}
            className="h-[33.47px] w-[146.58px] shrink-0"
            draggable={false}
          />
          <h1
            className="whitespace-pre-line text-[73.23px] font-normal leading-[71.77px] tracking-tight"
            style={{ fontFamily: fonts.serif, color: tw.heroTitle }}
          >
            {t.titleStart}
            <span className="italic">{t.titleItalic}</span>
            {t.titleEnd}
          </h1>
        </div>

        <button
          type="button"
          onClick={onBookSiteVisit}
          className="absolute left-[39px] top-[348px] box-border flex cursor-pointer items-center justify-center rounded-none px-8 py-4 text-center text-base font-medium leading-normal"
          style={ctaButtonStyle}
        >
          {t.cta}
        </button>
      </div>
    </section>
  );
};

export default TulsiHeroSection;
