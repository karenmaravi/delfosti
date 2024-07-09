import { OrderStatusEntity } from "../../domain/entities/order-status.entity";
import { OrderStatusRepository } from "../../domain/repositories/order-status.repository";
import { OrderStatusModel } from "../models/order_status.model";

export class OrderStatusAdapter implements OrderStatusRepository {
  getStatus(statusCode: string): Promise<OrderStatusModel | null> {
    return OrderStatusModel.findOne({ where: { statusCode }});
  }

  async list(): Promise<OrderStatusModel[] | null> {
    const arrayStatus = await OrderStatusModel.find();
    if (arrayStatus.length === 0) {
      return null;
    }
    return arrayStatus;
  }

  async create(params: any): Promise<any> {
    try {
      const create = await OrderStatusModel.create(params);
      const entity = await OrderStatusModel.save(create);
      return entity
    } catch (error) {
      return '99'
    }
  }
}
