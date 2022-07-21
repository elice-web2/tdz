import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { useForm } from 'react-hook-form';
import { patchActivityAsync } from '../../../slices/usersInfoSlice';
import * as S from '../style';
import { useEffect, useState } from 'react';
import { calculateTDZPercent } from '../../../utils';

function GoalNutrientForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const existEntry = JSON.parse(localStorage.getItem('usersInfo') || '{}');
  const initialData = {
    kcal: existEntry.nutrient.kcal,
    protein: existEntry.nutrient.protein,
    carb: existEntry.nutrient.carb,
    fat: existEntry.nutrient.fat,
  };
  const [nutrient, setNutrient] = useState(initialData);
  const [percentTDZ, setPercentTDZ] = useState(
    calculateTDZPercent(initialData),
  );
  //제출 이벤트 핸들러
  const onSubmit = () => {
    existEntry.nutrient.kcal = percentTDZ.kcal;
    existEntry.nutrient.carb = nutrient.carb;
    existEntry.nutrient.protein = nutrient.protein;
    existEntry.nutrient.fat = nutrient.fat;
    existEntry.is_login_first = 'false';
    localStorage.setItem('usersInfo', JSON.stringify(existEntry));
    console.log(existEntry);
    dispatch(patchActivityAsync(existEntry));
    navigate('/home');
  };
  // input change 핸들러
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setNutrient((curr) => {
      const newNutrient: any = { ...curr };
      newNutrient[name] = Number(value);
      return newNutrient;
    });
  };
  useEffect(() => {
    const percent = calculateTDZPercent(nutrient);
    setPercentTDZ(percent);
  }, [nutrient]);

  return (
    <S.MyGoalWrapper>
      <S.CircleContainer>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle active></S.StepCircle>
      </S.CircleContainer>
      <S.Step>STEP 3</S.Step>
      <S.Title>
        탄단지 섭취량{' '}
        {String(localStorage.getItem('is_login_first')) === 'false'
          ? '수정'
          : '입력'}
        하기
      </S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Title align="end" className="subTitle">
          목표 섭취 열량
        </S.Title>
        <S.FlexContainer>
          <span>탄수화물</span>
          <span className="percentile">{percentTDZ.carbPercent}%</span>
          <S.InputTag
            {...register('carb', {
              required: true,
              min: 5,
              maxLength: 4,
            })}
            widthSize="medium"
            onChange={changeHandler}
            name="carb"
            defaultValue={nutrient.carb}
          ></S.InputTag>
        </S.FlexContainer>
        <S.ErrorMessage page="step3">
          {errors.carb && '최소 5g은 섭취해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer>
          <span>단백질</span>
          <span className="percentile">{percentTDZ.proteinPercent}%</span>
          <S.InputTag
            {...register('protein', {
              required: true,
              min: 5,
              maxLength: 4,
            })}
            widthSize="medium"
            onChange={changeHandler}
            name="protein"
            defaultValue={nutrient.protein}
          ></S.InputTag>
        </S.FlexContainer>
        <S.ErrorMessage page="step3">
          {errors.protein && '최소 5g은 섭취해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer className="fastNutrient">
          <span>지방</span>
          <span className="percentile">{percentTDZ.fatPercent}%</span>
          <S.InputTag
            {...register('fat', {
              required: true,
              min: 5,
              maxLength: 4,
            })}
            widthSize="medium"
            onChange={changeHandler}
            name="fat"
            defaultValue={nutrient.fat}
          ></S.InputTag>
        </S.FlexContainer>
        <S.ErrorMessage page="step3">
          {errors.fat && '최소 5g은 섭취해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer>
          <S.Title className="subTitle">최종 섭취 열량</S.Title>
          <S.Title>{percentTDZ.kcal} kcal</S.Title>
        </S.FlexContainer>
        <S.Button type="submit" value="입력 완료"></S.Button>
      </form>
    </S.MyGoalWrapper>
  );
}

export default GoalNutrientForm;
