// src/pages/index.tsx
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to My Web Platform</Title>
      <Description>
        This platform offers ready-made customizable websites across various categories.
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default HomePage;
