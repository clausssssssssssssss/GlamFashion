import express from "express";
import supplierscontrollers from "../controllers/suppliersController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(supplierscontrollers.getSuppliers)
  .post(supplierscontrollers.createSuppliers);

router
  .route("/:id")
  .put(supplierscontrollers.updateSuppliers)
  .delete(supplierscontrollers.deleteSuppliers);

export default router;