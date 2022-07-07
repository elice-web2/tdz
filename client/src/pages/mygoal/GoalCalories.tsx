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
      목표 섭취 열량
      <FlexContainer>
        <InputTag placeholder="성별을 입력해주세요." value="1200"></InputTag>
      </FlexContainer>


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
 
`


const FlexContainer = styled.div`
  width:90%;
  margin: 15px auto;
  display:flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  &.mode {
    margin-top: 30px;
  }
`
const InputTag = styled.input`
  width: 60%;
  margin-left: 30px;
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
  `
  const Step = styled.div`
  text-align:start;
  font-size: 12px;
  font-weight: 600;
  margin: 10px 0;
`

export default GoalCalories;