import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { ArrowRight } from 'lucide-react';
import { useInquiry } from '../../inquiry/useInquiry';
import { useNavigate } from 'react-router-dom';

const InstagramIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const FacebookIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const LinkedinIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const FooterSection: React.FC = () => {
  const { openInquiry } = useInquiry();
  const navigate = useNavigate();

  const callFooterContactNumber = () => {
    window.location.href = 'tel:18001211101';
  };

  const handleFooterLinkClick = (label: string) => {
    if (label === 'Contact us') {
      if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) {
        openInquiry();
      } else {
        callFooterContactNumber();
      }
      return true;
    }
    if (label === 'Schedule site visit') {
      openInquiry();
      return true;
    }
    if (label === 'Completed projects') {
      navigate('/projects');
      return true;
    }
    if (label === 'Tulsi Wings Apartments') {
      navigate('/projects/tulsi-wings-apartments');
      return true;
    }
    if (label === strings.footer.legal.privacy) {
      navigate('/privacy-policy');
      return true;
    }
    if (label === strings.footer.legal.terms) {
      navigate('/terms-and-conditions');
      return true;
    }
    if (label === strings.footer.legal.disclaimer) {
      navigate('/disclaimer');
      return true;
    }
    return false;
  };

  const socialLinks = {
    instagram: 'https://www.instagram.com/shriyamunainfra/',
    facebook: 'https://www.facebook.com/Syievrindavan',
    linkedin: 'https://www.linkedin.com/company/shri-yamuna-infra/',
  };

  return (
    <footer className="w-full bg-white overflow-x-hidden">
      {/* Top CTA Content Section (Clean White Background) */}
      <div className="relative z-10 w-full max-w-[1512px] mx-auto flex flex-col items-center px-4 md:px-6 text-center">
        <p
          className="text-[12px] md:text-[20px] font-medium leading-[1.6] tracking-[4.44px] md:tracking-[7.4px] mb-5 md:mb-4 uppercase"
          style={{ fontFamily: fonts.body, color: colors.destinationTag }}
        >
          {strings.footer.cta.tagline}
        </p>
        <h2
          className="text-[32px] md:text-[80px] leading-[1.3] md:leading-[1.1] italic font-bold mb-4 md:mb-6 whitespace-pre-line tracking-[-0.96px] md:tracking-[-2.4px] max-w-[1050px]"
          style={{ fontFamily: fonts.heading, color: '#9DB5D4' }}
        >
          {strings.footer.cta.title}
        </h2>
        <p
          className="text-[14px] md:text-[22px] leading-[1.4] md:leading-[1.45] mb-8 md:mb-8 opacity-95 max-w-[650px]"
          style={{ fontFamily: fonts.body, color: '#5A5550' }}
        >
          {strings.footer.cta.subtitle}
        </p>

        <button
          type="button"
          onClick={() => openInquiry()}
          className="inline-flex h-[56px] md:h-[64px] items-center justify-center gap-[10px] px-[26px] py-0 text-[16px] leading-[1.19] font-normal rounded-[1px] group hover:opacity-90 transition-all mb-6 md:mb-2 md:gap-4 md:px-8 md:min-w-[229px] md:text-[18px]"
          style={{ backgroundColor: '#F7DFCA', fontFamily: fonts.body }}
        >
          <span className="text-black">{strings.footer.cta.button}</span>
          <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

      {/* Illustration Area & Blue Footer Overlap */}
      {/* FULL WIDTH Illustration - Frame spanning entire horizontal viewport */}
      <div className="relative w-full">
        {/* Mobile: image then blue panel in flow (matches Figma stacking) */}
        <div className="md:hidden w-full">
          <div className="w-full h-[360px] overflow-hidden">
            <img
              src="/assets/images/spritualCommunity.webp"
              alt="Spiritual Community Illustration"
              className="w-full h-full object-cover object-[center_70%]"
            />
          </div>

          {/* Blue Footer Card (mobile) — sits right under image with slight overlap */}
          <div
            className="relative -mt-[74px] w-full bg-brand-blue rounded-t-[20px] px-4 pt-6 pb-4 z-20 overflow-hidden shadow-2xl flex flex-col"
            style={{ minHeight: '500px' }}
          >
            {/* Bottom wave image (use provided asset) */}
            <img
              src="/assets/images/twoLine.svg"
              alt=""
              className="absolute inset-x-0 bottom-0 w-full pointer-events-none "
              aria-hidden
              loading="lazy"
              decoding="async"
            />

            <div className="relative flex flex-col gap-10 z-10">
              {/* Branding & Social */}
              <div className="flex flex-col gap-6">
                <p className="text-[14px] leading-[1.6] font-medium text-white max-w-[260px]" style={{ fontFamily: fonts.heading }}>
                  {strings.footer.about}
                </p>
                <div className="flex gap-4 mt-1">
                  {[InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, idx) => (
                    <a
                      key={idx}
                      href={
                        idx === 0
                          ? socialLinks.instagram
                          : idx === 1
                            ? socialLinks.facebook
                            : socialLinks.linkedin
                      }
                      className="w-[52px] h-[52px] bg-[#03377c] flex items-center justify-center text-brand-light transition-transform hover:scale-105 rounded-[1px] border border-white/5"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* 3 columns stacked like Figma */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                <div className="flex flex-col gap-5">
                  <h4 className="text-[#67A8FF] text-[12px] font-medium tracking-wide uppercase" style={{ fontFamily: fonts.heading }}>
                    {strings.footer.quickLinksLabel}
                  </h4>
                  <nav className="flex flex-col gap-4">
                    {strings.footer.quickLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="text-white text-[13px] font-medium leading-normal"
                        style={{ fontFamily: fonts.mono }}
                        onClick={(e) => {
                          if (handleFooterLinkClick(link.label)) e.preventDefault();
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-col gap-5">
                  <h4 className="text-[#67A8FF] text-[12px] font-medium tracking-wide uppercase" style={{ fontFamily: fonts.heading }}>
                    {strings.footer.projectsLabel}
                  </h4>
                  <nav className="flex flex-col gap-4">
                    {strings.footer.projects.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="text-white text-[13px] font-medium leading-normal"
                        style={{ fontFamily: fonts.mono }}
                        onClick={(e) => {
                          if (handleFooterLinkClick(link.label)) e.preventDefault();
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Legal row */}
              <div className="pt-2 flex items-center justify-between text-[13px] font-medium leading-normal" style={{ fontFamily: fonts.mono }}>
                <a
                  href="/privacy-policy"
                  className="text-white"
                  onClick={(e) => {
                    if (handleFooterLinkClick(strings.footer.legal.privacy)) e.preventDefault();
                  }}
                >
                  {strings.footer.legal.privacy}
                </a>
                <a
                  href="/terms-and-conditions"
                  className="text-white"
                  onClick={(e) => { if (handleFooterLinkClick(strings.footer.legal.terms)) e.preventDefault(); }}
                >
                  {strings.footer.legal.terms}
                </a>
                <a
                  href="/disclaimer"
                  className="text-white"
                  onClick={(e) => { if (handleFooterLinkClick(strings.footer.legal.disclaimer)) e.preventDefault(); }}
                >
                  {strings.footer.legal.disclaimer}
                </a>
              </div>

              <div className="border-b border-white/20" />


              <div className="pt-6 flex flex-col items-center">
                <span className="text-white/50 text-[13px] tracking-[0.55em] uppercase mb-4" style={{ fontFamily: fonts.body }}>
                  {strings.footer.legacy}
                </span>
                <img
                  src="/shriYamunaInfraFooter.svg"
                  alt="Shri Yamuna Infra"
                  className="h-[34px] w-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-4 text-white/60 text-[12px]" style={{ fontFamily: fonts.body }}>
                  {strings.footer.copyright}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: full-bleed illustration with absolute blue card overlap (existing behavior) */}
        <div className="hidden md:block relative w-full -mt-16 h-[1050px] lg:h-[1150px]">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/assets/images/spritualCommunity.webp"
              alt="Spiritual Community Illustration"
              className="w-full h-full object-cover object-[center_90%]"
            />
          </div>

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-98px)] bg-brand-blue rounded-t-[12px] px-[30px] pt-[30px] pb-[25px] z-20 overflow-hidden shadow-2xl flex flex-col"
            style={{ height: '450px' }}
          >
          {/* Bottom wave image (use provided asset) */}
          <img
            src="/assets/images/twoLine.svg"
            alt=""
            className="absolute inset-x-0 bottom-0 w-full pointer-events-none h-[150px]"
            aria-hidden
            loading="lazy"
            decoding="async"
          />

          <div className="relative grid grid-cols-[353px_180px_180px_180px] justify-between gap-x-[43px] gap-y-10 mb-8 z-10">
            {/* Branding & Social Connectivity */}
            <div className="flex flex-col gap-6">
              <img
                src="/SyInfra.svg"
                alt="Shri Yamuna Infra"
                className="w-[78px] h-[78px] rounded-[2px] shadow-sm"
                loading="lazy"
                decoding="async"
              />
              <p
                className="text-[15.5px] leading-[1.6] font-medium text-white max-w-[300px]"
                style={{ fontFamily: fonts.heading }}
              >
                {strings.footer.about}
              </p>
              <div className="flex gap-4 mt-1">
                {[InstagramIcon, FacebookIcon, LinkedinIcon].map((Icon, idx) => (
                  <a
                    key={idx}
                    href={
                      idx === 0
                        ? socialLinks.instagram
                        : idx === 1
                          ? socialLinks.facebook
                          : socialLinks.linkedin
                    }
                    className="w-[52px] h-[52px] bg-[#03377c] flex items-center justify-center text-brand-light hover:bg-[#044ba9] transition-transform hover:scale-105 rounded-[1px] border border-white/5"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-6">
              <h4
                className="text-[#67A8FF] text-[18px] font-medium tracking-wide uppercase"
                style={{ fontFamily: fonts.heading }}
              >
                {strings.footer.quickLinksLabel}
              </h4>
              <nav className="flex flex-col gap-4">
                {strings.footer.quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-white text-[14px] font-medium hover:text-[#67A8FF] transition-colors opacity-90 hover:opacity-100"
                    style={{ fontFamily: fonts.mono }}
                    onClick={(e) => {
                      if (handleFooterLinkClick(link.label)) e.preventDefault();
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Projects Portfolio Column */}
            <div className="flex flex-col gap-6">
              <h4
                className="text-[#67A8FF] text-[18px] font-medium tracking-wide uppercase"
                style={{ fontFamily: fonts.heading }}
              >
                {strings.footer.projectsLabel}
              </h4>
              <nav className="flex flex-col gap-4">
                {strings.footer.projects.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-white text-[14px] font-medium hover:text-[#67A8FF] transition-colors opacity-90 hover:opacity-100"
                    style={{ fontFamily: fonts.mono }}
                    onClick={(e) => {
                      if (handleFooterLinkClick(link.label)) e.preventDefault();
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Information Column */}
            <div className="flex flex-col gap-6">
              <h4
                className="text-[#67A8FF] text-[18px] font-medium tracking-wide uppercase"
                style={{ fontFamily: fonts.heading }}
              >
                {strings.footer.contactLabel}
              </h4>
              <div className="flex flex-col gap-6 text-[14px] text-white" style={{ fontFamily: fonts.mono }}>
                <div className="flex flex-col gap-1.5">
                  <p className="font-semibold text-white/90">{strings.footer.contact.addressLabel}</p>
                  <p className="opacity-70 whitespace-pre-line leading-[1.6] font-medium">
                    {strings.footer.contact.address}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-semibold text-white/90">{strings.footer.contact.phoneLabel}</p>
                  <p className="opacity-70 font-medium">{strings.footer.contact.phone}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-semibold text-white/90">{strings.footer.contact.emailLabel}</p>
                  <p className="opacity-70 font-medium">{strings.footer.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Combined Bottom Row: Legal Links | Brand Signature | Copyright */}
          <div className="relative pt-[28px] z-10 mt-auto flex flex-row items-center justify-between">

            {/* 1. Legal Links (Left) */}
            <div className="flex items-center gap-[34px] text-[14px]">
              <a
                href="/privacy-policy"
                className="text-white/60 hover:text-white font-medium transition-colors"
                style={{ fontFamily: fonts.body }}
                onClick={(e) => {
                  if (handleFooterLinkClick(strings.footer.legal.privacy)) e.preventDefault();
                }}
              >
                {strings.footer.legal.privacy}
              </a>
              <a
                href="/terms-and-conditions"
                className="text-white/60 hover:text-white font-medium transition-colors"
                style={{ fontFamily: fonts.body }}
                onClick={(e) => { if (handleFooterLinkClick(strings.footer.legal.terms)) e.preventDefault(); }}
              >
                {strings.footer.legal.terms}
              </a>
              <a
                href="/disclaimer"
                className="text-white/60 hover:text-white font-medium transition-colors"
                style={{ fontFamily: fonts.body }}
                onClick={(e) => { if (handleFooterLinkClick(strings.footer.legal.disclaimer)) e.preventDefault(); }}
              >
                {strings.footer.legal.disclaimer}
              </a>
            </div>

            {/* 2. Brand Signature (Center) */}
            <div className="flex flex-col items-center">
              <span
                className="text-white/50 text-[13px] tracking-[0.55em] uppercase mb-[8px]"
                style={{ fontFamily: fonts.body }}
              >
                {strings.footer.legacy}
              </span>
              <img
                src="/shriYamunaInfraFooter.svg"
                alt="Shri Yamuna Infra"
                className="h-[36px] w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 3. Copyright (Right) */}
            <div
              className="text-white/60 text-[14px] font-medium text-right"
              style={{ fontFamily: fonts.body }}
            >
              {strings.footer.copyright}
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
