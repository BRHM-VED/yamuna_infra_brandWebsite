import React, { useEffect } from 'react';
import Navbar from '../../../layouts/Navbar';
import FooterSection from '../../home/components/FooterSection';
import { colors } from '../../../utils';

type LegalPageLayoutProps = {
  children: React.ReactNode;
};

/**
 * Shell for footer-linked legal pages (Privacy, Terms, Disclaimer).
 * Matches Home-style routing: thin page + feature components.
 */
const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.surface }}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar mobileVariant="light" showNewProjectBanner mobileCollapsibleBanner />
      </header>

      <main className="pt-[100px] md:pt-[93px] pb-16 md:pb-24">{children}</main>

      <FooterSection />
    </div>
  );
};

export default LegalPageLayout;
