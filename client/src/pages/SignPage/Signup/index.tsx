import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../../components/styles/Container';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  postLoginAsync,
  postSignUpAsync,
} from '../../../slices/usersInfoSlice';
import * as S from '../style';

interface FormData {
  email: string;
  password: string;
  password_confirm: string;
}

function Signup() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const submitHandler = async ({ email, password }: FieldValues) => {
    try {
      await dispatch(postSignUpAsync({ email: email, password: password }));
      await dispatch(postLoginAsync({ email: email, password: password }));
      localStorage.setItem('login', 'true');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLogin && is_login_first) {
      navigate('/mypage/goal_step1');
    } else if (isLogin) {
      navigate('/home');
    }
  }, []);

  return (
    <Container>
      <S.FlexContainer>
        <S.SignContainer>
          <S.SignText>회원가입</S.SignText>
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
            <S.SignInputLabel>비밀번호 확인</S.SignInputLabel>
            <S.SignInputBox
              type="password"
              {...register('password_confirm', {
                required: '필수 항목입니다.',
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return '비밀번호가 일치하지 않습니다.';
                  }
                },
              })}
            />
            {errors.password_confirm && (
              <S.Errormessage>{errors.password_confirm.message}</S.Errormessage>
            )}
            <S.FlexWrapper>
              <S.LinkContainer>
                <div>이미 계정이 있으신가요?</div>
                <Link to="/signin">로그인</Link>
              </S.LinkContainer>
              <S.SignButton>가입하기</S.SignButton>
            </S.FlexWrapper>
          </form>
        </S.SignContainer>
      </S.FlexContainer>
    </Container>
  );
}

export default Signup;
