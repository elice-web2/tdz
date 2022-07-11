import styled from "styled-components";
import Container from "../../components/styles/Container";
import Logo from "../../components/common/Logo";
import Navbar from "../../components/common/Navbar";

export default function UserInfo() {
    return (
        <Container>
            <Logo />
            <MypageContainer>
                <UserInfoContainer>
                    <UserInfoHeader>프로필 변경</UserInfoHeader>
                    <UserProfileImage src="https://images.freeimages.com/images/large-previews/4f3/salad-1-1323575.jpg" />
                    <UserInfoInputLabel>닉네임</UserInfoInputLabel>
                    <UserInfoInputBox type="text" />
                    <UserInfoInputLabel>나의 각오</UserInfoInputLabel>
                    <UserInfoInputBox type="text" />
                    <UserInfoButton>수정하기</UserInfoButton>
                </UserInfoContainer>
            </MypageContainer>
            <Navbar />
        </Container> 
    )
}

const MypageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 150px 0 150px 0;
`

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 240px;
    height: 320px;
    padding: 40px 24px;

    box-shadow: 2px 2px 6px 0px gray;
    border-radius: 16px;
    background-color: lightgrey;
`;

const UserInfoHeader = styled.h2`
    margin: 0 0 20px 0;

    font-size: 24px;
    font-weight: 600;
`

const UserInfoInputLabel = styled.h4`
    margin: 10px 0;

    font-size: 12px;
`

const UserInfoInputBox = styled.input.attrs(props => ({
    type: props.type
}))`
    padding: 8px 32px;
    margin: 0 auto;

    border: none;
    background-color: grey;
`

const UserInfoButton = styled.button`
    align-self: center;

    width: 200px;
    height: 32px;
    margin-top: 30px;

    border: none;
    border-radius: 12px;
    background-color: #121212;

    font-size: 12px;
    color: #FFFFFF;
`

const UserProfileImage = styled.img.attrs(props => ({
    src: props.src
}))`
    position: relative; 
    left: 50%; 
    top: 15%; 
    transform: translate(-50%, -50%);

    width: 100px;
    height: 100px;

    border-radius: 50%;
    border: none;
`