import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../components/styles/Container';

const UserInfo:React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
        <Wrapper>
          <CircleContainer>
            <StepCircle active={true}></StepCircle>
            <StepCircle active={false}></StepCircle>
            <StepCircle active={false}></StepCircle> 
          </CircleContainer>
          <Step>STEP 1</Step>
          <Title>필수 정보 입력하기</Title>

          <FlexContainer>
            성별 <InputTag placeholder="성별을 입력해주세요."></InputTag>
          </FlexContainer>
          <FlexContainer>
            나이 <InputTag placeholder="성별을 입력해주세요."></InputTag>
          </FlexContainer>
          <FlexContainer>
            키 <InputTag placeholder="성별을 입력해주세요."></InputTag>
          </FlexContainer>
          <FlexContainer>
            시작 체중 <InputTag placeholder="성별을 입력해주세요."></InputTag>
          </FlexContainer>
          <FlexContainer>
            목표 체중 <InputTag placeholder="성별을 입력해주세요."></InputTag>
          </FlexContainer>
          
          <FlexContainer className="mode">
            <Mode>다이어트 식단</Mode>
            <Mode>증량 식단</Mode>
          </FlexContainer>

          <FlexContainer>
            활동량 
          </FlexContainer>
          <Button status="next" onClick={()=> navigate("/mypage/goal_step1")} >다음</Button>
        </Wrapper>
    </Container>
  );
};
const Wrapper = styled.div`
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
const Mode = styled.div`
  width: 50%; 
  height 100px;
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


export default UserInfo;