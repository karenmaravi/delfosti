import { ProductModel } from "../../infraestructure/models/product.model";
import { ProductEntity } from "../entities/product.entity";

export interface ProductRepository {
  list(): Promise<ProductEntity[]>;
  create(params: ProductEntity): Promise<any>;
  getProduct(sku: string): Promise<ProductModel | null>;
  update(sku: string, data: any): Promise<any>;
}
