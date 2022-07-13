export interface CalendarInfo {
  userId: string;
  date: Date;
  isSuccess: boolean;
  currentKcal: Number;
  goalKcal: Number;
  mode: string;
  todayWeight: Number;
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
}
