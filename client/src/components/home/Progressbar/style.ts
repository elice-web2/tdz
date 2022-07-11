import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: 700;
`;

export const Progress = styled.progress<{ progressColor: string }>`
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

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 12px;
    text-align: center;
  }
`;
