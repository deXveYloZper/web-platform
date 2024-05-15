// src/redux/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state using that type
interface ThemeState {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: string;
  layout: string; // Add layout property
  image: string; // Add image property
}

const initialState: ThemeState = {
  primaryColor: '#0070f3',
  secondaryColor: '#ff4081',
  fontFamily: 'Arial',
  fontSize: '16px',
  layout: 'layout1', // Default layout
  image: '', // Default image
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPrimaryColor(state, action: PayloadAction<string>) {
      state.primaryColor = action.payload;
    },
    setSecondaryColor(state, action: PayloadAction<string>) { // New action for secondary color
      state.secondaryColor = action.payload;
    },
    setFontFamily(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
    setFontSize(state, action: PayloadAction<string>) { // New action for font size
      state.fontSize = action.payload;
    },
    setLayout(state, action: PayloadAction<string>) {
      state.layout = action.payload;
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
  },
});

export const { setPrimaryColor, setSecondaryColor, setFontFamily, setFontSize, setLayout, setImage } = themeSlice.actions;

export default themeSlice.reducer;
