import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    is_login_first: {
      type: String,
      default: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: 'social',
    },
    login_path: {
      type: String,
      default: 'tdz',
    },
    role: {
      type: String,
      default: 'basic-user',
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    height: {
      type: Number,
    },
    current_weight: {
      type: Number,
    },
    goal_weight: {
      type: Number,
    },
    bmi: {
      type: Number,
    },
    mode: {
      type: String,
    },
    activity: {
      type: String,
    },
    nutrient: {
      type: new Schema(
        {
          kcal: Number,
          carb: Number,
          protein: Number,
          fat: Number,
        },
        {
          _id: false,
        },
      ),
    },
    profile_image: {
      type: String,
      default: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png',
    },
    nickname: {
      type: String,
    },
    comment: {
      type: String,
      default: '각오를 적어 주세요!',
    },
  },
  {
    collection: 'users',
    timestamps: true,
  },
);

export { UserSchema };
