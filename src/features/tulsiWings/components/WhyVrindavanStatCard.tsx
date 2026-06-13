import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { colors, fonts, pickTextStyle, textStyles } from '../../../utils';

const tw = colors.tulsiWings;
const bodyColor = colors.text.primary;

export type WhyVrindavanStatCardVariant = 'desktop' | 'mobile';

export type WhyVrindavanStatCardProps = {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
  variant: WhyVrindavanStatCardVariant;
  valueParts?: [string, string];
  className?: string;
};

export const WhyVrindavanStatCard: React.FC<WhyVrindavanStatCardProps> = ({
  icon: Icon,
  value,
  title,
  description,
  variant,
  valueParts,
  className,
}) => {
  const isMobile = variant === 'mobile';
  const valueBold = pickTextStyle(textStyles.statValueBold, isMobile);
  const valueRegular = pickTextStyle(textStyles.statValueRegular, isMobile);
  const titleType = pickTextStyle(textStyles.statCardTitle, isMobile);
  const descType = pickTextStyle(textStyles.statCardDescription, isMobile);

  return (
    <div
      className={`box-border flex flex-col items-start outline-1 -outline-offset-1 ${
        isMobile ? 'w-full gap-4 p-6' : 'h-full w-[349px] gap-4 p-6'
      } ${className ?? ''}`}
      style={{
        backgroundColor: tw.statCardBg,
        outlineColor: tw.statCardBorder,
      }}
    >
      <Icon
        className="size-[50px] shrink-0"
        strokeWidth={1.25}
        style={{ color: tw.darkBlue, opacity: 0.6 }}
        aria-hidden
      />
      <p className="m-0 w-full" style={{ fontFamily: fonts.body, color: bodyColor }}>
        {valueParts ? (
          <>
            <span style={valueBold}>{valueParts[0]}</span>
            <span style={valueRegular}>{valueParts[1]}</span>
          </>
        ) : (
          <span style={valueBold}>{value}</span>
        )}
      </p>
      <div className="flex w-full flex-col gap-2" style={{ color: bodyColor }}>
        <p className="m-0" style={{ fontFamily: fonts.heading, ...titleType }}>
          {title}
        </p>
        <p className="m-0" style={{ fontFamily: fonts.body, ...descType }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyVrindavanStatCard;
