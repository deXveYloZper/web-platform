import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import HomePage from '../pages/HomePage';
import useTheme from '../styles/theme';

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

describe('HomePage', () => {
  it('renders homepage with templates and testimonials', () => {
    render(
      <Provider store={store}>
        <MockedThemeProvider>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </MockedThemeProvider>
      </Provider>
    );
    // Use screen to access the rendered elements
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
