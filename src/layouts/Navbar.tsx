import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors, fonts, strings } from '../utils';
import { useHomeNav } from '../features/home/hooks/homeNav';
import { useInquiry } from '../features/inquiry/useInquiry';
import { Button } from '@/components/ui/button';
import NewProjectBanner from '../components/common/NewProjectBanner';

function callNavbarContactNumber() {
  window.location.href = 'tel:18001211101';
}

export type NavbarProps = {
  /** Mobile-only visual variant. Default matches Home (dark overlay). */
  mobileVariant?: 'dark' | 'light';
  /** Show “New project launched” banner above mobile navbar. */
  showNewProjectBanner?: boolean;
  /**
   * Mobile: hide yellow banner on scroll down, show on scroll up / near top.
   * Only applies when `showNewProjectBanner` is true.
   */
  mobileCollapsibleBanner?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
  mobileVariant = 'dark',
  showNewProjectBanner = false,
  mobileCollapsibleBanner = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileBannerExpanded, setMobileBannerExpanded] = React.useState(true);
  const lastScrollY = React.useRef(0);
  const location = useLocation();
  const { goToAbout, goToKnowledge, goToAllProjects } = useHomeNav();
  const { openInquiry } = useInquiry();

  React.useEffect(() => {
    setMobileBannerExpanded(true);
    lastScrollY.current = typeof window !== 'undefined' ? window.scrollY : 0;
  }, [location.pathname]);

  React.useEffect(() => {
    if (!showNewProjectBanner || !mobileCollapsibleBanner) return;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const prev = lastScrollY.current;
      const delta = y - prev;

      if (y < 32) {
        setMobileBannerExpanded(true);
      } else if (delta > 8) {
        setMobileBannerExpanded(false);
      } else if (delta < -8) {
        setMobileBannerExpanded(true);
      }

      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY || 0;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showNewProjectBanner, mobileCollapsibleBanner]);

  const onLogoClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative z-20 w-full bg-transparent">
      {/* Desktop */}
      <div
        className="hidden md:flex w-full items-center justify-between pt-10 pb-6 px-[60px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0) 100%)',
        }}
      >
        <div className="flex items-center gap-[45px]">
          <button
            type="button"
            onClick={goToAbout}
            style={{ fontFamily: fonts.body, color: colors.accent }}
            className="text-[16px] font-normal bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap p-0"
          >
            About
          </button>
          <button
            type="button"
            onClick={goToKnowledge}
            style={{ fontFamily: fonts.body, color: colors.accent }}
            className="text-[16px] font-normal bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap p-0"
          >
            Knowledge
          </button>
        </div>

        <Link
          to="/"
          onClick={onLogoClick}
          className="flex flex-col items-center justify-center"
          aria-label="Home"
        >
          <img src="/logoBlue.svg" alt="Shri Yamuna Infra" className="h-[35px] w-auto" />
        </Link>

        <div className="flex items-center gap-[32px]">
          <button
            type="button"
            onClick={goToAllProjects}
            style={{ fontFamily: fonts.body, color: colors.accent }}
            className="text-[16px] font-normal bg-transparent border-0 cursor-pointer hover:opacity-70 transition-opacity p-0"
          >
            Projects
          </button>
          <Button
            variant="default"
            className="h-[40px]! border-none px-4! text-[16px]! hover:opacity-90"
            style={{
              backgroundColor: colors.primary,
              color: colors.text.onPrimary,
              fontFamily: fonts.body,
            }}
            type="button"
            onClick={openInquiry}
          >
            {strings.common.contactNow}
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden w-full"
        style={{
          backgroundColor:
            mobileVariant === 'light' ? colors.surface : colors.navbarMobileBar,
        }}
      >
        {showNewProjectBanner ? (
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
              mobileCollapsibleBanner && !mobileBannerExpanded ? 'pointer-events-none' : ''
            }`}
            style={{
              maxHeight: mobileCollapsibleBanner && !mobileBannerExpanded ? 0 : 160,
            }}
            aria-hidden={mobileCollapsibleBanner && !mobileBannerExpanded}
          >
            <NewProjectBanner />
          </div>
        ) : null}
        <div className="h-[52px] px-4 py-[10px] flex items-center justify-between w-full">
          <Link
            to="/"
            onClick={onLogoClick}
            className="inline-flex shrink-0"
            aria-label="Home"
          >
            <img
              src={mobileVariant === 'light' ? '/logoBlue.svg' : '/logoWhite.svg'}
              alt="Shri Yamuna Infra"
              className="h-[22px] w-auto"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant={mobileVariant === 'light' ? 'outline' : 'default'}
              className="h-[35px]! px-3! text-[14px]! hover:opacity-90 rounded-none!"
              style={{
                fontFamily: fonts.body,
                ...(mobileVariant === 'light'
                  ? {
                      backgroundColor: colors.surface,
                      color: colors.accent,
                      borderColor: 'rgba(0,49,113,0.2)',
                    }
                  : {
                      backgroundColor: colors.accent,
                      color: colors.text.onAccent,
                    }),
              }}
              type="button"
              onClick={callNavbarContactNumber}
            >
              {strings.common.callNow}
            </Button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="p-0.5"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <div
                className="w-6 h-0.5 mb-1.5"
                style={{
                  backgroundColor:
                    mobileVariant === 'light' ? colors.accent : colors.surface,
                }}
              />
              <div
                className="w-6 h-0.5 mb-1.5"
                style={{
                  backgroundColor:
                    mobileVariant === 'light' ? colors.accent : colors.surface,
                }}
              />
              <div
                className="w-6 h-0.5"
                style={{
                  backgroundColor:
                    mobileVariant === 'light' ? colors.accent : colors.surface,
                }}
              />
            </button>
          </div>
        </div>
        {mobileMenuOpen ? (
          <div
            className="px-4 pb-4 flex flex-col gap-3"
            style={{
              borderTop:
                mobileVariant === 'light'
                  ? '1px solid rgba(0,0,0,0.06)'
                  : '1px solid rgba(255,255,255,0.10)',
            }}
          >
            <button
              type="button"
              onClick={() => {
                goToAbout();
                setMobileMenuOpen(false);
              }}
              style={{
                fontFamily: fonts.body,
                color: mobileVariant === 'light' ? colors.accent : colors.surface,
              }}
              className="text-left text-[16px] font-normal bg-transparent border-0 p-0 py-1"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => {
                goToKnowledge();
                setMobileMenuOpen(false);
              }}
              style={{
                fontFamily: fonts.body,
                color: mobileVariant === 'light' ? colors.accent : colors.surface,
              }}
              className="text-left text-[16px] font-normal bg-transparent border-0 p-0 py-1"
            >
              Knowledge
            </button>
            <button
              type="button"
              onClick={() => {
                goToAllProjects();
                setMobileMenuOpen(false);
              }}
              style={{
                fontFamily: fonts.body,
                color: mobileVariant === 'light' ? colors.accent : colors.surface,
              }}
              className="text-left text-[16px] font-normal bg-transparent border-0 p-0 py-1"
            >
              Projects
            </button>
          </div>
        ) : null}
      </div>

    </nav>
  );
};

export default Navbar;
