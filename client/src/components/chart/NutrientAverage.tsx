import styled from 'styled-components';

export default function NutrientAverage({ data }: any) {
  return (
    <>
      <Heading>영양소 평균</Heading>
      <AverageContainer>
        {/* 칼로리 대비 영양소 4,4,9로 백분율 계산해서 기입 필요 */}
        <CircleContainer>
          <NutirientCircle bgColor="#5386C1" color="white">
            28%
          </NutirientCircle>
          <NutirientCircle bgColor="#FAF461">32%</NutirientCircle>
        </CircleContainer>
        <CircleContainer>
          <ThirdNutirientCircle bgColor="#FAA0A0">40%</ThirdNutirientCircle>
        </CircleContainer>

        <AverageInfoContainer>
          {/* 탄단지 평균 기입 */}
          <AverageInfo>
            <div>
              <Circle bgColor="#FAA0A0" />
              <span>탄수화물</span>
            </div>
            <p>{(data.탄수화물합 / 7).toFixed(1)}g</p>
          </AverageInfo>
          <AverageInfo>
            <div>
              <Circle bgColor="#5386C1" />
              <span>단백질</span>
            </div>
            <p>{(data.단백질합 / 7).toFixed(1)}g</p>
          </AverageInfo>
          <AverageInfo>
            <div>
              <Circle bgColor="#FAF461" />
              <span>지방</span>
            </div>
            <p>{(data.지방합 / 7).toFixed(1)}g</p>
          </AverageInfo>
        </AverageInfoContainer>
      </AverageContainer>
    </>
  );
}

const Circle = styled.div<{ bgColor: string }>`
  width: 10px;
  height: 10px;
  margin-right: 5px;

  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;

const AverageInfoContainer = styled.div`
  ${({ theme }) => theme.flexbox('row', 'center', 'space-evenly')}
`;

const AverageInfo = styled.div`
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

const AverageContainer = styled.div`
  padding: 20px 0;
`;

const Heading = styled.h1`
  text-align: center;

  padding-top: 10px;

  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);

  user-select: none;
`;

const CircleContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  position: relative;
`;

const NutirientCircle = styled.div<{ bgColor: string; color?: string }>`
  ${({ theme }) => theme.flexbox()}

  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => (color ? color : 'black')};
  border-radius: 50%;

  font-size: 24px;
  font-weight: bold;
`;

const ThirdNutirientCircle = styled(NutirientCircle)`
  position: relative;
  top: -15px;
`;
