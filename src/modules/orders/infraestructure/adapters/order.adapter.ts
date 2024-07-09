import { OrderDetailEntity } from "../../domain/entities/order-detail.entity";
import { OrderEntity } from "../../domain/entities/order.entity";
import { OrderRepository } from "../../domain/repositories/order.repository";
import { OrderModel } from "../models/order.model";
import { OrderDetailModel } from "../models/order_detail.model";

export class OrderAdapter implements OrderRepository {
  async listAllOrder(): Promise<OrderModel[]> {
    const order = await OrderModel.find();
    return order;
  }

  async getOrder(orderCode: number): Promise<OrderModel | null> {
    const order = await OrderModel.findOne({ where: { orderCode } });
    return order;
  }

  async createOrder(params: any): Promise<OrderModel> {
    console.log('createOrder', params);
    const create = await OrderModel.create(params);
    const entity = await OrderModel.save(create);
    return entity
  }

  async getOrderDetail(orderCode: number): Promise<OrderDetailModel[] | null> {
    const detail = await OrderDetailModel.find({ where: { orderCode } });
    return detail;
  }

  async createOrderDetail(params: any): Promise<OrderDetailModel | string> {
    try {
      const create = await OrderDetailModel.create(params);
      const entity = await OrderDetailModel.save(create);
      return entity
    } catch (error) {
      return '99'
    }
  }
  async updateOrder(orderCode: number, data: any): Promise<any> {
    console.log('orderCode', orderCode)
    console.log('data', data)
    return await OrderModel.update({orderCode}, data);
  }
}
