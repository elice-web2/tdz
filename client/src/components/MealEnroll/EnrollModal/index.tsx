import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { addMeals } from '../../../slices/mealsSlice';
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
        <S.EnrollBtn
          onClick={() => {
            console.log('submitData', submitData);
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
