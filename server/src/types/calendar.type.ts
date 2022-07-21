export interface CalendarInfo {
  userId: string;
  date: Date;
  isSuccess: boolean;
  currentKcal: number;
  goalKcal: number;
  mode: string;
  todayWeight: number;
  carbSum: number;
  proteinSum: number;
  fatSum: number;
  sugarsSum: number;
  natriumSum: number;
  cholesterolSum: number;
  saturatedfattySum: number;
  transfatSum: number;
}

export interface CalendarData {
  _id: string;
  userId: string;
  date: Date;
  isSuccess: boolean;
  currentKcal: number;
  goalKcal: number;
  mode: string;
  todayWeight: number;
  carbSum: number;
  proteinSum: number;
  fatSum: number;
  sugarsSum: number;
  natriumSum: number;
  cholesterolSum: number;
  saturatedfattySum: number;
  transfatSum: number;
}

export interface ToUpdate {
  calendarId: string;
  update: CalendarToUpdate;
}

export interface CalendarToUpdate {
  isSuccess?: boolean;
  current_kcal?: number;
  goal_kcal?: number;
  mode?: string;
  todayWeight?: number;
  carbSum?: number;
  proteinSum?: number;
  fatSum?: number;
  sugarsSum?: number;
  natriumSum?: number;
  cholesterolSum?: number;
  transfatSum?: number;
  saturatedfattySum?: number;
}
