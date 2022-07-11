import { useNavigate } from 'react-router-dom';
import * as S from '../style';

function GoalCaloriesForm() {
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <form onSubmit={submitHandler}>
        <S.Title className="subTitle">목표 섭취 열량</S.Title>
        <S.InputTag widthSize="large" defaultValue="1200"></S.InputTag>

        <S.Title className="subCalorie">철수님의 일일 건장 섭취량은</S.Title>
        <S.Title className="calorie">1200 kcal</S.Title>
        <S.Title className="subCalorie">입니다.</S.Title>

        <S.Button type="submit" value="다음"></S.Button>
      </form>
    </S.MyGoalWrapper>
  );
}

export default GoalCaloriesForm;
