// src/styles/theme.ts
import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    // Pastels
    background: '#F9F7F7',  // Soft off-white
    primary: '#79B4B7',    // Teal pastel
    primaryLight: '#B2DFDB',  // Lighter teal
    primaryDark: '#3D6E70',   // Darker teal

    secondary: '#F2C94C',   // Yellow pastel
    secondaryLight: '#FCE38A',  // Lighter yellow

    accent: '#E0AFA0',     // Pink pastel

    // Neutrals for contrast
    text: '#333333',       // Dark gray for text
    textLight: '#666666',  // Medium gray for secondary text
    border: '#E6E6E6',     // Light gray for borders

    // Background Variations
    backgroundDark: '#222831',  // Dark background for the footer
    backgroundLight: '#f5f5f5', // Very light gray for subtle backgrounds
  },
  fontFamily: "'Open Sans', sans-serif",  // Open Sans is a versatile, modern font 
};

export default defaultTheme;
