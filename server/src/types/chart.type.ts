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
  weight: number[];
  kcalAvg: number[];
  carbAvg: number[];
  proteinAvg: number[];
  fatAvg: number[];
  kcalSum: number;
  carbSum: number;
  proteinSum: number;
  fatSum: number;
  sugarsSum: number;
  natriumSum: number;
  cholesterolSum: number;
  saturatedfattySum: number;
  transfatSum: number;
}
