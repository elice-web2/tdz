export interface FavoriteInfo {
  userId: string;
  mealId: string;
}

export interface FavoriteData {
  _id: string;
  userId: string;
  mealId: string;
  time: Date;
}
