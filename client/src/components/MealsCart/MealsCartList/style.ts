import styled from 'styled-components';

export const MealHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px 6px 15px;
`;

export const MealTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
interface ButtonProps {
  onClick: () => void;
}

export const MealDeleteBtn = styled.button<ButtonProps>`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const QuanBox = styled.div`
  padding: 10px 0 25px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;

  span {
    font-size: 15px;
  }
`;

export const QuanText = styled.p`
  font-size: 15px;
  margin-right: 8px;
`;
