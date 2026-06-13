import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { colors, fonts, pickTextStyle, strings, textStyles } from '../../../utils';
import { MOBILE_X_PAD } from '../constants';

const TW = colors.tulsiWings;

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  isFirst: boolean;
  variant: 'mobile' | 'desktop';
  onToggle: () => void;
};

const FaqToggleIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <span className="relative flex size-8 shrink-0 items-center justify-center">
    <Plus
      size={32}
      strokeWidth={1.5}
      className={`text-black transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
      aria-hidden
    />
  </span>
);

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  isFirst,
  variant,
  onToggle,
}) => {
  const isMobile = variant === 'mobile';

  const itemPadding = isMobile
    ? isFirst
      ? 'p-4'
      : 'px-4 pb-5 pt-8'
    : isFirst
      ? 'px-6 py-4'
      : 'p-6';

  return (
    <div
      className={`w-full border-b ${itemPadding}`}
      style={{ borderColor: TW.faqBorder }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-8 text-left outline-none"
        aria-expanded={isOpen}
      >
        <span
          className={`min-w-0 flex-1 font-medium text-black ${
            isMobile ? 'text-lg leading-normal' : 'text-2xl leading-normal'
          }`}
          style={{ fontFamily: fonts.body }}
        >
          {question}
        </span>
        <FaqToggleIcon isOpen={isOpen} />
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p
          className={`pt-4 leading-7 ${isMobile ? 'text-sm' : 'text-lg'}`}
          style={{ fontFamily: fonts.body, color: colors.tulsiWings.darkGrayText }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

const FaqHeader: React.FC<{ variant: 'mobile' | 'desktop' }> = ({ variant }) => {
  const t = strings.tulsiWings.faqs;
  const isMobile = variant === 'mobile';
  const tagType = pickTextStyle(textStyles.sectionTag, isMobile);
  const titleType = pickTextStyle(textStyles.sectionTitle, isMobile);

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <span
        className="text-center uppercase"
        style={{ fontFamily: fonts.body, color: colors.destinationTag, ...tagType }}
      >
        {t.tagline}
      </span>
      <h2
        className="text-center"
        style={{ fontFamily: fonts.heading, color: TW.sectionHeading, ...titleType }}
      >
        {t.titleLine1}
        <br />
        {t.titleLine2}
      </h2>
    </div>
  );
};

export const TulsiFaqs: React.FC = () => {
  const t = strings.tulsiWings.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="w-full"
      style={{ backgroundColor: TW.bgCream }}
    >
      {/* Mobile — Figma 3329:715 */}
      <div className={`w-full pb-10 pt-[65px] lg:hidden ${MOBILE_X_PAD}`}>
        <div className="flex w-full flex-col gap-10">
          <FaqHeader variant="mobile" />
          <div className="flex w-full flex-col">
            {t.list.map((faq, index) => (
              <FaqItem
                key={faq.q}
                variant="mobile"
                question={faq.q}
                answer={faq.a}
                isFirst={index === 0}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop — Figma 3326:34 (within page frame 3323:2) */}
      <div className="hidden justify-center py-[90px] lg:flex">
        <div className="flex w-full max-w-[1512px] flex-col items-center gap-14">
          <FaqHeader variant="desktop" />
          <div className="w-full max-w-[720px]">
            {t.list.map((faq, index) => (
              <FaqItem
                key={faq.q}
                variant="desktop"
                question={faq.q}
                answer={faq.a}
                isFirst={index === 0}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TulsiFaqs;
