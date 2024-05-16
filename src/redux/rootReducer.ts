import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
