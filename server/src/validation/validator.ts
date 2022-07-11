import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { UserInfo, Nutrient } from '../db';
import { Schema } from 'mongoose';

const userValidator = {
  userSignup: async (req: Request, res: Response, next: NextFunction) => {
    console.log('req :', req.body);
    const userInfo: UserInfo = req.body;
    console.log(userInfo.login_path);
    // console.log('userinfo: ', userInfo);
    const schema = Joi.object()
      .keys({
        email: Joi.string().email().required(),
        password: Joi.string()
          .allow('', null)
          .empty(['', null])
          .default('social'),
        gender: Joi.string().required(),
        age: Joi.number().min(1).max(100).required(),
        height: Joi.number().required(),
        current_weight: Joi.number().required(),
        goal_weight: Joi.number().required(),
        bmi: Joi.number().required(),
        mode: Joi.string().required(),
        activity: Joi.string().required(),
        nutrient: Joi.object({
          kcal: Joi.number().required(),
          carb: Joi.number().required(),
          protein: Joi.number().required(),
          fat: Joi.number().required(),
        }),
        login_path: Joi.string().optional().empty('').default('tdz'),
        // .allow(undefined)
        // .allow('')
        // .empty('')
        //,
        role: Joi.string()
          .optional()
          .allow(null)
          .allow('')
          .empty('')
          .default('basic-user'),
        nickname: Joi.string()
          .optional()
          .allow(null)
          .allow('')
          .empty('')
          .default('nickname'),
        profile_image: Joi.string()
          .optional()
          .allow(null)
          .allow('')
          .empty('')
          .default(
            'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
          ),
        comment: Joi.string()
          .optional()
          .allow(null)
          .allow('')
          .empty('')
          .default('각오를 적어 주세요!'),
      })
      .xor('login_path', 'password', 'role', 'profile_image', 'comment');

    try {
      // 검사시작
      await schema.validateAsync(userInfo);
    } catch (e) {
      // 유효성 검사 에러
      return res.status(400).json({ code: 400, message: e.message });
    }
    next();
  },
  userLogin: async (req: Request, res: Response, next: NextFunction) => {
    console.log('req :', req.query);
    const body = req.query;
    const schema = Joi.object().keys({
      name: Joi.string().min(1).max(20).required(),
      password: Joi.string().min(1).max(20).required(),
      email: Joi.string().email().required(),
    });

    try {
      // 검사시작
      await schema.validateAsync(body);
    } catch (e) {
      // 유효성 검사 에러
      return res.status(400).json({ code: 400, message: e.message });
    }
    next();
  },
};

export { userValidator };
