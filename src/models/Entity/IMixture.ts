export interface IMixture {
  id: number;
  name: string;
  typeId: number;
  unitOfMeasurement: string;
  priceWithVAT: number;
  priceWithoutVAT: number;
  createdAt?: string;
  updatedAt?: string;
}
