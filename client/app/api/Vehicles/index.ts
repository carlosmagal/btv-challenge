import { AxiosError, AxiosResponse } from "axios";

import { VehiclesApi } from "../index";
import { VehicleModel } from "./interfaces";

VehiclesApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.pathname = "/login";
    }
    return Promise.reject(error);
  }
);

export function create(data: VehicleModel, token: string) {
  return VehiclesApi.post("", data, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response: AxiosResponse<VehicleModel>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function getAll() {
  return VehiclesApi.get("")
    .then((response: AxiosResponse<Array<VehicleModel>>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function getById(id: number) {
  return VehiclesApi.get(`/${id}`)
    .then((response: AxiosResponse<VehicleModel>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function update(data: VehicleModel) {
  return VehiclesApi.put(`/${data.id}`, data)
    .then((response: AxiosResponse<VehicleModel>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function remove(id: number) {
  return VehiclesApi.delete(`/${id}`)
    .then((response: AxiosResponse<any>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}
