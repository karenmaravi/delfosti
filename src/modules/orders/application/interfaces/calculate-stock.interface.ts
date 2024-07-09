import { ResponseInterface } from "../../../../shared/interfaces/response";

export interface CalculateStockInterface extends ResponseInterface {
  data: ValuesStockInterface
}

interface ValuesStockInterface { 
  actualStock: number;
  newStock: number;
}