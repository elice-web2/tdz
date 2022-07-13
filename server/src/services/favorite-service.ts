import { FavoriteModel, favoriteModel } from '../db';
import { FavoriteInfo, FavoriteData } from '../customType/favorite.type';

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

  //즐겨찾기 하나 삭제
  async deleteOneFavorite(
    favoriteId: string,
  ): Promise<{ deletedCount?: number }> {
    const favorite = await this.favoriteModel.findById(favoriteId);

    if (!favorite) {
      throw new Error(
        '해당하는 즐겨찾기가 없습니다. 다시 한 번 확인해 주세요.',
      );
    }

    return await this.favoriteModel.deleteOneFavorite(favoriteId);
  }

  //유저별 즐겨찾기 전체 삭제
  async deleteAllFavorites(userId: string): Promise<{ deletedCount?: number }> {
    return await this.favoriteModel.deleteFavoritesByUser(userId);
  }
}

const favoriteService = new FavoriteService(favoriteModel);

export { favoriteService };
