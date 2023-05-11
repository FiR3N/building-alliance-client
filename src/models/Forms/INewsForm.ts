import { IInfos } from "../Entity/IInfos";

export default interface INewsForm {
  id: number;
  name: string;
  description: string;
  date: string;
  image: Blob;
  info: IInfos[];
}
