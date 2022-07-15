import GoalCaloriesForm from '../../components/Mygoal/GoalCalories';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import { ScrollContainer } from '../../components/styles/ScrollContainer';

function GoalCalories() {
  return (
    <Container>
      <Logo />
      <ScrollContainer minusHeight={120}>
        <GoalCaloriesForm />
      </ScrollContainer>
      <Navbar />
    </Container>
  );
}

export default GoalCalories;
