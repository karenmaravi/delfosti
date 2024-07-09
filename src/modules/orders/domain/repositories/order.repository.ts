import { OrderModel } from "../../infraestructure/models/order.model";
import { OrderDetailModel } from "../../infraestructure/models/order_detail.model";
import { OrderDetailEntity } from "../entities/order-detail.entity";
import { OrderEntity } from "../entities/order.entity";

export interface OrderRepository {
  listAllOrder(): Promise<OrderModel[]>;
  getOrder(orderCode: number): Promise<OrderModel | null>;
  createOrder(params: OrderEntity): Promise<OrderModel>;
  getOrderDetail(orderCode: number): Promise<OrderDetailModel[] | null>;
  createOrderDetail(params: OrderDetailEntity): Promise<OrderDetailModel | string>;
  updateOrder(orderCode: number, data: any): Promise<any>;
}
