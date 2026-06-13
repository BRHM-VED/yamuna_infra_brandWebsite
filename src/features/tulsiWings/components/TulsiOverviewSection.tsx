import React, { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { colors, fonts, pickTextStyle, strings, textStyles } from '../../../utils';
import { WhyVrindavanSection } from './WhyVrindavanSection';
import { MOBILE_X_PAD, TULSI_ASSETS } from '../constants';

const ASSETS = TULSI_ASSETS;
const tw = colors.tulsiWings;
const tagColor = colors.destinationTag;
const bodyColor = colors.text.primary;

interface TulsiOverviewSectionProps {
  onGetBrochure: () => void;
  onContactExpert: () => void;
}

const LuxuryBadgeDot: React.FC = () => (
  <img src={`${ASSETS}/badge_icon.webp`} alt="" className="size-5 shrink-0" loading="lazy" decoding="async" />
);

const LuxuryLivingBadge: React.FC<{ compact?: boolean; className?: string }> = ({
  compact,
  className,
}) => (
  <div
    className={`inline-flex items-center justify-center gap-2 rounded-[51px] px-5 py-2 outline-1 -outline-offset-1 ${
      compact ? 'w-full' : 'w-[421px] max-w-full'
    } ${className ?? ''}`}
    style={{
      backgroundColor: tw.cardCream,
      outlineColor: tw.lightPeach,
    }}
  >
    <LuxuryBadgeDot />
    <p
      className={`whitespace-nowrap text-center font-medium uppercase ${
        compact ? 'text-[13px] leading-5' : 'text-[14px] leading-5 tracking-[1.96px]'
      }`}
      style={{ fontFamily: fonts.body, color: bodyColor }}
    >
      {strings.tulsiWings.overview.badge}
    </p>
  </div>
);

const BrochureCard: React.FC<{ className?: string; shadowClass: string }> = ({
  className,
  shadowClass,
}) => (
  <div
    className={`h-[265.515px] w-[189.229px] overflow-hidden rounded-[4.679px] border ${shadowClass} ${className ?? ''}`}
    style={{ borderColor: tw.brochureCardBorder }}
  >
    <img
      src={`${ASSETS}/brochure_cover.webp`}
      alt=""
      className="size-full object-cover pointer-events-none"
      loading="lazy"
      decoding="async"
    />
  </div>
);

const LAUREL_BADGE_SPECS = {
  desktop: { outerW: 168, outerH: 188, innerW: 184, innerH: 170, gap: 10 },
  mobile: { outerW: 126, outerH: 145, innerW: 124, innerH: 140, gap: 6.504 },
} as const;

const LaurelBadge: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const spec = compact ? LAUREL_BADGE_SPECS.mobile : LAUREL_BADGE_SPECS.desktop;
  const valueType = pickTextStyle(textStyles.laurelValue, !!compact);
  const labelType = pickTextStyle(textStyles.laurelLabel, !!compact);

  return (
    <div
      className="relative shrink-0"
      style={{ width: spec.outerW, height: spec.outerH }}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: spec.innerW, height: spec.innerH }}
      >
        <img
          src={`${ASSETS}/laurel_wreath.webp`}
          alt=""
          className="pointer-events-none absolute inset-0 size-full select-none object-contain"
          aria-hidden
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center whitespace-nowrap text-center"
          style={{ color: tw.accentGold, gap: spec.gap }}
        >
          <p
            className="m-0"
            style={{ fontFamily: fonts.body, ...valueType }}
          >
            {strings.tulsiWings.overview.stats.years}
          </p>
          <div style={{ fontFamily: fonts.body, ...labelType }}>
            <p className="m-0">Years of</p>
            <p className="m-0">Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeveloperLogo: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  return (
    <div className={`relative shrink-0 flex items-center ${mobile ? 'h-[28.893px]' : 'h-[44.424px]'}`}>
      <img
        src="/logoBlue.svg"
        alt="Shri Yamuna Infra"
        className="h-full w-auto object-contain object-left"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const GOV_STAMP_RING_TEXT = {
  MVDA: 'MATHURA VRINDAVAN DEVELOPMENT AUTHORITY',
  RERA: 'UPRERAPRJ962074/03/2025',
} as const;

const GOV_STAMP_SPECS = {
  desktop: {
    width: 167.524,
    height: 167.527,
    ringInset: 8.762,
    ringSize: 150,
    titleSize: 36,
    subtitleSize: 18,
    labelGap: 12,
    titleTracking: -0.18,
    subtitleTracking: -0.09,
    ringWordGap: '   •   ',
  },
  mobile: {
    width: 108.956,
    height: 108.958,
    ringInset: 5.699,
    ringSize: 97.559,
    titleSize: 23.414,
    subtitleSize: 11.707,
    labelGap: 8,
    titleTracking: -0.1171,
    subtitleTracking: -0.0585,
    ringWordGap: '   •   ',
  },
} as const;

const CircularGovStamp: React.FC<{ label: 'MVDA' | 'RERA'; compact?: boolean }> = ({
  label,
  compact,
}) => {
  const pathId = useId();
  const spec = compact ? GOV_STAMP_SPECS.mobile : GOV_STAMP_SPECS.desktop;
  const ringType = pickTextStyle(textStyles.govStampRing, !!compact);
  const ringFontSize = parseFloat(ringType.fontSize);
  const ringLetterSpacing = parseFloat(ringType.letterSpacing ?? '0');
  const ringCenter = spec.ringInset + spec.ringSize / 2;
  const ringRadius = spec.ringSize / 2;
  const ringTop = spec.ringInset;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringLabel = `${GOV_STAMP_RING_TEXT[label]}${spec.ringWordGap}`;

  return (
    <div
      className="relative shrink-0 select-none"
      style={{ width: spec.width, height: spec.height }}
      role="img"
      aria-label={`${label} Approved`}
    >
      <svg
        className="absolute inset-0 size-full"
        viewBox={`0 0 ${spec.width} ${spec.height}`}
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d={`M ${ringCenter},${ringTop} A ${ringRadius},${ringRadius} 0 1,1 ${ringCenter - 0.001},${ringTop}`}
          />
        </defs>
        <text
          fill={tw.developerMuted}
          fontFamily={fonts.body}
          fontSize={ringFontSize}
          fontWeight={ringType.fontWeight}
          letterSpacing={ringLetterSpacing}
          textAnchor="start"
        >
          <textPath
            href={`#${pathId}`}
            startOffset="0%"
            textLength={ringCircumference}
            lengthAdjust="spacing"
          >
            {ringLabel}
          </textPath>
        </text>
      </svg>

      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center whitespace-nowrap text-center"
        style={{ color: tw.darkGrayText, gap: spec.labelGap, lineHeight: 1.15, }}
      >
        <p
          className="m-0 font-bold"
          style={{
            fontFamily: fonts.body,
            fontSize: spec.titleSize,
            letterSpacing: spec.titleTracking,
          }}
        >
          {label}
        </p>
        <p
          className="m-0 font-normal"
          style={{
            fontFamily: fonts.body,
            fontSize: spec.subtitleSize,
            letterSpacing: spec.subtitleTracking,
          }}
        >
          Approved
        </p>
      </div>
    </div>
  );
};

const GovApprovalsBlock: React.FC<{ compact?: boolean; title: string }> = ({ compact, title }) => {
  const labelType = pickTextStyle(textStyles.sectionTag, !!compact);

  return (
  <div
    className={`flex flex-col ${
      compact
        ? 'w-full max-w-[243.278px] items-center gap-[20.813px]'
        : 'w-[374.049px] shrink-0 items-start gap-[32px]'
    }`}
  >
    <p
      className={`m-0 w-full uppercase ${compact ? 'text-center whitespace-nowrap' : ''}`}
      style={{ fontFamily: fonts.body, color: tagColor, ...labelType }}
    >
      {title}
    </p>
    <div
      className={`flex w-full shrink-0 items-center ${
        compact ? 'h-[108.958px] gap-[25.365px]' : 'h-[167.527px] gap-[39px]'
      }`}
    >
      <CircularGovStamp label="MVDA" compact={compact} />
      <CircularGovStamp label="RERA" compact={compact} />
    </div>
  </div>
  );
};

const BuiltByColumn: React.FC<{
  mobile?: boolean;
  onKnowMore: () => void;
}> = ({ mobile, onKnowMore }) => {
  const o = strings.tulsiWings.overview;
  const labelType = pickTextStyle(textStyles.sectionTag, !!mobile);
  const descType = pickTextStyle(textStyles.sectionDescription, !!mobile);
  const ctaType = pickTextStyle(textStyles.knowMore, !!mobile);

  return (
    <div
      className={`flex flex-col ${
        mobile ? 'min-w-0 flex-1 gap-[20.813px]' : 'w-[334.252px] max-w-full shrink-0 gap-8'
      }`}
    >
      <p
        className="m-0 w-full uppercase"
        style={{ fontFamily: fonts.body, color: tagColor, ...labelType }}
      >
        {o.builtBy}
      </p>
      <div className={`flex flex-col ${mobile ? 'gap-[13.008px]' : 'gap-5'}`}>
        <DeveloperLogo mobile={mobile} />
        <p
          className={`m-0 ${mobile ? 'w-[217.395px] max-w-full' : 'w-full'}`}
          style={{ fontFamily: fonts.body, color: tw.developerMuted, ...descType }}
        >
          {o.stats.description}
        </p>
      </div>
      <button
        type="button"
        onClick={onKnowMore}
        className={`flex w-fit cursor-pointer items-center border-0 bg-transparent p-0 ${
          mobile ? 'gap-[4.553px]' : 'gap-[7px]'
        }`}
        style={{ fontFamily: fonts.body, color: tw.darkBlue, ...ctaType }}
      >
        {o.stats.knowMore}
        <ArrowRight
          className={mobile ? 'size-[15.609px] shrink-0' : 'size-6 shrink-0'}
          strokeWidth={2}
          aria-hidden
        />
      </button>
    </div>
  );
};

const TrustCredentialsPanel: React.FC<{
  mobile?: boolean;
  onContactExpert: () => void;
}> = ({ mobile, onContactExpert }) => {
  const o = strings.tulsiWings.overview;

  if (mobile) {
    return (
      <div className={`flex w-full flex-col items-center ${MOBILE_X_PAD} py-[100px]`}>
        <div className="flex w-full flex-col items-center gap-[32px]">
          <div className="flex w-full items-center gap-[26.016px]">
            <LaurelBadge compact />
            <BuiltByColumn mobile onKnowMore={onContactExpert} />
          </div>
          <img
            src={`${ASSETS}/divider_vertical.webp`}
            alt=""
            className="h-px w-full rotate-180"
            loading="lazy"
            decoding="async"
          />
          <GovApprovalsBlock compact title={o.approvals.title} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex h-[240.708px] w-[996.301px] max-w-full items-center gap-[40px]">
        <div className="flex shrink-0 items-center gap-[40px]">
          <LaurelBadge />
          <BuiltByColumn onKnowMore={onContactExpert} />
        </div>
        <div className="flex h-[240.708px] shrink-0 items-center justify-center">
          <div className="h-px w-[240.708px] rotate-90 bg-black/30" aria-hidden />
        </div>
        <GovApprovalsBlock title={o.approvals.title} />
      </div>
    </div>
  );
};

const mobileDescriptionLines = (description: string): [string, string] => {
  const splitAt = description.indexOf('with future-ready');
  if (splitAt === -1) return [description, ''];
  return [description.slice(0, splitAt).trim(), description.slice(splitAt).trim()];
};

export const TulsiOverviewSection: React.FC<TulsiOverviewSectionProps> = ({
  onGetBrochure,
  onContactExpert,
}) => {
  const o = strings.tulsiWings.overview;
  const [mobileDescLine1, mobileDescLine2] = mobileDescriptionLines(o.description);

  return (
    <section
      className="flex w-full flex-col items-center"
      style={{ backgroundColor: tw.bgCream }}
    >
      {/* Desktop — Figma: pt-75, gap-125 between banner / trust / why-vrindavan */}
      <div className="hidden w-full flex-col items-center pt-[75px] lg:flex">
        <div className="flex w-full max-w-[1432px] flex-col items-center gap-[125px] px-10 xl:px-0">
          {/* Promo banner */}
          <div className="flex h-[216px] w-full justify-center overflow-hidden">
            <div className="relative h-[215.929px] w-full">
              <div
                className="absolute left-0 top-[65.93px] h-[150px] w-full bg-gradient-to-r from-[var(--tw-promo-from)] to-[var(--tw-promo-to)]"
                style={{
                  ['--tw-promo-from' as string]: tw.promoGradientFrom,
                  ['--tw-promo-to' as string]: tw.promoGradientTo,
                }}
              >
                <div className="absolute left-[37px] top-1/2 flex w-[min(1069px,calc(100%-74px))] -translate-y-1/2 items-center justify-between gap-6">
                  <p className="w-[min(740.286px,55%)] text-[20px] font-normal leading-7 tracking-[-0.1px] text-black">
                    {o.description}
                  </p>
                  <button
                    type="button"
                    onClick={onGetBrochure}
                    className="flex w-[269px] shrink-0 cursor-pointer items-center justify-center px-6 py-4 text-[16px] font-medium"
                    style={{
                      fontFamily: fonts.body,
                      backgroundColor: tw.darkBlue,
                      color: colors.text.onAccent,
                    }}
                  >
                    {o.cta}
                  </button>
                </div>
              </div>

              <LuxuryLivingBadge className="absolute left-0 top-[65.93px] z-10 -translate-y-1/2" />

              <div className="absolute right-0 top-[-22.07px] h-[238px] w-[306px] overflow-hidden max-xl:right-4">
                <div className="absolute left-[62.75px] top-[22.79px] flex h-[284.148px] w-[216.416px] items-center justify-center">
                  <div className="rotate-[6.11deg]">
                    <BrochureCard shadowClass="shadow-[8.187px_41px_31.4px_0px_#ab713c]" />
                  </div>
                </div>
                <div className="absolute left-[29.46px] top-[20.75px] flex h-[276.407px] w-[204.844px] items-center justify-center">
                  <div className="-rotate-[3.45deg]">
                    <BrochureCard shadowClass="shadow-[8.187px_7.018px_24.562px_0px_rgba(0,0,0,0.3)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust credentials — Figma 3326:18 */}
          <TrustCredentialsPanel onContactExpert={onContactExpert} />

          <WhyVrindavanSection />
        </div>
      </div>

      {/* Mobile — Figma 3354:45 */}
      <div className="flex w-full flex-col lg:hidden">
        <div className={`w-full ${MOBILE_X_PAD} py-[60px]`}>
          <div className="flex w-full flex-col items-center gap-[9px]">
            <LuxuryLivingBadge compact className="w-full shrink-0" />

            <div className="relative h-[392px] w-full shrink-0">
              <div
                className="absolute left-0 top-[66px] h-[279px] w-full rounded-[16px]"
                style={{
                  backgroundImage: `linear-gradient(180.954deg, ${tw.promoGradientStart} 7.2855%, ${tw.promoGradientEnd} 98.957%)`,
                }}
              />

              <div className="absolute left-0 top-0 flex w-full flex-col items-center">
                <div className="relative h-[155px] w-full shrink-0 overflow-hidden">
                  <div className="absolute left-[87.75px] top-[22.79px] flex h-[284.148px] w-[216.416px] items-center justify-center">
                    <div className="rotate-[6.11deg]">
                      <BrochureCard shadowClass="shadow-[8.187px_41px_31.4px_0px_#6c5d50]" />
                    </div>
                  </div>
                  <div className="absolute left-[54.46px] top-[20.75px] flex h-[276.407px] w-[204.844px] items-center justify-center">
                    <div className="-rotate-[3.45deg]">
                      <BrochureCard shadowClass="shadow-[8.187px_7.018px_24.562px_0px_rgba(0,0,0,0.3)]" />
                    </div>
                  </div>
                </div>

                <div
                  className="box-border flex h-[237px] w-full shrink-0 flex-col items-center justify-center gap-6 overflow-hidden rounded-b-[16px] border-t border-solid px-[15.5px]"
                  style={{
                    borderColor: tw.promoPanelBorder,
                    backgroundColor: tw.promoPanel,
                  }}
                >
                  <div
                    className="w-full text-center text-[16px] font-normal leading-[1.4] tracking-[-0.08px]"
                    style={{ fontFamily: fonts.body, color: bodyColor }}
                  >
                    <p className="mb-0">{mobileDescLine1}</p>
                    {mobileDescLine2 ? <p>{mobileDescLine2}</p> : null}
                  </div>
                  <button
                    type="button"
                    onClick={onGetBrochure}
                    className="flex w-full shrink-0 cursor-pointer items-center justify-center rounded-[42px] px-6 py-4 text-[16px] font-medium leading-normal"
                    style={{
                      fontFamily: fonts.body,
                      backgroundColor: tw.darkBlue,
                      color: colors.text.onAccent,
                    }}
                  >
                    {o.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustCredentialsPanel mobile onContactExpert={onContactExpert} />

        <WhyVrindavanSection />
      </div>
    </section>
  );
};

export default TulsiOverviewSection;
