import { Router } from 'express';
import { socialLoginController } from '../controllers';

const socialLoginRouter = Router();

// 소셜 로그인 (카카오톡)
socialLoginRouter.get('/kakao', socialLoginController.kakaoLogin);

socialLoginRouter.get('/kakao/callback', socialLoginController.kakaoCallback);

export { socialLoginRouter };
