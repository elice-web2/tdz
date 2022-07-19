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

type selectedType = '아침' | '점심' | '저녁' | '간식' | '';

interface PostResultType {
  date: string;
  category: selectedType;
  meals: MealData[];
}

function MealsCartModal({ openModal }: MealsCartModalPropsType) {
  const [selected, setSelected] = useState<selectedType>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const meals = useAppSelector(({ meal }) => meal.value);
  const postResultObj = {
    date: dayjs().format('YYYY-MM-DD'),
    meals,
    category: selected,
  };
  console.log('보낼내용', postResultObj);

  function modalCloseHandler() {
    openModal(false);
  }

  function clickSelectHandler(time: selectedType) {
    setSelected(time);
  }

  function enrollHandler(postResultObj: PostResultType) {
    dispatch(postMealsDataAsync(postResultObj));
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
