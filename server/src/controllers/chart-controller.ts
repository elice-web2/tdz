import { Request, Response, NextFunction } from 'express';
import { chartService } from '../services';
import { FromToInfo, DayInfo } from '../types/chart.type';

const oneDay = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //날짜 계산...
    const todayStr = String(req.query.date);
    const today: Date = new Date(todayStr);
    const tommorrow: Date = new Date(todayStr);
    tommorrow.setDate(today.getDate() + 1);
    const tommorowStr: string = tommorrow.toISOString().slice(0, 10);
    console.log(todayStr);
    console.log(tommorowStr);
    //2022-07-10
    const fromToInfo: FromToInfo = {
      user_id: req.currentUserId!,
      from: todayStr,
      to: tommorowStr,
    };

    const dateData = await chartService.getOneDayChart(fromToInfo);

    res.status(200).json(dateData);
  } catch (error) {
    next(error);
  }
};

// 일간 차트 - 각각의 데이터를 7일을 보여준다
const daily = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //날짜 계산...
    const date = String(req.query.date);

    const fromToInfo: DayInfo = {
      user_id: req.currentUserId!,
      date,
    };

    const dateData = await chartService.getDailyChart(fromToInfo);

    res.status(200).json(dateData);
  } catch (error) {
    next(error);
  }
};

const weekly = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //날짜를 읽어옴
    const from = String(req.query.from);
    const to = String(req.query.to);

    // from=2022-06-18&to=2022-07-15
    //30일짜리의 데이터 가져오기

    const fromToInfo: FromToInfo = {
      user_id: req.currentUserId!,
      from,
      to,
    };

    const dateData = await chartService.getWeeklyChart(fromToInfo);

    res.status(200).json(dateData);
  } catch (error) {
    next(error);
  }
};

const monthly = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //날짜를 읽어옴
    const from = String(req.query.from);
    const to = String(req.query.to);

    // from=2022-06-18&to=2022-07-15
    //30일짜리의 데이터 가져오기

    const fromToInfo: FromToInfo = {
      user_id: req.currentUserId!,
      from,
      to,
    };

    const dateData = await chartService.getMonthlyChart(fromToInfo);

    res.status(200).json(dateData);
  } catch (error) {
    next(error);
  }
};

export { oneDay, daily, weekly, monthly };
