import React from 'react';
import { X } from 'lucide-react';
import { colors, fonts } from '../../../utils';

export type InquiryThankYouPanelProps = {
  onDone: () => void;
  layout: 'desktop' | 'mobile';
};

export const InquiryThankYouPanel: React.FC<InquiryThankYouPanelProps> = ({ onDone, layout }) => {
  const socialTileClass =
    'w-[52px] h-[52px] bg-white flex items-center justify-center border border-black/[0.08] shadow-sm';

  const rootClassName =
    layout === 'desktop'
      ? 'relative w-full max-w-[560px] min-h-[min(520px,85vh)] flex flex-col bg-[#FDF8E1] rounded-[2px] shadow-2xl overflow-hidden md:min-h-[520px]'
      : 'relative w-full flex flex-col bg-[#FDF8E1] rounded-t-[14px] border-t border-black/10 max-h-[90vh] overflow-y-auto';

  return (
    <div
      className={rootClassName}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-thanks-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onDone}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center text-black/60 hover:text-black sm:right-4 sm:top-4"
      >
        <X size={22} />
      </button>

      <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-12 text-center sm:px-6 sm:pt-14">
        <h2
          id="inquiry-thanks-title"
          className="max-w-[20ch] text-[26px] leading-[1.2] tracking-[-0.02em] sm:max-w-none sm:text-[34px] md:text-[40px]"
          style={{ fontFamily: fonts.heading, color: colors.text.primary, fontWeight: 400 }}
        >
          Thank you for your request
        </h2>
        <p
          className="mt-6 text-[15px] leading-[1.5] sm:mt-8 sm:text-[16px]"
          style={{ fontFamily: fonts.body, color: colors.text.secondary }}
        >
          Meanwhile follow our socials
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
          <a href="#" className={socialTileClass}>
            <span className="sr-only">Instagram</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" className={socialTileClass}>
            <span className="sr-only">Facebook</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" className={socialTileClass}>
            <span className="sr-only">LinkedIn</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <div className={layout === 'desktop' ? 'px-6 pb-8 sm:px-10 sm:pb-10' : 'px-4 pb-6'}>
        <button
          type="button"
          onClick={onDone}
          className="flex h-[50px] w-full items-center justify-center text-[18px] leading-[1.19] text-white hover:opacity-90 md:h-[56px]"
          style={{ fontFamily: fonts.body, backgroundColor: colors.accent }}
        >
          Done
        </button>
      </div>
    </div>
  );
};
