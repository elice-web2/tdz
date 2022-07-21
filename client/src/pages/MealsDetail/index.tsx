// dependencies
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// components
import Container from 'components/styles/Container';
import { ScrollContainer } from 'components/styles/ScrollContainer';
import Navbar from 'components/common/Navbar';
// stores
import { addMeals, deleteMeals } from 'slices/mealsSlice';
// types
import { MealData, MealInfo } from 'customType/meal.type';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc
import * as api from 'api';
import { calNutrient } from 'utils';

const SELECTED = {
  quantity: 'quantity',
  gram: 'gram',
};

function MealsDetail() {
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState(SELECTED.quantity);
  const [foodInfo, setFoodInfo] = useState<MealData>();
  const [firstInfo, setFirstInfo] = useState<MealData>();
  const [isBookMark, setIsBookMark] = useState<boolean>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mealStore = useAppSelector(({ meal }) => meal.value);
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const params = useParams();
  const selectRef = useRef<HTMLSelectElement>(null);
  const responseRef = useRef<MealData>();

  //URL의 params으로 DB에서 음식정보와 즐겨찾기정보 GET
  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/api/meal/${params.name}`);
        setFoodInfo(res?.data[0]);
        setFirstInfo(res?.data[0]);
        responseRef.current = res?.data[0];
        await getBookMark();
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  //즐겨찾기 여부가 바뀔때마다 즐겨찾기 정보 다시GET
  useEffect(() => {
    (async () => {
      getBookMark();
    })();
  }, [isBookMark]);

  //select 옵션에 따라 영양소 계산
  useEffect(() => {
    if (selected === SELECTED.quantity) {
      setFoodInfo((cur: any): any => {
        const newObj = { ...cur };
        return calcInfo(newObj);
      });
    } else {
      setFoodInfo((cur: any): any => {
        const newObj = { ...cur };
        return calcInfoByGram(newObj);
      });
    }
  }, [count]);

  //select 옵션에 따른 기본 count 변경
  useEffect(() => {
    if (selected === SELECTED.quantity) {
      setCount(1);
    } else {
      if (firstInfo) {
        setCount(firstInfo?.servingSize);
      }
    }
  }, [selected]);

  //즐겨찾기 GET 함수
  async function getBookMark() {
    if (responseRef.current) {
      const bookMark = await api.get(
        `/api/favorites/${responseRef.current._id}`,
      );
      if (!bookMark?.data) {
        setIsBookMark(false);
      } else {
        setIsBookMark(true);
      }
    }
  }

  // 인분 당 영양소 계산 함수
  function calcInfo(info: MealInfo) {
    if (firstInfo) {
      info.kcal = calNutrient(firstInfo?.kcal, count);
      info.carb = calNutrient(firstInfo?.carb, count);
      info.protein = calNutrient(firstInfo?.protein, count);
      info.fat = calNutrient(firstInfo?.fat, count);
      info.sugars = calNutrient(firstInfo?.sugars, count);
      info.natrium = calNutrient(firstInfo?.natrium, count);
      info.cholesterol = calNutrient(firstInfo?.cholesterol, count);
      info.transfat = calNutrient(firstInfo?.transfat, count);
      info.saturatedfatty = calNutrient(firstInfo?.saturatedfatty, count);
      info.quantity = count;
      info.totalGram = Math.floor(firstInfo?.servingSize * count);
    }
    return info;
  }

  //그램 당 영양소 계산 함수
  function calcInfoByGram(info: MealInfo) {
    if (firstInfo) {
      const oneSize = firstInfo?.servingSize;
      const perGram = {
        ...firstInfo,
        kcal: firstInfo?.kcal / oneSize,
        carb: firstInfo?.carb / oneSize,
        protein: firstInfo?.protein / oneSize,
        fat: firstInfo?.fat / oneSize,
        sugars: firstInfo?.sugars / oneSize,
        natrium: firstInfo?.natrium / oneSize,
        transfat: firstInfo?.transfat / oneSize,
        saturatedfatty: firstInfo?.saturatedfatty / oneSize,
      };

      info.kcal = calNutrient(perGram.kcal, count);
      info.carb = calNutrient(perGram.carb, count);
      info.protein = calNutrient(perGram.protein, count);
      info.fat = calNutrient(perGram.fat, count);
      info.sugars = calNutrient(perGram.sugars, count);
      info.natrium = calNutrient(perGram.natrium, count);
      info.transfat = calNutrient(perGram.transfat, count);
      info.saturatedfatty = calNutrient(perGram.saturatedfatty, count);
      info.quantity = Number((count / oneSize).toFixed(1));
      info.totalGram = count;
      return info;
    }
  }

  //별 눌렀을때 즐겨찾기 상태 변경
  function markingHandler(id: string) {
    if (isBookMark) {
      //즐겨찾기 delete요청
      api.delete(`/api/favorites/${id}`).then(() => {
        setIsBookMark(false);
      });
    } else {
      //즐겨찾기 post 요청
      api
        .post('/api/favorites', { meal_id: id })
        .then(() => setIsBookMark(true));
    }
  }

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

  function plusHandler() {
    setCount((cur) => cur + 1);
  }

  function minusHandler() {
    if (count !== 1) {
      setCount((cur) => cur - 1);
    }
  }

  useEffect(() => {
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, [is_login_first, isLogin]);

  return (
    <Container>
      <ScrollContainer minusHeight={60}>
        <S.MealsInfoBox>
          <S.IconBox>
            <div
              className="arrow-icon"
              onClick={() => {
                navigate('/meals/search');
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div
              className="star-icon"
              onClick={() => {
                if (foodInfo) markingHandler(foodInfo?._id);
              }}
            >
              {isBookMark ? (
                <img src={require('../../assets/YellowStar.png')}></img>
              ) : (
                <img src={require('../../assets/blackStar.png')}></img>
              )}
            </div>
          </S.IconBox>
          <S.Title>{foodInfo?.name}</S.Title>
          <S.MainNutrientBox>
            <div className="info-text">
              <p>칼로리</p>
              <p>{foodInfo?.kcal}kcal</p>
            </div>
            <div className="info-text">
              <p>탄수화물</p>
              <p>{foodInfo?.carb}g</p>
            </div>
            <div className="info-text">
              <p>단백질</p>
              <p>{foodInfo?.protein}g</p>
            </div>
            <div className="info-text">
              <p>지방</p>
              <p>{foodInfo?.fat}g</p>
            </div>
          </S.MainNutrientBox>
          <S.SubNutrientBox>
            <div className="sub-content">
              <p>나트륨</p>
              <p>{foodInfo?.natrium}mg</p>
            </div>
            <div className="sub-content">
              <p>콜레스테롤</p>
              <p>{foodInfo?.cholesterol}mg</p>
            </div>

            <div className="sub-content">
              <p>트랜스지방</p>
              <p>{foodInfo?.transfat}g</p>
            </div>
            <div className="sub-content">
              <p>포화지방</p>
              <p>{foodInfo?.saturatedfatty}g</p>
            </div>
          </S.SubNutrientBox>
          <S.SelectBox>
            <select
              ref={selectRef}
              onChange={() => {
                if (selectRef.current) {
                  setSelected(selectRef.current.value);
                }
              }}
            >
              <option value="quantity">1개 ({foodInfo?.servingSize}g)</option>
              <option value="gram">g</option>
            </select>
            <div className="countBtnBox">
              <button onClick={minusHandler}>-</button>
              <input
                type="number"
                value={count}
                onChange={(e) => {
                  setCount(parseInt(e.target.value));
                }}
              ></input>
              <button onClick={plusHandler}>+</button>
            </div>
          </S.SelectBox>
          <S.AddBtnContainer>
            <S.AddBtn
              onClick={() => {
                foodInfo && addToCart(foodInfo);
              }}
            >
              식단 추가
            </S.AddBtn>
          </S.AddBtnContainer>
        </S.MealsInfoBox>
      </ScrollContainer>
      <Navbar />
    </Container>
  );
}

export default MealsDetail;
