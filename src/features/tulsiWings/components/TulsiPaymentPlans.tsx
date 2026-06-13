import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { MOBILE_X_PAD, TULSI_PAYMENT_ASSETS } from '../constants';

const PAYMENT = colors.tulsiWings;

/** Figma 3326:34 / 3323:810 — Plan B/C outline CTA */
const PLAN_OUTLINE_CTA = {
  color: PAYMENT.darkBlue,
  fontSize: '15px',
  lineHeight: '24px',
  fontWeight: 500,
  desktopWidth: '211px',
} as const;

const ASSETS = TULSI_PAYMENT_ASSETS;

const PAYMENT_ICONS = {
  concierge: 'concierge.webp',
  hotel: 'hotel.webp',
} as const;

const BANK_TILES = [
  {
    id: 'idfc',
    background: PAYMENT.planBRed,
    icon: 'idfc.webp',
    desktopIconClass: 'h-[33.352px] w-[93.895px]',
    mobileIconClass: 'h-[33.35px] w-[93.89px]',
  },
  {
    id: 'icici',
    background: PAYMENT.planBPink,
    icon: 'icici.webp',
    desktopIconClass: 'h-[28.604px] w-[142.277px]',
    mobileIconClass: 'h-[23.853px] w-[118.646px]',
  },
  {
    id: 'pnb',
    background: PAYMENT.planBGold,
    icon: 'pnb.webp',
    desktopIconClass: 'h-[58.284px] w-[111.02px]',
    mobileIconClass: 'h-[47.441px] w-[92.58px]',
  },
  {
    id: 'hdfc',
    background: PAYMENT.planBBlue,
    icon: 'hdfc.webp',
    desktopIconClass: 'h-[41.574px] w-[155.879px]',
    mobileIconClass: 'h-[34.669px] w-[129.989px]',
  },
  {
    id: 'sbi',
    background: PAYMENT.planBLightBlue,
    icon: 'sbi.webp',
    desktopIconClass: 'h-[42.084px] w-[74.816px]',
    mobileIconClass: 'h-[42.08px] w-[74.82px]',
  },
] as const;

interface TulsiPaymentPlansProps {
  onDownloadDetails: () => void;
  onCheckEligibility: () => void;
  onContactExpert: () => void;
  onCalculateReturn?: () => void;
}

type AfterPossessionCardProps = {
  variant: 'percent' | 'icon';
  value?: string;
  iconSrc?: string;
  iconSize?: string;
  title: string;
  descLines: readonly string[];
  showTrend?: boolean;
};

const DescLines: React.FC<{ lines: readonly string[] }> = ({ lines }) => (
  <>
    {lines.map((line, index) => (
      <p key={`${line}-${index}`} className={index < lines.length - 1 ? 'mb-0' : undefined}>
        {line}
      </p>
    ))}
  </>
);

const AfterPossessionCard: React.FC<AfterPossessionCardProps> = ({
  variant,
  value,
  iconSrc,
  iconSize = 'size-16',
  title,
  descLines,
  showTrend,
}) => (
  <div className="relative h-[230px] w-[174px] shrink-0 overflow-hidden border border-white/20 lg:w-[186px]">
    <div
      className="absolute -left-[5px] -top-px h-[120px] w-[184px] overflow-hidden lg:left-1/2 lg:top-[-1.15px] lg:-translate-x-1/2"
      style={{ backgroundColor: PAYMENT.featureHeader }}
    >
      {variant === 'percent' ? (
        <p
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-[60px] leading-[1.11]"
          style={{ fontFamily: fonts.body, color: PAYMENT.featurePercent }}
        >
          {value}
        </p>
      ) : (
        <img
          src={iconSrc}
          alt=""
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${iconSize}`}
          loading="lazy"
          decoding="async"
        />
      )}
      {showTrend ? (
        <img
          src={`${ASSETS}/trending_up.webp`}
          alt=""
          className="absolute right-2 top-2 size-8 lg:right-[9px] lg:top-[7.85px]"
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
    <div className="absolute left-1/2 top-[140px] flex w-full -translate-x-1/2 flex-col items-center gap-2 px-2 text-center text-white">
      <p className="text-base font-semibold leading-[1.11]" style={{ fontFamily: fonts.body }}>
        {title}
      </p>
      <div className="text-xs leading-[1.3] opacity-90" style={{ fontFamily: fonts.body }}>
        <DescLines lines={descLines} />
      </div>
    </div>
  </div>
);

const AfterPossessionDivider: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-[18px]">
    <img src={`${ASSETS}/divider_line.webp`} alt="" className="h-px w-[62.621px] lg:w-[274.64px]" loading="lazy" decoding="async" />
    <span
      className="shrink-0 text-[15px] font-bold uppercase tracking-[3px]"
      style={{ fontFamily: fonts.body, color: PAYMENT.lightPeach }}
    >
      {label}
    </span>
    <img src={`${ASSETS}/divider_line.webp`} alt="" className="h-px w-[62.621px] lg:w-[274.64px]" loading="lazy" decoding="async" />
  </div>
);

const AfterPossessionGrid: React.FC<{ features: AfterPossessionCardProps[] }> = ({ features }) => (
  <div className="flex flex-col gap-2 lg:flex-row lg:gap-3">
    <div className="flex gap-2 lg:contents">
      {features.slice(0, 2).map((feature) => (
        <AfterPossessionCard key={feature.title} {...feature} />
      ))}
    </div>
    <div className="flex gap-[9px] lg:contents">
      {features.slice(2).map((feature) => (
        <AfterPossessionCard key={feature.title} {...feature} />
      ))}
    </div>
  </div>
);

type BankTileProps = {
  background: string;
  icon: string;
  iconClassName: string;
  horizontal?: boolean;
};

const BankTile: React.FC<BankTileProps> = ({ background, icon, iconClassName, horizontal }) => (
  <div
    className={
      horizontal
        ? 'relative flex h-[50.035px] w-[150.104px] shrink-0 items-center justify-center overflow-hidden rounded-[1.668px]'
        : 'relative flex h-[60px] w-full items-center justify-center overflow-hidden rounded-[2px]'
    }
    style={{ backgroundColor: background }}
  >
    <img
      src={`${ASSETS}/${icon}`}
      alt=""
      className={`max-w-none shrink-0 object-contain ${iconClassName}`}
      loading="lazy"
      decoding="async"
    />
  </div>
);

const PlanADownloadBar: React.FC<{
  onDownload: () => void;
  mobile?: boolean;
  label: string;
  buttonLabel: string;
}> = ({ onDownload, mobile, label, buttonLabel }) => (
  <div
    className={
      mobile
        ? 'flex h-[150px] w-full shrink-0 flex-col items-center justify-center px-[30px] py-[14px]'
        : 'flex h-[76px] w-full shrink-0 items-center justify-between py-[14px] pl-[30px] pr-[14px]'
    }
    style={{ backgroundColor: PAYMENT.lightPeach }}
  >
    {mobile ? (
      <div className="flex flex-col items-center gap-[33px]">
        <p
          className="whitespace-nowrap text-xl tracking-[0.1px] text-black"
          style={{ fontFamily: fonts.body }}
        >
          {label}
        </p>
        <button
          type="button"
          onClick={onDownload}
          className="flex w-[211px] items-center justify-center rounded-[2px] px-2 py-3"
          style={{ backgroundColor: PAYMENT.darkBlue }}
        >
          <span className="text-[15px] font-medium text-white" style={{ fontFamily: fonts.body }}>
            {buttonLabel}
          </span>
        </button>
      </div>
    ) : (
      <>
        <p className="text-2xl tracking-[0.12px] text-black" style={{ fontFamily: fonts.body }}>
          {label}
        </p>
        <button
          type="button"
          onClick={onDownload}
          className="flex w-[211px] items-center justify-center rounded-[2px] px-2 py-3"
          style={{ backgroundColor: PAYMENT.darkBlue }}
        >
          <span className="text-[15px] font-medium text-white" style={{ fontFamily: fonts.body }}>
            {buttonLabel}
          </span>
        </button>
      </>
    )}
  </div>
);

const buildAfterPossessionFeatures = (
  features: typeof strings.tulsiWings.payment.planA.afterPossession.features,
): AfterPossessionCardProps[] =>
  features.map((feature) => {
    if (feature.type === 'icon') {
      return {
        variant: 'icon',
        iconSrc: `${ASSETS}/${PAYMENT_ICONS[feature.icon]}`,
        iconSize: feature.icon === 'hotel' ? 'size-[70px]' : 'size-16',
        title: feature.title,
        descLines: feature.descLines,
      };
    }

    return {
      variant: 'percent',
      value: feature.value,
      title: feature.title,
      descLines: feature.descLines,
      showTrend: feature.showTrend,
    };
  });

const PlanBCCard: React.FC<{
  planLabel: string;
  title: string;
  description: React.ReactNode;
  cta: string;
  onCta: () => void;
  desktop?: boolean;
  mobileHeight?: '220' | '300';
  desktopTop?: string;
  desktopGap?: string;
  bankTiles?: React.ReactNode;
}> = ({
  planLabel,
  title,
  description,
  cta,
  onCta,
  desktop,
  mobileHeight = '220',
  desktopTop = 'top-[36.15px]',
  desktopGap = 'gap-[85px]',
  bankTiles,
}) => (
  <div
    className={`relative w-full overflow-hidden border bg-white ${
      desktop ? 'h-[326px]' : mobileHeight === '300' ? 'h-[300px]' : 'h-[220px]'
    }`}
    style={{ borderColor: PAYMENT.planCardBorder }}
  >
    {bankTiles}
      <div
        className={`absolute flex flex-col items-start ${
        desktop
          ? `left-8 ${desktopTop} w-[320px] ${desktopGap}`
          : 'inset-x-4 top-[26.5px] gap-5'
      }`}
    >
      <div className={`flex flex-col ${desktop ? 'gap-[18px]' : 'gap-3'}`}>
        <span
          className={`font-bold uppercase tracking-[2.4px] ${
            desktop ? 'text-[15px] tracking-[3px]' : 'text-xs'
          }`}
          style={{ fontFamily: fonts.body, color: colors.destinationTag }}
        >
          {planLabel}
        </span>
        <div
          className={`flex flex-col text-black ${desktop ? 'gap-4' : 'gap-[14px]'}`}
          style={{ fontFamily: fonts.body }}
        >
          <p
            className={`font-medium leading-[1.11] opacity-80 ${
              desktop ? 'text-[28px]' : 'text-xl'
            }`}
          >
            {title}
          </p>
          <div
            className={`font-medium leading-[1.4] opacity-80 ${
              desktop ? 'text-sm' : 'w-full text-[13px]'
            }`}
          >
            {description}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onCta}
        className={`box-border flex items-center justify-center rounded-[2px] bg-transparent px-2 py-3 ${
          desktop ? 'inline-flex w-[211px] shrink-0 self-start' : 'w-full'
        }`}
        style={{
          width: desktop ? PLAN_OUTLINE_CTA.desktopWidth : undefined,
          color: PLAN_OUTLINE_CTA.color,
          fontFamily: fonts.body,
          fontSize: PLAN_OUTLINE_CTA.fontSize,
          lineHeight: PLAN_OUTLINE_CTA.lineHeight,
          fontWeight: PLAN_OUTLINE_CTA.fontWeight,
          outline: `1px solid ${PAYMENT.darkBlue}`,
          outlineOffset: '-1px',
        }}
      >
        {cta}
      </button>
    </div>
  </div>
);

export const TulsiPaymentPlans: React.FC<TulsiPaymentPlansProps> = ({
  onDownloadDetails,
  onCheckEligibility,
  onContactExpert,
  onCalculateReturn,
}) => {
  const t = strings.tulsiWings.payment;
  const afterPossessionFeatures = buildAfterPossessionFeatures(t.planA.afterPossession.features);

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile — Figma 3329:4 (page) / 3329:629 (payment block) */}
      <div className="w-full lg:hidden" style={{ backgroundColor: PAYMENT.bgCream }}>
        <div className={`flex w-full flex-col gap-6 py-10 ${MOBILE_X_PAD}`}>
        <h2
          className="w-full text-center text-[28px] font-medium"
          style={{ fontFamily: fonts.heading, color: PAYMENT.sectionHeading }}
        >
          {t.pageTitle}
        </h2>

        <div className="flex w-full flex-col items-stretch gap-4">
          {/* Plan A */}
          <div
            className="flex min-h-[969px] w-full flex-col overflow-hidden border"
            style={{ backgroundColor: PAYMENT.darkBlue, borderColor: PAYMENT.planCardBorder }}
          >
            <div className="flex flex-col gap-[23px] px-4 pt-[45px]">
              <span
                className="text-xs font-bold uppercase tracking-[2.4px]"
                style={{ fontFamily: fonts.body, color: PAYMENT.planTagline }}
              >
                {t.planA.name}
              </span>
              <div className="flex flex-col gap-[15px]" style={{ color: PAYMENT.bgCream }}>
                <p className="text-xl leading-[20px] tracking-[0.1px]" style={{ fontFamily: fonts.body }}>
                  {t.planA.headline}
                </p>
                <p className="text-[28px] font-bold uppercase" style={{ fontFamily: fonts.body }}>
                  {t.planA.assuredRental}*
                </p>
              </div>
              <button
                type="button"
                onClick={onCalculateReturn || onDownloadDetails}
                className="flex w-full items-center justify-center px-2 py-3"
                style={{ backgroundColor: PAYMENT.bgCream }}
              >
                <span
                  className="text-[15px] font-medium leading-6"
                  style={{ fontFamily: fonts.body, color: PAYMENT.darkBlue }}
                >
                  {t.calculateCta}
                </span>
              </button>
            </div>

            <div className="mt-[60px] flex flex-1 flex-col gap-[18px] px-4">
              <AfterPossessionDivider label={t.planA.afterPossession.tagline} />
              <AfterPossessionGrid features={afterPossessionFeatures} />
            </div>

            <PlanADownloadBar
              mobile
              onDownload={onDownloadDetails}
              label={t.planA.downloadCta}
              buttonLabel={t.planA.downloadBtn}
            />
          </div>

          <PlanBCCard
            planLabel={t.planB.name}
            title={t.planB.title}
            description={t.planB.desc}
            cta={t.planB.cta}
            onCta={onContactExpert}
          />

          <PlanBCCard
            planLabel={t.planC.name}
            title={t.planC.title}
            description={<DescLines lines={t.planC.descLines} />}
            cta={t.planC.cta}
            onCta={onCheckEligibility}
            mobileHeight="300"
            bankTiles={
              <div className="absolute inset-x-0 top-[223px] flex items-center gap-[6.671px] overflow-x-auto pl-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {BANK_TILES.map((bank) => (
                  <BankTile
                    key={bank.id}
                    background={bank.background}
                    icon={bank.icon}
                    iconClassName={bank.mobileIconClass}
                    horizontal
                  />
                ))}
              </div>
            }
          />
        </div>

        <p
          className="w-full text-center text-sm font-semibold uppercase"
          style={{ fontFamily: fonts.body, color: PAYMENT.grayText }}
        >
          {t.footnote}
        </p>
        </div>
      </div>

      {/* Desktop — Figma 3323:2 (page) / 3326:31 (payment block) */}
      <div className="hidden w-full justify-center bg-white py-[90px] lg:flex">
        <div className="flex w-full max-w-[1432px] flex-col items-center gap-[44px] px-10 xl:px-0">
          <h2
            className="w-full text-center text-[48px] font-medium"
            style={{ fontFamily: fonts.heading, color: PAYMENT.sectionHeading }}
          >
            {t.pageTitle}
          </h2>

          <div className="flex w-full items-stretch justify-between gap-3">
            {/* Plan A panel */}
            <div
              className="relative flex h-[664px] w-[854px] shrink-0 flex-col overflow-hidden"
              style={{ backgroundColor: PAYMENT.darkBlue }}
            >
              <button
                type="button"
                onClick={onContactExpert}
                className="absolute right-[37px] top-[42.15px] z-10 flex h-12 w-[123px] items-center justify-center gap-2 rounded-[143px] border border-white"
                style={{ backgroundColor: PAYMENT.darkBlue }}
              >
                <img src={`${ASSETS}/agent.webp`} alt="" className="size-6" loading="lazy" decoding="async" />
                <span className="text-[15px] font-medium text-white" style={{ fontFamily: fonts.body }}>
                  {t.expertCta}
                </span>
              </button>

              <div className="flex min-h-0 flex-1 flex-col gap-10 px-[37px] pt-[42.15px]">
                <div className="flex w-[466px] flex-col gap-[23px]">
                  <span
                    className="text-[15px] font-bold uppercase tracking-[3px]"
                    style={{ fontFamily: fonts.body, color: PAYMENT.planTagline }}
                  >
                    {t.planA.name}
                  </span>
                  <div className="flex flex-col gap-[15px]" style={{ color: PAYMENT.bgCream }}>
                    <p
                      className="text-[32px] leading-[20px] tracking-[0.16px]"
                      style={{ fontFamily: fonts.body }}
                    >
                      {t.planA.headline}
                    </p>
                    <p className="uppercase" style={{ fontFamily: fonts.body }}>
                      <span className="text-[40px] font-bold">{t.planA.assuredRental}</span>
                      <span className="text-xl font-bold">*</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onCalculateReturn || onDownloadDetails}
                    className="flex w-[240px] items-center justify-center px-2 py-3"
                    style={{ backgroundColor: PAYMENT.bgCream }}
                  >
                    <span
                      className="text-[15px] font-medium leading-6"
                      style={{ fontFamily: fonts.body, color: PAYMENT.darkBlue }}
                    >
                      {t.calculateCta}
                    </span>
                  </button>
                </div>

                <div className="flex min-h-0 flex-1 flex-col gap-[18px]">
                  <AfterPossessionDivider label={t.planA.afterPossession.tagline} />
                  <div className="flex gap-3">
                    {afterPossessionFeatures.map((feature) => (
                      <AfterPossessionCard key={feature.title} {...feature} />
                    ))}
                  </div>
                </div>
              </div>

              <PlanADownloadBar
                onDownload={onDownloadDetails}
                label={t.planA.downloadCta}
                buttonLabel={t.planA.downloadBtn}
              />
            </div>

            {/* Plan B & C */}
            <div className="flex w-[566px] shrink-0 flex-col gap-3">
              <PlanBCCard
                desktop
                planLabel={t.planB.name}
                title={t.planB.title}
                description={t.planB.desc}
                cta={t.planB.cta}
                onCta={onContactExpert}
              />

              <PlanBCCard
                desktop
                desktopTop="top-[30.95px]"
                desktopGap="gap-[93px]"
                planLabel={t.planC.name}
                title={t.planC.title}
                description={<DescLines lines={t.planC.descLines} />}
                cta={t.planC.cta}
                onCta={onCheckEligibility}
                bankTiles={
                  <div className="absolute left-[355px] top-[-5px] flex w-[180px] flex-col gap-[14px]">
                    {BANK_TILES.map((bank) => (
                      <BankTile
                        key={bank.id}
                        background={bank.background}
                        icon={bank.icon}
                        iconClassName={bank.desktopIconClass}
                      />
                    ))}
                  </div>
                }
              />
            </div>
          </div>

          <p
            className="text-sm font-semibold uppercase"
            style={{ fontFamily: fonts.body, color: PAYMENT.grayText }}
          >
            {t.footnote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TulsiPaymentPlans;
