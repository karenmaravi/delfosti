import { BaseEntity, PrimaryColumn, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tb_product', synchronize: true })
export class ProductModel extends BaseEntity{
  @PrimaryColumn({
    name: 'sku',
    type: 'varchar',
    comment: 'Codigo de Producto',
  })
  sku: string;

  @Column({
    name: 'product_name',
    type: 'varchar',
    comment: 'Nombre de producto',
  })
  productName: string;

  @Column({
    name: 'product_type',
    type: 'varchar',
    comment: 'Tipo de producto',
    nullable: true,
  })
  productType: string;

  @Column({
    name: 'product_label',
    type: 'varchar',
    comment: 'Etiqueta de producto',
  })
  productLabel: string;

  @Column({
    name: 'price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    comment: 'Precio de producto',
  })
  price: number;

  @Column({
    name: 'unit_measurement',
    type: 'varchar',
    comment: 'Unidad de Medida',
  })
  unitMeasurement: string;

  @Column({
    name: 'stock',
    type: 'int',
    comment: 'Stock',
  })
  stock: number;

  @Column({
    name: 'active',
    type: 'bit',
    comment: 'Producto activo?',
    default: 1
  })
  active: number;
}
