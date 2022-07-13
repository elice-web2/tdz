import { useNavigate } from 'react-router-dom';
import * as S from '../style';

function GoalNutrientForm() {
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <S.MyGoalWrapper>
      <S.CircleContainer>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle active></S.StepCircle>
      </S.CircleContainer>
      <S.Step>STEP 3</S.Step>
      <S.Title>탄단지 섭취량 입력하기</S.Title>
      <form onSubmit={submitHandler}>
        <S.Title align="end" className="subTitle">
          목표 섭취 열량
        </S.Title>
        <S.FlexContainer>
          <span>탄수화물</span>
          <span className="percentile">30%</span>
          <S.InputTag widthSize="medium" defaultValue="1200"></S.InputTag>
        </S.FlexContainer>
        <S.FlexContainer>
          <span>단백질</span>
          <span className="percentile">60%</span>
          <S.InputTag widthSize="medium" defaultValue="1200"></S.InputTag>
        </S.FlexContainer>
        <S.FlexContainer className="fastNutrient">
          <span>지방</span>
          <span className="percentile">10%</span>
          <S.InputTag widthSize="medium" defaultValue="1200"></S.InputTag>
        </S.FlexContainer>
        <S.FlexContainer>
          <S.Title className="subTitle">최종 섭취 열량</S.Title>
          <S.Title>1792 kcal</S.Title>
        </S.FlexContainer>
        <S.Button type="submit" value="입력 완료"></S.Button>
      </form>
    </S.MyGoalWrapper>
  );
}

export default GoalNutrientForm;
