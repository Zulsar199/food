import { Router } from "express";
import { createFood } from "../controllers/food/create-food.js";
import { getFoodById } from "../controllers/food/get-food.js";
import { authorizationMiddleware } from "../middleware/authorization.js";

export const foodRouter = new Router();

foodRouter.get("/:id", getFoodById);
foodRouter.post("/", authorizationMiddleware, createFood);
