import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../hooks';
import NoSearched from '../NoSearched';
import { useNavigate } from 'react-router-dom';
import { addMeals } from '../../../slices/mealsSlice';
import { addBookMark } from '../../../slices/bookMarkSlice';
import { MealData } from '../../../customType/meal.type';

interface MealsSearchedListProps {
  result: MealData[];
  inputValue: string;
}

function MealsSearchedList({ inputValue, result }: MealsSearchedListProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <S.SearchListContainer>
      {result.length === 0 || !inputValue ? (
        <NoSearched></NoSearched>
      ) : (
        result.map((food: MealData) => {
          return (
            <S.List key={food.code}>
              <S.NamedInfo>
                <div
                  className="title"
                  onClick={() => {
                    navigate(`/meals/detail/${food.name}`);
                  }}
                >
                  {food.name}
                </div>
                <span
                  className="arrowIcon"
                  onClick={() => {
                    navigate(`/meals/detail/${food.name}`);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span
                  className="plusIcon"
                  onClick={() => {
                    dispatch(addMeals(food));
                    navigate('/meals/cart');
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span
                  className="starIcon"
                  onClick={() => {
                    dispatch(
                      addBookMark({
                        meal_id: food.code,
                      }),
                    );
                  }}
                >
                  <img src={require('../../../assets/blackStar.png')}></img>
                </span>
              </S.NamedInfo>
              <S.QuanInfo>1인분</S.QuanInfo>
            </S.List>
          );
        })
      )}
    </S.SearchListContainer>
  );
}
export default MealsSearchedList;
