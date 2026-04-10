import React from 'react';
import { fonts } from '../../../utils';

export type BelongingSectionProps = {
  /** Small title above the main heading (e.g. "VRINDA APARTMENT"). */
  projectTitle?: string;
  /** Line before the emphasized word (include trailing space if needed). */
  headingBefore: string;
  /** Single emphasized word/phrase — italic only; same color as the rest of the heading. */
  headingEmphasis: string;
  description: string;
};

const BelongingSection: React.FC<BelongingSectionProps> = ({
  projectTitle,
  headingBefore,
  headingEmphasis,
  description,
}) => {
  return (
    <section className="bg-white pt-[59px] pb-[80px] md:pb-[110px] px-4 md:px-[40px]">
      <div className="max-w-[1070px] mx-auto flex flex-col gap-[24px] md:gap-[28px] items-stretch md:items-start">
        {projectTitle ? (
          <p
            className="w-full text-center md:text-left text-[14px] md:text-[24px] font-bold text-[#8D531E]"
            style={{ fontFamily: fonts.body, letterSpacing: '0.28em' }}
          >
            {projectTitle}
          </p>
        ) : null}

        <h2
          className="w-full text-left text-[32px] md:text-[54px] font-medium leading-[1.3] md:leading-[1.19] tracking-[-0.96px] md:tracking-[-1.08px] text-[#5A5550] max-w-[980px]"
          style={{ fontFamily: fonts.heading }}
        >
          {headingBefore}
          <span className="italic font-medium">{headingEmphasis}</span>
        </h2>

        <p
          className="w-full text-left text-[14px] md:text-[28px] leading-[1.55] text-black/80 max-w-[980px]"
          style={{ fontFamily: fonts.body }}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default BelongingSection;
