import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from '../style';
import { userCalories } from '../../../utils';

function GoalUserInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [mode, setMode] = useState('DEC');
  const [activity, setActivity] = useState('NORMAL');
  const [gender, setGender] = useState('MALE');

  const selectHandler = (e: React.MouseEvent<HTMLDivElement>, mode: string) => {
    const activeMode = document.querySelector('.acitveMode');
    if (mode === 'DEC') {
      activeMode?.classList.remove('acitveMode');
      e.currentTarget.classList.add('acitveMode');
      setMode('DEC');
    } else {
      activeMode?.classList.remove('acitveMode');
      e.currentTarget.classList.add('acitveMode');
      setMode('INC');
    }
  };
  const activityHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    activityMode: string,
  ) => {
    const activeSelect = document.querySelector('.activeSelect');
    if (activityMode === 'MORE') {
      activeSelect?.classList.remove('activeSelect');
      e.currentTarget.classList.add('activeSelect');
      setActivity('MORE');
    } else if (activityMode === 'NORMAL') {
      activeSelect?.classList.remove('activeSelect');
      e.currentTarget.classList.add('activeSelect');
      setActivity('NORMAL');
    } else {
      activeSelect?.classList.remove('activeSelect');
      e.currentTarget.classList.add('activeSelect');
      setActivity('LESS');
    }
  };
  const genderHandler = (e: any) => {
    setGender(e.target.value);
  };
  const onSubmit = (data: any) => {
    const age = data.age;
    const height = data.height;
    const current_weight = data.current_weight;
    const kcalParam = { gender, age, current_weight, height, activity };
    const kcal = userCalories(kcalParam);

    const usersEntry = {
      gender,
      age,
      height,
      current_weight,
      goal_weight: data.gaol_weight,
      mode,
      activity,
      nutrient: {
        kcal,
        carb: 0,
        protein: 0,
        fat: 0,
      },
    };
    localStorage.setItem('usersInfo', JSON.stringify(usersEntry));
    navigate('/mypage/goal_step2');
  };
  return (
    <S.MyGoalWrapper>
      <S.CircleContainer>
        <S.StepCircle active></S.StepCircle>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle></S.StepCircle>
      </S.CircleContainer>
      <S.Step>STEP 1</S.Step>
      <S.Title>필수 정보 입력하기</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FlexContainer>
          성별{' '}
          <span style={{ fontSize: '16px' }}>
            <input
              type="radio"
              name="gender"
              id="M"
              value="MALE"
              onClick={genderHandler}
              defaultChecked
            />
            <label htmlFor="M">남성</label>

            <input
              type="radio"
              name="gender"
              id="F"
              value="FEMALE"
              onClick={genderHandler}
            />
            <label htmlFor="F">여성</label>
          </span>
        </S.FlexContainer>
        <S.FlexContainer>
          나이{' '}
          <S.InputTag
            {...register('age', {
              required: true,
              max: 120,
              min: 1,
            })}
            name="age"
            widthSize="small"
            type="number"
            placeholder="나이를 입력해주세요."
            defaultValue={''}
          />
        </S.FlexContainer>
        <S.ErrorMessage>
          {errors.age && '올바른 나이를 입력해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer>
          키{' '}
          <S.InputTag
            {...register('height', {
              required: true,
              max: 300,
              min: 100,
            })}
            widthSize="small"
            name="height"
            type="number"
            placeholder="키를 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>
        <S.ErrorMessage>
          {errors.height && '올바른 키를 입력해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer>
          시작 체중{' '}
          <S.InputTag
            {...register('current_weight', {
              required: true,
              max: 200,
              min: 5,
            })}
            widthSize="small"
            name="current_weight"
            type="number"
            placeholder="현재 체중을 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>
        <S.ErrorMessage>
          {errors.current_weight && '올바른 체중 입력해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer>
          목표 체중{' '}
          <S.InputTag
            {...register('goal_weight', {
              required: true,
              max: 200,
              min: 5,
            })}
            name="goal_weight"
            widthSize="small"
            type="number"
            placeholder="목표 체중을 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>
        <S.ErrorMessage>
          {errors.goal_weight && '올바른 체중 입력해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer className="mode">
          <S.Mode
            onClick={(e) => {
              selectHandler(e, 'DEC');
            }}
            className="acitveMode"
          >
            다이어트 식단
          </S.Mode>
          <S.Mode
            onClick={(e) => {
              selectHandler(e, 'INC');
            }}
          >
            증량 식단
          </S.Mode>
        </S.FlexContainer>

        <S.FlexContainer>
          활동량
          <S.Activity
            onClick={(e) => {
              activityHandler(e, 'LESS');
            }}
          >
            <div className="emoji">{/* div태그 img로 바꾸기 나중에 */}</div>
            적음
          </S.Activity>
          <S.Activity
            onClick={(e) => {
              activityHandler(e, 'NORMAL');
            }}
            className="activeSelect"
          >
            <div className="emoji"></div>보통
          </S.Activity>
          <S.Activity
            onClick={(e) => {
              activityHandler(e, 'MORE');
            }}
          >
            <div className="emoji"></div>많음
          </S.Activity>
        </S.FlexContainer>
        <S.Button type="submit" value="다음"></S.Button>
      </form>
    </S.MyGoalWrapper>
  );
}

export default GoalUserInfoForm;
