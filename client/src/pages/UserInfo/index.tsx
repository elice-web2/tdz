import Container from '../../components/styles/Container';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import * as S from './style';

export default function UserInfo() {
  return (
    <Container>
      <Logo />
      <S.MypageContainer>
        <S.UserInfoContainer>
          <S.UserInfoHeader>프로필 변경</S.UserInfoHeader>
          <S.UserProfileImage src="https://images.freeimages.com/images/large-previews/4f3/salad-1-1323575.jpg" />
          <S.UserInfoInputLabel>닉네임</S.UserInfoInputLabel>
          <S.UserInfoInputBox type="text" />
          <S.UserInfoInputLabel>나의 각오</S.UserInfoInputLabel>
          <S.UserInfoInputBox type="text" />
          <S.UserInfoButton>수정하기</S.UserInfoButton>
        </S.UserInfoContainer>
      </S.MypageContainer>
      <Navbar />
    </Container>
  );
}
