//Login 인터페이스
export interface LoginInfo {
  email: string;
  password: string;
}

//사용자를 인증하기 위한 인터페이스
export interface UserInfoRequired {
  userId: string;
  currentPassword: string;
}

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
  is_login_first: string;
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
  is_login_first: string;
}

//service에서 사용자 update시 필요한 정보
export interface InfoToUpdate {
  email?: string;
  password?: string;
  login_path?: string;
  role?: string;
  gender?: string;
  age?: number;
  height?: number;
  current_weight?: number;
  goal_weight?: number;
  bmi?: number;
  mode?: string;
  activity?: string;
  nutrient?: Nutrient;
  profile_image?: string;
  nickname?: string;
  comment?: string;
  is_login_first?: string;
}

export interface ToUpdate {
  userId: string;
  update: InfoToUpdate;
}
