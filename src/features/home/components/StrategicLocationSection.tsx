import React from 'react';
import { colors, fonts, strings } from '../../../utils';
import { Plane, Car, Building2, Castle, Train } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Tooltip, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapPoint = {
  id: string;
  label: string;
  kind: 'building' | 'plane' | 'train' | 'castle';
  lat: number;
  lng: number;
};

function FitBounds({ points }: { points: MapPoint[] }) {
  const map = useMap();

  React.useEffect(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [map, points]);

  return null;
}

function RouteLine({ points }: { points: MapPoint[] }) {
  const [route, setRoute] = React.useState<[number, number][] | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function run() {
      // OSRM expects lon,lat; build a single route through all points.
      const coords = points.map((p) => `${p.lng},${p.lat}`).join(';');
      const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;
      const res = await fetch(url);
      if (!res.ok) return;
      const data = await res.json();
      const line: [number, number][] | undefined = data?.routes?.[0]?.geometry?.coordinates?.map(
        (c: [number, number]) => [c[1], c[0]] as [number, number]
      );
      if (!cancelled && line?.length) setRoute(line);
    }

    if (points.length >= 2) run();
    return () => {
      cancelled = true;
    };
  }, [points]);

  if (!route) return null;

  return (
    <Polyline
      positions={route}
      pathOptions={{
        color: colors.accent,
        weight: 3,
        opacity: 0.9,
      }}
    />
  );
}

function markerSvg(kind: MapPoint['kind']) {
  // Minimal inline SVGs (white) to match Figma marker style.
  const common = `width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  switch (kind) {
    case 'plane':
      return `<svg ${common}><path d="M22 16.5L2 12l20-4.5V3l-8 6-8-2V3l3 6.5"/></svg>`;
    case 'building':
      return `<svg ${common}><path d="M3 21h18"/><path d="M7 21V7l5-3 5 3v14"/><path d="M9 9h.01M9 12h.01M9 15h.01M15 9h.01M15 12h.01M15 15h.01"/></svg>`;
    case 'castle':
      return `<svg ${common}><path d="M3 21h18"/><path d="M5 21V8h3V6h2v2h4V6h2v2h3v13"/><path d="M9 21v-6h6v6"/></svg>`;
    case 'train':
    default:
      return `<svg ${common}><path d="M4 15V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10"/><path d="M3 15h18"/><path d="M6 19l-2 2"/><path d="M18 19l2 2"/><path d="M8 7h8"/><path d="M8 11h8"/></svg>`;
  }
}

function markerIcon(kind: MapPoint['kind']) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width: 28px;
      height: 28px;
      background: ${colors.accent};
      border: 2px solid rgba(255,255,255,0.55);
      box-shadow: 0 10px 24px rgba(0,0,0,0.18);
      display: flex;
      align-items: center;
      justify-content: center;
    ">${markerSvg(kind)}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

const StrategicLocationSection: React.FC = () => {
  const locationItems = [
    {
      id: 'airport',
      time: strings.location.hubs[0].time,
      hub: strings.location.hubs[0].hub,
      icon: <Plane size={36} style={{ color: colors.accent }} />
    },
    {
      id: 'expressway',
      time: strings.location.hubs[1].time,
      hub: strings.location.hubs[1].hub,
      icon: <Car size={36} style={{ color: colors.accent }} />
    },
    {
      id: 'noida',
      time: strings.location.hubs[2].time,
      hub: strings.location.hubs[2].hub,
      icon: <Building2 size={36} style={{ color: colors.accent }} />
    },
    {
      id: 'agra',
      time: strings.location.hubs[3].time,
      hub: strings.location.hubs[3].hub,
      icon: <Castle size={36} style={{ color: colors.accent }} />
    },
    {
      id: 'railway',
      time: strings.location.hubs[4].time,
      hub: strings.location.hubs[4].hub,
      icon: <Train size={36} style={{ color: colors.accent }} />
    },
  ];

  // Lat/Lng are real-world coordinates (can be adjusted precisely if needed).
  const mapPoints: MapPoint[] = [
    { id: 'noida', label: 'NOIDA / NCR', kind: 'building', lat: 28.5355, lng: 77.391 },
    { id: 'jewar', label: 'JEWAR AIRPORT', kind: 'plane', lat: 28.144, lng: 77.566 },
    { id: 'vrindavan', label: 'VRINDAVAN SITE', kind: 'train', lat: 27.5806, lng: 77.7006 },
    { id: 'agra', label: 'AGRA', kind: 'castle', lat: 27.1767, lng: 78.0081 },
    { id: 'vrnd-rly', label: 'VRINDAVAN RAILWAY', kind: 'train', lat: 27.583, lng: 77.691 },
  ];

  return (
    // Developer: Figma — Strategic location list + map; mobile full-bleed map below cards.
    <section className="w-full bg-white py-16 px-3  md:px-[50px]">
      {/* Figma: list + map share same horizontal inset; both columns full width of content area */}
      <div className="mx-auto flex w-full  flex-col items-center">
        {/* Title */}
        <h2
          className="text-center text-[38px] md:text-[44px]  md:mb-20 tracking-[-1.32px]"
          style={{ fontFamily: fonts.heading, color: colors.text.primary }}
        >
          {strings.location.titleStart}{' '}
          <span className="italic font-medium" style={{ color: colors.primary }}>
            {strings.location.titleEnd}
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-[16px] md:gap-[40px] items-stretch w-full">
          {/* Left Column: List Cards */}
          <div className="flex-1 flex flex-col gap-[12px]">
            {/* Top 2 Full Width Cards */}
            {locationItems.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-[10px] md:gap-[18px] px-2 py-[10px] md:py-0 md:h-[92px] border bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
                style={{ borderColor: colors.border.light }}
              >
                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center shrink-0" style={{ backgroundColor: colors.surfaceMuted }}>
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0 justify-center min-w-0">
                  <span
                    className="text-[20px] md:text-[30px] font-medium leading-tight tracking-[-0.6px]"
                    style={{ fontFamily: fonts.body, color: colors.text.primary }}
                  >
                    {item.time}
                  </span>
                  <span
                    className="text-[12px] md:text-[15px] font-normal mt-0.5"
                    style={{ fontFamily: fonts.body, color: colors.text.tertiary }}
                  >
                    {item.hub}
                  </span>
                </div>
              </div>
            ))}

            {/* Middle row: two equal-width cards (Figma mobile + desktop) */}
            <div className="flex flex-row gap-[12px]">
              {locationItems.slice(2, 4).map((item) => (
                <div
                  key={item.id}
                  className="flex-1 flex items-center gap-[10px] md:gap-[18px] px-2 py-[10px] md:py-0 md:h-[92px] border bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
                  style={{ borderColor: colors.border.light }}
                >
                  <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center shrink-0" style={{ backgroundColor: colors.surfaceMuted }}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0 justify-center min-w-0">
                    <span
                      className="text-[20px] md:text-[30px] font-medium leading-tight tracking-[-0.4px] whitespace-nowrap"
                      style={{ fontFamily: fonts.body, color: colors.text.primary }}
                    >
                      {item.time}
                    </span>
                    <span
                      className="text-[12px] md:text-[16px] font-normal mt-0.5 whitespace-nowrap"
                      style={{ fontFamily: fonts.body, color: colors.text.tertiary }}
                    >
                      {item.hub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Full Width Card (Railway) */}
            <div
              className="flex items-center gap-[10px] md:gap-[18px] px-2 py-[10px] md:py-0 md:h-[92px] border bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
              style={{ borderColor: colors.border.light }}
            >
              <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center shrink-0" style={{ backgroundColor: colors.surfaceMuted }}>
                {locationItems[4].icon}
              </div>
              <div className="flex flex-col gap-0 justify-center min-w-0">
                <span
                  className="text-[20px] md:text-[30px] font-medium leading-tight tracking-[-0.6px]"
                  style={{ fontFamily: fonts.body, color: colors.text.primary }}
                >
                  {locationItems[4].time}
                </span>
                <span
                  className="text-[12px] md:text-[15px] font-normal mt-0.5"
                  style={{ fontFamily: fonts.body, color: colors.text.tertiary }}
                >
                  {locationItems[4].hub}
                </span>
              </div>
            </div>

            {/* Surroundings & Brand Card */}
            <div
              className="flex flex-col px-3 py-4 md:p-8 border bg-white h-auto md:h-[155px] justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)]"
              style={{ borderColor: colors.border.light }}
            >
              <p
                className="text-[14px] md:text-[14px] leading-[1.45] md:leading-[1.45] opacity-80 max-w-[260px] md:max-w-[360px]"
                style={{ fontFamily: fonts.body, color: colors.text.primary, letterSpacing: '-0.14px' }}
              >
                {strings.location.surroundingTitle}
              </p>
              <div className="flex flex-wrap items-center justify-between mt-4 md:mt-2">
                <img src="/assets/images/hyattCentric.svg" alt="Hyatt" className="h-[18px] md:h-[22px] w-auto transition-all hover:grayscale-0 grayscale" loading="lazy" decoding="async" />
                <img src="/assets/images/ihcl.svg" alt="IHCL" className="h-[20px] md:h-[24px] w-auto transition-all hover:grayscale-0 grayscale" loading="lazy" decoding="async" />
                <img src="/assets/images/marriott.svg" alt="Marriott" className="h-[30px] md:h-[40px] w-auto transition-all hover:grayscale-0 grayscale" loading="lazy" decoding="async" />
                <img src="/assets/images/wyndham.svg" alt="Wyndham" className="h-[22px] md:h-[28px] w-auto transition-all hover:grayscale-0 grayscale text-[#0E57B7]" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Right Column: map — full-bleed on mobile, contained on desktop */}
          <div
            className="flex-1 relative min-h-[400px] -mx-3 md:mx-0 w-auto md:w-full rounded-[1px] overflow-hidden border md:min-h-[min(560px,70vh)]"
            style={{ backgroundColor: colors.surfaceMuted, borderColor: colors.border.light }}
          >
            <MapContainer
              className="absolute inset-0"
              center={[27.5806, 77.7006]}
              zoom={8}
              scrollWheelZoom
              dragging
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FitBounds points={mapPoints} />
              <RouteLine points={mapPoints} />
              {mapPoints.map((p) => (
                <Marker key={p.id} position={[p.lat, p.lng]} icon={markerIcon(p.kind)}>
                  <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                    <span style={{ fontFamily: fonts.body, fontSize: '11px', fontWeight: 700 }}>
                      {p.label}
                    </span>
                  </Tooltip>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicLocationSection;
