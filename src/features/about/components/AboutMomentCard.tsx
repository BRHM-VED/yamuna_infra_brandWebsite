import { useCallback, useEffect, useState } from 'react';
import ShimmerBox from '@/components/common/ShimmerBox';
import { fonts } from '@/utils';

/** Figma `2348:224` — moment gallery card */
export const MOMENT_CARD_WIDTH_MOBILE = 345;
export const MOMENT_CARD_WIDTH_DESKTOP = 643;
export const MOMENT_CARD_IMAGE_HEIGHT_MOBILE = 225;
export const MOMENT_CARD_IMAGE_HEIGHT_DESKTOP = 419;
export const MOMENT_CARD_GAP_MOBILE = 16;
export const MOMENT_CARD_GAP_DESKTOP = 24;

export type AboutMomentCardProps = {
  file_url: string;
  title: string;
};

export default function AboutMomentCard({ file_url, title }: AboutMomentCardProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [file_url]);

  const onImgLoad = useCallback(() => setLoaded(true), []);

  return (
    <article className="m-0 flex w-[345px] shrink-0 snap-start flex-col p-0 md:w-[643px]">
      <div
        className="relative m-0 h-[225px] w-full overflow-hidden p-0 shadow-[0_2.148px_10.257px_rgba(0,0,0,0.25)] md:h-[419px] md:shadow-[0_4px_19.1px_rgba(0,0,0,0.25)]"
      >
        {!loaded ? <ShimmerBox /> : null}
        <img
          src={file_url}
          alt={title || 'Honoured moment'}
          className="absolute inset-0 size-full max-w-none object-cover object-center scale-[1.14]"
          loading="lazy"
          decoding="async"
          onLoad={onImgLoad}
        />
      </div>
      {title ? (
        <p
          className="m-0 mt-4 max-w-[260px] p-0 text-[14px] font-medium leading-[1.4] tracking-[-0.28px] text-[#383839] md:max-w-[595px] md:text-[24px] md:tracking-[-0.48px]"
          style={{ fontFamily: fonts.body }}
        >
          {title}
        </p>
      ) : null}
    </article>
  );
}

export function AboutMomentCardSkeleton() {
  return (
    <article className="m-0 flex w-[345px] shrink-0 snap-start flex-col p-0 md:w-[643px]">
      <div className="relative m-0 h-[225px] w-full overflow-hidden bg-[#dadada] p-0 md:h-[419px]">
        <ShimmerBox />
      </div>
      <div className="relative m-0 mt-4 h-[20px] w-[80%] overflow-hidden bg-[#dadada] p-0 md:h-[34px]">
        <ShimmerBox />
      </div>
    </article>
  );
}
