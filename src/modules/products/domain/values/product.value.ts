import { ProductEntity } from "../entities/product.entity";

export class ProductValues implements ProductEntity {
  sku: string;
  productName: string;
  productType: string;
  productLabel: string;
  price: number;
  stock: number;
  unitMeasurement: string;

  constructor({
    sku,
    productName,
    productType,
    productLabel,
    price,
    stock,
    unitMeasurement,
  }: {
    sku: string,
    productName: string,
    productType: string,
    productLabel: string,
    price: number,
    stock: number,
    unitMeasurement: string,
  }) {
    this.sku = sku;
    this.productName = productName;
    this.productType = productType;
    this.productLabel = productLabel;
    this.price = price;
    this.stock = stock;
    this.unitMeasurement = unitMeasurement;
  }
}