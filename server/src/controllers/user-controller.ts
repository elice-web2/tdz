import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { userService, socialLoginService } from '../services';
import { UserInfo, Nutrient, UserData } from '../types/user.type';

//회원 가입을 위한 function
const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨. -> validator 활성시 지우기
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }
    // req (request) 에서 데이터 가져오기

    const userInfo: UserInfo = req.body;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userService.addUser(userInfo);

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const login = async function (req: Request, res: Response, next: NextFunction) {
  try {
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.-> validator 활성시 지우기
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }

    // req (request) 에서 데이터 가져오기
    const email: string = req.body.email;
    const password: string = req.body.password;

    // 위 데이터가 db에 있는지 확인하고,
    // db 있을 시 로그인 성공 및, 토큰 받아오기
    const userToken = await userService.getUserToken({ email, password });

    //만료 시간 24시간 * 3일
    const expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24 * 3);

    res
      .cookie('token', userToken, {
        expires: expiryDate,
        httpOnly: true,
        signed: true,
      })
      .status(200)
      .json(userToken);
  } catch (error) {
    next(error);
  }
};

const logout = async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  //쿠키에 있는 jwt 토큰이 들어 있는 쿠키를 비워줌
  try {
    const cookie: string = req.headers.cookie as string;

    const tokens = cookie.split('; ');

    const accessToken: string = tokens[0].slice(0, 12);

    // 카카오 로그아웃 (accessToken이 존재하는 경우)
    if (accessToken === 'accessToken=') {
      const accessTokenValue: string = tokens[0].slice(12);

      await socialLoginService.kakaoLogoutService(accessTokenValue);
      res.clearCookie('accessToken');
    }

    res.clearCookie('token').json({
      success: true,
      data: '성공적으로 로그아웃 되었습니다.',
    });
  } catch (error) {
    next(error);
  }
};

//전체 유저 목록 조회
const userList = async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // 전체 사용자 목록을 얻음
    const users = await userService.getUsers();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// 사용자 정보 조회
const user = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const userId: string = req.currentUserId!;
    const currentUserInfo = await userService.getUserData(userId);

    res.status(200).json(currentUserInfo);
  } catch (error) {
    next(error);
  }
};

// 사용자 정보 수정 - 이메일, 비밀번호 수정
const userUpdate = async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // content-type 을 application/json 로 프론트에서
    // 설정 안 하고 요청하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }

    // params로부터 id를 가져옴
    const userId: string = req.currentUserId!;

    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const email: string = req.body.email;
    const password: string = req.body.password;

    // body data로부터, 확인용으로 사용할 현재 비밀번호를 추출함.
    const currentPassword = req.body.currentPassword;

    await userService.checkEmail(email);

    // currentPassword 없을 시, 진행 불가
    if (!currentPassword) {
      throw new Error('정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
    }

    const userInfoRequired = { userId, currentPassword };

    // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
    // 보내주었다면, 업데이트용 객체에 삽입함.
    const toUpdate = {
      ...(email && { email }),
      ...(password && { password }),
    };

    // 사용자 정보를 업데이트함.
    const updatedUserInfo: UserData = await userService.setUser(
      userInfoRequired,
      toUpdate,
    );

    res.status(200).json(updatedUserInfo);
  } catch (error) {
    next(error);
  }
};

// 사용자 정보 수정 - 몸무게
const goalUpdate = async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // content-type 을 application/json 로 프론트에서
    // 설정 안 하고 요청하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }

    // params로부터 id를 가져옴
    const userId: string = req.currentUserId!;

    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const gender: string = req.body.gender;
    const age: number = req.body.age;
    const height: number = req.body.height;
    const current_weight: number = req.body.current_weight;
    const goal_weight: number = req.body.goal_weight;
    const bmi: number = req.body.bmi;
    const mode: string = req.body.mode;
    const activity: string = req.body.activity;
    const nutrient: Nutrient = req.body.nutrient;
    const profile_image: string = req.body.profile_image;
    const nickname: string = req.body.nickname;
    const comment: string = req.body.comment;
    const is_login_first: boolean = req.body.is_login_first;

    // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
    // 보내주었다면, 업데이트용 객체에 삽입함.
    const toUpdate = {
      ...(gender && { gender }),
      ...(age && { age }),
      ...(height && { height }),
      ...(current_weight && { current_weight }),
      ...(goal_weight && { goal_weight }),
      ...(bmi && { bmi }),
      ...(mode && { mode }),
      ...(activity && { activity }),
      ...(nutrient && { nutrient }),
      ...(profile_image && { profile_image }),
      ...(nickname && { nickname }),
      ...(comment && { comment }),
      ...(is_login_first && { is_login_first }),
    };

    // 사용자 정보를 업데이트함.
    const updatedUserInfo: UserData = await userService.setGoal(
      userId,
      toUpdate,
    );

    res.status(200).json(updatedUserInfo);
  } catch (error) {
    next(error);
  }
};

// 사용자 정보 삭제
const deleteUser = async function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // params로부터 id를 가져옴
    const userId: string = req.currentUserId!;

    const deleteResult = await userService.deleteUserData(userId);

    res.status(200).json(deleteResult);
    const deletedResult = await userService.deleteUserData(userId);

    if (!deletedResult) {
      throw new Error('삭제가 실패하였습니다.');
    }
    res.clearCookie('token').status(200).json({
      success: true,
      data: '성공적으로 탈퇴되었습니다.',
    });
  } catch (error) {
    next(error);
  }
};

// // 구글 OAuth 용
// userRouter.post('/register/google', async (req, res, next) => {
//   try {
//     const googleToken: string = req.body.googleToken;

//     const newUser = await userService.addUserWithGoogle(googleToken);

//     res.status(201).json(newUser);
//   } catch (error) {
//     next(error);
//   }
// });

// // 카카오 OAuth 용
// userRouter.post('/register/kakao', async (req, res, next) => {
//   try {
//     const email: string = req.body.email;
//     const nickname: string = req.body.nickname;

//     const newUser = await userService.addUserWithKakao(email, nickname);

//     res.status(201).json(newUser);
//   } catch (error) {
//     next(error);
//   }
// });

// userRouter.post(
//   '/user/password/check',
//   loginRequired,
//   async function (req, res, next) {
//     try {
//       // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
//       if (is.emptyObject(req.body)) {
//         throw new Error(
//           'headers의 Content-Type을 application/json으로 설정해주세요',
//         );
//       }

//       // req (request) 에서 데이터 가져오기
//       const userId = req.currentUserId;
//       const password: string = req.body.password;

//       // 비밀번호가 알맞는지 여부를 체크함
//       const checkResult = await userService.checkUserPassword(userId, password);

//       res.status(200).json(checkResult);
//     } catch (error) {
//       next(error);
//     }
//   },
// );

// userRouter.post('/login/google', async function (req, res, next) {
//   try {
//     const googleToken: string = req.body.googleToken;

//     const userToken = await userService.getUserTokenWithGoogle(googleToken);

//     res.status(200).json(userToken);
//   } catch (error) {
//     next(error);
//   }
// });

// userRouter.post('/login/kakao', async function (req, res, next) {
//   try {
//     const email: string = req.body.email;

//     const userToken = await userService.getUserTokenWithKakao(email);

//     res.status(200).json(userToken);
//   } catch (error) {
//     next(error);
//   }
// });

// // 사용자 권한 수정 (관리자만 가능)
// userRouter.patch(
//   '/users/role/:userId',
//   adminOnly,
//   async function (req, res, next) {
//     try {
//       // content-type 을 application/json 로 프론트에서
//       // 설정 안 하고 요청하면, body가 비어 있게 됨.
//       if (is.emptyObject(req.body)) {
//         throw new Error(
//           'headers의 Content-Type을 application/json으로 설정해주세요',
//         );
//       }

//       // params로부터 id를 가져옴
//       const userId = req.params.userId;

//       // body data 로부터 업데이트할 사용자 권한 정보를 추출함.
//       const role: Role = req.body.role;

//       // 사용자 정보를 업데이트함.
//       const updatedUserInfo = await userService.setRole(userId, role);

//       res.status(200).json(updatedUserInfo);
//     } catch (error) {
//       next(error);
//     }
//   },
// );

// // 주문 시 사용한 주소 및 연락처를 유저 데이터로 저장함.
// userRouter.post(
//   '/user/deliveryinfo',
//   loginRequired,
//   async function (req, res, next) {
//     try {
//       // content-type 을 application/json 로 프론트에서
//       // 설정 안 하고 요청하면, body가 비어 있게 됨.
//       if (is.emptyObject(req.body)) {
//         throw new Error(
//           'headers의 Content-Type을 application/json으로 설정해주세요',
//         );
//       }

//       // 토큰으로부터 추출됐던 id를 가져옴
//       const userId = req.currentUserId;

//       // body data 로부터 업데이트할 사용자 정보를 추출함.
//       const address: UserAddress = req.body.address;
//       const phoneNumber: string = req.body.phoneNumber;

//       // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
//       // 보내주었다면, 업데이트용 객체에 삽입함.
//       const deliveryinfo = {
//         ...(address && { address }),
//         ...(phoneNumber && { phoneNumber }),
//       };

//       // 사용자 정보를 업데이트함.
//       const updatedUserInfo = await userService.saveDeliveryInfo(
//         userId,
//         deliveryinfo,
//       );

//       res.status(200).json(updatedUserInfo);
//     } catch (error) {
//       next(error);
//     }
//   },
// );

// // 관리자 토큰을 가졌는지 여부를 확인함.
// userRouter.get('/admin/check', adminOnly, async function (req, res, next) {
//   try {
//     // 미들웨어 adminOnly 를 통과했다는 것은, 관리자 토큰을 가진 것을 의미함.
//     res.status(200).json({ result: 'success' });
//   } catch (error) {
//     next(error);
//   }
// });

export {
  signUp,
  login,
  logout,
  userList,
  user,
  userUpdate,
  goalUpdate,
  deleteUser,
  // kakaoLogin,
};
