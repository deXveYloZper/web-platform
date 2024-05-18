// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      border: string; 
      primaryDark: string;
      primaryLight: string;
    };
    fontFamily: string;
  }
}
