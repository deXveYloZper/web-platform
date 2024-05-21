import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '../components/Login';  

const mockStore = configureStore();
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const mockSignInWithEmailAndPassword = jest.fn();

jest.mock('react-firebase-hooks/auth', () => ({
  useSignInWithEmailAndPassword: () => [
    mockSignInWithEmailAndPassword,
    null, // User is initially null (not logged in)
    false, // Loading state
    null, // Error is initially null
  ],
}));


describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    // Mock theme object (adjust properties as needed)
    const mockTheme = {
      colors: {
        background: '#ffffff',
        text: '#000000',
        primary: '#007bff',
        // ... other colors
      },
      fontFamily: 'Arial, sans-serif',
    };

    // Mock the custom hook
    jest.mock('../styles/theme', () => () => mockTheme); // Mock the theme hook to return the mockTheme object

    render(
      <Provider store={mockStore({})}> 
          <BrowserRouter>
            <Login /> 
          </BrowserRouter>
      </Provider>
    );
    
    // Test elements exist
    expect(screen.getByTestId('login-container')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByTestId('login-button')).toBeInTheDocument(); 
  });

  it('allows user to input email and password and submit', async () => { 
    // Mock theme object (adjust properties as needed)
    const mockTheme = {
      colors: {
        background: '#ffffff',
        text: '#000000',
        primary: '#007bff',
        // ... other colors
      },
      fontFamily: 'Arial, sans-serif',
    };

    // Mock the custom hook
    jest.mock('../styles/theme', () => () => mockTheme); // Mock the theme hook to return the mockTheme object
    render(
      <Provider store={mockStore({})}>
          <BrowserRouter>
            <Login /> 
          </BrowserRouter>
      </Provider>
    );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByTestId('login-button');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password');

    // Mock a successful login
    mockSignInWithEmailAndPassword.mockResolvedValueOnce({ user: {} });

    fireEvent.click(loginButton);

    // Ensure the sign-in function was called with the correct credentials
    expect(mockSignInWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'password');

    // If successful login should redirect (need to adjust the route)
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard'); 
  });
  // Add tests for error handling and loading state 
});

