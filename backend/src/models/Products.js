/*
    Campos:
      color
      size
      price
      disponiblity
*/

import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    color: {
      type: String,
      require: true,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    disponibility: {
      type: Number,
      require: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Products", productsSchema);
