import React from 'react';
import { colors, fonts, strings } from '../../utils';

/**
 * “New project launched” + Yamuna City chip — shared by hero (mobile top bar + desktop inline).
 */
const NewProjectBanner: React.FC = () => {
  return (
    <div
      className="flex w-full flex-row items-center justify-between gap-2 px-4 py-2.5 md:w-fit md:justify-center md:gap-[10px] md:px-1.5 md:py-1.5"
      style={{ backgroundColor: colors.status.new }}
    >
      <span
        style={{ fontFamily: fonts.body }}
        className="min-w-0 text-left text-[14px] font-normal text-black md:pl-3 md:text-[16px]"
      >
        {strings.hero.newProject}
      </span>
      <div
        className="flex shrink-0 items-center gap-1.5 bg-white px-3 py-1.5 shadow-sm md:px-[16px] md:py-[6px]"
        style={{
          fontFamily: fonts.body,
          color: colors.text.primary,
          fontSize: '14px',
          fontWeight: 400,
        }}
      >
        {strings.hero.projectName}
        <span className="text-[14px]">→</span>
      </div>
    </div>
  );
};

export default NewProjectBanner;
