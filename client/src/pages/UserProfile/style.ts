import styled from 'styled-components';

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 150px 0 150px 0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 240px;
  height: 320px;
  padding: 40px 24px;

  box-shadow: 2px 2px 6px 0px gray;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

export const UserInfoHeader = styled.h2`
  align-self: center;
  margin: 0 0 20px 0;

  font-size: 24px;
  font-weight: 600;
`;

export const UserInfoInputLabel = styled.h4`
  margin: 10px 0;

  font-size: 12px;
`;

export const UserInfoNameInputBox = styled.input.attrs((props) => ({
  type: props.type,
}))`
  padding: 8px 20px;
  margin: 0 auto;
  width: 200px;

  border: none;
  background-color: grey;
`;

export const UserInfoCommentInputBox = styled.textarea`
  padding: 8px 20px;
  margin: 0 auto;
  width: 200px;

  border: none;
  background-color: grey;
`;

export const UserInfoButton = styled.button`
  align-self: center;

  width: 240px;
  height: 32px;
  margin-top: 20px;

  border: none;
  border-radius: 12px;
  background-color: #121212;

  font-size: 12px;
  color: #ffffff;
`;

export const UserProfileImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  position: relative;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);

  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: none;
`;
