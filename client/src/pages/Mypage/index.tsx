import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faHammer,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  logout,
  getLogOutAsync,
  delUserAsync,
} from '../../slices/usersInfoSlice';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import { TDZPercent } from '../../utils';
import * as S from './style';
import { initDate } from '../../slices/dateSlice';

function Mypage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userProfile = useAppSelector((state) => state.usersInfo.value);
  const nickname = userProfile.nickname;
  const comment = userProfile.comment;

  const TDZ = TDZPercent(userProfile.nutrient);

  const logoutHandler = (event: any) => {
    try {
      localStorage.clear();
      event.preventDefault();
      localStorage.removeItem('login');
      localStorage.removeItem('userInfo');
      dispatch(initDate());
      dispatch(getLogOutAsync());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const DelUserHandler = async (event: any) => {
    try {
      event.preventDefault();
      localStorage.removeItem('login');
      localStorage.removeItem('userInfo');
      await dispatch(delUserAsync());
      await dispatch(getLogOutAsync());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Logo />
      <S.MypageContainer>
        <S.MypageItemBox>
          <S.SettingProfileContainer>
            <div
              onClick={() => {
                navigate('/mypage/user_profile');
              }}
            >
              <FontAwesomeIcon icon={faGear} className="SettingUserProfile" />
            </div>
            <div
              onClick={() => {
                navigate('/mypage/user_info');
              }}
            >
              <FontAwesomeIcon icon={faHammer} className="SettingUserInfo" />
            </div>
          </S.SettingProfileContainer>
          <S.UserProfileInfoContainer>
            <S.UserProfileImage src="https://images.freeimages.com/images/large-previews/4f3/salad-1-1323575.jpg" />
            <S.UserPofileInfoContainer>
              <S.UserNicknameText>{nickname}</S.UserNicknameText>
              <S.UserGoal>나의 각오</S.UserGoal>
              <S.UserGoalTextInfo>{comment}</S.UserGoalTextInfo>
            </S.UserPofileInfoContainer>
          </S.UserProfileInfoContainer>
        </S.MypageItemBox>
        <S.ButtonContainer>
          <S.LogoutButton onClick={DelUserHandler}>회원탈퇴</S.LogoutButton>
          <S.LogoutButton onClick={logoutHandler}>로그아웃</S.LogoutButton>
        </S.ButtonContainer>
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
            <S.UserGoalNumberInfo>
              목표 체중{userProfile.goal_weight}
            </S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>
              권장 칼로리{userProfile.nutrient.kcal}
            </S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>
              탄단지{TDZ.carb}
              {TDZ.protein}
              {TDZ.fat}
            </S.UserGoalNumberInfo>
          </S.UserGoalNumberContainer>
          <S.UserGoalNumberContainer>
            <S.UserGoalNumberInfo>
              나이<p>{userProfile.age}</p>
            </S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>키{userProfile.height}</S.UserGoalNumberInfo>
            <S.UserGoalNumberInfo>
              몸무게<p>{userProfile.current_weight}</p>
            </S.UserGoalNumberInfo>
          </S.UserGoalNumberContainer>
        </S.MypageItemBox>
      </S.MypageContainer>
      <Navbar />
    </Container>
  );
}

export default Mypage;
