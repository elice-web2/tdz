import { mealModel, MealModel, MealInfo, MealData } from '../db';

class MealService {
  constructor(private mealModel: MealModel) {}

  async getMeal(meal_name: string): Promise<MealData> {
    const meal = await this.mealModel.findByMealName(meal_name);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!meal) {
      throw new Error('해당 음식은 존재하지 않습니다.');
    }

    return meal;
  }

  async addMeal(meal_name: string, mealInfo: MealInfo) {
    // 이름 확인 후 없으면 DB 저장
    const meal = await this.mealModel.findByMealName(meal_name);

    if (!meal) {
      // DB에 없을 때
      //API에서 가져와 반환
    } else {
      return;
    }
  }

  async deleteMeal(meal_name: string): Promise<{ result: string }> {
    const meal = await this.mealModel.findByMealName(meal_name);
    if (!meal) {
      throw new Error('해당 음식은 존재하지 않습니다.');
    }

    const { deletedCount } = await this.mealModel.deleteByName(meal_name);

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      throw new Error(`${meal_name} 음식 삭제에 실패하였습니다`);
    }

    return { result: 'success' };
  }
}
