import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../api';
import { MealData } from '../customType/meal.type';

export interface MealsState {
  value: MealData[];
}

interface PostMealsDataParam {
  meals: MealData[];
  category: string;
  date: string;
}

interface GetMealsDataParam {
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
  const data = await api.post('/api/mealhistory', mealsData);
  console.log('잘보냈어', data);
  return data.data;
}

export const postMealsDataAsync = createAsyncThunk(
  'meals/postMealsData',
  async ({ meals, category, date }: PostMealsDataParam) => {
    const data = await postMealsData({ meals, category, date });
    return data;
  },
);

async function getMealsData(date: string) {
  const data = await api.get(`/api/mealhistory/${date}`);
  return data?.data;
}

export const getMealsDataAsync = createAsyncThunk(
  'meals/getMealsData',
  async (date: string) => {
    const data = await getMealsData(date);
    return data;
  },
);

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    addMeals: (state, action: PayloadAction<MealData>) => {
      state.value.push(action.payload);
    },
    deleteMeals: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((meal) => meal._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMealsDataAsync.fulfilled, (state) => {
        state.value = [];
      })
      .addCase(getMealsDataAsync.fulfilled, (state, action) => {
        state.value = [{ ...state, ...action.payload }];
      });
  },
});

export const { addMeals, deleteMeals } = mealsSlice.actions;

export default mealsSlice.reducer;
