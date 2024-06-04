export const mockFirestore = {
  collection: jest.fn(() => ({
    doc: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve({ exists: true, data: () => ({ uid: 'mock-user-id' }) })),
    })),
  })),
};

export const getFirestore = () => mockFirestore;
export type FirestoreModule = typeof mockFirestore;
