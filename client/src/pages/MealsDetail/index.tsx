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

interface GetMealDataObj {
  code: string;
  name: string;
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
  natruim: number;
  cholesterol: number;
  transfat: number;
  saturatedfatty: number;
  servingSize: number;
  quantity: number;
  totalGram: number;
}

function MealsDetail() {
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState('quantity');
  const [foodInfo, setFoodInfo] = useState<GetMealDataObj>();
  const [firstInfo, setFirstInfo] = useState<GetMealDataObj>();

  const navigate = useNavigate();
  const params = useParams();
  const selectRef = useRef<HTMLSelectElement>(null);
  const dispatch = useAppDispatch();

  //DB에서 음식 정보 받아오기
  useEffect(() => {
    api.get(`/api/meal/${params.name}`).then((res: any) => {
      const {
        code,
        name,
        kcal,
        carb,
        protein,
        fat,
        natruim,
        cholesterol,
        transfat,
        saturatedfatty,
        servingSize,
      } = res.data[0];

      const nutrient = {
        code,
        name,
        kcal,
        carb,
        protein,
        fat,
        natruim,
        cholesterol,
        transfat,
        saturatedfatty,
        servingSize,
        quantity: 1,
        totalGram: servingSize,
      };
      console.log(nutrient);
      setFoodInfo(nutrient);
      setFirstInfo(nutrient);
    });
  }, []);

  function calcInfo(info: GetMealDataObj) {
    if (firstInfo) {
      info.kcal = Number((firstInfo?.kcal * count).toFixed(2));
      info.carb = Number((firstInfo?.carb * count).toFixed(2));
      info.protein = Number((firstInfo?.protein * count).toFixed(2));
      info.fat = Number((firstInfo?.fat * count).toFixed(2));
      info.natruim = Number((firstInfo?.natruim * count).toFixed(2));
      info.cholesterol = Number((firstInfo?.cholesterol * count).toFixed(2));
      info.transfat = Number((firstInfo?.transfat * count).toFixed(2));
      info.saturatedfatty = Number(
        (firstInfo?.saturatedfatty * count).toFixed(2),
      );
      info.quantity = count;
      info.totalGram = Math.floor(firstInfo?.servingSize * count);
    }
    return info;
  }

  function calcInfoByGram(info: GetMealDataObj) {
    if (firstInfo) {
      const nutrientInfoPerGram = { ...firstInfo };
      nutrientInfoPerGram.kcal = Number(
        firstInfo?.kcal / firstInfo?.servingSize,
      );
      nutrientInfoPerGram.carb = Number(
        firstInfo?.carb / firstInfo?.servingSize,
      );
      nutrientInfoPerGram.protein = Number(
        firstInfo?.protein / firstInfo?.servingSize,
      );
      nutrientInfoPerGram.fat = Number(firstInfo?.fat / firstInfo?.servingSize);
      nutrientInfoPerGram.natruim = Number(
        firstInfo?.natruim / firstInfo?.servingSize,
      );
      nutrientInfoPerGram.transfat = Number(
        firstInfo?.transfat / firstInfo?.servingSize,
      );
      nutrientInfoPerGram.saturatedfatty = Number(
        firstInfo?.saturatedfatty / firstInfo?.servingSize,
      );

      info.kcal = Number((nutrientInfoPerGram.kcal * count).toFixed(2));
      info.carb = Number((nutrientInfoPerGram.carb * count).toFixed(2));
      info.protein = Number((nutrientInfoPerGram.protein * count).toFixed(2));
      info.fat = Number((nutrientInfoPerGram.fat * count).toFixed(2));
      info.natruim = Number((nutrientInfoPerGram.natruim * count).toFixed(2));
      info.transfat = Number((nutrientInfoPerGram.transfat * count).toFixed(2));
      info.saturatedfatty = Number(
        (nutrientInfoPerGram.saturatedfatty * count).toFixed(2),
      );
      info.quantity = Number((count / firstInfo?.servingSize).toFixed(1));
      info.totalGram = count;
      return info;
    }
  }

  useEffect(() => {
    if (selected === 'quantity') {
      setFoodInfo((cur: any) => {
        const newObj = { ...cur };
        return calcInfo(newObj);
      });
    } else {
      setFoodInfo((cur: any) => {
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

            <div className="star-icon">
              <FontAwesomeIcon icon={faStar} />
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
