import { Hono } from "hono";
import { cors } from "hono/cors";

import vehicleRouter from "./domains/Vehicle/router";
import userRouter from "./domains/User/router";
import authRouter from "./domains/Auth/router";

const app = new Hono();

app.use("*", cors());

app.route("/api/vehicles", vehicleRouter);
app.route("/api/users", userRouter);
app.route("/api/auth", authRouter);

export default app;
