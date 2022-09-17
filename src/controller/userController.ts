import { Users } from "@prisma/client";
import { Response ,Request } from "express";
import { userSent } from "../types/types";
import { loginUser } from "../services/userService";


export function login(res:Response, req:Request){

    const userData:userSent = req.body

    loginUser(userData)

}



const user={
    login
}

export default user;