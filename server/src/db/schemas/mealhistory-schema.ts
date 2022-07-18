import { Schema } from 'mongoose';
import { MealSchema } from './meal-schema';

const MealHistorySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    meals: [MealSchema],
  },
  {
    collection: 'mealshistory',
    timestamps: true,
  },
);

export { MealHistorySchema };
