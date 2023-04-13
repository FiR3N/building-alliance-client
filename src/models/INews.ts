import { IInfos } from "./IInfos";

export interface INews {
  id: number;
  name: string;
  description: string;
  img: string;
  info: IInfos[];
  createdAt?: string;
  updatedAt?: string;
}
