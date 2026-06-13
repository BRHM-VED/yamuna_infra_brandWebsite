import React, { useCallback, useEffect, useRef, useState } from 'react';
import PagerNavButton from '../../../components/common/PagerNavButton';
import { colors, fonts, strings } from '../../../utils';

import { MOBILE_X_PAD, TULSI_ASSETS, TULSI_FEATURES_ASSETS } from '../constants';

const ASSETS = TULSI_FEATURES_ASSETS;
const TW = colors.tulsiWings;

const MOBILE_SLIDE_WIDTH = 356;
const MOBILE_SLIDE_HEIGHT = 356;
const MOBILE_SLIDE_GAP = 12;

const DESKTOP_SLIDE_WIDTH = 998;
const DESKTOP_SLIDE_HEIGHT = 604;
const DESKTOP_SLIDE_GAP = 12;

/** Figma 3323:406–412 — desktop carousel frames & image crops */
const DESKTOP_SLIDES = [
  {
    src: `${ASSETS}/slide_1.webp`,
    frameClassName: '',
    frameBg: TW.featureSlideFrame,
    image: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1323.665px] w-[1007.331px] -translate-x-1/2 -translate-y-1/2">
        <img
          src={`${ASSETS}/slide_1.webp`}
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
  },
  {
    src: `${ASSETS}/slide_2.webp`,
    frameClassName: '',
    frameBg: undefined,
    image: (
      <div className="pointer-events-none absolute left-1/2 top-[calc(50%-0.15px)] h-[680.033px] w-[1009.652px] -translate-x-1/2 -translate-y-1/2">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={`${ASSETS}/slide_2.webp`}
            alt=""
            className="pointer-events-none absolute left-[-1.95%] top-[-2.25%] h-[103.26%] w-[105.09%] max-w-none"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    ),
  },
  {
    src: `${ASSETS}/slide_3.webp`,
    frameClassName: '',
    frameBg: undefined,
    image: (
      <div className="pointer-events-none absolute left-[calc(50%-1.79px)] top-[calc(50%+0.16px)] size-[997.198px] -translate-x-1/2 -translate-y-1/2">
        <img
          src={`${ASSETS}/slide_3.webp`}
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
  },
] as const;


/** Figma 3329:395–401 — mobile carousel frames & image crops */
const MOBILE_SLIDES = [
  {
    src: `${TULSI_ASSETS}/StandApartImage1.webp`,
    image: (
      <img
        src={`${TULSI_ASSETS}/StandApartImage1.webp`}
        alt=""
        className="pointer-events-none absolute max-w-none"
        style={{ width: 357.63, height: 469.94, left: -0.82, top: -56.97 }}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    ),
  },
  {
    src: `${TULSI_ASSETS}/StandApartImage2.webp`,
    image: (
      <img
        src={`${TULSI_ASSETS}/StandApartImage2.webp`}
        alt=""
        className="pointer-events-none absolute max-w-none"
        style={{ width: 554.35, height: 373.37, left: -58.77, top: -9.39 }}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    ),
  },
  {
    src: `${TULSI_ASSETS}/StandApartsImage3.webp`,
    image: (
      <img
        src={`${TULSI_ASSETS}/StandApartsImage3.webp`}
        alt=""
        className="pointer-events-none absolute max-w-none"
        style={{ width: 358.83, height: 358.83, left: -1.41, top: -1.41 }}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    ),
  },
] as const;

type CarouselNavProps = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  className?: string;
};

const CarouselNav: React.FC<CarouselNavProps> = ({
  onPrev,
  onNext,
  canPrev,
  canNext,
  className,
}) => (
  <div className={`flex items-center justify-center gap-[14px] ${className ?? ''}`}>
    <PagerNavButton
      direction="prev"
      size="xl"
      aria-label="Previous"
      onClick={onPrev}
      disabled={!canPrev}
      className="border-none disabled:!opacity-40"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        border: 'none',
        color: 'rgba(90, 85, 80, 0.3)',
      }}
    />
    <PagerNavButton
      direction="next"
      size="xl"
      aria-label="Next"
      onClick={onNext}
      disabled={!canNext}
      className="border-none disabled:!opacity-40"
      style={{
        backgroundColor: colors.surface,
        border: 'none',
        color: colors.secondary,
      }}
    />
  </div>
);

type AmenityCardProps = {
  label: string;
  image: string;
  elderlySpecial?: boolean;
};

/** Figma 3323:477 / 3323:478 — amenity card with full-card gradient overlay */
const AmenityCard: React.FC<AmenityCardProps> = ({ label, image, elderlySpecial }) => (
  <div
    className="relative flex h-[187.785px] min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-[4.846px] shadow-[0px_2.423px_10.601px_rgba(0,0,0,0.16)] lg:h-[244.785px] lg:w-[228px] lg:flex-none lg:shrink-0 lg:rounded-[6.317px] lg:shadow-[0px_3.159px_13.819px_rgba(0,0,0,0.16)]"
  >
    <img
      src={`${ASSETS}/${image}`}
      alt={label}
      className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[4.846px] object-cover lg:rounded-[6.317px]"
      draggable={false}
      loading="lazy"
      decoding="async"
    />
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent to-black/80"
      aria-hidden
    />
    {elderlySpecial ? (
      <div
        className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center justify-center rounded-b-[9.206px] px-[10.74px] py-[6.137px] lg:rounded-b-xl lg:px-[14px] lg:py-2"
        style={{ backgroundColor: TW.elderlyBadge }}
      >
        <span
          className="whitespace-nowrap text-[9.206px] font-bold uppercase leading-normal text-white lg:text-xs"
          style={{ fontFamily: fonts.body }}
        >
          {strings.tulsiWings.features.amenities.elderlyBadge}
        </span>
      </div>
    ) : null}
    <div className="relative z-10 flex w-full items-center px-[14.538px] py-[12.115px] lg:px-[18.951px] lg:py-[15.793px]">
      <span
        className="whitespace-nowrap text-[13px] font-medium leading-normal text-white lg:text-[15.793px]"
        style={{ fontFamily: fonts.body }}
      >
        {label}
      </span>
    </div>
  </div>
);

const CAROUSEL_SCROLL_CLASS =
  'snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x]';

const TulsiFeaturesSection: React.FC = () => {
  const copy = strings.tulsiWings.features;
  const [slideIndex, setSlideIndex] = useState(1);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const clamped = Math.max(0, Math.min(DESKTOP_SLIDES.length - 1, index));
    const desktopOffset = clamped * (DESKTOP_SLIDE_WIDTH + DESKTOP_SLIDE_GAP);
    const mobileOffset = clamped * (MOBILE_SLIDE_WIDTH + MOBILE_SLIDE_GAP);
    desktopCarouselRef.current?.scrollTo({ left: desktopOffset, behavior });
    mobileCarouselRef.current?.scrollTo({ left: mobileOffset, behavior });
    setSlideIndex(clamped);
  }, []);

  const goPrevSlide = useCallback(() => {
    scrollToSlide(slideIndex - 1);
  }, [scrollToSlide, slideIndex]);

  const goNextSlide = useCallback(() => {
    scrollToSlide(slideIndex + 1);
  }, [scrollToSlide, slideIndex]);

  const handleCarouselScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>, slideWidth: number, gap: number) => {
      const index = Math.round(event.currentTarget.scrollLeft / (slideWidth + gap));
      const clamped = Math.max(0, Math.min(DESKTOP_SLIDES.length - 1, index));
      setSlideIndex((prev) => (prev === clamped ? prev : clamped));
    },
    [],
  );

  useEffect(() => {
    scrollToSlide(1, 'auto');
  }, [scrollToSlide]);

  const amenities = copy.amenities.items;

  return (
    <section className="flex w-full flex-col gap-0" style={{ backgroundColor: TW.bgCream }}>
      {/* Why Tulsi Wings Stands Apart — Figma 3323:402 / 3326:26 */}
      <div className="flex w-full flex-col items-center gap-9 lg:gap-[44px] lg:pt-[100px]">
        {/* Header — padded on mobile; full-width section above carousel */}
        <div className={`flex w-full flex-col items-center gap-5 text-center lg:gap-[20px] ${MOBILE_X_PAD} lg:px-0`}>
          <span
            className="text-[12px] font-bold uppercase tracking-[2.4px] lg:text-[15px] lg:tracking-[3px]"
            style={{ fontFamily: fonts.body, color: colors.destinationTag }}
          >
            {copy.standsApart.tagline}
          </span>
          <h2
            className="text-[28px] font-medium leading-normal lg:text-[48px] lg:whitespace-pre-line"
            style={{ fontFamily: fonts.heading, color: colors.secondary }}
          >
            <span className="lg:hidden">
              Why Tulsi Wings
              <br />
              Stands Apart
            </span>
            <span className="hidden lg:inline">{copy.standsApart.title}</span>
          </h2>
        </div>

        {/* Desktop carousel — Figma 3369:2, full viewport width */}
        <div
          ref={desktopCarouselRef}
          className={`hidden w-full lg:block ${CAROUSEL_SCROLL_CLASS}`}
          style={{ WebkitOverflowScrolling: 'touch' }}
          onScroll={(e) => handleCarouselScroll(e, DESKTOP_SLIDE_WIDTH, DESKTOP_SLIDE_GAP)}
        >
          <div
            className="flex w-max items-center gap-[12px]"
            style={{
              paddingLeft: `calc(50vw - ${DESKTOP_SLIDE_WIDTH / 2}px)`,
              paddingRight: `calc(50vw - ${DESKTOP_SLIDE_WIDTH / 2}px)`,
            }}
          >
            {DESKTOP_SLIDES.map((slide, index) => (
              <div
                key={slide.src}
                className={`relative shrink-0 snap-center overflow-hidden ${slide.frameClassName}`}
                style={{
                  width: DESKTOP_SLIDE_WIDTH,
                  height: DESKTOP_SLIDE_HEIGHT,
                  ...(slide.frameBg ? { backgroundColor: slide.frameBg } : {}),
                }}
              >
                {slide.image}
                <span className="sr-only">Slide {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile carousel — Figma 3326:26, full-bleed swipe */}
        <div
          ref={mobileCarouselRef}
          className={`w-full lg:hidden ${CAROUSEL_SCROLL_CLASS}`}
          style={{ WebkitOverflowScrolling: 'touch' }}
          onScroll={(e) => handleCarouselScroll(e, MOBILE_SLIDE_WIDTH, MOBILE_SLIDE_GAP)}
        >
          <div
            className="flex w-max items-center gap-[12px]"
            style={{
              paddingLeft: `calc(50vw - ${MOBILE_SLIDE_WIDTH / 2}px)`,
              paddingRight: `calc(50vw - ${MOBILE_SLIDE_WIDTH / 2}px)`,
            }}
          >
            {MOBILE_SLIDES.map((slide, index) => (
              <div
                key={slide.src}
                className="relative shrink-0 snap-center overflow-hidden"
                style={{ width: MOBILE_SLIDE_WIDTH, height: MOBILE_SLIDE_HEIGHT }}
              >
                {slide.image}
                <span className="sr-only">Slide {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`hidden w-full lg:flex lg:justify-center ${MOBILE_X_PAD} lg:px-0`}>
          <CarouselNav
            className="w-full max-w-[1431px]"
            onPrev={goPrevSlide}
            onNext={goNextSlide}
            canPrev={slideIndex > 0}
            canNext={slideIndex < DESKTOP_SLIDES.length - 1}
          />
        </div>
      </div>

      {/* World class amenities — Figma 3329:402 mobile / desktop px-40 */}
      <div
        className="w-full pb-[50px] pt-[70px] lg:mt-[80px] lg:bg-gradient-to-b lg:from-transparent lg:to-[var(--tw-amenities-gradient)] lg:px-[40px] lg:pb-[100px] lg:pt-[30px]"
        style={{
          ['--tw-amenities-gradient' as string]: colors.tertiary,
          backgroundColor: TW.bgCream,
        }}
      >
        {/* Mobile — full width with horizontal padding */}
        <div className={`flex w-full flex-col items-center gap-9 lg:hidden ${MOBILE_X_PAD}`}>
          <div className="flex w-full flex-col items-center gap-5 text-center">
            <span
              className="text-[12px] font-bold uppercase tracking-[2.4px]"
              style={{ fontFamily: fonts.body, color: colors.destinationTag }}
            >
              {copy.amenities.tagline}
            </span>
            <h2
              className="text-[28px] font-medium leading-normal"
              style={{ fontFamily: fonts.heading, color: colors.secondary }}
            >
              <span className="block">Experience Spiritual</span>
              <span className="block">Elevated Living</span>
            </h2>
            <p
              className="text-[18px] font-medium"
              style={{ fontFamily: fonts.body, color: colors.destinationTag }}
            >
              {copy.amenities.subtitle}
            </p>
          </div>

          <div className="flex w-full flex-col gap-[8.183px]">
            {[0, 2, 4, 6, 8, 10].map((start) => (
              <div key={start} className="flex w-full gap-[8.183px]">
                {amenities.slice(start, start + 2).map((item) => (
                  <AmenityCard key={item.label} {...item} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="mx-auto hidden w-full max-w-[1432px] flex-col items-center gap-10 lg:flex">
          <div className="flex flex-col items-center gap-[20px] text-center">
            <span
              className="text-[12px] font-bold uppercase tracking-[2.4px] lg:text-[15px] lg:tracking-[3px]"
              style={{ fontFamily: fonts.body, color: colors.destinationTag }}
            >
              {copy.amenities.tagline}
            </span>
            <h2
              className="text-[48px] font-medium leading-normal"
              style={{ fontFamily: fonts.heading, color: colors.secondary }}
            >
              {copy.amenities.titleStart}
              <span className="font-bold italic">{copy.amenities.titleItalic}</span>
              <br />
              {copy.amenities.titleEnd}
            </h2>
            <p
              className="text-[18px] font-medium lg:text-[32px]"
              style={{ fontFamily: fonts.body, color: colors.destinationTag }}
            >
              {copy.amenities.subtitle}
            </p>
          </div>

          {/* Desktop — Figma 3330:104, 6×2 rows gap 12 */}
          <div className="flex w-full max-w-[1428.438px] flex-col gap-3">
            <div className="flex gap-3">
              {amenities.slice(0, 6).map((item) => (
                <AmenityCard key={item.label} {...item} />
              ))}
            </div>
            <div className="flex gap-3">
              {amenities.slice(6, 12).map((item) => (
                <AmenityCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TulsiFeaturesSection;
