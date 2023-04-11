export interface IEmployee {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  description: string;
  post: string;
  img: string;
  telephone: string;
  email: string;
  isShowable: boolean;
  entry_to_work: Date;
  createdAt?: string;
  updatedAt?: string;
}
