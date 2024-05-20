import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from './NavBar';
import theme from '../styles/theme';

describe('NavBar', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
