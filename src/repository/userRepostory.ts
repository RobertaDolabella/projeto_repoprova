import { prismadata } from "../database";
import { userPartial } from "../types/types";

export async function checkExistingUsers(email:string){

const user = await prismadata.users.findFirst(({where:{email}}))

return user
}

const userRepository = {
    checkExistingUsers
}

export async function createUser(email:string, password: string) {
    
    await prismadata.users.create({data:{
        email,
        password
    }})
    return 
}

export default userRepository;

