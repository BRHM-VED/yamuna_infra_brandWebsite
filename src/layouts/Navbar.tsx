import React from 'react';
import { colors, fonts, strings } from '../utils';
import Button from '../components/common/Button';
import { useInquiry } from '../features/inquiry/useInquiry';
import { useHomeNav } from '../features/home/hooks/homeNav';

const Navbar: React.FC = () => {
  const { openInquiry } = useInquiry();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { goToAbout, goToKnowledge, goToAllProjects } = useHomeNav();

  return (
    <nav className="relative z-20 w-full bg-transparent">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between pt-10 pb-6 px-[60px]">
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

        <div className="flex flex-col items-center justify-center">
          <img src="/logoBlue.svg" alt="Shri Yamuna Infra" className="h-[35px] w-auto" />
        </div>

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
            variant="primary"
            className="!h-[40px] !px-4 !text-[16px]"
            type="button"
            onClick={() => openInquiry()}
          >
            {strings.common.contactNow}
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full" style={{ backgroundColor: 'rgba(0,17,40,0.5)' }}>
        <div className="h-[52px] px-4 py-[10px] flex items-center justify-between w-full">
          <img src="/logoWhite.svg" alt="Shri Yamuna Infra" className="h-[22px] w-auto" />
          <div className="flex items-center gap-3">
            <Button
              variant="accent"
              className="!h-[32px] !px-3 !py-[10px] !text-[14px] !text-white"
              type="button"
              onClick={() => openInquiry()}
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
              <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: colors.surface }} />
              <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: colors.surface }} />
              <div className="w-6 h-0.5" style={{ backgroundColor: colors.surface }} />
            </button>
          </div>
        </div>
        {mobileMenuOpen ? (
          <div className="px-4 pb-4 flex flex-col gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                goToAbout();
                setMobileMenuOpen(false);
              }}
              style={{ fontFamily: fonts.body, color: colors.surface }}
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
              style={{ fontFamily: fonts.body, color: colors.surface }}
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
              style={{ fontFamily: fonts.body, color: colors.surface }}
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
