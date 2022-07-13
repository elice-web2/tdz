import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';
import {
  UserData,
  LoginInfo,
  UserInfo,
  ToUpdate,
} from '../../customType/user.type';

const User = model<UserData>('users', UserSchema);

export class UserModel {
  //이메일로 유저를 찾음
  async findByEmail(email: string): Promise<UserData | null> {
    return await User.findOne({ email }).lean();
  }
  //userId(ObjectId)로 유저를 찾음)
  async findById(userId: string): Promise<UserData | null> {
    return await User.findOne({ _id: userId }).lean();
  }
  //userInfo Object를 받아 생성
  async create(userInfo: LoginInfo): Promise<UserData> {
    return await User.create(userInfo);
  }
  //모든 목록을 찾음
  async findAll(): Promise<UserData[]> {
    return await User.find({});
  }
  //userId(ObjectId)를 찾아 그 항목을 수정
  async update({ userId, update }: ToUpdate): Promise<UserData | null> {
    const filter = { _id: userId };
    const option = { new: true };

    const updateData = await User.findOneAndUpdate(
      filter,
      update,
      option,
    ).lean();

    return updateData;
  }
  //userId(ObjectId)를 찾아 삭제
  async deleteOneUser(userId: string): Promise<{ deletedCount?: number }> {
    return await User.deleteOne({ _id: userId });
  }
}

const userModel = new UserModel();

export { userModel };
