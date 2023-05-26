import { IImages } from "./IImages";

export interface ICertificateImages extends Omit<IImages, "workId"> {
  certificateId: number;
}

export interface ICertificate {
  id: number;
  description: string;
  image: string;
  images: ICertificateImages[];
  createdAt?: string;
  updatedAt?: string;
}
