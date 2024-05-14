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
    },
    fontFamily,
  };

  return theme;
};

export default useTheme;
