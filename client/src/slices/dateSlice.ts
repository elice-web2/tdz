import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface DateState {
  value: string;
}

const initialState: DateState = {
  value: dayjs(new Date()).format('YYYY-MM-DD'),
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    updateDate: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    initDate: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { updateDate, initDate } = dateSlice.actions;

export default dateSlice.reducer;
