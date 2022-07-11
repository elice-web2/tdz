import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Main() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.VideoContainer>
        <S.Video
          src={require('../../assets/coffee.mp4')}
          autoPlay
          loop
          muted
        ></S.Video>
      </S.VideoContainer>

      <S.LogoText>TDZ</S.LogoText>
      <S.IntroText>오늘 하루, 무엇을 드셨나요?</S.IntroText>
      <S.IntroText>매일의 식단을 기록해보세요!</S.IntroText>
      <S.IntroText>당신의 건강이 달라집니다!</S.IntroText>
      <S.LoginContainer>
        <S.LoginBox brand={'카카오'}>
          <span className="icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          <p>카카오로 시작하기</p>
        </S.LoginBox>
        <S.LoginBox brand={'구글'}>
          <span className="icon">
            <FontAwesomeIcon icon={faGoogle} />
          </span>
          <p>구글로 시작하기</p>
        </S.LoginBox>
        <S.LoginBox
          brand="TDZ"
          onClick={() => {
            navigate('/signin');
          }}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} className="email" />
          </span>
          <p>TDZ로 시작하기</p>
        </S.LoginBox>
      </S.LoginContainer>
    </S.Container>
  );
}

export default Main;
