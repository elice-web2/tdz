import GoalNutrientForm from '../../components/Mygoal/GoalNutrient';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';

function GoalNutrient() {
  return (
    <Container>
      <Logo />
      <GoalNutrientForm />
      <Navbar />
    </Container>
  );
}

export default GoalNutrient;
