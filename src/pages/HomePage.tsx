import styled from 'styled-components';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import TemplateGrid from '../components/TemplateGrid';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Footer from '../components/Footer';

const templates = [
  // Example templates
  {
    id: '1',
    image: 'https://via.placeholder.com/300',
    name: 'E-commerce Template',
    description: 'A modern and responsive e-commerce template.',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/300',
    name: 'Business Template',
    description: 'A professional template for businesses.',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/300',
    name: 'Blog Template',
    description: 'A clean and stylish template for blogs.',
  },
  // Add more templates as needed
];

const testimonials = [
  {
    id: '1',
    image: 'https://via.placeholder.com/80',
    name: 'John Doe',
    rating: 5,
    text: 'This is the best platform I have ever used!',
  },
  {
    id: '2',
    name: 'Jane Smith',
    rating: 4,
    text: 'Great templates and excellent customer service.',
  },
  // Add more testimonials as needed
];

const HomePage: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <HeroSection />
      <TemplateGrid templates={templates} />
      <TestimonialsCarousel testimonials={testimonials} />
      <Footer />
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
