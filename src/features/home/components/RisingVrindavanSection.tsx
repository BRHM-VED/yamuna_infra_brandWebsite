import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RisingVrindavanSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full relative px-4 md:px-16 py-12 md:py-20 mb-20 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row overflow-hidden rounded-[1px] shadow-[0_10px_60px_rgba(0,0,0,0.05)] h-auto min-h-[480px]">

        {/* Left Block (Cream Side) */}
        <div className="flex-[0.8] p-10 md:p-14 bg-[#FDF7ED] flex flex-col justify-between">
          <div>
            <h2
              className="text-[42px] md:text-[52px] font-normal leading-[1.05]"
              style={{ fontFamily: fonts.heading, color: '#1B1B1B' }}
            >
              The <span className="italic" style={{ color: colors.primary }}>Rising</span> Vrindavan
            </h2>
            <p
              className="text-[14px] md:text-[16px] text-[#5A5550] mt-4 opacity-80"
              style={{ fontFamily: fonts.body }}
            >
              {strings.rising.subtitle}
            </p>
          </div>

          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-3 bg-[#003171] text-white px-6 py-4 rounded-[1px] w-fit hover:bg-[#002555] transition-all group mt-10 md:mt-16"
            style={{ fontFamily: fonts.body, fontSize: '14px', fontWeight: 500 }}
          >
            {strings.rising.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Block (Dark Blue Side with Stats) */}
        <div className="flex-1 p-10 md:p-14 bg-[#001737] relative flex flex-col justify-end overflow-hidden pb-12 md:pb-16">

          {/* Decorative Waves/Paths Background (Accurate to Figma) */}
          <div className="absolute top-[-50px] right-0 w-full h-full opacity-60 select-none pointer-events-none">
            <svg width="100%" height="150%" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 400C200 400 600 200 1000 50" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              <path d="M0 400C250 400 450 100 1000 20" stroke="white" strokeWidth="1.5" opacity="0.8" />
              <path d="M0 400C300 400 700 300 1000 150" stroke="#4F7942" strokeWidth="2" opacity="0.6" />
              <path d="M0 400C350 400 750 250 1000 100" stroke="#0E57B7" strokeWidth="1.5" opacity="0.5" />
              <path d="M0 400C400 400 800 350 1000 200" stroke="#D6BFAB" strokeWidth="3" opacity="0.7" />
              <circle cx="10" cy="400" r="5" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
            {strings.rising.stats.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex flex-col gap-3 px-6 md:px-10 ${idx !== 2 ? 'md:border-r border-white/10' : ''} ${idx === 0 ? 'pl-0' : ''}`}
              >
                <span
                  className="text-[38px] md:text-[52px] font-normal text-white leading-none"
                  style={{ fontFamily: fonts.heading }}
                >
                  {stat.value}
                </span>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[11px] md:text-[13px] text-gray-300 font-normal opacity-80"
                    style={{ fontFamily: fonts.body }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-[11px] md:text-[13px] text-gray-300 font-bold"
                    style={{ fontFamily: fonts.body }}
                  >
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RisingVrindavanSection;
