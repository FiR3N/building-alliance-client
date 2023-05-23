export interface IMixture {
  id: number;
  name: string;
  typeid: number;
  unitOfMeasurement: string;
  priceWithVAT: number;
  priceWithoutVAT: number;
  createdAt?: string;
  updatedAt?: string;
}
