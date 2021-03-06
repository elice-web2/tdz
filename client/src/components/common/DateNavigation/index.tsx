// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { useState } from 'react';
// components
import CalendarStamp from 'components/CalendarStamp';
// stores
import { updateDate } from 'slices/dateSlice';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import * as S from './style';
// etc
import { parseDateFromNow } from 'utils';

function DateNavigation() {
  const dispatch = useAppDispatch();
  const date = useAppSelector(({ date }) => date.value);
  const [toggleCalendar, setToggleCalendar] = useState(false);

  const onClickLeftAndRight = (number: number) => {
    const changedDate = dayjs(date).add(number, 'd').format('YYYY-MM-DD');
    dispatch(updateDate(changedDate));
    setToggleCalendar(false);
  };

  const onClicktoggleCalendar = () => {
    setToggleCalendar((prev) => !prev);
  };

  const closeCalendar = () => {
    setToggleCalendar(false);
  };

  return (
    <>
      <S.Wrapper>
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={() => onClickLeftAndRight(-1)}
        />

        <S.DateContainer onClick={onClicktoggleCalendar}>
          <p>{parseDateFromNow(date)}</p>
          <FontAwesomeIcon size="6x" icon={faCaretDown} />
        </S.DateContainer>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => onClickLeftAndRight(1)}
        />
      </S.Wrapper>
      {toggleCalendar && <CalendarStamp closeCalendar={closeCalendar} />}
    </>
  );
}

export default DateNavigation;
