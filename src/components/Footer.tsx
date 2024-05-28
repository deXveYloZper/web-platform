import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Added LinkedIn icon

const Footer: React.FC = () => {
  return (
    <FooterContainer>
       <Container>
      <TopSection>
        <Logo>MyWebPlatform</Logo>
        <SocialMedia>
          <SocialIcon href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
        </SocialMedia>
      </TopSection>

      <BottomSection>
        <QuickLinks>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
          <FooterLink to="/faqs">FAQs</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
        </QuickLinks>
        <Copyright>&copy; {new Date().getFullYear()} MyWebPlatform. All rights reserved.</Copyright>
      </BottomSection>
      </Container>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: #fff;
  box-sizing: border-box; // Ensure padding and border are included in width
  overflow-x: hidden;     // Prevent horizontal overflow
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;  // Center the container within the footer
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const SocialMedia = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  margin: 0 0.8rem;
  color: #fff; // White icons
  font-size: 1.8rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}; 
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #555; // Subtle separator line
  padding-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  width: auto;
`;

const FooterLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;


export default Footer;
