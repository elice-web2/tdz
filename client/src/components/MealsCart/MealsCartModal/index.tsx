import * as S from './style';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postMealsDataAsync } from '../../../slices/mealsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { dateFormat } from '../../../../src/utils/dateFormat';
import { MealData } from '../../../customType/meal.type';

interface MealsCartModalProps {
  setOpenModal: (value: boolean) => void;
}

type selectedType = '아침' | '점심' | '저녁' | '간식' | '';

interface postDataType {
  date: string;
  category: string;
  meals: MealData[];
}

function MealsCartModal({ setOpenModal }: MealsCartModalProps) {
  const [selected, setSelected] = useState<selectedType>('');
  const [postData, setPostData] = useState<postDataType>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const meals = useAppSelector(({ meal }) => meal.value);
  const postResultObj = {
    date: dateFormat(new Date()),
    meals,
    category: selected,
  };
  console.log('보낼내용', postResultObj);

  function modalCloseHandler() {
    setOpenModal(false);
  }

  function clickSelectHandler(time: selectedType) {
    setSelected(time);
  }

  return (
    <S.Container>
      <S.OutsideModal onClick={modalCloseHandler}></S.OutsideModal>
      <S.ModalContainer>
        <S.XBtn
          onClick={() => {
            setOpenModal(false);
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
            dispatch(postMealsDataAsync(postResultObj));
            console.log(dispatch(postMealsDataAsync(postResultObj)));
            // navigate('/meals');
          }}
        >
          완료
        </S.CompleteBtn>
      </S.ModalContainer>
    </S.Container>
  );
}

export default MealsCartModal;
