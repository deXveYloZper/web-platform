import styled from 'styled-components';

// Define the props for the TemplateCard component
interface TemplateCardProps {
  image: string;
  name: string;
  description: string;
}

// TemplateCard component that takes image, name, and description as props
const TemplateCard: React.FC<TemplateCardProps> = ({ image, name, description }) => {
  return (
    <Card>
      <Thumbnail src={image} alt={name} />
      <CardContent>
        <TemplateName>{name}</TemplateName>
        <TemplateDescription>{description}</TemplateDescription>
      </CardContent>
    </Card>
  );
};

// Styled components

// Card container with hover effect
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

// Thumbnail image for the card
const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

// Container for the card content
const CardContent = styled.div`
  padding: 1rem;
`;

// Template name with styling
const TemplateName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

// Template description with styling
const TemplateDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default TemplateCard;
