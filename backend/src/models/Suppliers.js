/*
    Campos:
        nombre
        pais
        empresa
*/
import { Schema, model } from "mongoose";

const providerSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
 
    },
    empresa: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Provider", providerSchema);