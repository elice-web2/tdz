// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// hooks
import { useAppSelector } from 'hooks';
// styles
import * as S from './style';

function CartIcon() {
  const navigate = useNavigate();
  const meals = useAppSelector(({ meal }) => meal.value);

  const onClickCart = () => {
    navigate('/meals/cart');
  };
  return (
    <S.CartBox onClick={onClickCart}>
      <span>
        <S.Badge>{meals.length}</S.Badge>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
    </S.CartBox>
  );
}

export default CartIcon;
