import { calculatePercentage } from 'utils';
import * as S from './style';

interface ProgressbarProps {
  title: string;
  currentValue: number;
  goalValue: number;
  color: string;
}

function Progressbar({
  title,
  currentValue,
  goalValue,
  color,
}: ProgressbarProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ProgressContainer>
        <S.Progress
          value={calculatePercentage(currentValue, goalValue)}
          max={100}
          progressColor={color}
        />
        <p>
          {currentValue.toFixed(0)}g / {goalValue}g
        </p>
      </S.ProgressContainer>
    </S.Wrapper>
  );
}

export default Progressbar;
