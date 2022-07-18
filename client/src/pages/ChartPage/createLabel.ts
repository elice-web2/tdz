import dayjs from 'dayjs';

export const createLabelDaily = (date: dayjs.Dayjs) => {
  const label = [];
  const aWeekAgo = date.add(-6, 'd');
  for (let i = 0; i < 7; i++) {
    label.push(aWeekAgo.add(i, 'd').format('M/D'));
  }
  return label;
};

export const createLabelWeekly = (date: dayjs.Dayjs) => {
  const label = [];
  const aFourWeeksAgo = date.add(-4, 'week').add(1, 'day');
  for (let i = 0; i < 4; i++) {
    label.push([
      aFourWeeksAgo.add(i, 'week').format('M.D'),
      `~ ${aFourWeeksAgo.add(i, 'week').add(6, 'd').format('M.D')}`,
    ]);
  }
  return label;
};

export const createLabelMonthly = (date: dayjs.Dayjs) => {
  const label = [];
  const aTwoMonthAgo = date.add(-2, 'month');
  for (let i = 0; i < 3; i++) {
    label.push(aTwoMonthAgo.add(i, 'month').format('YYYY.MM'));
  }
  return label;
};
