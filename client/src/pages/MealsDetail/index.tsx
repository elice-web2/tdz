import { useState } from 'react';
import * as S from './style';
import Container from '../../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/common/Navbar';
import { useNavigate } from 'react-router-dom';

interface testType {
  name: string;
  kcal: number;
  carbon: number;
  protein: number;
  fat: number;
  natrium: number;
  transFat: number;
  col: number;
  saturatedFat: number;
  gramPerQuantity: number;
}

function MealsDetail() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const plusHandler = () => {
    setCount((cur) => cur + 1);
  };

  const minusHandler = () => {
    setCount((cur) => cur - 1);
  };

  const obj: testType = {
    name: '진라면',
    kcal: 700,
    carbon: 100,
    protein: 20,
    fat: 20,
    natrium: 100,
    transFat: 100,
    col: 5,
    saturatedFat: 10,
    gramPerQuantity: 200,
  };

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
          <S.Title>{obj.name}</S.Title>
          <S.MainNutrientBox>
            <div className="info-text">
              <p>칼로리</p>
              <p>{obj.kcal}kcal</p>
            </div>
            <div className="info-text">
              <p>탄수화물</p>
              <p>{obj.carbon}g</p>
            </div>
            <div className="info-text">
              <p>단백질</p>
              <p>{obj.protein}g</p>
            </div>
            <div className="info-text">
              <p>지방</p>
              <p>{obj.fat}g</p>
            </div>
          </S.MainNutrientBox>
          <S.SubNutrientBox>
            <div className="sub-content">
              <p>나트륨</p>
              <p>{obj.natrium}mg</p>
            </div>
            <div className="sub-content">
              <p>콜레스테롤</p>
              <p>{obj.col}mg</p>
            </div>

            <div className="sub-content">
              <p>트랜스지방</p>
              <p>{obj.transFat}g</p>
            </div>
            <div className="sub-content">
              <p>포화지방</p>
              <p>{obj.saturatedFat}g</p>
            </div>
          </S.SubNutrientBox>
          <S.SelectBox>
            <select>
              <option value="quantity">1개({obj.gramPerQuantity}g)</option>
              <option value="gram">g</option>
            </select>
            <div className="countBtnBox">
              <button onClick={minusHandler}>-</button>
              <input type="number" value={count}></input>
              <button onClick={plusHandler}>+</button>
            </div>
          </S.SelectBox>
          <S.AddBtn>식단 추가</S.AddBtn>
        </S.MealsInfoBox>
      </S.MealsContainer>
      <Navbar />
    </Container>
  );
}

export default MealsDetail;
