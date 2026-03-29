import React from 'react';
import { colors, fonts, strings } from '../utils';
import Button from '../components/common/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-20 flex items-center justify-between pt-10 pb-6 px-4 md:px-[60px] bg-transparent">
      {/* Desktop Left Links */}
      <div className="hidden md:flex items-center gap-[45px]">
        <a href="#about" style={{ fontFamily: fonts.body, color: colors.accent }} className="text-[16px] font-normal no-underline hover:opacity-70 transition-opacity whitespace-nowrap">
          About
        </a>
        <a href="#knowledge" style={{ fontFamily: fonts.body, color: colors.accent }} className="text-[16px] font-normal no-underline hover:opacity-70 transition-opacity whitespace-nowrap">
          Knowledge
        </a>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center">
        <img src="/assets/images/logo.svg" alt="Shri Yamuna Infra" className="h-[45px] md:h-[35px] w-auto" />
      </div>

      {/* Desktop Right Links */}
      <div className="hidden md:flex items-center gap-[32px]">
        <a href="#projects" style={{ fontFamily: fonts.body, color: colors.accent }} className="text-[16px] font-normal no-underline hover:opacity-70 transition-opacity">
          Projects
        </a>
        <Button variant="primary" className="!h-[40px] !px-4 !text-[16px]">
          {strings.common.contactNow}
        </Button>
      </div>

      {/* Mobile Menu & Call Now */}
      <div className="flex md:hidden items-center gap-4">
        <Button variant="accent" className="!h-[40px] !px-4 !text-[14px]">
          {strings.common.callNow}
        </Button>
        <button className="p-2">
          <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: colors.accent }} />
          <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: colors.accent }} />
          <div className="w-6 h-0.5" style={{ backgroundColor: colors.accent }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
