import { collection, getDocs } from 'firebase/firestore';
import { ABOUT_MOMENTS_GALLERY_COLLECTION, db } from '@/lib/firebase';

export type AboutMoment = {
  id: string;
  file_url: string;
  title: string;
};

function orderFromId(id: string): number {
  const match = id.match(/movementsImages(\d+)/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

export async function fetchAboutMomentsGallery(): Promise<AboutMoment[]> {
  const snap = await getDocs(collection(db, ABOUT_MOMENTS_GALLERY_COLLECTION));
  return snap.docs
    .map((d) => {
      const data = d.data();
      return {
        id: d.id,
        file_url: String(data.file_url ?? ''),
        title: String(data.title ?? ''),
      };
    })
    .filter((m) => m.file_url.length > 0)
    .sort((a, b) => orderFromId(a.id) - orderFromId(b.id));
}
