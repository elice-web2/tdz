// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import dayjs from 'dayjs';
import * as S from './style';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
} from 'chart.js';

// components
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Container from '../../components/styles/Container';
import NutrientDetail from '../../components/chart/NutrientDetail';
import WeightChart from '../../components/chart/WeightChart';
import CalorieChart from '../../components/chart/CalorieChart';
import NutrientAverage from '../../components/chart/NutrientAverage';

// ChartJS를 react 에서 쓸 수 있도록 하는 코드
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  LineElement,
  BarElement,
);

// api/chart/daily?from=2022-06-28&to=2022-07-04  7일
// api/chart/weekly?from=2022-06-10&to=2022-07-07  4주
// api/chart/monthly?from=2022-05&to=2022-07 3개월

// 값이 숫자인 요소는 단위기간 영양소 총합
// 값이 배열인 요소는 단위기간 대비 평균값 ([6.10~6.16 의 평균, 6.17~6.23의 평균] 이런식)
// daily는 7일로 나눠서 길이가 7인 배열
// weekly는 4주로 나눠서 길이가 4인 배열 (각각이 daily 배열의 평균)
// monthly는 3개월로 나눠서 길이가 3인 배열 (각각이 weekly 배열의 평균)

const DUMMY_DATA_DAILY = {
  체중: [70, 70.5, 69.4, 70.2, 70.2, 70.2, 71],
  칼로리평균: [1550, 1300, 1400, 1200, 1600, 1700, 1800],
  탄수화물: [65, 66, 67, 68, 69, 70, 71],
  단백질: [65, 66, 67, 68, 69, 70, 71],
  지방: [65, 66, 67, 68, 69, 70, 71],
  칼로리합: 12000,
  탄수화물합: 1000,
  단백질합: 1000,
  지방합: 1000,
  포화지방합: 100,
  당류합: 100,
  콜레스테롤합: 100,
  나트륨합: 100,
};

function ChartPage() {
  const [filter, setFilter] = useState<'DAILY' | 'WEEKLY' | 'MONTHLY'>('DAILY');

  const onClickFilter = (filter: 'DAILY' | 'WEEKLY' | 'MONTHLY') => {
    setFilter(filter);
  };

  return (
    <Container>
      <Logo />

      <S.Wrapper>
        {/* 일간,월간,주간 필터 UI */}
        <S.FilterContainer>
          <S.Filter
            onClick={() => onClickFilter('DAILY')}
            isSelected={filter === 'DAILY'}
          >
            일간
          </S.Filter>
          <S.Filter
            onClick={() => onClickFilter('WEEKLY')}
            isSelected={filter === 'WEEKLY'}
          >
            주간
          </S.Filter>
          <S.Filter
            onClick={() => onClickFilter('MONTHLY')}
            isSelected={filter === 'MONTHLY'}
          >
            월간
          </S.Filter>
        </S.FilterContainer>
        {/* 날짜 변경 UI */}
        <S.PeriodContainer>
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>
            {/* 필터에 따라 날짜를 보여주고 왼쪽 오른쪽 버튼 클릭 시 날짜를 변경 가능하게 해야함 */}
            {dayjs().add(-1, 'week').format('YY-MM-DD')} ~{' '}
            {dayjs().add(-1, 'day').format('YY-MM-DD')}
          </p>
          <FontAwesomeIcon icon={faAngleRight} />
        </S.PeriodContainer>

        <WeightChart data={DUMMY_DATA_DAILY} />
        <CalorieChart data={DUMMY_DATA_DAILY} />
        <NutrientAverage data={DUMMY_DATA_DAILY} />
      </S.Wrapper>

      <NutrientDetail data={DUMMY_DATA_DAILY} />

      <Navbar />
    </Container>
  );
}

export default ChartPage;
