// dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import DateNavigation from 'components/common/DateNavigation';
import Logo from 'components/common/Logo';
import Navbar from 'components/common/Navbar';
import Container from 'components/styles/Container';
import MealsListAddBox from 'components/MealsList/MealsListAddBox';
import MealsListBox from 'components/MealsList';
import { ScrollContainer } from 'components/styles/ScrollContainer';
import CartIcon from 'components/common/CartIcon';
// stores
import { calTotalNutrient } from 'slices/mealsSlice';
// types
import { MealListItem } from 'customType/meal.type';
// hooks
import { useAppSelector, useAppDispatch } from 'hooks';
// styles
import * as S from './style';
// etc
import * as api from 'api';

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
  }, [is_login_first, isLogin]);

  useEffect(() => {
    async function getMealsData(date: string) {
      const data = await api.get(`/api/mealhistory/${date}`);
      setList(createMealList(data?.data));
      dispatch(calTotalNutrient(data?.data));
    }
    getMealsData(currentDate);
  }, [currentDate]);

  const createMealList = (data: any) => {
    const component: any = [];
    const tmp: any = [];
    data.forEach((e: any) => {
      if (e.category === '아침') tmp.push(e);
    });
    data.forEach((e: any) => {
      if (e.category === '점심') tmp.push(e);
    });
    data.forEach((e: any) => {
      if (e.category === '저녁') tmp.push(e);
    });
    data.forEach((e: any) => {
      if (e.category === '간식') tmp.push(e);
    });
    tmp.forEach((e: any) => {
      const mealData: MealListItem = {
        category: '',
        kcal: 0,
        carb: 0,
        protein: 0,
        fat: 0,
        sugars: 0,
        natrium: 0,
        cholesterol: 0,
        saturatedfatty: 0,
        transfat: 0,
        name: [],
        _id: '',
        quantity: [],
      };
      mealData.category = e.category;
      mealData._id = e._id;
      e.meals.forEach((el: any) => {
        mealData.quantity.push(el.quantity);
        mealData.kcal += el.kcal;
        mealData.carb += el.carb;
        mealData.protein += el.protein;
        mealData.fat += el.fat;
        mealData.name.push(el.name);
        mealData.sugars += el.sugars;
        mealData.natrium += el.natrium;
        mealData.cholesterol += el.cholesterol;
        mealData.saturatedfatty += el.saturatedfatty;
        mealData.transfat += el.transfat;
      });
      component.push(mealData);
    });
    return component;
  };

  return (
    <Container>
      <Logo />
      <DateNavigation />
      <ScrollContainer minusHeight={180}>
        <S.MealsListContainerBox>
          {list.map((meal: any) => {
            return (
              <MealsListBox setList={setList} key={meal._id} meal={meal} />
            );
          })}
        </S.MealsListContainerBox>
        <MealsListAddBox />
      </ScrollContainer>
      <CartIcon />
      <Navbar />
    </Container>
  );
}

export default MealsList;
