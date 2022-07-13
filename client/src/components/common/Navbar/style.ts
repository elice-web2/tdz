import styled from 'styled-components';

export const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 420px;
  display: flex;
  height: 60px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  margin: 0 5px;
  cursor: pointer;

  .icon {
    padding: 5px;
  }
`;
