import { Router } from 'express';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
import { loginRequired, adminRequired, upload } from '../middlewares';
import { userController } from '../controllers';
import { userValidator } from '../validation/validator';
// import { register,login,getUserlist,editUserData } from '../controller';

const userRouter: Router = Router();

// 회원가입 api (아래는 /auth/signup이지만, 실제로는 /api/auth/signup로 요청해야 함.)
userRouter.post(
  '/auth/signup',
  //userValidator.userSignup,
  userController.signUp,
);
userRouter.post('/auth/login', userController.login);
userRouter.get('/auth/logout', loginRequired, userController.logout);
userRouter.get('/users/list', adminRequired, userController.userList);
userRouter.get('/users', loginRequired, userController.user);
userRouter.patch('/users', loginRequired, userController.userUpdate);
userRouter.patch('/users/activity', loginRequired, userController.goalUpdate);
userRouter.patch(
  '/users/profile',
  loginRequired,
  upload.single('src'),
  userController.profileUpdate,
);
userRouter.delete('/users', loginRequired, userController.deleteUser);

export { userRouter };
