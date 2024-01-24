import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
export default async function handler(
  request: NextApiRequest,
  res: NextApiResponse,
) {
  if (request.method !== 'POST') {
    return res.status(405).end()
  }
  const { name, username } = request.body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'Username alredy exists',
    })
  }
  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({ res }, '@webcall:userID', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
  return res.status(201).json(user)
}
