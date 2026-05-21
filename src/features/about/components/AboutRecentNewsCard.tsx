import { ArrowRight } from 'lucide-react';
import { colors, fonts } from '@/utils';

/** Figma full card — mobile `2394:798`, desktop `2374:113` */
export const NEWS_CARD_WIDTH_MOBILE = 300;
export const NEWS_CARD_WIDTH_DESKTOP = 421;
export const NEWS_CARD_IMAGE_HEIGHT_MOBILE = 243;
export const NEWS_CARD_IMAGE_HEIGHT_DESKTOP = 265;
export const NEWS_CARD_BODY_HEIGHT_DESKTOP = 290;
export const NEWS_CARD_GAP_MOBILE = 16;
export const NEWS_CARD_GAP_DESKTOP = 24;

const news = colors.about;

export type AboutNewsItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: string;
};

type AboutRecentNewsCardProps = {
  item: AboutNewsItem;
};

function NewsCardTitle({ item, size }: { item: AboutNewsItem; size: 'mobile' | 'desktop' }) {
  return (
    <h3
      className={
        size === 'desktop'
          ? 'm-0 w-full text-[24px] font-medium leading-[1.4] tracking-[-0.72px] text-black'
          : 'm-0 w-full text-[18px] font-medium leading-[1.4] tracking-[-0.54px] text-black'
      }
      style={{ fontFamily: fonts.heading }}
    >
      {item.title}
    </h3>
  );
}

function NewsCardSubtitle({ item, size }: { item: AboutNewsItem; size: 'mobile' | 'desktop' }) {
  return (
    <p
      className={
        size === 'desktop'
          ? 'm-0 w-full text-[18px] font-normal leading-[1.4] tracking-[-0.54px]'
          : 'm-0 w-full text-[14px] font-normal leading-[1.4] tracking-[-0.42px]'
      }
      style={{ fontFamily: fonts.body, color: news.newsCardSubtitle }}
    >
      {item.description}
    </p>
  );
}

function NewsCardReadMore({ item, size }: { item: AboutNewsItem; size: 'mobile' | 'desktop' }) {
  return (
    <button
      type="button"
      className={
        size === 'desktop'
          ? 'inline-flex shrink-0 items-center gap-[6px] text-[18px] font-medium leading-6 tracking-[-0.27px]'
          : 'inline-flex shrink-0 items-center gap-[6px] text-[16px] font-medium leading-6 tracking-[-0.24px]'
      }
      style={{ fontFamily: fonts.body, color: news.newsCardLink }}
      aria-label={`Read more: ${item.title}`}
    >
      Read More
      <ArrowRight size={24} strokeWidth={2} aria-hidden />
    </button>
  );
}

export default function AboutRecentNewsCard({ item }: AboutRecentNewsCardProps) {
  return (
    <article
      className="m-0 flex w-[300px] shrink-0 snap-start flex-col overflow-hidden border border-solid p-0 md:w-[421px] md:shrink"
      style={{
        borderColor: news.newsCardBorder,
        backgroundColor: colors.surface,
        boxShadow: news.newsCardShadow,
      }}
    >
      <div
        className="relative m-0 h-[243px] w-full overflow-hidden p-0 md:h-[265px]"
        style={{ backgroundColor: news.newsCardImageBg }}
      >
        <img
          src={item.imageSrc}
          alt={item.title}
          className="absolute left-1/2 top-1/2 size-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ objectPosition: item.imagePosition ?? 'center' }}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Mobile — Figma `2394:801`: bg #FCF7ED, p-20, gap-24 between copy block and CTA */}
      <div
        className="flex w-full flex-col items-start gap-6 p-5 md:hidden"
        style={{ backgroundColor: news.newsCardBodyBg }}
      >
        <div className="flex w-full flex-col items-start gap-3">
          <NewsCardTitle item={item} size="mobile" />
          <NewsCardSubtitle item={item} size="mobile" />
        </div>
        <NewsCardReadMore item={item} size="mobile" />
      </div>

      {/* Desktop — Figma `2374:95`: bg #FCF7ED, p-28, h-290, justify-between */}
      <div
        className="hidden h-[290px] w-full flex-col items-start justify-between p-7 md:flex"
        style={{ backgroundColor: news.newsCardBodyBg }}
      >
        <div className="flex w-full flex-col items-start gap-3">
          <NewsCardTitle item={item} size="desktop" />
          <NewsCardSubtitle item={item} size="desktop" />
        </div>
        <NewsCardReadMore item={item} size="desktop" />
      </div>
    </article>
  );
}
