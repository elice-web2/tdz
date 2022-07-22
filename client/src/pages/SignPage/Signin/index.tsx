// dependencies
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
// components
import Container from 'components/styles/Container';
// stores
import { getUsersInfoAsync, postLoginAsync } from 'slices/usersInfoSlice';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import * as S from '../style';

interface FormData {
  email: string;
  password: string;
}

function Signin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
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
      await dispatch(
        postLoginAsync({ email: email, password: password }),
      ).unwrap();
      await dispatch(getUsersInfoAsync());
      localStorage.setItem('login', 'true');
      navigate('/home');
    } catch (error: any) {
      switch (error.message) {
        case 'auth/wrong-password':
          setError('잘못된 비밀번호를 입력하였습니다.');
          break;
        case 'auth/wrong-email':
          setError('존재하지 않는 이메일입니다.');
          break;
        default:
          return;
      }
    }
  };

  const onChangeInput = () => {
    setError('');
  };

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (isLogin) {
      navigate('/home');
    }
  }, [is_login_first, isLogin]);

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
                onChange: onChangeInput,
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
                onChange: onChangeInput,
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
              {error && <S.LargeErrorMessage>{error}</S.LargeErrorMessage>}
              <S.SignButton>로그인</S.SignButton>
            </S.FlexWrapper>
          </form>
        </S.SignContainer>
      </S.FlexContainer>
    </Container>
  );
}

export default Signin;
