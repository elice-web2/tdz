import { Router } from 'express';
import { calendarController } from '../controllers';
import { errorHandler, loginRequired } from '../middlewares';

const calendarRouter = Router();

// 유저별 도장 조회
calendarRouter.get('/', loginRequired, calendarController.getAllStamps);

// 도장 상세 조회
calendarRouter.get('/:date', loginRequired, calendarController.getStamp);

// 도장 생성
calendarRouter.post('/', loginRequired, calendarController.createStamp);

// 도장 수정
calendarRouter.patch(
  '/:calendarId',
  loginRequired,
  calendarController.updateStamp,
);

// 유저별 도장 전체 삭제 (유저 탈퇴 시)
calendarRouter.delete('/', loginRequired, calendarController.deleteStamp);

export { calendarRouter };
