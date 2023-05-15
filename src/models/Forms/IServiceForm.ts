import { IServiceInfos } from "../Entity/IService";

export default interface IServiceForm {
  id: number;
  name: string;
  image: Blob;
  info: IServiceInfos[];
}
