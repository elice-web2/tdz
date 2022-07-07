import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';

const User = model<UserData>('users', UserSchema);

export interface Nutrient {
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
}
export interface UserInfo {
  email: string;
  password: string;
  login_path: string;
  role: string;
  gender: string;
  age: number;
  height: number;
  current_weight: number;
  goal_weight: number;
  bmi: number;
  mode: string;
  activity: string;
  nutrient: Nutrient;
  profile_image: string;
  nickname: string;
  comment: string;
}
export interface UserData {
  _id: string;
  email: string;
  password: string;
  login_path: string;
  role: string;
  gender: string;
  age: number;
  height: number;
  current_weight: number;
  goal_weight: number;
  bmi: number;
  mode: string;
  activity: string;
  nutrient: Nutrient;
  profile_image: string;
  nickname: string;
  comment: string;
}

interface ToUpdate {
  userId: string;
  update: {
    [key: string]: string | number | Nutrient;
  };
}

export class UserModel {
  //이메일로 유저를 찾음
  async findByEmail(email: string): Promise<UserData> {
    return await User.findOne({ email });
  }
  //userId(ObjectId)로 유저를 찾음)
  async findById(userId: string): Promise<UserData> {
    return await User.findOne({ _id: userId });
  }
  //userInfo Object를 받아 생성
  async create(userInfo: UserInfo): Promise<UserData> {
    return await User.create(userInfo);
  }
  //모든 목록을 찾음
  async findAll(): Promise<UserData[]> {
    return await User.find({});
  }
  //userId(ObjectId)를 찾아 그 항목을 수정
  async update({ userId, update }: ToUpdate): Promise<UserData> {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    return await User.findOneAndUpdate(filter, update, option);
  }
  //userId(ObjectId)를 찾아 삭제
  async deleteOneUser(userId: string): Promise<{ deletedCount?: number }> {
    return await User.deleteOne({ _id: userId });
  }
}

const userModel = new UserModel();

export { userModel };
