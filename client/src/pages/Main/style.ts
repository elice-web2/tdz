import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 420px;
  margin: 0 auto;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
`;

export const Video = styled.video`
  width: 100%;
  z-index: -100;
`;

export const LogoText = styled.div`
  position: relative;
  margin-bottom: 80px;
  padding-top: 100px;
  color: black;
  text-align: center;
`;

export const IntroText = styled.p`
  position: relative;
  margin: 10px 0;
  font-size: 21px;
  font-weight: 500;
  text-align: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
  cursor: pointer;
`;

export const LoginBox = styled.div<{ brand: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 60px;
  padding: 5px;
  background-color: ${(props) => {
    if (props.brand === '카카오') {
      return '#FAE100';
    } else if (props.brand === '구글') {
      return '#4285F4';
    } else {
      return 'white';
    }
  }};
  font-size: 30px;
  box-sizing: border-box;

  .icon {
    position: absolute;
    left: 15px;
  }

  p {
    position: absolute;
    left: 60px;
    font-size: 21px;
    font-weight: bold;
  }
`;
