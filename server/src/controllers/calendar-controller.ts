import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { calendarService } from '../services';
import { CalendarData } from '../types/calendar.type';

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
      const userId = req.currentUserId as string;
      const date: string = req.params.date;
      const stamp = await calendarService.getCalendarStampByDate(
        userId,
        new Date(date),
      );
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
      const currentKcal: number = req.body.currentKcal;
      const goalKcal: number = req.body.goalKcal;
      const mode: string = req.body.mode;
      const isSuccess: boolean = req.body.isSuccess;
      const todayWeight: number = req.body.todayWeight || 0;
      const carbSum: number = req.body.carbSum;
      const proteinSum: number = req.body.proteinSum;
      const fatSum: number = req.body.fatSum;
      const sugarsSum: number = req.body.sugarsSum;
      const natriumSum: number = req.body.natriumSum;
      const cholesterolSum: number = req.body.cholesterolSum;
      const saturatedfattySum: number = req.body.saturatedfattySum;
      const transfatSum: number = req.body.transfatSum;

      const stamp = await calendarService.getCalendarStampByDate(userId, date);

      if (stamp.length === 0) {
        // 도장 생성
        const newStamp = await calendarService.addCalendarStamp({
          userId,
          date,
          currentKcal: currentKcal || 0,
          goalKcal,
          mode,
          isSuccess: isSuccess || false,
          todayWeight,
          carbSum: carbSum || 0,
          proteinSum: proteinSum || 0,
          fatSum: fatSum || 0,
          sugarsSum: sugarsSum || 0,
          natriumSum: natriumSum || 0,
          cholesterolSum: cholesterolSum || 0,
          saturatedfattySum: saturatedfattySum || 0,
          transfatSum: transfatSum || 0,
        });

        res.status(201).json(newStamp);
      } else {
        // 도장 수정
        const calendarId: string = stamp[0]._id;
        const toUpdate = {
          ...((currentKcal || currentKcal === 0) && { currentKcal }),
          ...(goalKcal && { goalKcal }),
          ...(mode && { mode }),
          ...((isSuccess || isSuccess === false) && { isSuccess }),
          ...(todayWeight && { todayWeight }),
          ...((carbSum || carbSum === 0) && { carbSum }),
          ...((proteinSum || proteinSum === 0) && { proteinSum }),
          ...((fatSum || fatSum === 0) && { fatSum }),
          ...((sugarsSum || sugarsSum === 0) && { sugarsSum }),
          ...((natriumSum || natriumSum === 0) && { natriumSum }),
          ...((cholesterolSum || cholesterolSum === 0) && { cholesterolSum }),
          ...((saturatedfattySum || saturatedfattySum === 0) && {
            saturatedfattySum,
          }),
          ...((transfatSum || transfatSum === 0) && { transfatSum }),
        };
        console.log(toUpdate);

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
      const currentKcal: number = req.body.currentKcal || 0;
      const goalKcal: number = req.body.goalKcal || 0;
      const mode: string = req.body.mode;
      const isSuccess: boolean = req.body.isSuccess || false;
      const todayWeight: number = req.body.todayWeight;
      const carbSum: number = req.body.carbSum || 0;
      const proteinSum: number = req.body.proteinSum || 0;
      const fatSum: number = req.body.fatSum || 0;
      const sugarsSum: number = req.body.sugarsSum || 0;
      const natriumSum: number = req.body.natriumSum || 0;
      const cholesterolSum: number = req.body.cholesterolSum || 0;
      const saturatedfattySum: number = req.body.saturatedfattySum || 0;
      const transfatSum: number = req.body.transfatSum || 0;

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
