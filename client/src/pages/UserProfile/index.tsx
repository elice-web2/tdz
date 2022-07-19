import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { patchActivityAsync } from '../../slices/usersInfoSlice';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';

interface FormData {
  input_name: string;
  input_comment: string;
}

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormData>();
  const fileRef = useRef<HTMLInputElement>(null);

  const { nickname, comment, profile_image } = useAppSelector(
    (state) => state.usersInfo.value,
  );

  const submitHandler = ({ input_name, input_comment }: FormData) => {
    if (nickname === input_name && comment === input_comment) {
      navigate('/mypage');
      return;
    }
    try {
      dispatch(
        patchActivityAsync({ nickname: input_name, comment: input_comment }),
      );
      navigate('/mypage');
    } catch (error) {
      console.error(error);
    }
  };

  const onClickProfileImage = () => {
    fileRef.current?.click();
  };

  const uploadImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      console.log(e.currentTarget.files[0]);
    }
  };

  return (
    <Container>
      <Logo />
      <S.MypageContainer>
        <S.UserInfoContainer>
          <S.UserInfoHeader>프로필 수정</S.UserInfoHeader>
          <form onSubmit={handleSubmit(submitHandler)}>
            <S.ProfileImageContainer onClick={onClickProfileImage}>
              <S.UserProfileImage src={profile_image} />
              <FontAwesomeIcon
                icon={faPlus}
                mask={faCircle}
                className="plus-icon"
              />
            </S.ProfileImageContainer>
            <input
              type="file"
              ref={fileRef}
              className="file-input"
              accept="image/jpg, image/jpeg, image/png"
              onChange={uploadImageFile}
            />
            <S.UserInfoInputLabel>닉네임</S.UserInfoInputLabel>
            <S.UserInfoNameInputBox
              {...register('input_name', {
                required: '필수 항목입니다.',
                maxLength: 10,
              })}
              defaultValue={nickname}
              maxLength={10}
            />
            <S.UserInfoInputLabel>나의 각오 (50자 이하)</S.UserInfoInputLabel>
            <S.UserInfoCommentInputBox
              {...register('input_comment', {
                required: '필수 항목입니다.',
                maxLength: 50,
              })}
              defaultValue={comment}
              maxLength={50}
            />
            <S.UserInfoButton type="submit">수정하기</S.UserInfoButton>
          </form>
        </S.UserInfoContainer>
      </S.MypageContainer>
      <Navbar />
    </Container>
  );
}

export default UserProfile;
