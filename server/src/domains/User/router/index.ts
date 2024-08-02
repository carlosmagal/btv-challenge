import { Hono } from "hono";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller";
import { jwt } from "hono/jwt";

const userRouter = new Hono();

userRouter.use(
  "*",
  jwt({
    secret: process.env.SECRET_KEY!,
  })
);

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
