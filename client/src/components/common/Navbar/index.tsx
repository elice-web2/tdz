// dependencies
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faUtensils,
  faChartColumn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
// components
import Container from 'components/styles/Container';
// styles
import * as S from './style';

function Navbar() {
  const currentURL = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();

  return (
    <Container>
      <S.NavBackground />
      <S.NavContainer>
        <S.MenuBox
          onClick={() => {
            navigate('/home');
          }}
          isSelected={currentURL === 'home'}
        >
          <div className="icon">
            <FontAwesomeIcon size="lg" icon={faHouseChimney} />
          </div>
          <S.NavText>Home</S.NavText>
        </S.MenuBox>

        <S.MenuBox
          onClick={() => {
            navigate('/meals');
          }}
          isSelected={currentURL === 'meals'}
        >
          <div className="icon">
            <FontAwesomeIcon size="lg" icon={faUtensils} />
          </div>
          <S.NavText>식단</S.NavText>
        </S.MenuBox>
        <S.MenuBox
          onClick={() => {
            navigate('/chart');
          }}
          isSelected={currentURL === 'chart'}
        >
          <div className="icon">
            <FontAwesomeIcon size="lg" icon={faChartColumn} />
          </div>
          <S.NavText>Chart</S.NavText>
        </S.MenuBox>

        <S.MenuBox
          onClick={() => {
            navigate('/mypage');
          }}
          isSelected={currentURL === 'mypage'}
        >
          <div className="icon">
            <FontAwesomeIcon size="lg" icon={faUser} />
          </div>
          <S.NavText>MyPage</S.NavText>
        </S.MenuBox>
      </S.NavContainer>
    </Container>
  );
}

export default Navbar;
