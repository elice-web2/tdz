import { model } from 'mongoose';
import { MealHistorySchema } from '../schemas/mealhistory-schema';
import {
  MealHistoryInfo,
  MealHistoryData,
  ToUpdate,
} from '../../customType/mealhistory.type';
const MealHistory = model<MealHistoryData>('mealhistory', MealHistorySchema);

export class MealHistoryModel {
  async findByDate(
    userId: string,
    date: Date,
  ): Promise<MealHistoryData[] | null> {
    return await MealHistory.find({ userId, date }).lean();
  }

  async findByMealHistoryId(
    mealhistoryId: string,
  ): Promise<MealHistoryData | null> {
    return await MealHistory.findOne({ _id: mealhistoryId }).lean();
  }

  async create(mealhistoryInfo: MealHistoryInfo): Promise<MealHistoryData> {
    return await MealHistory.create(mealhistoryInfo);
  }

  async update({
    mealhistoryId,
    update,
  }: ToUpdate): Promise<MealHistoryData | null> {
    const filter = { _id: mealhistoryId };
    const option = { new: true };
    const updatedmealhistory = await MealHistory.findOneAndUpdate(
      filter,
      update,
      option,
    );
    return updatedmealhistory;
  }

  async delete(mealhistoryId: string): Promise<{ deletedCount?: number }> {
    return await MealHistory.deleteOne({ _id: mealhistoryId });
  }
}

const mealhistoryModel = new MealHistoryModel();

export { mealhistoryModel };
