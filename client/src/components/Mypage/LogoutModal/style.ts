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
  z-index: 4;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding-bottom: 30px;
  background-color: white;
  border-radius: 15px;
  z-index: 5;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  padding: 30px 10px 10px 10px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

export const CancelButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
  border-radius: 12px;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  border-radius: 12px;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  color: white;
`;
