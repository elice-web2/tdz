// dependencies
import { useNavigate } from 'react-router-dom';
// stores
import { initDate } from 'slices/dateSlice';
import { getLogOutAsync } from 'slices/usersInfoSlice';
// hooks
import { useAppDispatch } from 'hooks';
// styles
import * as S from './style';

interface LogoutModalProps {
  setOpenLogoutModal: (value: boolean) => void;
}

function LogoutModal({ setOpenLogoutModal }: LogoutModalProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutHandler = (event: any) => {
    try {
      event.preventDefault();
      localStorage.removeItem('login');
      localStorage.removeItem('userInfo');
      dispatch(initDate());
      dispatch(getLogOutAsync());
      setOpenLogoutModal(false);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.OutsideModal
        onClick={() => {
          setOpenLogoutModal(false);
        }}
      />
      <S.ModalContainer>
        <S.Title>로그아웃을 하시겠습니까?</S.Title>
        <S.ButtonContainer>
          <S.CancelButton
            className="Cancel"
            onClick={() => {
              setOpenLogoutModal(false);
            }}
          >
            취소
          </S.CancelButton>
          <S.LogoutButton onClick={logoutHandler} className="Logout">
            확인
          </S.LogoutButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </>
  );
}

export default LogoutModal;
