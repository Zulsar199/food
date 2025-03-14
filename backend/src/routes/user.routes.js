import { Router } from "express";
import { getAllUsers } from "../controllers/users/get-all-users.js";
import { createUser } from "../controllers/users/create-user.js";
import { validateEmailMiddleware } from "../middleware/validateEmail.js";
import { login } from "../controllers/users/login.js";
import { authorizationMiddleware } from "../middleware/authorization.js";
import { updateUser } from "../controllers/users/update-user.js";

export const userRouter = new Router();

userRouter.get("/", authorizationMiddleware, getAllUsers);
userRouter.put("/:id", authorizationMiddleware, updateUser);
userRouter.post("/signup", validateEmailMiddleware, createUser);
userRouter.post("/login", validateEmailMiddleware, login);
