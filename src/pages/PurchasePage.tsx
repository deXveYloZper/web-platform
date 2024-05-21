import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { RootState } from '../redux/rootReducer';
import { setConsultationDate } from '../redux/consultationSlice';

interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
}

const PurchasePage: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector(
    (state: RootState) => state.selectedTemplate.template
  ) as Template | null;
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (Array.isArray(value)) {
      const selectedDate = value[0];
      if (selectedDate instanceof Date) {
        setDate(selectedDate);
        dispatch(setConsultationDate(selectedDate));
      }
    } else if (value instanceof Date) {
      setDate(value);
      dispatch(setConsultationDate(value));
    } else {
      setDate(null); // No need to dispatch null
    }
  };

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
      {/* Commenting out the Stripe Elements section */}
      {/*
      <Elements stripe={stripePromise}>
        <PaymentSection>
          <h2>Payment Details</h2>
          <PaymentForm />
        </PaymentSection>
      </Elements>
      */}
      {/* Placeholder for Payment Form */}
      <PaymentSection>
        <h2>Payment Details</h2>
        <p>Payment form will be here</p>
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

const PaymentSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
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
