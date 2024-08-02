import { Context } from "hono";
import vehicleService from "../service";

export const createVehicle = async (c: Context) => {
  const data = await c.req.json();
  const vehicle = await vehicleService.createVehicle(data);
  return c.json(vehicle);
};

export const getVehicles = async (c: Context) => {
  const vehicles = await vehicleService.getVehicles();
  return c.json(vehicles);
};

export const getVehicleById = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const vehicle = await vehicleService.getVehicleById(id);
  if (!vehicle) return c.json({ error: "Vehicle not found" }, 404);
  return c.json(vehicle);
};

export const updateVehicle = async (c: Context) => {
  const id = Number(c.req.param("id"));
  const data = await c.req.json();
  const vehicle = await vehicleService.updateVehicle(id, data);
  return c.json(vehicle);
};

export const deleteVehicle = async (c: Context) => {
  const id = Number(c.req.param("id"));
  await vehicleService.deleteVehicle(id);
  return c.json({ message: "Vehicle deleted" });
};
