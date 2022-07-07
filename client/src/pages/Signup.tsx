import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../components/styles/Container';

export default function Signup() {
    return (
        <Container>
            <SignupContainer>
                <SignupText>
                    회원가입
                </SignupText>
                <SignupInputLabel>아이디</SignupInputLabel>
                <SignupInputBox type="email" />
                <SignupInputLabel>비밀번호</SignupInputLabel>
                <SignupInputBox type="password" />
                <SignupInputLabel>비밀번호 확인</SignupInputLabel>
                <SignupInputBox type="password" />
                <SigninContainer>
                    <div>이미 계정이 있으신가요?</div>
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                        로그인
                    </Link>
                </SigninContainer>
                <SignupButton>가입하기</SignupButton>
            </SignupContainer>
        </Container>
    )
}

const SignupContainer = styled.div`
    
    position: absolute; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%);

    width: 240px;
    height: 320px;
    padding: 40px 24px;

    box-shadow: 2px 2px 6px 0px gray;
    border-radius: 16px;
    background-color: #fff;
`;

const SignupText = styled.h2`
    margin: 20px 0;
    font-size: 24px;
    font-weight: 600;
`

const SignupInputLabel = styled.h4`
    font-size: 12px;
    margin: 10px 0;
`

const SignupInputBox = styled.input.attrs(props => ({
    type: props.type
}))`
    background-color: #D9D9D9;
    border: none;

    padding: 8px 32px;
    margin: 0 auto;
`

const SigninContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;

    position: absolute; 
    top: 75%; 
    transform: translate(0%, -50%);
`

const SignupButton = styled.button`
    position: absolute; 
    left: 50%; 
    top: 90%; 
    transform: translate(-50%, -50%);

    width: 200px;
    height: 32px;

    border-radius: 12px;
    background-color: #121212;

    font-size: 12px;
    color: #FFFFFF;
`