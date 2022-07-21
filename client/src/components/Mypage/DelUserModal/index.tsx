import { useNavigate } from 'react-router-dom';
import * as api from '../../../api';
import { useAppDispatch } from '../../../hooks';
import { initDate } from '../../../slices/dateSlice';
import { getLogOutAsync, logout } from '../../../slices/usersInfoSlice';
import * as S from './style';
interface DelUserModalProps {
  setOpenDelUserModal: (value: boolean) => void;
}

function DelUserModal({ setOpenDelUserModal }: DelUserModalProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const delUserHandler = async (event: any) => {
    try {
      event.preventDefault();
      dispatch(initDate());
      await api.delete('/api/users');
      dispatch(logout());
      setOpenDelUserModal(false);
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.OutsideModal
        onClick={() => {
          setOpenDelUserModal(false);
        }}
      />
      <S.ModalContainer>
        <S.Title>회원탈퇴를 하시겠습니까?</S.Title>
        <S.ButtonContainer>
          <S.CancelButton
            className="Cancel"
            onClick={() => {
              setOpenDelUserModal(false);
            }}
          >
            취소
          </S.CancelButton>
          <S.DeleteButton onClick={delUserHandler} className="Logout">
            삭제
          </S.DeleteButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </>
  );
}

export default DelUserModal;
