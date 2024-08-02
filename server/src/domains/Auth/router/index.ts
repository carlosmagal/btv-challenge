import { Hono } from "hono";

import { login, logout } from "../controller";

const authRouter = new Hono();

authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
