import * as S from './style';
import { deleteMeals } from '../../../slices/mealsSlice';
import { useAppDispatch } from '../../../hooks';
import { MealsCartListType } from '../../../customType/meal.type';
import { useNavigate } from 'react-router-dom';

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
