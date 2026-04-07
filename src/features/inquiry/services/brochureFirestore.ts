import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

export type BrochureDownloadRecord = {
  name: string;
  phoneNumber: string;
  projectName: string;
  createdAt: unknown;
};

/**
 * Stores brochure download lead data in Firestore.
 * Collection name kept explicit for analytics exports.
 */
export async function saveBrochureDownloadToFirestore(input: Omit<BrochureDownloadRecord, 'createdAt'>) {
  const payload: BrochureDownloadRecord = {
    ...input,
    createdAt: serverTimestamp(),
  };

  return await addDoc(collection(db, 'brochureDownloads_Database'), payload);
}

