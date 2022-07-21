// dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// styles
import * as S from '../style';
// etc
import { userCalories, userBmi } from 'utils';

function GoalUserInfoForm() {
  // 유효성검사
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // 입력 미완성시 이전기록 => 완성시 get요청 데이터
  const usersInfo = localStorage.getItem('usersInfo')
    ? JSON.parse(localStorage.getItem('usersInfo') || '{}')
    : JSON.parse(localStorage.getItem('usersInfoStorage') || '{}');

  const [mode, setMode] = useState(usersInfo?.mode ? usersInfo?.mode : 'DEC');
  const [activity, setActivity] = useState(
    usersInfo?.activity ? usersInfo?.activity : 'NORMAL',
  );
  const [gender, setGender] = useState(
    usersInfo?.gender ? usersInfo?.gender : 'MALE',
  );

  const selectHandler = (mode: string) => {
    setMode(mode);
  };
  // 활동량 선택 이벤트 핸들러
  const activityHandler = (activityMode: string) => {
    setActivity(activityMode);
  };
  // 성별 선택 이벤트 핸들러
  const genderHandler = (e: any) => {
    setGender(String(e.target.value));
  };
  // form 태그 제출 핸들러 => 로컬스토리지에 저장
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
      goal_weight: data.goal_weight,
      bmi: userBmi({ height, current_weight }),
      mode,
      activity,
      nutrient: {
        kcal,
        carb: 0,
        protein: 0,
        fat: 0,
      },
      is_login_first: 'true',
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
          성별
          <span style={{ fontSize: '16px' }}>
            <input
              type="radio"
              name="gender"
              id="M"
              value="MALE"
              onChange={genderHandler}
              defaultChecked={gender === 'MALE'}
            />
            <label htmlFor="M">🙍🏻‍♂️ 남성</label>

            <input
              type="radio"
              name="gender"
              id="F"
              value="FEMALE"
              onChange={genderHandler}
              defaultChecked={gender === 'FEMALE'}
            />
            <label htmlFor="F">🙍🏻‍♀️ 여성</label>
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
            defaultValue={usersInfo?.age}
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
            defaultValue={usersInfo?.height}
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
            defaultValue={usersInfo?.current_weight}
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
            defaultValue={usersInfo?.goal_weight}
          ></S.InputTag>
        </S.FlexContainer>
        <S.ErrorMessage>
          {errors.goal_weight && '올바른 체중 입력해주세요.'}
        </S.ErrorMessage>
        <S.FlexContainer className="mode">
          <S.Mode
            onClick={() => {
              selectHandler('DEC');
            }}
            isSelected={mode === 'DEC'}
          >
            다이어트 식단
          </S.Mode>
          <S.Mode
            onClick={() => {
              selectHandler('INC');
            }}
            isSelected={mode === 'INC'}
          >
            증량 식단
          </S.Mode>
        </S.FlexContainer>

        <S.FlexContainer>
          활동량
          <S.Activity
            onClick={() => {
              activityHandler('LESS');
            }}
            isSelected={activity === 'LESS'}
          >
            <div className="emoji">😅</div>
            적음
          </S.Activity>
          <S.Activity
            onClick={() => {
              activityHandler('NORMAL');
            }}
            isSelected={activity === 'NORMAL'}
          >
            <div className="emoji">🙂</div>
            보통
          </S.Activity>
          <S.Activity
            onClick={() => {
              activityHandler('MORE');
            }}
            isSelected={activity === 'MORE'}
          >
            <div className="emoji">🥰</div>많음
          </S.Activity>
        </S.FlexContainer>
        <S.Button type="submit" value="다음"></S.Button>
      </form>
    </S.MyGoalWrapper>
  );
}

export default GoalUserInfoForm;
