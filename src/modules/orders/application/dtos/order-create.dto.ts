import { IsDecimal, IsInt, IsNotEmpty, IsString } from "class-validator";

export class OrderCreateDto {
  @IsInt({ message: 'El campo userRegistCode debe ser integer.' })
  @IsNotEmpty({ message: 'El campo userRegistCode no puede estar vacío o null.' })
  userRegistCode: number;

  @IsNotEmpty({ message: 'El campo orderDetail no puede estar vacío o null.' })
  orderDetail: [OrderDetailDto];
}

export class OrderDetailDto {
  @IsString({ message: 'El campo sku debe ser string.' })
  @IsNotEmpty({ message: 'El campo orderDetail no puede estar vacío o null.' })
  sku: string;

  @IsInt({ message: 'El campo quantityProduct debe ser string.' })
  @IsNotEmpty({ message: 'El campo quantityProduct no puede estar vacío o null.' })
  quantityProduct: number;

  @IsDecimal()
  @IsNotEmpty({ message: 'El campo unitPrice no puede estar vacío o null.' })
  unitPrice: number;
}