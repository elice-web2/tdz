import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import * as S from './style';

function Mypage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <S.MypageContainer>
        <S.MypageItemBox>
          <S.SettingProfileContainer>
            <div
              onClick={() => {
                navigate('/mypage/user_info');
              }}
            >
              <FontAwesomeIcon icon={faGear} className="SettingProfile" />
            </div>
          </S.SettingProfileContainer>
          <S.UserProfileInfoContainer>
            <S.UserProfileImage src="https://images.freeimages.com/images/large-previews/4f3/salad-1-1323575.jpg" />
            <S.UserPofileInfoContainer>
              <S.UserNicknameText>닉네임</S.UserNicknameText>
              <S.UserGoal>나의 각오</S.UserGoal>
              <S.UserGoalTextInfo>
                나의 각오를 보여주는 공간입니다.
              </S.UserGoalTextInfo>
            </S.UserPofileInfoContainer>
          </S.UserProfileInfoContainer>
        </S.MypageItemBox>
        <S.LogoutButton>로그아웃</S.LogoutButton>
        <S.MygoalSettingContainer>
          <S.Mygoal>나의 목표</S.Mygoal>
          <div
            onClick={() => {
              navigate('/mypage/goal_step1');
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} className="SettingGoal" />
          </div>
        </S.MygoalSettingContainer>
        <S.MypageItemBox>
          <S.UserGoalNumberContainer>
            <S.UserGoalNumberInfo>목표 체중</S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>권장 칼로리</S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>탄단지</S.UserGoalNumberInfo>
          </S.UserGoalNumberContainer>
          <S.UserGoalNumberContainer>
            <S.UserGoalNumberInfo>나이</S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>키</S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>몸무게</S.UserGoalNumberInfo>
          </S.UserGoalNumberContainer>
        </S.MypageItemBox>
      </S.MypageContainer>
      <Navbar />
    </Container>
  );
}

export default Mypage;
