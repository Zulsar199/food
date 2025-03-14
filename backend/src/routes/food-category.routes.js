import { Router } from "express";
import { authorizationMiddleware } from "../middleware/authorization.js";
import { createFoodCategory } from "../controllers/foodCategory/create-food-category.js";

export const foodCategoryRouter = new Router();

foodCategoryRouter.post("/", authorizationMiddleware, createFoodCategory);
