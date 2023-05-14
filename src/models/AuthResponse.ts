import { IUser } from "./Entity/IUser";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
