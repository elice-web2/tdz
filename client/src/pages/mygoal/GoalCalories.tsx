import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/styles/Container';


const GoalCalories = () => {
  const navigate = useNavigate();
  return (
    <Container>
    <MyGoalWrapper>
      <CircleContainer>
        <StepCircle active={false}></StepCircle>
        <StepCircle active={true}></StepCircle>
        <StepCircle active={false}></StepCircle> 
      </CircleContainer>
      <Step>STEP 2</Step>
      <Title>하루 섭취 열량 입력하기</Title>
      <Title className='subTitle'>목표 섭취 열량</Title>
      <InputTag defaultValue="1200"></InputTag>
      
      <Title className='subCalorie'>철수님의 일일 건장 섭취량은</Title>
      <Title className='calorie'>1200 kcal</Title>
      <Title className='subCalorie'>입니다.</Title>

      <Button status="next" onClick={()=> navigate("/mypage/user_info")} >다음</Button>
    </MyGoalWrapper>
</Container>
  )
}
const MyGoalWrapper = styled.div`
  padding: 25px;
  text-align: center;
`
const Button = styled.button<{status: string}>`
  width: 220px;
  height: 30px;
  
  background-color: black;
  color: white;
  border-radius: 8px;
  border-style: none;
  font-style:none;
  margin-top: 80px;
 
`

const InputTag = styled.input`
  width: 60%;
  margin: 0 0 80px 0;
  width: 100%;
  height: 30px;
  background-color: lightgrey;
`
const CircleContainer = styled.div`
  display:flex;
  margin : 20px 0;
  align-items: center;
`
const StepCircle = styled.div<{active : boolean}>`
  width:${props => props.active ? "40px":"30px"};
  height:${props => props.active ? "40px":"30px"};
  border-radius: 50%;
  background-color: ${props => props.active ? "grey":"lightgrey"};

  margin-right: 10px;

`
const Title = styled.div`
  text-align:start;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  &.subTitle {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }
  &.subCalorie {
    font-weight:400;
    text-align: center;
  }
  &.calorie {
    font-size: 50px;
    text-align: center;
  }
`
const Step = styled.div`
text-align:start;
font-size: 12px;
font-weight: 600;
margin: 10px 0;
`

export default GoalCalories;