import React, { createContext, useContext, ReactNode } from 'react';

// Define the type for the context value
interface MockStripeContextType {
  createPaymentMethod: () => Promise<{ id: string }>;
  confirmCardPayment: () => Promise<{ paymentIntent: { id: string } }>;
}

// Create the context with the correct type
const MockStripeContext = createContext<MockStripeContextType | null>(null);

// Custom hook to use the mock Stripe context
export const useMockStripe = () => {
  const context = useContext(MockStripeContext);
  if (!context) {
    throw new Error('useMockStripe must be used within a MockStripeProvider');
  }
  return context;
};

// Define the props interface for the provider component
interface MockStripeProviderProps {
  children: ReactNode;
}

// Create the provider component
export const MockStripeProvider: React.FC<MockStripeProviderProps> = ({ children }) => {
  const mockStripe: MockStripeContextType = {
    createPaymentMethod: () => Promise.resolve({ id: 'mock_payment_method_id' }),
    confirmCardPayment: () => Promise.resolve({ paymentIntent: { id: 'mock_payment_intent_id' } }),
  };

  return (
    <MockStripeContext.Provider value={mockStripe}>
      {children}
    </MockStripeContext.Provider>
  );
};
