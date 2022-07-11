import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/common/Navbar';
import MealsCartModal from '../../components/MealsCart/MealsCartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TDZInfo } from '../../components/MealsCart/TDZInfo';
import { MealsList } from '../../components/MealsCart/MealsList';

const MealsCart: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
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
        <AddMealsBtn
          onClick={() => {
            navigate('/meals/search');
          }}
        >
          음식 추가
        </AddMealsBtn>

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

export default MealsCart;
