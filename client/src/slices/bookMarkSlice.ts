import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../api';

export interface BookMarkState {
  value: BookMarkInfoState[];
}

interface BookMarkInfoState {
  meal_id: string;
}

const initialState: BookMarkState = {
  value: [],
};

//get으로 유저의 즐겨찾기 배열을 받아오자.
//즐겨찾기 배열을 받아온 후 배열에 있는 아이템은 별 색깔 바꾸기
async function getBookMark() {
  await api.get('/');
}

export const getBookMarkAsync = createAsyncThunk(
  'bookMark/getBookMark',
  async () => {
    await getBookMark();
  },
);

export const bookMarkSlice = createSlice({
  name: 'bookMark',
  initialState,
  reducers: {
    addBookMark: (state, action: PayloadAction<BookMarkInfoState>) => {
      state.value.push(action.payload);
    },
    deleteBookMark: (state, action: PayloadAction<string>) => {
      state.value.filter((meal) => meal.meal_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookMarkAsync.pending, (state) => {
        return;
      })
      .addCase(getBookMarkAsync.fulfilled, (state) => {
        state.value = [];
      })
      .addCase(getBookMarkAsync.rejected, (state) => {
        return;
      });
  },
});

export const { addBookMark, deleteBookMark } = bookMarkSlice.actions;

export default bookMarkSlice.reducer;
