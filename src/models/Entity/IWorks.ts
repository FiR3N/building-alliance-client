import { IImages } from "./IImages";
import { IInfos } from "./IInfos";

export interface IWorksInfos extends Omit<IInfos, "newsId"> {
  workId: number;
}

export interface IWork {
  id: number;
  name: string;
  image: string;
  date: string;
  infos: IWorksInfos[];
  images: IImages[];
  createdAt?: string;
  updatedAt?: string;
}
