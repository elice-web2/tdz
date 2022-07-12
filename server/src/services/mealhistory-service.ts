import {
  mealhistoryModel,
  MealHistoryModel,
  MealHistoryInfo,
  MealHistoryData,
} from '../db';

class MealHistoryService {
  constructor(private mealhistoryModel: MealHistoryModel) {}

  async addMealHistory(
    mealhistoryInfo: MealHistoryInfo,
  ): Promise<MealHistoryData> {
    console.log(mealhistoryInfo);
    const createNewMeal = await this.mealhistoryModel.create(mealhistoryInfo);
    return createNewMeal;
  }

  async getMealHistory(
    user_id: string,
    date: Date,
  ): Promise<MealHistoryData[]> {
    const meals = await this.mealhistoryModel.findByDate(user_id, date);
    return meals;
  }

  async setHistory(
    mealhistory_id: string,
    toUpdate: Partial<MealHistoryInfo>,
  ): Promise<MealHistoryData | null> {
    const updatedMeal = await this.mealhistoryModel.update({
      mealhistory_id,
      update: toUpdate,
    });

    return updatedMeal;
  }

  async deleteMealHistory(mealhistory_id: string): Promise<{ result: string }> {
    const mealhistory = await this.mealhistoryModel.findByMealHistoryId(
      mealhistory_id,
    );

    if (!mealhistory) {
      throw new Error('해당 식단은 존재하지 않습니다.');
    }

    const { deletedCount } = await this.mealhistoryModel.delete(mealhistory_id);

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      throw new Error(`식단 삭제에 실패하였습니다`);
    }

    return { result: 'success' };
  }
}

const mealhistoryService = new MealHistoryService(mealhistoryModel);
export { mealhistoryService };
