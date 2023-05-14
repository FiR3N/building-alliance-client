import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { $api } from ".";
import { IUser } from "../models/Entity/IUser";
import { IRole } from "../models/Entity/IRole";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { getAccessToken } from "../utils/GetAccessToken";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),

  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], {}>({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: (result) => ["User"],
    }),
    postUser: build.mutation<IUser, { formData: FormData }>({
      query: ({ formData }) => ({
        url: `/users`,
        method: "post",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    putUser: build.mutation<IUser, { id: Number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/users/${id}`,
        method: "put",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation<IUser, { id: Number }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export class UserService {
  static async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/users/login", { login, password });
  }

  static async getUserById(userId: number) {
    return $api.get<IUser>(`/users/${userId}`);
  }
  static async getRoleById(roleId: number) {
    return $api.get<IRole>(`/roles/${roleId}`);
  }
  // // static async reg(
  // //   email: string,
  // //   password: string,
  // //   repeatePassword: string,
  // //   name: string,
  // //   surname: string,
  // //   phone: string
  // // ): Promise<AxiosResponse<AuthResponse>> {
  // //   return $api.post<AuthResponse>("/users/reg", {
  // //     email,
  // //     password,
  // //     repeatePassword,
  // //     name,
  // //     surname,
  // //     phone,
  // //   });
  // // }
  static async refresh(): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>(`/users/refresh`, { withCredentials: true });
  }
  // // static async updateUserById(
  // //   id: number,
  // //   name: string,
  // //   surname: string,
  // //   phone: string
  // // ) {
  // //   await $api.post(`/users/${id}`, { name, surname, phone });
  // // }
  static async updateUserByUser(id: number, formData: FormData) {
    return $api.put<IUser>(`/users/by-user/${id}`, formData);
  }
  static async logout() {
    await $api.post(`/users/logout`);
    localStorage.setItem("token", "");
  }
}
