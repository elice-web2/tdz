import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

export const LogoText = styled.h1`
  width: 100px;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
`;
