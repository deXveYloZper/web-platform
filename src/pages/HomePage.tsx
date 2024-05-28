import styled from 'styled-components';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <Container>
      <HeroSection />
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;  // Prevent horizontal scrolling
`;

export default HomePage;
