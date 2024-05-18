import styled from 'styled-components';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

// Define the structure of a testimonial
interface Testimonial {
  id: string;
  image?: string; // Optional image URL for the user's profile picture
  name: string;   // User's name
  rating: number; // User's rating out of 5
  text: string;   // Testimonial text
}

// Define the props for the TestimonialsCarousel component
interface TestimonialsCarouselProps {
  testimonials: Testimonial[]; // Array of testimonial objects
}

// TestimonialsCarousel component to display user testimonials in a carousel format
const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  // Slider settings for the carousel
  const settings = {
    dots: true,          // Display dots for navigation
    infinite: true,      // Infinite loop scrolling
    speed: 500,          // Transition speed in milliseconds
    slidesToShow: 1,     // Number of slides to show at a time
    slidesToScroll: 1,   // Number of slides to scroll at a time
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            image={testimonial.image}
            name={testimonial.name}
            rating={testimonial.rating}
            text={testimonial.text}
          />
        ))}
      </StyledSlider>
    </CarouselContainer>
  );
};

// Styled components

// Container for the carousel
const CarouselContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

// Styling for the slider
const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots li button:before {
    color: ${({ theme }) => theme.colors.primary};
  }

  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default TestimonialsCarousel;
