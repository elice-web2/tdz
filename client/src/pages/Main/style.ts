import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  @media only all and (max-height: 600px) {
    bottom: 120px;
  }
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
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: white;
`;
export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  /* background-color: #92a58d; */
  max-width: 420px;
  width: 100%;
  overflow: hidden;
`;
export const ImgBox = styled.img`
  width: 100%;
  object-fit: cover;
  z-index: -100;
  height: 100vh;
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

export const Link = styled.a`
  text-decoration: none;
  color: black;
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
    } else {
      return 'white';
    }
  }};
  font-size: 30px;
  box-sizing: border-box;
  border-radius: 12px;
  .icon {
    position: absolute;
    left: 10px;
    .tdzLogo {
      width: 55px;
    }
    .kakaoLogo {
      width: 40px;
      margin-left: 5px;
    }
  }

  p {
    position: absolute;
    left: 80px;
    font-size: 18px;
    font-weight: 500;
  }
`;
