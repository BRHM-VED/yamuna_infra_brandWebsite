/**
 * Single project page content keyed by URL slug (`/projects/:slug`).
 * Keep hero / copy / gallery in sync with `AllProjectsPage` ids and home preview links.
 */
export type ProjectDetail = {
  slug: string;
  heroImageSrc: string;
  heroTitle: string;
  belongingDescription: string;
  /** Exactly three gallery images (same layout as before; paths swap per project). */
  galleryImages: [string, string, string];
};

const PJ = {
  bedroom: '/assets/projects/pj_Bedroom.svg',
  interior: '/assets/projects/pj_Interior.svg',
  furnishing: '/assets/projects/pj_Fernishing.svg',
} as const;

const DEFAULT_DESCRIPTION =
  'Premium 1 BHK Living Spaces in Vrindavan. Experience the perfect blend of comfort, elegance, and devotion with our thoughtfully designed 1 BHK residences in the heart of Vrindavan. Each home is crafted to offer modern amenities while keeping you connected to the spiritual essence of the city.';

const PROJECTS: Record<string, ProjectDetail> = {
  'vrinda-apartments': {
    slug: 'vrinda-apartments',
    heroImageSrc: '/assets/projects/vrindaApartments.svg',
    heroTitle: 'VRINDA APARTMENTS',
    belongingDescription: DEFAULT_DESCRIPTION,
    galleryImages: [PJ.bedroom, PJ.interior, PJ.furnishing],
  },
  'tulsi-wings-apartments': {
    slug: 'tulsi-wings-apartments',
    heroImageSrc: '/assets/projects/TulsiWings.svg',
    heroTitle: 'TULSI WINGS APARTMENTS',
    belongingDescription: DEFAULT_DESCRIPTION,
    galleryImages: ['/assets/projects/TulsiWings.svg', PJ.interior, PJ.furnishing],
  },
  'shri-braj-rani-apartments': {
    slug: 'shri-braj-rani-apartments',
    heroImageSrc: '/assets/projects/ShriBrajrani.svg',
    heroTitle: 'SHRI BRAJ RANI APARTMENTS',
    belongingDescription: DEFAULT_DESCRIPTION,
    galleryImages: ['/assets/projects/ShriBrajrani.svg', PJ.interior, PJ.bedroom],
  },
  'kanha-tulsi-heights': {
    slug: 'kanha-tulsi-heights',
    heroImageSrc: '/assets/projects/KanhaTulsiHeights.svg',
    heroTitle: 'KANHA TULSI HEIGHTS',
    belongingDescription: DEFAULT_DESCRIPTION,
    galleryImages: ['/assets/projects/KanhaTulsiHeights.svg', PJ.interior, PJ.furnishing],
  },
  'tulsi-third-eye': {
    slug: 'tulsi-third-eye',
    heroImageSrc: '/assets/images/TulsiThirdEye.svg',
    heroTitle: 'TULSI THIRD EYE',
    belongingDescription: DEFAULT_DESCRIPTION,
    galleryImages: ['/assets/images/TulsiThirdEye.svg', PJ.interior, PJ.bedroom],
  },
  'brij-bhoomi': {
    slug: 'brij-bhoomi',
    heroImageSrc: '/assets/images/BrijBhumi.svg',
    heroTitle: 'BRIJ BHOOMI',
    belongingDescription: DEFAULT_DESCRIPTION,
    galleryImages: ['/assets/images/BrijBhumi.svg', PJ.interior, PJ.furnishing],
  },
};

const FALLBACK_SLUG = 'vrinda-apartments';

export function getProjectDetail(slug: string | undefined): ProjectDetail {
  const key = (slug ?? '').toLowerCase().trim();
  return PROJECTS[key] ?? PROJECTS[FALLBACK_SLUG];
}
