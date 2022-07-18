import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faSun,
  faDrumstickBite,
  faUtensils,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/styles/Container';
import MealsListAddBox from '../../components/MealsList/MealsListAddBox';
import MealsListDeleteModal from '../../components/MealsList/MealsListDeleteModal';
import DateNavigation from '../../components/common/DateNavigation';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import CalorieInfo from '../../components/MealsList/CalorieInfo';
import FoodList from '../../components/MealsList/FoodList';
import NutrientInfo from '../../components/MealsList/NutrientInfo';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

function MealsList() {
  const navigate = useNavigate();
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const clickHandler = () => {
    setOpenModal(true);
  };

  const Time = (param: string) => {
    if (param === '아침') {
      return faSun;
    } else if (param === '점심') {
      return faDrumstickBite;
    } else if (param === '저녁') {
      return faUtensils;
    } else {
      return faCookieBite;
    }
  };

  const DeleteButton = () => {
    return (
      <S.DeleteButtonBox onClick={clickHandler}>
        <FontAwesomeIcon icon={faXmark} className="Delete" />
      </S.DeleteButtonBox>
    );
  };

  useEffect(() => {
    if (isLogin && is_login_first) {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <Logo />
      <DateNavigation />
      <S.MealsListContainerBox>
        {openModal && <MealsListDeleteModal setOpenModal={setOpenModal} />}
        <S.MealsListBox>
          <S.MealContainerIconBox>
            <FontAwesomeIcon
              icon={Time('아침')}
              className="Breakfast"
              color="white"
            />
            <p>아침</p>
          </S.MealContainerIconBox>
          <DeleteButton />
          <CalorieInfo calorie={700} />
          <FoodList foods={['신라면', '단무지', '군만두']} />
          <S.NutrientContainer>
            <NutrientInfo nutrient={'탄수화물'} gram={300} />
            <S.NutrientInfoLine />
            <NutrientInfo nutrient={'단백질'} gram={100} />
            <S.NutrientInfoLine />
            <NutrientInfo nutrient={'지방'} gram={200} />
          </S.NutrientContainer>
        </S.MealsListBox>
      </S.MealsListContainerBox>
      <MealsListAddBox />
      <Navbar />
    </Container>
  );
}

export default MealsList;
