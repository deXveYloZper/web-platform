import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConsultationState {
  date: Date | null;
}

const initialState: ConsultationState = {
  date: null,
};

const consultationSlice = createSlice({
  name: 'consultation',
  initialState,
  reducers: {
    setConsultationDate(state, action: PayloadAction<Date>) {
      state.date = action.payload;
    },
    clearConsultationDate(state) {
      state.date = null;
    },
  },
});

export const { setConsultationDate, clearConsultationDate } = consultationSlice.actions;
export default consultationSlice.reducer;
