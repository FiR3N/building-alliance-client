export interface IUser {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  image: string;
  roleId: number;
  login: string;
  createdAt?: string;
  updatedAt?: string;
}
