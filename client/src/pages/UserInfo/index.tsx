import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { patchUserInfoAsync } from '../../slices/usersInfoSlice';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import * as S from './style';

function UserInfo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    email: userEmail,
    isLogin,
    is_login_first,
  } = useAppSelector((state) => state.usersInfo.value);

  const [email, setEmail] = useState<string>(userEmail);
  const [confPassword, setConfPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(
        patchUserInfoAsync({
          email: email,
          currentPassword: confPassword,
          password: newPassword,
        }),
      );
      navigate('/mypage');
    } catch (error) {
      console.error(error);
    }
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
          <form onSubmit={submitHandler}>
            <S.UserInfoInputLabel>아이디</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.UserInfoInputLabel>현재 비밀번호</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              type="password"
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <S.UserInfoInputLabel>변경할 비밀번호</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <S.UserInfoButton type="submit">수정하기</S.UserInfoButton>
          </form>
        </S.UserInfoContainer>
      </S.MypageContainer>
      <Navbar />
    </Container>
  );
}

export default UserInfo;
