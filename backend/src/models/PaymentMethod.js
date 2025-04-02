/*
    Campos:
      card
*/
import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
  {
    card: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Payment", paymentSchema);
