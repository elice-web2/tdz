import styled from "styled-components";
import { Link } from 'react-router-dom';
import Container from "../../components/styles/Container";
import Logo from "../../components/common/Logo";
import Navbar from "../../components/common/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Mypage() {
    return (
        <Container>
            <Logo />
            <MypageContainer>
                <MypageItemBox>
                    <SettingProfileContainer>
                    <Link to="/mypage/user_info" style={{ textDecoration: "none" }}>
                        <FontAwesomeIcon icon={faGear} className="SettingProfile" />
                    </Link>
                    </SettingProfileContainer>
                    <UserProfileInfoContainer>
                        <UserProfileImage src="https://images.freeimages.com/images/large-previews/4f3/salad-1-1323575.jpg" />
                        <UserPofileInfoContainer>
                            <UserNicknameText>닉네임</UserNicknameText>
                            <UserGoal>나의 각오</UserGoal>
                            <UserGoalTextInfo>나의 각오를 보여주는 공간입니다.</UserGoalTextInfo>
                        </UserPofileInfoContainer>
                    </UserProfileInfoContainer>
                </MypageItemBox>
                <LogoutButton>로그아웃</LogoutButton>
                <MygoalSettingContainer>
                    <Mygoal>나의 목표</Mygoal>
                    <Link to="/mypage/goal_step1" style={{ textDecoration: "none" }}>
                        <FontAwesomeIcon icon={faAngleRight} className="SettingGoal" />
                    </Link>
                </MygoalSettingContainer>
                <MypageItemBox>
                    <UserGoalNumberContainer>
                        <UserGoalNumberInfo>목표 체중</UserGoalNumberInfo>
                        <UserGoalNumberInfo>권장 칼로리</UserGoalNumberInfo>
                        <UserGoalNumberInfo>탄단지</UserGoalNumberInfo>
                    </UserGoalNumberContainer>
                    <UserGoalNumberContainer>
                        <UserGoalNumberInfo>나이</UserGoalNumberInfo>
                        <UserGoalNumberInfo>키</UserGoalNumberInfo>
                        <UserGoalNumberInfo>몸무게</UserGoalNumberInfo>
                    </UserGoalNumberContainer>
                </MypageItemBox>
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

const MypageItemBox = styled.div`
    width: 240px;
    height: 120px;
    padding: 20px 24px;

    box-shadow: 2px 2px 6px 0px gray;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.mainColor.lighter};
`;

const LogoutButton = styled.button`
    align-self: flex-end;

    margin: 10px 60px 10px 0;

    border: none;
    background-color: transparent;

    color: gray;
`

const MygoalSettingContainer = styled.button`
    display: flex;
    align-items: center;
    align-self: flex-start;

    margin: 4px 0 4px 60px;

    border: none;
    background-color: transparent;
`

const Mygoal = styled.div`
    padding: 0 4px 0 0;

    font-size: 14px;
    font-weight: bold;
`

const SettingProfileContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const UserProfileInfoContainer = styled.div`
    display: flex;
`

const UserProfileImage = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 90px;
    height: 90px;
    margin-right: 24px;

    border-radius: 50%;
    border: none;
`

const UserPofileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const UserNicknameText = styled.h2`
    margin: 10px 0;

    font-size: 16px;
    font-weight: 600;
`

const UserGoal = styled.h4`
    font-size: 12px;
`

const UserGoalTextInfo = styled.p`
    margin-top: 10px;

    font-size: 10px;
`

const UserGoalNumberContainer = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 10px 0 30px 0;
`

const UserGoalNumberInfo = styled.div`
    font-weight: bold;
`