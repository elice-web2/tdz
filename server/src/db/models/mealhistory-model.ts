import { model } from 'mongoose';
// import { MealSchema } from '../schemas/meal-schema';
import { MealHistorySchema } from '../schemas/mealhistory-schema';

const MealHistory = model<MealHistoryData>('mealhistory', MealHistorySchema);

export interface mealInfo {
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

export interface MealHistoryInfo {
  user_id: string;
  meal_category: string;
  date: Date;
  meals: [mealInfo];
}

export interface MealHistoryData {
  _id: string;
  user_id: string;
  meal_category: string;
  date: Date;
  meals: [mealInfo];
}

interface ToUpdate {
  mealhistory_id: string;
  update: {
    [key: string]: string | number | Date | [mealInfo];
  };
}

export class MealHistoryModel {
  async findByDate(user_id: string, date: Date): Promise<MealHistoryData[]> {
    const meals = await MealHistory.find({ user_id, date });
    return meals;
  }

  async findByMealHistoryId(
    mealhistory_id: string,
  ): Promise<MealHistoryData | null> {
    const mealhistory = await MealHistory.findOne({ _id: mealhistory_id });
    return mealhistory;
  }

  async create(mealhistoryInfo: MealHistoryInfo): Promise<MealHistoryData> {
    const mealhistory = await MealHistory.create(mealhistoryInfo);
    return mealhistory;
  }

  async update({
    mealhistory_id,
    update,
  }: ToUpdate): Promise<MealHistoryData | null> {
    const filter = { _id: mealhistory_id };
    const option = { returnOriginal: false };
    const updatedmealhistory = await MealHistory.findOneAndUpdate(
      filter,
      update,
      option,
    );
    console.log('update', updatedmealhistory);
    return updatedmealhistory;
  }

  async delete(mealhistory_id: string): Promise<{ deletedCount?: number }> {
    const result = await MealHistory.deleteOne({ _id: mealhistory_id });
    return result;
  }
}

const mealhistoryModel = new MealHistoryModel();

export { mealhistoryModel };
