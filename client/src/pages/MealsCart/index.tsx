import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Navbar from '../../components/common/Navbar';
import MealsCartModal from '../../components/MealsCart/MealsCartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TDZInfo from '../../components/MealsCart/TDZInfo';
import MealsCartList from '../../components/MealsCart/MealsCartList';

function MealsCart() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const clickHandler = () => {
    setOpenModal(true);
  };
  return (
    <S.Container>
      {openModal && <MealsCartModal setOpenModal={setOpenModal} />}

      <S.NutrientInfoContainer>
        <S.IconBox>
          <div className="arrow-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </S.IconBox>
        <S.TotalKcalBox>
          <h1>총 칼로리</h1>
          <p>1344 kcal</p>
        </S.TotalKcalBox>
        <S.TdzBox>
          <TDZInfo nutrient={'탄수화물'} gram={400} />
          <TDZInfo nutrient={'단백질'} gram={200} />
          <TDZInfo nutrient={'지방'} gram={300} />
        </S.TdzBox>
      </S.NutrientInfoContainer>

      <S.MealsListContainer>
        <MealsCartList name={'쌀밥'} quantity={1}></MealsCartList>
        <MealsCartList name={'너구리'} quantity={2}></MealsCartList>
        <MealsCartList name={'너구리'} quantity={2}></MealsCartList>
      </S.MealsListContainer>

      <S.BtnContainer>
        <S.AddMealsBtn
          onClick={() => {
            navigate('/meals/search');
          }}
        >
          음식 추가
        </S.AddMealsBtn>

        <S.RecordBtn onClick={clickHandler}>기록 하기</S.RecordBtn>
      </S.BtnContainer>

      <Navbar />
    </S.Container>
  );
}

export default MealsCart;
