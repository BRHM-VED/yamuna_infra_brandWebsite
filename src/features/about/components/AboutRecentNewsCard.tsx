import { ArrowRight } from 'lucide-react';
import { colors, fonts } from '@/utils';

/** Figma full card — mobile `2394:798`, desktop `2374:113` */
export const NEWS_CARD_WIDTH_MOBILE = 300;
export const NEWS_CARD_WIDTH_DESKTOP = 421;
export const NEWS_CARD_IMAGE_HEIGHT_MOBILE = 243;
export const NEWS_CARD_IMAGE_HEIGHT_DESKTOP = 265;
export const NEWS_CARD_BODY_HEIGHT_MOBILE = 280;
export const NEWS_CARD_HEIGHT_MOBILE = NEWS_CARD_IMAGE_HEIGHT_MOBILE + NEWS_CARD_BODY_HEIGHT_MOBILE;
export const NEWS_CARD_HEIGHT_DESKTOP = 603;
export const NEWS_CARD_GAP_MOBILE = 16;
export const NEWS_CARD_GAP_DESKTOP = 24;

const news = colors.about;

export type AboutNewsItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: string;
  linkLabel?: string;
  linkUrl: string;
};

type AboutRecentNewsCardProps = {
  item: AboutNewsItem;
  loadImages?: boolean;
};

export default function AboutRecentNewsCard({ item, loadImages = false }: AboutRecentNewsCardProps) {
  return (
    <article
      className="m-0 flex h-[523px] w-[300px] shrink-0 snap-start flex-col overflow-hidden border border-solid p-0 md:h-[603px] md:w-[421px]"
      style={{
        borderColor: news.newsCardBorder,
        backgroundColor: news.newsCardBodyBg,
        boxShadow: news.newsCardShadow,
      }}
    >
      <div
        className="relative m-0 h-[243px] w-full shrink-0 overflow-hidden p-0 md:h-[265px]"
        style={{ backgroundColor: news.newsCardImageBg }}
      >
        {loadImages ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="absolute left-1/2 top-1/2 size-full max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{ objectPosition: item.imagePosition ?? 'center' }}
            decoding="async"
          />
        ) : null}
      </div>

      {/* Mobile: fixed body height — desktop: flex-1 with justify-between */}
      <div
        className="flex h-[280px] w-full shrink-0 flex-col items-start justify-between overflow-hidden p-5 md:h-auto md:min-h-0 md:flex-1 md:p-7"
        style={{ backgroundColor: news.newsCardBodyBg }}
      >
        <div className="flex w-full flex-col items-start gap-3">
          <h3
            className="m-0 w-full text-[18px] font-medium leading-[1.4] tracking-[-0.54px] text-black md:text-[24px] md:tracking-[-0.72px]"
            style={{ fontFamily: fonts.heading }}
          >
            {item.title}
          </h3>
          <p
            className="m-0 w-full text-[14px] font-normal leading-[1.4] tracking-[-0.42px] md:text-[18px] md:tracking-[-0.54px]"
            style={{ fontFamily: fonts.body, color: news.newsCardSubtitle }}
          >
            {item.description}
          </p>
        </div>
        <a
          href={item.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-[6px] text-[16px] font-medium leading-6 tracking-[-0.24px] no-underline md:text-[18px] md:tracking-[-0.27px]"
          style={{ fontFamily: fonts.body, color: news.newsCardLink }}
          aria-label={`${item.linkLabel ?? 'Read More'}: ${item.title}`}
        >
          {item.linkLabel ?? 'Read More'}
          <ArrowRight size={24} strokeWidth={2} aria-hidden />
        </a>
      </div>
    </article>
  );
}
