export const calculatePercentage = (value: number, total: number) => {
  if (!value && !total) return 0;
  return (value / total) * 100;
};

interface calculateTDZPercentParam {
  carb: number;
  protein: number;
  fat: number;
}

// 비율 => Math.floor(100/(총kcal / (g(그램) * 4(4or 9)즉 단백질 섭취열량) ))
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

interface calculateTDZgramParam {
  kcal: number;
  mode: string;
}
// 권장 g => Math.ceil(kcal * 비율 / 4)
// 다이어트 532
// 증량일때 442
export const calculateTDZgram = ({ kcal, mode }: calculateTDZgramParam) => {
  if (mode === 'INC') {
    const TDZ = {
      protien: Math.round((kcal * 0.4) / 4),
      carb: Math.round((kcal * 0.4) / 4),
      fat: Math.round((kcal * 0.2) / 9),
    };
    return TDZ;
  } else {
    const TDZ = {
      protien: Math.round((kcal * 0.5) / 4),
      carb: Math.round((kcal * 0.3) / 4),
      fat: Math.round((kcal * 0.2) / 9),
    };
    return TDZ;
  }
};
