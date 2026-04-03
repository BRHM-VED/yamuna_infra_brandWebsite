import React from 'react';

export type PagerNavButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  direction: 'prev' | 'next';
  /**
   * `md` ≈ 48px, `lg` ≈ 56px (carousel under “Latest projects” uses larger).
   */
  size?: 'md' | 'lg';
  /**
   * When set (e.g. navbar “Contact now”), renders label + chevron in one pill-shaped control.
   */
  children?: React.ReactNode;
  /** Light text / borders for use on dark bars (mobile navbar). */
  tone?: 'default' | 'onDark';
};

function Chevron({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      {direction === 'prev' ? (
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

/**
 * Circular prev/next control for carousels, or pill + chevron when `children` is passed (navbar CTA).
 */
const PagerNavButton: React.FC<PagerNavButtonProps> = ({
  direction,
  size = 'md',
  className = '',
  disabled,
  style,
  children,
  tone = 'default',
  ...rest
}) => {
  const dim = size === 'lg' ? 'h-14 w-14' : 'h-12 w-12';
  const onDark = tone === 'onDark';
  const circleStyle: React.CSSProperties = onDark
    ? {
        backgroundColor: disabled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.12)',
        color: '#ffffff',
        border: '1px solid rgba(255,255,255,0.25)',
      }
    : {
        backgroundColor: disabled ? '#FFFFFF' : 'rgba(0, 0, 0, 0.06)',
        color: '#1b1b1b',
        border: '1px solid rgba(0, 0, 0, 0.12)',
      };

  if (children != null && children !== false) {
    return (
      <button
        type="button"
        disabled={disabled}
        aria-disabled={disabled}
        className={[
          'inline-flex shrink-0 items-center gap-2 rounded-full border transition-all outline-none select-none px-3 py-1.5 md:px-4 md:py-2',
          onDark
            ? 'border-white/25 bg-white/10 text-white'
            : 'border-[rgba(0,0,0,0.12)] bg-white',
          disabled ? 'cursor-not-allowed opacity-60' : 'hover:opacity-90 active:scale-[0.98]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={style}
        {...rest}
      >
        <span className="text-[14px] font-medium leading-none md:text-[16px]">{children}</span>
        <span
          className={`inline-flex shrink-0 items-center justify-center rounded-full ${dim}`}
          style={circleStyle}
        >
          <Chevron direction={direction} />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      className={[
        'inline-flex shrink-0 items-center justify-center rounded-full transition-all outline-none select-none',
        dim,
        disabled ? 'cursor-not-allowed opacity-60' : 'hover:opacity-90 active:scale-[0.98]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ...circleStyle, ...style }}
      {...rest}
    >
      <Chevron direction={direction} />
    </button>
  );
};

export default PagerNavButton;
