export interface MealInfo {
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

export interface MealData extends MealInfo {
  _id: string;
  isBookMarked?: boolean;
}

export interface MealHistoryData {
  date: string;
  category: string;
  meals: MealData[];
}

export interface MealsSearchedListProps {
  result: MealData[];
  inputValue: string;
}

export interface TotalInfoType {
  kcal: number;
  carb: number;
  cholesterol: number;
  fat: number;
  natrium: number;
  protein: number;
  saturatedfatty: number;
  sugars: number;
  transfat: number;
}

export interface TDZInfoType {
  nutrient: string;
  gram: number | undefined;
}

export interface MealsCartListType {
  id: string;
  name: string;
  quantity: number;
  totalGram: number;
}

export interface MealsCartModalPropsType {
  openModal: (value: boolean) => void;
  totalInfo: TotalInfoType;
}

export interface MealListItem {
  category: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  sugars: number;
  natrium: number;
  cholesterol: number;
  saturatedfatty: number;
  transfat: number;
  name: string[];
  _id: string;
  quantity: number[];
}
