import GoalUserInfoForm from '../../components/Mygoal/GoalUserInfo';
import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';

function GoalUserInfo() {
  return (
    <Container>
      <Logo />
      <GoalUserInfoForm />
      <Navbar />
    </Container>
  );
}

export default GoalUserInfo;
