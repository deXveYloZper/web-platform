export const mockAuth = {
  signInWithEmailAndPassword: jest.fn((auth, email, password) =>
    Promise.resolve({ user: { uid: 'mock-user-id', email } })
  ),
  createUserWithEmailAndPassword: jest.fn((auth, email, password) =>
    Promise.resolve({ user: { uid: 'mock-user-id', email } })
  ),
  signOut: jest.fn(() => Promise.resolve()),
  onAuthStateChanged: jest.fn((callback) => callback({ uid: 'mock-user-id', email: 'test@example.com' })),
};

export const getAuth = jest.fn(() => mockAuth);
