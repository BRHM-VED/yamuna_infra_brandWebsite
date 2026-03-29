import React from 'react';
import { colors, textStyles } from '../../utils';

interface SectionHeadingProps {
  title: string;
  accentWord?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  accentWord,
  align = 'center',
  className = ''
}) => {
  return (
    <h2 className={`font-['Bitter:Regular',sans-serif] text-[44px] leading-[1.2] tracking-[-1.32px] text-center ${className}`}
      style={{
        fontFamily: textStyles.h2.fontFamily,
        color: colors.text.secondary,
        textAlign: align
      }}
    >
      {title}{' '}
      {accentWord && (
        <span
          className="font-['Bitter:Medium_Italic',sans-serif] italic"
          style={{ color: colors.primary }}
        >
          {accentWord}
        </span>
      )}
    </h2>
  );
};

export default SectionHeading;
