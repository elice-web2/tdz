// dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
// stores
import { addMeals, deleteMeals } from 'slices/mealsSlice';
// types
import { MealData } from 'customType/meal.type';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc
import * as api from 'api';

function MealsBookMarkList() {
  const [result, setResult] = useState<MealData[]>([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mealStore = useAppSelector(({ meal }) => meal.value);

  useEffect(() => {
    api.get('/api/favorites').then((res: any) => {
      const temp: MealData[] = [];
      res.data.forEach((data: any) => {
        if (data.meal_id) {
          temp.push(data.meal_id);
        }
      });
      setResult(temp);
    });
  }, []);

  //장바구니 담을땐 중복필터링
  function addToCart(food: MealData) {
    const result = mealStore.filter((el) => el._id !== food._id);
    const acc = mealStore.filter((el) => el._id === food._id)[0];
    if (mealStore.length !== result.length) {
      //원래담긴건 지워주고 새로 담자
      dispatch(deleteMeals(acc._id));
      dispatch(addMeals(food));
      navigate('/meals/cart');
    } else {
      dispatch(addMeals(food));
      navigate('/meals/cart');
    }
  }

  async function deleteBookMark(id: string) {
    await api.delete(`/api/favorites/${id}`);
    setResult((results) => results.filter((result) => result._id !== id));
  }

  return (
    <S.SearchListContainer>
      {result &&
        result.map((food: MealData) => {
          return (
            <S.List key={food._id}>
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
                    addToCart(food);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span
                  className="starIcon"
                  onClick={() => deleteBookMark(food._id)}
                >
                  <img src={require('../../../assets/YellowStar.png')}></img>
                </span>
              </S.NamedInfo>
              <S.QuanInfo>1인분</S.QuanInfo>
            </S.List>
          );
        })}
    </S.SearchListContainer>
  );
}
export default MealsBookMarkList;
