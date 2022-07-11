import * as S from './style';

interface MealsCartListProps {
  name: string;
  quantity: number;
}

function MealsCartList({ name, quantity }: MealsCartListProps) {
  return (
    <li>
      <S.MealHeaderBox>
        <S.MealTitle>{name}</S.MealTitle>
        <S.MealDeleteBtn>X</S.MealDeleteBtn>
      </S.MealHeaderBox>
      <S.QuanText>{quantity}인분</S.QuanText>
    </li>
  );
}

export default MealsCartList;
