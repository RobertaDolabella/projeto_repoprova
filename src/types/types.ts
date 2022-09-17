import { Users } from "@prisma/client";

export type userSent = Omit<Users, 'id'>
export type userPartial = Partial<Users>