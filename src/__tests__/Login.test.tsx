import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from '../components/Login';
import useTheme from '../styles/theme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Create mock store
const mockStore = configureStore([]);
const initialState = {
  theme: {
    primaryColor: '#007bff',
    fontFamily: 'Arial, sans-serif',
  },
};

const store = mockStore(initialState);

const MockedThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('Login', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <MockedThemeProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </MockedThemeProvider>
      </Provider>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('allows user to input email and password', () => {
    render(
      <Provider store={store}>
        <MockedThemeProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </MockedThemeProvider>
      </Provider>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password');
  });
});
