import { User } from "@prisma/client";
import { hash } from "bcrypt";

import prisma from "../../../../config/prisma";

class UserService {
  async encryptPassword(password: string) {
    return await hash(password, 10);
  }

  async createUser(username: string, password: string) {
    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    return user;
  }

  async getUsers() {
    return await prisma.user.findMany();
  }

  async getUserById(id: number) {
    return await prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: number, data: User) {
    const { username, password } = data;
    const hashedPassword = await this.encryptPassword(password);

    return await prisma.user.update({
      where: { id },
      data: {
        username,
        password: hashedPassword,
      },
    });
  }

  async deleteUser(id: number) {
    return await prisma.user.delete({ where: { id } });
  }
}

export default new UserService();
