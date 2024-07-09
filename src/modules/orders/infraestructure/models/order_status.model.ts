import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tb_order_status', synchronize: true })
export class OrderStatusModel extends BaseEntity{
  @PrimaryColumn({
    name: 'status_code',
    type: 'char',
    comment: 'Codigo de Estado',
  })
  statusCode: string;

  @Column({
    name: 'status_name',
    type: 'varchar',
    comment: 'Nombre de estado de orden',
  })
  statusName: string;

  @Column({
    name: 'hierarchyOrder',
    type: 'int',
    comment: 'Nivel de Jerarquia',
  })
  hierarchyOrder: number;

  @Column({
    name: 'active',
    type: 'bit',
    comment: 'Estado activo?',
    default: 1,
  })
  statusActive: number;
}
