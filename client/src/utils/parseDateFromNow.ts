import dayjs from 'dayjs';

const parseDay = (day: number) => {
  const dayKor = ['일', '월', '화', '수', '목', '금', '토'];
  return dayKor[day];
};

export const parseDateFromNow = (date: string) => {
  const today = dayjs().format('YYYY-MM-DD');
  const yesterday = dayjs(today).add(-1, 'd').format('YYYY-MM-DD');
  const tomorrow = dayjs(today).add(1, 'd').format('YYYY-MM-DD');
  if (date === today) return '오늘';
  if (date === yesterday) return '어제';
  if (date === tomorrow) return '내일';
  return `${dayjs(date).format('M.D')} (${parseDay(dayjs(date).day())})`;
};
