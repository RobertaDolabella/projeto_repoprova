import { Router } from "express";
import loginSchema from "../schemas/loginSchema";
import { validateSchemaMiddleware } from '../middleware/validateSchema';
import { login } from "../controller/userController";

const userRouter = Router()

userRouter.post('/signin', validateSchemaMiddleware(loginSchema), login)

export default userRouter;