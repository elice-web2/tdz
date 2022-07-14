import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/styles/Container';
import { useAppDispatch } from '../../hooks';
import { postLoginAsync, getUsersInfoAsync } from '../../slices/usersInfoSlice';
import * as S from './style';

function Signin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(postLoginAsync({ email: email, password: password }));
      await dispatch(getUsersInfoAsync());
      localStorage.setItem('login', 'true');
      navigate('/home');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <S.SigninContainer>
        <S.SigninText>로그인</S.SigninText>
        <form method="post" onSubmit={submitHandler}>
          <S.SigninInputLabel>아이디</S.SigninInputLabel>
          <S.SigninInputBox
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.SigninInputLabel>비밀번호</S.SigninInputLabel>
          <S.SigninInputBox
            type="password"
            onChange={(e) => setPassword(String(e.target.value))}
          />
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
        </form>
      </S.SigninContainer>
    </Container>
  );
}

export default Signin;
