import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';
import { setUser, setLoading, setError } from '../redux/authSlice';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/theme';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      if (userCredential?.user) {
        dispatch(setUser(userCredential.user));
        navigate('/dashboard');
      }
    } catch (err) {
      const errorMessage = (err as Error).message;
      console.error('Error logging in:', errorMessage);
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const LoginCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;

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

const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: red;
`;
