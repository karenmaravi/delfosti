export interface OrderEntity {
  orderCode?: number;
  orderDate?: Date;
  receptionDate?: Date;
  dispatchDate?: Date;
  deliveryDate?: Date;
  userRegistCode: number;
  deliveryUserCode?: number;
  orderStatus: string;
}