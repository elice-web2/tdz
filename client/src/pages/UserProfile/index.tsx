// dependencies
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
// components
import Container from 'components/styles/Container';
import Logo from 'components/common/Logo';
import Navbar from 'components/common/Navbar';
// stores
import {
  patchActivityAsync,
  uploadImageFileAsync,
} from 'slices/usersInfoSlice';

// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import * as S from './style';

interface InputFormData {
  input_name: string;
  input_comment: string;
}

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<InputFormData>();
  const fileRef = useRef<HTMLInputElement>(null);

  const { nickname, comment, profile_image } = useAppSelector(
    (state) => state.usersInfo.value,
  );

  const submitHandler = ({ input_name, input_comment }: InputFormData) => {
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

  const uploadImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append('src', file);
    try {
      await dispatch(uploadImageFileAsync(formData));
    } catch (err: any) {
      console.error(err);
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
              <S.UserProfileImage
                src={
                  profile_image ===
                  'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'
                    ? require('../../assets/default_image.png')
                    : profile_image
                }
              />
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
                maxLength: 20,
              })}
              defaultValue={nickname}
              maxLength={20}
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
