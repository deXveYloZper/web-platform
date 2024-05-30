import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseMockConfig from '../firebaseMockConfig';

const firebaseConfig = import.meta.env.MODE === 'development' ? firebaseMockConfig : {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

console.log('Using Firebase config:', firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const isAdmin = async (user: User | null): Promise<boolean> => {
  if (!user) return false;
  const userDoc = await getDoc(doc(db, 'admins', user.uid));
  return userDoc.exists();
};

export { auth, isAdmin };
