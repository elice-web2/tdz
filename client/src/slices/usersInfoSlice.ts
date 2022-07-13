import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { ObjectLiteralElementLike } from 'typescript';
import * as api from '../api';
// 받아올 유저정보
interface UsersInfo {
  // 유저 정보
  email: string;
  login_path: string;
  gender: string;
  role: string;
  age: number;
  height: number;
  current_weight: number;
  goal_weight: number;
  bmi: number;
  mode: string;
  activity: string;
  nutrient: {
    kcal: number;
    carb: number;
    protein: number;
    fat: number;
  };
  profile_image: string;
  nickname: string;
  comment: string;
  // 로그인 여부
  isLogin: boolean;
}

export interface UsersInfoState {
  value: UsersInfo;
}
const initialState: UsersInfoState = {
  value: {
    email: '',
    login_path: '',
    gender: '',
    role: '',
    age: 0,
    height: 0,
    current_weight: 0,
    goal_weight: 0,
    bmi: 0,
    mode: '',
    activity: '',
    nutrient: {
      kcal: 0,
      carb: 0,
      protein: 0,
      fat: 0,
    },
    profile_image: '',
    nickname: '',
    comment: '',
    isLogin: false,
  },
};
// Slice 작성 예시

// 로그인 요청 데이터 타입지정
interface postLoginSignup {
  email: string;
  password: string;
}
// 회원가입 정보입력 타입지정
interface patchActivityParam {
  login_path?: string;
  profile_image?: string;
  comment?: string;
  gender: string;
  age: number;
  height: number;
  current_weight: number;
  goal_weight: number;
  bmi: number;
  mode: string;
  activity: string;
  nutrient: {
    kcal: number;
    carb: number;
    protein: number;
    fat: number;
  };
  nickname?: string;
}
// 회원가입 post API 통신 함수
async function postSignupData(usersInfo: postLoginSignup) {
  const resp = await api.post('/auth/signup ', usersInfo);
  return resp.data;
}
// 로그인 post API 통신 함수
async function postLoginData(loginInfo: postLoginSignup) {
  await api.post('/api/auth/login', loginInfo);
}
// 회원정보 get API 통신 함수
async function getUsersInfoData() {
  const resp = await api.get('/api/users');
  return resp;
}
async function patchActivityData(activityInfo: patchActivityParam) {
  const resp = await api.patch('/api/users/activity', activityInfo);
  return resp.data;
}

// 비동기로 데이터를 불러와 액션을 생성하고 싶을 경우 예시
export const patchActivityAsync = createAsyncThunk(
  'usersInfo/patchActivityData',
  async (activityInfo: patchActivityParam) => {
    return await patchActivityData(activityInfo);
  },
);
export const postSignUpAsync = createAsyncThunk(
  'usersInfo/postSignupData',
  async (usersInfo: postLoginSignup) => {
    return await postSignupData(usersInfo);
  },
);
//
export const postLoginAsync = createAsyncThunk(
  'usersInfo/postLoginData',
  async (loginInfo: postLoginSignup) => {
    await postLoginData(loginInfo);
  },
);
export const getUsersInfoAsync = createAsyncThunk(
  'usersInfo/getUsersInfoData',
  async () => {
    const usersInfo = await getUsersInfoData();
    return usersInfo?.data;
  },
);

export const UsersInfoSlice = createSlice({
  name: 'usersInfo',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.value.isLogin = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSignUpAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      })
      .addCase(postLoginAsync.fulfilled, (state, action) => {
        state.value.isLogin = true;
      })
      .addCase(getUsersInfoAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      })
      .addCase(patchActivityAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      });
  },
});

export const { loggedIn } = UsersInfoSlice.actions;

export default UsersInfoSlice.reducer;
