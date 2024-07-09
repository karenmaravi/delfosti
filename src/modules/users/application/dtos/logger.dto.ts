import { IsNotEmpty, IsString } from "class-validator";

export class LoggerDto {
  @IsString({ message: 'El campo email debe ser string.' })
  @IsNotEmpty({ message: 'El campo email no puede estar vacío o null.' })
  email: string;

  @IsString({ message: 'El campo password debe ser string.' })
  @IsNotEmpty({ message: 'El campo password no puede estar vacío o null.' })
  password: string;
}
