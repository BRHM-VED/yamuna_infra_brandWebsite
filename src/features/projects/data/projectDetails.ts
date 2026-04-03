/**
 * Project detail page content: loaded from `projectsPageData.json` (keyed by URL slug).
 * Amenities stay static in `AmenitiesSection`; everything else on the page comes from JSON.
 */
import projectsRoot from './projectsPageData.json';

export type ProjectDetail = {
  slug: string;
  heroImageSrc: string;
  heroTitle: string;
  /** Text before the brown italic word in the belonging headline (same layout as before). */
  belongingHeadingBefore: string;
  /** Brown italic word in the belonging headline. */
  belongingHeadingEmphasis: string;
  belongingDescription: string;
  /** Address shown under the description (bold “Address” label + text). */
  contentAddress: string;
  /** Big heading used on the projects listing strip. */
  listingSubtitle?: string;
  /** Price pieces for listing strip (text only; no formatting). */
  priceNum?: string;
  priceText?: string;
  /** Brochure download link for listing + detail CTA. */
  brochureLink?: string;
  galleryImages: string[];
  strategicAddress: string;
  mapLat: number;
  mapLng: number;
  /** Optional: Google Maps share URL that contains exact @lat,lng. */
  googleMapsShareUrl?: string;
  mapZoom?: number;
};

type ProjectsFileRoot = {
  fallbackSlug: string;
  projects: Record<string, ProjectDetail>;
};

const root = projectsRoot as unknown as ProjectsFileRoot;

function normalizeDetail(slugKey: string, raw: ProjectDetail): ProjectDetail {
  return {
    ...raw,
    slug: raw.slug ?? slugKey,
    galleryImages: raw.galleryImages ?? [],
    strategicAddress: raw.strategicAddress ?? raw.contentAddress,
  };
}

const PROJECTS: Record<string, ProjectDetail> = Object.fromEntries(
  Object.entries(root.projects).map(([slugKey, raw]) => [
    slugKey,
    normalizeDetail(slugKey, raw),
  ])
);

const FALLBACK_SLUG = root.fallbackSlug in PROJECTS ? root.fallbackSlug : Object.keys(PROJECTS)[0] ?? 'vrinda-apartments';

export function getProjectDetail(slug: string | undefined): ProjectDetail {
  const key = (slug ?? '').toLowerCase().trim();
  return PROJECTS[key] ?? PROJECTS[FALLBACK_SLUG];
}

/** Slugs that exist in JSON (e.g. for listings or validation). */
export function getProjectPageSlugs(): string[] {
  return Object.keys(PROJECTS);
}
