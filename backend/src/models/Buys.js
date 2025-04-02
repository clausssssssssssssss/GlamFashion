/*
    Campos:
        Id_Carrito_de_Compra
        Metodo_de_pago
        Direccion
        Estado
*/
import { Schema, model } from "mongoose";

const buysSchema = new Schema(
  {
    Id_Carrito_de_Compra: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products", 
        required: true,
      },
    ],
    Metodo_de_pago: {
      type: String,
      required: true,
      enum: ["Efectivo", "Tarjeta", "Transferencia", "Otro"],
      default: "Efectivo",
    },
    Direccion: {
      type: String,
      required: true,
      trim: true,
    },
    Estado: {
      type: String,
      enum: ["Pendiente", "Enviado", "Entregado", "Cancelado"],
      default: "Pendiente",
    },
  },
  {
    timestamps: true, 
  }
);

export default model("Buys", buysSchema);
