import * as S from './style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postMealsDataAsync } from '../../../slices/mealsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  MealsCartModalPropsType,
  MealData,
} from '../../../customType/meal.type';
import * as api from '../../../api';

type selectedType = '아침' | '점심' | '저녁' | '간식';

interface PostResultType {
  date: string;
  category: selectedType;
  meals: MealData[];
}

function MealsCartModal({ openModal, totalInfo }: MealsCartModalPropsType) {
  const [stampResultObj, setStampResultObj] = useState<any>();
  const [selected, setSelected] = useState<selectedType>('아침');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const meals = useAppSelector(({ meal }) => meal.value);
  const totalNutrient = useAppSelector(({ meal }) => meal.totalNutrient);
  const date = useAppSelector(({ date }) => date.value);
  const usersInfo = useAppSelector(({ usersInfo }) => usersInfo.value);
  console.log('유저인포', usersInfo);
  const postResultObj = {
    date,
    meals,
    category: selected,
  };

  function isSuccessGoal(cur: number, goal: number, mode: string) {
    if (mode === 'DEC') {
      return cur > 0 && cur <= goal ? true : false;
    } else if (mode === 'INC') {
      return cur >= goal ? true : false;
    }
  }

  useEffect(() => {
    const stampResult = {
      date: date,
      currentKcal: totalNutrient.kcal + totalInfo.kcal,
      goalKcal: usersInfo.nutrient.kcal,
      mode: usersInfo.mode,
      isSuccess: isSuccessGoal(
        totalNutrient.kcal + totalInfo.kcal,
        usersInfo.nutrient.kcal,
        usersInfo.mode,
      ),
      carbSum: totalNutrient.carb + totalInfo.carb,
      proteinSum: totalNutrient.protein + totalInfo.protein,
      fatSum: totalNutrient.fat + totalInfo.fat,
      sugarsSum: totalNutrient.sugars + totalInfo.sugars,
      natriumSum: totalNutrient.natrium + totalInfo.natrium,
      cholesterolSum: totalNutrient.cholesterol + totalInfo.cholesterol,
      saturatedfattySum:
        totalNutrient.saturatedfatty + totalInfo.saturatedfatty,
      transfatSum: totalNutrient.transfat + totalInfo.transfat,
    };
    setStampResultObj(stampResult);
  }, [date, totalNutrient, usersInfo.mode]);

  function modalCloseHandler() {
    openModal(false);
  }

  function clickSelectHandler(time: selectedType) {
    setSelected(time);
  }

  function enrollHandler(postResultObj: PostResultType) {
    dispatch(postMealsDataAsync(postResultObj));
    api
      .post('/api/calendar', stampResultObj)
      .then((res) => console.log('스탬프res', res));
    navigate('/meals');
  }

  return (
    <S.Container>
      <S.OutsideModal onClick={modalCloseHandler}></S.OutsideModal>
      <S.ModalContainer>
        <S.XBtn
          onClick={() => {
            openModal(false);
          }}
        >
          X
        </S.XBtn>
        <S.Title>식사 종류</S.Title>
        <S.BtnContainer>
          <button
            style={
              selected === '아침'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('아침')}
          >
            아침
          </button>
          <button
            style={
              selected === '점심'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('점심')}
          >
            점심
          </button>
          <button
            style={
              selected === '저녁'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('저녁')}
          >
            저녁
          </button>
          <button
            style={
              selected === '간식'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('간식')}
          >
            간식
          </button>
        </S.BtnContainer>

        <S.CompleteBtn
          onClick={() => {
            enrollHandler(postResultObj);
          }}
        >
          완료
        </S.CompleteBtn>
      </S.ModalContainer>
    </S.Container>
  );
}

export default MealsCartModal;
