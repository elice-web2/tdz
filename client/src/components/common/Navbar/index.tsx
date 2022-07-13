import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faUtensils,
  faChartColumn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../../styles/Container';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <S.NavContainer>
        <S.MenuBox
          onClick={() => {
            navigate('/home');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faHouseChimney} />
          </div>
          <div>Home</div>
        </S.MenuBox>

        <S.MenuBox
          onClick={() => {
            navigate('/meals');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <div>식단</div>
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            navigate('/chart');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faChartColumn} />
          </div>
          <div>Chart</div>
        </S.MenuBox>

        <S.MenuBox
          onClick={() => {
            navigate('/mypage');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>MyPage</div>
        </S.MenuBox>
      </S.NavContainer>
    </Container>
  );
}

export default Navbar;
