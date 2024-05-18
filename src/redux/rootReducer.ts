import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import authReducer from './authSlice';
import selectedTemplateReducer from './selectedTemplateSlice';
import consultationReducer from './consultationSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  selectedTemplate: selectedTemplateReducer,
  consultation: consultationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
