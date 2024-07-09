import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class OrderStatusCreateDto {
  @IsString({ message: 'El campo statusCode debe ser string.' })
  @IsNotEmpty({ message: 'El campo statusCode no puede estar vacío o null.' })
  statusCode: string;

  @IsString({ message: 'El campo statusName debe ser string.' })
  @IsNotEmpty({ message: 'El campo statusName no puede estar vacío o null.' })
  statusName: string;

  @IsInt({ message: 'El campo hierarchyOrder debe ser integer.' })
  @IsNotEmpty({ message: 'El campo hierarchyOrder no puede estar vacío o null.' })
  hierarchyOrder: number;
}