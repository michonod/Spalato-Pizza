import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function Login(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }
  const { username, password } = req.body;
  const KEY = "fsdfsafaewageawrsfgasevafesa4e42s";
  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "admin",
      },
      KEY
    ),
  });
}
