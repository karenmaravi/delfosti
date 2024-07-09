export interface ValidateStockInterface {
  validateFinal: Boolean;
  detail: OrderDetailStockInterface[]
}

interface OrderDetailStockInterface {
  sku: string;
  quantityProduct: number;
  unitPrice: number;
  actualStock: number; 
  newStock: number; 
  validate: Boolean;
}