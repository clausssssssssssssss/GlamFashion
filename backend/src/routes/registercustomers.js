import express from "express";
import registercustomersController from "../controllers/registerCustomersControllers.js";

const router = express.Router();

router.route("/").post(registercustomersController.register);

export default router;