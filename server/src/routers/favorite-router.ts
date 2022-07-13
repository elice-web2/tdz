import { Router } from 'express';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
import { loginRequired, adminRequired } from '../middlewares';
import * as favoriteController from '../controllers';

const favoriteRouter: Router = Router();

favoriteRouter.post('/', loginRequired, favoriteController.add);

export { favoriteRouter };
