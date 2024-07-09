export interface OrderDetailEntity {
  orderCode: number;
  sku: string;
  quantityProduct: number;
  unitPrice: number;
  totalAmount: number;
  active?: number;
}