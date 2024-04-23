import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
  if (req.method === 'POST') {
    // Create a new user
    const { email, name } = req.body;
    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
        },
      });
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: 'User creation failed.' });
    }
  } else if (req.method === 'GET') {
    // Retrieve all users
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
