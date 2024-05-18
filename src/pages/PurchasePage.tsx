import { useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { RootState } from '../redux/rootReducer';

interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
}

const PurchasePage: React.FC = () => {
  // Fetch the selected template from Redux store with null check
  const selectedTemplate = useSelector(
    (state: RootState) => state.selectedTemplate.template
  ) as Template | null;
  const [date, setDate] = useState<Date | null>(null);

  // Handle Date Change
  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (Array.isArray(value)) {
      setDate(value[0]);
    } else {
      setDate(value);
    }
  };

  const handlePayment = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle payment logic here
  };

  // Check if a template is selected
  if (!selectedTemplate) {
    return <ErrorMessage>No template selected</ErrorMessage>;
  }

  return (
    <Container>
      <SummarySection>
        <h2>Template Summary</h2>
        <TemplateDetails>
          <TemplateImage src={selectedTemplate.image} alt={selectedTemplate.name} />
          <TemplateInfo>
            <TemplateName>{selectedTemplate.name}</TemplateName>
            <TemplateDescription>{selectedTemplate.description}</TemplateDescription>
          </TemplateInfo>
        </TemplateDetails>
      </SummarySection>
      <PaymentSection onSubmit={handlePayment}>
        <h2>Payment Details</h2>
        <Input type="text" placeholder="Card Number" required />
        <Input type="text" placeholder="Card Holder Name" required />
        <Input type="text" placeholder="Expiry Date (MM/YY)" required />
        <Input type="text" placeholder="CVV" required />
        <SecurityBadge>Secure Transaction</SecurityBadge>
        <Button type="submit">Pay Now</Button>
      </PaymentSection>
      <ConsultationSection>
        <h2>Schedule a Consultation</h2>
        <Calendar onChange={handleDateChange} value={date ?? undefined} /> 
      </ConsultationSection>
      <ConfirmationMessage>
        <h2>Thank You!</h2>
        <p>Your purchase is complete. We will contact you soon with further details.</p>
      </ConfirmationMessage>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const SummarySection = styled.section`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
`;

const TemplateDetails = styled.div`
  display: flex;
`;

const TemplateImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-right: 1rem;
`;

const TemplateInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TemplateName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TemplateDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const PaymentSection = styled.form`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
`;

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

const ConsultationSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
`;

const ConfirmationMessage = styled.section`
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
`;

const ErrorMessage = styled.div`
  font-size: 1.5rem;
  color: red;
  margin-top: 2rem;
`;

export default PurchasePage;
