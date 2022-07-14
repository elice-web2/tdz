import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAppSelector } from '../../../hooks';
import * as S from './style';

function ManageWeight() {
  const { current_weight, goal_weight, mode } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );
  const [weightValue, setweightValue] = useState('');
  const [isEditingWeight, setIsEditingWeight] = useState(false);

  const onClickEditWeightButton = () => {
    setIsEditingWeight(true);
  };

  const onChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setweightValue(e.currentTarget.value);
  };

  const onSubmitWeight = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditingWeight(false);
  };

  const setWeightParagraph = () => {
    if (current_weight === goal_weight) {
      return '목표를 달성했어요!';
    }
    if (mode === 'INC') {
      return `목표까지 ${goal_weight - current_weight}kg 남았어요!`;
    }
    return `목표까지 ${current_weight - goal_weight}kg 남았어요!`;
  };
  return (
    <>
      <S.MessageContainer>
        <span>오늘의 몸무게를 기록하세요!</span>
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
              placeholder={String(current_weight)}
            />
            <button>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </form>
        ) : (
          <>
            <p>
              {current_weight}
              <span>kg</span>
            </p>
            <FontAwesomeIcon icon={faPen} onClick={onClickEditWeightButton} />
          </>
        )}
      </S.WeightContainer>
    </>
  );
}

export default ManageWeight;
