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
  right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
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

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const CancelButton = styled.button`
  position: relative;
  width: 40%;
  height: 40px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
  border-radius: 12px;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const LogoutButton = styled.button`
  width: 40%;
  height: 40px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  border-radius: 12px;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  color: white;
`;
