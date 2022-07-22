// dependencies
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// components
import GoalNutrientForm from 'components/Mygoal/GoalNutrient';
import Container from 'components/styles/Container';
import Logo from 'components/common/Logo';
import { ScrollContainer } from 'components/styles/ScrollContainer';
// stores
// types
// hooks
import { useAppSelector } from 'hooks';
// styles
// etc

function GoalNutrient() {
  const navigate = useNavigate();
  const { isLogin } = useAppSelector(({ usersInfo }) => usersInfo.value);

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <Logo />
      <ScrollContainer minusHeight={60}>
        <GoalNutrientForm />
      </ScrollContainer>
    </Container>
  );
}

export default GoalNutrient;
