import { MockFirebaseSdk } from 'firebase-mock';

// Initialize the mock Firebase SDK
const mockFirebaseSdk = new MockFirebaseSdk();
const mockAuth = mockFirebaseSdk.auth();
const mockFirestore = mockFirebaseSdk.firestore();

// Mock the Firebase modules
jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(() => ({})),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => mockAuth),
  signInWithEmailAndPassword: jest.fn((_, email) =>
    Promise.resolve({ user: { uid: 'mock-user-id', email } })
  ),
  createUserWithEmailAndPassword: jest.fn((_, email) =>
    Promise.resolve({ user: { uid: 'mock-user-id', email } })
  ),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => mockFirestore),
  doc: jest.fn((_, __, id) => ({ id })),
  getDoc: jest.fn(() => Promise.resolve({ exists: () => true })),
}));
