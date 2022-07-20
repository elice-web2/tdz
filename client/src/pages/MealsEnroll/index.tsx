import * as S from './style';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../components/styles/Container';
import { ScrollContainer } from '../../components/styles/ScrollContainer';
import EnrollModal from '../../components/MealEnroll/EnrollModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { useAppSelector } from '../../hooks';

function MealsEnroll() {
  const [openModal, setOpenModal] = useState(false);
  const [submitData, setSubmitData] = useState();
  const navigate = useNavigate();
  const date = useAppSelector(({ date }) => date.value);
  const { register, handleSubmit, watch } = useForm();

  function checkInput(value: string): boolean {
    if (!watch(value)) {
      return false;
    } else {
      return true;
    }
  }

  async function onSubmit(data: any) {
    data.code = '';
    data.quantity = 1;
    data.updated_date = date;
    data.servingSize = Number(data.servingSize);
    data.totalGram = Number(data.servingSize);
    data.kcal = Number(data.kcal);
    data.carb = Number(data.carb);
    data.protein = Number(data.protein);
    data.fat = Number(data.fat);
    data.natruim = Number(data.natruim);
    data.sugars = Number(data.sugars);
    data.transfat = Number(data.transfat);
    data.cholesterol = Number(data.cholesterol);
    data.saturatedfatty = Number(data.saturatedfatty);
    //DB에 저장
    await api.post('/api/meal', data);
    setOpenModal(true);
    setSubmitData(data);
  }
  return (
    <Container>
      <ScrollContainer minusHeight={60}>
        {openModal && (
          <EnrollModal setOpenModal={setOpenModal} submitData={submitData} />
        )}
        <S.Header>
          <span
            onClick={() => {
              navigate('/meals/search');
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <h1>음식 등록하기</h1>
        </S.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.NameInputElement>
            <p>음식명</p>
            <input
              type="text"
              {...register('name', { required: true, minLength: 1 })}
            />
          </S.NameInputElement>

          <S.NutrientBox>
            <h2>영양정보</h2>
            <S.NutrientInputElement changeColor={checkInput('servingSize')}>
              <p>내용량(g)</p>
              <input
                type="number"
                {...register('servingSize', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('kcal')}>
              <p>열량</p>
              <input
                type="number"
                {...register('kcal', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('carb')}>
              <p>탄수화물</p>
              <input
                type="number"
                {...register('carb', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('protein')}>
              <p>단백질</p>
              <input
                type="number"
                {...register('protein', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('fat')}>
              <p>지방</p>
              <input
                type="number"
                {...register('fat', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('natruim')}>
              <p>나트륨</p>
              <input
                type="number"
                {...register('natruim', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('sugars')}>
              <p>당</p>
              <input
                type="number"
                {...register('sugars', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('cholesterol')}>
              <p>콜레스테롤</p>
              <input
                type="number"
                {...register('cholesterol', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('transfat')}>
              <p>트랜스지방</p>
              <input
                type="number"
                {...register('transfat', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
            <S.NutrientInputElement changeColor={checkInput('saturatedfatty')}>
              <p>포화지방</p>
              <input
                type="number"
                {...register('saturatedfatty', { required: true, min: 0 })}
              ></input>
              <span>g</span>
            </S.NutrientInputElement>
          </S.NutrientBox>
          <S.BtnContainer>
            <S.AddBtn type="submit">음식 등록</S.AddBtn>
          </S.BtnContainer>
        </form>
      </ScrollContainer>
    </Container>
  );
}

export default MealsEnroll;
