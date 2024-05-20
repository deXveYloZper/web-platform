import { render } from '@testing-library/react';
import HomePage from './index';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage', () => {
  it('renders homepage with templates and testimonials', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(getByText(/Explore Websites/i)).toBeInTheDocument();
    expect(getByText(/E-commerce Template/i)).toBeInTheDocument();
    expect(getByText(/This is the best platform I have ever used!/i)).toBeInTheDocument();
  });
});
