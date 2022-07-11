import { useState } from 'react';
import styled from 'styled-components';
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

const MealsDetail: React.FC = () => {
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
      <MealsContainer>
        <MealsInfoBox>
          <IconBox>
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
          </IconBox>
          <Title>{obj.name}</Title>
          <MainNutrientBox>
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
          </MainNutrientBox>
          <SubNutrientBox>
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
          </SubNutrientBox>
          <SelectBox>
            <select>
              <option value="quantity">1개({obj.gramPerQuantity}g)</option>
              <option value="gram">g</option>
            </select>
            <div className="countBtnBox">
              <button onClick={minusHandler}>-</button>
              <input type="number" value={count}></input>
              <button onClick={plusHandler}>+</button>
            </div>
          </SelectBox>
          <AddBtn>식단 추가</AddBtn>
        </MealsInfoBox>
      </MealsContainer>
      <Navbar />
    </Container>
  );
};

const MealsContainer = styled.div`
  min-height: 800px;
`;

const MealsInfoBox = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-size: 25px;
  box-sizing: border-box;

  .arrow-icon {
    margin-left: 5px;
    cursor: pointer;
  }

  .star-icon {
    margin-right: 5px;
    color: yellow;
    cursor: pointer;
  }
`;
const Title = styled.h1`
  margin-bottom: 15px;
  padding: 20px 0 20px 30px;
  font-size: 28px;
  font-weight: bold;
`;

const MainNutrientBox = styled.div`
  display: flex;
  flex-direction: column;

  .info-text {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    font-weight: bold;
    font-size: 18px;
  }
`;
const SubNutrientBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 180px);
  gap: 10px 30px;
  margin: 30px 0;
  padding: 10px 0 10px 30px;
  font-size: 13px;

  .sub-content {
    display: flex;
    justify-content: space-between;
    width: 150px;

    p {
      padding: 3px;
    }
  }
`;
const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  select {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
  .countBtnBox {
    display: flex;
    align-items: center;

    input {
      width: 40px;
      height: 40px;
      padding: 0;
      border: none;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      width: 40px;
      height: 40px;
      border: none;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
const AddBtn = styled.button`
  position: absolute;
  bottom: 30px;
  left: 150px;
  width: 120px;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

export default MealsDetail;
