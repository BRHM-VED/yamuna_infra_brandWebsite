import React from 'react';
import { Dumbbell, Waves, Martini, Landmark, Trees, ArrowUpWideNarrow, ShieldCheck, Zap } from 'lucide-react';
import { fonts } from '../../../utils/typography';

const amenities = [
  {
    title: 'Gym',
    description: 'Well equipped gym designed for strength, wellness and harmony',
    Icon: Dumbbell,
  },
  {
    title: 'Swimming Pool',
    description: 'A refreshing swimming pool designed for relaxation and rejuvenation',
    Icon: Waves,
  },
  {
    title: 'Club House',
    description: 'A vibrant clubhouse for celebrations, connections, and community living',
    Icon: Martini,
  },
  {
    title: 'Temple',
    description: 'A serene temple within the premises, bringing peace and devotion closer to home.',
    Icon: Landmark,
  },
  {
    title: 'Green Park',
    description: 'A green park designed for relaxation, play and peace of mind',
    Icon: Trees,
  },
  {
    title: 'Modern lift',
    description: 'Modern lift facilities for ease, comfort and accessibility.',
    Icon: ArrowUpWideNarrow,
  },
  {
    title: 'Security Guard',
    description: '24/7 surveillance ensuring safety and comfort for every resident.',
    Icon: ShieldCheck,
  },
  {
    title: 'Electricity Power',
    description: 'Reliable backup ensuring well lit spaces and seamless mobility',
    Icon: Zap,
  },
];

const AmenitiesSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-24 px-4 md:px-16 flex flex-col items-center gap-12 md:gap-20">
      <h3
        className="text-[28px] md:text-[44px] leading-[1.19] text-[#5A5550] tracking-[-0.84px] md:tracking-[-1.32px] text-center"
        style={{ fontFamily: fonts.heading }}
      >
        Amenities
      </h3>

      {/* 2x4 grid on Desktop, 1 col on Mobile Node 644:1746 / 765:5624 */}
      <div className="w-full max-w-[1076px] grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-[12px]">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:flex-col items-center md:justify-center p-[14px] md:p-6 border border-[#e9daba] h-auto min-h-[90px] md:min-h-[360px] animate-in fade-in zoom-in-95 duration-500"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Mobile layout (Horizontal) vs Desktop layout (Vertical) */}
            <div className="flex md:flex-col items-center gap-4 md:gap-[42px] w-full md:text-center h-full">
              <div className="flex-shrink-0 w-[60px] h-[60px] md:w-[120px] md:h-[120px] bg-[#e4eefa] rounded-full flex items-center justify-center text-[#2B4466]">
                <item.Icon className="w-[35px] h-[35px] md:w-[70px] md:h-[70px] stroke-[1.5]" />
              </div>

              <div className="flex flex-col gap-2 md:gap-[21px] flex-1">
                <h4
                  className="text-[18px] md:text-[22px] font-medium text-[#2B4466]"
                  style={{ fontFamily: fonts.heading }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-[12px] md:text-[16px] text-[#5A5550] opacity-90 leading-[1.4] tracking-[-0.36px] md:tracking-[-0.48px]"
                  style={{ fontFamily: fonts.body }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;
