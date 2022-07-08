import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../styles/Container';

const Logo: React.FC = () => {
  return (
    <Container>
      <TopLogo>
        <StyledLink to="/home">TDZ</StyledLink>
      </TopLogo>
    </Container>
  );
};

const TopLogo = styled.div`
  width: 420px;
  height: 60px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export default Logo;
