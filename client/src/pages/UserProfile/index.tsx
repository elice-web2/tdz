import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { patchActivityAsync } from '../../slices/usersInfoSlice';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import * as S from './style';

function UserInfo() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const usersInfoNickname = useAppSelector(
    (state) => state.usersInfo.value.nickname,
  );
  const usersInfoComment = useAppSelector(
    (state) => state.usersInfo.value.comment,
  );

  const [nickname, setNickname] = useState<string>(usersInfoNickname);
  const [comment, setComment] = useState<string>(usersInfoComment);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(patchActivityAsync({ nickname: nickname, comment: comment }));
      navigate('/mypage');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Logo />
      <S.MypageContainer>
        <S.UserInfoContainer>
          <S.UserInfoHeader>프로필 변경</S.UserInfoHeader>
          <form method="post" onSubmit={submitHandler}>
            <S.UserProfileImage src="https://images.freeimages.com/images/large-previews/4f3/salad-1-1323575.jpg" />
            <S.UserInfoInputLabel>닉네임</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              type="text"
              onChange={(e) => setNickname(e.target.value)}
            />
            <S.UserInfoInputLabel>나의 각오</S.UserInfoInputLabel>
            <S.UserInfoCommentInputBox
              onChange={(e) => setComment(e.target.value)}
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
