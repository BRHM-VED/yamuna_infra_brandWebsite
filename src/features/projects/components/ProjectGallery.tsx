import React, { useEffect, useMemo, useRef, useState } from 'react';
import { colors } from '../../../utils';
import { fonts } from '../../../utils/typography';
import PagerNavButton from '../../../components/common/PagerNavButton';

export type ProjectGalleryProps = {
  images: readonly string[];
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const desktopScrollRef = useRef<HTMLDivElement | null>(null);
  const [canPrevDesktop, setCanPrevDesktop] = useState(false);
  const [canNextDesktop, setCanNextDesktop] = useState(true);

  const imageCount = images.length;
  const dots = useMemo(() => Array.from({ length: imageCount }), [imageCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || imageCount <= 1) return;

    const onScroll = () => {
      const mid = el.scrollLeft + el.clientWidth / 2;
      const firstChild = el.querySelector<HTMLElement>('[data-gallery-card="true"]');
      const cardW = firstChild?.offsetWidth ?? 328;
      const idx = Math.round(mid / (cardW + 8)); // 8px gap from flex gap-[8px]
      setActiveIdx(Math.max(0, Math.min(imageCount - 1, idx)));
    };

    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [imageCount]);

  const scrollDesktopGallery = (direction: 'previous' | 'next') => {
    const el = desktopScrollRef.current;
    if (!el) return;
    const offset = el.clientWidth;
    el.scrollBy({
      left: direction === 'previous' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const el = desktopScrollRef.current;
    if (!el) return;

    const eps = 2;
    const update = () => {
      setCanPrevDesktop(el.scrollLeft > eps);
      setCanNextDesktop(el.scrollLeft + el.clientWidth < el.scrollWidth - eps);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [images.length]);

  return (
    <section className="bg-white px-4 md:px-[50px] pb-[50px]">
      <h3
        className="text-[28px] md:text-[44px] leading-[1.19] text-[#5A5550] tracking-[-0.84px] md:tracking-[-1.32px] text-center"
        style={{ fontFamily: fonts.heading }}
      >
        Project <span className="italic font-medium text-[#8D531E]">Gallery</span>
      </h3>

      {/* Desktop: horizontal carousel with prev/next */}
      <div className="hidden md:block pt-[49px]">
        <div
          ref={desktopScrollRef}
          className="flex gap-[12px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {images.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              className="shrink-0 h-[530px] snap-start w-[calc((100%-24px)/3)] overflow-hidden bg-[#dadada]"
            >
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <PagerNavButton
            direction="prev"
            disabled={!canPrevDesktop}
            onClick={() => scrollDesktopGallery('previous')}
            size="lg"
          />
          <PagerNavButton
            direction="next"
            disabled={!canNextDesktop}
            onClick={() => scrollDesktopGallery('next')}
            size="lg"
          />
        </div>
      </div>

      {/* Mobile: single-image carousel with dots */}
      <div className="md:hidden pt-12">
        <div
          ref={scrollRef}
          className="flex gap-[8px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {images.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              data-gallery-card="true"
              className="shrink-0 w-[328px] h-[328px] overflow-hidden bg-[#dadada] snap-start"
            >
              {Math.abs(idx - activeIdx) <= 1 ? (
                <img src={img} alt={`Gallery image ${idx + 1}`} className="h-full w-full object-cover" decoding="async" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {dots.map((_, i) => (
            <div
              key={i}
              className="size-[10px]"
              style={{
                backgroundColor: i === activeIdx ? colors.accent : 'rgba(0,0,0,0.12)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
