import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

export type ProjectDetail = {
  slug: string;
  heroImageSrc: string;
  heroTitle: string;
  belongingHeadingBefore: string;
  belongingHeadingEmphasis: string;
  belongingDescription: string;
  contentAddress: string;
  listingSubtitle?: string;
  priceNum?: string;
  priceText?: string;
  brochureLink?: string;
  galleryImages: string[];
  strategicAddress: string;
  mapLat: number;
  mapLng: number;
  googleMapsShareUrl?: string;
  mapZoom?: number;
};

const COLLECTION = 'SYI_Projects' as const;

export async function fetchAllProjects(): Promise<ProjectDetail[]> {
  const snap = await getDocs(collection(db, COLLECTION));
  return snap.docs
    .map((d) => ({ ...(d.data() as ProjectDetail), slug: d.id }))
    .filter((p) => !!p.slug);
}

export async function fetchProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  const key = (slug ?? '').toLowerCase().trim();
  if (!key) return null;
  const snap = await getDoc(doc(db, COLLECTION, key));
  if (!snap.exists()) return null;
  return { ...(snap.data() as ProjectDetail), slug: snap.id };
}

