import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 420px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OutsideModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 1;
`;
export const ModalContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  width: 300px;
  height: 200px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  z-index: 2;
  display: ${({ theme }) => theme.flexbox('row')};
`;

export const EnrollBtn = styled.button`
  width: 40%;
  height: 60px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  color: white;
  font-size: 16px;
  z-index: 999;
  cursor: pointer;
`;
