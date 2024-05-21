import { MockFirebaseSdk } from 'firebase-mock';

const mockFirebaseSdk = new MockFirebaseSdk();
const mockAuth = mockFirebaseSdk.auth();
const mockFirestore = mockFirebaseSdk.firestore();

jest.mock('firebase/auth', () => ({
getAuth: jest.fn(() => mockAuth),
}));

jest.mock('firebase/firestore', () => ({
    getFirestore: jest.fn(() => mockFirestore),
}));
