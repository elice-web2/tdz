import styled from 'styled-components';

export const SignupContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 240px;
  height: 320px;
  padding: 40px 24px;

  box-shadow: 2px 2px 6px 0px gray;
  border-radius: 16px;
  background-color: #fff;
`;

export const SignupText = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  font-weight: 600;
`;

export const SignupInputLabel = styled.h4`
  font-size: 12px;
  margin: 10px 0;
`;

export const SignupInputBox = styled.input.attrs((props) => ({
  type: props.type,
}))`
  background-color: #d9d9d9;
  border: none;

  padding: 8px 32px;
  margin: 0 auto;
`;

export const SigninContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;

  position: absolute;
  top: 75%;
  transform: translate(0%, -50%);
`;

export const SignupButton = styled.button`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);

  width: 200px;
  height: 32px;

  border-radius: 12px;
  background-color: #121212;

  font-size: 12px;
  color: #ffffff;
`;
