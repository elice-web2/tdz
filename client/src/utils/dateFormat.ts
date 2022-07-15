export function dateFormat(date: Date) {
  let month: string | number = date.getMonth();
  let day: string | number = date.getDate();
  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return `${date.getFullYear()}-${month}-${day}`;
}
