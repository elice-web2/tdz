import GoalUserInfoForm from '../../components/Mygoal/GoalUserInfo';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import { ScrollContainer } from '../../components/styles/ScrollContainer';

function GoalUserInfo() {
  return (
    <Container>
      <Logo />
      <ScrollContainer minusHeight={120}>
        <GoalUserInfoForm />
      </ScrollContainer>
      <Navbar />
    </Container>
  );
}

export default GoalUserInfo;
