import { Context } from "hono";
import userService from "../service";

export const createUser = async (c: Context) => {
  const data = await c.req.json();
  const user = await userService.createUser(data.username, data.password);

  return c.json({ id: user.id, username: user.username });
};

export const getUsers = async (c: Context) => {
  const users = await userService.getUsers();

  return c.json(users);
};

export const getUserById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const user = await userService.getUserById(id);
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }

  return c.json(user);
};

export const updateUser = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const data = await c.req.json();
  const user = await userService.updateUser(id, data);

  return c.json(user);
};

export const deleteUser = async (c: Context) => {
  const id = Number(c.req.param("id"));
  await userService.deleteUser(id);

  return c.json({ message: "User deleted" });
};
