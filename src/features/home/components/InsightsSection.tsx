import React from 'react';
// import { Link } from 'react-router-dom';
import { colors, fonts, strings } from '../../../utils';
import { ArrowUpRight } from 'lucide-react';
// import { ArrowRight, ArrowUpRight } from 'lucide-react';

const InsightsSection: React.FC = () => {
  return (
    <section id="knowledge" className="bg-white py-20 md:py-32">
      <div className="max-w-full mx-auto px-4 md:px-[50px] flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32">
        {/* Left: Branding & CTA */}
        <div className="lg:w-[513px] text-center lg:text-left w-full overflow-hidden">
          <h2
            className="text-[28px] md:text-[54px] leading-[1.19] mb-4 md:mb-8 tracking-[-0.9px] md:tracking-[-1.62px]"
            style={{ fontFamily: fonts.heading, color: colors.secondary }}
          >
            {strings.insights.title.split('\n')[0]}
            <br />
            <span className="italic font-medium" style={{ color: colors.secondary }}>
              {strings.insights.title.split('\n')[1].split(' ')[0]}
            </span>{' '}
            {strings.insights.title.split('\n')[1].split(' ').slice(1).join(' ')}
          </h2>
          <p
            className="text-[14px] md:text-[22px] leading-[1.4] mb-10 md:mb-12 max-w-full md:max-w-[420px] mx-auto lg:mx-0 px-2 md:px-0"
            style={{ fontFamily: fonts.body, color: colors.secondary }}
          >
            {strings.insights.subtitle}
          </p>

          {/* Desktop CTA button — hidden for now
          <Link
            to="/blog"
            className="hidden lg:inline-flex items-center gap-4 px-8 h-[56px] md:h-[64px] min-w-[229px] justify-center text-[18px] rounded-[1px] group transition-all hover:opacity-90 no-underline"
            style={{ backgroundColor: colors.tertiary }}
          >
            <span className="font-normal" style={{ fontFamily: fonts.body, color: colors.secondary }}>
              {strings.insights.cta}
            </span>
            <ArrowRight size={20} className="text-secondary group-hover:translate-x-1 transition-transform" />
          </Link>
          */}
        </div>

        {/* Right: Insight Cards — no navigation, display only */}
        <div className="flex-1 flex flex-col gap-3 lg:w-[800px]">
          {strings.insights.articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col justify-center min-h-[98px] md:min-h-[120px] px-[14px] py-[18px] md:px-[31.5px] md:py-6 border rounded-[1px] relative"
              style={{ borderColor: '#D5D5D5' }}
            >
              <div className="flex-1 pr-10 md:pr-16">
                <h3
                  className="text-[16px] md:text-[28px] leading-[1.19] tracking-[-0.48px] md:tracking-[-0.84px] mb-3"
                  style={{ fontFamily: fonts.heading, color: colors.accent }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-[12px] md:text-[18px] leading-[1.4] tracking-[-0.36px] md:tracking-[-0.54px]"
                  style={{ fontFamily: fonts.body, color: colors.secondary }}
                >
                  {article.subtitle}
                </p>
              </div>

              {/* Arrow icon — decorative only, no link */}
              <div
                className="absolute top-[18px] right-[14px] md:top-[27.6px] md:right-[21.5px] flex items-center justify-center"
                style={{ color: '#D5D5D5' }}
              >
                <ArrowUpRight size={18} className="md:hidden" strokeWidth={1.5} />
                <ArrowUpRight size={28} className="hidden md:block" strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA button — hidden for now
        <div className="lg:hidden pt-4">
          <Link
            to="/blog"
            className="group flex h-[56px] md:h-[64px] w-full items-center justify-center gap-[10px] rounded-[1px] px-[26px] py-0 text-[16px] leading-[1.19] transition-all hover:opacity-90 no-underline md:gap-4 md:px-8 md:text-[18px]"
            style={{ backgroundColor: colors.tertiary }}
          >
            <span className="font-normal" style={{ fontFamily: fonts.body, color: colors.secondary }}>
              {strings.insights.cta}
            </span>
            <ArrowRight size={18} className="text-secondary group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        */}
      </div>
    </section>
  );
};

export default InsightsSection;
