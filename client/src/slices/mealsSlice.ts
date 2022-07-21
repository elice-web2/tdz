import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from 'api';
import { MealData } from 'customType/meal.type';

export interface MealsState {
  value: MealData[];
  totalNutrient: {
    kcal: number;
    carb: number;
    protein: number;
    fat: number;
    sugars: number;
    natrium: number;
    cholesterol: number;
    saturatedfatty: number;
    transfat: number;
  };
}

interface PostMealsDataParam {
  meals: MealData[];
  category: string;
  date: string;
}

const initialState: MealsState = {
  value: [],
  totalNutrient: {
    kcal: 0,
    carb: 0,
    protein: 0,
    fat: 0,
    sugars: 0,
    natrium: 0,
    cholesterol: 0,
    saturatedfatty: 0,
    transfat: 0,
  },
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
    calTotalNutrient: (state, action: PayloadAction<PostMealsDataParam[]>) => {
      const meals = action.payload.map((el) => el.meals).flat(); // 원소 [{kcal: 1}]
      const totalNutrient = meals.reduce((acc, meal) => {
        return {
          kcal: acc.kcal + meal.kcal,
          carb: acc.carb + meal.carb,
          cholesterol: acc.cholesterol + meal.cholesterol,
          fat: acc.fat + meal.fat,
          natrium: acc.natrium + meal.natrium,
          protein: acc.protein + meal.protein,
          saturatedfatty: acc.saturatedfatty + meal.saturatedfatty,
          sugars: acc.sugars + meal.sugars,
          transfat: acc.transfat + meal.transfat,
        };
      }, initialState.totalNutrient);
      state.totalNutrient = totalNutrient;
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
      .addCase(delMealsDataAsync.fulfilled, (state) => {
        state.value = [];
      });
  },
});

export const { addMeals, deleteMeals, calTotalNutrient } = mealsSlice.actions;

export default mealsSlice.reducer;
