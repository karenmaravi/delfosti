import { OrderStatusEntity } from "../entities/order-status.entity";

export class OrderStatusValues implements OrderStatusEntity {
  statusCode: string;
  statusName: string;
  hierarchyOrder: number;
  statusActive?: number;

  constructor({
    statusCode,
    statusName,
    hierarchyOrder,
    statusActive,
  }: {
    statusCode: string,
    statusName: string,
    hierarchyOrder: number;
    statusActive?: number,
  }) {
    this.statusCode = statusCode;
    this.statusName = statusName;
    this.hierarchyOrder = hierarchyOrder;
    this.statusActive = statusActive;
  }
}