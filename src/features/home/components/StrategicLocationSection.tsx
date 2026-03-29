import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { Plane, Car, Building2, Castle, Train } from 'lucide-react';

const StrategicLocationSection: React.FC = () => {
  const locationItems = [
    {
      id: 'airport',
      time: strings.location.hubs[0].time,
      hub: strings.location.hubs[0].hub,
      icon: <Plane size={36} className="text-[#003171]" />
    },
    {
      id: 'expressway',
      time: strings.location.hubs[1].time,
      hub: strings.location.hubs[1].hub,
      icon: <Car size={36} className="text-[#003171]" />
    },
    {
      id: 'noida',
      time: strings.location.hubs[2].time,
      hub: strings.location.hubs[2].hub,
      icon: <Building2 size={36} className="text-[#003171]" />
    },
    {
      id: 'agra',
      time: strings.location.hubs[3].time,
      hub: strings.location.hubs[3].hub,
      icon: <Castle size={36} className="text-[#003171]" />
    },
    {
      id: 'railway',
      time: strings.location.hubs[4].time,
      hub: strings.location.hubs[4].hub,
      icon: <Train size={36} className="text-[#003171]" />
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-[60px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h2
          className="text-center text-[38px] md:text-[44px] mb-12 md:mb-20 tracking-[-1.32px]"
          style={{ fontFamily: fonts.heading, color: '#1B1B1B' }}
        >
          {strings.location.titleStart} <span className="italic font-medium" style={{ color: colors.primary }}>{strings.location.titleEnd}</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-[16px] md:gap-[40px] items-stretch w-full">
          {/* Left Column: List Cards */}
          <div className="flex-1 flex flex-col gap-[12px]">
            {/* Top 2 Full Width Cards */}
            {locationItems.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-[18px] p-2 border border-[#00000010] bg-white h-[92px] shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
              >
                <div className="w-[70px] h-[70px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0 justify-center">
                  <span
                    className="text-[24px] md:text-[30px] font-medium leading-none tracking-[-0.6px]"
                    style={{ fontFamily: fonts.body, color: '#333' }}
                  >
                    {item.time}
                  </span>
                  <span
                    className="text-[14px] md:text-[15px] text-gray-500 font-normal mt-1"
                    style={{ fontFamily: fonts.body }}
                  >
                    {item.hub}
                  </span>
                </div>
              </div>
            ))}

            {/* Middle Row (2 Half Width Cards) */}
            <div className="flex flex-col md:flex-row gap-[12px]">
              {locationItems.slice(2, 4).map((item) => (
                <div
                  key={item.id}
                  className="flex-1 flex items-center gap-[18px] p-2 border border-[#00000010] bg-white h-[92px] shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-[70px] h-[70px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0 justify-center">
                    <span
                      className="text-[24px] md:text-[30px] font-medium leading-none tracking-[-0.6px]"
                      style={{ fontFamily: fonts.body, color: '#333' }}
                    >
                      {item.time}
                    </span>
                    <span
                      className="text-[14px] md:text-[15px] text-gray-500 font-normal mt-1"
                      style={{ fontFamily: fonts.body }}
                    >
                      {item.hub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Full Width Card (Railway) */}
            <div className="flex items-center gap-[18px] p-2 border border-[#00000010] bg-white h-[92px] shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
              <div className="w-[70px] h-[70px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                {locationItems[4].icon}
              </div>
              <div className="flex flex-col gap-0 justify-center">
                <span
                  className="text-[24px] md:text-[30px] font-medium leading-none tracking-[-0.6px]"
                  style={{ fontFamily: fonts.body, color: '#333' }}
                >
                  {locationItems[4].time}
                </span>
                <span
                  className="text-[14px] md:text-[15px] text-gray-500 font-normal mt-1"
                  style={{ fontFamily: fonts.body }}
                >
                  {locationItems[4].hub}
                </span>
              </div>
            </div>

            {/* Surroundings & Brand Card */}
            <div className="flex flex-col p-8 border border-[#00000010] bg-white h-auto md:h-[155px] justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
              <p
                className="text-[14px] md:text-[16px] text-[#5A5550] leading-[1.4] opacity-80"
                style={{ fontFamily: fonts.body }}
              >
                Surrounded by 7-star retreats, wellness sanctuaries, and luxury resorts
              </p>
              <div className="flex flex-wrap items-center justify-between mt-4 md:mt-2">
                <img src="/assets/images/hyattCentric.svg" alt="Hyatt" className="h-[18px] md:h-[22px] w-auto transition-all hover:grayscale-0 grayscale" />
                <img src="/assets/images/ihcl.svg" alt="IHCL" className="h-[20px] md:h-[24px] w-auto transition-all hover:grayscale-0 grayscale" />
                <img src="/assets/images/marriott.svg" alt="Marriott" className="h-[30px] md:h-[40px] w-auto transition-all hover:grayscale-0 grayscale" />
                <img src="/assets/images/wyndham.svg" alt="Wyndham" className="h-[22px] md:h-[28px] w-auto transition-all hover:grayscale-0 grayscale text-[#0E57B7]" />
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Regional Google Map */}
          <div className="flex-1 relative bg-[#F5F5F5] min-h-[500px] md:min-h-auto rounded-[1px] overflow-hidden border border-[#00000008]">
            {/* Regional Map View showing the Yamuna Expressway Corridor (Noida to Agra) */}
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1416000.380!2d77.50!3d27.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711660000000!5m2!1sen!2sin"
              title="Strategic Location Corridor"
            ></iframe>

            {/* Realistic Marker Overlay - Calibrated to the regional regional map view */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {/* Noida Marker (Correct North-West Positioning) */}
              <div className="absolute top-[12%] left-[20%] flex flex-col items-center">
                <div className="bg-[#003171] p-2 shadow-xl border border-white/40"><Building2 size={24} className="text-white" /></div>
                <div className="mt-1 bg-white/90 px-2 py-0.5 text-[9px] font-bold shadow-sm">NOIDA / NCR</div>
              </div>

              {/* Jewar Airport Marker (Geographically correct center north) */}
              <div className="absolute top-[32%] left-[42%] flex flex-col items-center">
                <div className="bg-[#003171] p-2 shadow-xl border border-white/40"><Plane size={24} className="text-white" /></div>
                <div className="mt-1 bg-white/90 px-2 py-0.5 text-[9px] font-bold shadow-sm">JEWAR AIRPORT</div>
              </div>

              {/* Vrindavan Project (The Focal Destination) */}
              <div className="absolute top-[58%] right-[40%]">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -inset-10 w-[140px] h-[140px] rounded-full border border-accent/30 animate-ping opacity-30" />
                  <div className="absolute -inset-6 w-[100px] h-[100px] rounded-full bg-accent/10 border border-accent/40" />
                  <div className="w-[48px] h-[48px] bg-accent border-[4px] border-white shadow-2xl flex items-center justify-center">
                    <Train size={24} className="text-white" />
                  </div>
                  <div className="absolute -bottom-10 whitespace-nowrap bg-accent text-white px-3 py-1 text-[11px] font-bold shadow-lg">VRINDAVAN SITE</div>
                </div>
              </div>

              {/* Agra Marker (Correct South-East Positioning) */}
              <div className="absolute bottom-[15%] right-[15%] flex flex-col items-center">
                <div className="bg-[#003171] p-2 shadow-xl border border-white/40"><Castle size={24} className="text-white" /></div>
                <div className="mt-1 bg-white/90 px-2 py-0.5 text-[9px] font-bold shadow-sm">AGRA</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicLocationSection;
