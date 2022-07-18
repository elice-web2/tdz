import * as S from './style';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { MealInfo } from '../../customType/meal.type';
import React from 'react';
import * as api from '../../api';
import { useAppDispatch } from '../../hooks';
import { addMeals } from '../../slices/mealsSlice';

function MealsEnroll() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    data.code = '';
    data.quantity = 1;
    data.updated_date = new Date();
    data.servingSize = Number(data.servingSize);
    data.totalGram = Number(data.servingSize);
    data.kcal = Number(data.kcal);
    data.carb = Number(data.carb);
    data.protein = Number(data.protein);
    data.fat = Number(data.fat);
    data.natruim = Number(data.natruim);
    data.sugars = Number(data.sugars);
    data.transfat = Number(data.transfat);
    data.cholesterol = Number(data.cholesterol);
    data.saturatedfatty = Number(data.saturatedfatty);

    if (confirm('식단에 추가하시겠습니까?')) {
      await api.post('/api/meal', data);
      dispatch(addMeals(data));
      navigate('/meals/cart');
    } else {
      navigate('/meal/search');
    }
  }
  return (
    <Container>
      <S.Header>
        <span
          onClick={() => {
            navigate('/meals/search');
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <h1>음식 등록하기</h1>
      </S.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.NameInputElement>
          <p>음식명</p>
          <input
            type="text"
            {...register('name', { required: true, minLength: 1 })}
          />
        </S.NameInputElement>

        <S.NutrientBox>
          <h2>영양정보</h2>
          <S.NutrientInputElement>
            <p>내용량(g)</p>
            <input
              type="number"
              {...register('servingSize', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>열량</p>
            <input
              type="number"
              {...register('kcal', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>탄수화물</p>
            <input
              type="number"
              {...register('carb', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>단백질</p>
            <input
              type="number"
              {...register('protein', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>지방</p>
            <input
              type="number"
              {...register('fat', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>나트륨</p>
            <input
              type="number"
              {...register('natruim', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>당</p>
            <input
              type="number"
              {...register('sugars', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>콜레스테롤</p>
            <input
              type="number"
              {...register('cholesterol', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>트랜스지방</p>
            <input
              type="number"
              {...register('transfat', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>포화지방</p>
            <input
              type="number"
              {...register('saturatedfatty', { required: true, min: 0 })}
            ></input>
          </S.NutrientInputElement>
        </S.NutrientBox>
        <S.BtnContainer>
          <S.AddBtn type="submit">음식 등록</S.AddBtn>
        </S.BtnContainer>
      </form>
    </Container>
  );
}

export default MealsEnroll;
