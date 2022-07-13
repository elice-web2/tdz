import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface MealsCartModalProps {
  setOpenModal: (value: boolean) => void;
}

function MealsCartModal({ setOpenModal }: MealsCartModalProps) {
  const navigate = useNavigate();
  const modalCloseHandler = () => {
    setOpenModal(false);
  };

  return (
    <S.Container>
      <S.OutsideModal onClick={modalCloseHandler}></S.OutsideModal>
      <S.ModalContainer>
        <S.XBtn
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </S.XBtn>
        <S.Title>식사 종류</S.Title>
        <S.BtnContainer>
          <button>아침</button>
          <button>점심</button>
          <button>저녁</button>
          <button>간식</button>
        </S.BtnContainer>

        <S.CompleteBtn
          onClick={() => {
            navigate('/meals');
          }}
        >
          완료
        </S.CompleteBtn>
      </S.ModalContainer>
    </S.Container>
  );
}

export default MealsCartModal;
