import { model } from 'mongoose';
import { FavoriteSchema } from '../schemas/favorite-schema';
import { MealSchema } from '../schemas/meal-schema';
import { FavoriteInfo, FavoriteData } from '../../customType/favorite.type';

const Favorite = model<FavoriteData>('favorites', FavoriteSchema);

export class FavoriteModel {
  //즐겨찾기 고유 번호로 찾기
  async findById(favoriteId: string): Promise<FavoriteData | null> {
    return await Favorite.findOne({ _id: favoriteId })
      .populate('meal_id')
      .lean();
  }
  //즐겨찾기 유저별로 반환
  async findByUser(userId: string): Promise<FavoriteData[] | null> {
    return await Favorite.find({ user_id: userId }).populate('meal_id').lean();
  }
  //favoriteInfo Object를 받아 생성
  async create(favoriteInfo: FavoriteInfo): Promise<FavoriteData> {
    return await Favorite.create(favoriteInfo);
  }
  //모든 목록 조회
  async findAll(): Promise<FavoriteData[]> {
    return await Favorite.find({}).populate('meal_id');
  }

  async findByMealId(favoriteInfo: FavoriteInfo): Promise<FavoriteData | null> {
    return await Favorite.findOne({
      $and: [
        { user_id: favoriteInfo.user_id },
        { meal_id: favoriteInfo.meal_id },
      ],
    });
  }

  //즐겨찾기 하나 삭제
  async deleteOneFavorite(
    favoriteId: string,
  ): Promise<{ deletedCount?: number }> {
    return await Favorite.deleteOne({ _id: favoriteId });
  }

  //즐겨찾기 전체 삭제
  async deleteFavoritesByUser(
    userId: string,
  ): Promise<{ deletedCount?: number }> {
    return await Favorite.deleteMany({ user_id: userId });
  }
}

const favoriteModel = new FavoriteModel();

export { favoriteModel };
