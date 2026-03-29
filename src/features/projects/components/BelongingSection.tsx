import React from 'react';
import { fonts } from '../../../utils';

const BelongingSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="max-w-[1070px] mx-auto flex flex-col gap-8 md:gap-12 items-center">
        {/* Title Node 765:5404 / 640:1682 */}
        <h2
          className="text-[32px] md:text-[54px] leading-[1.3] md:leading-[1.19] tracking-[-0.96px] md:tracking-[-1.08px] text-[#5A5550]"
          style={{ fontFamily: fonts.heading }}
        >
          Where every step feels like <span className="italic font-medium text-[#8D531E]">belonging</span>
        </h2>

        {/* Subtitle Node 765:5405 / 640:1681 */}
        <p
          className="text-[14px] md:text-[28px] leading-[1.5] text-black opacity-80"
          style={{ fontFamily: fonts.body }}
        >
          Premium 1 BHK Living Spaces in Vrindavan. Experience the perfect blend of comfort, elegance, and devotion with our thoughtfully designed 1 BHK residences in the heart of Vrindavan. Each home is crafted to offer modern amenities while keeping you connected to the spiritual essence of the city.
        </p>
      </div>
    </section>
  );
};

export default BelongingSection;
