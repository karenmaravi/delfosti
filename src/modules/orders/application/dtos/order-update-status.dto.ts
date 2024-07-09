import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class OrderUpdateDto {
  @IsInt({ message: 'El campo userRegistCode debe ser integer.' })
  @IsNotEmpty({ message: 'El campo userRegistCode no puede estar vacío o null.' })
  orderCode: number;

  @IsString({ message: 'El campo orderStatus debe ser integer.' })
  @IsNotEmpty({ message: 'El campo orderStatus no puede estar vacío o null.' })
  orderStatus: string;

  @IsInt({ message: 'El campo userRegistCode debe ser integer.' })
  @IsNotEmpty({ message: 'El campo userRegistCode no puede estar vacío o null.' })
  userRegistCode: number;
}
