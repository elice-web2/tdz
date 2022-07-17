import * as S from './style';
import Container from '../../components/styles/Container';
import InputElement from '../../components/MealEnroll/InputElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function MealsEnroll() {
  const navigate = useNavigate();
  return (
    <Container>
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
      <S.InfoBox>
        <S.NameInputElement>
          <p>음식명</p>
          <input type="text"></input>
        </S.NameInputElement>
      </S.InfoBox>
      <S.BorderLine></S.BorderLine>
      <S.InfoBox>
        <h2>영양정보</h2>
        <InputElement name={'내용량(g)'}></InputElement>
        <InputElement name={'열량'}></InputElement>
        <InputElement name={'탄수화물'}></InputElement>
        <InputElement name={'단백질'}></InputElement>
        <InputElement name={'지방'}></InputElement>
      </S.InfoBox>
      <S.BorderLine></S.BorderLine>
      <S.InfoBox>
        <InputElement name={'당'}></InputElement>
        <InputElement name={'나트륨'}></InputElement>
        <InputElement name={'트랜스지방'}></InputElement>
        <InputElement name={'포화지방'}></InputElement>
      </S.InfoBox>
      <S.BtnContainer>
        <S.AddBtn>음식 등록</S.AddBtn>
      </S.BtnContainer>
    </Container>
  );
}

export default MealsEnroll;
