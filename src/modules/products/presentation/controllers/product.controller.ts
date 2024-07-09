import { Request, Response } from "express";
import { ProductUseCase } from "../../application/user-cases/product.user-case";

export class ProductContoller {
  constructor(
    private productUseCase: ProductUseCase,
  ) {}

  productsDefault = async() => {
    return this.productUseCase.createProductDefault();
  }

  listAll = async(req: Request, res: Response) => {
    const user = await this.productUseCase.listAll();
    console.log('user', user);
    res.send(user);
  }

  create = async(req: Request, res: Response) => {
    const user = await this.productUseCase.create(req.body);
    console.log('user', user);
    res.send(user);
  }
}