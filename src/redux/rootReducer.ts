// src/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;