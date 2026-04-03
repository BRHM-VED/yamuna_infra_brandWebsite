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
    <section className="bg-white px-4 md:px-[40px] pb-[112px]">
      <h3
        className="pt-[0px] text-[28px] md:text-[44px] leading-[1.19] text-[#5A5550] tracking-[-0.84px] md:tracking-[-1.32px] text-center"
        style={{ fontFamily: fonts.heading }}
      >
        Amenities
      </h3>

      {/* Desktop grid (Figma 644:1746) */}
      <div className="hidden md:grid w-full max-w-[1076px] mx-auto grid-cols-4 gap-[12px] pt-[49px]">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="h-[360px] w-[260px] border border-[#E9DABA] overflow-hidden flex items-center justify-center bg-white"
          >
            <div className="w-[210px] flex flex-col items-center gap-[42px] text-center">
              <div className="w-[120px] h-[120px] rounded-full bg-[#E4EEFA] flex items-center justify-center text-[#2B4466] overflow-hidden">
                <item.Icon className="w-[70px] h-[70px] stroke-[1.5]" />
              </div>
              <div className="w-full flex flex-col items-center gap-[21px] leading-[1.4]">
                <p className="text-[22px] font-medium text-[#2B4466] w-full" style={{ fontFamily: fonts.body }}>
                  {item.title}
                </p>
                <p
                  className="text-[16px] text-[#5A5550] tracking-[-0.48px] w-[210px]"
                  style={{ fontFamily: fonts.body }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile list (Figma 765:5624) */}
      <div className="md:hidden w-full  mx-auto flex flex-col gap-[9px] pt-12">
        {amenities.map((item, idx) => (
          <div key={idx} className="h-[90px] w-full border border-[#E9DABA] p-[14px] flex items-center bg-white">
            <div className="flex items-center gap-[14px] w-full">
              <div className="w-[60px] h-[60px] rounded-full bg-[#E4EEFA] flex items-center justify-center text-[#2B4466] overflow-hidden shrink-0">
                <item.Icon className="w-[35px] h-[35px] stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-[12px] items-start leading-[1.4]">
                <p className="text-[18px] font-medium text-[#2B4466]" style={{ fontFamily: fonts.body }}>
                  {item.title}
                </p>
                <p
                  className="text-[12px] text-[#5A5550] tracking-[-0.36px] w-[210px]"
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
