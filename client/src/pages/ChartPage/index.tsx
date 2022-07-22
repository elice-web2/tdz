// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';
// components
import Logo from 'components/common/Logo';
import WeightChart from 'components/chart/WeightChart';
import CalorieChart from 'components/chart/CalorieChart';
import NutrientAverage from 'components/chart/NutrientAverage';
import NutrientDetail from 'components/chart/NutrientDetail';
import Navbar from 'components/common/Navbar';
// hooks
import { useAppSelector } from 'hooks';
import { convertDate, FilterType } from 'utils';
// styles
import * as S from './style';
import { ScrollContainer } from 'components/styles/ScrollContainer';
import Container from 'components/styles/Container';
import useFetchChartData from './useFetchChartData';

// ChartJS를 react 에서 쓸 수 있도록 하는 코드
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  LineElement,
  BarElement,
  Tooltip,
);

function ChartPage() {
  const [filter, setFilter] = useState<FilterType>('DAILY');
  const [baseDate, setBaseDate] = useState(dayjs());
  const [disableNext, setDisableNext] = useState(true);
  const { getChartDataByFilter, chartData } = useFetchChartData();
  const navigate = useNavigate();
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  const onClickFilter = (filter: FilterType) => {
    setFilter(filter);
    setBaseDate(dayjs());
    setDisableNext(true);
  };

  const onClickLeftAndRight = (value: number, isNext: boolean) => {
    const converted = convertDate(baseDate, filter, isNext);
    if (converted.diff(dayjs()) > 0) return;
    const newDate =
      filter === 'MONTHLY'
        ? converted.add(value, 'month')
        : converted.add(value, 'day');
    setBaseDate(newDate);
  };

  useEffect(() => {
    // 현재 일자보다 앞의 날짜를 설정하지 못하게 버튼을 비활성화 하는 기능
    if (filter === 'MONTHLY') {
      setDisableNext(baseDate.month() === dayjs().month());
    } else {
      setDisableNext(baseDate.date() === dayjs().date());
    }
  }, [baseDate]);

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, [is_login_first, isLogin]);

  useEffect(() => {
    getChartDataByFilter(filter, baseDate);
  }, [filter, baseDate]);

  return (
    <Container>
      <Logo />

      <ScrollContainer minusHeight={120}>
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
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={() => onClickLeftAndRight(-1, false)}
            />
            <p>
              <span>
                {convertDate(baseDate, filter, false).format(
                  filter === 'MONTHLY' ? 'YYYY.MM' : 'YY.MM.DD',
                )}
              </span>
              <span>~</span>
              <span>
                {dayjs(baseDate).format(
                  filter === 'MONTHLY' ? 'YYYY.MM' : 'YY.MM.DD',
                )}
              </span>
            </p>
            <S.NextButton isDisable={disableNext}>
              <FontAwesomeIcon
                icon={faAngleRight}
                onClick={() => onClickLeftAndRight(1, true)}
              />
            </S.NextButton>
          </S.PeriodContainer>

          <WeightChart data={chartData.data} labels={chartData.labels} />
          <CalorieChart data={chartData.data} labels={chartData.labels} />
          <NutrientAverage data={chartData.data} />
        </S.Wrapper>

        <NutrientDetail data={chartData.data} />
      </ScrollContainer>

      <Navbar />
    </Container>
  );
}

export default ChartPage;
