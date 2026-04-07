import React from 'react';

type ShimmerBoxProps = {
  className?: string;
};

/**
 * Lightweight shimmer placeholder for image containers.
 * Keep it generic so it can be reused across the app.
 */
const ShimmerBox: React.FC<ShimmerBoxProps> = ({ className }) => {
  return (
    <div
      className={[
        'absolute inset-0 overflow-hidden',
        'bg-[#e6e6e6]',
        className ?? '',
      ].join(' ')}
      aria-hidden
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.2s_infinite] bg-linear-to-r from-transparent via-white/60 to-transparent" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `,
        }}
      />
    </div>
  );
};

export default ShimmerBox;

