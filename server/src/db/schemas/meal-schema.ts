import { Schema } from 'mongoose';

const MealSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    date: {
      type: Date,
      required: true,
    },
    meal_category: {
      type: String,
      required: true,
    },
    meal: {
      type: new Schema({
        meal_name: String,
        meal_kacl: Number,
        meal_carb: Number,
        meal_protein: Number,
        meal_fat: Number,
        meal_sugars: Number,
        meal_natruim: Number,
        meal_cholesterol: Number,
        meal_saturatedfatty: Number,
        meal_transfat: Number,
      }),
      required: true,
    },
  },
  {
    collection: 'meals',
    timestamps: true,
  },
);

export { MealSchema };
