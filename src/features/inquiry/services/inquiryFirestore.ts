import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import type { InquiryFormState } from '../types/inquiry';

export type InquiryFirestoreRecord = InquiryFormState & {
  createdAt: unknown;
};

export async function saveInquiryToFirestore(form: InquiryFormState) {
  const payload: InquiryFirestoreRecord = {
    ...form,
    createdAt: serverTimestamp(),
  };

  return await addDoc(collection(db, 'inquiries_Database'), payload);
}

