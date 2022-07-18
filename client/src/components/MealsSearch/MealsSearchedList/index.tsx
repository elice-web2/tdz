import * as S from './style';
import * as api from '../../../api';
import { useEffect, useState, useCallback, useMemo, ReactNode } from 'react';
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
  const [isBookMarked, setIsBookMarked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mealStore = useAppSelector(({ meal }) => meal.value);

  // useEffect(() => {
  //   result.map((meal) => {
  //     (async () => {
  //       const res = await api.get(`/api/favorites/${meal._id}`);
  //       if (res === undefined) {
  //         console.log('즐겨찾기 등록X', meal.name);
  //         setIsBookMarked(false);
  //         console.log('상태', isBookMarked);
  //       } else {
  //         console.log('즐겨찾기에 있음O', meal.name);
  //         setIsBookMarked(true);
  //         console.log('상태', isBookMarked);
  //       }
  //     })();
  //   });
  // }, [result]);

  function getBookInfo(id: string) {
    api.get(`/api/favorites/${id}`).then((res) => {
      if (res) {
        console.log('있음', res);
        return true;
      } else {
        console.log('없음', res);
        return false;
      }
    });
  }

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
        dispatch(deleteMeals(acc.code));
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

  function bookmarkHandler(id: string) {
    if (isBookMarked) {
      api.delete(`/api/favorites/${id}`).then(() => {
        setIsBookMarked(false);
      });
    } else {
      api.post('/api/favorites', { meal_id: id }).then(() => {
        setIsBookMarked(true);
      });
    }
  }

  return (
    <S.SearchListContainer>
      {result.length === 0 || !inputValue ? (
        <NoSearched></NoSearched>
      ) : (
        result.map((food: MealData) => {
          api.get(`/api/favorites/${food._id}`).then((res) => {
            if (res) {
              console.log('res있음');
            } else {
              console.log('res없음');
            }
          });
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
                  <img src={require('../../../assets/YellowStar.png')}></img>
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
