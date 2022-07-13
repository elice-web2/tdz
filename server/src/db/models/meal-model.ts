import { model } from 'mongoose';
import { MealSchema } from '../schemas/meal-schema';
import { MealData, MealInfo } from '../../customType/meal.type';
const Meal = model<MealData>('meals', MealSchema);

export class MealModel {
  // 음식 이름 찾기
  async findByMealName(mealName: string): Promise<MealData[]> {
    // const regex = (pattern) => new RegExp(`.*${pattern}.*`);
    // const name  = regex(mealName);
    // if(!name){
    //   throw new Error(`${mealName}을 조회할 수 없습니다.`);
    // }
    // return await Meal.find({ name: { $regex: name } }).lean();
    return await Meal.find({ name: mealName }).lean();
  }

  async create(mealInfo: MealInfo): Promise<MealData> {
    return await Meal.create(mealInfo);
  }

  /*
  async update(
    currentMeal: MealInfo,
    updateMeal: MealInfo,
  ): Promise<MealData | null> {
    return await Meal.findOneAndUpdate({ currentMeal }, { updateMeal }).lean();
  }
  */

  /*
  async deleteByName(
    meal_name: string,
  ): Promise<{ deletedCount: number } | null> {
    return await Meal.findOneAndDelete({ meal_name }).lean();
  }
  */
}

const mealModel = new MealModel();
export { mealModel };
