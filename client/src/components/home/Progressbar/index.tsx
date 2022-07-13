import * as S from './style';

interface ProgressbarProps {
  title: string;
  percent: number;
  currentValue: string;
  goalValue: string;
  color: string;
}

function Progressbar({
  title,
  percent,
  currentValue,
  goalValue,
  color,
}: ProgressbarProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ProgressContainer>
        <S.Progress value={percent} max={100} progressColor={color} />
        <p>
          {currentValue} / {goalValue}
        </p>
      </S.ProgressContainer>
    </S.Wrapper>
  );
}

export default Progressbar;
