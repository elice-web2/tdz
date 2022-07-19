import * as S from './style';
import * as api from '../../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import NoSearched from '../NoSearched';
import { addMeals, deleteMeals } from '../../../slices/mealsSlice';
import { accNutrientCal } from '../../../utils/calculateAccNutrient';
import {
  MealData,
  MealsSearchedListProps,
} from '../../../customType/meal.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';

function MealsSearchedList({ inputValue, result }: MealsSearchedListProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mealStore = useAppSelector(({ meal }) => meal.value);
  const [list, setList] = useState<MealData[]>([]);

  async function convertArr() {
    const newArr: any = [];
    for (let i = 0; i < result.length; i++) {
      const res = await api.get(`/api/favorites/${result[i]._id}`);
      console.log(res);
      if (!res?.data) {
        newArr.push({ ...result[i], isBookMarked: false });
      } else {
        newArr.push({ ...result[i], isBookMarked: true });
      }
    }
    return newArr;
  }

  useEffect(() => {
    (async () => {
      const res = await convertArr();
      setList(res);
    })();
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

  async function bookmarkHandler(id: string) {
    const item = list.find((el) => el._id === id);
    if (!item) return;
    if (item.isBookMarked) {
      await api.delete(`/api/favorites/${id}`);
    } else {
      await api.post('/api/favorites', { meal_id: id });
    }
    //리랜더링
    setList((lists) =>
      lists.map((list) => {
        if (list._id === id) {
          return { ...list, isBookMarked: !item.isBookMarked };
        }
        return list;
      }),
    );
  }

  return (
    <S.SearchListContainer>
      {list.length === 0 || !inputValue ? (
        <NoSearched></NoSearched>
      ) : (
        list.map((food: MealData) => {
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
                  onClick={() => {
                    bookmarkHandler(food._id);
                  }}
                >
                  {food.isBookMarked ? (
                    <img src={require('../../../assets/YellowStar.png')}></img>
                  ) : (
                    <img src={require('../../../assets/blackStar.png')}></img>
                  )}
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
