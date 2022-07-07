import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../components/styles/Container';

export default function Signin() {
    return (
        <Container>
            <SigninContainer>
                <SigninText>
                    로그인
                </SigninText>
                <SigninInputLabel>아이디</SigninInputLabel>
                <SigninInputBox type="email" />
                <SigninInputLabel>비밀번호</SigninInputLabel>
                <SigninInputBox type="password" />
                <SignUpContainer>
                    <div>계정이 없으신가요?</div>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                        회원가입
                    </Link>
                </SignUpContainer>
                <SigninButton>로그인</SigninButton>
            </SigninContainer>
        </Container>
    )
}

const SigninContainer = styled.div`
    
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

const SigninText = styled.h2`
    margin: 20px 0;
    font-size: 24px;
    font-weight: 600;
`

const SigninInputLabel = styled.h4`
    font-size: 12px;
    margin: 10px 0;
`

const SigninInputBox = styled.input.attrs(props => ({
    type: props.type
}))`
    background-color: #D9D9D9;
    border: none;

    padding: 8px 32px;
    margin: 0 auto;
`

const SignUpContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;

    position: absolute; 
    top: 70%; 
    transform: translate(0%, -50%);
`

const SigninButton = styled.button`
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