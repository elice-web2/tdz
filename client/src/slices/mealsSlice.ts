import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../api';

export interface MealsState {
  value: MealInfoState[];
}

interface MealInfoState {
  code: string;
  kcal: number;
  name: string;
  carb: number;
  protein: number;
  fat: number;
  natruim: number;
  cholesterol: number;
  transfat: number;
  saturatedfatty: number;
  servingSize: number;
  quantity: number;
  totalGram: number;
}

interface PostMealsDataParam {
  meals: MealInfoState[];
  category: string;
  date: string;
}

const initialState: MealsState = {
  value: [],
};

async function postMealsData({ meals, category, date }: PostMealsDataParam) {
  const mealsData = {
    meals,
    category,
    date,
  };
  await api.post('/mealhistory', mealsData);
}

export const postMealsDataAsync = createAsyncThunk(
  'meals/postMealsData',
  async ({ meals, category, date }: PostMealsDataParam) => {
    await postMealsData({ meals, category, date });
  },
);

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    addMeals: (state, action: PayloadAction<MealInfoState>) => {
      state.value.push(action.payload);
    },
    deleteMeals: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((meal) => meal.code !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMealsDataAsync.pending, (state) => {
        return;
      })
      .addCase(postMealsDataAsync.fulfilled, (state) => {
        state.value = [];
      })
      .addCase(postMealsDataAsync.rejected, (state) => {
        return;
      });
  },
});

export const { addMeals, deleteMeals } = mealsSlice.actions;

export default mealsSlice.reducer;
