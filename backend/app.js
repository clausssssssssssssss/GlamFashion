import express from "express";
import cookieParser from "cookie-parser";
import administratorsRoutes from "./src/routes/administrators.js";
import buysRoutes from "./src/routes/buys.js";
import carShoppingRoutes from "./src/routes/carShopping.js";
import categoriesRoutes from "./src/routes/categories.js";
import customersRoutes from "./src/routes/customers.js";
import loginRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js";
import paymentmethodRoutes from "./src/routes/paymentmethod.js";
import productsRoutes from "./src/routes/products.js";
import suppliersRoutes from "./src/routes/suppliers.js";

const app = express();

//Que acepte datos en json
app.use(express.json());
//Que acepte cookies
app.use(cookieParser());

app.use("/api/administrators", administratorsRoutes);
app.use("/api/buys", buysRoutes);
app.use("/api/carShopping", carShoppingRoutes);
app.use("/api/categories", categoriesRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/paymentmethod", paymentmethodRoutes)
app.use("/api/products", productsRoutes);
app.use("/api/suppliers", suppliersRoutes);

app.use("/api/login", loginRoutes );
app.use("/api/logout", logoutRoutes);

export default app;