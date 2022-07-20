import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../api';
import { MealData } from '../customType/meal.type';

export interface MealsState {
  value: MealData[];
  totalKcal: number;
}

interface PostMealsDataParam {
  meals: MealData[];
  category: string;
  date: string;
}

const initialState: MealsState = {
  value: [],
  totalKcal: 0,
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

async function delMealsData(id: string) {
  const data = await api.delete(`/api/mealhistory/${id}`);
  return data?.data;
}

export const delMealsDataAsync = createAsyncThunk(
  'meals/delMealsData',
  async (id: string) => {
    const data = await delMealsData(id);
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
    calTotalKcal: (state, action: PayloadAction<PostMealsDataParam[]>) => {
      const mealhistoryArr = action.payload;
      const meals = mealhistoryArr.map((el) => el.meals).flat(); // 원소 [{kcal: 1}]
      let sum = 0;
      meals.forEach((meal) => {
        sum += meal.kcal;
      });
      state.totalKcal = sum;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMealsDataAsync.fulfilled, (state) => {
        state.value = [];
      })
      .addCase(getMealsDataAsync.fulfilled, (state, action) => {
        state.value = [{ ...state, ...action.payload }];
      })
      .addCase(delMealsDataAsync.fulfilled, (state, action) => {
        state.value = [];
      });
  },
});

export const { addMeals, deleteMeals, calTotalKcal } = mealsSlice.actions;

export default mealsSlice.reducer;
