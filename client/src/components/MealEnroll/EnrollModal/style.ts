import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OutsideModal = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 1;
`;
export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 80%;
  padding: 20px;
  padding-top: 5px;
  height: 200px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  z-index: 999;

  h2 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  span {
    color: lightgray;
    font-size: 14px;
    cursor: pointer;
    align-self: flex-end;
  }
`;

export const EnrollBtn = styled.button`
  width: 60%;
  height: 40px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  color: white;
  font-size: 13px;
  font-weight: 500;
  z-index: 999;
  cursor: pointer;
`;
