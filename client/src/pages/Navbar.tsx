import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faUtensils,
  faChartColumn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../components/styles/Container';

const Navbar: React.FC = () => {
  return (
    <Container>
      <NavContainer>
        <LinkWrapper to="/home">
          <div className="icon">
            <FontAwesomeIcon icon={faHouseChimney} />
          </div>
          <div>Home</div>
        </LinkWrapper>

        <LinkWrapper to="/meals">
          <div className="icon">
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <div>식단</div>
        </LinkWrapper>
        <LinkWrapper to="/chart">
          <div className="icon">
            <FontAwesomeIcon icon={faChartColumn} />
          </div>
          <div>Chart</div>
        </LinkWrapper>

        <LinkWrapper to="/mypage">
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>MyPage</div>
        </LinkWrapper>
      </NavContainer>
    </Container>
  );
};

const NavContainer = styled.div`
  width: 420px;
  height: 60px;
  display: flex;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

const LinkWrapper = styled(Link)`
  width: 105px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  align-items: center;
  justify-content: center;
  margin: 0 5px;

  .icon {
    padding: 5px;
  }
`;
export default Navbar;
