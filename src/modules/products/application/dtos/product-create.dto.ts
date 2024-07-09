import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ProductCreateDto {
  @IsString({ message: 'El campo sku debe ser string.' })
  @IsNotEmpty({ message: 'El campo sku no puede estar vacío o null.' })
  sku: string;

  @IsString({ message: 'El campo productName debe ser string.' })
  @IsNotEmpty({ message: 'El campo productName no puede estar vacío o null.' })
  productName: string;

  @IsString({ message: 'El campo productType debe ser string.' })
  @IsNotEmpty({ message: 'El campo productType no puede estar vacío o null.' })
  productType: string;

  @IsString({ message: 'El campo productLabel debe ser string.' })
  @IsOptional()
  productLabel: string;

  @IsDecimal()
  @IsNotEmpty({ message: 'El campo price no puede estar vacío o null.' })
  price: number;

  @IsString({ message: 'El campo unitMeasurement debe ser string.' })
  @IsNotEmpty({ message: 'El campo unitMeasurement no puede estar vacío o null.' })
  unitMeasurement: string;

  @IsInt({ message: 'El campo stock debe ser integer.' })
  @IsNotEmpty({ message: 'El campo stock no puede estar vacío o null.' })
  stock: number;
}