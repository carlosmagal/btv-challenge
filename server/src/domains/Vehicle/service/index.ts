import { Vehicle } from "@prisma/client";

import prisma from "../../../../config/prisma";

class VehicleService {
  async createVehicle(data: Vehicle) {
    return await prisma.vehicle.create({ data });
  }

  async getVehicles() {
    return await prisma.vehicle.findMany();
  }

  async getVehicleById(id: number) {
    return await prisma.vehicle.findUnique({ where: { id } });
  }

  async updateVehicle(id: number, data: Vehicle) {
    return await prisma.vehicle.update({
      where: { id },
      data,
    });
  }

  async deleteVehicle(id: number) {
    return await prisma.vehicle.delete({ where: { id } });
  }
}

export default new VehicleService();
