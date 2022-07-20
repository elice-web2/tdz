export interface mealInfo {
  code: string;
  name: String;
  kcal: Number;
  carb: Number;
  protein: Number;
  fat: Number;
  sugars: Number;
  natrium: Number;
  cholesterol: Number;
  saturatedfatty: Number;
  transfat: Number;
  servingSize: Number;
  totalGram: Number;
  quantity: Number;
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
