import React from 'react';
import { fonts } from '../../../utils';

export type BelongingSectionProps = {
  description: string;
};

const BelongingSection: React.FC<BelongingSectionProps> = ({ description }) => {
  return (
    <section className="bg-white pt-[59px] pb-[137px] px-4 md:px-[40px] text-center">
      <div className="max-w-[1070px] mx-auto flex flex-col gap-[32px] items-center">
        <h2
          className="text-[32px] md:text-[54px] font-medium leading-[1.3] md:leading-[1.19] tracking-[-0.96px] md:tracking-[-1.08px] text-[#5A5550]"
          style={{ fontFamily: fonts.heading }}
        >
          Where every step feels like <span className="italic font-medium text-[#8D531E]">belonging</span>
        </h2>

        <p
          className="text-[14px] md:text-[28px] leading-[1.5] text-black opacity-80"
          style={{ fontFamily: fonts.body }}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default BelongingSection;
