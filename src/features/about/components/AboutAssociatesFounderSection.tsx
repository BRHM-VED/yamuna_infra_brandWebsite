import { useCallback, useEffect, useRef, useState } from 'react';
import { Award, BadgeCheck, Handshake, Landmark } from 'lucide-react';
import { colors, fonts } from '@/utils';

type AssociateLogo = {
  id: string;
  name: string;
  src: string;
  sizeClass: string;
};

type CredibilityCard = {
  id: string;
  text: string;
  Icon: typeof BadgeCheck;
};
const ASSOCIATES: AssociateLogo[] = [
  {
    id: 'truevisory',
    name: 'Truevisory Realty',
    src: '/assets/about/trueVisory.svg',
    sizeClass: 'w-[88.755px] h-[50.519px] md:w-[116.165px] md:h-[66.12px]',
  },
  {
    id: 'tulyam',
    name: 'Tulyam',
    src: '/assets/about/tulyam.svg',
    sizeClass: 'w-[88.518px] h-[46.635px] md:w-[115.854px] md:h-[61.037px]',
  },
  {
    id: 'gtc-homes',
    name: 'GTC Homes',
    src: '/assets/about/gtcHomes.svg',
    sizeClass: 'w-[125.686px] h-[43.218px] md:w-[164.5px] md:h-[56.565px]',
  },
  {
    id: 'shree-vrinda',
    name: 'Shree Vrinda',
    src: '/assets/about/shreeVrinda.svg',
    sizeClass: 'w-[79.342px] h-[52.705px] md:w-[103.845px] md:h-[68.982px]',
  },
  {
    id: 'defence-welfare',
    name: 'Defence Officials Welfare Organisation',
    src: '/assets/about/defenceWelfare.svg',
    sizeClass: 'w-[157.411px] h-[36.162px] md:w-[206.023px] md:h-[47.33px]',
  },
  {
    id: 'omni-infra',
    name: 'Omni Infra',
    src: '/assets/about/omniInfra.svg',
    sizeClass: 'w-[83.281px] h-[68px] md:w-[109px] md:h-[89px]',
  },
  {
    id: 'vrinda-one',
    name: 'Vrinda One',
    src: '/assets/about/vrindaOne.svg',
    sizeClass: 'w-[135.439px] h-[67.478px] md:w-[177.266px] md:h-[88.317px]',
  },
];

const CREDIBILITY_CARDS: CredibilityCard[] = [
  {
    id: 'rera-compliance',
    text: 'RERA Registered developer with 100% project compliance record',
    Icon: BadgeCheck,
  },
  {
    id: 'saints-endorsed',
    text: 'Blessed and endorsed by prominent saints of Vrindavan Dham',
    Icon: Landmark,
  },
  {
    id: 'regional-award',
    text: 'Recipient of Best Developer - Mathura/Vrindavan region award',
    Icon: Award,
  },
  {
    id: 'credai-member',
    text: 'Lifetime member of Confederation of Real Estate Developers (CREDAI)',
    Icon: Handshake,
  },
];

const founderVideoThumb = '/assets/images/podCastBanner.webp';

function PlayIcon() {
  return (
    <span
      className="flex size-[22px] items-center justify-center rounded-full"
      style={{ backgroundColor: colors.about.founderPanel }}
      aria-hidden
    >
      <svg width="8" height="10" viewBox="0 0 12 14" fill="none">
        <path d="M1 1.5L11 7L1 12.5V1.5Z" fill={colors.surface} />
      </svg>
    </span>
  );
}

function FounderVideoThumbnail({ onPlay }: { onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="relative h-[232px] w-full overflow-hidden bg-[#EFAF74] md:max-w-[368px]"
      style={{ backgroundColor: colors.about.founderPanel }}
      aria-label="Play founder video"
    >
      <img
        src={founderVideoThumb}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute bottom-4 left-4 inline-flex items-center gap-[5.5px] bg-white px-[14.657px] py-[9.161px] text-[#5A5550]">
        <PlayIcon />
        <span className="text-[16.49px] leading-[1.19] tracking-[-0.4947px]" style={{ fontFamily: fonts.body }}>
          Hear from the founder
        </span>
      </div>
    </button>
  );
}

function FounderVideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const onEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [open, onEsc]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/85"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Hear from the founder"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/20 text-white"
      >
        ×
      </button>
      <div
        className="relative w-[92vw] overflow-hidden rounded-[6px] shadow-2xl md:w-[min(860px,88vw)]"
        style={{ aspectRatio: '16 / 9' }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src="https://www.youtube.com/embed/bioaf7YMGMA?autoplay=1&rel=0"
          title="Hear from the founder"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}

function CredibilityInfoCard({ text, Icon }: { text: string; Icon: typeof BadgeCheck }) {
  return (
    <article className="h-[181px] bg-[#F3ECD6] p-4 md:h-[199px] md:p-8">
      <Icon className="size-8 text-[#003D97] md:size-10" strokeWidth={1.8} aria-hidden />
      <p
        className="mt-3 mb-0 text-[15px] leading-[1.4] text-[#434241] md:mt-5 md:text-[18px]"
        style={{ fontFamily: fonts.body, fontWeight: 500 }}
      >
        {text}
      </p>
    </article>
  );
}

export default function AboutAssociatesFounderSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const associatesScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = associatesScrollRef.current;
    if (!el) return;

    let rafId = 0;
    let lastTs = 0;

    const tick = (ts: number) => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        rafId = window.requestAnimationFrame(tick);
        return;
      }

      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      // Slow marquee-like movement on mobile.
      el.scrollLeft += dt * 0.045;

      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 2) {
        el.scrollLeft = 0;
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full bg-white px-4 py-10 md:px-[60px] md:py-[54px]">
      <div className="mx-auto w-full">
        <div className="text-center">
          <h2
            className="m-0 text-[24px] leading-normal tracking-[-0.72px] text-black md:text-[48px] md:tracking-[-1.44px]"
            style={{ fontFamily: fonts.heading, fontWeight: 500 }}
          >
            Our Associates
          </h2>
        </div>

        <div
          ref={associatesScrollRef}
          className="mt-4 flex gap-[37.844px] overflow-x-auto md:mt-10 md:justify-center md:gap-[49.531px]"
        >
          {ASSOCIATES.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.name}
              className={`${logo.sizeClass} shrink-0 object-contain`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div> 

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-[1fr_540px] md:gap-8">
          <div className="order-1">
            <h3
              className="m-0 text-[28px] leading-[1.19] tracking-[-0.84px] text-black md:text-[56px] md:leading-[1.19] md:tracking-[-1.68px]"
              style={{ fontFamily: fonts.heading, fontWeight: 400 }}
            >
              A Builder
              <br />
              From <span className="font-light italic">Vrindavan</span>
            </h3>

            <blockquote
              className="mt-3 mb-0 border-l-2 pl-3 text-[20px] leading-[1.4] tracking-[-0.6px] text-[#03377C] md:mt-6 md:text-[24px] md:tracking-[-0.72px]"
              style={{ borderColor: '#D89A66', fontFamily: fonts.heading, fontWeight: 500 }}
            >
              "Every home I build is an offering to the sacred land of Vrindavan - a home where families may find not just
              shelter, but sanctuary."
            </blockquote>

            <p
              className="mt-5 mb-0 text-[16px] leading-[1.4] tracking-[-0.48px] text-[#5A5550] md:mt-8 md:text-[20px] md:leading-[1.4] md:tracking-normal"
              style={{ fontFamily: fonts.body }}
            >
              This company was not created from a boardroom. It was created from a personal connection to the city.
            </p>
            <p
              className="mt-4 mb-0 text-[16px] leading-[1.4] tracking-[-0.48px] text-[#5A5550] md:mt-6 md:text-[20px] md:leading-[1.4] md:tracking-normal"
              style={{ fontFamily: fonts.body }}
            >
              A belief that development in
              <br />
              <span style={{ color: colors.primary }}>Vrindavan should respect both people and faith.</span>
            </p>

            <div className="mt-5 md:mt-8">
              <FounderVideoThumbnail onPlay={() => setVideoOpen(true)} />
            </div>
          </div>

          <div className="order-2 bg-[#F4E7CC] md:h-[666px]">
            <img
              src="/assets/images/vrindavanBuilder.webp"
              alt="Founder from Vrindavan"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-6">
          {CREDIBILITY_CARDS.map((item) => (
            <CredibilityInfoCard key={item.id} text={item.text} Icon={item.Icon} />
          ))}
        </div>
      </div>

      <FounderVideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
