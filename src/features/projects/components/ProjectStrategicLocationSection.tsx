import React, { useCallback, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowRight } from 'lucide-react';
import { colors, fonts, strings } from '../../../utils';

export type ProjectStrategicLocationSectionProps = {
  address: string;
  mapLat: number;
  mapLng: number;
  /** Optional: Google Maps share URL that contains an exact @lat,lng. */
  googleMapsShareUrl?: string;
  /** Zoom level for the Leaflet map (default 15). */
  mapZoom?: number;
};

function createHomeMarkerIcon(): L.DivIcon {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
  return L.divIcon({
    className: '',
    html: `<div style="
      width: 36px;
      height: 36px;
      background: ${colors.accent};
      border: 2px solid rgba(255,255,255,0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    ">${svg}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

/** Prefer coordinates for stable deep links; fall back to address search. */
function googleMapsHrefFor(lat: number, lng: number, address: string): string {
  const hasCoords = Number.isFinite(lat) && Number.isFinite(lng);
  if (hasCoords) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${lat},${lng}`)}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function parseLatLngFromGoogleMapsUrl(
  url: string,
): { lat: number; lng: number } | null {
  try {
    // Match: ".../@27.5726,77.6893,17z/..." (common share format)
    const atMatch = url.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?),/);
    if (atMatch) {
      const lat = Number(atMatch[1]);
      const lng = Number(atMatch[2]);
      if (Number.isFinite(lat) && Number.isFinite(lng)) return { lat, lng };
    }

    // Match: "...?ll=27.5726,77.6893..."
    const llMatch = url.match(/[?&]ll=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
    if (llMatch) {
      const lat = Number(llMatch[1]);
      const lng = Number(llMatch[2]);
      if (Number.isFinite(lat) && Number.isFinite(lng)) return { lat, lng };
    }

    // Less strict fallback: "@lat,lng" without trailing ",zoom"
    const atLoose = url.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)(?:[/?#]|$)/);
    if (atLoose) {
      const lat = Number(atLoose[1]);
      const lng = Number(atLoose[2]);
      if (Number.isFinite(lat) && Number.isFinite(lng)) return { lat, lng };
    }
  } catch {
    // ignore
  }
  return null;
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

const t = strings.projectStrategicLocation;

const ProjectStrategicLocationSection: React.FC<ProjectStrategicLocationSectionProps> = ({
  address,
  mapLat,
  mapLng,
  googleMapsShareUrl,
  mapZoom = 15,
}) => {
  const parsed = useMemo(() => {
    if (!googleMapsShareUrl) return null;
    return parseLatLngFromGoogleMapsUrl(googleMapsShareUrl);
  }, [googleMapsShareUrl]);

  const effectiveLat = parsed?.lat ?? mapLat;
  const effectiveLng = parsed?.lng ?? mapLng;
  const center = useMemo<[number, number]>(
    () => [effectiveLat, effectiveLng],
    [effectiveLat, effectiveLng],
  );
  const markerIcon = useMemo(() => createHomeMarkerIcon(), []);
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(() => {
    void copyToClipboard(address).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, [address]);

  const mapsUrl = useMemo(() => {
    if (googleMapsShareUrl) return googleMapsShareUrl;
    return googleMapsHrefFor(effectiveLat, effectiveLng, address);
  }, [address, effectiveLat, effectiveLng, googleMapsShareUrl]);

  return (
    <section className="w-full bg-white" aria-labelledby="project-strategic-location-heading">
      <div className="mx-auto w-full max-w-full  py-[48px] md:px-[50px] md:py-[120px]">
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_1fr] md:items-stretch md:gap-x-12 lg:gap-x-16 md:gap-y-0">
          {/* Title — mobile centered, desktop left */}
          <h2
            id="project-strategic-location-heading"
            className="order-1 mb-6 text-center text-[38px] leading-[1.12] tracking-[-1.14px] md:mb-0 md:text-left md:text-[44px] md:leading-[1.1] md:tracking-[-1.32px]"
            style={{ fontFamily: fonts.heading, color: colors.text.primary }}
          >
            {t.titleStart}{' '}
            <span className="italic font-medium" style={{ color: colors.primary }}>
              {t.titleEnd}
            </span>
          </h2>

          {/* Map — full width on mobile, right column on desktop spanning both rows */}
          <div
            className="relative order-2 mb-6 min-h-[min(100vw,400px)] w-full overflow-hidden rounded-[1px] border md:col-start-2 md:row-start-1 md:row-span-2 md:mb-0 md:min-h-[520px]"
            style={{
              backgroundColor: colors.surfaceMuted,
              borderColor: colors.border.light,
            }}
          >
              <MapContainer
                key={`${effectiveLat}-${effectiveLng}`}
                className="absolute inset-0 z-0 h-full min-h-[inherit] w-full [&_.leaflet-container]:h-full [&_.leaflet-container]:min-h-[inherit]"
                center={center}
                zoom={mapZoom}
                scrollWheelZoom
                attributionControl
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={center} icon={markerIcon} />
              </MapContainer>
          </div>

          {/* Address + actions — below map on mobile, bottom-left on desktop */}
          <div className="order-3 px-4 md:px-0 md:col-start-1 md:row-start-2 md:self-end md:pt-0">
            <p
              className="max-w-[520px] text-left text-[14px] leading-[1.45] tracking-[-0.14px] md:text-[16px] md:leading-normal md:tracking-[-0.16px]"
              style={{ fontFamily: fonts.body, color: colors.text.secondary }}
            >
              {address}
            </p>

            <div className="mt-6 flex flex-row gap-4 md:mt-8">
              <button
                type="button"
                onClick={onCopy}
                className="flex h-[54px] w-[130px] items-center justify-center rounded-[1px] border bg-white px-4 text-[14px] font-medium leading-none tracking-[-0.14px] transition-opacity hover:opacity-90 md:h-auto md:min-h-[44px] md:w-auto md:px-5 md:py-2.5"
                style={{
                  fontFamily: fonts.body,
                  color: colors.text.primary,
                  borderColor: colors.border.light,
                }}
              >
                {copied ? 'Copied' : t.copyAddress}
              </button>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[54px] flex-1 items-center justify-between rounded-[1px] px-4 text-[14px] font-medium leading-none tracking-[-0.14px] transition-opacity hover:opacity-90 md:h-auto md:min-h-[44px] md:flex-initial md:justify-center md:gap-2 md:px-5 md:py-2.5 md:text-[14px] md:leading-none"
                style={{
                  fontFamily: fonts.body,
                  color: colors.text.primary,
                  backgroundColor: colors.tertiary,
                }}
              >
                <span className="text-left">{t.openInGoogleMaps}</span>
                <ArrowRight className="shrink-0" size={16} strokeWidth={2} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStrategicLocationSection;
