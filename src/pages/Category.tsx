// src/pages/Category.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getTemplatesByCategory } from '../services/api';

// Define the type for the template data
interface Template {
  id: string;
  name: string;
  image: string;
}

const CategoryPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [templates, setTemplates] = useState<Template[]>([]);
  
    useEffect(() => {
      const fetchTemplates = async () => {
        if (category) {
          const data = await getTemplatesByCategory(category);
          setTemplates(data);
        }
      };
  
      fetchTemplates();
    }, [category]);

  return (
    <Container>
      <Title>{category} Templates</Title>
      <TemplateList>
        {templates.map(template => (
          <TemplateCard key={template.id}>
            <img src={template.image} alt={template.name} />
            <h3>{template.name}</h3>
          </TemplateCard>
        ))}
      </TemplateList>
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

const TemplateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TemplateCard = styled.div`
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333% - 1rem);
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  img {
    max-width: 100%;
    border-radius: 8px;
  }
  h3 {
    margin: 1rem 0 0;
  }
`;

export default CategoryPage;
