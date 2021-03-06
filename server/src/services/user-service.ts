import { UserModel, userModel } from '../db';
import {
  UserData,
  LoginInfo,
  UserInfoRequired,
  InfoToUpdate,
} from '../types/user.type';
import { getRandomNickname } from '../utils/random-nickname';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {
  constructor(private userModel: UserModel) {
    this.userModel = userModel;
  }

  // 회원가입
  async addUser(userInfo: LoginInfo): Promise<UserData> {
    // 객체 destructuring
    const { email, password } = userInfo;

    // 이메일 중복 확인
    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error('auth/email-already-use');
    }
    // 우선 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);
    const nickname: string = getRandomNickname();

    const newUserInfo = {
      email,
      password: hashedPassword,
      nickname,
    };

    // db에 저장
    return await this.userModel.create(newUserInfo);
  }

  // 카카오 회원가입
  async addUserWithKakao(
    userInfo: LoginInfo,
    nickname: string,
    profile_image_url: string,
  ): Promise<UserData> {
    // 객체 destructuring
    const { email, password } = userInfo;

    if (!email) {
      throw new Error('auth/email-doesnt-exist');
    }

    // 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = {
      email,
      password: hashedPassword,
      nickname,
      login_path: 'kakao',
      profile_image: profile_image_url,
    };

    // db에 저장
    return await this.userModel.create(newUserInfo);
  }

  // 로그인
  async getUserToken(loginInfo: LoginInfo): Promise<string> {
    // 객체 destructuring
    const { email, password } = loginInfo;

    // 우선 해당 이메일의 사용자 정보가  db에 존재하는지 확인
    const user = await this.userModel.findByEmail(email);
    if (!user) {
      throw new Error('auth/wrong-email');
    }

    // 이제 이메일은 문제 없는 경우이므로, 비밀번호를 확인함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password; // db에 저장되어 있는 암호화된 비밀번호

    // 매개변수의 순서 중요 (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있떤 암호화된 비밀번호)
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error('auth/wrong-password');
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';

    // 2개 프로퍼티를 jwt 토큰에 담음
    return jwt.sign({ userId: user._id, role: user.role }, secretKey);
  }

  // 사용자 목록을 받음.
  async getUsers(): Promise<UserData[]> {
    return await this.userModel.findAll();
  }

  //사용자 하나를 받음
  async getUserData(userId: string): Promise<UserData> {
    const userInfo = await this.userModel.findById(userId);

    if (!userInfo) {
      return {} as Promise<UserData>;
    }

    return userInfo;
  }

  //이메일 중복 확인
  async checkEmail(email: string) {
    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error('auth/email-already-use');
    }
    return;
  }

  // 유저정보 수정, 현재 비밀번호가 있어야 수정 가능함.
  async setUser(
    userInfoRequired: UserInfoRequired,
    toUpdate: InfoToUpdate,
  ): Promise<UserData> {
    // 객체 destructuring
    const { userId, currentPassword } = userInfoRequired;

    // 우선 해당 id의 유저가 db에 있는지 확인
    const user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('auth/no-user');
    }

    // 이제, 정보 수정을 위해 사용자가 입력한 비밀번호가 올바른 값인지 확인해야 함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error('auth/wrong-password');
    }

    // 이제 드디어 업데이트 시작

    // 비밀번호도 변경하는 경우에는, 회원가입 때처럼 해쉬화 해주어야 함.
    const password = toUpdate.password;

    if (password) {
      const newPasswordHash = await bcrypt.hash(password, 10);
      toUpdate.password = newPasswordHash;
    }

    // 업데이트 진행
    let updatedUser = await this.userModel.update({
      userId,
      update: toUpdate,
    });

    if (!updatedUser) {
      updatedUser = {} as UserData;
    }

    return updatedUser;
  }

  //영양정보 등 운동 관련 정보 업데이트
  async setGoal(userId: string, toUpdate: InfoToUpdate): Promise<UserData> {
    // 우선 해당 id의 유저가 db에 있는지 확인
    const user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('auth/no-user');
    }

    // 업데이트 진행
    let updatedUser = await this.userModel.update({
      userId,
      update: toUpdate,
    });

    if (!updatedUser) {
      updatedUser = {} as UserData;
    }

    return updatedUser;
  }

  //사용자삭제
  async deleteUserData(userId: string): Promise<{ deletedCount?: number }> {
    // 우선 해당 id의 유저가 db에 있는지 확인
    const user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('auth/no-user');
    }

    // 유저 삭제 시작
    return await this.userModel.deleteOneUser(userId);
  }
}

const userService = new UserService(userModel);

export { userService };
