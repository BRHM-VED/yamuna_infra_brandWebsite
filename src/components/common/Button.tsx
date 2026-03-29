import React from 'react';
import { colors, textStyles } from '../../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-200 outline-none select-none px-[26px] py-[22px] h-[63px]';
  const widthStyles = fullWidth ? 'w-full' : 'w-fit';

  const variants = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.text.onPrimary,
      fontFamily: textStyles.button.fontFamily,
      fontSize: textStyles.button.fontSize,
      fontWeight: textStyles.button.fontWeight,
    },
    accent: {
      backgroundColor: colors.accent,
      color: colors.text.onAccent,
      fontFamily: textStyles.button.fontFamily,
      fontSize: textStyles.button.fontSize,
      fontWeight: textStyles.button.fontWeight,
    },
    outline: {
      backgroundColor: 'transparent',
      border: `1px solid ${colors.status.new}`,
      color: 'black',
      fontFamily: textStyles.button.fontFamily,
      fontSize: textStyles.button.fontSize,
      fontWeight: textStyles.button.fontWeight,
    },
    ghost: {
      backgroundColor: colors.status.new,
      color: 'black',
      fontFamily: textStyles.button.fontFamily,
      fontSize: textStyles.button.fontSize,
      fontWeight: textStyles.button.fontWeight,
    }
  };

  const style = variants[variant];

  return (
    <button
      className={`${baseStyles} ${widthStyles} ${className} hover:opacity-90 active:scale-[0.98]`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
