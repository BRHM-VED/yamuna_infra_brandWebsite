import React from 'react';
import { X } from 'lucide-react';
import { colors, fonts } from '../../../utils';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/shriyamunainfra/',
  facebook: 'https://www.facebook.com/Syievrindavan',
  linkedin: 'https://www.linkedin.com/company/shri-yamuna-infra/',
} as const;

export type DownloadThankYouDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const DownloadThankYouDialog: React.FC<DownloadThankYouDialogProps> = ({ open, onClose }) => {
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100">
      <button
        type="button"
        aria-label="Close download thank you dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
        <div
          className="relative w-full max-w-[614px] bg-[#FEF5E3] overflow-hidden rounded-[2px] border shadow-2xl"
          style={{ borderColor: colors.border.light }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full min-h-[640px] md:h-[735px]">
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-[16px] top-[16px] w-[28px] h-[28px] flex items-center justify-center text-black/60 hover:text-black"
            >
              <X size={22} />
            </button>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h2
                className="text-[36px] md:text-[54px] leading-[1.11] tracking-[-1.62px]"
                style={{ fontFamily: fonts.heading, color: colors.secondary, fontWeight: 400 }}
              >
                Thank you for
                <br />
                your request
              </h2>

              <p
                className="mt-8 text-[14px] md:text-[18px] leading-[1.4] opacity-70"
                style={{ fontFamily: fonts.mono, color: colors.text.primary }}
              >
                Meanwhile follow our socials
              </p>

              <div className="mt-8 flex items-center gap-[18px]">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[52px] h-[52px] bg-white flex items-center justify-center"
                >
                  <span className="sr-only">Instagram</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[52px] h-[52px] bg-white flex items-center justify-center"
                >
                  <span className="sr-only">Facebook</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[52px] h-[52px] bg-white flex items-center justify-center"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute left-1/2 -translate-x-1/2 bottom-[32px] w-[calc(100%-32px)] md:w-[550px] h-[54px] md:h-[64px] flex items-center justify-center"
              style={{ backgroundColor: colors.accent }}
            >
              <span className="text-white text-[18px] leading-[1.19]" style={{ fontFamily: fonts.body }}>
                Done
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

