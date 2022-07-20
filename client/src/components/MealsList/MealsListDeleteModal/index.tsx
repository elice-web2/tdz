import { useAppDispatch, useAppSelector } from '../../../hooks';
import { delMealsDataAsync } from '../../../slices/mealsSlice';
import * as S from './style';
import * as api from '../../../api';

interface MealsModalProps {
  setOpenModal: (value: boolean) => void;
  setList: React.Dispatch<React.SetStateAction<any[]>>;
  _id: string;
  calorie: number;
}

function MealsListDeleteModal({
  setOpenModal,
  _id,
  calorie,
  setList,
}: MealsModalProps) {
  const date = useAppSelector(({ date }) => date.value);
  const totalKcal = useAppSelector(({ meal }) => meal.totalKcal);
  const usersInfo = useAppSelector(({ usersInfo }) => usersInfo.value);

  function isSuccessGoal(cur: number, goal: number, mode: string) {
    if (mode === 'DEC') {
      return cur > 0 && cur <= goal ? true : false;
    } else if (mode === 'INC') {
      return cur >= goal ? true : false;
    }
  }

  const dispatch = useAppDispatch();
  const deleteMeal = (event: any) => {
    const stampResult = {
      date: date,
      currentKcal: totalKcal - calorie,
      goalKcal: usersInfo.nutrient.kcal,
      mode: usersInfo.mode,
      isSuccess: isSuccessGoal(
        totalKcal - calorie,
        usersInfo.nutrient.kcal,
        usersInfo.mode,
      ),
    };
    try {
      event.preventDefault();
      dispatch(delMealsDataAsync(_id));
      api
        .post('/api/calendar', stampResult)
        .then((res) => console.log('스탬프res', res));
      setList((lists: any) => lists.filter((list: any) => list._id !== _id));
      setOpenModal(false);
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
