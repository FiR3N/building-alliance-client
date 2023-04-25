import { IInfos } from "./IInfos";

export interface IServiceInfos extends Omit<IInfos, "newsId"> {
  serviceId: number;
}

export interface IService {
  id: number;
  name: string;
  image: string;
  infos: IInfos[];
  createdAt?: string;
  updatedAt?: string;
}
