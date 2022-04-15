import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (req.method === "POST") {
    const { title, mood, content } = req.body;
    const result = await prisma.journal.create({
      data: {
        title: title,
        mood: parseInt(mood),
        content: content,
        user: {
          connectOrCreate: {
            where: {
              id: session.user.id,
              email: session.user.email,
            },
            create: {
              id: session.user.id,
            },
          },
        },
      },
    });
    res.status(200).json(result);
  }
}
