import { IWorksInfos } from "../Entity/IWorks";

export default interface IWorkForm {
  id: number;
  name: string;
  date: string;
  image: Blob;
  images: any[];
  info: IWorksInfos[];
}
