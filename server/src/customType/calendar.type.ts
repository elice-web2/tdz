import { NumberList } from 'aws-sdk/clients/iot';

export interface CalendarInfo {
  userId: string;
  date: Date;
  isSuccess: boolean;
  currentKcal: Number;
  goalKcal: Number;
  mode: string;
  todayWeight: Number;
  carbSum: Number;
  proteinSum: Number;
  fatSum: Number;
  sugarsSum: Number;
  natriumSum: Number;
  cholesterolSum: Number;
  saturatedfattySum: Number;
  transfatSum: Number;
}

export interface CalendarData {
  _id: string;
  userId: string;
  date: Date;
  isSuccess: boolean;
  currentKcal: Number;
  goalKcal: Number;
  mode: string;
  todayWeight: Number;
  carbSum: Number;
  proteinSum: Number;
  fatSum: Number;
  sugarsSum: Number;
  natriumSum: Number;
  cholesterolSum: Number;
  saturatedfattySum: Number;
  transfatSum: Number;
}

export interface ToUpdate {
  calendarId: string;
  update: CalendarToUpdate;
}

export interface CalendarToUpdate {
  date?: Date;
  current_kcal?: Number;
  goal_kcal?: Number;
  mode?: string;
  todayWeight?: Number;
  carbSum?: Number;
  proteinSum?: Number;
  fatSum?: Number;
  sugarsSum?: Number;
  natriumSum?: Number;
  cholesterolSum?: Number;
  saturatedfattySum?: Number;
  transfatSum?: Number;
}
