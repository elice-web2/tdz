// dependencies
import { useNavigate } from 'react-router-dom';
// stores
import { initDate } from 'slices/dateSlice';
import { logout } from 'slices/usersInfoSlice';
// hooks
import { useAppDispatch } from 'hooks';
// styles
import * as S from './style';
// etc
import * as api from 'api';

interface DelUserModalProps {
  setOpenDelUserModal: (value: boolean) => void;
}

function DelUserModal({ setOpenDelUserModal }: DelUserModalProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const delUserHandler = async () => {
    try {
      await api.delete('/api/users');
      dispatch(initDate());
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
