// dependencies
import { useNavigate } from 'react-router-dom';
// stores
import { addMeals } from 'slices/mealsSlice';
// hooks
import { useAppDispatch } from 'hooks';
// styles
import * as S from './style';

interface ModalType {
  setOpenModal: (value: boolean) => void;
  submitData: any;
}

function EnrollModal({ setOpenModal, submitData }: ModalType) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.OutsideModal
        onClick={() => {
          setOpenModal(false);
        }}
      ></S.OutsideModal>
      <S.ModalContainer>
        <span>X</span>
        <h2>식품 등록이 완료되었습니다!</h2>
        <S.EnrollBtn
          onClick={() => {
            dispatch(addMeals(submitData));
            navigate('/meals/cart');
          }}
        >
          식단 바로 등록
        </S.EnrollBtn>
        <S.EnrollBtn
          onClick={() => {
            navigate(`/meals/detail/${submitData.name}`);
          }}
        >
          등록한 식품 상세보기
        </S.EnrollBtn>
      </S.ModalContainer>
    </S.Container>
  );
}

export default EnrollModal;
