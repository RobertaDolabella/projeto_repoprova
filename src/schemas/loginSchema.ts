import { Users } from "@prisma/client";
import Joi from "joi";

const loginSchema = Joi.object<Users>({
    email: Joi.string().required(),
    password: Joi.string().min(10).required()
})

export default loginSchema;