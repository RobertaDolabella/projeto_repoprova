import { string } from "joi";
import { userSent } from "../types/types";
import { checkExistingUsers, createUser } from "../repository/userRepostory";
import Cryptr from "cryptr";
import dotenv from 'dotenv';


dotenv.config( {path:'.env'}) ;

export async function loginUser (userData:userSent){

const user = await checkExistingUsers(userData.email)

if(user !==undefined) throw {message: "This user is not available, please try another email"}

const encryptedPassword = encryptPassword(userData.password)

await createUser(userData.email, encryptedPassword)
}

export function encryptPassword(password: string) {

    const secret:string = String(process.env.SECRETPASSWORD)
    console.log(secret)

    const cryptrcardPassword = new Cryptr(secret)
    const encryptedcardPassword: string = cryptrcardPassword.encrypt(password)

    return encryptedcardPassword
}

const userService ={
    loginUser
}

export default userService;