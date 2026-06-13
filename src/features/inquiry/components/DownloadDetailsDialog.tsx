import React from 'react';
import { ArrowRight, ChevronDown, X } from 'lucide-react';
import { colors, fonts } from '../../../utils';

const PURPOSES = ['Site visit', 'Purchase', 'Due diligence', 'About Vrindavan', 'Payment plans'] as const;

export type DownloadDetailsDialogProps = {
  open: boolean;
  onClose: () => void;
  name: string;
  phoneNumber: string;
  purpose: string;
  onChangeName: (value: string) => void;
  onChangePhoneNumber: (digits: string) => void;
  onChangePurpose: (value: string) => void;
  onSubmit: () => void | Promise<void>;
  isSubmitting?: boolean;
  error?: string | null;
  /** Optional — override heading and button label */
  title?: string;
  buttonText?: string;
  defaultPurpose?: typeof PURPOSES[number];
};

export const DownloadDetailsDialog: React.FC<DownloadDetailsDialogProps> = ({
  open,
  onClose,
  name,
  phoneNumber,
  purpose,
  onChangeName,
  onChangePhoneNumber,
  onChangePurpose,
  onSubmit,
  isSubmitting = false,
  error,
  title = 'Brochure just a step away',
  buttonText = 'Get the Brochure',
  defaultPurpose,
}) => {
  const [showPurposeDropdown, setShowPurposeDropdown] = React.useState(false);

  // Pre-select purpose when dialog opens
  React.useEffect(() => {
    if (open && defaultPurpose && !purpose) {
      onChangePurpose(defaultPurpose);
    }
  }, [open]);

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
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  // Close dropdown when dialog closes
  React.useEffect(() => {
    if (!open) setShowPurposeDropdown(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close download dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
        <div
          className="relative w-full max-w-[520px] overflow-visible rounded-[4px] border shadow-2xl"
          style={{ backgroundColor: colors.background, borderColor: colors.border.light }}
          role="dialog"
          aria-modal="true"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 pt-12 pb-6">

            {/* Close button */}
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 w-7 h-7 flex items-center justify-center text-black/50 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2
              className="text-[32px] leading-[1.15] tracking-[-0.5px] mb-1"
              style={{ fontFamily: fonts.heading, color: colors.secondary, fontWeight: 400 }}
            >
              {title}
            </h2>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-black">
                Your Name<span style={{ color: colors.primary }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
                placeholder="Enter Full Name"
                className="w-full h-[48px] px-4 bg-white border outline-none text-[14px]"
                style={{ borderColor: colors.border.light, color: colors.text.primary, fontFamily: fonts.body }}
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-black">
                Mobile Number<span style={{ color: colors.primary }}>*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                pattern="[0-9]{10}"
                title="Enter a 10-digit mobile number"
                required
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Full Mobile Number"
                className="w-full h-[48px] px-4 bg-white border outline-none text-[14px]"
                style={{ borderColor: colors.border.light, color: colors.text.primary, fontFamily: fonts.body }}
              />
            </div>

            {/* Purpose dropdown */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-[14px] font-semibold text-black">Purpose</label>
              <button
                type="button"
                onClick={() => setShowPurposeDropdown((v) => !v)}
                className="w-full h-[48px] px-4 bg-white border flex justify-between items-center text-[14px] text-left outline-none cursor-pointer"
                style={{ borderColor: colors.border.light, fontFamily: fonts.body, color: purpose ? colors.text.primary : colors.text.tertiary }}
              >
                <span>{purpose || 'Select purpose'}</span>
                <ChevronDown size={18} className={`text-black/50 transition-transform duration-150 ${showPurposeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showPurposeDropdown && (
                <div className="absolute top-[78px] left-0 right-0 bg-white border shadow-lg z-20 flex flex-col" style={{ borderColor: colors.border.light }}>
                  {PURPOSES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => { onChangePurpose(p); setShowPurposeDropdown(false); }}
                      className="w-full px-4 py-3 text-left text-[14px] hover:bg-[#FEF5E3] transition-colors cursor-pointer"
                      style={{ fontFamily: fonts.body, color: colors.text.primary }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {error && (
              <p className="text-[12px] text-red-600 -mt-2">{error}</p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full h-[56px] flex items-center justify-center gap-[10px] hover:opacity-90 disabled:opacity-60 transition-opacity"
              style={{ backgroundColor: colors.accent }}
            >
              <span className="text-white text-[16px] font-medium" style={{ fontFamily: fonts.body }}>
                {isSubmitting ? 'Submitting…' : buttonText}
              </span>
              {isSubmitting ? (
                <span
                  className="inline-block size-[18px] rounded-full border-2 border-white/40 border-t-white"
                  style={{ animation: 'spin 0.8s linear infinite' }}
                  aria-hidden
                />
              ) : (
                <ArrowRight size={20} className="text-white" />
              )}
            </button>

          </form>

          <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }` }} />
        </div>
      </div>
    </div>
  );
};
