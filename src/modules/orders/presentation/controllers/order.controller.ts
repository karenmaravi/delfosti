import { Request, Response } from "express";
import { OrderUseCase } from "../../application/uses-cases/order.use-case";

export class OrderContoller {
  constructor(
    private orderUseCase: OrderUseCase,
  ) {}

  listAll = async(req: Request, res: Response) => {
    const user = await this.orderUseCase.listAll();
    console.log('user', user);
    res.send(user);
  }

  create = async(req: Request, res: Response) => {
    const order = await this.orderUseCase.generateOrder(req.body);
    console.log('order', order);
    res.status(order.statusCode).send(order);
  }

  updateStatus = async(req: Request, res: Response) => {
    const order = await this.orderUseCase.statusChange(req.body);
    console.log('order', order);
    res.send(order);
  }
}