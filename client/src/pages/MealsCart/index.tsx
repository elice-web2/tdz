import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Navbar from '../../components/common/Navbar';
import MealsCartModal from '../../components/MealsCart/MealsCartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TDZInfo from '../../components/MealsCart/TDZInfo';
import MealsCartList from '../../components/MealsCart/MealsCartList';
import { useAppSelector } from '../../hooks';
import * as api from '../../api';
import Container from '../../components/styles/Container';

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
  quantity?: number;
}

interface TestType {
  totalKcal: number;
  totalCarb: number;
  totalProtein: number;
  totalFat: number;
}

function MealsCart() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [info, setInfo] = useState<TestType>();

  const navigate = useNavigate();
  const result = useAppSelector(({ meal }) => meal.value);
  console.log('밖', result);

  function calcTotalInfo() {
    let totalKcal = 0;
    let totalCarb = 0;
    let totalProtein = 0;
    let totalFat = 0;
    result.map(({ kcal, carb, protein, fat }) => {
      totalKcal += kcal;
      totalCarb += carb;
      totalProtein += protein;
      totalFat += fat;
    });
    const totalNutrient = {
      totalKcal: Math.round(totalKcal),
      totalCarb: Math.round(totalCarb),
      totalProtein: Math.round(totalProtein),
      totalFat: Math.round(totalFat),
    };
    console.log(totalNutrient);
    setInfo(totalNutrient);
  }

  useEffect(() => {
    calcTotalInfo();
  }, [result]);

  function clickHandler() {
    setOpenModal(true);
  }

  return (
    <Container>
      {openModal && <MealsCartModal setOpenModal={setOpenModal} />}

      <S.NutrientInfoContainer>
        <S.IconBox>
          <div
            className="arrow-icon"
            onClick={() => {
              navigate('/meals/search');
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </S.IconBox>
        <S.TotalKcalBox>
          <h1>총 칼로리</h1>
          {info?.totalKcal}kcal
        </S.TotalKcalBox>
        <S.TdzBox>
          <TDZInfo nutrient={'탄수화물'} gram={info?.totalCarb} />
          <TDZInfo nutrient={'단백질'} gram={info?.totalProtein} />
          <TDZInfo nutrient={'지방'} gram={info?.totalFat} />
        </S.TdzBox>
      </S.NutrientInfoContainer>

      <S.MealsListContainer>
        {result.map((el) => {
          return (
            <MealsCartList
              key={el.code}
              name={el.name}
              quantity={el.quantity}
              totalGram={el.totalGram}
              code={el.code}
            ></MealsCartList>
          );
        })}
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
    </Container>
  );
}

export default MealsCart;
