import { model } from 'mongoose';
import { FavoriteSchema } from '../schemas/favorite-schema';
import { FavoriteInfo, FavoriteData } from '../../customType/favorite.type';

const Favorite = model<FavoriteData>('favorites', FavoriteSchema);

export class FavoriteModel {
  //즐겨찾기 고유 번호로 찾기
  async findById(favoriteId: string): Promise<FavoriteData | null> {
    return await Favorite.findOne({ _id: favoriteId }).lean();
  }
  //즐겨찾기 유저별로 반환
  async findByUser(userId: string): Promise<FavoriteData | null> {
    return await Favorite.findOne({ user_id: userId }).lean();
  }
  //favoriteInfo Object를 받아 생성
  async create(favoriteInfo: FavoriteInfo): Promise<FavoriteData> {
    return await Favorite.create(favoriteInfo);
  }
  //모든 목록 조회
  async findAll(): Promise<FavoriteData[]> {
    return await Favorite.find({});
  }

  async deleteOneFavorite(
    favoriteId: string,
  ): Promise<{ deletedCount?: number }> {
    return await Favorite.deleteOne({ _id: favoriteId });
  }
}
