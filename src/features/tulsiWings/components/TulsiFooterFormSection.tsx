import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useBrochureDownloadForm } from '../../inquiry/hooks/useBrochureDownloadForm';
import { colors, fonts, pickTextStyle, strings, textStyles } from '../../../utils';
import { MOBILE_X_PAD } from '../constants';

const TW = colors.tulsiWings;

const PURPOSES = ['Site visit', 'Purchase', 'Due diligence', 'About Vrindavan'] as const;

const fieldLabelStyle = {
  fontFamily: fonts.body,
  color: TW.footerFormLabel,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '21px',
};

const inputStyle = {
  fontFamily: fonts.body,
  backgroundColor: TW.footerFormInputBg,
  outline: `1px solid ${TW.footerFormInputBorder}`,
  outlineOffset: '-1px',
} as const;

function FormHeader({ mobile }: { mobile: boolean }) {
  const copy = strings.tulsiWings.footer.form;

  return (
    <div className={`flex w-full flex-col gap-[13px] ${mobile ? 'max-w-[326px]' : 'max-w-[368px]'}`}>
      <h3
        className="text-[28px] font-semibold text-black"
        style={{ fontFamily: fonts.heading }}
      >
        {copy.title}
      </h3>
      <p
        className="text-black"
        style={{
          fontFamily: fonts.body,
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '24px',
        }}
      >
        {copy.subtitle}
      </p>
    </div>
  );
}

function PurposeField({
  value,
  placeholder,
  label,
  open,
  onToggle,
  onSelect,
}: {
  value: string;
  placeholder: string;
  label: string;
  open: boolean;
  onToggle: () => void;
  onSelect: (purpose: (typeof PURPOSES)[number]) => void;
}) {
  return (
    <div className="relative flex w-full flex-col gap-3">
      <label className="text-base font-medium leading-[21px]" style={fieldLabelStyle}>
        {label}
      </label>
      <button
        type="button"
        onClick={onToggle}
        className="flex h-[52px] w-full items-center justify-between gap-2 px-3 text-left text-lg leading-[22px] outline-none"
        style={inputStyle}
      >
        <span style={{ color: value ? colors.text.primary : TW.footerFormPlaceholder }}>{value || placeholder}</span>
        <ChevronDown
          size={24}
          className={`shrink-0 text-black transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-20 flex flex-col overflow-hidden shadow-[0px_4px_25px_rgba(0,0,0,0.15)]"
          style={{
            backgroundColor: colors.surface,
            outline: `1px solid ${TW.footerFormInputBorder}`,
            outlineOffset: '-1px',
          }}
        >
          {PURPOSES.map((purpose) => (
            <button
              key={purpose}
              type="button"
              onClick={() => onSelect(purpose)}
              className="w-full border-0 bg-white px-3 py-3 text-left text-lg leading-[22px] transition-colors hover:bg-[var(--tw-form-input-hover)]"
              style={{
                ['--tw-form-input-hover' as string]: TW.footerFormInputBg,
                fontFamily: fonts.body,
                color: colors.text.primary,
              }}
            >
              {purpose}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function InlineSuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full"
        style={{ backgroundColor: `${TW.darkBlue}1A`, color: TW.darkBlue }}
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold" style={{ fontFamily: fonts.heading, color: TW.darkBlue }}>
        Thank You!
      </h3>
      <p
        className="max-w-[280px] text-sm leading-relaxed"
        style={{ fontFamily: fonts.body, color: colors.text.secondary }}
      >
        Your inquiry has been logged. Our property expert will connect with you shortly.
      </p>
    </div>
  );
}

function LeadFormFields({
  form,
  updateField,
}: {
  form: ReturnType<typeof useBrochureDownloadForm>['form'];
  updateField: ReturnType<typeof useBrochureDownloadForm>['updateField'];
}) {
  const copy = strings.tulsiWings.footer.form;
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    updateField('phoneNumber', digits);
  };

  const inputClassName =
    'h-[52px] w-full px-3 text-lg leading-[22px] text-black outline-none placeholder:text-[color:var(--footer-ph)]';

  const inputFieldStyle = {
    ...inputStyle,
    ['--footer-ph' as string]: TW.footerFormPlaceholder,
  };

  return (
    <div className="flex w-full flex-col gap-[18px]">
      <div className="flex w-full flex-col gap-3">
        <label htmlFor="tulsi-footer-name" style={fieldLabelStyle}>
          {copy.nameLabel}
        </label>
        <input
          id="tulsi-footer-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder={copy.namePlaceholder}
          className={inputClassName}
          style={inputFieldStyle}
        />
      </div>

      <div className="flex w-full flex-col gap-3">
        <label htmlFor="tulsi-footer-phone" style={fieldLabelStyle}>
          {copy.phoneLabel}
        </label>
        <input
          id="tulsi-footer-phone"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
          required
          value={form.phoneNumber}
          onChange={handlePhoneChange}
          placeholder={copy.phonePlaceholder}
          className={inputClassName}
          style={inputFieldStyle}
        />
      </div>

      <PurposeField
        value={form.purpose}
        placeholder={copy.purposePlaceholder}
        label={copy.purposeLabel}
        open={showPurposeDropdown}
        onToggle={() => setShowPurposeDropdown((open) => !open)}
        onSelect={(purpose) => {
          updateField('purpose', purpose);
          setShowPurposeDropdown(false);
        }}
      />
    </div>
  );
}

export default function TulsiFooterFormSection() {
  const [inlineSuccess, setInlineSuccess] = useState(false);
  const inquiry = useBrochureDownloadForm('TULSI WINGS APARTMENTS');
  const footer = strings.tulsiWings.footer;
  const copy = footer.form;
  const taglineStyle = pickTextStyle(textStyles.sectionTag, false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.form.name.trim() || inquiry.form.phoneNumber.trim().length < 10) {
      return;
    }
    const ok = await inquiry.submit();
    if (ok) {
      setInlineSuccess(true);
      
      // Download brochure file
      const anchor = document.createElement("a");
      anchor.href = "/assets/brochure.pdf";
      anchor.setAttribute("download", "tulsi-wings-brochure.pdf");
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      
      window.setTimeout(() => setInlineSuccess(false), 5000);
    }
  };

  return (
    <section
      className={`w-full py-10 lg:min-h-[728px] lg:px-[120px] lg:py-[71px] ${MOBILE_X_PAD}`}
      style={{ backgroundColor: TW.darkBlue }}
    >
      {/* Mobile — Figma 3329:759 */}
      <div className="flex w-full flex-col gap-8 lg:hidden">
        <div className="flex flex-col gap-8">
          <span
            className="uppercase text-white"
            style={{
              fontFamily: fonts.body,
              ...pickTextStyle(textStyles.sectionTag, true),
              fontWeight: 500,
            }}
          >
            {footer.tagline}
          </span>

          <div className="flex flex-col gap-4">
            <h2
              className="whitespace-pre-line text-[28px] font-medium leading-tight text-white"
              style={{ fontFamily: fonts.heading }}
            >
              {footer.titleStart}
              <span className="italic" style={{ fontFamily: fonts.heading, color: TW.lightPeach }}>
                {footer.titleItalic}
              </span>
            </h2>
            <p
              className="whitespace-pre-line text-lg font-normal leading-6"
              style={{ fontFamily: fonts.body, color: TW.thesisMuted }}
            >
              {footer.subtitle}
            </p>
          </div>
        </div>

        <div
          className="flex w-full flex-col gap-10 px-4 py-8 shadow-[0px_4px_25px_rgba(0,0,0,0.25)]"
          style={{
            backgroundColor: colors.surface,
            outline: `1px solid ${TW.footerFormCardBorder}`,
            outlineOffset: '-1px',
          }}
        >
          {inlineSuccess ? (
            <InlineSuccessMessage />
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-10">
              <FormHeader mobile />
              <LeadFormFields form={inquiry.form} updateField={inquiry.updateField} />
              {inquiry.error ? (
                <p className="text-xs font-medium text-red-600" style={{ fontFamily: fonts.body }}>
                  {inquiry.error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={inquiry.isSubmitting}
                className="flex h-14 w-full items-center justify-center border-0 px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ fontFamily: fonts.body, backgroundColor: TW.darkBlue }}
              >
                {inquiry.isSubmitting ? 'Submitting…' : copy.submit}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Desktop — Figma 3323:840 */}
      <div className="mx-auto hidden w-full max-w-[1432px] items-center justify-between lg:flex">
        <div className="flex max-w-[634px] flex-col gap-8">
          <span
            className="uppercase text-white"
            style={{
              fontFamily: fonts.body,
              ...taglineStyle,
              fontWeight: 500,
            }}
          >
            {footer.tagline}
          </span>

          <div className="flex flex-col gap-4">
            <h2
              className="whitespace-pre-line text-[48px] font-medium leading-tight text-white"
              style={{ fontFamily: fonts.heading }}
            >
              {footer.titleStart}
              <span className="italic" style={{ fontFamily: fonts.heading, color: TW.lightPeach }}>
                {footer.titleItalic}
              </span>
            </h2>
            <p
              className="whitespace-pre-line text-lg font-normal leading-6"
              style={{ fontFamily: fonts.body, color: TW.thesisMuted }}
            >
              {footer.subtitle}
            </p>
          </div>
        </div>

        <div
          className="flex w-[517px] shrink-0 flex-col gap-10 p-8 shadow-[0px_4px_25px_rgba(0,0,0,0.25)]"
          style={{
            backgroundColor: colors.surface,
            outline: `1px solid ${TW.footerFormCardBorder}`,
            outlineOffset: '-1px',
          }}
        >
          {inlineSuccess ? (
            <InlineSuccessMessage />
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-10">
              <FormHeader mobile={false} />
              <LeadFormFields form={inquiry.form} updateField={inquiry.updateField} />
              {inquiry.error ? (
                <p className="text-xs font-medium text-red-600" style={{ fontFamily: fonts.body }}>
                  {inquiry.error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={inquiry.isSubmitting}
                className="flex h-14 w-full items-center justify-center border-0 px-6 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ fontFamily: fonts.body, backgroundColor: TW.darkBlue }}
              >
                {inquiry.isSubmitting ? 'Submitting…' : copy.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
