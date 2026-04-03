import React from 'react';
import { colors, fonts } from '../../../utils';

export type BelongingSectionProps = {
  /** Line before the emphasized word (include trailing space if needed). */
  headingBefore: string;
  /** Single emphasized word/phrase — same brown italic styling as before. */
  headingEmphasis: string;
  description: string;
  /** Full address shown under the description with an “Address” label. */
  contentAddress: string;
};

const BelongingSection: React.FC<BelongingSectionProps> = ({
  headingBefore,
  headingEmphasis,
  description,
  contentAddress,
}) => {
  return (
    <section className="bg-white pt-[59px] pb-[137px] px-4 md:px-[40px] text-left">
      <div className="max-w-[1070px] mx-auto flex flex-col gap-[32px] items-start">
        <h2
          className="text-[32px] md:text-[54px] font-medium leading-[1.3] md:leading-[1.19] tracking-[-0.96px] md:tracking-[-1.08px] text-[#5A5550]"
          style={{ fontFamily: fonts.heading }}
        >
          {headingBefore}
          <span className="italic font-medium text-[#8D531E]">{headingEmphasis}</span>
        </h2>

        <p
          className="text-[14px] md:text-[28px] leading-[1.5] text-black opacity-80"
          style={{ fontFamily: fonts.body }}
        >
          {description}
        </p>

        <div className="flex flex-col gap-3 w-full">
          <p
            className="text-[14px] md:text-[18px] font-semibold leading-[1.4]"
            style={{ fontFamily: fonts.body, color: colors.text.primary }}
          >
            Address
          </p>
          <p
            className="text-[14px] md:text-[28px] leading-[1.5] text-black opacity-80"
            style={{ fontFamily: fonts.body }}
          >
            {contentAddress}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BelongingSection;
