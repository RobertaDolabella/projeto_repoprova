import { string } from "joi";
import { userPartial, userSent } from "../types/types";
import { checkExistingUsers, createUser } from "../repository/userRepostory";
import Cryptr from "cryptr";
import dotenv from 'dotenv';


dotenv.config( {path:'.env'}) ;

export async function loginUser (userData:userSent){
console.log("entrou no loginUser")

const user:any = await checkExistingUsers(userData.email)

thereIsaUser(user)

const encryptedPassword = encryptPassword(userData.password)

 await createUser(userData.email, encryptedPassword)
}

function encryptPassword(password: string) {
    console.log("entrou no password")
    const secret:string = String(process.env.SECRETPASSWORD)
    console.log(secret)

    const cryptrcardPassword = new Cryptr(secret)
    const encryptedcardPassword: string = cryptrcardPassword.encrypt(password)

    return encryptedcardPassword
}
function thereIsaUser(user:userPartial){
console.log(user)
    if(user !==null) throw {message: "This user is not available, please try another email"}
    return
}


const userService ={
    loginUser
}

export default userService;