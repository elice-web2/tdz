import * as S from './style';
import { deleteMeals } from '../../../slices/mealsSlice';
import { useAppDispatch } from '../../../hooks';
import { MealsCartListType } from '../../../customType/meal.type';

function MealsCartList({ name, quantity, totalGram, code }: MealsCartListType) {
  const dispatch = useAppDispatch();

  return (
    <li key={name}>
      <S.MealHeaderBox>
        <S.MealTitle>{name}</S.MealTitle>
        <S.MealDeleteBtn
          onClick={() => {
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
