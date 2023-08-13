import type { User } from '@prisma/client'
import prisma from '../client'
import type { IUser } from '~/types/IUser'

export async function getUserByUsername(username: string): Promise<User | null> {
  const result = await prisma.user.findUnique({
    where: {
      username,
    },
  })
  return result
}

export async function createUser(data: IUser) {
  const user = await prisma.user.create({ data })
  return user
}

export async function updateUser(id, data: Partial<User>) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  })
  return user
}
