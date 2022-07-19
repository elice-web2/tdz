export interface DayInfo {
  user_id: string;
  date: string;
}

export interface FromToInfo {
  user_id: string;
  from: string;
  to: string;
}

export interface ChartData {
  userId: string;
  weight: Number[];
  kcalAvg: Number[];
  carbAvg: Number[];
  proteinAvg: Number[];
  fatAvg: Number[];
  kcalSum: Number;
  carbSum: Number;
  proteinSum: Number;
  fatSum: Number;
  sugarsSum: Number;
  natriumSum: Number;
  cholesterolSum: Number;
  saturatedfattySum: Number;
  transfatSum: Number;
}
