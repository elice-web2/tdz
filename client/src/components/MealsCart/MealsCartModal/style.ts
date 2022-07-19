import styled from 'styled-components';

export const Container = styled.div`
  max-width: 420px;
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
  position: absolute;
  top: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-left: 60px;
  padding-bottom: 30px;
  background-color: white;
  border-radius: 15px;
  z-index: 2;
`;

export const XBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 13px;
  color: gray;
  cursor: pointer;
`;
export const Title = styled.h1`
  margin-bottom: 15px;
  padding: 30px 10px 10px 10px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 250px;
  margin-bottom: 20px;
  padding: 10px;

  button {
    width: 70px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
`;
export const CompleteBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;
