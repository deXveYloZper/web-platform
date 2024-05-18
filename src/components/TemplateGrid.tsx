import styled from 'styled-components';
import TemplateCard from './TemplateCard';

// Define the template interface
interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
}

// Define the props for the TemplateGrid component
interface TemplateGridProps {
  templates: Template[];
}

// TemplateGrid component that takes an array of templates as a prop
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

// Grid container for the template cards
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
`;

export default TemplateGrid;
