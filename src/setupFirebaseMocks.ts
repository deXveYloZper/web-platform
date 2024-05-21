import { mockAuth } from 'firebase-mock';
import { mockFirestore } from 'firebase-mock';

const mockauth = new mockAuth();
const mockfirestore = new mockFirestore();

jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(() => ({
      auth: jest.fn(() => mockauth),
      firestore: jest.fn(() => mockfirestore),
    })),
  };
});

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(() => mockauth),
  };
});

jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(() => mockfirestore),
  };
});
