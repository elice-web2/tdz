export function calNutrient(nutrient: number, count: number | ''): number {
  if (!count) {
    return 0;
  }
  return Number((nutrient * count).toFixed(2));
}
