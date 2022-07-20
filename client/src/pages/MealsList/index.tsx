import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import DateNavigation from '../../components/common/DateNavigation';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Container from '../../components/styles/Container';
import MealsListAddBox from '../../components/MealsList/MealsListAddBox';
import MealsListBox from '../../components/MealsList';
import { useNavigate } from 'react-router-dom';
import { calTotalKcal } from '../../slices/mealsSlice';
import * as S from './style';
import * as api from '../../api';
interface getMealProps {
  category: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  name: string[];
  _id: string;
}

function MealsList() {
  const [list, setList] = useState<any[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentDate = useAppSelector((state) => state.date.value);
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, [currentDate]);

  useEffect(() => {
    async function getMealsData(date: string) {
      const data = await api.get(`/api/mealhistory/${date}`);
      setList(data?.data);
    }
    getMealsData(currentDate);
  }, [currentDate]);

  const createMealList = () => {
    const component: any = [];
    const tmp: any = [];
    list.forEach((e) => {
      if (e.category === '아침') tmp.push(e);
    });
    list.forEach((e) => {
      if (e.category === '점심') tmp.push(e);
    });
    list.forEach((e) => {
      if (e.category === '저녁') tmp.push(e);
    });
    list.forEach((e) => {
      if (e.category === '간식') tmp.push(e);
    });
    tmp.forEach((e: any) => {
      const mealData: getMealProps = {
        category: '',
        kcal: 0,
        carb: 0,
        protein: 0,
        fat: 0,
        name: [],
        _id: '',
      };
      mealData.category = e.category;
      mealData._id = e._id;
      e.meals.forEach((el: any) => {
        mealData.kcal += Math.round(el.kcal);
        mealData.carb += Math.round(el.carb);
        mealData.protein += Math.round(el.protein);
        mealData.fat += Math.round(el.fat);
        mealData.name.push(el.name);
      });
      component.push(mealData);
    });
    return component;
  };

  return (
    <Container>
      <Logo />
      <DateNavigation />
      <S.MealsListContainerBox>
        {createMealList()?.map((e: any, idx: number) => {
          return (
            <MealsListBox
              key={idx}
              _id={e._id}
              time={e.category}
              calorie={e.kcal}
              foods={e.name}
              nutrientGram={[e.carb, e.protein, e.fat]}
            />
          );
        })}
      </S.MealsListContainerBox>
      <MealsListAddBox />
      <Navbar />
    </Container>
  );
}

export default MealsList;
