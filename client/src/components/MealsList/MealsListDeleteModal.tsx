import styled from 'styled-components';

interface MealsModalProps {
  setOpenModal: (value: boolean) => void;
}
export default function MealsListDeleteModal (props:MealsModalProps) {
  const Container = styled.div`
    width: 100%;
    height: 100%;
  `;

  const OutsideModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);
    z-index: 1;
  `;

  const ModalContainer = styled.div`
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

  const Title = styled.h1`
    margin-bottom: 15px;
    padding: 30px 10px 10px 10px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  `;

  const CancelButton = styled.button`
    width: 80px;
    height: 40px;
    background-color: ${({ theme }) => theme.mainColor.lighter};
    border-radius: 12px;
    border: none;
    font-size: 18px;
    color: white;
    cursor: pointer;
  `

  const DeleteButton = styled.button`
    width: 80px;
    height: 40px;
    background-color: ${({ theme }) => theme.mainColor.darker};
    border-radius: 12px;
    border: none;
    font-size: 18px;
    color: white;
    cursor: pointer;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    color: white;
  `;

  return (
    <Container>
      <OutsideModal onClick={() => {
            props.setOpenModal(false);
          }}/>
      <ModalContainer>
        <Title>해당 식단을 정말 삭제 하시겠습니까?</Title>
        <ButtonContainer>
          <CancelButton className="Cancel" onClick={() => {
            props.setOpenModal(false);
          }}>취소</CancelButton>
          <DeleteButton className="Delete">삭제</DeleteButton>
        </ButtonContainer>
      </ModalContainer>
    </Container>
  );
};
