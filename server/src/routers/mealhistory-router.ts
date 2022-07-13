import { Router } from 'express';
import { mealhistoryController } from '../controllers';
import { errorHandler, loginRequired } from '../middlewares';
const mealhistoryRouter = Router();

// 날짜별 식단 조회
mealhistoryRouter.get(
  '/:date',
  loginRequired,
  mealhistoryController.getHistory,
);

// 식단 등록
mealhistoryRouter.post('/', loginRequired, mealhistoryController.createHistory);

// 식단 수정
mealhistoryRouter.patch(
  '/:mealhistoryId',
  loginRequired,
  mealhistoryController.updateHistory,
);

// 식단 삭제
mealhistoryRouter.delete(
  '/:mealhistoryId',
  loginRequired,
  mealhistoryController.deletHistory,
);

export { mealhistoryRouter };
