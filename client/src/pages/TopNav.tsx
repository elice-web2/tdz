import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../components/styles/Container';

const TopNav: React.FC = () => {
  return (
    <Container>
      <TopNavbar>
        <StyledLink to="/home">TDZ</StyledLink>
      </TopNavbar>
    </Container>
  );
};

const TopNavbar = styled.div`
  width: 420px;
  height: 60px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export default TopNav;
