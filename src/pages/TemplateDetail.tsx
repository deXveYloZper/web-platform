// src/pages/TemplateDetail.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getTemplateById } from '../services/api';

// Define the type for the template data
interface Template {
  id: string;
  name: string;
  image: string;
  description: string;
}

const TemplateDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [template, setTemplate] = useState<Template | null>(null);

  useEffect(() => {
    const fetchTemplate = async () => {
      if (id) {
        const data = await getTemplateById(id);
        setTemplate(data);
      }
    };

    fetchTemplate();
  }, [id]);

  if (!template) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>{template.name}</Title>
      <img src={template.image} alt={template.name} />
      <Description>{template.description}</Description>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
`;

export default TemplateDetailPage;
