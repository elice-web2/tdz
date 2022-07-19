import * as S from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postMealsDataAsync } from '../../../slices/mealsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  MealsCartModalPropsType,
  MealData,
} from '../../../customType/meal.type';
import dayjs from 'dayjs';
import * as api from '../../../api';

type selectedType = '아침' | '점심' | '저녁' | '간식' | '';

interface PostResultType {
  date: string;
  category: selectedType;
  meals: MealData[];
}

function MealsCartModal({ openModal, totalInfo }: MealsCartModalPropsType) {
  const [selected, setSelected] = useState<selectedType>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const meals = useAppSelector(({ meal }) => meal.value);
  const total = useAppSelector(({ meal }) => meal.totalKcal);
  const usersInfo = useAppSelector(({ usersInfo }) => usersInfo.value);
  console.log('유저인포', usersInfo);
  const postResultObj = {
    date: dayjs().format('YYYY-MM-DD'),
    meals,
    category: selected,
  };
  console.log('보낼내용', postResultObj);
  console.log('토탈', total);

  function isSuccessGoal(cur: number, goal: number, mode: string) {
    if (mode === 'DEC') {
      return cur <= goal ? true : false;
    } else if (mode === 'INC') {
      return cur >= goal ? true : false;
    }
  }

  const stampResultObj = {
    date: dayjs().format('YYYY-MM-DD'),
    currentKcal: totalInfo.totalKcal,
    goalKcal: usersInfo.nutrient.kcal,
    mode: usersInfo.mode,
    isSuccess: isSuccessGoal(
      totalInfo.totalKcal,
      usersInfo.nutrient.kcal,
      usersInfo.mode,
    ),
    todayWeight: 59,
  };

  console.log('스탬프', stampResultObj);
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
      .then((res) => console.log('잘보냈니', res));
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
