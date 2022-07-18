import { MealData } from '../customType/meal.type';

export function accNutrientCal(acc: MealData, cur: MealData): MealData {
  const kcal = acc.kcal + cur.kcal;
  const carb = acc.carb + cur.carb;
  const protein = acc.protein + cur.protein;
  const fat = acc.fat + cur.fat;
  const sugars = acc.sugars + cur.sugars;
  const natruim = acc.natruim + cur.natruim;
  const transfat = acc.transfat + cur.transfat;
  const cholesterol = acc.cholesterol + cur.cholesterol;
  const saturatedfatty = acc.saturatedfatty + cur.saturatedfatty;
  const quantity = acc.quantity + cur.quantity;
  const totalGram = acc.totalGram + cur.totalGram;

  const obj = {
    _id: acc._id,
    code: acc.code,
    name: acc.name,
    updated_date: acc.updated_date,
    servingSize: acc.servingSize,
    kcal,
    carb,
    protein,
    fat,
    sugars,
    natruim,
    transfat,
    cholesterol,
    saturatedfatty,
    quantity,
    totalGram,
  };
  return obj;
}
