import { ProductEntity } from "../../domain/entities/product.entity";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { ProductModel } from "../models/product.model";

export class ProductAdapter implements ProductRepository {
  async list(): Promise<ProductEntity[]> {
    const user = await ProductModel.find();
    return user
  }

  public async create(params: any): Promise<any> {
    try {
      const create = await ProductModel.create(params);
      const entity = await ProductModel.save(create);
      return entity
    } catch (error) {
      console.log(error)
      return '99'
    }
  }

  async getProduct(sku: string): Promise<ProductModel | null> {
    return await ProductModel.findOne({ where : { sku }});
  }

  async update(sku: string, data: any): Promise<any> {
    console.log('UPDATE', sku, data)
    return await ProductModel.update({sku}, data);
  }
}
