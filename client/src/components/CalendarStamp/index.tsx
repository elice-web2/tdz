import { useState } from 'react';
import Calendar from 'react-calendar';
import '../../assets/CalendarStamp.css';
import * as S from './style';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateDate } from '../../slices/dateSlice';

//성공한 날짜 더미데이터
const marks = [
  '23-06-2022',
  '24-06-2022',
  '01-07-2022',
  '03-07-2022',
  '04-07-2022',
  '05-07-2022',
  '06-07-2022',
  '08-07-2022',
];

interface CalendarStampProps {
  closeCalendar: () => void;
}

function CalendarStamp({ closeCalendar }: CalendarStampProps) {
  const dispatch = useAppDispatch();
  const date = useAppSelector(({ date }) => date.value);
  const [value, onChange] = useState(new Date(date));

  const onClickDay = (day: Date) => {
    const changedDate = dayjs(day).format('YYYY-MM-DD');
    dispatch(updateDate(changedDate));
    closeCalendar();
  };

  return (
    <>
      <S.Overlay onClick={closeCalendar} />
      <S.CalendarContainer>
        <Calendar
          onChange={onChange}
          value={value}
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month"
          showNeighboringMonth={false}
          calendarType="US"
          formatDay={(_, date) => date.toLocaleString('en', { day: 'numeric' })}
          onClickDay={onClickDay}
          tileClassName={({ date }) => {
            if (marks.find((x) => x === dayjs(date).format('DD-MM-YYYY'))) {
              return 'highlight';
            }
            return null;
          }}
        />
      </S.CalendarContainer>
    </>
  );
}

export default CalendarStamp;
