import { AxiosError, AxiosResponse } from "axios";
import { redirect } from "@remix-run/node";

import { AuthApi } from "../index";
import { UserModel } from "./interfaces";

export function login(user: UserModel) {
  return AuthApi.post("/login", user)
    .then((response: AxiosResponse<any>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function logout() {
  return AuthApi.post("/logout")
    .then((response: AxiosResponse<any>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}

export function checkSession() {
  return AuthApi.get("/checkSession")
    .then((response: AxiosResponse<boolean>) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
}
