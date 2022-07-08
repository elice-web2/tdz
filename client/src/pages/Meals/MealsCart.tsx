import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/common/Navbar';
import MealsCartModal from './MealsCartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MealsCart: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const clickHandler = () => {
    setModal(true);
  };
  return (
    <Container>
      {modal && <MealsCartModal setModal={setModal} />}

      <NutrientInfoContainer>
        <IconBox>
          <div className="arrow-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </IconBox>
        <TotalKcalBox>
          <h1>총 칼로리</h1>
          <p>1344 kcal</p>
        </TotalKcalBox>
        <TdzBox>
          <TDZInfo nutrient={'탄수화물'} gram={400} />
          <TDZInfo nutrient={'단백질'} gram={200} />
          <TDZInfo nutrient={'지방'} gram={300} />
        </TdzBox>
      </NutrientInfoContainer>
      <MealsListContainer>
        <MealsList name={'쌀밥'} quantity={1}></MealsList>
        <MealsList name={'너구리'} quantity={2}></MealsList>
        <MealsList name={'너구리'} quantity={2}></MealsList>
      </MealsListContainer>
      <BtnContainer>
        <StyledLink to="/meals/search">
          <AddMealsBtn>음식 추가</AddMealsBtn>
        </StyledLink>

        <RecordBtn onClick={clickHandler}>기록 하기</RecordBtn>
      </BtnContainer>

      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  background-color: white;
`;

interface NutrientTypeProps {
  nutrient: string;
  gram: number;
}
const TDZInfo: React.FC<NutrientTypeProps> = (props) => {
  const NutrientInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .nutrient {
      position: relative;
      margin-bottom: 5px;
    }

    .circle {
      position: absolute;
      left: -25px;
      top: 2px;
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 10px;
      background-color: ${({ color }) => {
        if (color === '탄수화물') {
          return 'pink';
        } else if (color === '단백질') {
          return '#6ff542';
        } else {
          return 'yellow';
        }
      }};
      border-radius: 50%;
    }
    .gram {
      font-size: 28px;
      font-weight: bold;
    }
  `;

  return (
    <>
      <NutrientInfoBox color={props.nutrient}>
        <div className="nutrient">
          <span className="circle"></span>
          {props.nutrient}
        </div>
        <div>
          <span className="gram">{props.gram}</span>g
        </div>
      </NutrientInfoBox>
    </>
  );
};

const NutrientInfoContainer = styled.div`
  width: 420px;
  height: 240px;
  margin-bottom: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: ${({ theme }) => theme.mainColor.normal};
`;

const IconBox = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 25px;
  box-sizing: border-box;

  .arrow-icon {
    margin-left: 5px;
    cursor: pointer;
  }
`;

const TotalKcalBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 40px 0;
  font-size: 28px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
`;

const TdzBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-left: 5px;
`;

const MealsListContainer = styled.ul`
  width: 100%;
`;

interface MealsListProps {
  name: string;
  quantity: number;
}

const MealsList: React.FC<MealsListProps> = (props) => {
  const MealHeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px 6px 15px;
  `;

  const MealTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
  `;

  const MealDeleteBtn = styled.button`
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
  `;

  const QuanText = styled.p`
    padding: 0 20px 30px 16px;
    border-bottom: 1px solid gray;
    font-size: 16px;
  `;

  return (
    <li>
      <MealHeaderBox>
        <MealTitle>{props.name}</MealTitle>
        <MealDeleteBtn>X</MealDeleteBtn>
      </MealHeaderBox>
      <QuanText>{props.quantity}인분</QuanText>
    </li>
  );
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const AddMealsBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

const RecordBtn = styled(AddMealsBtn)`
  background-color: ${({ theme }) => theme.mainColor.darker};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export default MealsCart;
