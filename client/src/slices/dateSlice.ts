import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface DateState {
  value: string;
}

const initialState: DateState = {
  value: dayjs().format('DD-MM-YYYY'),
};

// Slice 작성 예시

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    chageDate: (state, { payload }) => {
      state.value = payload;
    },
  },
  // 비동기 로직이 들어갈 시 AsyncThunk 를 작성 후 extraReducer에 추가
});

export default dateSlice.reducer;
