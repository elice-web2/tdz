import { useNavigate } from 'react-router-dom';
import * as S from '../style';

function GoalUserInfoForm() {
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <form onSubmit={submitHandler}>
        <S.FlexContainer>
          성별{' '}
          <S.InputTag
            widthSize="small"
            name="gender"
            type="text"
            placeholder="성별을 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>
        <S.FlexContainer>
          나이{' '}
          <S.InputTag
            widthSize="small"
            type="number"
            placeholder="나이를 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>
        <S.FlexContainer>
          키{' '}
          <S.InputTag
            widthSize="small"
            type="number"
            placeholder="키를 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>
        <S.FlexContainer>
          시작 체중{' '}
          <S.InputTag
            widthSize="small"
            type="number"
            placeholder="현재 체중을 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>
        <S.FlexContainer>
          목표 체중{' '}
          <S.InputTag
            widthSize="small"
            type="number"
            placeholder="목표 체중을 입력해주세요."
            defaultValue={''}
          ></S.InputTag>
        </S.FlexContainer>

        <S.FlexContainer className="mode">
          <S.Mode>다이어트 식단</S.Mode>
          <S.Mode>증량 식단</S.Mode>
        </S.FlexContainer>

        <S.FlexContainer>
          활동량
          <S.Activity>
            <div className="emoji">{/* div태그 img로 바꾸기 나중에 */}</div>
            적음
          </S.Activity>
          <S.Activity>
            <div className="emoji"></div>보통
          </S.Activity>
          <S.Activity>
            <div className="emoji"></div>많음
          </S.Activity>
        </S.FlexContainer>
        <S.Button type="submit" value="다음"></S.Button>
      </form>
    </S.MyGoalWrapper>
  );
}

export default GoalUserInfoForm;
