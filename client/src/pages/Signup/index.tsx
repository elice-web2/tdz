import { useNavigate } from 'react-router-dom';
import Container from '../../components/styles/Container';
import { useAppDispatch } from '../../hooks';
import * as S from './style';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Container>
      <S.SignupContainer>
        <S.SignupText>회원가입</S.SignupText>
        <S.SignupInputLabel>아이디</S.SignupInputLabel>
        <S.SignupInputBox type="email" />
        <S.SignupInputLabel>비밀번호</S.SignupInputLabel>
        <S.SignupInputBox type="password" />
        <S.SignupInputLabel>비밀번호 확인</S.SignupInputLabel>
        <S.SignupInputBox type="password" />
        <S.SigninContainer>
          <div>이미 계정이 있으신가요?</div>
          <div
            onClick={() => {
              navigate('/signin');
            }}
          >
            로그인
          </div>
        </S.SigninContainer>
        <S.SignupButton>가입하기</S.SignupButton>
      </S.SignupContainer>
    </Container>
  );
}

export default Signup;
