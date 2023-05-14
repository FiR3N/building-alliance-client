import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/Entity/IUser";
import {
  login,
  logout,
  refresh,
  updateUser,
} from "../actionCreators/userActions";

interface UserState {
  user: IUser;
  isAuth: boolean;
  loading: boolean;
  error: boolean | string;
}

const initialState: UserState = {
  user: {} as IUser,
  isAuth: false,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(refresh.pending, (state) => {
        state.loading = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {} as IUser;
        state.isAuth = false;
        state.loading = false;
        state.error = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("from state >>>");
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
