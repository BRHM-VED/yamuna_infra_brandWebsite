import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { colors, fonts, textStyles } from '../../../utils';
import Input from '../../../components/common/Input';

function MobileFieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <p
      className="font-['Instrument_Sans:Medium',sans-serif] font-medium text-[13px] leading-[1.6]"
      style={{ fontVariationSettings: "'wdth' 100", color: colors.text.tertiary }}
    >
      {children}
      {required ? <span style={{ color: colors.primary }}>*</span> : null}
    </p>
  );
}

function MobileTextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-white px-[16px] outline-none"
      style={{
        border: `1px solid ${colors.border.light}`,
        height: '42px',
        fontFamily: fonts.body,
        fontSize: '14px',
        color: colors.text.primary,
      }}
    />
  );
}

export type DownloadDetailsDialogProps = {
  open: boolean;
  onClose: () => void;
  name: string;
  phoneNumber: string;
  onChangeName: (value: string) => void;
  onChangePhoneNumber: (digits: string) => void;
  onSubmit: () => void | Promise<void>;
  isSubmitting?: boolean;
  error?: string | null;
};

export const DownloadDetailsDialog: React.FC<DownloadDetailsDialogProps> = ({
  open,
  onClose,
  name,
  phoneNumber,
  onChangeName,
  onChangePhoneNumber,
  onSubmit,
  isSubmitting = false,
  error,
}) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    onChangePhoneNumber(digits);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit();
  };

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
        aria-label="Close download dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
        <div
          className="relative w-full max-w-[614px] overflow-hidden rounded-[2px] border shadow-2xl"
          style={{ backgroundColor: colors.background, borderColor: colors.border.light }}
          role="dialog"
          aria-modal="true"
        >
          {/* Mobile: compact flex layout — no tall min-height */}
          <form
            onSubmit={handleSubmit}
            className="relative flex max-h-[min(560px,88vh)] flex-col gap-4 overflow-y-auto px-4 pb-5 pt-14 md:hidden"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-[12px] top-[12px] z-10 flex h-[28px] w-[28px] items-center justify-center text-black/60 hover:text-black"
            >
              <X size={22} />
            </button>

            <div className="flex flex-col gap-3">
              <h2
                className="text-[26px] leading-[1.15] tracking-[-0.78px]"
                style={{ fontFamily: fonts.heading, color: colors.secondary, fontWeight: 400 }}
              >
                Downloading in progress
              </h2>
              <p
                className="text-[14px] leading-normal opacity-70"
                style={{ fontFamily: textStyles.bodyLarge.fontFamily, color: colors.text.primary }}
              >
                Please provide your details before download
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-[10px]">
                <MobileFieldLabel required>Name</MobileFieldLabel>
                <MobileTextInput
                  name="name"
                  required
                  value={name}
                  onChange={(e) => onChangeName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <MobileFieldLabel required>Phone number</MobileFieldLabel>
                <MobileTextInput
                  name="phoneNumber"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit mobile number"
                  required
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
              </div>
              {error ? (
                <p
                  className="text-[12px]"
                  style={{ fontFamily: textStyles.bodyMedium.fontFamily, color: colors.text.primary }}
                >
                  {error}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 flex h-[54px] w-full shrink-0 items-center justify-center gap-[10px] px-[26px] py-0 hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: colors.accent }}
            >
              <span className="text-[16px] leading-[1.19] text-white" style={{ fontFamily: fonts.body }}>
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </span>
              {isSubmitting ? (
                <span
                  className="inline-block size-[18px] rounded-full border-2 border-white/40 border-t-white"
                  style={{ animation: 'spin 0.8s linear infinite' }}
                  aria-hidden
                />
              ) : (
                <ArrowRight size={24} className="text-white" />
              )}
            </button>
          </form>

          {/* Desktop: original absolute layout */}
          <div className="relative hidden min-h-[640px] w-full md:block md:h-[735px]">
            <form onSubmit={handleSubmit} className="absolute inset-0">
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="absolute right-[16px] top-[16px] z-10 flex h-[28px] w-[28px] items-center justify-center text-black/60 hover:text-black"
              >
                <X size={22} />
              </button>

              <div className="absolute left-1/2 top-[56px] w-[552px] max-w-[calc(100%-32px)] -translate-x-1/2">
                <div className="flex w-[388px] max-w-full flex-col gap-[32px]">
                  <h2
                    className="text-[54px] leading-[1.11] tracking-[-1.62px]"
                    style={{ fontFamily: fonts.heading, color: colors.secondary, fontWeight: 400 }}
                  >
                    Downloading in progress
                  </h2>
                  <p
                    className="max-w-[40ch] text-[18px] leading-[1.4] opacity-70"
                    style={{ fontFamily: textStyles.bodyLarge.fontFamily, color: colors.text.primary }}
                  >
                    Please provide your details before download
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-[346px] flex w-[552px] max-w-[calc(100%-32px)] -translate-x-1/2 flex-col gap-[22px]">
                <Input
                  label="Name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => onChangeName(e.target.value)}
                />
                <Input
                  label="Phone number"
                  name="phoneNumber"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit mobile number"
                  required
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
                {error ? (
                  <p
                    className="text-[12px] -mt-2"
                    style={{ fontFamily: textStyles.bodyMedium.fontFamily, color: colors.text.primary }}
                  >
                    {error}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute bottom-[31px] right-[33px] flex h-[64px] w-[229px] translate-x-0 items-center justify-center gap-[10px] px-[26px] py-0 hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-[18px] leading-[1.19] text-white" style={{ fontFamily: fonts.body }}>
                  {isSubmitting ? 'Submitting…' : 'Submit'}
                </span>
                {isSubmitting ? (
                  <span
                    className="inline-block size-[18px] rounded-full border-2 border-white/40 border-t-white"
                    style={{ animation: 'spin 0.8s linear infinite' }}
                    aria-hidden
                  />
                ) : (
                  <ArrowRight size={24} className="text-white" />
                )}
              </button>
            </form>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `,
            }}
          />
        </div>
      </div>
    </div>
  );
};
