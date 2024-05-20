import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './Login';
import theme from '../styles/theme';

describe('Login', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('allows user to input email and password', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </ThemeProvider>
    );

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password');
  });
});
