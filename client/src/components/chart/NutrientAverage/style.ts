import styled from 'styled-components';

export const Circle = styled.div<{ bgColor: string }>`
  width: 10px;
  height: 10px;
  margin-right: 5px;

  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;

export const AverageInfoContainer = styled.div`
  ${({ theme }) => theme.flexbox('row', 'center', 'space-evenly')}
`;

export const AverageInfo = styled.div`
  ${({ theme }) => theme.flexbox('column')}

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
    }
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const AverageContainer = styled.div`
  padding: 20px 0;
`;

export const Heading = styled.h1`
  text-align: center;

  padding-top: 10px;

  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);

  user-select: none;
`;

export const CircleContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  position: relative;
`;

export const NutirientCircle = styled.div<{ bgColor: string; color?: string }>`
  ${({ theme }) => theme.flexbox()}

  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => (color ? color : 'black')};
  border-radius: 50%;

  font-size: 24px;
  font-weight: bold;
`;

export const ThirdNutirientCircle = styled(NutirientCircle)`
  position: relative;
  top: -15px;
`;
