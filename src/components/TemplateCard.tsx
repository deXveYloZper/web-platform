import styled from 'styled-components';

interface TemplateCardProps {
  image: string;
  name: string;
  description: string;
}

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

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const TemplateName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TemplateDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default TemplateCard;
