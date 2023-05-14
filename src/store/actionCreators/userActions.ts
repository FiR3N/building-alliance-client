import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../api/UserService";
import { $api } from "../../api";
import { IUser } from "../../models/Entity/IUser";

export const login = createAsyncThunk(
  "user/login",
  async (credentials: { login: string; password: string }, thunkAPI) => {
    try {
      const response = await UserService.login(
        credentials.login,
        credentials.password
      );
      const user = await UserService.getUserById(response.data.user.id);
      localStorage.setItem("token", response.data.accessToken);
      return user.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data?.message);
    }
  }
);

export const refresh = createAsyncThunk("user/refresh", async (_, thunkAPI) => {
  try {
    const response = await UserService.refresh();
    const user = await UserService.getUserById(response.data.user.id);
    localStorage.setItem("token", response.data.accessToken);
    return user.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response?.data?.message);
  }
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await UserService.logout();
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response?.data?.message);
  }
});

export const updateUser = createAsyncThunk(
  "user/update",
  async (
    userData: {
      id: number;
      name: string;
      surname: string;
      patronymic: string;
      image: File;
    },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("surname", userData.surname);
      formData.append("patronymic", userData.patronymic);
      formData.append("image", userData.image);

      const { data } = await UserService.updateUserByUser(
        userData.id,
        formData
      );

      return data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response?.data?.message);
    }
  }
);
