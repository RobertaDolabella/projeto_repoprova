import { Users } from "@prisma/client";
import { Response ,Request } from "express";
import { userSent } from "../types/types";
import { loginUser } from "../services/userService";


export function login(req:Request, res:Response){
console.log("entrou aqui no login")
    const userData:userSent = req.body

    loginUser(userData)
    
res.sendStatus(200)
}



const user={
    login
}

export default user;