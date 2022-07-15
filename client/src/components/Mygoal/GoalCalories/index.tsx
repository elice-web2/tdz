import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from '../style';
import { calculateTDZgram } from '../../../utils';

function GoalCaloriesForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const existEntry = JSON.parse(localStorage.getItem('usersInfo') || '{}');
  const [kcal, setKcal] = useState(existEntry.nutrient.kcal);

  const onSubmit = () => {
    const mode = existEntry.mode;
    const nutrientTDZ = calculateTDZgram({ kcal, mode });
    existEntry.nutrient.kcal = kcal;
    existEntry.nutrient.protein = nutrientTDZ.protien;
    existEntry.nutrient.carb = nutrientTDZ.carb;
    existEntry.nutrient.fat = nutrientTDZ.fat;
    localStorage.setItem('usersInfo', JSON.stringify(existEntry));
    navigate('/mypage/goal_step3');
  };
  return (
    <S.MyGoalWrapper>
      <S.CircleContainer>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle active></S.StepCircle>
        <S.StepCircle></S.StepCircle>
      </S.CircleContainer>
      <S.Step>STEP 2</S.Step>
      <S.Title>하루 섭취 열량 입력하기</S.Title>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Title className="subTitle">목표 섭취 열량</S.Title>
        <S.InputTag
          type="number"
          {...register('kcal', {
            required: true,
            minLength: 2,
            maxLength: {
              value: 4,
              message: '올바른 칼로리를 입력해주세요',
            },
          })}
          onChange={(e) => setKcal(Number(e.currentTarget.value))}
          name="kcal"
          widthSize="large"
          defaultValue={kcal}
        />
        <S.ErrorMessage page="step2">
          {errors.kcal && '올바른 kcal를 작성해주세요.(4자리로 입력해주세요!)'}
        </S.ErrorMessage>
        <S.Title className="subCalorie marginTop">
          철수님의 일일 건장 섭취량은
        </S.Title>
        <S.Title className="calorie">{kcal} kcal</S.Title>
        <S.Title className="subCalorie">입니다.</S.Title>

        <S.Button type="submit" value="다음"></S.Button>
      </form>
    </S.MyGoalWrapper>
  );
}

export default GoalCaloriesForm;
