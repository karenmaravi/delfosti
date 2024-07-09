import { Request, Response } from "express";
import { OrderStatusUseCase } from "../../application/uses-cases/order-status.use-case";

export class OrderStatusContoller {
  constructor(
    private orderStatusUseCase: OrderStatusUseCase,
  ) {}
  orderStatuslDefault = async() => {
    return this.orderStatusUseCase.insertStatusDefault();
  }

  listAll = async(req: Request, res: Response) => {
    const user = await this.orderStatusUseCase.listAll();
    console.log('user', user);
    res.send(user);
  }

  create = async(req: Request, res: Response) => {
    const user = await this.orderStatusUseCase.create(req.body);
    console.log('user', user);
    res.send(user);
  }
}