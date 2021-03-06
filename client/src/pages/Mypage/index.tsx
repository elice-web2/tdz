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
                        ????????? ??????
                      </div>
                      <div
                        onClick={() => {
                          navigate('/mypage/user_info');
                        }}
                      >
                        ???????????? ??????
                      </div>
                      <div onClick={logoutHandler}>????????????</div>
                      <div onClick={DelUserHandler}>????????????</div>
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
                  <S.UserGoal>?????? ??????</S.UserGoal>
                  <S.UserGoalTextInfo>{comment}</S.UserGoalTextInfo>
                </S.UserProfileInfoContainer>
              </S.UserProfileContainer>
            </S.MypageItemBox>
            <S.MygoalSettingContainer
              onClick={() => {
                navigate('/mypage/goal_step1');
              }}
            >
              <S.Mygoal>?????? ??????</S.Mygoal>
              <div>
                <FontAwesomeIcon icon={faAngleRight} className="SettingGoal" />
              </div>
            </S.MygoalSettingContainer>
            <S.MypageItemBox myPage="second">
              <S.UserGoalNumberContainer>
                <S.UserGoalNumberInfo>
                  <p>?????? ??????</p>
                  <p>{userProfile.goal_weight}kg</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>?????? ?????????</p>
                  <p>{userProfile.nutrient.kcal}cal</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>?????????</p>
                  <p>
                    {TDZ.carbPercent} : {TDZ.proteinPercent} : {TDZ.fatPercent}
                  </p>
                </S.UserGoalNumberInfo>
              </S.UserGoalNumberContainer>
              <S.UserGoalNumberContainer>
                <S.UserGoalNumberInfo>
                  <p>??????</p>
                  <p>{userProfile.age}???</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>???</p>
                  <p>{userProfile.height}cm</p>
                </S.UserGoalNumberInfo>
                <S.UserGoalNumberInfo>
                  <p>?????? ??????</p>
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
