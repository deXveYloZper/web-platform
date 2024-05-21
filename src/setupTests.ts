import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';
import 'jest-styled-components';
import './setupFirebaseMocks';

// Optional: Adjust RTL configurations
configure({ testIdAttribute: 'data-testid' });

if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
}
