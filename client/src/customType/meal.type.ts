export interface MealInfo {
  code: string;
  name: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  sugars: number;
  natruim: number;
  cholesterol: number;
  saturatedfatty: number;
  transfat: number;
  servingSize: number;
  totalGram: number;
  quantity: number;
  updated_date: Date;
}

export interface MealData extends MealInfo {
  _id: string;
}

export interface MealsSearchedListProps {
  result: MealData[];
  inputValue: string;
}

export interface TotalInfoType {
  totalKcal: number;
  totalCarb: number;
  totalProtein: number;
  totalFat: number;
}

export interface TDZInfoType {
  nutrient: string;
  gram: number | undefined;
}

export interface MealsCartListType {
  name: string;
  quantity: number;
  totalGram: number;
  code: string;
}

export interface MealsCartModalPropsType {
  openModal: (value: boolean) => void;
}
