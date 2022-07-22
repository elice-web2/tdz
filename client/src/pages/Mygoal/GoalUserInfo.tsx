// dependencies
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// components
import GoalUserInfoForm from 'components/Mygoal/GoalUserInfo';
import Container from 'components/styles/Container';
import Logo from 'components/common/Logo';
import { ScrollContainer } from 'components/styles/ScrollContainer';
// hooks
import { useAppSelector } from 'hooks';

function GoalUserInfo() {
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
        <GoalUserInfoForm />
      </ScrollContainer>
    </Container>
  );
}

export default GoalUserInfo;
