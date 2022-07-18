interface TDZPercentParam {
  carb: number;
  protein: number;
  fat: number;
}

export function TDZPercent(nutrient: TDZPercentParam) {
  const carb = nutrient.carb;
  const protein = nutrient.protein;
  const fat = nutrient.fat;
  const total = carb + protein + fat;

  return {
    carb: Math.round((carb * 100) / total) || 0,
    protein: Math.round((protein * 100) / total) || 0,
    fat: Math.round((fat * 100) / total) || 0,
  };
}
