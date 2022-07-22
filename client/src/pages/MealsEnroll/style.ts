import styled from 'styled-components';

export const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  position: relative;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  color: white;

  span {
    position: absolute;
    left: 20px;
    font-size: 20px;
    cursor: pointer;
  }

  h1 {
    font-size: 17px;
    font-weight: 500;
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

export const NutrientBox = styled.div`
  border-top: 1px solid #eeeeee;
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 10px 20px;
  }
`;

interface CheckProps {
  changeColor?: boolean;
}
export const NutrientInputElement = styled.div<CheckProps>`
  display: flex;
  align-items: center;
  position: relative;
  margin: 40px 0;
  height: 20px;
  p {
    position: absolute;
    left: 30px;
    font-size: 14px;
  }
  input {
    position: absolute;
    right: 30px;
    width: 80px;
    height: 30px;
    padding-left: 10px;
    font-size: 16px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  span {
    position: absolute;
    bottom: 5px;
    right: 35px;
    color: ${(props) => (props.changeColor ? 'black' : 'lightgray')};
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
  background-color: ${({ theme }) => theme.mainColor.darker};
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
