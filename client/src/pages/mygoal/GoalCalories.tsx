import GoalCaloriesForm from '../../components/Mygoal/GoalCalories';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';

function GoalCalories() {
  return (
    <Container>
      <Logo />
      <GoalCaloriesForm />
      <Navbar />
    </Container>
  );
}

export default GoalCalories;
