import { IInfos } from "./IInfos";

export interface IService {
  id: number;
  name: string;
  image: string;
  infos: IInfos[];
  createdAt?: string;
  updatedAt?: string;
}
