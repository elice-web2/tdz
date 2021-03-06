// dependencies
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Container from 'components/styles/Container';
import Logo from 'components/common/Logo';
import DateNavigation from 'components/common/DateNavigation';
import { ScrollContainer } from 'components/styles/ScrollContainer';
import DonutProgressbar from 'components/home/DonutProgressbar';
import Progressbar from 'components/home/Progressbar';
import ManageWeight from 'components/home/ManageWeight';
import Navbar from 'components/common/Navbar';
// hooks
import { useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc
import * as Api from 'api';
import { calculatePercentage } from 'utils';

interface mealsData {
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
}

function Home() {
  const navigate = useNavigate();
  const date = useAppSelector(({ date }) => date.value);
  const { nutrient, isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const [nutrientsSum, setNutrientsSum] = useState({
    kcal: 0,
    protein: 0,
    fat: 0,
    carb: 0,
  });

  const setNutrientsSumByDate = async (date: string) => {
    // 기준 날짜 state 주입 필요
    const data = (
      await Api.get(`/api/mealhistory/${dayjs(date).format('YYYY-MM-DD')}`)
    )?.data;

    const nutrientArray: mealsData[] = data
      .map((data: any) => data.meals)
      .flat();
    const nutrientSum = nutrientArray.reduce(
      (acc, meal) => ({
        kcal: acc.kcal + meal.kcal,
        protein: acc.protein + meal.protein,
        fat: acc.fat + meal.fat,
        carb: acc.carb + meal.carb,
      }),
      { kcal: 0, protein: 0, fat: 0, carb: 0 },
    );
    setNutrientsSum(nutrientSum);
  };

  const onClickAddMealButton = () => {
    navigate('/meals');
  };

  useEffect(() => {
    if (isLogin) {
      setNutrientsSumByDate(date);
    }
  }, [date]);

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, [is_login_first, isLogin]);

  return (
    <Container>
      <Logo />
      <DateNavigation />
      <ScrollContainer minusHeight={180}>
        <S.DonutContainer>
          {/* 목표 칼로리 / 현재 칼로리 * 100 백분율 계산해서 기입 필요 */}
          <DonutProgressbar
            percentage={calculatePercentage(nutrientsSum.kcal, nutrient.kcal)}
          >
            <S.CalorieContainer>
              {/* 현재 칼로리 */}
              <p>{nutrientsSum.kcal.toFixed(0)} kcal</p>
              {/* 목표 칼로리  */}
              <p>/ {nutrient.kcal} kcal</p>
            </S.CalorieContainer>
          </DonutProgressbar>
        </S.DonutContainer>
        <S.NutrientContainer>
          <Progressbar
            title={'탄수화물'}
            currentValue={nutrientsSum.carb}
            goalValue={nutrient.carb}
            color="#FAA0A0"
          />
          <Progressbar
            title={'단백질'}
            currentValue={nutrientsSum.protein}
            goalValue={nutrient.protein}
            color="#00D287"
          />
          <Progressbar
            title={'지방'}
            currentValue={nutrientsSum.fat}
            goalValue={nutrient.fat}
            color="#FAF461"
          />
        </S.NutrientContainer>

        <S.ResponsiveContainer>
          <ManageWeight />
          <S.ButtonContainer onClick={onClickAddMealButton}>
            <button>식단 추가하기</button>
          </S.ButtonContainer>
        </S.ResponsiveContainer>
      </ScrollContainer>
      <Navbar />
    </Container>
  );
}

export default Home;
