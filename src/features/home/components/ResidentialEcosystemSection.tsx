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
    { id: 'quality', label: strings.ecosystem.features[0].label, icon: <Eye size={40} style={{ color: colors.accent }} /> },
    { id: 'maintenance', label: strings.ecosystem.features[1].label, icon: <Wrench size={40} style={{ color: colors.primary }} /> },
    { id: 'construction', label: strings.ecosystem.features[2].label, icon: <History size={40} style={{ color: colors.secondary }} /> },
    { id: 'living', label: strings.ecosystem.features[3].label, icon: <Accessibility size={40} style={{ color: colors.accent }} /> },
    { id: 'services', label: strings.ecosystem.features[4].label, icon: <Siren size={40} style={{ color: colors.primary }} /> },
    { id: 'community', label: strings.ecosystem.features[5].label, icon: <Users size={40} style={{ color: colors.secondary }} /> },
    { id: 'security', label: strings.ecosystem.features[6].label, icon: <ShieldCheck size={40} style={{ color: colors.accent }} /> },
    { id: 'elders', label: strings.ecosystem.features[7].label, icon: <UserRound size={40} style={{ color: colors.primary }} /> },
  ];

  return (
    // Developer note: Figma node 705:445 — auto-scroll row pauses on hover
    <section
      className="w-full py-20 md:py-32 flex flex-col items-center"
      style={{
        background: `linear-gradient(180deg, ${colors.surface} 0%, ${colors.ecosystem.bgEnd} 82.318%)`
      }}
    >
      {/* Heading Container */}
      <div className="max-w-[1240px] text-center mb-24 px-6">
        <p
          style={{ fontFamily: fonts.body, color: colors.secondary, letterSpacing: '-1.62px' }}
          className="text-[32px] md:text-[54px] font-semibold leading-[1.19] text-center"
        >
          {strings.ecosystem.titleStart}
          <br />
          {strings.ecosystem.titleMiddle}
        </p>
        <p
          style={{ fontFamily: fonts.body, color: colors.primary, letterSpacing: '-2.28px' }}
          className="text-[44px] md:text-[76px] font-semibold leading-[1.19] text-center mt-2"
        >
          {strings.ecosystem.titleEnd}
        </p>
      </div>

      {/* Features Row */}
      <div className="w-full overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes ecosystem-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `
          }}
        />
        <div className="relative w-full">
          <div className="flex w-max gap-[22px] px-4 md:px-16 animate-[ecosystem-marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
            {[...features, ...features].map((feature, idx) => (
              <div
                key={`${feature.id}-${idx}`}
                className="border flex items-center gap-[14px] pl-[8px] pr-[14px] py-[8px] bg-transparent"
                style={{ borderColor: colors.border.primary }}
              >
                <div className="bg-white size-[80px] flex items-center justify-center">
                  {feature.icon}
                </div>
                <div
                  className="text-[18px] font-normal leading-normal whitespace-normal max-w-[150px]"
                  style={{ fontFamily: fonts.body, color: colors.text.primary }}
                >
                  {feature.label}
                </div>
              </div>
            ))}
          </div>
          {/* Soft fade edges like Figma mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12" style={{ background: `linear-gradient(90deg, ${colors.surface} 0%, rgba(255,255,255,0) 100%)` }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12" style={{ background: `linear-gradient(270deg, ${colors.surface} 0%, rgba(255,255,255,0) 100%)` }} />
        </div>
      </div>
    </section>
  );
};

export default ResidentialEcosystemSection;
