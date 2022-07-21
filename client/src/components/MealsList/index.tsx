// dependencies
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faSun,
  faDrumstickBite,
  faUtensils,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons';
// components
import MealsListDeleteModal from './MealsListDeleteModal';
import CalorieInfo from './CalorieInfo';
import FoodList from './FoodList';
import NutrientInfo from './NutrientInfo';
// types
import { MealListItem } from 'customType/meal.type';
// styles
import * as S from './style';

interface MealsListProps {
  meal: MealListItem;
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

function MealsListBox({ meal, setList }: MealsListProps) {
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
  return (
    <>
      {openModal && (
        <MealsListDeleteModal
          setList={setList}
          meal={meal}
          setOpenModal={setOpenModal}
        />
      )}
      <S.MealsListBox>
        <S.MealContainerIconBox color={meal.category}>
          <FontAwesomeIcon
            icon={Time(meal.category)}
            className="Breakfast"
            color="white"
          />
          <p>{meal.category}</p>
        </S.MealContainerIconBox>
        <DeleteButton />
        <CalorieInfo calorie={meal.kcal} />
        <FoodList foods={meal.name} />
        <S.NutrientContainer>
          <NutrientInfo nutrient={'탄수화물'} gram={Math.round(meal.carb)} />
          <S.NutrientInfoLine />
          <NutrientInfo nutrient={'단백질'} gram={Math.round(meal.protein)} />
          <S.NutrientInfoLine />
          <NutrientInfo nutrient={'지방'} gram={Math.round(meal.fat)} />
        </S.NutrientContainer>
      </S.MealsListBox>
    </>
  );
}

export default MealsListBox;
