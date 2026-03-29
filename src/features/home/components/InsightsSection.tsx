import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InsightsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Left: Branding & CTA */}
        <div className="lg:w-[513px]">
          <h2
            className="text-[44px] md:text-[54px] leading-[1.19] mb-8 tracking-[-1.62px]"
            style={{ fontFamily: fonts.heading, color: colors.secondary }}
          >
            Understanding <br />
            <span className="italic font-medium">Vrindavan</span> Real Estate
          </h2>
          <p
            className="text-[18px] md:text-[22px] leading-[1.4] mb-12"
            style={{ fontFamily: fonts.body, color: colors.secondary }}
          >
            {strings.insights.subtitle}
          </p>

          <button
            className="inline-flex items-center gap-4 bg-[#F7DFCA] px-8 py-5 h-[63px] min-w-[229px] justify-center text-[18px] rounded-[1px] group hover:bg-[#ebd0b7] transition-all"
          >
            <span className="font-normal" style={{ fontFamily: fonts.body, color: colors.secondary }}>
              {strings.insights.cta}
            </span>
            <ArrowRight size={20} className="text-secondary group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Insight Cards */}
        <div className="flex-1 flex flex-col gap-3 lg:w-[800px]">
          {strings.insights.articles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate('/blog')}
              className="group flex flex-col justify-center min-h-[120px] px-[31.5px] py-6 border border-[#D5D5D5] rounded-[1px] hover:border-[#8D531E]/30 hover:shadow-lg transition-all cursor-pointer relative"
            >
              <div className="flex-1 pr-16">
                <h3
                  className="text-[24px] md:text-[28px] leading-[1.19] tracking-[-0.84px] mb-3 transition-colors group-hover:text-primary"
                  style={{ fontFamily: fonts.heading, color: '#003171' }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-[14px] md:text-[18px] leading-[1.4] tracking-[-0.54px]"
                  style={{ fontFamily: fonts.body, color: colors.secondary }}
                >
                  {article.subtitle}
                </p>
              </div>

              {/* Arrow Positional Alignment from Node 705:212 */}
              <div className="absolute top-[27.6px] right-[21.5px] w-7 h-7 flex items-center justify-center text-[#D5D5D5] group-hover:text-accent group-hover:scale-110 transition-all">
                <ArrowUpRight size={28} strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
