// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      border: string; 
      primaryDark: string;
      primaryLight: string;
      secondaryLight: string;
      backgroundDark: string;
      backgroundLight: string;
      accent: string;
      textLight: string;
    };
    fontFamily: string;
  }
}
