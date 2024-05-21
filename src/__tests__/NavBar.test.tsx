import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from '../components/NavBar';
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

describe('NavBar', () => {
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <MockedThemeProvider>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        </MockedThemeProvider>
      </Provider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
