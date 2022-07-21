// dependencies
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
// stores
import { patchActivityAsync } from 'slices/usersInfoSlice';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc
import * as Api from 'api';
import { parseDateFromNow } from 'utils';

function ManageWeight() {
  const { current_weight, goal_weight, mode, nutrient } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const date = useAppSelector(({ date }) => date.value);
  const dispatch = useAppDispatch();
  const [weightValue, setweightValue] = useState('');
  const [isEditingWeight, setIsEditingWeight] = useState(false);
  const [weightByDate, setWeightByDate] = useState(0);

  const onClickEditWeightButton = () => {
    setIsEditingWeight(true);
  };

  const onChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setweightValue(e.currentTarget.value);
  };

  const onSubmitWeight = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditingWeight(false);
    if (!weightValue || Number(weightValue) === current_weight) return;
    const data = {
      date,
      goalKcal: nutrient.kcal,
      mode,
      todayWeight: Number(weightValue) || current_weight,
    };
    // 오늘의 몸무게를 저장 후 유저의 현재 체중도 수정
    await Api.post('/api/calendar', data);
    setWeightByDate(Number(weightValue));
    if (date === dayjs().format('YYYY-MM-DD')) {
      dispatch(patchActivityAsync({ current_weight: Number(weightValue) }));
    }
  };

  const setWeightParagraph = () => {
    if (weightByDate === goal_weight) {
      return '목표를 달성했어요!';
    }
    return `목표 체중 : ${goal_weight}kg`;
  };

  useEffect(() => {
    const getWeightByDate = async () => {
      const res = await Api.get(`/api/calendar/${date}`);
      if (res?.data.length) {
        setWeightByDate(res?.data[0].todayWeight);
      } else {
        setWeightByDate(0);
      }
    };
    getWeightByDate();
  }, [date]);

  return (
    <>
      <S.MessageContainer>
        <span>{parseDateFromNow(date)}의 몸무게를 기록하세요!</span>
        <span>{setWeightParagraph()}</span>
      </S.MessageContainer>
      <S.WeightContainer>
        {isEditingWeight ? (
          <form onSubmit={onSubmitWeight}>
            <S.InputTag
              type={'number'}
              value={weightValue}
              onChange={onChangeWeight}
              min={0}
              max={999}
              placeholder={weightByDate ? String(weightByDate) : ''}
            />
            <button>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </form>
        ) : (
          <>
            {weightByDate ? (
              <p>
                {weightByDate}
                <span>kg</span>
              </p>
            ) : (
              <span className="null-weight">기록 없음</span>
            )}
            <FontAwesomeIcon icon={faPen} onClick={onClickEditWeightButton} />
          </>
        )}
      </S.WeightContainer>
    </>
  );
}

export default ManageWeight;
