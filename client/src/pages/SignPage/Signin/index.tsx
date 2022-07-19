import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../../components/styles/Container';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  postLoginAsync,
  getUsersInfoAsync,
} from '../../../slices/usersInfoSlice';
import * as S from '../style';

interface FormData {
  email: string;
  password: string;
}

function Signin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = async ({ email, password }: FieldValues) => {
    try {
      await dispatch(postLoginAsync({ email: email, password: password }));
      await dispatch(getUsersInfoAsync());
      localStorage.setItem('login', 'true');
      navigate('/home');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (isLogin) {
      navigate('/home');
    }
  }, []);

  return (
    <Container>
      <S.FlexContainer>
        <S.SignContainer>
          <S.SignText>로그인</S.SignText>
          <form onSubmit={handleSubmit(submitHandler)}>
            <S.SignInputLabel>아이디</S.SignInputLabel>
            <S.SignInputBox
              type="email"
              {...register('email', {
                required: '필수 항목입니다',
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
                  message: '이메일 형식에 맞지 않습니다.',
                },
              })}
            />
            {errors.email && (
              <S.Errormessage>{errors.email.message}</S.Errormessage>
            )}
            <S.SignInputLabel>비밀번호</S.SignInputLabel>
            <S.SignInputBox
              type="password"
              {...register('password', {
                required: '필수 항목입니다.',
                minLength: {
                  value: 4,
                  message: '4자 이상 입력해주세요.',
                },
              })}
            />
            {errors.password && (
              <S.Errormessage>{errors.password.message}</S.Errormessage>
            )}
            <S.FlexWrapper>
              <S.LinkContainer>
                <div>계정이 없으신가요?</div>
                <Link to="/signup">회원가입</Link>
              </S.LinkContainer>
              <S.SignButton>로그인</S.SignButton>
            </S.FlexWrapper>
          </form>
        </S.SignContainer>
      </S.FlexContainer>
    </Container>
  );
}

export default Signin;
