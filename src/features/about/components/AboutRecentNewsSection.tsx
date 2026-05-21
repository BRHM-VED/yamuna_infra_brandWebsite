import AboutRecentNewsCard, { type AboutNewsItem } from './AboutRecentNewsCard';
import { colors, fonts } from '@/utils';

const news = colors.about;

const LATEST_NEWS_BASE = '/assets/about/latestSection';

const NEWS_ITEMS: AboutNewsItem[] = [
  {
    id: 'township-launch',
    title: 'Shri Yamuna Infra Launches New Township Project in Vrindavan',
    description:
      'A landmark residential township bringing premium living to the heart of Braj Bhoomi, inaugurated with the blessings of revered Maharajji.',
    imageSrc: `${LATEST_NEWS_BASE}/TownshipProject.webp`,
    imagePosition: 'center top',
  },
  {
    id: 'trusted-developer-award',
    title: 'Recognised as Most Trusted Developer — Mathura Region 2025',
    description:
      'For the third consecutive year, Shri Yamuna Infra has been honoured by industry peers for transparency, quality, and customer satisfaction.',
    imageSrc: `${LATEST_NEWS_BASE}/MathuraRegion.webp`,
    imagePosition: 'center 20%',
  },
  {
    id: 'phase-ii-poojan',
    title: 'Grand Bhoomi Poojan Ceremony Held for Yamuna Heights Phase II',
    description:
      'With the presence of over 200 devotees and the sacred blessings of the saints of Vrindavan, Phase II was formally consecrated.',
    imageSrc: `${LATEST_NEWS_BASE}/BhoomiPoojan.webp`,
    imagePosition: 'center top',
  },
];

/** Figma section — mobile `2394:792`, desktop `2394:25` */
export default function AboutRecentNewsSection() {
  return (
    <section
      className="w-full px-4 py-10 md:px-[60px] md:py-16"
      style={{ backgroundColor: colors.surface }}
      aria-labelledby="about-recent-news-heading"
    >
      <div className="mx-auto flex w-full max-w-[644px] flex-col items-center gap-3 md:gap-5">
        <div className="flex h-[31px] w-[142px] flex-col items-center gap-1">
          <p
            className="m-0 whitespace-nowrap text-[14px] font-medium uppercase leading-normal tracking-[2.24px] md:text-[16px] md:tracking-[2.56px]"
            style={{ fontFamily: fonts.body, color: news.newsCardSubtitle }}
          >
            Recent News
          </p>
          <span className="h-1 w-8 shrink-0" style={{ backgroundColor: colors.construction.stepNumberGold }} aria-hidden />
        </div>

        <h2
          id="about-recent-news-heading"
          className="m-0 text-center text-[28px] font-medium leading-[1.19] tracking-[-0.84px] text-[#403B37] md:text-[54px] md:tracking-[-1.62px]"
          style={{ fontFamily: fonts.heading }}
        >
          Latest from
          <br />
          <span className="italic font-normal">Shri Yamuna Infra</span>
        </h2>
      </div>

      <div className="about-news-scroll mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth md:mt-8 md:grid md:grid-cols-3 md:justify-center md:gap-6 md:overflow-visible">
        {NEWS_ITEMS.map((item) => (
          <AboutRecentNewsCard key={item.id} item={item} />
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .about-news-scroll::-webkit-scrollbar { display: none; }
          .about-news-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `,
        }}
      />
    </section>
  );
}
