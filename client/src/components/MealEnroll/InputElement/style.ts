import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 10px 0;
  padding: 20px;
  box-sizing: border-box;

  input {
    padding-left: 10px;
    width: 70px;
    height: 24px;
    font-size: 16px;
  }
`;

export const InfoTitle = styled.p`
  position: absolute;
  left: 30px;
  font-size: 14px;
`;

export const InputBox = styled.div<{ isValue: boolean }>`
  position: absolute;
  right: 30px;

  span {
    position: relative;
    right: 15px;
    bottom: 3px;
    color: ${(props) => (props.isValue ? 'black' : 'lightgray')};
  }
`;
