import * as S from './style';

interface CalorieProps {
  calorie: number;
}

const CalorieInfo = ({ calorie }: CalorieProps) => {
  return (
    <S.CalorieInfoBox>
      <span className="CalorieText">칼로리</span>
      <span className="CalorieAmount">{calorie}Kcal</span>
    </S.CalorieInfoBox>
  );
};

export default CalorieInfo;
