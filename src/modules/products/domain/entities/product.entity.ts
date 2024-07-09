export interface ProductEntity {
  sku: string;
  productName: string;
  productType: string;
  productLabel?: string;
  price: number;
  unitMeasurement: string;
  stock: number;
  active?: number;
}
