import styled from 'styled-components';

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
  image?: string; // Optional image URL for the user's profile picture
  name: string;   // User's name
  rating: number; // User's rating out of 5
  text: string;   // Testimonial text
}

// TestimonialCard component to display user testimonials
const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, rating, text }) => {
  return (
    <Card>
      {image && <ProfileImage src={image} alt={name} />} {/* Display profile image if provided */}
      <UserInfo>
        <UserName>{name}</UserName>
        <StarRating>
          {'★'.repeat(rating)} {/* Display filled stars based on rating */}
          {'☆'.repeat(5 - rating)} {/* Display empty stars for the remaining rating */}
        </StarRating>
        <TestimonialText>{text}</TestimonialText>
      </UserInfo>
    </Card>
  );
};

// Styled components

// Card container for the testimonial
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Profile image styling
const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

// Container for user info (name, rating, and testimonial text)
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styling for the user's name
const UserName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
`;

// Styling for the star rating
const StarRating = styled.div`
  font-size: 1.25rem;
  color: gold;
  margin: 0.5rem 0;
`;

// Styling for the testimonial text
const TestimonialText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default TestimonialCard;
