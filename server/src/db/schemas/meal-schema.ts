import { Schema } from 'mongoose';

const MealSchema = new Schema(
  {
    meal_code: {
      type: String,
      required: true,
    },
    meal_name: {
      type: String,
      required: true,
    },
    meal_kcal: {
      type: Number,
      required: true,
    },
    meal_carb: {
      type: Number,
      required: true,
    },
    meal_protein: {
      type: Number,
      required: true,
    },
    meal_fat: {
      type: Number,
      required: true,
    },
    meal_sugars: {
      type: Number,
      required: true,
    },
    meal_natruim: {
      type: Number,
      required: true,
    },
    meal_cholesterol: {
      type: Number,
      required: true,
    },
    meal_saturatedfatty: {
      type: Number,
      required: true,
    },
    meal_transfat: {
      type: Number,
      required: true,
    },
    updated_date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: 'meals',
    timestamps: true,
  },
);

export { MealSchema };
