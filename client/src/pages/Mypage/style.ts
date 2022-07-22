import styled from 'styled-components';

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 20% 0;
`;

export const MypageItemBox = styled.div<{ myPage?: string }>`
  width: 75%;
  height: 180px;
  padding: 20px 24px;
  margin-bottom: 50px;

  background: rgba(217, 217, 217, 0.15);
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 3px 8px rgb(192, 207, 255, 1);
  border-radius: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  position: relative;

  right: 30px;
`;

export const UserButton = styled.button`
  margin: 20px 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: transparent;

  color: gray;
  cursor: pointer;
`;

export const MygoalSettingContainer = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;

  margin: 4px 0 10px 40px;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Mygoal = styled.div`
  padding: 0 4px 0 0;

  font-size: 16px;
  font-weight: bold;
  z-index: 3;
`;

export const SettingProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const UserProfileContainer = styled.div`
  display: flex;
`;

export const UserProfileImage = styled.img.attrs((imgUrl) => ({
  src: imgUrl.src,
}))`
  position: relative;
  top: 25px;
  width: 35%;
  height: 35%;
  margin-right: 24px;

  border-radius: 50%;
  border: none;
`;

export const UserProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const UserNicknameText = styled.h2`
  margin: 10px 0;

  font-size: 18px;
  font-weight: 600;
`;

export const UserGoal = styled.h4`
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
`;

export const UserGoalTextInfo = styled.p`
  margin-top: 10px;

  font-size: 18px;
`;

export const UserGoalNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 15px 0 20px 0;

  text-align: center;

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p:first-child {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const UserGoalNumberInfo = styled.div`
  font-weight: bold;
  width: 35%;
  & p:first-of-type {
    font-weight: 500;
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const DropDownMenu = styled.div`
  position: absolute;
  right: 0%;
  top: 150%;
  width: 160px;
  border-radius: 12px;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.95);
  div {
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    color: red;
    font-weight: bold;
    padding: 12px;
    width: 75%;
    margin: 4% auto;
    &:not(:last-of-type) {
      color: black;
      /* border-bottom: 0.5px solid gray; */
    }
  }
  div:hover {
    border-radius: 25px;
    background-color: ${({ theme }) => theme.mainColor.normal};
    color: white;
    &:last-of-type {
      background-color: #faa0a0;
    }
  }
`;

export const OutsideModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0);
  z-index: 2;
`;
