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
  top: 300px;
  left: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 400px;
  padding: 20px;
  height: 200px;
  background-color: white;
  border-radius: 5px;
  z-index: 2;
`;

export const EnrollBtn = styled.button`
  width: 300px;
  height: 60px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: skyblue;
  font-size: 16px;
  font-weight: bold;
  z-index: 999;
  cursor: pointer;
`;
