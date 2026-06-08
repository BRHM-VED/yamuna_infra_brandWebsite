import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDVNUoXf8Sly2HiwLS9nuRpDEJInV_T05c',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'shri-yamuna-infra.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'shri-yamuna-infra',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'shri-yamuna-infra.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '788391555378',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:788391555378:web:ef65d0fdd3a871e582e72b',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-L79ZP95F6V',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const ABOUT_MOMENTS_GALLERY_COLLECTION = 'AboutMomentsGallary' as const;
