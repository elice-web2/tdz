import * as S from './style';

function NutrientAverage({ data }: any) {
  return (
    <>
      <S.Heading>영양소 평균</S.Heading>
      <S.AverageContainer>
        {/* 칼로리 대비 영양소 4,4,9로 백분율 계산해서 기입 필요 */}
        <S.CircleContainer>
          <S.NutirientCircle bgColor="#5386C1" color="white">
            28%
          </S.NutirientCircle>
          <S.NutirientCircle bgColor="#FAF461">32%</S.NutirientCircle>
        </S.CircleContainer>
        <S.CircleContainer>
          <S.ThirdNutirientCircle bgColor="#FAA0A0">40%</S.ThirdNutirientCircle>
        </S.CircleContainer>

        <S.AverageInfoContainer>
          {/* 탄단지 평균 기입 */}
          <S.AverageInfo>
            <div>
              <S.Circle bgColor="#FAA0A0" />
              <span>탄수화물</span>
            </div>
            <p>{(data.탄수화물합 / 7).toFixed(1)}g</p>
          </S.AverageInfo>
          <S.AverageInfo>
            <div>
              <S.Circle bgColor="#5386C1" />
              <span>단백질</span>
            </div>
            <p>{(data.단백질합 / 7).toFixed(1)}g</p>
          </S.AverageInfo>
          <S.AverageInfo>
            <div>
              <S.Circle bgColor="#FAF461" />
              <span>지방</span>
            </div>
            <p>{(data.지방합 / 7).toFixed(1)}g</p>
          </S.AverageInfo>
        </S.AverageInfoContainer>
      </S.AverageContainer>
    </>
  );
}

export default NutrientAverage;
