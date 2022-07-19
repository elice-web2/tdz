import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface DateState {
  value: string;
}

const initialState: DateState = {
  value: dayjs(new Date()).format('YYYY-MM-DD'),
};

// Slice 작성 예시

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
  // 비동기 로직이 들어갈 시 AsyncThunk 를 작성 후 extraReducer에 추가
});

export const { updateDate, initDate } = dateSlice.actions;

export default dateSlice.reducer;
