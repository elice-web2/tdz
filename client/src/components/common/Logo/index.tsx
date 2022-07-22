// dependencies
import { useNavigate } from 'react-router-dom';
// components
import Container from 'components/styles/Container';
// styles
import * as S from './style';

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
          <S.LogoImg
            src={require('../../../assets/logoWhite.png')}
            alt="logo"
          />
        </S.LogoText>
      </S.LogoContainer>
    </Container>
  );
}

export default Logo;
