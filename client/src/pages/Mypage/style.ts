import styled from 'styled-components';

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 150px 0 150px 0;
`;

export const MypageItemBox = styled.div`
  width: 240px;
  height: 120px;
  padding: 20px 24px;

  box-shadow: 2px 2px 6px 0px gray;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

export const LogoutButton = styled.button`
  align-self: flex-end;

  margin: 10px 60px 10px 0;

  border: none;
  background-color: transparent;

  color: gray;
`;

export const MygoalSettingContainer = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;

  margin: 4px 0 4px 60px;

  border: none;
  background-color: transparent;
`;

export const Mygoal = styled.div`
  padding: 0 4px 0 0;

  font-size: 14px;
  font-weight: bold;
`;

export const SettingProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UserProfileInfoContainer = styled.div`
  display: flex;
`;

export const UserProfileImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 90px;
  height: 90px;
  margin-right: 24px;

  border-radius: 50%;
  border: none;
`;

export const UserPofileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNicknameText = styled.h2`
  margin: 10px 0;

  font-size: 16px;
  font-weight: 600;
`;

export const UserGoal = styled.h4`
  font-size: 12px;
`;

export const UserGoalTextInfo = styled.p`
  margin-top: 10px;

  font-size: 10px;
`;

export const UserGoalNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 10px 0 30px 0;
`;

export const UserGoalNumberInfo = styled.div`
  font-weight: bold;
`;
