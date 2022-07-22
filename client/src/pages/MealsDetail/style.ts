import styled from 'styled-components';

export const MealsInfoBox = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-size: 25px;
  box-sizing: border-box;

  .arrow-icon {
    margin-left: 5px;
    cursor: pointer;
  }

  .star-icon img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    color: yellow;
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  margin-bottom: 15px;
  padding: 20px 10px 20px 15px;
  font-size: 28px;
  font-weight: bold;
`;

export const MainNutrientBox = styled.div`
  display: flex;
  flex-direction: column;

  .info-text {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SubNutrientBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 180px);
  gap: 10px 16px;
  margin: 30px auto;
  font-size: 13px;
  place-items: center;

  .sub-content {
    display: flex;
    justify-content: space-between;
    width: 80%;

    p {
      padding: 3px;
    }
  }
`;
export const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  select {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    option {
      text-align: center;
    }
  }
  .countBtnBox {
    display: flex;
    align-items: center;

    input {
      width: 50px;
      height: 40px;
      padding: 0;
      border: none;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      width: 40px;
      height: 40px;
      border: none;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const AddBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddBtn = styled.button<any>`
  position: absolute;
  bottom: 10px;
  width: 120px;
  height: 40px;
  margin-bottom: 50px;
  background-color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
