import { AxiosError, AxiosResponse } from "axios";
import { redirect } from "@remix-run/node";

import { UsersApi } from "../index";
import { UserModel } from "../Auth/interfaces";

UsersApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.pathname = "/login";
    }
    return Promise.reject(error);
  }
);

export function create(user: UserModel) {
  return UsersApi.post("", user)
    .then((response: AxiosResponse<UserModel>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function getAll(params?: any) {
  return UsersApi.get("", { params })
    .then((response: AxiosResponse<Array<UserModel>>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function getById(id: number) {
  return UsersApi.get(`/${id}`)
    .then((response: AxiosResponse<UserModel>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function update(data: UserModel) {
  return UsersApi.put(`/${data.id}`, data)
    .then((response: AxiosResponse<UserModel>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function remove(id: number) {
  return UsersApi.delete(`/${id}`)
    .then((response: AxiosResponse<any>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}
