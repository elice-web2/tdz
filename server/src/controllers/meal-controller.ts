import { Request, Response, NextFunction } from 'express';
import { mealService } from '../services';

class MealController {
  async getMeal(req: Request, res: Response, next: NextFunction) {
    try {
      const mealName = req.params.mealName;

      const MealData = await mealService.findMeal(mealName);

      res.status(200).json(MealData);
    } catch (error) {
      next(error);
    }
  }

  async addMealByUSer(req: Request, res: Response, next: NextFunction) {
    try {
      const code: string = req.body.code;
      const name: string = req.body.name;
      const kcal: number = req.body.kcal;
      const carb: number = req.body.carb;
      const protein: number = req.body.protein;
      const fat: number = req.body.fat;
      const sugars: number = req.body.sugars;
      const natrium: number = req.body.natrium;
      const cholesterol: number = req.body.cholesterol;
      const saturatedfatty: number = req.body.saturatedfatty;
      const transfat: number = req.body.transfat;
      const servingSize: number = req.body.servingSize;
      const quantity: number = req.body.quantity;
      const totalGram: number = req.body.totalGram;
      const updated_date: Date = new Date();

      const mealInfo = {
        code,
        name,
        kcal,
        carb,
        protein,
        fat,
        sugars,
        natrium,
        cholesterol,
        saturatedfatty,
        transfat,
        servingSize,
        quantity,
        totalGram,
        updated_date,
      };

      const meal = await mealService.createMeal(mealInfo);

      res.status(200).json(meal);
    } catch (error) {
      next(error);
    }
  }
}

const mealController = new MealController();
export { mealController };
