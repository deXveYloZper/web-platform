import styled from 'styled-components';

interface TestimonialCardProps {
  image?: string;
  name: string;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, rating, text }) => {
  return (
    <Card>
      {image && <ProfileImage src={image} alt={name} />}
      <UserInfo>
        <UserName>{name}</UserName>
        <StarRating>
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)}
        </StarRating>
        <TestimonialText>{text}</TestimonialText>
      </UserInfo>
    </Card>
  );
};

// Styled components
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

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
`;

const StarRating = styled.div`
  font-size: 1.25rem;
  color: gold;
  margin: 0.5rem 0;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export default TestimonialCard;
