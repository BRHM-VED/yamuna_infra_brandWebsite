import React from 'react';
import { colors, fonts, pickTextStyle, strings, textStyles } from '../../../utils';
import { MOBILE_X_PAD } from '../constants';

const TW = colors.tulsiWings;

const CONFIG_IMAGE_BG: Record<string, string> = {
  'Compact Luxury': TW.configCompactBg,
  Spacious: TW.configSpaciousBg,
  'Premium Family': TW.configPremiumBg,
};

type ConfigurationItem = (typeof strings.tulsiWings.configurations.items)[number] & {
  imageBg: string;
};

const CONFIGURATIONS: ConfigurationItem[] = strings.tulsiWings.configurations.items.map(
  (item) => ({
    ...item,
    imageBg: CONFIG_IMAGE_BG[item.name] ?? TW.bgCream,
  }),
);

interface TulsiConfigurationsSectionProps {
  onGetCallback: () => void;
}

function ConfigurationImage({
  config,
  variant,
}: {
  config: ConfigurationItem;
  variant: 'mobile' | 'desktop';
}) {
  const heightClass = variant === 'mobile' ? 'h-[246.125px]' : 'h-[264px]';

  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden ${heightClass}`}
      style={{ backgroundColor: config.imageBg }}
    >
      <img
        src={config.imageSrc}
        alt={`${config.type} - ${config.name}`}
        className="pointer-events-none size-full object-cover object-center"
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function ConfigLabel({ config, isMobile }: { config: ConfigurationItem; isMobile: boolean }) {
  return (
    <p
      className={`font-medium uppercase text-black ${
        isMobile
          ? 'text-[13.05px] leading-[18.65px] tracking-[0.59px]'
          : 'text-sm leading-5 tracking-[0.63px]'
      }`}
    >
      {config.type} · {config.name}
    </p>
  );
}

interface ConfigurationCardProps {
  config: ConfigurationItem;
  variant: 'mobile' | 'desktop';
  onGetCallback: () => void;
}

function ConfigurationCard({ config, variant, onGetCallback }: ConfigurationCardProps) {
  const copy = strings.tulsiWings.configurations;
  const isMobile = variant === 'mobile';
  const description =
    isMobile && 'mobileDescription' in config && config.mobileDescription
      ? config.mobileDescription
      : config.description;

  return (
    <article
      className={`flex w-full flex-col items-center overflow-hidden border bg-white ${
        isMobile ? '' : 'h-full min-h-full flex-1'
      }`}
      style={{ borderColor: TW.planCardBorder }}
    >
      <ConfigurationImage config={config} variant={variant} />

      <div
        className={`flex w-full flex-col items-start bg-white ${
          isMobile ? 'gap-[22.375px] p-[18.646px]' : 'flex-1 gap-6 p-5'
        }`}
      >
        <div
          className={`flex w-full flex-col items-start ${isMobile ? 'gap-[14.92px]' : 'flex-1 gap-4'}`}
        >
          <div className={`flex flex-col items-start ${isMobile ? 'gap-[7.46px]' : 'gap-2'}`}>
            <ConfigLabel config={config} isMobile={isMobile} />

            {isMobile ? (
              <div className="flex flex-col items-start gap-1">
                <div className="inline-flex items-start gap-1.5">
                  <span className="text-[28px] font-bold uppercase tracking-[1.26px] text-black">
                    {config.area}
                  </span>
                  <span className="text-[14.92px] tracking-[0.67px] text-black"> {copy.sqFt}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <div className="flex items-start gap-1.5">
                    <span className="text-[16.78px] font-medium leading-[22.38px] tracking-[0.76px] text-black">
                      {config.balconies}
                    </span>
                    <span className="text-[13.98px] leading-[22.38px] tracking-[0.63px] text-black">
                      {copy.balconies}
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-[16.78px] font-medium leading-[22.38px] tracking-[0.76px] text-black">
                      {config.bedrooms}
                    </span>
                    <span className="text-[13.98px] leading-[22.38px] tracking-[0.63px] text-black">
                      {copy.bedroom}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="inline-flex items-start gap-2">
                <span className="text-[28px] font-bold uppercase tracking-[1.26px] text-black">
                  {config.area}
                </span>
                <span className="text-base tracking-[0.72px] text-black"> {copy.sqFt}</span>
              </div>
            )}
          </div>

          {!isMobile && (
            <div className="flex w-full items-center gap-[18px]">
              <div className="flex flex-1 flex-col items-start">
                <span className="text-lg font-medium leading-6 tracking-[0.81px] text-black">
                  {config.balconies}
                </span>
                <span className="text-[15px] leading-6 tracking-[0.68px] text-black">
                  {copy.balconies}
                </span>
              </div>
              <div className="flex flex-1 flex-col items-start">
                <span className="text-lg font-medium leading-6 tracking-[0.81px] text-black">
                  {config.bedrooms}
                </span>
                <span className="text-[15px] leading-6 tracking-[0.68px] text-black">
                  {copy.bedroom}
                </span>
              </div>
            </div>
          )}

          <p
            className={`w-full text-black ${
              isMobile
                ? 'text-[13.98px] leading-[18.65px] tracking-[0.07px]'
                : 'text-[15px] leading-5 tracking-[0.07px]'
            }`}
          >
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={onGetCallback}
          className={`flex w-full shrink-0 items-center justify-center text-white ${
            isMobile
              ? 'px-[7.46px] py-[11.19px] text-[13.98px] font-semibold leading-[22.38px]'
              : 'mt-auto px-2 py-3 text-[15px] font-medium leading-6'
          }`}
          style={{ backgroundColor: TW.darkBlue }}
        >
          {isMobile ? copy.ctaMobile : copy.ctaDesktop}
        </button>
      </div>
    </article>
  );
}

function SectionHeader({ variant }: { variant: 'mobile' | 'desktop' }) {
  const copy = strings.tulsiWings.configurations;
  const isMobile = variant === 'mobile';
  const tagType = pickTextStyle(textStyles.sectionTag, isMobile);
  const titleType = pickTextStyle(textStyles.sectionTitle, isMobile);

  return (
    <div className="flex flex-col items-center gap-5">
      <span
        className="text-center uppercase"
        style={{ fontFamily: fonts.body, color: colors.destinationTag, ...tagType }}
      >
        {copy.tagline}
      </span>
      <h2
        className="text-center"
        style={{ fontFamily: fonts.heading, color: TW.sectionHeading, ...titleType }}
      >
        {copy.titleLine1}
        <br />
        {copy.titleLine2}
      </h2>
    </div>
  );
}

export const TulsiConfigurationsSection: React.FC<TulsiConfigurationsSectionProps> = ({
  onGetCallback,
}) => {
  return (
    <section className="w-full" style={{ backgroundColor: TW.bgCream }}>
      <div className="hidden justify-center overflow-hidden py-[90px] lg:flex">
        <div className="flex w-full max-w-[1176px] flex-col items-center gap-[43px] px-6 xl:px-0">
          <SectionHeader variant="desktop" />
          <div className="flex w-full items-stretch justify-start gap-3">
            {CONFIGURATIONS.map((config) => (
              <div key={`desktop-${config.name}`} className="flex w-[384px] shrink-0 flex-col">
                <ConfigurationCard config={config} variant="desktop" onGetCallback={onGetCallback} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`w-full pt-[60px] pb-10 lg:hidden ${MOBILE_X_PAD}`}>
        <div className="flex w-full flex-col items-center gap-12">
          <SectionHeader variant="mobile" />
          <div className="flex w-full flex-col items-start gap-2">
            {CONFIGURATIONS.map((config) => (
              <ConfigurationCard
                key={`mobile-${config.name}`}
                config={config}
                variant="mobile"
                onGetCallback={onGetCallback}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TulsiConfigurationsSection;
