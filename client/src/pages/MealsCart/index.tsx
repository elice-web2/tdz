// dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// components
import Container from 'components/styles/Container';
import Navbar from 'components/common/Navbar';
import TDZInfo from 'components/MealsCart/TDZInfo';
import MealsCartList from 'components/MealsCart/MealsCartList';
import MealsCartModal from 'components/MealsCart/MealsCartModal';
import EmptyCart from 'components/MealsCart/EmptyCart';
import { ScrollContainer } from 'components/styles/ScrollContainer';
// types
import { MealData, TotalInfoType } from 'customType/meal.type';
// hooks
import { useAppSelector } from 'hooks';
// styles
import * as S from './style';

function MealsCart() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const result = useAppSelector(({ meal }) => meal.value);
  const { isLogin, is_login_first } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  //장바구니 리스트 바뀔때마다 총 영양소 다시 계산
  const totalInfo: TotalInfoType = calcTotalInfo(result);

  //장바구니에 담긴 음식리스트에 따라 총 영양소 계산
  function calcTotalInfo(result: MealData[]) {
    return result.reduce(
      (acc, meal) => ({
        kcal: Math.floor(acc.kcal + meal.kcal),
        carb: Math.floor(acc.carb + meal.carb),
        cholesterol: Math.floor(acc.cholesterol + meal.cholesterol),
        fat: Math.floor(acc.fat + meal.fat),
        natrium: Math.floor(acc.natrium + meal.natrium),
        protein: Math.floor(acc.protein + meal.protein),
        saturatedfatty: Math.floor(acc.saturatedfatty + meal.saturatedfatty),
        sugars: Math.floor(acc.sugars + meal.sugars),
        transfat: Math.floor(acc.transfat + meal.transfat),
      }),
      {
        carb: 0,
        cholesterol: 0,
        fat: 0,
        kcal: 0,
        natrium: 0,
        protein: 0,
        saturatedfatty: 0,
        sugars: 0,
        transfat: 0,
      },
    );
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
    if (isLogin && is_login_first === 'true') {
      navigate('/mypage/goal_step1');
    } else if (!isLogin) {
      navigate('/');
    }
  }, [is_login_first, isLogin]);

  return (
    <Container>
      <ScrollContainer minusHeight={60}>
        {openModal && (
          <MealsCartModal openModal={setOpenModal} totalInfo={totalInfo} />
        )}

        <S.NutrientInfoContainer>
          <S.IconBox>
            <div
              className="arrow-icon"
              onClick={() => {
                navigate(-1);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </S.IconBox>
          <S.TotalKcalBox>
            <h1>총 칼로리</h1>
            {totalInfo.kcal}kcal
          </S.TotalKcalBox>
          <S.TdzBox>
            <TDZInfo nutrient={'탄수화물'} gram={totalInfo.carb} />
            <TDZInfo nutrient={'단백질'} gram={totalInfo.protein} />
            <TDZInfo nutrient={'지방'} gram={totalInfo.fat} />
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
      </ScrollContainer>
      <Navbar />
    </Container>
  );
}

export default MealsCart;
