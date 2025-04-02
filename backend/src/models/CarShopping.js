/*
    Campos:
       Products
       state
       total
*/
import { Schema, model } from "mongoose";

const CarShoppingSchema = new Schema(
  {
    Products: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      enum: ["Activo", "Pendiente", "Cancelado", "Completado"],
      default: "Activo",
    },
    total: {
      type: Number,
      required: true,
      min: [0, "El total no puede ser negativo"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("CarShopping", CarShoppingSchema);
