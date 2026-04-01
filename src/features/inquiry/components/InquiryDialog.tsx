import React from 'react';
import { ArrowRight, Copy, X } from 'lucide-react';
import { colors, fonts } from '../../../utils';
import Input from '../../../components/common/Input';
import TextArea from '../../../components/common/TextArea';
import ChoiceChip from '../../../components/common/ChoiceChip';
import { useInquiryForm } from '../hooks/useInquiryForm';

type InquiryDialogProps = {
  open: boolean;
  onClose: () => void;
};

const PURPOSES = ['Site visit', 'Purchase', 'Due diligence', 'About Vrindavan'] as const;

function useBodyScrollLock(locked: boolean) {
  React.useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // fall through to legacy copy method
  }

  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  ta.style.top = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }

    // Safari < 14
    // eslint-disable-next-line deprecation/deprecation
    mql.addListener(onChange);
    // eslint-disable-next-line deprecation/deprecation
    return () => mql.removeListener(onChange);
  }, [query]);

  return matches;
}

const InquiryDialog: React.FC<InquiryDialogProps> = ({ open, onClose }) => {
  const { form, updateField, submitForm, isSubmitting } = useInquiryForm();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useBodyScrollLock(open);

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
    <div className="fixed inset-0 z-[100]">
      {/* overlay */}
      <button
        type="button"
        aria-label="Close inquiry dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Desktop dialog */}
      {isDesktop ? (
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          className="relative w-full max-w-[1024px] overflow-hidden rounded-[2px] bg-white shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full h-[682px] overflow-hidden"
          >
            {/* Background image (your exported asset) */}
            <img
              src="/assets/inquiry/inquiryFormBg.svg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: 'left top' }}
              aria-hidden
            />

            {/* Form panel */}
            <div
              className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[614px] h-[735px] -translate-x-[92px] bg-[#FEF5E3] overflow-hidden rounded-[2px] border"
              style={{ borderColor: colors.border.light }}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="absolute right-6 top-10 w-[28px] h-[28px] flex items-center justify-center text-black/60 hover:text-black"
              >
                <X size={22} />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 top-[50px] w-[550px] flex flex-col gap-[4px]">
                <Input
                  label="Name"
                  required
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
                <Input
                  label="Phone number"
                  required
                  value={form.phoneNumber}
                  onChange={(e) => updateField('phoneNumber', e.target.value)}
                />
                <TextArea
                  label="How can we help you?"
                  required
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />

                <div className="flex flex-col gap-[10px]">
                  <p className="text-[16px] leading-[1.6]" style={{ fontFamily: fonts.body, color: colors.text.tertiary }}>
                    Pupose
                  </p>
                  <div className="flex flex-wrap gap-[10px] w-[550px]">
                    {PURPOSES.map((p) => (
                      <ChoiceChip
                        key={p}
                        label={p}
                        selected={form.purpose === p}
                        onClick={() => updateField('purpose', p)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={submitForm}
                className="absolute right-[32px] bottom-[50px] w-[229px] h-[60px] flex items-center justify-center gap-[10px] px-[26px] py-[20px] hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-white text-[18px] leading-[1.19]" style={{ fontFamily: fonts.body }}>
                  Submit
                </span>
                <ArrowRight size={24} className="text-white" />
              </button>
            </div>

            {/* Left content */}
            <div className="absolute left-[42px] top-[49px] w-[388px] flex flex-col gap-[247px]">
              <div className="flex flex-col gap-[87px]">
                <div
                  className="text-[54px] tracking-[-1.62px]"
                  style={{ fontFamily: fonts.heading, color: colors.secondary, lineHeight: 1.26, fontWeight: 400 }}
                >
                  <div>Have questions?</div>
                  <div style={{ color: colors.primary, fontStyle: 'italic', fontWeight: 500 }}>Get in touch!</div>
                </div>

                <div className="flex flex-col gap-[20px] text-black">
                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] font-medium" style={{ fontFamily: fonts.mono }}>
                      Tulsi third eye
                    </div>
                    <div className="opacity-70 text-[16px]" style={{ fontFamily: fonts.mono, lineHeight: 1.4 }}>
                      <div>6th floor B-tower 30,31 bhutani alphathum</div>
                      <div>Sec 90 noida</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] font-medium" style={{ fontFamily: fonts.mono }}>
                      Phone
                    </div>
                    <div className="flex items-center gap-[10px] opacity-70 text-[16px]" style={{ fontFamily: fonts.mono, lineHeight: 1.4 }}>
                      <span>+91 67892 38833</span>
                      <button
                        type="button"
                        aria-label="Copy phone number"
                        onClick={() => copyToClipboard('+91 67892 38833')}
                        className="opacity-80 hover:opacity-100"
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <div className="text-[14px] font-medium" style={{ fontFamily: fonts.mono }}>
                      Email
                    </div>
                    <div className="flex items-center gap-[10px] opacity-70 text-[16px]" style={{ fontFamily: fonts.mono, lineHeight: 1.4 }}>
                      <span>info@shriyamunainfra.com</span>
                      <button
                        type="button"
                        aria-label="Copy email"
                        onClick={() => copyToClipboard('info@shriyamunainfra.com')}
                        className="opacity-80 hover:opacity-100"
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[16px]">
                <a href="#" className="w-[52px] h-[52px] bg-white flex items-center justify-center">
                  <span className="sr-only">Instagram</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="w-[52px] h-[52px] bg-white flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-[52px] h-[52px] bg-white flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#003171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : null}

      {/* Mobile bottom sheet */}
      {!isDesktop ? (
      <div className="absolute inset-0 flex items-end">
        <div
          className="relative w-full bg-[#FEF5E3] border-t border-black/10 rounded-t-[14px] px-4 pt-4 pb-6 max-h-full overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className="text-[24px] leading-[1.26] pr-4"
              style={{ fontFamily: fonts.heading, color: colors.secondary, fontWeight: 400 }}
            >
              <div>Have questions?</div>
              <div style={{ color: colors.primary, fontStyle: 'italic', fontWeight: 500 }}>Get in touch!</div>
            </div>
            <button type="button" aria-label="Close" onClick={onClose} className="w-10 h-10 flex items-center justify-center text-black/60">
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col gap-[22px]">
            <Input label="Name" required value={form.name} onChange={(e) => updateField('name', e.target.value)} />
            <Input
              label="Phone number"
              required
              value={form.phoneNumber}
              onChange={(e) => updateField('phoneNumber', e.target.value)}
            />
            <TextArea
              label="How can we help you?"
              required
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
            />

            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] leading-[1.6]" style={{ fontFamily: fonts.body, color: colors.text.tertiary }}>
                Pupose
              </p>
              <div className="flex flex-wrap gap-[10px]">
                {PURPOSES.map((p) => (
                  <ChoiceChip key={p} label={p} selected={form.purpose === p} onClick={() => updateField('purpose', p)} />
                ))}
              </div>
            </div>

            <button
              type="button"
              disabled={isSubmitting}
              onClick={submitForm}
              className="w-full h-[50px] flex items-center justify-center gap-[10px] px-[26px] py-[22px] hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: colors.accent }}
            >
              <span className="text-white text-[18px] leading-[1.19]" style={{ fontFamily: fonts.body }}>
                Submit
              </span>
              <ArrowRight size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      ) : null}
    </div>
  );
};

export default InquiryDialog;

