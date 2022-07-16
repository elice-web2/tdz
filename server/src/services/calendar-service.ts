import { CalendarModel, calendarModel } from '../db';
import {
  CalendarInfo,
  CalendarData,
  ToUpdate,
  CalendarToUpdate,
} from '../types/calendar.type';

class CalendarService {
  constructor(private calendarModel: CalendarModel) {}

  async getAllCalendarStamp(userId: string): Promise<CalendarData[]> {
    const stamps = await this.calendarModel.findById(userId);

    if (!stamps) {
      throw new Error('조회된 도장이 없습니다.');
    }

    return stamps;
  }

  async getCalendarStamp(calendarId: string): Promise<CalendarData> {
    const stamp = await this.calendarModel.findByCalendarId(calendarId);

    if (!stamp) {
      throw new Error('해당 도장이 존재하지 않습니다.');
    }
    return stamp;
  }

  async getCalendarStampByDate(
    userId: string,
    date: Date,
  ): Promise<CalendarData[]> {
    const stamp = await this.calendarModel.findByDate(userId, date);

    if (!stamp) {
      throw new Error('해당 도장이 존재하지 않습니다.');
    }
    return stamp;
  }

  async addCalendarStamp(calendarInfo: CalendarInfo): Promise<CalendarData> {
    const createdStamp = await this.calendarModel.create(calendarInfo);
    return createdStamp;
  }

  async setCalendarStamp(
    calendarId: string,
    toUpdate: CalendarToUpdate,
  ): Promise<CalendarData> {
    const stamp = await this.calendarModel.findById(calendarId);
    if (!stamp) {
      throw new Error('도장이 존재하지 않습니다.');
    }
    const updatedStamp = await this.calendarModel.update({
      calendarId,
      update: toUpdate,
    });

    if (!updatedStamp) {
      throw new Error('도장이 수정되지 않았습니다.');
    }

    return updatedStamp;
  }

  async deleteAllCalendarStamp(userId: string): Promise<{ result: string }> {
    const { deletedCount } = await this.calendarModel.delete(userId);
    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      throw new Error('삭제할 도장 데이터가 존재하지 않습니다');
    }

    return { result: 'success' };
  }
}

const calendarService = new CalendarService(calendarModel);
export { calendarService };
