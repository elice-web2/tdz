import * as S from './style';
import { useNavigate } from 'react-router-dom';
import Container from '../../styles/Container';

function Logo() {
  const navigate = useNavigate();
  return (
    <Container>
      <S.LogoContainer>
        <S.LogoText
          onClick={() => {
            navigate('/home');
          }}
        >
          TDZ
        </S.LogoText>
      </S.LogoContainer>
    </Container>
  );
}

export default Logo;
