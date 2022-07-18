import { Schema } from 'mongoose';

const CalendarSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isSuccess: {
    type: Schema.Types.Boolean,
    default: false,
    required: true,
  },
  currentKcal: {
    type: Number,
    required: true,
  },
  goalKcal: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  todayWeight: {
    type: Number,
    required: true,
  },
  carbSum: {
    type: Number,
    required: true,
  },
  proteinSum: {
    type: Number,
    required: true,
  },
  fatSum: {
    type: Number,
    required: true,
  },
  sugarsSum: {
    type: Number,
    required: true,
  },
  natriumSum: {
    type: Number,
    required: true,
  },
  cholesterolSum: {
    type: Number,
    required: true,
  },
  saturatedfattySum: {
    type: Number,
    required: true,
  },
  transfatSum: {
    type: Number,
    required: true,
  },
});

export { CalendarSchema };
