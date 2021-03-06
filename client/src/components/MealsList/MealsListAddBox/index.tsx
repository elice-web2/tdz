// dependencies
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// styles
import * as S from './style';

function MealsListAddBox() {
  const navigate = useNavigate();

  return (
    <S.MealsListContainer>
      <S.AddBox onClick={() => navigate('/meals/search')}>
        <FontAwesomeIcon icon={faCirclePlus} className="AddContainer" />
        <span className="GuideInfo">식단을 추가해주세요</span>
      </S.AddBox>
    </S.MealsListContainer>
  );
}

export default MealsListAddBox;
