import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 420px;
  display: flex;
  height: 60px;
  /* background-color: ${({ theme }) => theme.mainColor.darker}; */
  background-color: white;
  /* border-top: 0.7px solid ${({ theme }) => theme.mainColor.darker}; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -10px 30px -15px ${({ theme }) => theme.mainColor.normal};
`;

export const MenuBox = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  margin: 0 5px;
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? props.theme.mainColor.darker : '#9b9b9b'};
  font-weight: ${(props) => (props.isSelected ? 600 : 300)};
  .icon {
    padding: 6px;
  }
`;
export const NavText = styled.div`
  font-size: 13px;
`;

export const NavBackground = styled.div`
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  max-width: 420px;
  background-color: white;
  z-index: -100;
`;
