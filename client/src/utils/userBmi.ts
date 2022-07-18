interface bmiParams {
  height: number;
  current_weight: number;
}
// 몸무게 / (키(m) * 키(m))
export const userBmi = ({ height, current_weight }: bmiParams) => {
  const heightBmi = height * 0.01;
  return current_weight / (heightBmi * heightBmi);
};
