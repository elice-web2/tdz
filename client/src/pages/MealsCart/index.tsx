import * as S from './style';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { MealData, TotalInfoType } from '../../customType/meal.type';
import Container from '../../components/styles/Container';
import Navbar from '../../components/common/Navbar';
import TDZInfo from '../../components/MealsCart/TDZInfo';
import MealsCartList from '../../components/MealsCart/MealsCartList';
import MealsCartModal from '../../components/MealsCart/MealsCartModal';
import EmptyCart from '../../../src/components/MealsCart/EmptyCart';
import CartIcon from '../../components/common/CartIcon';
import { ScrollContainer } from '../../components/styles/ScrollContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function MealsCart() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const result = useAppSelector(({ meal }) => meal.value);
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  //장바구니 리스트 바뀔때마다 총 영양소 다시 계산
  const info: TotalInfoType = calcTotalInfo(result);

  //장바구니에 담긴 음식리스트에 따라 총 영양소 계산
  function calcTotalInfo(result: MealData[]) {
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
    return totalNutrient;
  }

  //모달창 open
  function popupModal() {
    if (result.length === 0) {
      alert('식단을 추가해주세요!');
    } else {
      setOpenModal(true);
    }
  }

  useEffect(() => {
    if (isLogin && is_login_first) {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <ScrollContainer minusHeight={60}>
        {openModal && <MealsCartModal openModal={setOpenModal} />}

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
            {info.totalKcal}kcal
          </S.TotalKcalBox>
          <S.TdzBox>
            <TDZInfo nutrient={'탄수화물'} gram={info.totalCarb} />
            <TDZInfo nutrient={'단백질'} gram={info.totalProtein} />
            <TDZInfo nutrient={'지방'} gram={info.totalFat} />
          </S.TdzBox>
        </S.NutrientInfoContainer>

        <S.MealsListContainer>
          {result.length === 0 ? (
            <EmptyCart></EmptyCart>
          ) : (
            result.map((el) => {
              return (
                <MealsCartList
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  quantity={el.quantity}
                  totalGram={el.totalGram}
                ></MealsCartList>
              );
            })
          )}
        </S.MealsListContainer>

        <S.BtnContainer>
          <S.AddMealsBtn
            onClick={() => {
              navigate('/meals/search');
            }}
          >
            음식 추가
          </S.AddMealsBtn>

          <S.RecordBtn onClick={popupModal}>기록 하기</S.RecordBtn>
        </S.BtnContainer>
        <CartIcon></CartIcon>
      </ScrollContainer>
      <Navbar />
    </Container>
  );
}

export default MealsCart;
