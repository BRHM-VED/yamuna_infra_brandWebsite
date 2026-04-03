import React from 'react';
import { colors, textStyles } from '../../utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, required = false, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-[14px] w-full ${className}`}>
      {label && (
        <label className="font-['Instrument_Sans:Regular',sans-serif] text-[16px] leading-[1.6]">
          <span style={{ color: colors.text.tertiary }}>{label}</span>
          {required && <span style={{ color: colors.primary }}>*</span>}
        </label>
      )}
      <input
        className="w-full bg-white px-[20px] transition-all duration-200 outline-none focus:border-opacity-100"
        style={{
          border: `1px solid ${colors.border.light}`,
          height: '54px',
          fontFamily: textStyles.bodyMedium.fontFamily,
          fontSize: textStyles.bodyMedium.fontSize,
          color: colors.text.primary,
        }}
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;
