//src/pages/index.tsx
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      {/* Additional sections can be added here */}
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default HomePage;
