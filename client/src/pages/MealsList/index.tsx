import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import DateNavigation from '../../components/common/DateNavigation';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Container from '../../components/styles/Container';
import MealsListAddBox from '../../components/MealsList/MealsListAddBox';
import MealsListBox from '../../components/MealsList';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const currentDate = useAppSelector((state) => state.date.value);
  const meals = useAppSelector((state) => state.meal);
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, []);
  console.log(meals);
  const mealsList = meals.value[0];
  return (
    <Container>
      <Logo />
      <DateNavigation />
      <S.MealsListContainerBox>
        <MealsListBox
          time={'점심'}
          calorie={300}
          foods={['신라면', '단무지', '군만두', '김밥']}
          nutrientGram={[300, 100, 200]}
        />
      </S.MealsListContainerBox>
      <MealsListAddBox />
      <Navbar />
    </Container>
  );
}

export default MealsList;
