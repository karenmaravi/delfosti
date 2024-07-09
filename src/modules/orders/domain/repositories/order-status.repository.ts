import { OrderStatusModel } from "../../infraestructure/models/order_status.model";
import { OrderStatusEntity } from "../entities/order-status.entity";

export interface OrderStatusRepository {
  list(): Promise<OrderStatusModel[] | null>;
  create(params: OrderStatusEntity): Promise<any>;
  getStatus(statusCode: string): Promise<OrderStatusModel | null>;
}
