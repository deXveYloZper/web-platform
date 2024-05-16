// src/styles/theme.ts
import { DefaultTheme } from 'styled-components';
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';

const useTheme = (): DefaultTheme => {
  const { primaryColor, fontFamily } = useSelector((state: RootState) => state.theme);

  const theme: DefaultTheme = {
    colors: {
      background: '#ffffff',
      text: '#000000',
      primary: primaryColor,
      border: '#e0e0e0', // Added border color
      primaryDark: '#0056b3', // Added primary dark color
    },
    fontFamily,
  };

  return theme;
};

export default useTheme;

