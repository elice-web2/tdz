// stores
import { delMealsDataAsync } from 'slices/mealsSlice';
// types
import { MealListItem } from 'customType/meal.type';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc
import * as api from 'api';

interface MealsModalProps {
  setOpenModal: (value: boolean) => void;
  setList: React.Dispatch<React.SetStateAction<any[]>>;
  meal: MealListItem;
}

function MealsListDeleteModal({
  setOpenModal,
  setList,
  meal,
}: MealsModalProps) {
  const date = useAppSelector(({ date }) => date.value);
  const totalNutrient = useAppSelector(({ meal }) => meal.totalNutrient);
  const usersInfo = useAppSelector(({ usersInfo }) => usersInfo.value);

  function isSuccessGoal(cur: number, goal: number, mode: string) {
    if (mode === 'DEC') {
      return cur > 0 && cur <= goal ? true : false;
    } else if (mode === 'INC') {
      return cur >= goal ? true : false;
    }
  }

  const dispatch = useAppDispatch();
  const deleteMeal = async (event: any) => {
    const stampResult = {
      date: date,
      currentKcal: totalNutrient.kcal - meal.kcal,
      goalKcal: usersInfo.nutrient.kcal,
      mode: usersInfo.mode,
      isSuccess: isSuccessGoal(
        totalNutrient.kcal - meal.kcal,
        usersInfo.nutrient.kcal,
        usersInfo.mode,
      ),
      carbSum: totalNutrient.carb - meal.carb,
      proteinSum: totalNutrient.protein - meal.protein,
      fatSum: totalNutrient.fat - meal.fat,
      sugarsSum: totalNutrient.sugars - meal.sugars,
      natriumSum: totalNutrient.natrium - meal.natrium,
      cholesterolSum: totalNutrient.cholesterol - meal.cholesterol,
      saturatedfattySum: totalNutrient.saturatedfatty - meal.saturatedfatty,
      transfatSum: totalNutrient.transfat - meal.transfat,
    };
    try {
      event.preventDefault();
      await dispatch(delMealsDataAsync(meal._id));
      await api.post('/api/calendar', stampResult);
      setList((lists: any) =>
        lists.filter((list: any) => list._id !== meal._id),
      );
      setOpenModal(false);
    } catch (error) {
      console.error(error);
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
