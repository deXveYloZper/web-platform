import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: string;
  layout: string;
  image: string | null;
}

const initialState: ThemeState = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  fontFamily: 'Arial',
  fontSize: '16px',
  layout: 'layout1',
  image: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPrimaryColor(state, action: PayloadAction<string>) {
      state.primaryColor = action.payload;
    },
    setSecondaryColor(state, action: PayloadAction<string>) {
      state.secondaryColor = action.payload;
    },
    setFontFamily(state, action: PayloadAction<string>) {
      state.fontFamily = action.payload;
    },
    setFontSize(state, action: PayloadAction<string>) {
      state.fontSize = action.payload;
    },
    setLayout(state, action: PayloadAction<string>) {
      state.layout = action.payload;
    },
    setImage(state, action: PayloadAction<string | null>) {
      state.image = action.payload;
    },
    saveCustomizations(state, action: PayloadAction<ThemeState>) {
      state.primaryColor = action.payload.primaryColor;
      state.secondaryColor = action.payload.secondaryColor;
      state.fontFamily = action.payload.fontFamily;
      state.fontSize = action.payload.fontSize;
      state.layout = action.payload.layout;
      state.image = action.payload.image;
    },
    resetCustomizations(state) {
      state.primaryColor = initialState.primaryColor;
      state.secondaryColor = initialState.secondaryColor;
      state.fontFamily = initialState.fontFamily;
      state.fontSize = initialState.fontSize;
      state.layout = initialState.layout;
      state.image = initialState.image;
    },
  },
});

export const {
  setPrimaryColor,
  setSecondaryColor,
  setFontFamily,
  setFontSize,
  setLayout,
  setImage,
  saveCustomizations,
  resetCustomizations,
} = themeSlice.actions;

export default themeSlice.reducer;
