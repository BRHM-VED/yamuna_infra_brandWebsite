import React, { useCallback, useEffect, useRef, useState } from 'react';
import { colors, fonts } from '../../../utils';
import PagerNavButton from '../../../components/common/PagerNavButton';
import ShimmerBox from '../../../components/common/ShimmerBox';

/** Matches mobile track: `w-[328px]` + `gap-[8px]` */
const MOBILE_SCROLL_STEP = 328 + 8;

export type ProjectGalleryProps = {
  images: readonly string[];
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [canPrevDesktop, setCanPrevDesktop] = useState(false);
  const [canNextDesktop, setCanNextDesktop] = useState(true);

  const count = images.length;

  useEffect(() => {
    if (count <= 1) {
      setActiveIdx(0);
      return;
    }

    const el = mobileScrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / MOBILE_SCROLL_STEP);
      const clamped = Math.max(0, Math.min(count - 1, idx));
      setActiveIdx((prev) => (prev === clamped ? prev : clamped));
    };

    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [count]);

  const scrollDesktopGallery = useCallback((direction: 'previous' | 'next') => {
    const el = desktopScrollRef.current;
    if (!el) return;
    const dx = direction === 'previous' ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: dx, behavior: 'smooth' });
  }, []);

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
  }, [count]);

  const onImgLoad = useCallback((src: string) => {
    setLoaded((p) => (p[src] ? p : { ...p, [src]: true }));
  }, []);

  return (
    <section className="bg-white px-4 md:pl-[50px] md:pr-0 pb-[50px]">
      <h3
        className="text-[28px] md:text-[44px] leading-[1.19] text-[#5A5550] tracking-[-0.84px] md:tracking-[-1.32px] text-center"
        style={{ fontFamily: fonts.heading }}
      >
        Project <span className="italic font-medium text-[#8D531E]">Gallery</span>
      </h3>

      <div className="hidden md:block pt-[49px]">
        <div
          ref={desktopScrollRef}
          className="flex gap-[12px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {images.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              className="relative shrink-0 h-[530px] snap-start w-[calc((100%-24px)/3)] overflow-hidden bg-[#dadada]"
            >
              {!loaded[img] ? <ShimmerBox /> : null}
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                onLoad={() => onImgLoad(img)}
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

      <div className="md:hidden pt-12">
        <div
          ref={mobileScrollRef}
          className="flex gap-[8px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mr-4 pr-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {images.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              className="relative shrink-0 w-[328px] h-[328px] overflow-hidden bg-[#dadada] snap-start"
            >
              {!loaded[img] ? <ShimmerBox /> : null}
              {Math.abs(idx - activeIdx) <= 1 ? (
                <img
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  className="h-full w-full object-cover"
                  decoding="async"
                  loading="lazy"
                  onLoad={() => onImgLoad(img)}
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
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
