import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes.js";
import { connectToDatabase } from "./database/index.js";
import { foodRouter } from "./routes/food.routes.js";
import { orderRouter } from "./routes/order.routes.js";
import { foodCategoryRouter } from "./routes/food-category.routes.js";

const app = express();
app.use(express.json());

dotenv.config();
const port = 8000;

connectToDatabase();

app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
