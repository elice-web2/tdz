import styled from 'styled-components';

export const FlexContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  height: 100vh;
`;

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 400px;
  padding: 40px 24px;
  margin: 0 20px;

  border: 0.1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #fff;
`;

export const SignText = styled.h2`
  justify-content: flex-start;
  margin: 20px 0;
  font-size: 28px;
  font-weight: 400;
`;

export const SignInputLabel = styled.h4`
  font-size: 12px;
  margin: 10px 0;
`;

export const SignInputBox = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 95%;

  background-color: #d9d9d9;
  border: none;
  border-radius: 5px;

  padding: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;

  padding: 20px 0;

  font-size: 14px;

  a {
    margin-left: 10px;
    text-decoration: none;
    color: #61b8ea;
  }
`;

export const SignButton = styled.button`
  width: 70%;
  height: 32px;

  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.mainColor.darker};

  font-size: 12px;
  font-weight: bold;
  color: #ffffff;

  cursor: pointer;
`;

export const Errormessage = styled.div`
  padding-top: 5px;

  font-size: 12px;
  color: rgba(255, 0, 0, 0.6);
`;

export const LargeErrorMessage = styled(Errormessage)`
  padding-bottom: 8px;
  font-size: 14px;
`;

export const FlexWrapper = styled.div`
  ${({ theme }) => theme.flexbox('column')}
`;
