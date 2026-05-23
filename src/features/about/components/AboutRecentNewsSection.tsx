import { useEffect, useMemo, useRef, useState } from 'react';
import PagerNavButton from '@/components/common/PagerNavButton';
import AboutRecentNewsCard, {
  type AboutNewsItem,
  NEWS_CARD_GAP_DESKTOP,
  NEWS_CARD_GAP_MOBILE,
  NEWS_CARD_WIDTH_DESKTOP,
  NEWS_CARD_WIDTH_MOBILE,
} from './AboutRecentNewsCard';
import { colors, fonts } from '@/utils';

const news = colors.about;

const LATEST_NEWS_BASE = '/assets/about/latestSection';

const NEWS_ITEMS: AboutNewsItem[] = [
  {
    id: 'grand-saint-gathering',
    title: 'Grand Saint Gathering Planned At Yamuna City',
    description:
      'Yamuna City is set to host a grand poojan ceremony and spiritual gathering in Vrindavan, bringing together respected saints, devotees, and distinguished guests from across India.',
    imageSrc: `${LATEST_NEWS_BASE}/GrandGatheringPlanned.webp`,
    linkLabel: 'View on Facebook',
    linkUrl: 'https://www.facebook.com/share/v/18bMfeexL3/',
  },
  {
    id: 'grand-poojan-april',
    title: 'Yamuna City To Host Grand Poojan On 11 April',
    description:
      'According to recent media reports, Yamuna City will organize a major poojan ceremony on 11 April, showcasing a blend of spiritual culture, modern infrastructure, and premium development vision.',
    imageSrc: `${LATEST_NEWS_BASE}/GrandPoojan.webp`,
    linkLabel: 'Read Full News',
    linkUrl: 'https://exclusivebulletin.in/news-detail/145/',
  },
  {
    id: 'grand-spiritual-event',
    title: 'Devotees To Gather For A Grand Spiritual Event',
    description:
      'Video coverage highlights increasing public interest around Yamuna City as preparations begin for a large-scale poojan ceremony and saint congregation in Vrindavan.',
    imageSrc: `${LATEST_NEWS_BASE}/GrandSpiritualEvent.webp`,
    linkLabel: 'Watch on YouTube',
    linkUrl: 'https://youtu.be/RYsbvwewNyc?si=rGeEEEZ_1XJuqeDF',
  },
  {
    id: 'social-platform-attention',
    title: 'Yamuna City Gains Strong Attention Across Social Platforms',
    description:
      'Social media creators and local news pages are actively covering the upcoming event, modern amenities, and the future growth potential surrounding Yamuna City and Vrindavan.',
    imageSrc: `${LATEST_NEWS_BASE}/StrongAttention.webp`,
    linkLabel: 'Watch on Facebook',
    linkUrl: 'https://www.facebook.com/share/v/1DShpq4ENq/',
  },
];

/** Figma section — mobile `2394:792`, desktop `2394:25` */
export default function AboutRecentNewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [loadImages, setLoadImages] = useState(false);

  const scrollStep = useMemo(() => {
    if (typeof window === 'undefined') return NEWS_CARD_WIDTH_MOBILE + NEWS_CARD_GAP_MOBILE;
    return window.matchMedia('(min-width: 768px)').matches
      ? NEWS_CARD_WIDTH_DESKTOP + NEWS_CARD_GAP_DESKTOP
      : NEWS_CARD_WIDTH_MOBILE + NEWS_CARD_GAP_MOBILE;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoadImages(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

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
  }, []);

  const scrollByDir = (dir: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'next' ? scrollStep : -scrollStep, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-10 md:px-[60px] md:py-16"
      style={{ backgroundColor: colors.surface }}
      aria-labelledby="about-recent-news-heading"
    >
      <div className="mx-auto flex w-full max-w-[644px] flex-col items-center gap-3 md:gap-5">
        <div className="flex h-[31px] w-[142px] flex-col items-center gap-1">
          <p
            className="m-0 whitespace-nowrap text-[14px] font-medium uppercase leading-[1.5] tracking-[2.24px] md:text-[16px] md:tracking-[2.56px]"
            style={{ fontFamily: fonts.body, color: news.newsCardSubtitle }}
          >
            Recent News
          </p>
          <span className="h-1 w-8 shrink-0" style={{ backgroundColor: '#CE8D52' }} aria-hidden />
        </div>

        <h2
          id="about-recent-news-heading"
          className="m-0 text-center text-[28px] font-medium leading-[1.19] tracking-[-0.84px] text-[#403B37] md:text-[54px] md:tracking-[-1.62px]"
          style={{ fontFamily: fonts.heading }}
        >
          Latest from
          <br />
          <span className="text-[28px] font-normal italic md:text-[54px]">Shri Yamuna Infra</span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto hide-scrollbar scroll-smooth md:mt-8 md:gap-6"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {NEWS_ITEMS.map((item) => (
          <AboutRecentNewsCard key={item.id} item={item} loadImages={loadImages} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4 md:mt-10">
        <PagerNavButton
          direction="prev"
          size="lg"
          disabled={!canPrev}
          onClick={() => scrollByDir('prev')}
          aria-label="Previous news"
        />
        <PagerNavButton
          direction="next"
          size="lg"
          disabled={!canNext}
          onClick={() => scrollByDir('next')}
          aria-label="Next news"
        />
      </div>

    </section>
  );
}
