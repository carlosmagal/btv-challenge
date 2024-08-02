import axios from "axios";

const { create } = axios;

const apiUrl = "http://localhost:3030";

const modules = {
  VehiclesApi: create({
    baseURL: `${apiUrl}/api/vehicles`,
  }),
  UsersApi: create({
    baseURL: `${apiUrl}/api/users`,
  }),
  AuthApi: create({
    baseURL: `${apiUrl}/api/auth`,
  }),
};

export const { AuthApi, UsersApi, VehiclesApi } = modules;
