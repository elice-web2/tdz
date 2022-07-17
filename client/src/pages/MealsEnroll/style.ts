import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.mainColor.lighter};

  span {
    position: absolute;
    left: 20px;
    font-size: 25px;
    cursor: pointer;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const InfoBox = styled.div`
  width: 100%;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 10px 20px;
  }
`;

export const NameInputElement = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 40px 0;
  p {
    position: absolute;
    left: 30px;
    font-size: 14px;
  }
  input {
    position: absolute;
    right: 30px;
    width: 180px;
    height: 30px;
    padding-left: 10px;
    font-size: 16px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;
export const AddBtn = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.mainColor.normal};
  font-weight: bold;
  font-size: 14px;
`;

export const BorderLine = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 5px solid #eeeeee;
`;
