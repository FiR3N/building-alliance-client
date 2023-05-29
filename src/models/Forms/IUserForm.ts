export default interface IUserForm {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  role: string;
  password: string;
  login: string;
  selectedRole: number;
  image: Blob;
}
