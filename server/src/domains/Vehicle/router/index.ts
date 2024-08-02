import { Hono } from "hono";
import { jwt } from "hono/jwt";
import { bearerAuth } from "hono/bearer-auth";

import {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} from "../controller";

const vehicleRouter = new Hono();

vehicleRouter.use(
  "*",
  // jwt({
  //   secret: process.env.SECRET_KEY!,
  // })
);

vehicleRouter.post("/", createVehicle);
vehicleRouter.get("/", getVehicles);
vehicleRouter.get("/:id", getVehicleById);
vehicleRouter.put("/:id", updateVehicle);
vehicleRouter.delete("/:id", deleteVehicle);

export default vehicleRouter;
