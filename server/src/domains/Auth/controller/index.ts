import { Context } from "hono";

import authService from "../service";

export const login = async (c: Context) => {
  try {
    const { username, password } = await c.req.json();
    const token = await authService.login(username, password);

    return c.json({ message: "Login realizado com sucesso", token });
  } catch (error: any) {
    return c.json({ error: error.message }, 401);
  }
};

export const logout = async (c: Context) => {
  return c.json({ message: "Logout realizado com sucesso" });
};
