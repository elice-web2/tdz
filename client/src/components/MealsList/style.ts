import styled from 'styled-components';

export const MealsListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 70%;
  height: 150px;
  padding: 10px 30px 10px 80px;
  margin: 20px;

  box-shadow: 2px 2px 6px 0px gray;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

export const MealContainerIconBox = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-around;
  align-items: center;

  top: 15px;
  left: -10px;

  width: 80px;
  height: 30px;

  border-radius: 5px;
  background-color: ${(props) => {
    if (props.color === '아침') return '#FFCA63';
    else if (props.color === '점심') return '#60DA5D';
    else if (props.color === '저녁') return '#9747FF';
    else return '#F69D9D';
  }};

  p {
    font-size: 12px;
    color: white;
  }
`;

export const NutrientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NutrientInfoLine = styled.div`
  border-right: thin solid;
  height: 50px;
`;

export const DeleteButtonBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
