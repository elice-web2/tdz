import * as S from './style';
import { deleteMeals } from '../../../slices/mealsSlice';
import { useAppDispatch } from '../../../hooks';

interface MealsCartListProps {
  name: string;
  quantity: number;
  totalGram: number;
  code: string;
}

function MealsCartList({
  name,
  quantity,
  totalGram,
  code,
}: MealsCartListProps) {
  const dispatch = useAppDispatch();

  return (
    <li key={name}>
      <S.MealHeaderBox>
        <S.MealTitle>{name}</S.MealTitle>
        <S.MealDeleteBtn
          onClick={() => {
            console.log(dispatch(deleteMeals(code)));
            dispatch(deleteMeals(code));
          }}
        >
          X
        </S.MealDeleteBtn>
      </S.MealHeaderBox>
      <S.QuanBox>
        <S.QuanText>{quantity}인분</S.QuanText>
        <span>({totalGram}g)</span>
      </S.QuanBox>
    </li>
  );
}

export default MealsCartList;
