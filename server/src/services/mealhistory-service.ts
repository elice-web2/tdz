import { mealhistoryModel, MealHistoryModel } from '../db';
import { MealHistoryInfo, MealHistoryData } from '../types/mealhistory.type';
import { calendarService, userService } from '../services';

class MealHistoryService {
  constructor(private mealhistoryModel: MealHistoryModel) {}

  async addMealHistory(
    date: Date,
    userId: string,
    mealhistoryInfo: MealHistoryInfo,
  ): Promise<MealHistoryData> {
    const createNewMeal = await this.mealhistoryModel.create(mealhistoryInfo);

    const meals = await this.mealhistoryModel.findByDate(userId, date);
    const stamps = await calendarService.getCalendarStampByDate(userId, date);

    // 날짜별 식단 조회 시 식단 객채가 1개일 때 캘린더 도장 생성
    if (meals?.length === 1 && stamps?.length === 0) {
      const userInfo = await userService.getUserData(userId);

      if (!userInfo) {
        new Error('해당 유저의 정보가 존재하지 않습니다.');
      }

      /*
      date : 해당 날짜
      goalKcal : 유저 정보에 있는 목표 칼로리
      currentKcal : 등록된 식단 총 칼로리
      mode  : 유저 정보에 있는 mode
      isSuccess : 모드와 골 칼로리와 현재 총 칼로리를 보고 성공과 실패 여부 나누기
      todayWeight : 현재 유저에 등록된 몸무게 정보
      */

      const mealData = meals[0].meals[0];

      const goalKcal = userInfo!.nutrient.kcal;
      const currentKcal = mealData.kcal;
      const carbSum = mealData.carb;
      const proteinSum = mealData.protein;
      const fatSum = mealData.fat;
      const sugarsSum = mealData.sugars;
      const natriumSum = mealData.natrium;
      const cholesterolSum = mealData.cholesterol;
      const saturatedfattySum = mealData.saturatedfatty;
      const transfatSum = mealData.transfat;

      const mode = userInfo!.mode;
      let isSuccess;
      if (mode === 'INC') {
        if (currentKcal > goalKcal) isSuccess = true;
        else isSuccess = false;
      } else {
        if (currentKcal < goalKcal) isSuccess = true;
        else isSuccess = false;
      }
      const todayWeight = userInfo!.current_weight;

      console.log(meals[0].meals[0]);

      await calendarService.addCalendarStamp({
        userId,
        date,
        currentKcal,
        goalKcal,
        mode,
        isSuccess,
        todayWeight,
        carbSum,
        proteinSum,
        fatSum,
        sugarsSum,
        natriumSum,
        cholesterolSum,
        saturatedfattySum,
        transfatSum,
      });
    }

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

  async deleteMealHistoryByMealHistoryId(
    mealhistoryId: string,
  ): Promise<{ result: string }> {
    const mealhistory = await this.mealhistoryModel.findByMealHistoryId(
      mealhistoryId,
    );

    if (!mealhistory) {
      throw new Error('해당 식단은 존재하지 않습니다.');
    }

    const { deletedCount } = await this.mealhistoryModel.deleteByMealHistoryId(
      mealhistoryId,
    );

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      throw new Error(`식단 삭제에 실패하였습니다`);
    }

    return { result: 'success' };
  }

  async deleteMealHistoryByUserId(userId: string): Promise<{ result: string }> {
    const mealhistory = await this.mealhistoryModel.findById(userId);

    // if (!mealhistory) {
    //   throw new Error('삭제할 식단은 존재하지 않습니다.');
    // }

    // const { deletedCount } = await this.mealhistoryModel.deleteByUserId(userId);

    // // 삭제에 실패한 경우, 에러 메시지 반환

    // if (deletedCount === 0) {
    //   throw new Error(`식단 삭제에 실패하였습니다`);
    // }

    return { result: 'success' };
  }
}

const mealhistoryService = new MealHistoryService(mealhistoryModel);
export { mealhistoryService };
