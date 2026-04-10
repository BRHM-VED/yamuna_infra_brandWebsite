import React from 'react';
import { colors, fonts } from '../../../utils';

export type LegalDocumentHeaderProps = {
  title: string;
  /** Shown after "Last Updated: " */
  lastUpdated: string;
};

const LegalDocumentHeader: React.FC<LegalDocumentHeaderProps> = ({ title, lastUpdated }) => (
  <div className="pt-10 md:pt-16 pb-6 md:pb-10">
    <div className="flex flex-col items-start gap-[6px]">
      <p
        className="text-[12px] md:text-[14px] font-medium tracking-[4.44px] uppercase"
        style={{ fontFamily: fonts.body, color: colors.destinationTag }}
      >
        LEGAL
      </p>
      <div className="h-[2.5px] w-[25.5px] opacity-60" style={{ backgroundColor: colors.primary }} />
    </div>

    <h1
      className="mt-3 text-[32px] md:text-[56px] leading-[1.1] tracking-[-0.96px] md:tracking-[-1.68px]"
      style={{ fontFamily: fonts.heading, color: colors.text.primary }}
    >
      {title}
    </h1>

    <p
      className="mt-4 text-[14px] md:text-[18px] leading-[1.7] opacity-80"
      style={{ fontFamily: fonts.body, color: colors.text.secondary }}
    >
      Last Updated: {lastUpdated}
    </p>
  </div>
);

export default LegalDocumentHeader;
