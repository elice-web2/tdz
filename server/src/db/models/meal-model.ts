import { model } from 'mongoose';
import { MealSchema } from '../schemas/meal-schema';

const Meal = model<MealData>('meals', MealSchema);

export interface MealInfo {
  meal_code: string;
  meal_name: String;
  meal_kcal: Number;
  meal_carb: Number;
  meal_protein: Number;
  meal_fat: Number;
  meal_sugars: Number;
  meal_natruim: Number;
  meal_cholesterol: Number;
  meal_saturatedfatty: Number;
  meal_transfat: Number;
  updated_date: Date;
}

export interface MealData {
  _id: string;
  meal_code: string;
  meal_name: String;
  meal_kcal: Number;
  meal_carb: Number;
  meal_protein: Number;
  meal_fat: Number;
  meal_sugars: Number;
  meal_natruim: Number;
  meal_cholesterol: Number;
  meal_saturatedfatty: Number;
  meal_transfat: Number;
  updated_date: Date;
}

export class MealModel {
  // 음식 이름 찾기
  async findByMealName(meal_name: string): Promise<MealData> {
    const meal = await Meal.findOne({ meal_name });
    return meal;
  }

  async create(mealInfo: MealInfo): Promise<MealData> {
    const meal = await Meal.create(mealInfo);
    return meal;
  }

  async update(currentMeal: MealInfo, updateMeal: MealInfo): Promise<MealData> {
    await Meal.findOneAndUpdate({ currentMeal }, { updateMeal });
    return;
  }

  async deleteByName(meal_name: string): Promise<{ deletedCount: number }> {
    await Meal.findOneAndDelete({ meal_name });
    return;
  }
}

const mealModel = new MealModel();
export { mealModel };
