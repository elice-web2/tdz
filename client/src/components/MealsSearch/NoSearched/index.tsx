import * as S from './style';
import { useNavigate } from 'react-router-dom';

function NoSearched() {
  const navigate = useNavigate();
  return (
    <>
      <S.NoSearchedContainer>검색결과가 없습니다.</S.NoSearchedContainer>
      <S.AddButton
        onClick={() => {
          navigate('/meals/enroll');
        }}
      >
        직접 등록
      </S.AddButton>
    </>
  );
}

export default NoSearched;
