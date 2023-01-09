import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function Registration(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const data = req.body;
  const { address, email, username, password, sex, birth } = JSON.parse(
    req.body
  );
  await prisma.users.create({
    data: {
      address,
      admin: false,
      email,
      birth_date: birth,
      password,
      sex,
      username,
      logged_in: false
    },
  });
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }
}
