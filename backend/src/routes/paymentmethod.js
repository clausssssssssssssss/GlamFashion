import express from "express";
import paymentmethodController from "../controllers/paymentMethodController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(paymentmethodController.getPaymentmethod)
  .post(paymentmethodController.createPaymentmethod);

router
  .route("/:id")
  .put(paymentmethodController.updatePaymentmethod)
  .delete(paymentmethodController.deletePaymentmethod);

export default router;