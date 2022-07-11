import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Main: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <VideoContainer>
        <Video
          src={require('../assets/coffee.mp4')}
          autoPlay
          loop
          muted
        ></Video>
      </VideoContainer>

      <LogoText>TDZ</LogoText>
      <IntroText>오늘 하루, 무엇을 드셨나요?</IntroText>
      <IntroText>매일의 식단을 기록해보세요!</IntroText>
      <IntroText>당신의 건강이 달라집니다!</IntroText>
      <LoginContainer>
        <LoginBox brand={'카카오'}>
          <span className="icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          <p>카카오로 시작하기</p>
        </LoginBox>
        <LoginBox brand={'구글'}>
          <span className="icon">
            <FontAwesomeIcon icon={faGoogle} />
          </span>
          <p>구글로 시작하기</p>
        </LoginBox>
        <LoginBox
          brand="TDZ"
          onClick={() => {
            navigate('/signin');
          }}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} className="email" />
          </span>
          <p>TDZ로 시작하기</p>
        </LoginBox>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 420px;
  margin: 0 auto;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
`;

const Video = styled.video`
  width: 100%;
  z-index: -100;
`;

const LogoText = styled.h1`
  position: relative;
  margin-bottom: 80px;
  padding-top: 100px;
  color: black;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
`;

const IntroText = styled.p`
  position: relative;
  margin: 10px 0;
  font-size: 21px;
  font-weight: 500;
  text-align: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
  cursor: pointer;
`;

const LoginBox = styled.div<{ brand: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 60px;
  padding: 5px;
  background-color: ${(props) => {
    if (props.brand === '카카오') {
      return '#FAE100';
    } else if (props.brand === '구글') {
      return '#4285F4';
    } else {
      return 'white';
    }
  }};
  font-size: 30px;
  box-sizing: border-box;

  .icon {
    position: absolute;
    left: 15px;
  }

  p {
    position: absolute;
    left: 60px;
    font-size: 21px;
    font-weight: bold;
  }
`;

export default Main;
