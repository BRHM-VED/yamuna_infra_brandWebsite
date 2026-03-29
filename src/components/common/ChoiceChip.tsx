import React from 'react';
import { colors, textStyles } from '../../utils';

interface ChoiceChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

const ChoiceChip: React.FC<ChoiceChipProps> = ({ label, selected = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer px-[16px] py-[13px] bg-white transition-all duration-200 select-none text-center"
      style={{
        border: `1px solid ${selected ? colors.accent : colors.border.accent}`,
        color: selected ? colors.accent : colors.text.tertiary,
        fontFamily: textStyles.bodyLarge.fontFamily,
        fontSize: textStyles.bodyLarge.fontSize,
        fontWeight: textStyles.bodyLarge.fontWeight,
      }}
    >
      {label}
    </div>
  );
};

export default ChoiceChip;
