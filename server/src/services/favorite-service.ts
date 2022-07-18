import { FavoriteModel, favoriteModel } from '../db';
import { FavoriteInfo, FavoriteData } from '../types/favorite.type';
import { mealService } from './meal-service';

class FavoriteService {
  constructor(private favoriteModel: FavoriteModel) {
    this.favoriteModel = favoriteModel;
  }

  //즐겨찾기 등록
  async addFavorite(favoriteInfo: FavoriteInfo): Promise<FavoriteData> {
    return await this.favoriteModel.create(favoriteInfo);
  }

  //즐겨찾기 전체 조회
  async getAllFavorites(): Promise<FavoriteData[]> {
    return await this.favoriteModel.findAll();
  }

  //사용자별 즐겨찾기 조회
  async getFavoritesByUser(userId: string): Promise<FavoriteData[]> {
    const favorites = await this.favoriteModel.findByUser(userId);

    //반환값이 없을 경우 빈 객체 반환
    if (!favorites) {
      return {} as Promise<FavoriteData[]>;
    }

    return favorites;
  }

  //즐겨찾기 하나 조회
  async getFavorite(favoriteId: string): Promise<FavoriteData | null> {
    return await this.favoriteModel.findById(favoriteId);
  }

  //유저의 즐겨찾기 내에서 해당 식단이 있는지 검색
  async findMealInFavorites(
    favoriteInfo: FavoriteInfo,
  ): Promise<FavoriteData | null> {
    const findMealInFavorites = await this.favoriteModel.findByMealId(
      favoriteInfo,
    );

    if (!findMealInFavorites) {
      return null;
    }

    return findMealInFavorites;
  }

  //즐겨찾기 하나 삭제
  async deleteOneFavorite(
    favoriteInfo: FavoriteInfo,
  ): Promise<{ deletedCount?: number }> {
    const favorite = await this.favoriteModel.findByMealId(favoriteInfo);

    if (!favorite) {
      throw new Error(
        '해당하는 즐겨찾기가 없습니다. 다시 한 번 확인해 주세요.',
      );
    }

    return await this.favoriteModel.deleteOneFavorite(favoriteInfo);
  }

  //유저별 즐겨찾기 전체 삭제
  async deleteAllFavorites(userId: string): Promise<{ deletedCount?: number }> {
    return await this.favoriteModel.deleteFavoritesByUser(userId);
  }
}

const favoriteService = new FavoriteService(favoriteModel);

export { favoriteService };
