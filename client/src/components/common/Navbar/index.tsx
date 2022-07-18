import * as S from './style';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faUtensils,
  faChartColumn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../../styles/Container';
import { useState } from 'react';

function Navbar() {
  const currentURL = useLocation().pathname.split('/')[1];
  // console.log(currentURL);
  const [selected, setSelected] = useState(currentURL);
  const navigate = useNavigate();
  return (
    <Container>
      <S.NavContainer>
        <S.MenuBox
          onClick={() => {
            navigate('/home');
          }}
          isSelected={selected === 'home'}
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
          isSelected={selected === 'meals'}
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
          isSelected={selected === 'chart'}
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
          isSelected={selected === 'mypage'}
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
