import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/styles/Container';
import { useAppDispatch } from '../../hooks';
import { postLoginAsync, postSignUpAsync } from '../../slices/usersInfoSlice';
import * as S from './style';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confPassword, setConfPassword] = useState<string>('');

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (password === confPassword) {
        await dispatch(postSignUpAsync({ email: email, password: password }));
        await dispatch(postLoginAsync({ email: email, password: password }));
        localStorage.setItem('login', 'true');
        navigate('/mypage/goal_step1');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <S.SignupContainer>
        <S.SignupText>회원가입</S.SignupText>
        <form method="post" onSubmit={submitHandler}>
          <S.SignupInputLabel>아이디</S.SignupInputLabel>
          <S.SignupInputBox
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.SignupInputLabel>비밀번호</S.SignupInputLabel>
          <S.SignupInputBox
            type="password"
            onChange={(e) => setPassword(String(e.target.value))}
          />
          <S.SignupInputLabel>비밀번호 확인</S.SignupInputLabel>
          <S.SignupInputBox
            type="password"
            onChange={(e) => setConfPassword(String(e.target.value))}
          />
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
          <S.SignupButton type="submit">가입하기</S.SignupButton>
        </form>
      </S.SignupContainer>
    </Container>
  );
}

export default Signup;
