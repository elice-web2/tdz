import styled from 'styled-components';

export const MealsListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 70%;
  height: 135px;
  padding: 10px 30px 10px 80px;
  margin: 20px;

  background: rgba(217, 217, 217, 0.15);
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
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
