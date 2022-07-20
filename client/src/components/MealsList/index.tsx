import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faSun,
  faDrumstickBite,
  faUtensils,
  faCookieBite,
} from '@fortawesome/free-solid-svg-icons';
import MealsListDeleteModal from './MealsListDeleteModal';
import CalorieInfo from './CalorieInfo';
import FoodList from './FoodList';
import NutrientInfo from './NutrientInfo';
import * as S from './style';

interface MealsListProps {
  time: string;
  calorie: number;
  foods: string[];
  nutrientGram: number[];
  _id: string;
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

function MealsListBox({
  time,
  calorie,
  foods,
  nutrientGram,
  _id,
  setList,
}: MealsListProps) {
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
          _id={_id}
          setOpenModal={setOpenModal}
          calorie={calorie}
        />
      )}
      <S.MealsListBox>
        <S.MealContainerIconBox>
          <FontAwesomeIcon
            icon={Time(time)}
            className="Breakfast"
            color="white"
          />
          <p>{time}</p>
        </S.MealContainerIconBox>
        <DeleteButton />
        <CalorieInfo calorie={calorie} />
        <FoodList foods={foods} />
        <S.NutrientContainer>
          <NutrientInfo nutrient={'탄수화물'} gram={nutrientGram[0]} />
          <S.NutrientInfoLine />
          <NutrientInfo nutrient={'단백질'} gram={nutrientGram[1]} />
          <S.NutrientInfoLine />
          <NutrientInfo nutrient={'지방'} gram={nutrientGram[2]} />
        </S.NutrientContainer>
      </S.MealsListBox>
    </>
  );
}

export default MealsListBox;
