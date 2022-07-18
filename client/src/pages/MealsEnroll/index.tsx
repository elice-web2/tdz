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
  const name = useRef<HTMLInputElement>(null);
  const kcal = useRef<HTMLInputElement>(null);
  const carb = useRef<HTMLInputElement>(null);
  const protein = useRef<HTMLInputElement>(null);
  const fat = useRef<HTMLInputElement>(null);
  const sugars = useRef<HTMLInputElement>(null);
  const natruim = useRef<HTMLInputElement>(null);
  const transfat = useRef<HTMLInputElement>(null);
  const cholesterol = useRef<HTMLInputElement>(null);
  const servingSize = useRef<HTMLInputElement>(null);
  const saturatedfatty = useRef<HTMLInputElement>(null);

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    let obj;
    if (
      name &&
      servingSize &&
      kcal &&
      carb &&
      protein &&
      fat &&
      natruim &&
      sugars &&
      transfat &&
      cholesterol &&
      saturatedfatty
    ) {
      obj = {
        code: '',
        quantity: 1,
        name: name.current?.value,
        servingSize: servingSize.current?.value,
        totalGram: servingSize.current?.value,
        kcal: kcal.current?.value,
        carb: carb.current?.value,
        protein: protein.current?.value,
        fat: fat.current?.value,
        sugars: sugars.current?.value,
        transfat: transfat.current?.value,
        natruim: natruim.current?.value,
        cholesterol: cholesterol.current?.value,
        saturatedfatty: saturatedfatty.current?.value,
        updated_date: new Date(),
      };
      console.log(obj);
    }
    await api.post('/api/meal', obj);
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
      <form onSubmit={submitHandler}>
        <S.NameInputElement>
          <p>음식명</p>
          <input ref={name} type="text" name="name"></input>
        </S.NameInputElement>

        <S.NutrientBox>
          <h2>영양정보</h2>
          <S.NutrientInputElement>
            <p>내용량(g)</p>
            <input ref={servingSize} type="number" name="servingSize"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>열량</p>
            <input ref={kcal} type="number" name="kcal"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>탄수화물</p>
            <input ref={carb} type="number" name="carb"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>단백질</p>
            <input ref={protein} type="number" name="protein"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>지방</p>
            <input ref={fat} type="number" name="fat"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>나트륨</p>
            <input ref={natruim} type="number" name="natruim"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>당</p>
            <input ref={sugars} type="number" name="sugars"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>콜레스테롤</p>
            <input ref={cholesterol} type="number" name="cholesterol"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>트랜스지방</p>
            <input ref={transfat} type="number" name="transfat"></input>
          </S.NutrientInputElement>
          <S.NutrientInputElement>
            <p>포화지방</p>
            <input
              ref={saturatedfatty}
              type="number"
              name="saturatedfatty"
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
