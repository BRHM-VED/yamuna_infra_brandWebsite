import React, { useCallback, useEffect, useRef, useState } from 'react';
import { colors, fonts, pickTextStyle, strings, textStyles } from '../../../utils';
import { MOBILE_X_PAD, TULSI_TIMELINE_ASSETS } from '../constants';

const TW = colors.tulsiWings;
const TIMELINE_ASSETS = TULSI_TIMELINE_ASSETS;
const DESKTOP_TRACK_HEIGHT = 660;
const DESKTOP_PROGRESS_INITIAL = 72;
const DESKTOP_IMAGE = `${TIMELINE_ASSETS}/timeline_desktop.webp`;

const MOBILE_STEP_IMAGES = [
  `${TIMELINE_ASSETS}/timeline_spiritual_tourism.webp`,
  `${TIMELINE_ASSETS}/timeline_infrastructure_surge.webp`,
  `${TIMELINE_ASSETS}/timeline_launch_window.webp`,
  `${TIMELINE_ASSETS}/timeline_jewar_airport.webp`,
  `${TIMELINE_ASSETS}/timeline_elevated_corridor.webp`,
  `${TIMELINE_ASSETS}/timeline_appreciation.webp`,
] as const;

function isCurrentPeriod(period: string) {
  return period.toUpperCase().includes('NOW');
}

function NowBadge({ period, size }: { period: string; size: 'mobile' | 'desktop' }) {
  const textClass =
    size === 'mobile'
      ? 'text-xs font-medium uppercase leading-5 tracking-[0.54px]'
      : 'text-lg font-medium uppercase leading-5 tracking-[0.81px]';

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="relative h-3.5 w-3.5 shrink-0 overflow-hidden"
        style={{ backgroundColor: `${TW.darkBlue}33` }}
      >
        <span
          className="absolute left-[2.7px] top-[2.7px] h-[8.59px] w-[8.59px]"
          style={{ backgroundColor: TW.darkBlue }}
        />
      </span>
      <span className={textClass} style={{ color: TW.darkBlue }}>
        {period}
      </span>
    </span>
  );
}

function TimelineDot({ active }: { active: boolean }) {
  const accent = active ? TW.darkBlue : TW.timelineInactive;
  const ring = `${accent}33`;
  const core = accent;

  return (
    <div className="relative z-10 h-7 w-7 shrink-0">
      <div className="absolute inset-0" style={{ backgroundColor: ring }} />
      <div className="absolute left-2 top-2 h-3 w-3" style={{ backgroundColor: core }} />
    </div>
  );
}

function useActiveStep(count: number, rootMargin = '-35% 0px -45% 0px') {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  const setStepRef = useCallback((index: number) => (el: HTMLElement | null) => {
    stepRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const idx = Number(visible[0].target.getAttribute('data-step-index'));
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { root: null, rootMargin, threshold: [0.15, 0.35, 0.55, 0.75] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [count, rootMargin]);

  return { activeIndex, setStepRef };
}

function SectionHeader({ variant }: { variant: 'mobile' | 'desktop' }) {
  const t = strings.tulsiWings.timeline;
  const isMobile = variant === 'mobile';
  const tagType = pickTextStyle(textStyles.sectionTag, isMobile);
  const titleType = pickTextStyle(textStyles.sectionTitle, isMobile);

  return (
    <div
      className={`flex flex-col items-center ${isMobile ? 'w-[241px] gap-5' : 'w-[379px] gap-5'}`}
    >
      <span
        className="w-full text-center uppercase"
        style={{ fontFamily: fonts.body, color: colors.destinationTag, ...tagType }}
      >
        {t.tagline}
      </span>
      <h2
        className="whitespace-nowrap text-center"
        style={{ fontFamily: fonts.heading, color: TW.sectionHeading, ...titleType }}
      >
        {t.title}
      </h2>
    </div>
  );
}

function DesktopTimeline() {
  const t = strings.tulsiWings.timeline;
  const currentStepIndex = t.steps.findIndex((step) => isCurrentPeriod(step.period));
  const highlightIndex = currentStepIndex >= 0 ? currentStepIndex : 0;
  const progressPx =
    t.steps.length > 1
      ? Math.max(
          DESKTOP_PROGRESS_INITIAL,
          (highlightIndex / (t.steps.length - 1)) * DESKTOP_TRACK_HEIGHT,
        )
      : DESKTOP_PROGRESS_INITIAL;

  return (
    <div className="hidden w-full justify-center bg-white lg:flex">
      <div className="flex min-h-[947px] w-full max-w-[1512px] flex-col items-center justify-center px-10 pt-12">
        <div className="flex w-full max-w-[1432px] flex-col items-center gap-[60px]">
          <SectionHeader variant="desktop" />

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-8">
              <div
                className="relative w-[10px] shrink-0"
                style={{ height: DESKTOP_TRACK_HEIGHT, backgroundColor: TW.timelineTrack }}
              >
                <div
                  className="absolute left-0 top-0 w-full transition-[height] duration-200"
                  style={{ height: progressPx, backgroundColor: TW.darkBlue }}
                />
              </div>

              <div className="flex w-[670px] flex-col gap-5">
                {t.steps.map((step, index) => {
                  const isCurrent = isCurrentPeriod(step.period);
                  const isLast = index === t.steps.length - 1;

                  return (
                    <div key={step.title}>
                      <article className="flex flex-col gap-2.5">
                        <div className="flex items-center justify-between">
                          <h3
                            className="w-[546px] text-xl font-medium leading-[26px] tracking-[-0.1px] text-black"
                            style={{ fontFamily: fonts.heading }}
                          >
                            {step.title}
                          </h3>
                          {isCurrent ? (
                            <NowBadge period={step.period} size="desktop" />
                          ) : (
                            <span className="shrink-0 whitespace-nowrap text-right text-lg font-medium uppercase leading-5 tracking-[0.81px] text-black">
                              {step.period}
                            </span>
                          )}
                        </div>
                        <p className="text-[15px] leading-5 tracking-[0.075px] text-black">
                          {step.desc}
                        </p>
                      </article>
                      {!isLast && <div className="mt-5 h-px w-full max-w-[665px] bg-black/10" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="relative h-[660px] w-[638px] shrink-0 overflow-hidden"
              style={{ backgroundColor: TW.timelineTrack }}
            >
              <img
                src={DESKTOP_IMAGE}
                alt="Timeline"
                className="pointer-events-none size-full object-cover"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileTimeline() {
  const t = strings.tulsiWings.timeline;
  const { activeIndex, setStepRef } = useActiveStep(t.steps.length);
  const progressHeight =
    t.steps.length > 1 ? (activeIndex / (t.steps.length - 1)) * 100 : 0;

  return (
    <div className={`w-full bg-white py-10 lg:hidden ${MOBILE_X_PAD}`}>
      <div className="flex w-full flex-col gap-[43px]">
        <SectionHeader variant="mobile" />

        <div className="relative w-full">
          <div
            className="pointer-events-none absolute left-[13px] top-3 w-0.5"
            style={{ backgroundColor: TW.timelineConnector, height: 'calc(100% - 12px)' }}
            aria-hidden
          >
            <div
              className="absolute left-0 top-0 w-full transition-[height] duration-200"
              style={{
                height: `${Math.max(8, progressHeight)}%`,
                backgroundColor: TW.darkBlue,
              }}
            />
          </div>

          <div className="flex flex-col gap-5">
            {t.steps.map((step, index) => {
              const isCurrent = isCurrentPeriod(step.period);
              const imageSrc = MOBILE_STEP_IMAGES[index] ?? MOBILE_STEP_IMAGES[0];
              const desc = step.desc;
              const active = index <= activeIndex;
              const isLastTitle = index === t.steps.length - 1;

              return (
                <article
                  key={step.title}
                  ref={setStepRef(index)}
                  data-step-index={index}
                  className="flex w-full items-start justify-between"
                >
                  <TimelineDot active={active} />

                  <div className="flex gap-2">
                    <div
                      className="relative h-[118px] w-[138px] shrink-0 overflow-hidden"
                      style={{ backgroundColor: TW.timelineImagePlaceholder }}
                    >
                      <img
                        src={imageSrc}
                        alt=""
                        className="pointer-events-none size-full object-cover"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="flex w-[175px] flex-col gap-2.5">
                      <div className="flex flex-col gap-1">
                        {isLastTitle ? (
                          <h3
                            className="text-base font-medium leading-[1.3] tracking-[-0.08px] text-black"
                            style={{ fontFamily: fonts.heading }}
                          >
                            <span className="block">Appreciation</span>
                            <span className="block">Potential</span>
                          </h3>
                        ) : (
                          <h3
                            className="text-base font-medium leading-[1.3] tracking-[-0.08px] text-black"
                            style={{ fontFamily: fonts.heading }}
                          >
                            {step.title}
                          </h3>
                        )}
                        {isCurrent ? (
                          <NowBadge period={step.period} size="mobile" />
                        ) : (
                          <span className="text-xs font-medium uppercase leading-5 tracking-[0.54px] text-black">
                            {step.period}
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-[1.4] tracking-[0.06px] text-black opacity-[0.78]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const TulsiTimeline: React.FC = () => {
  return (
    <section className="w-full">
      <DesktopTimeline />
      <MobileTimeline />
    </section>
  );
};

export default TulsiTimeline;
