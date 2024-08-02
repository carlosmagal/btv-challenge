import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import prisma from "../../../../config/prisma";
import { Context } from "hono";
import { getCookie } from "hono/cookie";

const secretKey = process.env.SECRET_KEY!;

class AuthService {
  async login(username: string, password: string) {
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      { expiresIn: "15d" }
    );
    return token;
  }

  async register(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    return user;
  }
}

export default new AuthService();
