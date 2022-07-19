import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { favoriteService } from '../services';
import { FavoriteInfo } from '../types/favorite.type';

//즐겨찾기 추가
const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }

    const meal_id: string = req.body.meal_id;
    const user_id: string = req.currentUserId!;

    const favoriteInfo: FavoriteInfo = {
      meal_id,
      user_id,
    };

    const isMealExist = await favoriteService.findMealInFavorites(favoriteInfo);

    if (isMealExist) {
      throw new Error('이미 즐겨찾기에 등록된 식단입니다');
    }

    const newFavorite = await favoriteService.addFavorite(favoriteInfo);

    res.status(201).json(newFavorite);
  } catch (error) {
    next(error);
  }
};

//존재하는 모든 즐겨찾기 조회
const allFavoriteList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const favorites = await favoriteService.getAllFavorites();

    res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};

//회원별 즐겨찾기 조회
const favoriteList = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId: string = req.currentUserId!;

    const favorites = await favoriteService.getFavoritesByUser(userId);

    res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};

//즐겨찾기 개별조회
const favorite = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const meal_id: string = req.params.meal_id;

    const favoriteInfo: FavoriteInfo = {
      meal_id,
      user_id: req.currentUserId!,
    };

    const oneFavorite = await favoriteService.findMealInFavorites(favoriteInfo);

    if (!oneFavorite) {
      throw new Error('해당 식단에 관련한 즐겨찾기 정보가 없습니다.');
    }

    res.status(200).json(oneFavorite);
  } catch (error) {
    next(error);
  }
};

//즐겨찾기 개별 삭제
const deleteFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const meal_id: string = req.params.meal_id;

    const favoriteInfo: FavoriteInfo = {
      meal_id,
      user_id: req.currentUserId!,
    };

    const deleteFavorite = await favoriteService.deleteOneFavorite(
      favoriteInfo,
    );

    if (!deleteFavorite.deletedCount) {
      throw new Error('즐겨찾기 개별 삭제가 실패했습니다.');
    }

    res.status(200).json(deleteFavorite);
  } catch (error) {
    next(error);
  }
};

//즐겨찾기 유저별 전체 삭제
const deleteAllFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId: string = req.currentUserId!;

    const deleteFavorite = await favoriteService.deleteAllFavorites(userId);

    console.log(deleteFavorite);

    if (!deleteFavorite.deletedCount) {
      throw new Error('즐겨찾기 전체 삭제가 실패했습니다.');
    }

    res.status(200).json(deleteFavorite);
  } catch (error) {
    next(error);
  }
};

export {
  add,
  allFavoriteList,
  favoriteList,
  favorite,
  deleteFavorite,
  deleteAllFavorites,
};
