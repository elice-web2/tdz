import { Schema } from 'mongoose';

const MealSchema = new Schema(
  {
    code: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    kcal: {
      type: Number,
      required: true,
    },
    carb: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
    sugars: {
      type: Number,
      required: true,
    },
    natrium: {
      type: Number,
      required: true,
    },
    cholesterol: {
      type: Number,
      required: true,
    },
    saturatedfatty: {
      type: Number,
      required: true,
    },
    transfat: {
      type: Number,
      required: true,
    },
    servingSize: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
      required: true,
    },
    totalGram: {
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
