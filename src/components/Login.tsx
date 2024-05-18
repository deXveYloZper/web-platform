import { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import styled from 'styled-components';

const Login: React.FC = () => {
  // State to hold email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Firebase hook to handle sign-in
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  // Effect to navigate to dashboard if user is logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect to dashboard if user is logged in
    }
  }, [user, navigate]);

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Label>Email:</Label>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </InputGroup>
          <InputGroup>
            <Label>Password:</Label>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </InputGroup>
          <Button type="submit" disabled={loading}>Login</Button>
        </Form>
        {error && <ErrorMessage>{error.message}</ErrorMessage>} {/* Display error message if any */}
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;

// Styled components

// Container for the login page
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

// Card to hold the login form
const LoginCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

// Title of the login form
const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

// Form element
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Grouping for each input field
const InputGroup = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

// Label for input fields
const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${({ theme }) => theme.colors.text};
`;

// Input fields
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;

// Button for form submission
const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    cursor: not-allowed;
  }
`;

// Error message display
const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: red;
`;

