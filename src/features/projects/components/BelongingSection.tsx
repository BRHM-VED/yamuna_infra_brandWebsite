import React from 'react';
import { fonts } from '../../../utils';

export type BelongingSectionProps = {
  /** Small title above the main heading (e.g. "VRINDA APARTMENT"). */
  projectTitle?: string;
  /** Line before the emphasized word (include trailing space if needed). */
  headingBefore: string;
  /** Single emphasized word/phrase — same brown italic styling as before. */
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
    <section className="bg-white pt-[59px] pb-[80px] md:pb-[110px] px-4 md:px-[40px] text-center">
      <div className="max-w-[1070px] mx-auto flex flex-col gap-[24px] md:gap-[28px] items-center">
        {projectTitle ? (
          <p
            className="text-[14px] md:text-[24px] font-bold  text-[#8D531E] text-center"
            style={{ fontFamily: fonts.body, letterSpacing: '0.28em' }}
          >
            {projectTitle}
          </p>
        ) : null}

        <h2
          className="text-[32px] md:text-[54px] font-medium leading-[1.3] md:leading-[1.19] tracking-[-0.96px] md:tracking-[-1.08px] text-[#5A5550] max-w-[980px]"
          style={{ fontFamily: fonts.heading }}
        >
          {headingBefore}
          <span className="italic font-medium text-[#8D531E]">{headingEmphasis}</span>
        </h2>

        <p
          className="text-[14px] md:text-[28px] leading-[1.55] text-black/80 max-w-[980px]"
          style={{ fontFamily: fonts.body }}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default BelongingSection;
