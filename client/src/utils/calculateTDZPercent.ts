export const calculatePercentage = (value: number, total: number) => {
  if (!value && !total) return 0;
  return (value / total) * 100;
};

interface calculateTDZPercentParam {
  carb: number;
  protein: number;
  fat: number;
}

export const calculateTDZPercent = ({
  carb,
  protein,
  fat,
}: calculateTDZPercentParam) => {
  const kcal = Math.floor(carb * 4 + protein * 4 + fat * 9);

  const carbPercent = Math.round(calculatePercentage(carb * 4, kcal));
  const proteinPercent = Math.round(calculatePercentage(protein * 4, kcal));
  const fatPercent = Math.round(calculatePercentage(fat * 9, kcal));

  return { carbPercent, proteinPercent, fatPercent, kcal };
};
