import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import authReducer from './authSlice';
import selectedTemplateReducer from './selectedTemplateSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  selectedTemplate: selectedTemplateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
