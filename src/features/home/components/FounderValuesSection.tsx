import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { colors, fonts, strings, textStyles } from '../../../utils';
import PagerNavButton from '../../../components/common/PagerNavButton';

const podCastBanner = '/assets/images/podCastBanner.webp';

/* ── Play icon (Figma: orange circle with white triangle) ─────────────────── */
const PlayIcon: React.FC = () => (
  <span
    className="flex items-center justify-center rounded-full shrink-0"
    style={{ width: 32, height: 32, backgroundColor: colors.about.founderPanel }}
  >
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <path d="M1 1.5L11 7L1 12.5V1.5Z" fill={colors.surface} />
    </svg>
  </span>
);

/* ── Video thumbnail card (matches Figma: #EFAF74 bg + button bottom-left) ── */
const FounderVideoThumbnail: React.FC<{ onPlay: () => void; isMobile?: boolean }> = ({ onPlay, isMobile }) => (
  <button
    type="button"
    onClick={onPlay}
    className="relative w-full overflow-hidden rounded-[2px] group focus:outline-none"
    style={{
      height: isMobile ? undefined : '252px',
      paddingBottom: isMobile ? '56.25%' : undefined,
      backgroundColor: colors.about.founderPanel,
    }}
    aria-label="Play founder video"
  >
    <img
      src={podCastBanner}
      alt=""
      className="absolute inset-0 z-0 h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />
    {/* Play button bottom-left — Figma padding: 19px bottom, 18px left */}
    <div
      className="absolute bottom-[19px] left-[18px] z-10 flex items-center gap-3 bg-white rounded-[2px] px-4 py-[10px] shadow-sm group-hover:scale-[1.03] transition-transform"
    >
      <PlayIcon />
      <span
        style={{
          fontFamily: fonts.body,
          fontSize: textStyles.bodyLarge.fontSize,
          lineHeight: '119%',
          letterSpacing: '-0.54px',
          fontWeight: 400,
          color: colors.secondary,
        }}
      >
        {strings.about.founderMessage}
      </span>
    </div>
  </button>
);

/* ── Modal that plays the YouTube video ────────────────────────────────────── */
const VideoModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const handleKey = useCallback((e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }, [onClose]);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Founder video"
    >
      {/* Close button — top right */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 transition-colors"
        style={{ width: 44, height: 44 }}
        aria-label="Close video"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 1L15 15M15 1L1 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/*
        Video container:
        – stops click propagation so clicking inside doesn't close modal
        – mobile: 92vw wide, 16/9 height calculated from width
        – desktop: max 860px wide, height = 860 × 9/16 = 484px
        – the iframe fills the container absolutely so it always stays 16:9
      */}
      <div
        className="relative w-[92vw] md:w-[min(860px,88vw)] rounded-[6px] overflow-hidden shadow-2xl"
        style={{ paddingBottom: 'min(calc(92vw * 9 / 16), calc(min(860px, 88vw) * 9 / 16))' }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src="https://www.youtube.com/embed/bioaf7YMGMA?autoplay=1&rel=0"
          title="Hear from the founder"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>

      {/* Tap-outside hint on mobile */}
      <p
        className="mt-5 text-white/40 text-[12px] md:hidden"
        style={{ fontFamily: fonts.body }}
      >
        Tap outside to close
      </p>
    </div>
  );
};

const FounderValuesSection: React.FC = () => {
  const scrollRefMobile = useRef<HTMLDivElement>(null);
  const scrollRefDesktop = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  // Hide "Values Proven Through Action" slider UI (mobile + desktop).
  const SHOW_VALUES_SLIDER = false;

  // Mobile: Figma shows 3 swipeable cards; keep strings unchanged and duplicate if needed.
  const valuesMobile = useMemo(() => {
    const base = strings.about.values ?? [];
    if (base.length >= 3) return base.slice(0, 3);
    if (base.length === 2) return [base[0], base[1], base[0]];
    if (base.length === 1) return [base[0], base[0], base[0]];
    return [];
  }, []);

  // Desktop: Figma shows 2 cards in the row
  const valuesDesktop = useMemo(() => {
    const base = strings.about.values ?? [];
    return base.slice(0, 2);
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollRefMobile.current;
    if (!el) return;

    const onScroll = () => {
      const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-value-card]'));
      if (!cards.length) return;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      cards.forEach((c, idx) => {
        const cMid = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cMid - mid);
        if (d < bestDist) {
          bestDist = d;
          best = idx;
        }
      });
      setActiveIdx(best);
    };

    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [valuesMobile.length]);

  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-[50px]">
        {/* Top Part: Founder Story (Figma) */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20">
          {/* Left: Founder Text */}
          <div className="flex-1 order-1 md:order-1">
            <h2 className="text-[40px] md:text-[56px] leading-[1.05]" style={{ fontFamily: fonts.heading, color: colors.text.primary }}>
              A Builder <br />
              From <span className="italic" style={{ color: colors.secondary, fontWeight: 700 }}>Vrindavan</span>
            </h2>

            {/* Desktop copy */}
            <div className="hidden md:block mt-6 max-w-[520px]">
              <p className="text-[22px] opacity-80" style={{ fontFamily: fonts.body, color: colors.secondary }}>
                {strings.about.description.split(' A belief')[0]}.
              </p>

              
              
              <div className="mt-5" style={{ fontFamily: fonts.body }}>
                <p className="text-[22px] opacity-80" style={{ color: colors.secondary }}>A belief that development in</p>
                <p className="text-[22px] italic font-semibold" style={{ color: colors.text.brand }}>Vrindavan should respect both people and faith.</p>
              </div>
            </div>

            {/* Desktop founder video thumbnail */}
            <div className="hidden md:block mt-8 w-full max-w-[480px]">
              <FounderVideoThumbnail onPlay={() => setVideoOpen(true)} />
            </div>
          </div>

          {/* Right: Founder Image */}
          <div className="flex-1 order-2 md:order-2 w-full">
            <div className="relative w-full md:max-w-[560px] ml-auto">
              <div className="relative w-full aspect-[1/1] md:aspect-[1/1] overflow-hidden" style={{ backgroundColor: colors.background }}>
                {/* Orange arc */}
                <div className="absolute -bottom-[40%] -left-[40%] w-[90%] h-[90%] rounded-full" style={{ backgroundColor: colors.about.founderPanel, opacity: 0.55 }} />
                <img src="/assets/images/vrindavanBuilder.webp" alt="Founder" className="relative z-10 w-full h-full object-contain" loading="lazy" decoding="async" />
                {/* Learn more button (mobile only) */}
                <button
                  type="button"
                  className="md:hidden absolute bottom-4 right-4 bg-white h-[34px] px-4 rounded-[1px] flex items-center gap-2"
                  style={{ borderColor: colors.border.light }}
                >
                  <span className="text-[12px] leading-none" style={{ fontFamily: fonts.body, color: colors.secondary }}>
                    Learn more
                  </span>
                  <span className="text-[16px] leading-none" style={{ color: colors.secondary }}>
                    ›
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile copy + founder panel (under image) */}
            <div className="md:hidden mt-8">
              <p className="text-[14px] leading-[1.5] opacity-80" style={{ fontFamily: fonts.body, color: colors.secondary }}>
                This company was not created from a boardroom. <br />
                It was created from a personal connection to the city.
              </p>
              <div className="mt-5" style={{ fontFamily: fonts.body }}>
                <p className="text-[14px] leading-[1.6] opacity-80" style={{ color: colors.secondary }}>A belief that development in</p>
                <p className="text-[14px] leading-[1.6] italic font-semibold" style={{ color: colors.text.brand }}>Vrindavan should respect both people and faith.</p>
              </div>

              {/* Mobile founder video thumbnail */}
              <div className="mt-6 w-full">
                <FounderVideoThumbnail onPlay={() => setVideoOpen(true)} isMobile />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Values Slider (hidden) */}
        {SHOW_VALUES_SLIDER && (
          <div className="relative mt-20 md:mt-24">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
              {/* Values Heading */}
              <div className="lg:w-[450px] flex-shrink-0 pt-4 md:pt-10">
                <div className="relative">
                  <h3
                    className="text-[56px] md:text-[84px] font-bold leading-[0.9] mb-8 md:mb-12 select-none"
                    style={{ fontFamily: fonts.heading, color: 'rgba(0,0,0,0.12)' }}
                  >
                    {/* Mobile (Figma): 2 lines */}
                    <span className="md:hidden">
                      Values Proven <br />
                      Through
                    </span>
                    {/* Desktop: 3 lines */}
                    <span className="hidden md:inline">
                      Values <br />
                      Proven <br />
                      Through
                    </span>
                  </h3>
                  <div className="absolute top-[118px] md:top-[180px] left-[42%] md:left-[20%] z-20">
                    <span
                      className="text-[64px] md:text-[96px] font-bold leading-none inline-block"
                      style={{
                        fontFamily: fonts.accent,
                        color: colors.accent,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))'
                      }}
                    >
                      Action
                    </span>
                  </div>
                </div>

                <p
                  className="mt-24 md:mt-32 text-[14px] md:text-[18px] font-normal leading-[1.5] max-w-[340px] whitespace-pre-line"
                  style={{ fontFamily: fonts.body, color: colors.secondary }}
                >
                  {strings.about.valuesSubtitle.split('\n')[0]}
                  {'\n'}
                  <span className="font-semibold">{strings.about.valuesSubtitle.split('\n')[1]}</span>
                </p>
              </div>

              {/* Values Slider Container */}
              <div className="flex-1 min-w-0 relative">
                {/* Mobile slider (3 cards + dots + buttons) */}
                <div
                  ref={scrollRefMobile}
                  className="md:hidden flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                  style={{ paddingBottom: '28px' }}
                >
                  {valuesMobile.map((value, idx) => (
                    <div
                      key={`${value.id}-${idx}`}
                      data-value-card
                      className="flex-shrink-0 w-[calc(100vw-32px)] max-w-[520px] h-[340px] p-6 flex flex-col justify-end snap-start rounded-[1px] relative"
                      style={{ backgroundColor: value.bgColor }}
                    >
                      <span
                        className="absolute top-6 left-6 md:top-12 md:left-12 text-[12px] md:text-[18px] font-normal tracking-[-0.54px] block"
                        style={{ fontFamily: fonts.body, color: colors.text.primary }}
                      >
                        {value.title}
                      </span>
                      <p
                        className="text-[14px] md:text-[28px] leading-[1.45] md:leading-[1.4] font-normal tracking-[-0.42px] md:tracking-[-0.84px] max-w-[630px]"
                        style={{
                          fontFamily: fonts.body,
                          color: idx === 0 ? '#75680D' : '#845E0F'
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mobile dots */}
                <div className="md:hidden flex justify-center gap-2 mt-4">
                  {Array.from({ length: valuesMobile.length }).map((_, i) => (
                    <div key={i} className="size-[10px]" style={{ backgroundColor: i === activeIdx ? colors.accent : 'rgba(0,0,0,0.12)' }} />
                  ))}
                </div>

                {/* Desktop slider (2 cards + buttons) */}
                <div
                  ref={scrollRefDesktop}
                  className="hidden md:flex w-full gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                  style={{ paddingBottom: '28px' }}
                >
                  {valuesDesktop.map((value, idx) => (
                    <div
                      key={`${value.id}-${idx}`}
                      className="flex-shrink-0 w-[520px] lg:w-[710px] h-[481px] p-12 flex flex-col justify-end snap-start rounded-[1px] relative"
                      style={{ backgroundColor: value.bgColor }}
                    >
                      <span
                        className="absolute top-12 left-12 text-[18px] font-normal tracking-[-0.54px] block"
                        style={{ fontFamily: fonts.body, color: colors.text.primary }}
                      >
                        {value.title}
                      </span>
                      <p
                        className="text-[28px] leading-[1.4] font-normal tracking-[-0.84px] max-w-[630px]"
                        style={{
                          fontFamily: fonts.body,
                          color: idx === 0 ? '#75680D' : '#845E0F'
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Desktop slider controls */}
                <div className="hidden md:flex gap-4 mt-8 justify-end">
                  <PagerNavButton
                    direction="prev"
                    onClick={() => scroll(scrollRefDesktop, 'left')}
                    aria-label="Previous values"
                    className="!h-16 !w-16"
                  />
                  <PagerNavButton
                    direction="next"
                    onClick={() => scroll(scrollRefDesktop, 'right')}
                    aria-label="Next values"
                    className="!h-16 !w-16"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video modal — renders outside the section flow via portal-like fixed positioning */}
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default FounderValuesSection;
