import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <QuickLinks>
        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
        <FooterLink to="/faqs">FAQs</FooterLink>
      </QuickLinks>
      <ContactInfo>
        <Address>123 Web Platform St, Online City, Internet</Address>
        <Email href="mailto:contact@webplatform.com">contact@webplatform.com</Email>
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
        </SocialMedia>
      </ContactInfo>
    </FooterContainer>
  );
};

// Styled components

// Container for the entire footer
const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// Container for the quick links section
const QuickLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

// Styles for each footer link
const FooterLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Container for the contact information section
const ContactInfo = styled.div`
  text-align: center;
`;

// Styles for the address text
const Address = styled.p`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

// Styles for the email link
const Email = styled.a`
  display: block;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Container for social media icons
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

// Styles for each social media icon link
const SocialIcon = styled.a`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Footer;
