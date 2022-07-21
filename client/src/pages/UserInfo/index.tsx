import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { patchUserInfoAsync } from 'slices/usersInfoSlice';
import Container from 'components/styles/Container';
import Logo from 'components/common/Logo';
import Navbar from 'components/common/Navbar';
import * as S from './style';

interface FormData {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

function UserInfo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');

  const { isLogin, is_login_first } = useAppSelector(
    (state) => state.usersInfo.value,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const submitHandler = async ({ currentPassword, password }: FormData) => {
    try {
      await dispatch(
        patchUserInfoAsync({
          currentPassword,
          password,
        }),
      ).unwrap();
      navigate('/mypage');
    } catch (error: any) {
      switch (error.message) {
        case 'auth/wrong-password':
          setError('잘못된 비밀번호를 입력하였습니다.');
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
    } else if (!isLogin) {
      navigate('/');
    }
  }, [is_login_first, isLogin]);

  return (
    <Container>
      <Logo />
      <S.MypageContainer>
        <S.UserInfoContainer>
          <S.UserInfoHeader>유저 정보 수정</S.UserInfoHeader>
          <form onSubmit={handleSubmit(submitHandler)}>
            <S.UserInfoInputLabel>현재 비밀번호</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              type="password"
              {...register('currentPassword', {
                required: '필수 항목입니다.',
                minLength: {
                  value: 4,
                  message: '4자 이상 입력해주세요.',
                },
                onChange: onChangeInput,
              })}
            />
            {errors.currentPassword && (
              <S.Errormessage>{errors.currentPassword.message}</S.Errormessage>
            )}
            <S.UserInfoInputLabel>변경할 비밀번호</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              type="password"
              {...register('password', {
                required: '필수 항목입니다.',
                validate: (val: string) => {
                  if (watch('currentPassword') == val) {
                    return '현재 비밀번호와 같은 비밀번호 입니다.';
                  }
                },
                onChange: onChangeInput,
              })}
            />
            {errors.password && (
              <S.Errormessage>{errors.password.message}</S.Errormessage>
            )}
            <S.UserInfoInputLabel>변경할 비밀번호 확인</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              type="password"
              {...register('passwordConfirm', {
                required: '필수 항목입니다.',
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return '비밀번호가 일치하지 않습니다.';
                  }
                },
                onChange: onChangeInput,
              })}
            />
            {errors.passwordConfirm && (
              <S.Errormessage>{errors.passwordConfirm.message}</S.Errormessage>
            )}
            {error && <S.LargeErrorMessage>{error}</S.LargeErrorMessage>}
            <S.UserInfoButton type="submit">수정하기</S.UserInfoButton>
          </form>
        </S.UserInfoContainer>
      </S.MypageContainer>
      <Navbar />
    </Container>
  );
}

export default UserInfo;
