import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { mealhistoryService } from '../services';
import { mealInfo } from '../types/mealhistory.type';

class MealHistoryController {
  async getHistoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = req.currentUserId!;

      const MealData = await mealhistoryService.getMealHistoryById(userId);

      res.status(200).json(MealData);
    } catch (error) {
      next(error);
    }
  }

  async getHistoryByDate(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = req.currentUserId!;
      const date: Date = new Date(req.params.date);

      const MealData = await mealhistoryService.getMealHistoryByDate(
        userId,
        date,
      );

      res.status(200).json(MealData);
    } catch (error) {
      next(error);
    }
  }

  async createHistory(req: Request, res: Response, next: NextFunction) {
    try {
      // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
      if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
        );
      }

      // req (request) 에서 데이터 가져오기

      const userId = req.currentUserId!;
      const date: Date = new Date(req.body.date);
      const category: string = req.body.category;
      const meals: [mealInfo] = req.body.meals;

      // db에 저장
      const newMealHistory = await mealhistoryService.addMealHistory(
        date,
        userId,
        {
          userId,
          date,
          category,
          meals,
        },
      );

      res.status(201).json(newMealHistory);
    } catch (error) {
      next(error);
    }
  }

  async updateHistory(req: Request, res: Response, next: NextFunction) {
    try {
      // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
      if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
        );
      }

      // req (request) 에서 데이터 가져오기
      const mealhistoryId: string = req.params.mealhistoryId;
      const date: Date = req.body.date;
      const category: string = req.body.category;
      const meals: [mealInfo] = req.body.meals;

      const toUpdate = {
        ...(mealhistoryId && { mealhistoryId }),
        ...(date && { date }),
        ...(category && { category }),
        ...(meals && { meals }),
      };

      const updatedHistory = await mealhistoryService.setHistory(
        mealhistoryId,
        toUpdate,
      );

      res.status(200).json(updatedHistory);
    } catch (error) {
      next(error);
    }
  }

  async deleteHistoryByMealHistoryId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const mealhistoryId = req.params.mealhistoryId;
      const deleteResult =
        await mealhistoryService.deleteMealHistoryByMealHistoryId(
          mealhistoryId,
        );
      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  }

  async deleteHistoryByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.currentUserId!;
      const deleteResult = await mealhistoryService.deleteMealHistoryByUserId(
        userId,
      );
      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  }
}

const mealhistoryController = new MealHistoryController();
export { mealhistoryController };
