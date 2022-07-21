import { mealModel, MealModel } from '../db';
import { MealData, MealInfo } from '../types/meal.type';
import axios from 'axios';

class MealService {
  constructor(private mealModel: MealModel) {}

  async findMeal(mealName: string): Promise<MealData[]> {
    const meals = await this.mealModel.findByMealName(mealName);

    // 검색 시 음식이 존재하지 않으면
    if (Array.isArray(meals) && meals.length === 0) {
      const addMeals = await this.addMeal(mealName);

      // DB 저장 후에도 값이 없으면
      if (Array.isArray(addMeals) && addMeals.length === 0) {
        throw new Error(`${mealName}을 조회할 수 없습니다.`);
      } else return addMeals;
    }

    if (!meals) {
      throw new Error(`${mealName}을 조회할 수 없습니다.`);
    }

    return meals;
  }

  async addMeal(mealName: string): Promise<MealData[]> {
    // api 요청
    const { data, statusText } = await axios.get(
      `http://openapi.foodsafetykorea.go.kr/api/8eef77f2c1c242958e9c/I2790/json/1/20/DESC_KOR=${encodeURI(
        mealName,
      )}`,
    );

    console.log(data);

    if (statusText !== 'OK') {
      throw new Error(
        `Could not get the meal data from the remote source: openapi.foodsafetykorea.go.kr`,
      );
    }

    const mealDataList = data.I2790.row;

    for (let i = 0; i < mealDataList.length; i++) {
      const meal = mealDataList[i];

      const code: string = meal.FOOD_CD;
      const name: string = meal.DESC_KOR;
      const kcal: number = Number(meal.NUTR_CONT1);
      const carb: number = Number(meal.NUTR_CONT2);
      const protein: number = Number(meal.NUTR_CONT3);
      const fat: number = Number(meal.NUTR_CONT4);
      const sugars: number = Number(meal.NUTR_CONT5);
      const natrium: number = Number(meal.NUTR_CONT6);
      const cholesterol: number = Number(meal.NUTR_CONT7);
      const saturatedfatty: number = Number(meal.NUTR_CONT8);
      const transfat: number = Number(meal.NUTR_CONT9);
      const servingSize: number = Number(meal.SERVING_SIZE);
      const quantity: number = 1;
      const totalGram: number = servingSize;
      const updated_date: Date = new Date();

      const mealInfo = {
        code,
        name,
        kcal,
        carb,
        protein,
        fat,
        sugars,
        natrium,
        cholesterol,
        saturatedfatty,
        transfat,
        servingSize,
        quantity,
        totalGram,
        updated_date,
      };

      await mealModel.create(mealInfo);
    }

    const meals = await this.mealModel.findByMealName(mealName);

    if (!meals) {
      throw new Error(`${mealName}을 조회할 수 없습니다.`);
    }
    return meals;
  }

  async createMeal(mealInfo: MealInfo): Promise<MealData> {
    const meal = await mealModel.create(mealInfo);
    return meal;
  }

  /*
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
  */
}
const mealService = new MealService(mealModel);
export { mealService };
