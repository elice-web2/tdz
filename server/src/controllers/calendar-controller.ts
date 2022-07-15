import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { calendarService } from '../services';
import { CalendarData } from '../customType/calendar.type';

class CalendarController {
  async getAllStamps(req: Request, res: Response, next: NextFunction) {
    try {
      const userId: string = req.currentUserId!;
      const stamps = await calendarService.getAllCalendarStamp(userId);
      res.status(200).json(stamps);
    } catch (error) {
      next(error);
    }
  }

  async getStamp(req: Request, res: Response, next: NextFunction) {
    try {
      const calendarId: string = req.params.calendarId;
      const stamp = await calendarService.getCalendarStamp(calendarId);
      res.status(200).json(stamp);
    } catch (error) {
      next(error);
    }
  }

  async createStamp(req: Request, res: Response, next: NextFunction) {
    try {
      // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
      if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
        );
      }

      // req (request) 에서 데이터 가져오기
      const userId = req.currentUserId!;
      const date: Date = req.body.date;
      const currentKcal: Number = Number(req.body.currentKcal) | 0;
      const goalKcal: Number = Number(req.body.goalKcal) | 0;
      const mode: string = req.body.mode;
      const isSuccess: boolean = req.body.isSuccess;
      const todayWeight: Number = req.body.todayWeight;
      const carbSum: Number = req.body.carbSum | 0;
      const proteinSum: Number = req.body.proteinSum | 0;
      const fatSum: Number = req.body.fatSum | 0;
      const sugarsSum: Number = req.body.sugarsSum | 0;
      const natriumSum: Number = req.body.natriumSum | 0;
      const cholesterolSum: Number = req.body.cholesterolSum | 0;
      const saturatedfattySum: Number = req.body.saturatedfattySum | 0;
      const transfatSum: Number = req.body.transfatSum | 0;

      const stamp = await calendarService.getCalendarStampByDate(userId, date);

      if (stamp.length === 0) {
        // 도장 생성
        const newStamp = await calendarService.addCalendarStamp({
          userId,
          date,
          currentKcal,
          goalKcal,
          mode,
          isSuccess,
          todayWeight,
          carbSum,
          proteinSum,
          fatSum,
          sugarsSum,
          natriumSum,
          cholesterolSum,
          saturatedfattySum,
          transfatSum,
        });

        res.status(201).json(newStamp);
      } else {
        // 도장 수정
        const calendarId: string = stamp[0]._id;
        const toUpdate = {
          ...(currentKcal && { currentKcal }),
          ...(goalKcal && { goalKcal }),
          ...(mode && { mode }),
          ...(isSuccess && { isSuccess }),
          ...(todayWeight && { todayWeight }),
          ...(carbSum && { carbSum }),
          ...(proteinSum && { proteinSum }),
          ...(fatSum && { fatSum }),
          ...(sugarsSum && { sugarsSum }),
          ...(natriumSum && { natriumSum }),
          ...(cholesterolSum && { cholesterolSum }),
          ...(saturatedfattySum && { saturatedfattySum }),
          ...(transfatSum && { transfatSum }),
        };

        const updatedStamp: CalendarData =
          await calendarService.setCalendarStamp(calendarId, toUpdate);

        res.status(200).json(updatedStamp);
      }
    } catch (error) {
      next(error);
    }
  }

  async updateStamp(req: Request, res: Response, next: NextFunction) {
    try {
      // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
      if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
        );
      }

      // req (request) 에서 데이터 가져오기
      const calendarId: string = req.params.calendarId;
      const currentKcal: Number = Number(req.body.currentKcal) | 0;
      const goalKcal: Number = Number(req.body.goalKcal) | 0;
      const mode: string = req.body.mode;
      const isSuccess: boolean = req.body.isSuccess;
      const todayWeight: Number = req.body.todayWeight;
      const carbSum: Number = req.body.carbSum | 0;
      const proteinSum: Number = req.body.proteinSum | 0;
      const fatSum: Number = req.body.fatSum | 0;
      const sugarsSum: Number = req.body.sugarsSum | 0;
      const natriumSum: Number = req.body.natriumSum | 0;
      const cholesterolSum: Number = req.body.cholesterolSum | 0;
      const saturatedfattySum: Number = req.body.saturatedfattySum | 0;
      const transfatSum: Number = req.body.transfatSum | 0;

      const toUpdate = {
        ...(currentKcal && { currentKcal }),
        ...(goalKcal && { goalKcal }),
        ...(mode && { mode }),
        ...(isSuccess && { isSuccess }),
        ...(todayWeight && { todayWeight }),
        ...(carbSum && { carbSum }),
        ...(proteinSum && { proteinSum }),
        ...(fatSum && { fatSum }),
        ...(sugarsSum && { sugarsSum }),
        ...(natriumSum && { natriumSum }),
        ...(cholesterolSum && { cholesterolSum }),
        ...(saturatedfattySum && { saturatedfattySum }),
        ...(transfatSum && { transfatSum }),
      };

      const updatedStamp: CalendarData = await calendarService.setCalendarStamp(
        calendarId,
        toUpdate,
      );

      res.status(200).json(updatedStamp);
    } catch (error) {
      next(error);
    }
  }

  async deleteStamp(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.currentUserId!;
      const deleteResult = await calendarService.deleteAllCalendarStamp(userId);
      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  }
}

const calendarController = new CalendarController();
export { calendarController };
