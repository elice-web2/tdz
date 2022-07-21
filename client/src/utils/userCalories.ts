interface usersInfoParam {
  gender: string;
  current_weight: number;
  height: number;
  age: number;
  activity: string;
}
// 하루 권장 섭취량
export const userCalories = ({
  gender,
  current_weight,
  height,
  age,
  activity,
}: usersInfoParam) => {
  if (gender === 'MALE') {
    // 기초대사량
    const basic =
      88.5 + 13.4 * current_weight + 4.8 * height + 5.68 * age - 200;
    switch (activity) {
      case 'LESS':
        return Math.floor(basic * 1.2);
      case 'NORMAL':
        return Math.floor(basic * 1.375);
      case 'MORE':
        return Math.floor(basic * 1.55);
    }
  } else {
    const basic =
      447.6 + 9.25 * current_weight + 3.1 * height + 4.33 * age - 200;
    switch (activity) {
      case 'LESS':
        return Math.floor(basic * 1.2);
      case 'NORMAL':
        return Math.floor(basic * 1.375);
      case 'MORE':
        return Math.floor(basic * 1.55);
    }
  }
};
