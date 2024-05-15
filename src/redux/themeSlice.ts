import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state using that type
interface ThemeState {
  primaryColor: string;
  fontFamily: string;
  layout: string; // Add layout property
  image: string; // Add image property
}

const initialState: ThemeState = {
  primaryColor: '#0070f3',
  fontFamily: 'Arial',
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
    setFontFamily(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
    setLayout(state, action: PayloadAction<string>) { // Add setLayout reducer
      state.layout = action.payload;
    },
    setImage(state, action: PayloadAction<string>) { // Add setImage reducer
      state.image = action.payload;
    },
  },
});

export const { setPrimaryColor, setFontFamily, setLayout, setImage } = themeSlice.actions;

export default themeSlice.reducer;
