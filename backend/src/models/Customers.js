/*
    Campos:
        name
        lastname
        birthday
        email
        adress
        phone
        password
*/

import { Schema, model } from "mongoose";

const customersSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    lastName: {
      type: String,
    },

    birthday: {
      type: Date,
      require: true,
      min: 0,
    },

    email: {
      type: String,
    },

    adress: {
        type: String,
      },

    password: {
      type: Number,
      require: true,
    },

    telephone: {
      type: Number,
      require: true,
    },

    isVerified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Customers", customersSchema);

