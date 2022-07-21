// dependencies
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
// components
import Container from 'components/styles/Container';
import { ScrollContainer } from 'components/styles/ScrollContainer';
// hooks
import { useAppSelector } from 'hooks';
// styles
import * as S from './style';

function Main() {
  const navigate = useNavigate();
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (isLogin) {
      navigate('/home');
    }
  }, [is_login_first, isLogin]);
  return (
    <Container>
      <ScrollContainer minusHeight={0}>
        <S.LogoText>
          <img src={require('../../assets/logoBlack.png')} />
        </S.LogoText>
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
      </ScrollContainer>
    </Container>
  );
}

export default Main;
