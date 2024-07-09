import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { UserModel } from '../../../users/infraestructure/models/user.model';
import { OrderStatusModel } from './order_status.model';

@Entity({ name: 'tb_order', synchronize: true })
export class OrderModel extends BaseEntity{
  @PrimaryGeneratedColumn({
    name: 'order_code',
    type: 'int',
    comment: 'Codigo de Producto',
  })
  orderCode: number;

  @Column({
    name: 'order_date',
    type: 'date',
    comment: 'Fecha de pedido',
    default: () => 'GETDATE()'
  })
  orderDate: Date;

  @Column({
    name: 'reception_date',
    type: 'date',
    comment: 'Fecha de recepcion',
    nullable: true,
  })
  receptionDate: Date;

  @Column({
    name: 'dispatch_date',
    type: 'date',
    comment: 'Fecha de despacho',
    nullable: true,
  })
  dispatchDate: Date;

  @Column({
    name: 'delivery_date',
    type: 'date',
    comment: 'Fecha de entrega',
    nullable: true,
  })
  deliveryDate: Date;

  @ManyToOne(() => UserModel, (user) => user.userCode)
  @Column({
    name: 'user_regist',
    type: 'int',
    comment: 'Codigo de usuario de  Registro',
    nullable: true,
  })
  @JoinColumn({
    name: 'user_regist',
  })
  userRegistCode: UserModel


  @ManyToOne(() => UserModel, (user) => user.userCode)
  @Column({
    name: 'delivery_man',
    type: 'int',
    comment: 'Codigo de usuario de Repartidor',
    nullable: true,
  })
  @JoinColumn({
    name: 'delivery_man',
    foreignKeyConstraintName: 'FK-tb_order-delivery_man-tb_user-user_code'
  })
  deliveryUserCode: UserModel


  @ManyToOne(() => OrderStatusModel, (user) => user.statusCode)
  @Column({
    name: 'status_code',
    type: 'char',
    comment: 'Estado de Pedido'
  })
  @JoinColumn({
    name: 'status_code',
    foreignKeyConstraintName: 'FK-tb_order-status_code-tb_status-status_code'
  })
  orderStatus: string;
}
