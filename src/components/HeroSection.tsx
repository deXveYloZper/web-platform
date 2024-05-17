import styled from 'styled-components';

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Overlay />
      <Content>
        <Headline>Introducing Our Service</Headline>
        <Subheadline>Explore our pre-made websites and get started today!</Subheadline>
        <CTAButton>Explore Websites</CTAButton>
      </Content>
    </HeroContainer>
  );
};

// Styled components
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;

  @media (max-width: 768px) {
    background: url('/path-to-your-image-mobile.jpg') no-repeat center center/cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // Slight overlay for text readability
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default HeroSection;
