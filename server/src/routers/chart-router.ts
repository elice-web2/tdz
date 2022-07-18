import { Router } from 'express';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
import { loginRequired, adminRequired } from '../middlewares';
import * as chartController from '../controllers';

const chartRouter: Router = Router();

chartRouter.get('/day', loginRequired, chartController.oneDay);
chartRouter.get('/daily', loginRequired, chartController.daily);
chartRouter.get('/weekly', loginRequired, chartController.weekly);
chartRouter.get('/monthly', loginRequired, chartController.monthly);

export { chartRouter };
