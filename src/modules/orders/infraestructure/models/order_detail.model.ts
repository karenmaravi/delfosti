import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { OrderModel } from './order.model';
import { ProductModel } from '../../../products/infraestructure/models/product.model';

@Entity({ name: 'tb_order_detail', synchronize: true })
export class OrderDetailModel extends BaseEntity{
  @PrimaryColumn({
    name: 'order_code',
    type: 'int',
    comment: 'Codigo de Producto',
  })
  @ManyToOne(() => OrderModel, (order) => order.orderCode)
  @JoinColumn({name: 'order_code'})
  orderCode: number;

  @PrimaryColumn({
    name: 'sku',
    type: 'varchar',
    comment: 'Codigo de Producto',
  })
  @ManyToOne(() => ProductModel, (product) => product.sku)
  @JoinColumn({name: 'sku'})
  sku: string;

  @Column({
    name: 'quantity',
    type: 'int',
    comment: 'Cantidad de Producto',
  })
  quantityProduct: number;

  @Column({
    name: 'unit_price',
    type: 'decimal',
    comment: 'Precio Unitario',
  })
  unitPrice: number;

  @Column({
    name: 'total_amount',
    type: 'decimal',
    comment: 'Monto ',
  })
  totalAmount: number;

  @Column({
    name: 'detail_active',
    type: 'bit',
    comment: 'Estado detalle',
    default: 1
  })
  active: number;
}
