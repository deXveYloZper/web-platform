import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';
import { setUser, setLoading, setError } from '../redux/authSlice';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/theme';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
  console.log('auth object before registration:', auth)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(email, password);
      console.log('auth object before registration:', auth)
      if (userCredential?.user) {
        dispatch(setUser(userCredential.user));
        navigate('/dashboard');
      }
    } catch (err) {
      const errorMessage = (err as Error).message;
      console.error('Error registering:', errorMessage);
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <RegisterContainer>
        <RegisterCard>
          <Title>Register</Title>
          <Form onSubmit={handleRegister}>
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
            <Button type="submit" disabled={loading}>Register</Button>
          </Form>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </RegisterCard>
      </RegisterContainer>
    </ThemeProvider>
  );
};

export default Register;

// Styled components

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RegisterCard = styled.div`
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
