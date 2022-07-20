import { useAppDispatch } from '../../../hooks';
import { delMealsDataAsync } from '../../../slices/mealsSlice';
import * as S from './style';

interface MealsModalProps {
  setOpenModal: (value: boolean) => void;
  _id: string;
}

function MealsListDeleteModal({ setOpenModal, _id }: MealsModalProps) {
  const dispatch = useAppDispatch();
  const deleteMeal = (event: any) => {
    try {
      event.preventDefault();
      dispatch(delMealsDataAsync(_id));
      setOpenModal(false);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.OutsideModal
        onClick={() => {
          setOpenModal(false);
        }}
      />
      <S.ModalContainer>
        <S.Title>해당 식단을 정말 삭제 하시겠습니까?</S.Title>
        <S.ButtonContainer>
          <S.CancelButton
            className="Cancel"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            취소
          </S.CancelButton>
          <S.DeleteButton onClick={deleteMeal} className="Delete">
            삭제
          </S.DeleteButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </>
  );
}

export default MealsListDeleteModal;
