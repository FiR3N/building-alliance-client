import { IInfos } from "./IInfos";

export interface INews {
  id: number;
  name: string;
  description: string;
  img: string;
  date: string;
  infos: IInfos[];
  createdAt?: string;
  updatedAt?: string;
}
