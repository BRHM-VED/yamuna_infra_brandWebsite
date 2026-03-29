import React from 'react';
import { colors, fonts, strings } from '../../../utils';
const anitaImg = '/assets/images/Cultural.svg'; // Placeholder image

interface TestimonialData {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

const TestimonialCard: React.FC<{ data: TestimonialData }> = ({ data }) => {
  return (
    <div
      className="flex-shrink-0 w-full md:w-[1114px] bg-white rounded-[1.54px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col md:flex-row overflow-hidden relative"
      style={{ minHeight: '417px' }}
    >
      {/* Quote Icon */}
      <div className="absolute top-8 left-8 w-[98px] h-[78px] opacity-10 select-none pointer-events-none overflow-hidden">
        <svg viewBox="0 0 98 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M41.8 77.1H0L16.2 0H52.9L41.8 77.1ZM86.9 77.1H45.1L61.3 0H98L86.9 77.1Z" fill="#D9D9D9" />
        </svg>
      </div>

      <div className="flex-1 px-8 md:pl-[120px] md:pr-12 md:py-20 flex flex-col justify-center gap-10 relative z-10">
        <p
          className="text-[20px] md:text-[24px] font-normal"
          style={{
            fontFamily: fonts.heading,
            color: '#1B1B1B',
            lineHeight: '1.4',
            letterSpacing: '-0.72px'
          }}
        >
          {data.quote}
        </p>

        <div className="flex flex-col gap-1">
          <span
            className="text-[20px] md:text-[22px] font-normal"
            style={{
              fontFamily: fonts.heading,
              color: '#8D531E'
            }}
          >
            {data.author}
          </span>
          <span
            className="text-[14px] md:text-[16px] font-normal opacity-80"
            style={{
              fontFamily: fonts.body,
              color: '#5A5550'
            }}
          >
            {data.location}
          </span>
        </div>
      </div>

      <div className="w-full md:w-[463px] min-h-[300px] md:min-h-full relative overflow-hidden">
        <img
          src={data.image || anitaImg}
          alt={data.author}
          className="w-full h-full object-cover"
        />
        {/* Modern Curved Background Overlay behind the person */}
        <div
          className="absolute -bottom-10 -left-20 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ backgroundColor: colors.primary, transform: 'rotate(-15deg)' }}
        />
      </div>
    </div>
  );
};

const DesignConstructionSection: React.FC = () => {
  return (
    <section className="w-full relative bg-white pb-32">

      {/* Testimonials Block (Slider) - Positioned with reduced negative offset for more breathable spacing */}
      <div className="relative -top-8 md:-top-16 w-full">
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex flex-nowrap gap-8 px-4 md:px-16 pb-12">
            {strings.testimonials.map((item, idx) => (
              <TestimonialCard key={idx} data={item} />
            ))}
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="flex justify-center gap-6 mt-4">
          <button className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full bg-[#E8E8E8] flex items-center justify-center hover:bg-gray-300 transition-all text-[#1B1B1B]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full bg-[#E8E8E8] flex items-center justify-center hover:bg-gray-300 transition-all text-[#1B1B1B]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Design & Construction Block */}
      <div className="max-w-[1440px] mx-auto text-center px-4 mt-12 md:mt-16">
        <h2
          className="text-[36px] md:text-[64px] font-normal leading-tight mb-16"
          style={{ fontFamily: fonts.heading, color: colors.secondary }}
        >
          {strings.construction.titleStart} <span style={{ color: colors.primary }}>{strings.construction.titleEnd}</span>
        </h2>

        {/* Verified Standards Container */}
        <div
          className="relative bg-[#F4F4F4] rounded-[1.54px] p-12 md:px-24 md:py-32 overflow-hidden mx-4 md:mx-16"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #E8E8E8 1px, transparent 0)', backgroundSize: '32px 32px' }}
        >
          {/* Background Watermark Text - Fixed Position to Bottom Left */}
          <div
            className="absolute bottom-[-20px] left-0 md:left-4 select-none pointer-events-none"
            style={{
              fontFamily: fonts.body,
              fontSize: '98.5px',
              fontWeight: '700',
              color: '#D9D9D9',
              opacity: '0.4',
              lineHeight: '1.19',
              whiteSpace: 'nowrap',
              letterSpacing: '-2.956px'
            }}
          >
            {strings.construction.bgText}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h3
              className="text-[28px] md:text-[48px] font-normal mb-4"
              style={{ fontFamily: fonts.heading, color: '#003171' }}
            >
              {strings.construction.boxTitle}
            </h3>
            <p
              className="text-[14px] md:text-[18px] text-[#666] mb-16 max-w-[600px]"
              style={{ fontFamily: fonts.body }}
            >
              {strings.construction.boxSubtitle}
            </p>

            {/* Workflow Steps */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-[1000px]">
              {strings.construction.steps.map((step, idx) => (
                <React.Fragment key={step.id}>
                  <div className="bg-white flex flex-col items-center justify-center p-8 w-full md:w-[240px] h-[180px] rounded-[1px] shadow-sm relative group hover:shadow-md transition-all">
                    <span className="absolute top-3 right-4 text-[32px] font-bold" style={{ color: colors.primary }}>
                      {step.id}
                    </span>
                    <div className="mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                      </svg>
                    </div>
                    <span
                      className="text-[12px] md:text-[14px] font-bold text-center leading-tight tracking-[0.1em]"
                      style={{ fontFamily: fonts.body, color: colors.secondary }}
                    >
                      {step.label}
                    </span>
                  </div>
                  {idx < strings.construction.steps.length - 1 && (
                    <div className="hidden md:block w-16 h-[1px]" style={{ background: 'linear-gradient(90deg, #D6BFAB, transparent)' }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignConstructionSection;
