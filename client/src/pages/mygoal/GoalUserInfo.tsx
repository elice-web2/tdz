import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/styles/Container';

const UserInfo:React.FC = () => {
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
   console.log("test", e.currentTarget.gender.value);
   navigate("/mypage/goal_step2")
  }

  
  return (
    <Container>
        <MyGoalWrapper>
          <CircleContainer>
            <StepCircle active={true}></StepCircle>
            <StepCircle active={false}></StepCircle>
            <StepCircle active={false}></StepCircle> 
          </CircleContainer>
          <Step>STEP 1</Step>
          <Title>필수 정보 입력하기</Title>
          <form onSubmit={submitHandler}>
            <FlexContainer>
              성별 <input name="gender" type="text" placeholder="성별을 입력해주세요." defaultValue={""}></input>
            </FlexContainer>
            <FlexContainer>
              나이 <input type="number" placeholder="나이를 입력해주세요." defaultValue={""}></input>
            </FlexContainer>
            <FlexContainer>
              키 <input type="number" placeholder="키를 입력해주세요." defaultValue={""}></input>
            </FlexContainer>
            <FlexContainer>
              시작 체중 <input  type="number" placeholder="현재 체중을 입력해주세요." defaultValue={""}></input>
            </FlexContainer>
            <FlexContainer>
              목표 체중 <input type="number" placeholder="목표 체중을 입력해주세요." defaultValue={""}></input>
            </FlexContainer>
            
            <FlexContainer className="mode">
              <Mode>다이어트 식단</Mode>
              <Mode>증량 식단</Mode>
            </FlexContainer>

            <FlexContainer>
              활동량 
              <StepCircle className='activity'></StepCircle>
              <StepCircle className='activity'></StepCircle>
              <StepCircle className='activity'></StepCircle>
            </FlexContainer>
            <Button 
                type="submit"
                value="다음"
            ></Button>
          </form>
        </MyGoalWrapper>
    </Container>
  );
};
const MyGoalWrapper = styled.div`
  padding: 25px;
  text-align: center;
`
const Button = styled.input`
  width: 220px;
  height: 30px;
  
  background-color: black;
  color: white;
  border-radius: 8px;
  border-style: none;
  font-style:none;
 
`
const Mode = styled.div`
  border-style: none;
  font-style:none;
  width: 50%; 
  height: 100px;
  font-size: 16px;
  weight: 700;
  border-radius: 20px;
  line-height: 100px;
  background-color: lightgrey;
  & + & {
    margin-left: 20px;
}

`

const FlexContainer = styled.div`
  width:90%;
  margin: 15px auto;
  display:flex;
  justify-content: space-between;
  align-items : center;
  font-size: 14px;
  font-weight: 600;
  &.mode {
    margin-top: 30px;
  }
`
const CircleContainer = styled.div`
  display:flex;
  margin : 20px 0;
  align-items: center;
`
const StepCircle = styled.div<{active ?: boolean}>`
  width:${props => props.active ? "40px":"30px"};
  height:${props => props.active ? "40px":"30px"};
  border-radius: 50%;
  background-color: ${props => props.active ? "grey":"lightgrey"};

  margin-right: 10px;
  &.activity {
    width: 50px;
    height: 50px;
    margin: 20px auto;
  }

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


export default UserInfo;