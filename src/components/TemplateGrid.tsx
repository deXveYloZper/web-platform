import styled from 'styled-components';
import TemplateCard from './TemplateCard';

interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
}

interface TemplateGridProps {
  templates: Template[];
}

const TemplateGrid: React.FC<TemplateGridProps> = ({ templates }) => {
  return (
    <Grid>
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          image={template.image}
          name={template.name}
          description={template.description}
        />
      ))}
    </Grid>
  );
};

// Styled components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

export default TemplateGrid;
