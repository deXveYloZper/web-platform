import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      console.error('Error:', error);
      setLoading(false);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Send paymentMethod.id to server for further processing
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" placeholder="Card Holder Name" required />
      <CardElementContainer>
        <CardElement />
      </CardElementContainer>
      <SecurityBadge>Secure Transaction</SecurityBadge>
      <Button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </Button>
    </FormContainer>
  );
};

// Styled components
const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

const SecurityBadge = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  background: #e0ffe0;
  color: #008000;
  border: 1px solid #008000;
  border-radius: 4px;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardElementContainer = styled.div`
  margin-bottom: 1rem;
`;

export default PaymentForm;
