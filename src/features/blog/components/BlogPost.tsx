import React from 'react';
import { ArrowRight, Share } from 'lucide-react';
import { colors, fonts } from '../../../utils';

const BlogPost: React.FC = () => {
  return (
    <section className="bg-white pb-20 pl-4 pr-4 pt-4 md:px-0 md:pb-20 md:pt-24">
      <div className="mx-auto flex w-full max-w-[854px] flex-col items-center gap-[21px] md:gap-[37px]">
        {/* Title + lead — Figma 1026:883: w 328, gap 24 */}
        <div className="mx-auto flex w-full max-w-[328px] flex-col gap-6 text-left md:max-w-none md:gap-[37px] md:text-center">
          <h1
            className="text-[32px] font-normal leading-[1.4] tracking-[-0.96px] md:text-[38px] md:leading-[1.3] md:tracking-[-0.76px]"
            style={{ fontFamily: fonts.heading, color: colors.text.secondary }}
          >
            Why Documentation Matters When Buying Property in Vrindavan
          </h1>

          <p
            className="text-[14px] leading-normal text-black/60 md:text-[24px] md:leading-normal md:text-black"
            style={{ fontFamily: fonts.body }}
          >
            Many properties in Vrindavan lack verified approvals, and overlooking documentation can lead to serious legal and financial risks. Understanding the basics helps buyers make safer, more confident decisions.
          </p>
        </div>

        {/* Hero image — Figma: h 243, bg #e3e3e3 */}
        <div className="h-[243px] w-full overflow-hidden rounded-sm bg-[#e3e3e3] md:h-[427px]">
          <img
            src="/assets/blogs/vrindavanProperties.webp"
            alt="Vrindavan Temple Documentation"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Body — Figma: w 326, 16px / 1.6 / 80% */}
        <div className="mx-auto w-full max-w-[326px] text-left md:max-w-none" style={{ fontFamily: fonts.body }}>
          <div className="space-y-6 text-[16px] font-normal leading-[1.6] text-black/80 md:text-[20px] md:leading-[1.6]">
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

      {/* Actions — mobile: square Share + full-width Explore (54px) */}
      <div className="mt-10 flex w-full flex-row flex-nowrap items-center gap-[8px] px-0 md:mt-11 md:justify-between md:gap-0 md:px-[50px]">
        <button
          type="button"
          className="order-1 flex size-[56px] shrink-0 items-center justify-center border border-solid p-0 md:order-2 md:size-auto md:h-[64px] md:gap-[10px] md:px-[26px] md:py-[22px]"
          style={{
            borderColor: colors.tertiary,
            backgroundColor: colors.surface,
          }}
        >
          <Share size={22} className="text-black" aria-hidden />
          <span className="hidden whitespace-nowrap text-[18px] font-normal leading-[1.19] text-black md:inline" style={{ fontFamily: fonts.body }}>
            Share
          </span>
        </button>

        <button
          type="button"
          className="order-2 flex h-[56px] md:h-[64px] min-w-0 flex-1 items-center justify-center gap-[10px] px-[26px] py-0 transition-opacity group hover:opacity-90 md:order-1 md:w-auto md:flex-none md:min-w-0 md:py-[22px]"
          style={{ backgroundColor: colors.tertiary }}
        >
          <span
            className="whitespace-nowrap text-[14px] font-normal leading-[1.19] text-black md:text-[18px]"
            style={{ fontFamily: fonts.body }}
          >
            Explore all blogs
          </span>
          <ArrowRight size={18} className="text-black transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default BlogPost;
