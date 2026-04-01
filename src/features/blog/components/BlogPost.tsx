import React from 'react';
import { ArrowRight, Share } from 'lucide-react';
import { fonts } from '../../../utils/typography';

const BlogPost: React.FC = () => {
  return (
    <section className="pt-24 pb-20 px-4 md:px-0 bg-white">
      <div className="max-w-[854px] mx-auto flex flex-col gap-9 md:gap-[37px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-6 md:gap-[37px] text-center w-full animate-in fade-in slide-in-from-top-4 duration-700">
          <h1
            className="text-[32px] md:text-[38px] leading-[1.3] text-secondary tracking-[-0.76px]"
            style={{ fontFamily: fonts.heading }}
          >
            Why Documentation Matters When Buying Property in Vrindavan
          </h1>

          <p
            className="text-[14px] md:text-[24px] leading-[1.5] text-black/60 md:text-black"
            style={{ fontFamily: fonts.body }}
          >
            Many properties in Vrindavan lack verified approvals, and overlooking documentation can lead to serious legal and financial risks. Understanding the basics helps buyers make safer, more confident decisions.
          </p>
        </div>

        {/* Main Image */}
        <div
          className="w-full h-[243px] md:h-[427px] bg-[#e3e3e3] overflow-hidden rounded-sm animate-in fade-in zoom-in-95 duration-1000"
        >
          <img
            src="/assets/blogs/vrindavanProperties.svg"
            alt="Vrindavan Temple Documentation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="w-full text-left flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ fontFamily: fonts.body }}
        >
          <div className="text-[16px] md:text-[20px] leading-[1.6] text-black/80 space-y-6">
            <p>
              Vrindavan has rapidly grown into a preferred destination for both living and investment. With this growth, a large number of residential projects have entered the market. While options have increased, so have the risks—especially for buyers who do not pay attention to property documentation.
            </p>

            <p>
              When purchasing a property, most people focus on visible factors like price, location, and amenities. However, the true security of your investment lies in the legal validity of the property. Many developments may appear attractive but may lack proper approvals or clear ownership records, which can create problems in the future.
            </p>

            <p>
              One of the most important aspects is ensuring that the land has a clear title. This confirms that the developer or seller has the legal right to sell the property. Without this, buyers may face ownership disputes later. Similarly, approvals from local authorities and proper land use permissions are essential to ensure that the property is legally designated for residential purposes.
            </p>

            <p>
              Another key factor is project registration and compliance with regulatory guidelines. Verified and registered projects offer greater transparency and reduce the chances of delays or legal complications. Proper sale agreements and registration documents also play a critical role in officially transferring ownership and protecting buyer rights.
            </p>

            <p>
              Ignoring these aspects can lead to issues such as project delays, difficulty in resale, challenges in obtaining loans, or even legal notices. On the other hand, a property backed by complete and verified documentation provides confidence, stability, and long-term value.
            </p>

            <p>
              For buyers, especially those investing in Vrindavan for the first time, taking the time to understand and verify documentation is not just a precaution—it is a necessity. A well-documented property ensures that your investment remains secure and your future remains worry-free.
            </p>
          </div>
        </div>
      </div>

      {/* Actions (full-width with page padding like Figma) */}
      <div className="w-full mt-10 md:mt-11 px-[15px] md:px-[50px] flex items-center justify-between">
        <button className="flex items-center justify-center gap-[10px] bg-[#F7DFCA] px-[26px] py-[22px] h-[63px] group">
          <span className="text-[18px] font-normal leading-[1.19] text-black whitespace-nowrap" style={{ fontFamily: fonts.body }}>
            Explore all blogs
          </span>
          <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="flex items-center justify-center gap-[10px] border border-[#F7DFCA] bg-white px-[26px] py-[22px] h-[63px] group">
          <span className="text-[18px] font-normal leading-[1.19] text-black whitespace-nowrap" style={{ fontFamily: fonts.body }}>
            Share
          </span>
          <Share size={18} className="text-black" />
        </button>
      </div>
    </section>
  );
};

export default BlogPost;
