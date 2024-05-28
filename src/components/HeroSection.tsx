import styled from 'styled-components';

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Overlay />
      <Content>
        <Headline>Find Your Perfect Website</Headline>
        <Subheadline>Explore our vast collection of pre-designed templates and launch your online presence in minutes.</Subheadline>
        <CTAButton>Browse Templates</CTAButton>
      </Content>
    </HeroContainer>
  );
};

// Enhanced Styled Components
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh; // Ensure visibility on smaller screens
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;
  display: flex; // Use flexbox for centering
  align-items: center; 
  justify-content: center; 

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
  background: rgba(0, 0, 0, 0.5); // Slightly darker overlay for better text contrast
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px; // Limit content width for readability
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

const Headline = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem); // Responsive font size
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2; // Improved line height
`;

const Subheadline = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.8rem); // Responsive font size
  margin-bottom: 2rem;
  line-height: 1.4; // Improved line height
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem; // Increased button size
  background-color: ${({ theme }) => theme.colors.primary}; // Use theme color
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark}; // Darken on hover
  }
`;

export default HeroSection;
