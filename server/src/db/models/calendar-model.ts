import { model } from 'mongoose';
import { CalendarSchema } from '../schemas/calendar-schema';
import {
  CalendarData,
  CalendarInfo,
  ToUpdate,
} from '../../customType/calendar.type';

const Calendar = model<CalendarData>('calendars', CalendarSchema);

export class CalendarModel {
  // 유저별 도장 조회
  async findById(userId: string): Promise<CalendarData[] | null> {
    return await Calendar.find({ userId }).lean();
  }

  // 날짜별 도장 조회
  async findByDate(userId: string, date: Date): Promise<CalendarData[] | null> {
    return await Calendar.find({ userId, date }).lean();
  }

  // 도장 상세 조회
  async findByCalendarId(calendarId: string): Promise<CalendarData | null> {
    return await Calendar.find({ _id: calendarId }).lean();
  }

  // 도장 생성
  async create(calendarInfo: CalendarInfo): Promise<CalendarData> {
    return await Calendar.create(calendarInfo);
  }

  // 도장 데이터 수정
  async update({ calendarId, update }: ToUpdate): Promise<CalendarData | null> {
    const filter = { _id: calendarId };
    const option = { new: true };
    return await Calendar.findOneAndUpdate(filter, update, option);
  }

  // 유저 도장 전체 삭제
  async delete(userId: string): Promise<{ deletedCount?: number }> {
    return await Calendar.deleteMany({ userId });
  }
}

const calendarModel = new CalendarModel();

export { calendarModel };
