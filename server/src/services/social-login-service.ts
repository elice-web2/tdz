import axios from 'axios';
import qs from 'qs';
import { userModel, UserModel } from '../db';

class SocialLoginService {
  constructor(private userModel: UserModel) {}

  // 소셜 로그인 (카카오)
  async kakaoLoginService(code: string) {
    const tokenResponse = await axios({
      method: 'POST',
      url: 'https://kauth.kakao.com/oauth/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_REST_API_KEY,
        client_secret: process.env.KAKAO_CLIENT_SECRET,
        redirect_uri: process.env.KAKAO_REDIRECT_URI,
        code,
      }),
    });

    const accessToken = tokenResponse.data.access_token;

    const userResponse = await axios({
      method: 'GET',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const authData = {
      ...tokenResponse.data,
      ...userResponse.data,
    };

    const access_token = authData.access_token;
    const {
      profile: { nickname, profile_image_url },
      email,
    } = authData.kakao_account;

    // 가입 확인
    const isRegister = await this.userModel.findByEmail(email);
    return { isRegister, email, nickname, profile_image_url, access_token };
  }

  async kakaoLogoutService(accessToken: string) {
    const response = await axios({
      method: 'POST',
      url: 'https://kapi.kakao.com/v1/user/logout',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  }
}

const socialLoginService = new SocialLoginService(userModel);

export { socialLoginService };
