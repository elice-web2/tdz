import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { socialLoginService, userService } from '../services';

class SocialLoginController {
  async kakaoLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`;
      res.redirect(kakaoAuthUrl);
    } catch (err) {
      next(err);
    }
  }

  async kakaoCallback(req: Request, res: Response, next: NextFunction) {
    try {
      const code: string = req.query.code as string;
      const userData = await socialLoginService.kakaoLoginService(code);
      const { isRegister, email, nickname, access_token } = userData;
      const password = 'kakao';

      // 로그인 정보가 없을 때 회원가입
      if (!isRegister) {
        await userService.addUserWithKakao(
          {
            email,
            password,
          },
          nickname,
        );
      }

      // db 있을 시 로그인 성공 및, 토큰 받아오기
      const userToken = await userService.getUserToken({ email, password });

      //만료 시간 24시간 * 3일
      const expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24 * 3);

      res
        .cookie('accessToken', access_token, { httpOnly: true })
        .cookie('token', userToken, {
          expires: expiryDate,
          httpOnly: true,
          signed: true,
        })
        .status(200)
        .json(userToken);
    } catch (err) {
      next(err);
    }
  }
}

const socialLoginController = new SocialLoginController();
export { socialLoginController };
