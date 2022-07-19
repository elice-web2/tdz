import * as S from './style';
import * as api from '../../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addMeals, deleteMeals } from '../../../slices/mealsSlice';
import { accNutrientCal } from '../../../utils/calculateAccNutrient';
import { MealData } from '../../../customType/meal.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';

function MealsBookMarkList() {
  const [result, setResult] = useState<MealData[]>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mealStore = useAppSelector(({ meal }) => meal.value);

  useEffect(() => {
    (async () => {
      api.get('/api/favorites').then((res: any) => {
        setResult(res.data);
      });
    })();
  }, []);

  useEffect(() => {
    api.get('/api/favorites').then((res: any) => {
      setResult(res.data);
    });
  }, [result]);

  //장바구니 담을땐 중복필터링
  function addToCart(food: MealData) {
    const result = mealStore.filter((el) => el._id !== food._id);
    const acc = mealStore.filter((el) => el._id === food._id)[0];
    if (mealStore.length !== result.length) {
      const answer = confirm('이미 담겨진 음식입니다. 더 추가하시겠습니까?');
      if (answer) {
        //영양소 누적해서 더해주기
        const total = accNutrientCal(acc, food);
        //원래담긴건 지워주고 새로 담자
        dispatch(deleteMeals(acc._id));
        dispatch(addMeals(total));
        navigate('/meals/cart');
      } else {
        return;
      }
    } else {
      dispatch(addMeals(food));
      navigate('/meals/cart');
    }
  }

  function deleteBookMark(id: string) {
    api.delete(`/api/favorites/${id}`).then((res) => console.log(res));
  }

  return (
    <S.SearchListContainer>
      {result &&
        result.map((food: any) => {
          return (
            <S.List key={food.meal_id._id}>
              <S.NamedInfo>
                <div
                  className="title"
                  onClick={() => {
                    navigate(`/meals/detail/${food.meal_id.name}`);
                  }}
                >
                  {food.meal_id.name}
                </div>
                <span
                  className="arrowIcon"
                  onClick={() => {
                    navigate(`/meals/detail/${food.meal_id.name}`);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span
                  className="plusIcon"
                  onClick={() => {
                    addToCart(food.meal_id);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span
                  className="starIcon"
                  onClick={() => deleteBookMark(food.meal_id._id)}
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
