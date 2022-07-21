// types
import { ChartInfo } from 'customType/chart.type';
// styles
import * as S from './style';
// etc
import { calculateTDZPercent } from 'utils';

interface NutrientAverageProps {
  data: ChartInfo['data'];
}

function NutrientAverage({ data }: NutrientAverageProps) {
  const { carbPercent, proteinPercent, fatPercent } = calculateTDZPercent({
    carb: data.carbSum,
    protein: data.proteinSum,
    fat: data.fatSum,
  });

  const filterFalsy = (val: number) => !!val;

  return (
    <>
      <S.Heading>영양소 평균</S.Heading>
      <S.AverageContainer>
        {/* 칼로리 대비 영양소 4,4,9로 백분율 계산해서 기입 필요 */}
        <S.CircleContainer>
          <S.NutirientCircle bgColor="#5386C1" color="white">
            {proteinPercent}%
          </S.NutirientCircle>
          <S.NutirientCircle bgColor="#FAF461">{fatPercent}%</S.NutirientCircle>
        </S.CircleContainer>
        <S.CircleContainer>
          <S.ThirdNutirientCircle bgColor="#FAA0A0">
            {carbPercent}%
          </S.ThirdNutirientCircle>
        </S.CircleContainer>

        <S.AverageInfoContainer>
          {/* 탄단지 평균 기입 */}
          <S.AverageInfo>
            <div>
              <S.Circle bgColor="#FAA0A0" />
              <span>탄수화물</span>
            </div>
            <p>
              {(
                data.carbSum / data.carbAvg.filter(filterFalsy).length || 0
              ).toFixed(0)}
              g
            </p>
          </S.AverageInfo>
          <S.AverageInfo>
            <div>
              <S.Circle bgColor="#5386C1" />
              <span>단백질</span>
            </div>
            <p>
              {(
                data.proteinSum / data.proteinAvg.filter(filterFalsy).length ||
                0
              ).toFixed(0)}
              g
            </p>
          </S.AverageInfo>
          <S.AverageInfo>
            <div>
              <S.Circle bgColor="#FAF461" />
              <span>지방</span>
            </div>
            <p>
              {(
                data.fatSum / data.fatAvg.filter(filterFalsy).length || 0
              ).toFixed(0)}
              g
            </p>
          </S.AverageInfo>
        </S.AverageInfoContainer>
      </S.AverageContainer>
    </>
  );
}

export default NutrientAverage;
