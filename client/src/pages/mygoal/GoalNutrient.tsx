import GoalNutrientForm from '../../components/Mygoal/GoalNutrient';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import { ScrollContainer } from '../../components/styles/ScrollContainer';

function GoalNutrient() {
  return (
    <Container>
      <Logo />
      <ScrollContainer minusHeight={120}>
        <GoalNutrientForm />
      </ScrollContainer>
      <Navbar />
    </Container>
  );
}

export default GoalNutrient;
