import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks/useAppSelector';

function CartIcon() {
  const meals = useAppSelector(({ meal }) => meal.value);
  return (
    <S.CartBox>
      <span>
        <S.Badge>{meals.length}</S.Badge>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
    </S.CartBox>
  );
}

export default CartIcon;
