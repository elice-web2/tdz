import dayjs from 'dayjs';

export type FilterType = 'DAILY' | 'WEEKLY' | 'MONTHLY';

export const convertDate = (
  date: dayjs.Dayjs,
  filter: FilterType,
  isNext: boolean,
) => {
  if (filter === 'DAILY') {
    return dayjs(date).add(isNext ? 6 : -6, 'day');
  }
  if (filter === 'WEEKLY') {
    return isNext
      ? dayjs(date).add(4, 'week').add(-1, 'day')
      : dayjs(date).add(-4, 'week').add(1, 'day');
  }
  return dayjs(date).add(isNext ? 2 : -2, 'month');
};
