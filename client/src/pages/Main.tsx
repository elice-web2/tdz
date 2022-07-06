import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Container from '../components/styles/Container';

const Main: React.FC = () => {
  return (
    <Container>
      <LogoText>TDZ</LogoText>
      <IntroText>오늘 하루, 무엇을 드셨나요?</IntroText>
      <IntroText>매일의 식단을 기록해보세요!</IntroText>
      <IntroText>당신의 건강이 달라집니다!</IntroText>
      <StartText>지금 시작하세요</StartText>
      <LoginContainer>
        <div>
          <img src={require('../assets/kakao.png')}></img>
        </div>
        <div>
          <FontAwesomeIcon icon={faGoogle} className="google" />
        </div>
        <Link to="/signin">
          <div>
            {' '}
            <FontAwesomeIcon icon={faEnvelope} className="email" />
          </div>
        </Link>
      </LoginContainer>

      <MainBackground></MainBackground>
    </Container>
  );
};

const MainBackground = styled.div`
  width: 420px;
  height: 840px;
  background-image: url('https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg');

  z-index: -1;
  opacity: 0.5;
  position: absolute;
  top: 0;
`;

const LogoText = styled.h1`
  positon: relative;
  color: black;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin: 130px 0 80px 0;
`;

const IntroText = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin: 10px 0;

  text-align: center;
`;

const StartText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  margin-top: 160px;
  margin-bottom: 40px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;

  margin-bottom: 20px;
  cursor: pointer;

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid gray;
    background-color: beige;
    position: relative;

    img {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 10px;
      left: 10px;
    }

    .google,
    .email {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
    }
    .email {
      color: black;
    }
  }
`;
export default Main;
