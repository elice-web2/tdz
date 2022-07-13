import { Router } from 'express';
import { mealhistoryController } from '../controllers';
const mealhistoryRouter = Router();

// 날짜별 식단 조회
mealhistoryRouter.get('/:id/:date', mealhistoryController.getHistory);

// 식단 등록
mealhistoryRouter.post('/:id', mealhistoryController.createHistory);

// 식단 수정
mealhistoryRouter.patch(
  '/:mealhistory_id',
  mealhistoryController.updateHistory,
);

// 식단 삭제
mealhistoryRouter.delete(
  '/:mealhistory_id',
  mealhistoryController.deletHistory,
);

export { mealhistoryRouter };
