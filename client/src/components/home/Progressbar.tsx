import styled from 'styled-components';

interface ProgressbarProps {
  title: string;
  percent: number;
  currentValue: string;
  goalValue: string;
  color: string;
}

export default function Progressbar({
  title,
  percent,
  currentValue,
  goalValue,
  color,
}: ProgressbarProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ProgressContainer>
        <Progress value={percent} max={100} progressColor={color} />
        <p>
          {currentValue} / {goalValue}
        </p>
      </ProgressContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 12px;
  font-weight: 700;
`;

const Progress = styled.progress<{ progressColor: string }>`
  width: 60%;
  height: 10px;
  margin: 10px;

  appearance: none;

  &::-webkit-progress-bar {
    background: #f0f0f0;
    border-radius: 10px;
    box-shadow: inset 3px 3px 10px #ccc;
  }
  &::-webkit-progress-value {
    border-radius: 10px;
    background: ${({ progressColor }) => progressColor};
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
    text-align: center;
  }
`;
