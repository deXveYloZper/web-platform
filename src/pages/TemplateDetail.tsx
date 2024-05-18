import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getTemplateById } from '../services/api';
import CustomizationPanel from '../components/CustomizationPanel'; // Ensure this import matches your project structure

// Define the structure of a template
interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
  features: string[];
}

// TemplateDetailPage component for displaying detailed information about a template
const TemplateDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get template ID from URL parameters
  const [template, setTemplate] = useState<Template | null>(null); // State for storing template data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch template data when component mounts or when ID changes
  useEffect(() => {
    const fetchTemplate = async () => {
      if (!id) return; // Ensure id is defined
      try {
        const data = await getTemplateById(id);
        setTemplate(data);
      } catch (error) {
        console.error('Error fetching template:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [id]);

  // Display loading message while data is being fetched
  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  // Display error message if template is not found
  if (!template) {
    return <ErrorMessage>Template not found.</ErrorMessage>;
  }

  // Display template details and customization panel
  return (
    <Container>
      <TemplatePreview>
        <TemplateImage src={template.image} alt={template.name} />
        {/* Add interactive demo here if available */}
      </TemplatePreview>
      <TemplateDetails>
        <Title>{template.name}</Title>
        <Description>{template.description}</Description>
        <FeatureList>
          {template.features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeatureList>
        <CustomizationPanel />
        <CTAButton>Purchase and Customize</CTAButton>
      </TemplateDetails>
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

const TemplatePreview = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const TemplateImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const TemplateDetails = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Loading = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const ErrorMessage = styled.div`
  font-size: 1.5rem;
  color: red;
  margin-top: 2rem;
`;

export default TemplateDetailPage;
