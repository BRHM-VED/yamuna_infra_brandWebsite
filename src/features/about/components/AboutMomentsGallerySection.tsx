import { useEffect, useMemo, useRef, useState } from 'react';
import PagerNavButton from '@/components/common/PagerNavButton';
import AboutMomentCard, {
  AboutMomentCardSkeleton,
  MOMENT_CARD_GAP_DESKTOP,
  MOMENT_CARD_GAP_MOBILE,
  MOMENT_CARD_WIDTH_DESKTOP,
  MOMENT_CARD_WIDTH_MOBILE,
} from './AboutMomentCard';
import { useAboutMomentsGallery } from '../hooks/useAboutMomentsGallery';
import { fonts } from '@/utils';

const SKELETON_COUNT = 3;

export default function AboutMomentsGallerySection() {
  const { moments, isLoading, error } = useAboutMomentsGallery();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollStep = useMemo(() => {
    if (typeof window === 'undefined') return MOMENT_CARD_WIDTH_MOBILE + MOMENT_CARD_GAP_MOBILE;
    return window.matchMedia('(min-width: 768px)').matches
      ? MOMENT_CARD_WIDTH_DESKTOP + MOMENT_CARD_GAP_DESKTOP
      : MOMENT_CARD_WIDTH_MOBILE + MOMENT_CARD_GAP_MOBILE;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isLoading) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(max > 4 && el.scrollLeft < max - 4);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isLoading, moments.length]);

  const scrollByDir = (dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? scrollStep : -scrollStep, behavior: 'smooth' });
  };

  const showPager = !isLoading && moments.length > 1;

  return (
    <section
      className="mt-6 w-full bg-linear-to-b from-[#F7DFCA] to-white py-12 md:mt-0 md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] md:py-[76px]"
      aria-labelledby="about-moments-heading"
    >
      {/* Header — page padding only here */}
      <div className="px-4 md:pl-[60px] md:pr-[60px]">
        <h2
          id="about-moments-heading"
          className="m-0 text-left text-[28px] font-medium leading-[1.19] tracking-[-0.84px] text-[#403B37] md:text-[54px] md:tracking-[-1.62px]"
          style={{ fontFamily: fonts.heading }}
        >
          Moments That Define Us
        </h2>
        <p
          className="m-0 mt-3 max-w-[361px] text-left text-[16px] leading-[1.4] text-[#5A5550] md:mt-4 md:max-w-[643px] md:text-[22px]"
          style={{ fontFamily: fonts.body }}
        >
          Honoured moments with revered spiritual leaders who inspire our vision and values.
        </p>

        {error ? (
          <p className="m-0 mt-6 text-[14px] text-[#5A5550] md:mt-10" style={{ fontFamily: fonts.body }}>
            {error}
          </p>
        ) : null}
      </div>

      {/* Gallery track — cards have no padding; gap only between cards */}
      <div
        ref={scrollRef}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pl-4 no-scrollbar scroll-smooth md:mt-10 md:gap-6 md:pl-[60px]"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {isLoading
          ? Array.from({ length: SKELETON_COUNT }, (_, i) => <AboutMomentCardSkeleton key={`sk-${i}`} />)
          : moments.map((item) => (
              <AboutMomentCard key={item.id} file_url={item.file_url} title={item.title} />
            ))}
      </div>

      {showPager ? (
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-10">
          <PagerNavButton
            direction="prev"
            size="lg"
            disabled={!canPrev}
            onClick={() => scrollByDir('prev')}
            aria-label="Previous moments"
          />
          <PagerNavButton
            direction="next"
            size="lg"
            disabled={!canNext}
            onClick={() => scrollByDir('next')}
            aria-label="Next moments"
          />
        </div>
      ) : null}
    </section>
  );
}
