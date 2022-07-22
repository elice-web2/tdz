import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  flex-direction: column;
  height: 140px;
  width: 60%;
  background-color: white;
  border-radius: 15px;
  z-index: 2;
`;

export const CancelButton = styled.span`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 5px;
  color: lightgray;
  font-size: 14px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  padding: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const DeleteButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  border-radius: 5px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;
