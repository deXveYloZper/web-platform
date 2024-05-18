// src/redux/selectedTemplateSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Template {
  id: string;
  image: string;
  name: string;
  description: string;
  features: string[];
}

interface SelectedTemplateState {
  template: Template | null;
}

const initialState: SelectedTemplateState = {
  template: null,
};

const selectedTemplateSlice = createSlice({
  name: 'selectedTemplate',
  initialState,
  reducers: {
    setSelectedTemplate(state, action: PayloadAction<Template>) {
      state.template = action.payload;
    },
    clearSelectedTemplate(state) {
      state.template = null;
    },
  },
});

export const { setSelectedTemplate, clearSelectedTemplate } = selectedTemplateSlice.actions;
export default selectedTemplateSlice.reducer;
