import { initializeApp } from 'firebase/app';
import { getAuth as getRealAuth, Auth } from 'firebase/auth';
import { getFirestore as getRealFirestore } from 'firebase/firestore';
import firebaseMockConfig from '../firebaseMockConfig';

const isDevelopment = import.meta.env.MODE === 'development';

const firebaseConfig = isDevelopment ? firebaseMockConfig : {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

console.log('Using Firebase config:', firebaseConfig);

const app = initializeApp(firebaseConfig);

const auth = isDevelopment ? {
  signInWithEmailAndPassword: (email: string, password: string) => Promise.resolve({ user: { uid: 'mock-user-id', email } }),
  createUserWithEmailAndPassword: (email: string, password: string) => Promise.resolve({ user: { uid: 'mock-user-id', email } }),
} : getRealAuth(app);

const db = isDevelopment ? {} : getRealFirestore(app);

const isAdmin = async (user: any): Promise<boolean> => {
  if (!user) return false;
  // Mock admin check
  return isDevelopment ? Promise.resolve(true) : /* real implementation */ false;
};

export { auth, isAdmin };
