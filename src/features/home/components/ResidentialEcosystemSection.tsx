import React from 'react';
import { colors, fonts, strings } from '../../../utils';

import {
  Eye,
  Wrench,
  History,
  Accessibility,
  Siren,
  Users,
  ShieldCheck,
  UserRound
} from 'lucide-react';

const ResidentialEcosystemSection: React.FC = () => {
  const features = [
    { id: 'quality', label: strings.ecosystem.features[0].label, icon: <Eye size={28} className="text-[#003171]" /> },
    { id: 'maintenance', label: strings.ecosystem.features[1].label, icon: <Wrench size={28} className="text-[#8D531E]" /> },
    { id: 'construction', label: strings.ecosystem.features[2].label, icon: <History size={28} className="text-[#4F7942]" /> },
    { id: 'living', label: strings.ecosystem.features[3].label, icon: <Accessibility size={28} className="text-[#003171]" /> },
    { id: 'services', label: strings.ecosystem.features[4].label, icon: <Siren size={28} className="text-[#8D531E]" /> },
    { id: 'community', label: strings.ecosystem.features[5].label, icon: <Users size={28} className="text-[#4F7942]" /> },
    { id: 'security', label: strings.ecosystem.features[6].label, icon: <ShieldCheck size={28} className="text-[#003171]" /> },
    { id: 'elders', label: strings.ecosystem.features[7].label, icon: <UserRound size={28} className="text-[#8D531E]" /> },
  ];

  return (
    <section
      className="w-full py-20 md:py-32 flex flex-col items-center"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7DFCA 100%)'
      }}
    >
      {/* Heading Container */}
      <div className="max-w-[1240px] text-center mb-16 px-6">
        <h2
          className="text-[36px] md:text-[64px] font-normal leading-[1.15] tracking-tight"
          style={{ fontFamily: fonts.heading, color: colors.secondary }}
        >
          {strings.ecosystem.titleStart} <br className="hidden md:block" />
          {strings.ecosystem.titleMiddle} <br className="hidden md:block" />
          <span style={{ color: colors.primary }}>{strings.ecosystem.titleEnd}</span>
        </h2>
      </div>

      {/* Features Row */}
      <div className="w-full overflow-x-auto overflow-y-hidden pb-8 no-scrollbar">
        <style dangerouslySetInnerHTML={{ __html: '.no-scrollbar::-webkit-scrollbar { display: none; }' }} />
        <div className="flex flex-nowrap gap-4 px-4 md:px-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 px-4 py-8 rounded-[1.54px] border transition-all hover:bg-white/50 min-w-[280px] md:min-w-[340px] h-[112px]"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                borderColor: 'rgba(141, 83, 30, 0.1)'
              }}
            >
              <div className="flex-shrink-0 w-[64px] h-[64px] bg-white flex items-center justify-center rounded-[1px] shadow-sm">
                {feature.icon}
              </div>
              <span
                className="text-[14px] md:text-[16px] font-medium leading-[1.4]"
                style={{ fontFamily: fonts.body, color: colors.secondary }}
              >
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialEcosystemSection;
