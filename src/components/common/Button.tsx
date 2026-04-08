import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { colors, fonts } from '../../utils';

// ─── Shared height token ──────────────────────────────────────────────────────
// Mobile: 56px  |  Desktop (md+): 64px
export const BTN_HEIGHT = 'h-[56px] md:h-[64px]';
export const BTN_PADDING = 'px-[26px] md:px-8';
export const BTN_TEXT = 'text-[16px] md:text-[18px] leading-[1.19] font-normal';

// ─── Shared base styles ───────────────────────────────────────────────────────
const BASE =
  `inline-flex items-center justify-center gap-[10px] rounded-[1px] transition-all duration-200 outline-none select-none ${BTN_HEIGHT} ${BTN_PADDING}`;

// ─── Variant colour map ───────────────────────────────────────────────────────
type Variant = 'primary' | 'accent' | 'soft' | 'outline' | 'ghost';

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: { backgroundColor: colors.primary, color: colors.text.onPrimary, fontFamily: fonts.body },
  accent:  { backgroundColor: colors.accent,  color: '#ffffff',              fontFamily: fonts.body },
  soft:    { backgroundColor: colors.status?.new ?? '#F7DFCA', color: '#1a1a1a', fontFamily: fonts.body },
  outline: { backgroundColor: 'transparent', border: `1px solid ${colors.tertiary}`, color: '#1a1a1a', fontFamily: fonts.body },
  ghost:   { backgroundColor: colors.tertiary, color: colors.secondary, fontFamily: fonts.body },
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface BaseProps {
  variant?: Variant;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
export type ButtonLinkProps = BaseProps & Omit<LinkProps, 'style' | 'className' | 'children'> & { href: string };

type Props = ButtonProps | ButtonLinkProps;

const isLink = (p: Props): p is ButtonLinkProps => typeof (p as ButtonLinkProps).href === 'string';

/**
 * Unified CTA button component.
 * Mobile: 56 px tall  |  Desktop (md+): 64 px tall
 *
 * Usage (button):  <Button variant="accent" icon={<ArrowRight />}>Submit</Button>
 * Usage (link):    <Button href="/blog" variant="ghost" icon={<ArrowRight />}>Read more</Button>
 */
const Button: React.FC<Props> = (props) => {
  const {
    variant = 'primary',
    icon,
    iconPosition = 'right',
    fullWidth = false,
    className = '',
    style: styleProp,
    children,
  } = props;

  const widthCls = fullWidth ? 'w-full' : 'w-fit';
  const cls = `${BASE} ${widthCls} ${BTN_TEXT} hover:opacity-90 active:scale-[0.98] ${className}`;
  const style: React.CSSProperties = { ...variantStyles[variant], ...(styleProp ?? {}) };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (isLink(props)) {
    const { href, variant: _variant, icon: _icon, iconPosition: _iconPosition, fullWidth: _fullWidth, ...rest } = props;
    return (
      <Link to={href} className={`${cls} no-underline`} style={style} {...(rest as Omit<LinkProps, 'to' | 'style' | 'className'>)}>
        {content}
      </Link>
    );
  }

  const { variant: _variant, icon: _icon, iconPosition: _iconPosition, fullWidth: _fullWidth, href: _href, ...rest } =
    props as ButtonProps & { href?: undefined };
  return (
    <button
      className={`${cls} ${(rest as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      style={style}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
