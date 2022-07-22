// dependencies
import { useNavigate } from 'react-router-dom';
// stores
import { deleteMeals } from 'slices/mealsSlice';
// types
import { MealsCartListType } from 'customType/meal.type';
// hooks
import { useAppDispatch } from 'hooks';
// styles
import * as S from './style';

function MealsCartList({ id, name, quantity, totalGram }: MealsCartListType) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <li key={id}>
      <S.MealHeaderBox>
        <S.MealTitle
          onClick={() => {
            navigate(`/meals/detail/${name}`);
          }}
        >
          {name}
        </S.MealTitle>
        <S.MealDeleteBtn
          onClick={() => {
            dispatch(deleteMeals(id));
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
