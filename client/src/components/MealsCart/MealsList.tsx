import styled from 'styled-components';

export const MealsList: React.FC<{ name: string; quantity: number }> = (
  props,
) => {
  return (
    <li>
      <MealHeaderBox>
        <MealTitle>{props.name}</MealTitle>
        <MealDeleteBtn>X</MealDeleteBtn>
      </MealHeaderBox>
      <QuanText>{props.quantity}인분</QuanText>
    </li>
  );
};

const MealHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px 6px 15px;
`;

const MealTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const MealDeleteBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const QuanText = styled.p`
  padding: 0 20px 30px 16px;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;
