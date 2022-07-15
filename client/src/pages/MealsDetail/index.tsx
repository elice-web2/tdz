import { useState, useEffect, useRef } from 'react';
import * as S from './style';
import Container from '../../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/common/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from '../../api';
import { addMeals } from '../../slices/mealsSlice';
import { useAppDispatch } from '../../hooks';
import { MealData, MealInfo } from '../../customType/meal.type';
import { calNutrient } from '../../../src/utils/calcultateNutrient';
function MealsDetail() {
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState('quantity');
  const [foodInfo, setFoodInfo] = useState<MealData>();
  const [firstInfo, setFirstInfo] = useState<MealData>();
  const [isBookMark, setIsBookMark] = useState<boolean>();

  const navigate = useNavigate();
  const params = useParams();
  const selectRef = useRef<HTMLSelectElement>(null);
  const dispatch = useAppDispatch();
  const responseRef = useRef<MealData>();

  //DB에서 음식 정보 받아오기
  useEffect(() => {
    (async () => {
      const res = await api.get(`/api/meal/${params.name}`);
      console.log(res?.data[0]);
      setFoodInfo(res?.data[0]);
      setFirstInfo(res?.data[0]);
      responseRef.current = res?.data[0];
      if (responseRef.current) {
        const bookMark = await api.get(
          `/api/favorites/${responseRef.current._id}`,
        );
        if (!bookMark) {
          setIsBookMark(false);
          console.log('마킹상태F');
        } else {
          setIsBookMark(true);
          console.log('마킹상태T');
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (responseRef.current) {
        const bookMark = await api.get(
          `/api/favorites/${responseRef.current._id}`,
        );
        if (!bookMark) {
          setIsBookMark(false);
          console.log('마킹상태F');
        } else {
          setIsBookMark(true);
          console.log('마킹상태T');
        }
      }
    })();
  }, [isBookMark]);

  function calcInfo(info: MealInfo) {
    if (firstInfo) {
      info.kcal = calNutrient(firstInfo?.kcal, count);
      info.carb = calNutrient(firstInfo?.carb, count);
      info.protein = calNutrient(firstInfo?.protein, count);
      info.fat = calNutrient(firstInfo?.fat, count);
      info.natruim = calNutrient(firstInfo?.natruim, count);
      info.cholesterol = calNutrient(firstInfo?.cholesterol, count);
      info.transfat = calNutrient(firstInfo?.transfat, count);
      info.saturatedfatty = calNutrient(firstInfo?.saturatedfatty, count);
      info.quantity = count;
      info.totalGram = Math.floor(firstInfo?.servingSize * count);
    }
    return info;
  }

  function calcInfoByGram(info: MealInfo) {
    if (firstInfo) {
      const oneSize = firstInfo?.servingSize;
      const perGram = {
        ...firstInfo,
        kcal: firstInfo?.kcal / oneSize,
        carb: firstInfo?.carb / oneSize,
        protein: firstInfo?.protein / oneSize,
        fat: firstInfo?.fat / oneSize,
        natruim: firstInfo?.natruim / oneSize,
        transfat: firstInfo?.transfat / oneSize,
        saturatedfatty: firstInfo?.saturatedfatty / oneSize,
      };

      info.kcal = calNutrient(perGram.kcal, count);
      info.carb = calNutrient(perGram.carb, count);
      info.protein = calNutrient(perGram.protein, count);
      info.fat = calNutrient(perGram.fat, count);
      info.natruim = calNutrient(perGram.natruim, count);
      info.transfat = calNutrient(perGram.transfat, count);
      info.saturatedfatty = calNutrient(perGram.saturatedfatty, count);
      info.quantity = Number((count / oneSize).toFixed(1));
      info.totalGram = count;
      return info;
    }
  }

  useEffect(() => {
    if (selected === 'quantity') {
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

  useEffect(() => {
    if (selected === 'quantity') {
      setCount(1);
    } else {
      if (firstInfo) {
        setCount(firstInfo?.servingSize);
      }
    }
  }, [selected]);

  function plusHandler() {
    setCount((cur) => cur + 1);
  }

  function minusHandler() {
    if (count !== 1) {
      setCount((cur) => cur - 1);
    }
  }

  function markingHandler(id: string) {
    if (isBookMark) {
      //즐겨찾기 delete요청
      api.delete(`/api/favorites/${id}`).then((res) => {
        setIsBookMark(false);
      });
    } else {
      //즐겨찾기 post 요청
      api
        .post('/api/favorites', { meal_id: id })
        .then((res) => setIsBookMark(true));
    }
  }

  return (
    <Container>
      <S.MealsContainer>
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
              <p>{foodInfo?.natruim}mg</p>
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
          <S.AddBtn
            onClick={() => {
              foodInfo && dispatch(addMeals(foodInfo));
              navigate('/meals/cart');
            }}
          >
            식단 추가
          </S.AddBtn>
        </S.MealsInfoBox>
      </S.MealsContainer>
      <Navbar />
    </Container>
  );
}

export default MealsDetail;
