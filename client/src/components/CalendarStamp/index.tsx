// dependencies
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
// stores
import { updateDate } from 'slices/dateSlice';
// hooks
import { useAppDispatch, useAppSelector } from 'hooks';
// styles
import 'assets/CalendarStamp.css';
import * as S from './style';
// etc
import * as api from 'api';

interface CalendarStampProps {
  closeCalendar: () => void;
}

function CalendarStamp({ closeCalendar }: CalendarStampProps) {
  const dispatch = useAppDispatch();
  const date = useAppSelector(({ date }) => date.value);

  const [value, onChange] = useState(new Date(date));
  const [success, setSuccess] = useState<string[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await api.get('/api/calendar');
    const data = resp?.data;
    const mark = data.map((ele: any) => {
      if (ele.isSuccess) return dayjs(ele.date).format('YYYY-MM-DD');
    });
    setSuccess(mark);
  };

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
            if (success.find((x) => x === dayjs(date).format('YYYY-MM-DD'))) {
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
