import React, { useMemo, useState } from 'react';
import { colors, fonts, pickTextStyle, strings, textStyles } from '../../../utils';
import { MOBILE_X_PAD, TULSI_ASSETS, TULSI_LOCATION_ASSETS } from '../constants';

const LOC = TULSI_LOCATION_ASSETS;
const MAP_SRC = `${TULSI_ASSETS}/LandAddress.webp`;
const tw = colors.tulsiWings;

const RESORT_LOGOS = {
  desktop: [
    { src: `${TULSI_ASSETS}/HyttCentric.svg`, alt: 'Hyatt Centric', className: 'h-[30.438px] w-[79.229px]' },
    { src: `${TULSI_ASSETS}/Radisson.png`, alt: 'Radisson', className: 'h-[28.794px] w-[100.78px]' },
    { src: `${TULSI_ASSETS}/Ramada.svg`, alt: 'Ramada by Wyndham', className: 'h-[28.34px] w-[100.78px]' },
    { src: `${TULSI_ASSETS}/TajVivanta.svg`, alt: 'Taj Vivanta', className: 'h-[42.65px] w-[89.273px]' },
    { src: `${TULSI_ASSETS}/Oberoi.svg`, alt: 'Oberoi Hotels & Resorts', className: 'h-[61.942px] w-[93.143px]' },
  ],
  mobile: [
    { src: `${TULSI_ASSETS}/HyttCentric.svg`, alt: 'Hyatt Centric', className: 'h-[17.197px] w-[44.764px]' },
    { src: `${TULSI_ASSETS}/Radisson.png`, alt: 'Radisson', className: 'h-[21.274px] w-[54.75px]' },
    { src: `${TULSI_ASSETS}/Ramada.svg`, alt: 'Ramada by Wyndham', className: 'h-[16.268px] w-[56.94px]' },
    { src: `${TULSI_ASSETS}/TajVivanta.svg`, alt: 'Taj Vivanta', className: 'h-[22.65px] w-[50.438px]' },
    { src: `${TULSI_ASSETS}/Oberoi.svg`, alt: 'Oberoi Hotels & Resorts', className: 'h-[34.997px] w-[52.625px]' },
  ],
} as const;

type HubThumb = { src: string; className: string };

type HubConfig = {
  id: string;
  thumbs: HubThumb[];
  textGap: 'sm' | 'md';
  mapWidth?: 'full' | 'narrow';
  scrollLabelWidth?: string;
};

const HUB_CONFIG: HubConfig[] = [
  {
    id: 'delhi-ncr',
    textGap: 'md',
    thumbs: [{ src: `${LOC}/hub_delhi.webp`, className: 'left-[-16.55px] top-[-45.79px] h-[197.62px] w-[117.2px]' }],
    scrollLabelWidth: 'w-[139.152px]',
  },
  {
    id: 'noida',
    textGap: 'md',
    thumbs: [
      { src: `${LOC}/hub_delhi.webp`, className: 'left-[-16.55px] top-[-45.79px] h-[197.62px] w-[117.2px]' },
      { src: `${LOC}/hub_noida.webp`, className: 'left-[-23.6px] top-[-7.02px] h-[104.18px] w-[156.19px]' },
    ],
  },
  {
    id: 'agra',
    textGap: 'md',
    thumbs: [{ src: `${LOC}/hub_agra.webp`, className: 'left-[-10px] top-[-71.97px] h-[168.57px] w-[112.38px]' }],
  },
  {
    id: 'jewar',
    textGap: 'md',
    mapWidth: 'narrow',
    thumbs: [{ src: `${LOC}/hub_jewar.webp`, className: 'left-[-33.67px] top-[-5px] h-[105.29px] w-[158.06px]' }],
    scrollLabelWidth: 'w-[119.422px]',
  },
  {
    id: 'railway',
    textGap: 'sm',
    mapWidth: 'narrow',
    thumbs: [{ src: `${LOC}/hub_railway.webp`, className: 'left-0 top-[-0.85px] h-[91.7px] w-[163.03px]' }],
  },
];

const MAP_HOTSPOTS = [
  { hubIndex: 0, left: '16.53%', top: '10.74%' },
  { hubIndex: 0, left: '22.49%', top: '14.85%' },
  { hubIndex: 1, left: '29.37%', top: '14.71%' },
  { hubIndex: 3, left: '33.66%', top: '33.53%' },
  { hubIndex: 4, left: '34.72%', top: '55.88%' },
  { hubIndex: 2, left: '59.06%', top: '65.88%' },
] as const;

type HubItem = { time: string; label: string; config: HubConfig };

const HubThumbnail: React.FC<{ thumbs: HubThumb[] }> = ({ thumbs }) => (
  <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-[2px] bg-white">
    {thumbs.map((thumb) => (
      <img
        key={`${thumb.src}-${thumb.className}`}
        src={thumb.src}
        alt=""
        className={`absolute max-w-none object-cover ${thumb.className}`}
        loading="lazy"
        decoding="async"
      />
    ))}
  </div>
);

const TravelHubCard: React.FC<
  HubItem & {
    variant: 'desktop' | 'scroll';
    active?: boolean;
    onActivate?: () => void;
  }
> = ({ time, label, config, variant, active, onActivate }) => {
  const isDesktop = variant === 'desktop';
  const borderColor = tw.softBlueBorder;
  const timeType = pickTextStyle(textStyles.hubCardTime, !isDesktop);
  const labelType = pickTextStyle(textStyles.hubCardLabel, !isDesktop);

  if (isDesktop) {
    return (
      <div
        onMouseEnter={onActivate}
        className={`flex items-center gap-[16.114px] overflow-hidden rounded-[2px] border-solid p-3 transition-colors ${
          active ? 'border' : 'border-[0.504px] bg-white'
        } ${config.mapWidth === 'narrow' ? 'w-[350px]' : 'w-full'}`}
        style={
          active
            ? {
                borderColor: tw.hubCardActiveBorder,
                backgroundColor: tw.hubCardActiveBg,
              }
            : undefined
        }
      >
        <HubThumbnail thumbs={config.thumbs} />
        <div className={`flex min-w-0 flex-1 flex-col ${config.textGap === 'sm' ? 'gap-1' : 'gap-[8.057px]'}`}>
          <p className="m-0 whitespace-nowrap" style={{ fontFamily: fonts.heading, color: tw.darkBlue, ...timeType }}>
            {time}
          </p>
          <p className="m-0" style={{ fontFamily: fonts.body, color: tw.hubLabelBrown, ...labelType }}>
            {label}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-[114px] w-[276px] shrink-0 items-center gap-[16.114px] overflow-hidden rounded-[2px] border-[0.504px] border-solid bg-white p-3"
      style={{ borderColor, outline: `0.5px solid ${borderColor}`, outlineOffset: '-0.5px' }}
    >
      <HubThumbnail thumbs={config.thumbs} />
      <div className={`flex min-w-0 flex-1 flex-col ${config.textGap === 'sm' ? 'gap-1' : 'gap-2'}`}>
        <p className="m-0 whitespace-nowrap" style={{ fontFamily: fonts.heading, color: tw.darkBlue, ...timeType }}>
          {time}
        </p>
        <p
          className={`m-0 ${config.scrollLabelWidth ?? ''}`}
          style={{ fontFamily: fonts.body, color: tw.hubLabelBrown, ...labelType }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

const LocationHeading: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const t = strings.tulsiWings.location;
  const tagType = pickTextStyle(textStyles.sectionTag, !!compact);
  const titleType = pickTextStyle(textStyles.sectionTitle, !!compact);
  const descType = pickTextStyle(textStyles.sectionDescription, !!compact);

  return (
    <div className="flex w-full flex-col items-center gap-5 text-center">
      <p
        className="m-0 w-full uppercase"
        style={{ fontFamily: fonts.body, color: colors.destinationTag, ...tagType }}
      >
        {t.tagline}
      </p>
      <div className={`flex w-full flex-col items-center gap-4 ${compact ? 'max-w-[350px]' : 'max-w-[690px]'}`}>
        <h2
          className="m-0 w-full whitespace-pre-line"
          style={{ fontFamily: fonts.heading, color: tw.sectionHeading, ...titleType }}
        >
          {t.title}
        </h2>
        <p className="m-0 w-full text-black" style={{ fontFamily: fonts.body, ...descType }}>
          {t.description}
        </p>
      </div>
    </div>
  );
};

const ResortsStrip: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const r = strings.tulsiWings.location.resorts;
  const titleType = pickTextStyle(textStyles.locationResortTitle, !!compact);
  const subtitleType = pickTextStyle(textStyles.locationResortSubtitle, !!compact);

  return (
    <div className={`relative w-full shrink-0 bg-white ${compact ? 'h-[202px]' : 'h-[233px]'}`}>
      <div
        className={`absolute left-1/2 flex -translate-x-1/2 flex-col items-center ${
          compact ? 'top-[30px] gap-[22px]' : 'top-10 gap-[22px]'
        }`}
      >
        <div className={`flex flex-col items-center gap-[9px] text-center ${compact ? '' : 'w-[443px]'}`}>
          <h3
            className={`m-0 ${compact ? 'whitespace-nowrap' : ''}`}
            style={{ fontFamily: fonts.heading, color: tw.sectionHeading, ...titleType }}
          >
            {compact ? (
              <>
                <span className="block whitespace-pre">{`Surrounded by `}</span>
                <span className="block whitespace-pre">7-star retreats</span>
              </>
            ) : (
              r.title
            )}
          </h3>
          <p
            className={`m-0 ${compact ? 'w-[257.914px]' : ''}`}
            style={{ fontFamily: fonts.body, color: tw.hubLabelBrown, ...subtitleType }}
          >
            {r.subtitle}
          </p>
        </div>
        <div
          className={`flex items-center justify-center ${
            compact ? 'w-[349.914px] gap-[22.6px]' : 'w-full gap-20'
          }`}
        >
          {(compact ? RESORT_LOGOS.mobile : RESORT_LOGOS.desktop).map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`shrink-0 object-contain object-center ${logo.className}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const TulsiLocationSection: React.FC = () => {
  const [activeHub, setActiveHub] = useState<number | null>(null);

  const hubs = useMemo<HubItem[]>(
    () =>
      strings.tulsiWings.location.hubs.map((hub, index) => ({
        time: hub.time,
        label: hub.label,
        config: HUB_CONFIG[index],
      })),
    [],
  );

  return (
    <section className="w-full" style={{ backgroundColor: tw.bgCream }}>
      {/* Desktop */}
      <div className="hidden flex-col gap-[25px] pt-[140px] lg:flex">
        <div className="flex w-full justify-center">
          <LocationHeading />
        </div>

        <div
          className="relative h-[680px] w-full overflow-hidden bg-white"
          onMouseLeave={() => setActiveHub(null)}
        >
          <img
            src={MAP_SRC}
            alt="Connectivity map around Tulsi Wings, Vrindavan"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />

          {MAP_HOTSPOTS.map((spot, i) => (
            <button
              key={i}
              type="button"
              aria-label={hubs[spot.hubIndex]?.label}
              className="absolute z-10 h-[12.5%] w-[4.23%] cursor-default bg-transparent p-0"
              style={{ left: spot.left, top: spot.top }}
              onMouseEnter={() => setActiveHub(spot.hubIndex)}
            />
          ))}

          <div className="pointer-events-none absolute right-0 top-px flex items-start px-10 py-[30px]">
            <div className="pointer-events-auto flex w-[351px] flex-col gap-3">
              {hubs.map((hub, index) => (
                <TravelHubCard
                  key={hub.config.id}
                  {...hub}
                  variant="desktop"
                  active={activeHub === index}
                  onActivate={() => setActiveHub(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <ResortsStrip />
      </div>

      {/* Mobile — map image only (cards baked into asset); hub cards in scroll row below */}
      <div className="-mx-4 flex flex-col gap-8 py-20 lg:hidden">
        <div className="flex w-full flex-col items-center gap-[22px]">
          <div className={`w-full ${MOBILE_X_PAD}`}>
            <LocationHeading compact />
          </div>

          <div className="relative h-[383px] w-full overflow-hidden bg-white">
            <img
              src={MAP_SRC}
              alt="Connectivity map around Tulsi Wings, Vrindavan"
              className="pointer-events-none absolute left-[-237.17px] top-[-27.27px] h-[418.622px] w-[866.815px] max-w-none object-cover object-bottom"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="h-[114px] w-full overflow-x-auto pl-4 pr-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2">
              {hubs.map((hub) => (
                <TravelHubCard key={hub.config.id} {...hub} variant="scroll" />
              ))}
            </div>
          </div>
        </div>

        <ResortsStrip compact />
      </div>
    </section>
  );
};

export default TulsiLocationSection;
