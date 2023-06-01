export interface IVehicle {
  id: number;
  name: string;
  priceWithVAT: number;
  priceWithoutVAT: number;
  createdAt?: string;
  updatedAt?: string;
}
