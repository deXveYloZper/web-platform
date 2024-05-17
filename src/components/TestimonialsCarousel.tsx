import styled from 'styled-components';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: string;
  image?: string;
  name: string;
  rating: number;
  text: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
const CarouselContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

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
