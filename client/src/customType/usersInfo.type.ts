export interface UsersInfo {
  // 유저 정보
  // password: string;
  // _id: string;
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
  // 유저 정보를 작성한 회원 여부
  is_login_first: string;
  // 로그인 여부
  isLogin: boolean;
}

export interface patchActivityParam {
  login_path?: string;
  profile_image?: string;
  comment?: string;
  gender?: string;
  age?: number;
  height?: number;
  current_weight?: number;
  goal_weight?: number;
  bmi?: number;
  mode?: string;
  activity?: string;
  nutrient?: {
    kcal: number;
    carb: number;
    protein: number;
    fat: number;
  };
  nickname?: string;
  is_login_first?: string;
}
