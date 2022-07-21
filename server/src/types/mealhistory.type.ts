export interface mealInfo {
  code: string;
  name: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  sugars: number;
  natrium: number;
  cholesterol: number;
  saturatedfatty: number;
  transfat: number;
  servingSize: number;
  totalGram: number;
  quantity: number;
  updated_date: Date;
}

export interface MealHistoryInfo {
  userId?: string;
  category: string;
  date: Date;
  meals: [mealInfo];
}

export interface MealHistoryData {
  _id: string;
  userId: string;
  category: string;
  date: Date;
  meals: [mealInfo];
}

export interface ToUpdate {
  mealhistoryId: string;
  update: MealToUpdate;
}

export interface MealToUpdate {
  date?: Date;
  category?: string;
  meals?: [mealInfo];
}
