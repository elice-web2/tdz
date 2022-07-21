import styled from 'styled-components';

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 120px);
`;

export const UserInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 320px;
  padding: 40px 24px;

  box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: rgba(140, 158, 255, 0.2);

  form {
    width: 100%;
  }

  .file-input {
    display: none;
  }
`;

export const UserInfoHeader = styled.h2`
  align-self: center;
  margin: 0 0 20px 0;

  font-size: 28px;
  font-weight: 600;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  margin: 0 auto;

  cursor: pointer;

  .plus-icon {
    position: absolute;
    top: 80px;
    right: calc(50% - 40px);

    font-size: 24px;
    color: ${({ theme }) => theme.mainColor.normal};
  }
`;

export const UserInfoInputLabel = styled.h4`
  margin: 10px 0;

  font-size: 12px;
`;

export const UserInfoNameInputBox = styled.input`
  padding: 8px;
  width: 95%;

  background-color: rgba(0, 0, 0, 0.1);

  border-radius: 5px;
  border: none;
`;

export const UserInfoCommentInputBox = styled.textarea`
  padding: 8px;
  width: 95%;

  background-color: rgba(0, 0, 0, 0.1);

  border-radius: 5px;
  border: none;

  resize: none;
`;

export const UserInfoButton = styled.button`
  width: 100%;
  height: 32px;
  margin-top: 20px;

  border: none;
  border-radius: 12px;
  background-color: #121212;

  font-size: 12px;
  color: #ffffff;
`;

export const UserProfileImage = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: none;
`;
