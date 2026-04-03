import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: 'AIzaSyDVNUoXf8Sly2HiwLS9nuRpDEJInV_T05c',
  authDomain: 'shri-yamuna-infra.firebaseapp.com',
  projectId: 'shri-yamuna-infra',
  storageBucket: 'shri-yamuna-infra.firebasestorage.app',
  messagingSenderId: '788391555378',
  appId: '1:788391555378:web:ef65d0fdd3a871e582e72b',
  measurementId: 'G-L79ZP95F6V',
} as const;

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);


