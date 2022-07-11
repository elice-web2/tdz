import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/Container';

const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer>
        <LogoText
          onClick={() => {
            navigate('/home');
          }}
        >
          TDZ
        </LogoText>
      </LogoContainer>
    </Container>
  );
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

const LogoText = styled.h1`
  width: 100px;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
`;

export default Logo;
