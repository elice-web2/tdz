// dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faAngleRight } from '@fortawesome/free-solid-svg-icons';
// components
import Container from 'components/styles/Container';
import Logo from 'components/common/Logo';
import Navbar from 'components/common/Navbar';
import LogoutModal from 'components/Mypage/LogoutModal';
import DelUserModal from 'components/Mypage/DelUserModal';
import { ScrollContainer } from 'components/styles/ScrollContainer';
// hooks
import { useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc

import { calculateTDZPercent } from 'utils';
import styled from 'styled-components';

function Mypage() {
  const [openLogoutModal, setOpenLogoutModal] = useState<boolean>(false);
  const [openDelUserModal, setOpenDelUserModal] = useState<boolean>(false);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const navigate = useNavigate();

  const userProfile = useAppSelector((state) => state.usersInfo.value);
  const nutrient = userProfile.nutrient;
  const nickname = userProfile.nickname;
  const comment = userProfile.comment;

  const TDZ = calculateTDZPercent({
    carb: nutrient.carb,
    protein: nutrient.protein,
    fat: nutrient.fat,
  });

  const DropDownHandler = () => {
    setOpenDropDown(!openDropDown);
  };

  const logoutHandler = () => {
    setOpenDropDown(false);
    setOpenLogoutModal(true);
  };

  const DelUserHandler = () => {
    setOpenDropDown(false);
    setOpenDelUserModal(true);
  };

  useEffect(() => {
    localStorage.setItem('usersInfoStorage', JSON.stringify(userProfile));
  }, []);

  return (
    <Container>
      <Logo />
      <Wrapper>
        <ScrollContainer minusHeight={120}>
          <S.MypageContainer>
            {openDropDown && <S.OutsideModal onClick={DropDownHandler} />}
            <S.MypageItemBox>
              {openLogoutModal && (
                <LogoutModal setOpenLogoutModal={setOpenLogoutModal} />
              )}
              {openDelUserModal && (
                <DelUserModal setOpenDelUserModal={setOpenDelUserModal} />
              )}
              <S.SettingProfileContainer>
                <div>
                  <FontAwesomeIcon
                    onClick={DropDownHandler}
                    icon={faGear}
                    className="SettingUserProfile"
                  />
                  {openDropDown && (
                    <S.DropDownMenu>
                      <div
                        onClick={() => {
                          navigate('/mypage/user_profile');
                        }}
                      >
                        프로필 변경
                      </div>
                      <div
                        onClick={() => {
                          navigate('/mypage/user_info');
                        }}
                      >
                        비밀번호 변경
                      </div>
                      <div onClick={logoutHandler}>로그아웃</div>
                      <div onClick={DelUserHandler}>회원탈퇴</div>
                    </S.DropDownMenu>
                  )}
                </div>
              </S.SettingProfileContainer>
              <S.UserProfileContainer>
                <S.UserProfileImage
                  src={
                    userProfile.profile_image ===
                    'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'
                      ? require('../../assets/default_image.png')
                      : userProfile.profile_image
                  }
                />
                <S.UserProfileInfoContainer>
                  <S.UserNicknameText>{nickname}</S.UserNicknameText>
                  <S.UserGoal>나의 각오</S.UserGoal>
                  <S.UserGoalTextInfo>{comment}</S.UserGoalTextInfo>
                </S.UserProfileInfoContainer>
              </S.UserProfileContainer>
            </S.MypageItemBox>
            <S.MygoalSettingContainer
              onClick={() => {
                navigate('/mypage/goal_step1');
              }}
            >
              <S.Mygoal>나의 목표</S.Mygoal>
              <div>
                <FontAwesomeIcon icon={faAngleRight} className="SettingGoal" />
              </div>
            </S.MygoalSettingContainer>
            <S.MypageItemBox myPage="second">
              <S.UserGoalNumberContainer>
                <S.UserGoalNumberInfo>
                  <p>목표 체중</p>
                  <p>{userProfile.goal_weight}kg</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>권장 칼로리</p>
                  <p>{userProfile.nutrient.kcal}cal</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>탄단지</p>
                  <p>
                    {TDZ.carbPercent} : {TDZ.proteinPercent} : {TDZ.fatPercent}
                  </p>
                </S.UserGoalNumberInfo>
              </S.UserGoalNumberContainer>
              <S.UserGoalNumberContainer>
                <S.UserGoalNumberInfo>
                  <p>나이</p>
                  <p>{userProfile.age}세</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>키</p>
                  <p>{userProfile.height}cm</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>현재 체중</p>
                  <p>{userProfile.current_weight}kg</p>
                </S.UserGoalNumberInfo>
              </S.UserGoalNumberContainer>
            </S.MypageItemBox>
          </S.MypageContainer>
        </ScrollContainer>
      </Wrapper>
      <Navbar />
    </Container>
  );
}

export default Mypage;

const Wrapper = styled.div`
  position: relative;
`;
