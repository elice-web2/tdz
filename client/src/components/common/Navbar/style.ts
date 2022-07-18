import styled from 'styled-components';

export const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 420px;
  display: flex;
  height: 60px;
  background-color: ${({ theme }) => theme.mainColor.darker};
`;

export const MenuBox = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  margin: 0 5px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? 'white' : '#9b9b9b')};
  font-weight: ${(props) => (props.isSelected ? 500 : 300)};
  .icon {
    padding: 6px;
  }
`;
export const NavText = styled.div`
  font-size: 13px;
`;
