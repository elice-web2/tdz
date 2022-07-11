import { useNavigate } from 'react-router-dom';
import Container from '../../components/styles/Container';
import * as S from './style';

function Signin() {
  const navigate = useNavigate();

  return (
    <Container>
      <S.SigninContainer>
        <S.SigninText>로그인</S.SigninText>
        <S.SigninInputLabel>아이디</S.SigninInputLabel>
        <S.SigninInputBox type="email" />
        <S.SigninInputLabel>비밀번호</S.SigninInputLabel>
        <S.SigninInputBox type="password" />
        <S.SignUpContainer>
          <div>계정이 없으신가요?</div>
          <div
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </div>
        </S.SignUpContainer>
        <S.SigninButton>로그인</S.SigninButton>
      </S.SigninContainer>
    </Container>
  );
}

export default Signin;
