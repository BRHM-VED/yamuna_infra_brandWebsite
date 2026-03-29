import React, { useRef } from 'react';
import { colors, fonts, strings } from '../../../utils';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const FounderValuesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Top Part: Founder Story */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center mb-32">
          {/* Left: Founder Text */}
          <div className="flex-1 order-2 md:order-1">
            <h2
              className="text-[48px] md:text-[64px] leading-tight mb-8"
              style={{ fontFamily: fonts.heading, color: colors.secondary }}
            >
              A Builder <br />
              From <span className="italic font-bold text-accent">Vrindavan</span>
            </h2>

            <div className="max-w-[500px] mb-12">
              <p
                className="text-[18px] md:text-[21px] leading-relaxed mb-8 opacity-80"
                style={{ fontFamily: fonts.body, color: colors.secondary }}
              >
                {strings.about.description}
              </p>
            </div>

            {/* Hear from the founder box */}
            <div
              className="inline-flex items-center gap-4 bg-[#F7DFCA] px-6 py-4 rounded-[1px] cursor-pointer hover:bg-[#ebd0b7] transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Play size={18} fill={colors.secondary} className="text-secondary ml-1" />
              </div>
              <span className="text-[16px] md:text-[18px] font-medium" style={{ fontFamily: fonts.body, color: colors.secondary }}>
                {strings.about.founderMessage}
              </span>
            </div>
          </div>

          {/* Right: Founder Image */}
          <div className="flex-1 order-1 md:order-2 relative">
            <div className="relative w-full max-w-[550px] aspect-square rounded-[1px] overflow-hidden group">
              {/* Circular Background Shape */}
              <div
                className="absolute -bottom-20 -left-10 w-[120%] h-[120%] rounded-full opacity-40 blur-3xl"
                style={{ backgroundColor: '#F7DFCA' }}
              />

              <img
                src="/assets/images/vrindavanBuilder.svg"
                alt="Founder of Sri Yamuna Infra"
                className="relative z-10 w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Decorative accent */}
              <div
                className="absolute top-10 right-10 w-32 h-32 rounded-full border border-accent/10 z-0 animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Bottom Part: Values Slider */}
        <div className="relative pt-20 border-t border-stone-100">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Values Heading */}
            <div className="lg:w-[450px] flex-shrink-0 pt-10">
              <div className="relative">
                <h3
                  className="text-[64px] md:text-[84px] font-bold leading-[0.9] mb-12 select-none"
                  style={{ fontFamily: fonts.heading, color: '#E5E5E5', opacity: 0.8 }}
                >
                  Values <br />
                  Proven <br />
                  Through
                </h3>
                <div className="absolute top-[140px] md:top-[180px] left-[10%] md:left-[20%] z-20">
                  <span
                    className="text-[54px] md:text-[96px] font-bold leading-none inline-block transform translate-y-4"
                    style={{
                      fontFamily: fonts.accent,
                      color: colors.accent,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  >
                    Action
                  </span>
                  {/* Scribble/Accent under the word Action */}
                  <div className="mt-[-15px] ml-4">
                    <svg width="225" height="24" viewBox="0 0 225 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] md:w-[220px]">
                      <path d="M4 18.5C38.5 12.5 142.5 6 221 21.5" stroke={colors.accent} strokeWidth="4" strokeLinecap="round" opacity="0.4" />
                    </svg>
                  </div>
                </div>
              </div>

              <p
                className="mt-32 text-[18px] text-[#5A5550] font-normal leading-relaxed max-w-[340px]"
                style={{ fontFamily: fonts.body }}
              >
                {strings.about.valuesSubtitle}
              </p>
            </div>

            {/* Values Slider Container */}
            <div className="flex-1 relative">
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                style={{ paddingBottom: '40px' }}
              >
                {strings.about.values.map((value, idx) => (
                  <div
                    key={value.id}
                    className="flex-shrink-0 w-[460px] md:w-[710px] h-[320px] md:h-[481px] p-8 md:p-12 flex flex-col justify-end snap-start rounded-[1px] hover:shadow-xl transition-shadow duration-500 relative"
                    style={{ backgroundColor: value.bgColor }}
                  >
                    <span
                      className="absolute top-12 left-12 text-[16px] md:text-[18px] font-normal tracking-[-0.54px] block text-black"
                      style={{ fontFamily: fonts.body }}
                    >
                      {value.title}
                    </span>
                    <p
                      className="text-[20px] md:text-[28px] leading-[1.4] font-normal tracking-[-0.84px] max-w-[630px]"
                      style={{
                        fontFamily: fonts.body,
                        color: idx === 0 ? '#75680D' : '#845E0F'
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => scroll('left')}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-stone-300 transition-all text-[#1B1B1B]"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-stone-300 transition-all text-[#1B1B1B]"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default FounderValuesSection;
