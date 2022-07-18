import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  max-width: 420px;
  background-color: ${({ theme }) => theme.mainColor.darker};
`;

export const LogoText = styled.h1`
  max-width: 100%;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
  align-items: center;
  margin-top: 0.4%;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: 90px;
  /* margin-top: 4%; */
`;
