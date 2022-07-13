import { mealhistoryModel, MealHistoryModel } from '../db';
import {
  MealHistoryInfo,
  MealHistoryData,
} from '../customType/mealhistory.type';

class MealHistoryService {
  constructor(private mealhistoryModel: MealHistoryModel) {}

  async addMealHistory(
    mealhistoryInfo: MealHistoryInfo,
  ): Promise<MealHistoryData> {
    const createNewMeal = await this.mealhistoryModel.create(mealhistoryInfo);
    return createNewMeal;
  }

  async getMealHistoryById(userId: string): Promise<MealHistoryData[]> {
    const meals = await this.mealhistoryModel.findById(userId);

    if (!meals) {
      throw new Error('조회된 식단이 없습니다.');
    }

    return meals;
  }

  async getMealHistoryByDate(
    userId: string,
    date: Date,
  ): Promise<MealHistoryData[]> {
    const meals = await this.mealhistoryModel.findByDate(userId, date);

    if (!meals) {
      throw new Error('조회된 식단이 없습니다.');
    }

    return meals;
  }

  async setHistory(
    mealhistoryId: string,
    toUpdate: Partial<MealHistoryInfo>,
  ): Promise<MealHistoryData> {
    const mealhistory = await this.mealhistoryModel.findByMealHistoryId(
      mealhistoryId,
    );

    if (!mealhistory) {
      throw new Error('해당 식단은 존재하지 않습니다.');
    }

    const updatedMeal = await this.mealhistoryModel.update({
      mealhistoryId,
      update: toUpdate,
    });

    if (updatedMeal === null) {
      throw new Error('식단이 수정되지 않았습니다.');
    }

    return updatedMeal;
  }

  async deleteMealHistory(mealhistoryId: string): Promise<{ result: string }> {
    const mealhistory = await this.mealhistoryModel.findByMealHistoryId(
      mealhistoryId,
    );

    if (!mealhistory) {
      throw new Error('해당 식단은 존재하지 않습니다.');
    }

    const { deletedCount } = await this.mealhistoryModel.delete(mealhistoryId);

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      throw new Error(`식단 삭제에 실패하였습니다`);
    }

    return { result: 'success' };
  }
}

const mealhistoryService = new MealHistoryService(mealhistoryModel);
export { mealhistoryService };
