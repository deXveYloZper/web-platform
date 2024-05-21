import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; 
import styled, { ThemeProvider } from 'styled-components'; 
import defaultTheme from '../styles/theme'; // Import the default theme directly

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      if (userCredential?.user) {
        navigate('/dashboard'); 
      }
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}> {/* Use the default theme directly */}
      <LoginContainer data-testid="login-container">
        <LoginCard>
          <Title>Login</Title>
          <Form onSubmit={handleLogin}>
            <InputGroup>
              <Label htmlFor="email-input">Email:</Label>
              <Input 
                data-testid="email-input"
                type="email" 
                id="email-input"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password-input">Password:</Label>
              <Input 
                data-testid="password-input"
                type="password" 
                id="password-input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </InputGroup>
            <Button type="submit" data-testid="login-button" disabled={loading}>
              Login
            </Button>
          </Form>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </LoginCard>
      </LoginContainer>
    </ThemeProvider>
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
