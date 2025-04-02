/*
    Campos:
        name
        email
        phone
        password
*/

import { Schema, model } from "mongoose";

const administratorsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true, // Crea createdAt y updatedAt automáticamente
  }
);

export default model("Administrators", administratorsSchema);