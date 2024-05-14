import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  primaryColor: string;
  fontFamily: string;
}

const initialState: ThemeState = {
  primaryColor: '#0070f3',
  fontFamily: 'Arial',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPrimaryColor(state, action: PayloadAction<string>) {
      state.primaryColor = action.payload;
    },
    setFontFamily(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
  },
});

export const { setPrimaryColor, setFontFamily } = themeSlice.actions;

export default themeSlice.reducer;
